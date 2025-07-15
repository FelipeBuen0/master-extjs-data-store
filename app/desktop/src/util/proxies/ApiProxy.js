Ext.define('JsDaysDataStore.util.proxies.ApiProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.apiProxy',
    pageParam: 'page',
    limitParam: 'pageSize',
    sortParam: 'sortBy',
    queryParam: 'q',
    filterParam: '',
    startParam: '',
    directionParam: '',
    cacheString: 't',
    writerAllowSingle: true,
    simpleSortMode: true,
    batchActions: true,
    useDefaultXhrHeader: false,
    noCache: false,
    timeout: 120000,
    actionMethods: {
        read: 'GET'
    },
    extraParams: {
        apiKey: `${Ext.manifest.api.apiToken}`
    },
    reader: {
        type: 'json',
        rootProperty: 'articles',
        totalProperty: 'totalResults'
    }
});
