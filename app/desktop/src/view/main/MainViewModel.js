Ext.define('JsDaysDataStore.view.main.MainViewModel', {
    extend: 'JsDaysDataStore.baseClasses.BaseViewModel',
    alias: 'viewmodel.main-view',
    stores: {
        featuresStore: {
            type: 'features.Store',
            autoLoad: true,
            listeners: {
                load: 'onFeaturesStoreLoad'
            }
        }
    },
});
