![WordPress BoilerStack Image](https://repository-images.githubusercontent.com/158602552/f2109880-6a07-11e9-9178-a3edd95349a9)

# WordPress BoilerStack

A kick starter Wordpress theme development stack. Simple Docker setup with contained phpMyAdmin and Wordpress image + full Gulp workflow and starter theme files.

You can start developing your theme in no time with this boilerplate, without even having to install Wordpress or configure any local web server.

## Quick Start

With Node and Docker already installed, from within the project directory:

- Copy `.env.example` into `.env` and edit as per your desired theme name and location (relative to project root).
- Run `npm install` to install project dpendencies.
- Create and build your theme and the Wordpress image with `npm start`
- PhpMyAdmin will now be available at: http://localhost:8080/
- Complete the Wordpress setup in your browser: http://localhost:8000

(Wordpress admin will be available at: http://localhost:8000/wp-admin/)

## Documentation

### Pre-requisites

Docker removes a lot of the setup hassle and makes it incredibly easy to get a contained environment setup with Wordpress installed.

Install Docker from https://www.docker.com/get-started
and Docker-Compose from https://docs.docker.com/compose/install/

You will also need [Node.js](https://nodejs.org/) to run the scripts related to building your theme.

### Running Wordpress

Wordpress docker image will be built with your theme when running `npm start`.

You can also build and run the Wordpress image alone (without theme build) with `npm run docker` from the project directory.

PhpMyAdmin will now be available at: http://localhost:8080/

And your website at: http://localhost:8000/
(You'll be prompted to complete the Wordpress setup if this is your first run.)


### Starting a new theme

Copy `.env.example` into `.env` and edit as per your theme and local settings.

When running `npm start`, if the theme specifiied in your `.env` does not exist yet a new theme codebase and development stack will be created from a TwentyNineteen boilerplate before being compiled into a ready-to-import theme.

You can also run `npm run theme:create` to setup a new theme codebase (and dev stack) without compiling it or launching Docker.


### Building the theme

Use `npm run build` to compile (running the theme `build` npm script) and package your theme into a zip file.

You may also run the build and zip steps separately using:
- `npm run theme:build`
- `npm run theme:zip`

Note that the zip command will exclude any `node_modules`, `sass` folder or `.git` or `.scss` files and output your theme ready for Wordpress into a `dist` folder at the root of the project.


### Installing the theme

Use the packaged .zip file to install as per normal Wordpress procedure (via the admin CMS) in order to test your theme setup functions, or run `npm run theme:update` to copy it into your Wordpress image.

Note that the volume the theme is copied to is available to you under `wp-content/themes` and will persists even if you stop or remove your Docker containers.

You can also simply run `npm run watch` to copy your theme and watch over your changes to .css, .js and .php files to update your theme within the Wordpress volume in Docker.


### Shutdown and cleanup

The script `npm run docker:down` will remove the Docker containers and default network, but preserves your WordPress database.

The script `npm run docker:clear` will remove the containers, default network, and the WordPress database and clear the themes volume.
