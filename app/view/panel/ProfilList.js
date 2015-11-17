
Ext.define('Kds.view.panel.ProfilList', {
    extend: 'Ext.grid.Panel',
    xtype: 'profil',

    requires: [
        'Kds.store.Profil',
        'Ext.grid.RowNumberer'
    ],

   

    store: {
        type: 'profil'
    },
    columnLines: true,
    forceFit: true,
    //width : 600,
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Alamat:</b> {address}</p>',
            '<p><b>Poskod:</b> {postcode}</p>',
            '<p><b>Kawasan:</b> {state} : {district} : {kampung} </p>',

        {
    
        })
    }],
        /*dockedItems: [{
            xtype: 'pagingtoolbar',
            
            store: {
                type: 'profil'
            },
            dock: 'bottom',
            displayInfo: true
        }],*/



initComponent: function () {


        this.columns = [{
                xtype: 'rownumberer',

            }, {
                text     : 'Nama',
                locked   : true,
                width    : 230,
                sortable : true,
                dataIndex: 'name'
            }, {
                text     : 'No Kad Pengenalan',
                lockable: false,
                width    : 100,
                sortable : true,
                dataIndex: 'ic_no'
            },{
                text     : 'Tarikh Lahir',
                lockable: false,
                width    : 100,
                sortable : true,
                dataIndex: 'dob'
            },{
                text     : 'Jantina',
                lockable: false,
                width    : 100,
                sortable : true,
                dataIndex: 'gender'
            },{
                text     : 'Bangsa',
                lockable: false,
                width    : 100,
                sortable : true,
                dataIndex: 'bangsa'
            },{
                text     : 'Agama',
                lockable: false,
                width    : 100,
                sortable : true,
                dataIndex: 'agama'
            }],


        this.callParent();
    }



});
