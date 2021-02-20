import React from 'react';

const Html = ({ content, state, scripts }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Server Side Rendered React App !</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${JSON.stringify(state)}`,
          }}
        />
        {scripts.map((script, index) => (
          <script key={index} src={script} />
        ))}
      </body>
    </html>
  );
};

export default Html;
