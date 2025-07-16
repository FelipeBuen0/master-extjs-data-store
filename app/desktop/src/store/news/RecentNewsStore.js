Ext.define('JsDaysDataStore.store.RecentNewsStore', {
    extend: 'JsDaysDataStore.baseClasses.store.BaseStore',
    alias: 'store.recentnews',
    model: 'JsDaysDataStore.model.news.Model',
    proxy: {
        type: 'apiProxy',
        url: `${Ext.manifest.api.localUrl}/news`,
        // extraParams: {
        //     q: 'superman',
        //     from: new Date(new Date().setMonth(new Date().getMonth() - 2)).toISOString(),
        //     to: new Date().toISOString(),
        //     pageSize: 10
        // }
    }

});
