# cra-esm-bug

```
cd basic-cra
yarn
yarn start # you should see 'esm' written in the page
yarn test  # in test mode, the commonjs version is loaded contrary to start mode where it was the esm one
```

Seems yo be a known issue https://github.com/facebook/create-react-app/issues/3334 waiting for esm support in node
