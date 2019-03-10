/**
 * template
 * This index.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */

const template = (title, initialState = {}, content = '') => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>${title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Hacker's News"/>

      <!-- Latest compiled and minified CSS -->      
      <link rel="stylesheet" href="/style.css" type="text/css"/>

      <script>
          window.__STATE__ = ${JSON.stringify(initialState)}
      </script>
    </head>
    <body>
        <div id="root">
            ${content}
        </div>
        <script src="/runtime.js"></script>
        <script src="/vendors~bundle.js"></script>
        <script src="/bundle.js"></script>
    </body>
  </html>
`;

export default template;