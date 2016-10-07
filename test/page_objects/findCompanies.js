module.exports = {
    url: function() {
        return this.api.launchUrl + '/companies';
    },
    elements: {
        headerCompanyList: {
            selector: '.header-company-list'
        },
        companyListGroup: {
            selector: '.company-list ul.list-group'
        },
        companyListItem: {
            selector: '.company-list ul.list-group li.company-ticket'
        },
        selectCountryMenu: {
            selector: '#headquartersCountry .Select-arrow-zone'
        },
        selectCountryMenuItem: {
            selector: '.Select-option:nth-child(19)'
        },
        companyCountry: {
            selector: '.country-company'
        },
    }
};
