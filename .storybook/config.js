import React from 'react';
import { configure, addDecorator } from '@storybook/react';

addDecorator((story) => (
  <>
    <style jsx global>{`
      body {
        font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
        color: #111111;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    {story()}
  </>
))

// automatically import all files ending in *.stories.js
configure(require.context('./stories', true, /\.stories\.js$/), module);
