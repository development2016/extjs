Ext.define('Kds.store.Profil', {
    extend: 'Ext.data.Store',
  
    alias: 'store.profil',

    fields: [
        'id',
        'name', 
        'ic_no',
        'address',
        'postcode',
        'gender',
        'dob',
        'birth_place',
        'state',
        'district',
        'kampung',
        'mobile_no',
        'home_no',
        'citizen',
        'agama',
        'bangsa',
        'status_perkahwinan',
        'no_of_children',
        'profession_status',
        'profession',
        'income',
        'spending',
        'email',


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
