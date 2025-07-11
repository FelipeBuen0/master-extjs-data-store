Ext.define('JsDaysDataStore.store.features.Store', {
    extend: 'JsDaysDataStore.baseClasses.store.BaseStore',
    alias: 'store.features',
    storeId: 'allFeatures',
    model: 'JsDaysDataStore.model.features.Model',
    autoLoad: false,
    useLocalStorage: true,
    proxy: {
        type: 'memory'
    }
});
