Ext.define('JsDaysDataStore.model.news.Model', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'sourceId', mapping: 'source.id', type: 'string' },
        { name: 'sourceName', mapping: 'source.name', type: 'string' },
        { name: 'author', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'url', type: 'string' },
        { name: 'urlToImage', type: 'string' },
        { name: 'publishedAt', type: 'date', dateFormat: 'c' },
        { name: 'content', type: 'string' }
    ]
});