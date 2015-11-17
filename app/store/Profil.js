Ext.define('Kds.store.Profil', {
    extend: 'Ext.data.Store',
  
    alias: 'store.profil',

    fields: [
        'name', 
        'ic_no',
        'dob',
        'address',
        'postcode',
        'gender',
        'bangsa',
        'agama',
        'state',
        'district',
        'kampung'

    ],


    proxy: {
        type: 'ajax',

        url : 'http://localhost/kds-rest/web/index.php/people',
        useDefaultXhrHeader : false,
        withCredentials: false,
        reader: {
            //type: 'json',

        }
    },
    autoLoad: 'true',
});
