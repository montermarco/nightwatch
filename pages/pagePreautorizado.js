module.exports = {
    url: 'http://localhost:8180/portal-app/Portal/iniciar-sesion.xhtml',

    elements: {        
        mailLoginInput : 'input[name="email"]',
        passwordLoginInput : 'input[name="password"]',
        submitBtn : '#btn-link-login',
        logoutSpan : '#pnlHeaderIn > div.header.nav-down.header-private.noCliente > div > div.contentMain-menu > div > div > article > i',
        exit : '#pnlHeaderIn > div.header.nav-down.header-private.noCliente > div > div.contentMain-menu > div > div > ul > li.menu-3 > a'

    },

    commands: [{
        setUser (value) {   
            return this 
                .setValue('@mailLoginInput', value)
        },

        setPassword (value) {
            return this
                .setValue('@passwordLoginInput', value)
        },

        loginIn() {
            return this 
                .click('@submitBtn') 
        },

        logout(){
            return this
                .pause(3000)
                .click('@logoutSpan')
                .pause(2000)
                .click('@exit')
        },

    }]
}


