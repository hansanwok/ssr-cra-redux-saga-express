import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';

// import our main App Router component
import AppRouter from '../../src/router';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const routerContext = {};

        // render the app as a string
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.baseUrl} context={routerContext}>
                <AppRouter />
            </StaticRouter>
        );

        // now inject the rendered app into our html and send it to the client
        return res.send(
            htmlData
                // write the React app
                .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        );
    });
}
