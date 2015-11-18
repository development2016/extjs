Ext.define('Kds.store.Profil', {
    extend: 'Ext.data.Store',
  
    alias: 'store.profil',

    fields: [
        'name', 
        'ic_no',
        'address',
        'postcode',
        'gender',
        'state',
        'district',
        'kampung',
        'mobile_no',
        'home_no',
        'citizen',
        'agama',
        'bangsa',


    ],

    pageSize : 20,
    proxy: {
        type: 'rest',
        url : 'http://localhost/kds-rest/web/index.php/people',
        useDefaultXhrHeader : false,
        withCredentials: false,
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'totalItems'

        }
    },
    autoLoad: 'true',
});
