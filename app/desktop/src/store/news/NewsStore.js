Ext.define('JsDaysDataStore.store.NewsStore', {
    extend: 'JsDaysDataStore.baseClasses.store.BaseStore',
    alias: 'store.news',
    model: 'JsDaysDataStore.model.news.Model',
    proxy: {
        type: 'apiProxy',
        url: 'https://newsapi.org/v2/everything',
        extraParams: {
            q: 'apple',
            language: 'en',
            sortBy: 'publishedAt',
            pageSize: 10
        }
    }

});
