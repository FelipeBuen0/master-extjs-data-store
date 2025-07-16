Ext.define('JsDaysDataStore.baseClasses.store.BaseStore', {
    extend: 'Ext.data.Store',

    config: {
        useLocalStorage: false
    },

    proxy: {
        type: 'ajax',
        url: `${Ext.manifest.api.url}/everything`,
        reader: {
            type: 'json',
            rootProperty: 'articles'
        }
    },

    listeners: {
        beforeload: function(store, operation) {
            Ext.GlobalEvents.fireEvent('log-store-event', {
                type: 'request-start',
                store: store.id,
                operation: operation
            });
        },
        load: function(store, records, successful, operation) {
            Ext.GlobalEvents.fireEvent('log-store-event', {
                type: 'request-complete',
                store: store.id,
                success: successful,
                count: records.length
            });
        },
        exception: function(proxy, response, operation) {
            Ext.GlobalEvents.fireEvent('log-store-event', {
                type: 'request-error',
                url: response.url,
                status: response.status,
                message: response.statusText
            });
        },
        write: function(store, operation) {
            Ext.GlobalEvents.fireEvent('log-store-event', {
                type: 'write-complete',
                action: operation.action,
                store: store.id
            });
        }
    }
});
