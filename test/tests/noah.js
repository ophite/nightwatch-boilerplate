module.exports = {
    '04-34.Countries': function (browser) {
        var findCompaniesPage = browser.page.findCompanies();
        debugger

        findCompaniesPage.navigate()
            .waitForElementVisible('@headerCompanyList')
            .click('@selectCountryMenu')
            .click('@selectCountryMenuItem')
            .waitForElementVisible('@companyListGroup', 5000)
            .waitForElementVisible('@companyCountry', 5000)
            // .assert.containsText('@companyCountry', 'Germany');

        browser.elements('css selector', findCompaniesPage.elements.companyCountry.selector, function (result) {
            debugger
            console.log('>>>>>>>>> > 5' + JSON.stringify(arguments))
            browser.assert.equal(result.value.length > 5, true);
        });

        browser.end();
    }
};
