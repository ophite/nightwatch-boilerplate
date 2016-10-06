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
        selectCountry: {
            selector: '#headquartersCountry .Select-arrow-zone'
        },
        selectCountryMenuItem: {
            selector: '#headquartersCountry .Select-menu-outer'
        },
    }
};
