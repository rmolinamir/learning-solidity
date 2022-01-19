/**
 * react-app-rewire config override settings that
 * solve this [issue](https://github.com/ChainSafe/web3.js/issues/4659#issuecomment-1004660167).
 */
const path = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const Webpack = require('webpack');

module.exports = {

  webpack(config) {

    const fallback = config.resolve.fallback || {};

    Object.assign(fallback, {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify'),
      url: require.resolve('url')
    });

    config.resolve.fallback = fallback;

    config.plugins = (config.plugins || []).concat([
      new Webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      }),
    ]);

    config.ignoreWarnings = (config.ignoreWarnings || []).concat([
      /Failed to parse source map/,
    ]);

    /**
     * Removing the special restriction added by developers of
     * create-react-app. It is implemented in ModuleScopePlugin
     * to ensure files reside in src/. That plugin ensures that
     * relative imports from app's source directory don't reach
     * outside of it.
     */
    config.resolve.plugins.forEach(plugin => {
      if (plugin instanceof ModuleScopePlugin) {
        plugin.allowedFiles.add(path.resolve('./nft-marketplace-config.js'));
        plugin.allowedFiles.add(path.resolve('./abis/NftMarketplaceContract.json'));
      }
    });

    return config;

  },

  /**
   * The Jest config to use when running your tests.
   * 
   * NOTE: The `jest` field in the module.exports object in config-overrides.js
   * is used to specify a function that can be called to customise the Jest
   * testing configuration in ways that are not possible in the jest section
   * of the package.json file.
   * 
   * [Configuring Jest](https://jestjs.io/docs/configuration).
   */
  jest(config) {

    config.rootDir = __dirname;

    config.roots = [
      '<rootDir>/src',
      '<rootDir>/tests',
    ];

    config.collectCoverageFrom = [
      '<rootDir>/**/*.{js,jsx,ts,tsx}',
      '!<rootDir>/**/*.d.ts'
    ];

    config.testMatch = [
      '<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'
    ];

    const ignorePatternsExceptions = [
      'dom7',
      'ssr-window',
      'swiper',
    ];

    /**
     * TODO: Fix npm package `swiper` issues regarding Jest transform.
     */

    // config.transformIgnorePatterns = (config.transformIgnorePatterns || []).concat([
    //   `node_modules/(?!(${ignorePatternsExceptions.join('|')}))`,
    // ]);

    config.transformIgnorePatterns = (config.transformIgnorePatterns || []).concat([
      `node_modules/(?!(${ignorePatternsExceptions.join('|')}))`,
    ]);

    return config;

  },

}
