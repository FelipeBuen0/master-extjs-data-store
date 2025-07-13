Ext.define('App.store.PythonUsers', {
    extend: 'Ext.data.Store',
    alias: 'store.pythonusers',
    model: 'App.model.users.Model',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:5000/api/users', // Flask/FastAPI backend
        reader: { type: 'json', rootProperty: 'data' }
    }
});
