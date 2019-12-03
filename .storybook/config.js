import { configure } from '@storybook/react';
import './style.less';

// automatically import all files ending in *.stories.js
configure(require.context('./stories', true, /\.stories\.js$/), module);
