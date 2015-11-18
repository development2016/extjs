/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Kds.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Kds',

    requires: [
        'Ext.app.*',
        //'Ext.state.CookieProvider',
        //'Ext.window.MessageBox',
        //'Ext.tip.QuickTipManager',
        'Kds.*',
        //'Ext.chart.*'
    ],
    stores: [
        // TODO: add global / shared stores here
    ],
    views: [
        'Kds.view.login.Login',
        'Kds.view.main.Main'
    ],
    launch: function () {
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
    },

    controllers: [
        'Global',
        //'Samples',
        //'Direct'
    ],

        init: function() {
       // if ('nocss3' in Ext.Object.fromQueryString(location.search)) {
       //     Ext.supports.CSS3BorderRadius = false;
        //    Ext.getBody().addCls('x-nbr x-nlg');
       // }

        Ext.create('Kds.store.Navigation', {
            storeId: 'navigation'
        });

        // Set the default route to start the application.
        //this.setDefaultToken('all');

        //Ext.setGlyphFontFamily('Pictos');
        //Ext.tip.QuickTipManager.init();
        
        //if (!Ext.platformTags.test) {
        //    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
       // }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
