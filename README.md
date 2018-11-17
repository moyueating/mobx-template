来自[Create React App](https://github.com/facebook/create-react-app)

>react + react-router + axios + mobx

>样式默认使用sass，使用vw适配移动端，若不需要vw适配，注释相应代码即可

```diff
module.exports = {
  "plugins": [
    require('postcss-flexbugs-fixes'),
    require("autoprefixer")({
      flexbox: 'no-2009',
      stage: 3,
    }),
-    require("postcss-aspect-ratio-mini"),
-    require("postcss-write-svg")({ utf8: false }),
-    require("postcss-cssnext"),
-    require("postcss-px-to-viewport")({
-      viewportWidth: 750,
-      viewportHeight: 1334,
-      unitPrecision: 3,
-      viewportUnit: 'vw',
-      selectorBlackList: ['.ignore', '.hairlines'],
-      minPixelValue: 1,
-      mediaQuery: false
-    }),
-    require("postcss-viewport-units"),
-    require("cssnano")({
-      preset: "advanced",
-      autoprefixer: false,
-      "postcss-zindex": false
-    })
  ]
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


