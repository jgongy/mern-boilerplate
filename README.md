# Description
Boilerplate code for a MERN stack application.

# How to Upload to Heroku (prerequisite: install Heroku CLI)
The following steps allow you to run this repository on Heroku. As a prerequisite,
you need to 

First, you need to authenticate to Heroku.

        heroku login

We create a new Heroku application with a name.

        heroku create <app name>

To allow Heroku to run the application, we need to specify buildpacks, which
are just scripts that Heroku will run when the app is deployed to install
dependencies. We need a buildpack for NodeJS, TypeScript, and a third buildpack
specify the directory location of our `package.json` file.

        heroku buildpacks:add nodejs
        heroku buildpacks:add https://buildpack-registry.s3.amazonaws.com/buildpacks/zidizei/typescript.tgz
        heroku buildpacks:add https://github.com/timanovsky/subdir-heroku-buildpack

We also need to set environment variables in Heroku that the application
expects to exist. One of these variables is the `MONGODB_URI`, which you can
get by following the steps in this [guide](https://www.mongodb.com/developer/products/atlas/use-atlas-on-heroku/)

        heroku config:set PROJECT_PATH=src
        heroku config:set MONGODB_URI=<MongoDB Atlas URI>

Finally, we need to push the repository to Heroku.

        git push heroku <branch name>

The application should now be hosted on Heroku!
