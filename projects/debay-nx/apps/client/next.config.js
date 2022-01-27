// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {

  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  reactStrictMode: true,

  webpack(config) {

    /**
     * Temporary solution for [Fast Refresh is not working (Windows 10 w/ WSL)](https://github.com/vercel/next.js/discussions/22214)
     */
    // config.watch = true; // Leave commented, this removes [DEP_WEBPACK_WATCH_WITHOUT_CALLBACK] warnings.
    config.watchOptions = {
      /**
       * Add a delay before rebuilding once the first file changed. This allows
       * webpack to aggregate any other changes made during this time period into
       * one rebuild. Pass a value in milliseconds.
       */
      aggregateTimeout: 750,
      /**
       * Check for changes every second. Turn on polling by passing true, or specifying
       * a poll interval in milliseconds.
       *
       * TIP:
       *
       * If watching does not work for you, try out this option. This may help issues
       * with NFS and machines in VirtualBox, WSL, Containers, or Docker. In those
       * cases, use a polling interval and ignore large folders like /node_modules/
       * to keep CPU usage minimal.
       */
      poll: 500,
      /**
       * For some systems, watching many files can result in a lot of CPU or memory
       * usage. It is possible to exclude a huge folder like node_modules using a
       * regular expression.
       */
      ignored: ['**/node_modules', '**/.next'],
      /**
       * Follow symbolic links while looking for a file. This is usually not needed as
       * webpack already resolves symlinks with resolve.symlinks.
       */
      followSymlinks: true,
    };

    return config;

  },

};

module.exports = withNx(nextConfig);
