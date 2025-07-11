Ext.define('JsDaysDataStore.util.proxies.ApiProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.apiProxy',
    pageParam: 'page',
    filterParam: '',
    startParam: '',
    limitParam: 'limit',
    sortParam: 'sort',
    directionParam: 'dir',
    cacheString: 't',
    writerAllowSingle: true,
    simpleSortMode: true,
    batchActions: true,
    noCache: false,
    timeout: 120000,
    actionMethods: {
        create: 'POST',
        read: 'GET',
        update: 'PATCH',
        destroy: 'DELETE'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    writer: {
        type: 'json',
        writeAllFields: true
    },
    reader: {
        type: 'json',
        rootProperty: 'results',
        totalProperty: 'total'
    },
    buildUrl(request) {
        //<debug>
        console.log('JsDaysDataStore.util.proxies.ApiProxy', request);
        //</debug>
        const me = this;
        const operation = request.getOperation();
        const records = operation.getRecords();
        const record = records ? records[0] : null;
        const format = me.getFormat();
        let url = me.getUrl(request);
        let id;
        const params = request.getParams();

        if (params.query && params.query.indexOf('null') > -1) {
            delete params.query;
            request.setParams(params);
        }
        if (record && !record.phantom) {
            id = record.getId();
        } else {
            id = operation.getId();
        }

        if (me.getAppendId() && me.isValidId(id)) {
            if (!url.match(me.slashRe)) {
                url += '/';
            }

            url += encodeURIComponent(id);

            if (params) {
                delete params[me.getIdParam()];
            }
        }

        if (format) {
            if (!url.match(me.periodRe)) {
                url += '.';
            }

            url += format;
        }

        request.setUrl(url);

        return request.getUrl();
    }
});
