
Ext.define('KitchenSink.view.panel.ChildSessionForm', {
    extend: 'Ext.window.Window',
    xtype: 'binding-child-session-form',

    bind: {
        title: '{title}'
    },
    layout: 'fit',
    modal: true,
    width: 500,
    height: 430,
    closable: true,

    items: {
        xtype: 'form',
        reference: 'form',
        bodyPadding: 10,
        border: false,
        // use the Model's validations for displaying form errors
        modelValidation: true,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name',
            reference: 'name',
            msgTarget: 'side',
            bind: '{theCustomer.name}'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Phone',
            reference: 'phone',
            msgTarget: 'side',
            bind: '{theCustomer.phone}'
        }]
    },


});