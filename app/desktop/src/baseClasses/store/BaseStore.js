Ext.define('JsDaysDataStore.baseClasses.store.BaseStore', {
    extend: 'Ext.data.Store',
    // Use custom ApiProxy for demonstration purposes
    proxy: {
        type: 'apiproxy',
        url: `${Ext.manifest.api.localUrl}/news`,
        reader: {
            type: 'json',
            // rootProperty: 'articles' allows the grid to read the array of articles from the response
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
            // Show a message box on proxy exception for teaching purposes
            Ext.Msg.alert('Error', 'Failed to load data from the server.');
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
