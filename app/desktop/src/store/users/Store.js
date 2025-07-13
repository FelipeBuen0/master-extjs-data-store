Ext.define('JsDaysDataStore.store.users.Store', {
    extend: 'JsDaysDataStore.baseClasses.store.BaseStore',
    alias: 'store.users',
    storeId: 'usersStore',
    model: 'JsDaysDataStore.model.users.Model',
    autoLoad: false,
    useLocalStorage: true,
    proxy: {
        type: 'memory'
    }
});
