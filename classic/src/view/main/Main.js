Ext.define('Kds.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Kds.view.main.MainController',
        'Kds.view.main.MainModel',
    ],
    xtype: 'app-main',

    controller: 'main',
    viewModel: 'main',

    layout: 'border',
    stateful: true,
    stateId: 'kds-viewport',

    items: [{
        region: 'north',
        xtype: 'appHeader',
    },{
        region: 'center',
        xtype: 'contentPanel',
        reference: 'contentPanel',
        ariaRole: 'main',
        dockedItems: [{
            xtype: 'navigation-toolbar'
        }]
    }, {
        xtype: 'codePreview',
        title: 'Penerangan',
        region: 'east',
        id: 'east-region',
        itemId: 'codePreview',
        stateful: true,
        stateId: 'mainnav.east',
        split: true,
        collapsible: true,
        collapsed: true,
        width: 350,
        minWidth: 100
    }],


});
