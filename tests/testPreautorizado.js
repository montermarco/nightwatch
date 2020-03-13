module.exports = {
    '@tags' : ['testPreautorizado'],
    'login preautorizado' : function(browser){

    const user = 'newPreauthorized@test.com';
    const password = '1perrito';

    const page = browser.page.pagePreautorizado()    

    page 
        .navigate()
        .setUser(user)
        .setPassword(password)
        .loginIn()
        .logout()

    browser
        .assert.urlContains('http://localhost:8180/portal-app/Portal/index.xhtml')
        .saveScreenshot('./screenshots/kubo.jpg')
 
        

        
    }
}