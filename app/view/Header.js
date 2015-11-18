Ext.define('Kds.view.Header', {
    extend: 'Ext.Container',
    xtype: 'appHeader',
    id: 'app-header',
    title: 'Komuniti Development System',
    height: 52,
    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function() {
        document.title = this.title;

        this.items = [{
            xtype: 'component',
            id: 'app-header-logo'
        },{
            xtype: 'component',
            id: 'app-header-title',
            html: this.title,
            flex: 1,
        },{
            xtype: 'button',
            text: 'Logout',
            handler: 'onClickButton',
            margin: '0 10 0 0'
        }];


        this.callParent();
    },

});
