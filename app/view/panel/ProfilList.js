
Ext.define('Kds.view.panel.ProfilList', {
    extend: 'Ext.grid.Panel',
    xtype: 'profil',

    requires: [
        'Kds.store.Profil',
        'Ext.grid.RowNumberer'
    ],


   // columnLines: true,
    forceFit: true,
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Alamat:</b> {address}</p>',
            '<p><b>Poskod:</b> {postcode}</p>',
            '<p><b>Kawasan:</b> {state} : {district} : {kampung} </p>',

        {
    
        })
    }],



initComponent: function () {

var store = Ext.create('Kds.store.Profil');

        Ext.apply(this, {
            store: store,


            // grid columns
            columns:[{

                xtype: 'rownumberer'
            },{
                text     : 'Nama',
                locked   : true,
                width    : 300,
                sortable : true,
                dataIndex: 'name'
            }, {
                text     : 'No Kad Pengenalan',
                flex: 1,
                minWidth: 130,
                sortable : true,
                locked   : false,
                dataIndex: 'ic_no'
            },
            {
                text     : 'Warganegara',
                flex: 1,
                minWidth: 130,
                sortable : true,
                locked   : false,
                dataIndex: 'citizen'
            },
            {
                text     : 'No Telefon (Bimbit)',
                flex: 1,
                minWidth: 130,
                sortable : true,
                locked   : false,
                dataIndex: 'mobile_no'
            },{
                text     : 'No Telefon (Rumah)',
                flex: 1,
                minWidth: 130,
                sortable : true,
                locked   : false,
                dataIndex: 'home_no'
            },{
                text     : 'Agama',
                flex: 1,
                minWidth: 130,
                sortable : true,
                locked   : false,
                dataIndex: 'agama'
            },{
                text     : 'Bangsa',
                flex: 1,
                minWidth: 130,
                sortable : true,
                locked   : false,
                dataIndex: 'bangsa'
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
