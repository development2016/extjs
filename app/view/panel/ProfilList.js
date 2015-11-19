
Ext.define('Kds.view.panel.ProfilList', {
    extend: 'Ext.grid.Panel',
    xtype: 'profil',

    requires: [
        'Kds.store.Profil',
        'Ext.grid.RowNumberer',
    ],


   // columnLines: true,
    forceFit: true,
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Tarikh Lahir : </b> {dob} : <b> Tempat Lahir : </b> {birth_place}</p>',
            '<p><b>Alamat : </b> {address}</p>',
            '<p><b>Poskod : </b> {postcode}</p>',
            '<p><b>Kawasan : </b> {state} : {district} : {kampung} </p>',
            '<p><b>Maklumat : </b> Status Perkahwinan :  {status_perkahwinan} | Bilangan Anak : {no_of_children} | Status Pekerjaan : {profession_status} | Pekerjaan : {profession} </p>',
            '<p><b>Pendapatan Dan Perbelanjaan : </b> {income} : {spending} </p>',

        {
    
        })
    }],



initComponent: function () {

var store = Ext.create('Kds.store.Profil');

        Ext.apply(this, {
            store: store,

            columns:[{

                xtype: 'rownumberer'
            },{
                text     : 'Nama',
                locked   : true,
                width    : 300,
                sortable : true,
                dataIndex: 'name',

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
                text     : 'Jantina',
                flex: 1,
                minWidth: 130,
                sortable : true,
                locked   : false,
                dataIndex: 'gender'
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
            },
            {
                text     : 'Email',
                flex: 1,
                minWidth: 130,
                sortable : true,
                locked   : false,
                dataIndex: 'email'
            },
            {
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
            },{
                text     : 'Tindakan',
                xtype: 'actioncolumn',
                minWidth: 130,
                sortable: false,
                menuDisabled: true,
                items: [{
                                icon: 'images/view.png',  // Use a URL in the icon config
                                tooltip: 'Lihat',
                                //handler: 'onAlertClick'
                                handler : function(grid, rowIndex, colIndex) {
                                    var rec = grid.getStore().getAt(rowIndex);
                                    alert("Lihat -  " + rec.get('id'));
                                    /*var win = Ext.create("Ext.Window",{                   
                                                    title : rec.get('name'),
                                                    width: 1000,
                                                    draggable : false,
                                                    height: 600,
                                                    closable : true,
                                                    modal: true,

                                                });
                                                win.add({
                                                    xtype : 'form-test'
                                                });
                                                win.show();*/
                                }
                                /*handler: function(grid, rowIndex, colIndex) {
                                    var rec = grid.getStore().getAt(rowIndex);
                                    alert("Lihat -  " + rec.get('name'));
                                }*/
                            }]
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
