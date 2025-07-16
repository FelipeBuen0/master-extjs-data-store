Ext.define('JsDaysDataStore.store.News', {
    extend: 'JsDaysDataStore.baseClasses.store.BaseStore',
    alias: 'store.news',
    model: 'JsDaysDataStore.model.news.Model',
    proxy: {
        type: 'apiProxy',
        url: `${Ext.manifest.api.localUrl}/news`,
        extraParams: {
            q: 'apple',
            language: 'en',
            sortBy: 'publishedAt',
            pageSize: 10
        }
    }

});
