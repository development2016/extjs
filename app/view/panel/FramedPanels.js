/**
 * This example demonstrates how to create framed panels. Framing is a theme-specific
 * concept that adds rounded corners and sometimes a background-color, depending on what
 * is specified in the theme css.
 */
Ext.define('Kds.view.panel.FramedPanels', {
    extend: 'Ext.Container',
    xtype: 'framed-panels',
    width: 660,

    layout: {
        type: 'table',
        columns: 3,
        tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        height: 280,
        bodyPadding: 10,
        frame: true
    },
    //<example>
    profiles: {
        classic: {
        },
        neptune: {
        }
    },
    //</example>

    initComponent: function () {
        this.items = [
            {
                html: 'shahril hensem'
            },
            {
                title: 'Title',
                html: 'shahril hensem'
            },
            {
                title: 'Collapsible',
                collapsible: true,
                html: 'shahril hensem'
            },
            {
                title: 'Tools',
                collapsed: true,
                collapsible: true,
                width: 640,
                html: 'shahril hensem',
                tools: [
                    { type:'pin' },
                    { type:'refresh' },
                    { type:'search' },
                    { type:'save' }
                ],
                colspan: 3
            }
        ];

        this.callParent();
    }
});