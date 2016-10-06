module.exports.command = function (company) {
    var companyCreatePage = this.page.companyCreate();
    var companyOverviewPage = this.page.companyOverview();

    companyCreatePage.navigate()
        .waitForElementVisible('@createPageForm')
        .setValue('@inputName', company.name)
        .setValue('@inputEmail', company.email)
        .setValue('@radioCompanyType', company.type > 1 ? company.type : 1)
        .click('@saveButton')
        .waitForElementVisible(companyOverviewPage.elements.companyName.selector)
        .assert.containsText(companyOverviewPage.elements.companyName.selector, company.name);

    return this;
};
