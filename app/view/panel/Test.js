
Ext.define('Kds.view.panel.Test', {
    extend: 'Ext.grid.Panel',
    xtype: 'form-test',
    
    requires: [
        'Kds.model.ProfilView',
        'Ext.grid.RowNumberer',
    ],
    //title: 'HBox Form Panel',
    bodyPadding: '5 5 0',
    width: 600,
    
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },
    
    defaults: {
        border: false,
        xtype: 'panel',
        flex: 1,
        layout: 'anchor'
    },


    
initComponent: function () {

var store = Ext.create('Kds.model.ProfilView');

        Ext.apply(this, {
            store: store,


            // grid columns
            columns:[{
                text     : 'Nama',
                locked   : true,
                width    : 230,
                sortable : true,
                dataIndex: 'name'
            }],


        
    });
        this.callParent();

},
    

});