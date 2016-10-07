require('selenium-download').ensure('./node_modules/nightwatch/bin/', function(error) {
    if (error) {
        return console.log(error);
    } else {
        console.log('✔ Selenium & Chromedriver downloaded to:', './bin');
    }
});
