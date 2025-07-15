Ext.define('JsDaysDataStore.store.News', {
    extend: 'JsDaysDataStore.baseClasses.store.BaseStore',
    alias: 'store.news',
    model: 'JsDaysDataStore.model.news.Model',
    listeners: {
        load: function(store, records, successful) {
            var eventsPanel = Ext.ComponentQuery.query('events-panel')[0];
            if (eventsPanel) {
                var logStore = eventsPanel.down('#eventsLog').getStore();
                logStore.add({
                    timestamp: Ext.Date.format(new Date(), 'H:i:s'),
                    event: 'load',
                    message: successful ? 'Data loaded successfully!' : 'Failed to load data.'
                });
            }
            if (successful) {
                console.log('Data loaded successfully!');
            }
        },
        exception: function(proxy, response, operation) {
            var eventsPanel = Ext.ComponentQuery.query('events-panel')[0];
            if (eventsPanel) {
                var logStore = eventsPanel.down('#eventsLog').getStore();
                logStore.add({
                    timestamp: Ext.Date.format(new Date(), 'H:i:s'),
                    event: 'exception',
                    message: 'Failed to load data!'
                });
            }
            Ext.Msg.alert('Error', 'Failed to load data!');
        }
    },
    proxy: {
        type: 'apiProxy',
        url: 'https://newsapi.org/v2/everything',
        extraParams: {
            q: 'apple',
            language: 'en',
            sortBy: 'publishedAt',
            pageSize: 10
        }
    }

});
