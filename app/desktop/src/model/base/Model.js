Ext.define('JsDaysDataStore.model.Model', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'JsDaysDataStore.model',
        proxy: {
            type: 'apiProxy',
            url: `http://localhost:1841/{entityName}s`
        }
    },
    getProxy: function () {
        const proxy = this.callParent(arguments);
        const operation = proxy.getActionMethods();
        const api = proxy.getApi();
        if (operation.create && api.create && api.create.params && api.create.params[this.idProperty]) {
            delete api.create.params[this.idProperty];
        }
        return proxy;
    }
});
