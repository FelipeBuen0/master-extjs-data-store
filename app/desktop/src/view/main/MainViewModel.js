Ext.define('JsDaysDataStore.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-view',
    stores: {
        newsStore: {
            type: 'news',
            autoLoad: true
        }
    },
});
