# Wordpress Theme Boilerplate
A kick starter Wordpress theme development stack. Simple Docker setup with contained phpMyAdmin + full Gulp workflow and starter theme files.

(This is work in progress, don't get too excited, I'm only getting started!)

## Quick Start

Build and run the Wordpress image by running `docker-compose up -d` from the project directory.

Complete the Wordpress setup in your browser: http://localhost:8000


## Documentation

### Pre-requisites

Docker removes a lot of the setup hassle and makes it incredibly easy to get a contained environment setup with Wordpress installed.

Install Docker from https://www.docker.com/get-started
and Docker-Compose from https://docs.docker.com/compose/install/

### Building the project

Build and run the Wordpress image by running `docker-compose up -d` from the project directory.

Complete the Wordpress setup in your browser: http://localhost:8000

PhpMyAdmin will now be available at: http://localhost:8080/

### Shutdown and cleanup

The command `docker-compose down` removes the containers and default network, but preserves your WordPress database.

The command `docker-compose down --volumes` removes the containers, default network, and the WordPress database.