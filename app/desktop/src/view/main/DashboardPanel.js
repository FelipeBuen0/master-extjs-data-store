Ext.define('JsDaysDataStore.view.main.DashboardPanel', {
    extend: 'Ext.Container',
    xtype: 'dashboard-panel',
    cls: 'dashboard-panel',
    layout: {
        type: 'vbox'
    },
    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Query',
                    labelAlign: 'top',
                    bind: {
                        value: '{query}'
                    },  
                    width: 300,
                    emptyText: 'Type your query...'
                },
                {
                    xtype: 'button',
                    text: 'Search',
                    handler: 'queryNews'
                }
            ]
        },
        {
            xtype: 'componentdataview',
            bind: {
                store: '{recentNewsStore}'
            },
            layout: {
                type: 'vbox',
                align: 'stretch',
                wrap: true
            },
            itemConfig: {
                viewModel: true,
                xtype: 'container',
                cls: 'news-card',
                layout: 'hbox',
                padding: 8,
                items: [{
                    xtype: 'image',
                    cls: 'news-image',
                    style: {
                        width: '120px',
                        height: '120px',
                        'object-fit': 'cover',
                        'border-radius': '8px',
                        'box-shadow': '0 2px 8px rgba(0,0,0,0.12)'
                    },
                    bind: {
                        src: '{record.urlToImage}'
                    }
                }, {
                    xtype: 'container',
                    layout: 'vbox',
                    style: {
                        padding: '0 0 0 16px',
                        flex: 1
                    },
                    items: [{
                        xtype: 'component',
                        cls: 'text-large',
                        bind: {
                            html: '<div>{record.title}</div>'
                        }
                    }, {
                        xtype: 'component',
                        cls: 'text-medium',
                        bind: {
                            html: '<div>{record.description}</div>'
                        }
                    }, {
                        xtype: 'component',
                        flex: 1  
                    }, {
                        xtype: 'component',
                        cls: 'text-small',
                        bind: {
                            html: '<div>by: {record.author}</div>'
                        }
                    }]
                }]
            },
            listeners: {
                childtap: 'onChildTap'
            }
        }
    ]
});
