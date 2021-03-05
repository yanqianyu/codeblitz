const path = require('path');

/**
 * @typedef {import('webpack').Configuration} Configuration
 * @typedef {Object} NodePolyfill
 * @property {Configuration['resolve']['alias']} alias
 * @property {Configuration['resolve']['fallback']} fallback
 * @property {Record<string, any>} provider
 */

/** @type {NodePolyfill} */
exports.nodePolyfill = {
  alias: {
    assets: require.resolve('assert/'),
    buffer: require.resolve('buffer/'),
    'iconv-lite-umd': resolvePolyfill('iconv-lite-umd'),
  },
  fallback: {
    net: false,
    child_process: false,
    http: false,
    https: false,
    fs: false,
    path: require.resolve('path-browserify'),
    os: resolvePolyfill('os'),
    crypto: resolvePolyfill('crypto'),
  },
  provider: {
    process: resolvePolyfill('process'),
    Buffer: ['buffer', 'Buffer'],
  },
};

exports.config = {
  appEntry: 'alex',
  workerEntry: 'worker-host',
  webviewEntry: 'webview',
};

// just for shared
exports.manifestSeed = {};

function resolvePolyfill(moduleName) {
  return path.join(__dirname, '../../polyfill', moduleName);
}
