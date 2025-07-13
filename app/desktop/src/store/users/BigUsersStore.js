Ext.define('App.store.BigUsers', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.bigusers',
    model: 'App.model.users.Model',
    pageSize: 100,
    proxy: {
        type: 'ajax',
        url: '/api/bigusers',
        reader: { type: 'json', rootProperty: 'data' }
    }
});
