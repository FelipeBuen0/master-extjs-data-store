Ext.define('JsDaysDataStore.store.RecentNewsStore', {
    extend: 'JsDaysDataStore.baseClasses.store.BaseStore',
    alias: 'store.recentnews',
    model: 'JsDaysDataStore.model.news.Model',
    proxy: {
        type: 'apiProxy',
        url: 'https://newsapi.org/v2/everything',
        extraParams: {
            q: 'superman',
            from: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString(),
            to: new Date().toISOString(),
            pageSize: 10
        }
    }

});
