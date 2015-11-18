
Ext.define('Kds.view.panel.SukarelawanList', {
    extend: 'Ext.grid.Panel',
    xtype: 'sukarelawan',

    requires: [
        'Kds.store.Sukarelawan',
        'Ext.grid.RowNumberer',
    ],

    //columnLines: true,
    forceFit: true,
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Alamat:</b> {alamat}</p>',
            '<p><b>Poskod:</b> {poskod}</p>',
            '<p><b>Kawasan:</b> {state} : {district} : {kampung} </p>',

        {
    
        })
    }],

initComponent: function () {

var store = Ext.create('Kds.store.Sukarelawan');

        Ext.apply(this, {
            store: store,


            // grid columns
            columns:[{

                xtype: 'rownumberer'
            },{
                text     : 'Nama',
                locked   : true,
                width    : 230,
                sortable : true,
                dataIndex: 'nama'
            }, {
                text     : 'No Kad Pengenalan',
                lockable: false,
                width    : 100,
                sortable : true,
                dataIndex: 'no_kp'
            },{
                text     : 'Jantina',
                lockable: false,
                width    : 100,
                sortable : true,
                dataIndex: 'jantina'
            }],
            bbar: Ext.create('Ext.PagingToolbar', {
                store: store,
                displayInfo: true,
                dock: 'bottom',
                //displayMsg: 'Displaying topics {0} - {1} of {2}',
                //emptyMsg: "No topics to display",

            })

        
    });
        this.callParent();

},

});
