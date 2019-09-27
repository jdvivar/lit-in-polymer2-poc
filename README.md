# /<simple-wc/>

This POC tries to mock the whole front-end architecture for a CMS based on LitElement Web Components.

Firstly, we have a Components Catalog at `/components-catalog`. Its components live in its `/components-catalog/packages` folder with N components. When building with `npm run build`, a `components-catalog/build` folder is created. If we would have a process to publish components as npm packages, we should publish N+1 NPM packages, 1 package for `/components-catalog/build/es5` which has a bundle for ES5 (i.e. IE11) browsers and then N packages for each of the folders at `/components-catalog/build/es6`.

We assume all these packages are installed and available for the browser in our demo page that represents an HTML page served by the cms at `cms-web/index.html` by requiring it as a single package folder in `cms-web/package.json`.

A simple server for the components is necessary to avoid CORS and represent our real life scenario of pages living in the CMS and components living in a front-end server by running from `/cms-web`our server: `npm start`. The simple front-end server configuration is at `/cms-web/dev-server.js`.

# Summary

## Components Catalog
`/components-catalog` and `/components-catalog/packages`

## Front-end Server
`/components-catalog/build`and `/cms-web/dev-server.js`

## Components as NPM packages
`/components-catalog/build/es5` for the single ES5 bundle and `components-catalog/build/es6` for each of the ES6 components

# Next steps

- Use a specific set of polyfills instead of polyfills.io at `/cms-web/index.html`, probably `core-js`
- Use a fresh instance of brXM (hippo) to create the demo page and parse a component using headContributions to load the necessary Web Component definition.