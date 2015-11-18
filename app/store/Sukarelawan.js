
Ext.define('Kds.store.Sukarelawan', {
    extend: 'Ext.data.Store',
  
    alias: 'store.sukarelawan',

    fields: [
        'nama', 
        'no_kp',
        'jantina',
        'alamat',
        'poskod',
        'state',
        'district',
        'kampung',


    ],

    pageSize : 20,
    proxy: {
        type: 'rest',

        url : 'http://localhost/kds-rest/web/index.php/volunteer',
        useDefaultXhrHeader : false,
        withCredentials: false,

        reader: {
           type: 'json',
            rootProperty: 'data',
            totalProperty: 'totalItems'

        },
        enablePaging : true
    },
    autoLoad: true,




});
