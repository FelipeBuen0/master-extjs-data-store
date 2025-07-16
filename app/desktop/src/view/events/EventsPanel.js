Ext.define('JsDaysDataStore.view.events.EventsPanel', {
    extend: 'Ext.Panel',
    xtype: 'events-panel',
    title: 'Events & Logs',
    cls: 'events-panel',
    layout: 'vbox',
    items: [{
        xtype: 'textareafield',
        reference: 'logArea',
        flex: 1,
        readOnly: true,
        value: '',
        scrollable: true
    }],

    listeners: {
        painted: 'onEventsPanelPainted'
    }
});
