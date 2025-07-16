Ext.define('JsDaysDataStore.view.main.EventsPanel', {
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

    bbar: ['->', {
        text: 'Send Logs to Server',
        iconCls: 'x-fa fa-cloud-upload',
        handler: function(btn) {
            const logs = JsDaysDataStore.util.singleton.GlobalLogger.getLogs();
            Ext.Msg.alert('Simulated Upload', `Sending ${logs.length} logs...`);
        }
    }],

    listeners: {
        painted: 'onEventsPanelPainted'
    }
});
