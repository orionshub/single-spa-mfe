# Root

Single spa root config project where we define layout and load the other application

## Feature

- loads angular and react app both
- loads assets from node_modules dynamically to provide these to other micro-frontends using `copy-webpack-plugin`
  - it may cause CSP issue (in localhost) to avoid that either
    - run the server on https
    - modify the `<meta http-equiv="Content-Security-Policy" content="..." />` as per the requirement in the `index.ejs` file
      - `style-src` needs to be changed from `style-src 'unsafe-inline' https:;` to `style-src 'self' 'unsafe-inline';`

## Routing

It is using `<single-spa-router>` (single spa template engine) but there are other approach as well to load the applications like hash routing
