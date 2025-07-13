Ext.define('App.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'App.model.users.Model',
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: '/api/users',
        reader: { type: 'json', rootProperty: 'data' },
        extraParams: {
            pageNumber: 1,
            pageSize: 20,
            sortBy: 'name'
        },
        paramNames: {
            start: 'pageNumber',
            limit: 'pageSize',
            sort: 'sortBy'
        }
    },
    listeners: {
        load: function(store, records, successful) {
            var eventsPanel = Ext.ComponentQuery.query('events-panel')[0];
            if (eventsPanel) {
                var logStore = eventsPanel.down('#eventsLog').getStore();
                logStore.add({
                    timestamp: Ext.Date.format(new Date(), 'H:i:s'),
                    event: 'load',
                    message: successful ? 'Dados carregados com sucesso!' : 'Falha ao carregar dados.'
                });
            }
            if (successful) {
                Ext.toast('Dados carregados com sucesso!');
            }
        },
        exception: function(proxy, response, operation) {
            var eventsPanel = Ext.ComponentQuery.query('events-panel')[0];
            if (eventsPanel) {
                var logStore = eventsPanel.down('#eventsLog').getStore();
                logStore.add({
                    timestamp: Ext.Date.format(new Date(), 'H:i:s'),
                    event: 'exception',
                    message: 'Falha ao carregar dados!'
                });
            }
            Ext.Msg.alert('Erro', 'Falha ao carregar dados!');
        }
    }
});
