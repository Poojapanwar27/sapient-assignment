import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from './components/pages';
import store from './stores';

const RenderApp = (req) => {
  const context = {};
  let content = renderToString(     
     <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
      </Provider>
    );
  const preloadedState = store.getState();
  return {content, preloadedState};
}

export default RenderApp;