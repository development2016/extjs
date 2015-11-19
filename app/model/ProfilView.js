

var id = 114;
Ext.define('Kds.model.ProfilView', {
    extend: 'Ext.data.Store',
  
    alias: 'model.profilView',

    fields: [
        'name', 
        'ic_no',
        'address',
    ],
        



    pageSize : 20,
    proxy: {
        type: 'rest',
        url : 'http://localhost/kds-rest/web/index.php/people/view/'+id,
        useDefaultXhrHeader : false,
        withCredentials: false,
        reader: {
            type: 'json',
            rootProperty: 'data',
            //totalProperty: 'totalItems'

        }
    },
    autoLoad: 'true',
});
