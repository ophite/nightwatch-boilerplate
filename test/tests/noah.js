// var conf = require('../../nightwatch.conf.js');

module.exports = {
    'Noah': function (browser) {
        var findCompaniesPage = browser.page.findCompanies();

        findCompaniesPage.navigate()
            .waitForElementVisible('@headerCompanyList')
            .assert.containsText('@headerCompanyList', 'Find Companies')
            .waitForElementVisible('@companyListGroup');

        browser.elements('css selector', findCompaniesPage.elements.companyListItem.selector, function (result) {
            browser.assert.equal(result.value.length > 0, true);
        });

        browser.end();
    }
};
