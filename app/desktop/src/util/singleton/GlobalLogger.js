Ext.define('JsDaysDataStore.util.singleton.GlobalLogger', {
    singleton: true,
    alternateClassName: 'GlobalLogger',
    logEntries: [],

    init: function() {
        Ext.GlobalEvents.on('log-store-event', this.handleLog, this);
    },

    handleLog: function(log) {
        const timestamp = new Date().toLocaleTimeString();
        const message = `[${timestamp}] ${log.type.toUpperCase()} — ${log.store || log.url || 'n/a'}`;
        this.logEntries.push(message);
        console.log(message);
        // Fire an event to update any log views
        Ext.GlobalEvents.fireEvent('log-update', message);
    },

    getLogs: function() {
        return this.logEntries;
    }
});
