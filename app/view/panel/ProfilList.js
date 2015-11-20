
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
                                handler : function(grid, rowIndex, colIndex) {
                                    var rec = grid.getStore().getAt(rowIndex);
                                    var id = rec.get('id');

                                    
                                    Ext.Ajax.request({
                                             url:'http://localhost/kds-rest/web/index.php/people/view/'+id, 
                                             useDefaultXhrHeader : false,
                                             withCredentials: false,
                                             method: 'GET',    
                                             success : function(response){
                                                var urls = response.request.options.url
                                                var userStore = Ext.create('Ext.data.Store', {
                                                        fields: ['id', 'name'],
                                                        proxy: {
                                                            type: 'rest',
                                                            url : urls,
                                                            useDefaultXhrHeader : false,
                                                            withCredentials: false,
                                                            reader: {
                                                                type: 'json',
                                                                rootProperty: 'data',
                                      
                                                            }
                                                    },
                                                    autoLoad: 'true',

                                                });
                                                var grid = Ext.create('Ext.grid.Panel', {
                                                    store: userStore,
                                                    forceFit: true,
                                                    columns: [
                                                        {
                                                            text: 'Name',
                                                            width: 100,
                                                            sortable: false,
                                                            hideable: false,
                                                            dataIndex: 'name'
                                                        },
                                                        
                                                    ]
                                                }); 


                                                var win = Ext.create("Ext.Window",{                   
                                                    width: 1000,
                                                    draggable : false,
                                                    title : rec.get('name'),
                                                    height: 600,
                                                    closable : true,
                                                    modal: true,
                                                    items : [grid]

                                                });
                                                   
                                                    win.show();
                                             },    
                                             scope:this
                                        });
     
                                },

                            }]
            }],
            bbar: Ext.create('Ext.PagingToolbar', {
                store: store,
                displayInfo: true,
                dock: 'bottom',

            })

        
    });
        this.callParent();

},

});
