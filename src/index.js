import express from 'express';
import template from './components/templates';
import RenderApp from './server';

const port = 3000;
const app = express();
app.use(express.static('dist'));

const prepareResoponse = (req, res) => {
    const { preloadedState, content}  = RenderApp(req);
    const response = template("Server Rendered Page", preloadedState, content);
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send(response);
}

// server rendered home page
app.get('*', (req, res) => {
    prepareResoponse(req, res);
});
/*app.get('/recent-feeds', (req, res) => {
    prepareResoponse(req, res);
});
app.get('/item_:id', (req, res) => {
    prepareResoponse(req, res);
});*/

app.listen(port);
console.log(`Serving at http://localhost:${port}`);