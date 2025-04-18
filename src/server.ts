import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json()); 
/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

app.use('/email', (req, res) => {
  const { email, name, message } = req.body; // 👈 Extract values from body
  console.log('Received email:', email);
  if (!email || !name || !message) {
    return res.status(400).json({ error: 'Missing email or name in request body' });
  }  
  /**
 *
 * This call sends a message to one recipient.
 *
 */
  const Mailjet = require('node-mailjet');
  const mailjet = Mailjet.apiConnect(
    "664b693d12abbd488555df10f06879a7", "10cdf55a8c51f8b991bbc881c43f6a8e",
    {
      config: {},
      options: {}
    } 
);
  const request = mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
      "Messages": [
        {
          "From": {
            "Email": email,
            "Name": name
          },
          "To": [
            {
              "Email": "richard_live789@hotmail.com",
              "Name": "passenger 1"
            }
          ],
          "Subject": "Your email flight plan!",
          "TextPart": message,
          "HTMLPart": ""
        }
      ]
    })
  request
    .then((result: any) => {
      console.log(result.body)
    })
    .catch((err: any) => {
      console.log(err.statusCode)
    })
    return res.status(200).json({ message: 'Email sent successfully' });
});

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});


/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(app);
