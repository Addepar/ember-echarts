/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-echarts',

  options: {
    nodeAssets: {
      echarts: {
        srcDir: 'dist',
        import: ['echarts.js']
      }
    }
  }
};
