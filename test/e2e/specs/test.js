// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('#app > div.header.ant-layout-header', 5000)
      .assert.elementPresent('.ant-menu-item > a')
      .assert.elementPresent('div.home-content > a > button')
      .click('div.home-content > a > button')
      .waitForElementVisible('div.page-content.ant-layout-content', 7500)
      .assert.containsText('div.page-content.ant-layout-content > div > h2:nth-child(1)', 'CALL FOR PAPERS')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .end()
  }
}
