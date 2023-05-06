// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    "postcss-pxtorem": {
      rootValue({
        file
      }) {
        return file.indexOf('vant') !== -1 ? 16 : 32;
      },
      propList: ['*']
    }
  }
}
