Ext.define('JsDaysDataStore.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-view',
    stores: {
        newsStore: {
            type: 'news',
            pageSize: 100,
            autoLoad: true,
        },
        recentNewsStore: {
            type: 'recentnews',
            autoLoad: true
        }
    },
    data: {
        searchValue: '',
        selectedNews: null
    }
});
