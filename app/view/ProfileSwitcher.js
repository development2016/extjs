Ext.define('Kds.view.ProfileSwitcher', {
    extend: 'Ext.Component',
    xtype: 'logoutKds',
    cls: 'ks-profile-switcher',


    initComponent: function() {

        menu = new Ext.menu.Menu({
            items: [{
                text : 'Logout',
                handler: 'onClickButton',
            }]
        });

        this.on({
            scope: this,
            click: function (e) {
                menu.showBy(this);
            },
            element: 'el'
        });

        this.callParent();
    },


});
