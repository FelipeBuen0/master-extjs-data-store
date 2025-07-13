Ext.define('JsDaysDataStore.view.main.EventsPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'events-panel',
    title: 'Eventos & Logs',
    cls: 'events-panel',
    layout: 'vbox',
    items: [{
        xtype: 'component',
        html: '<h2>Eventos & Logs da Store</h2>'
    }, {
        xtype: 'dataview',
        itemId: 'eventsLog',
        store: {
            fields: ['timestamp', 'event', 'message'],
            data: []
        },
        tpl: '<tpl for="."><div><b>{timestamp}</b> - <span style="color: #1976d2">{event}</span>: {message}</div></tpl>',
        style: 'background: #f9f9f9; padding: 8px;'
    }]
});
