
class BasePage {


    open(path) {
        if (!path)
            path = browser.options.baseUrl;

        return browser.url(path);
    }
}

module.exports = BasePage;
