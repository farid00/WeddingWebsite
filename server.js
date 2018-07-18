import React from 'react'
import { match, RoutingContext } from 'react-router'
import ReactDOMServer from 'react-dom/server'
import hogan from 'hogan-express'
import App from './components/App.jsx'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer.jsx'
import { applyMiddleware, createStore } from 'redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import path from 'path'

function renderFullPage(html, image, preloadedState, styleTags) {
  return `
    <!doctype html>
    <html>
      <head>
          <title> Brandman Wedding </title>
          ${styleTags}
          <base href="/">
          <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet" type="text/css" href="/public/css/style.css">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
          crossorigin="anonymous">
          <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Homemade+Apple|Pompiere|Shadows+Into+Light" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800|Roboto:400,500,900" 
          rel="stylesheet">
          <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
      </head>
      <body style="background-size:cover; background-color:#F9F8F6">
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/client.js"></script>
      </body>
    </html>
    `
}
// Express
/*const app = express()
app.engine('html', hogan)
app.set('port', (process.env.PORT || 3000))
app.set('views', path.join(__dirname + 'dist/views'))
app.use('/public', express.static('/Users/matthewbrandman/wedding/dist'))*/
export default function serverRenderer ({clientStats, ServerStats}) {
  return (req, res, next) => {
    const context = {}
    const sheet = new ServerStyleSheet()
    const store = createStore(rootReducer)
    const image = "public/images/Background.jpg"
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <Provider store={store}>
        <StyleSheetManager sheet={sheet.instance}>
          <App/>
        </StyleSheetManager>
        </Provider>
      </StaticRouter>
    )
    const preloadedState = store.getState()
    const styleTags = sheet.getStyleTags()
    if (context.url) {
      res.writeHead(301, {Location: context.url})
      res.end()
    } else {
      res.send(renderFullPage(html, image, preloadedState, styleTags))
    }
  }
}

/*app.listen(app.get('port'))*/