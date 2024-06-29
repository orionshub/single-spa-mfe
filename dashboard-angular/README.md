# Dashboard

Consist increment-decrement-react app (dashboard-actions) as a nest MFE using parcel and shows that an MFE can reside in an another MFE

## Important

- to consume the shared state, we need to push this to `singleSpaWebpackConfig.externals` array in `extra-webpack.config.js`
- shared state needs two things after pushed to externals
  - type file `./src/shared-state.d.ts`
  - path so that compiler knows where to find it's type
    - check `tsconfig.app.json`
