Ext.define('Kds.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navigation',

    constructor: function(config) {
        var me = this;

        me.callParent([Ext.apply({
            root: {
                text: 'Semua',
                id: 'all',
                expanded: true,
                children: me.getNavItems()
            }
        }, config)]);
    },

    addIconClasses: function (items) {
        for (var item, i = items.length; i-- > 0; ) {
            item = items[i];

            if (!('iconCls' in item)) {
                item.iconCls = 'icon-' + item.id;
            }

            if (!('glyph' in item)) {
                // sets the font-family
                item.glyph = '32@Sencha-Examples';
            }

            if (item.children) {
                this.addIconClasses(item.children);
            }
        }

        return items;
    },


    getNavItems: function() {
        return this.addIconClasses([
            {
                text: 'Kawasan Perlaksanaan',
                id: 'kawasan-perlaksanaan',
                expanded: true,
                description: 'Panels are the basic container that makes up the structure ' +
                    'of most applications. Panels have a header and body, and can be arranged ' +
                    'in various ways using layouts. These examples provide a few common use cases of Ext JS Panels.',


            },
            {
                text: 'Profil Komuniti',
                id: 'profil-komuniti',
                expanded: true,
                description: 'Grids are one of the centerpieces of Ext JS. They are incredibly versatile components ' +
                             'that provide an easy path to display, sort, group, and edit data. These examples show a ' +
                             'number of the most often used grids in Ext JS.',
            },
            {
                text: 'Sukarelawan',
                id: 'sukarelawan',
                expanded: true,
                description:    'The Pivot Grid component enables rapid summarization of large sets of data. ' +
                                'It provides a simple way to condense many data points into a format that ' +
                                'makes trends and insights more apparent.',
            },
            {
                text: 'Isu Konduit',
                id: 'isu_konduit',
                expanded: true,
                description: 'Data binding, and the ViewModel that powers it, are powerful pieces of Ext JS 5. ' +
                             'Together, they enable you to create a seamless connection between your application UI ' +
                             'and your business logic.',
            },
            {
                text: 'Public Facility Network',
                id: 'pfn',
                expanded: true,
                description: 'Tree Panels provide a tree-structured UI representation of tree-structured data.' +
                             'Tree Panel\'s built-in expand/collapse nodes offer a whole new set of opportunities' +
                             'for user interface and data display.',
            },
            {
                text: 'Demographic',
                id: 'demographic',
                expanded: true,
                description: 'Tab Panels are panels that have extended support for containing and displaying children ' +
                             'items. These children are managed using a Card Layout and are shown as tabulated content.',

            },

        ]);
    }
});
