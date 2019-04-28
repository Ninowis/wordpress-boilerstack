# Wordpress Theme Boilerplate
A kick starter Wordpress theme development stack. Simple Docker setup with contained phpMyAdmin + full Gulp workflow and starter theme files.

(This is work in progress, don't get too excited, I'm only getting started!)

## Quick Start

Run `npm install` to install project dpendencies.

Build and run the Wordpress image by running `npm run docker` from the project directory.

Complete the Wordpress setup in your browser: http://localhost:8000

Wordpress admin will be available at: http://localhost:8000/wp-admin/

## Documentation

### Pre-requisites

Docker removes a lot of the setup hassle and makes it incredibly easy to get a contained environment setup with Wordpress installed.

Install Docker from https://www.docker.com/get-started
and Docker-Compose from https://docs.docker.com/compose/install/

### Running Wordpress

Build and run the Wordpress image by running `npm run docker` from the project directory.

Complete the Wordpress setup in your browser: http://localhost:8000

PhpMyAdmin will now be available at: http://localhost:8080/

### Building a Wordpress theme

The `src` folder contains the official Twenty Seventeen and Twenty Nineteen Wordpress themes as a starting point.
Copy one of them or setup your own in an adjacent folder.

Copy `.env.example` into `.env` and edit as per your theme and local settings.

You can now use `npm run theme:zip` to package your theme folder into a zip file, the command will exclude and .git and .scss files and output into a `dist` folder at the root of the project.

Use the packaged .zip file to install as per normal Wordpress procedure (via the admin CMS) in order to test your theme setup functions, or run `npm run theme:update` to copy it into your Wordpress image. Note that the volume the theme is copied to is available to you under `wp-content/themes` and will persists even if you clear your Docker images.

You can also simply run `npm run watch` which will watch over your changes to .css, .js and .php files to update your theme within the Wordpress volume.

### Shutdown and cleanup

The script `npm run docker:down` will run the `docker-compose down` command which removes the containers and default network, but preserves your WordPress database.

The script `npm run docker:clear` will run the  `docker-compose down --volumes` command which removes the containers, default network, and the WordPress database.