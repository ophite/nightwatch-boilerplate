module.exports = {
    url: function() {
        return this.api.launchUrl + '/companies/create';
    },
    elements: {
        createPageForm: {
            selector: '.create-page-form'
        },
        inputName: {
            selector: '.create-page-form input[name="name"]'
        },
        inputEmail: {
            selector: '.create-page-form input[name="email"]'
        },
        radioCompanyType: {
            selector: '.create-page-head input[name="companyType"]'
        },
        saveButton: {
            selector: '.create-page-head button[type="submit"]'
        },
        textDanger: {
            selector: '.text-danger'
        }
    }
};
