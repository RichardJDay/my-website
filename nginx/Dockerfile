FROM ubuntu:20.04
WORKDIR /app

# Copy custom nginx config to the container
USER root
RUN apt-get -y update && apt-get -y install nginx

    
COPY nginx/nginx.conf /etc/nginx/nginx.conf



# Update the CA certificates in the container

# Expose port 80 for incoming traffic
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
