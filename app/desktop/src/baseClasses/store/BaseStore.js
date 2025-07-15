Ext.define('JsDaysDataStore.baseClasses.store.BaseStore', {
    extend: 'Ext.data.Store',
    config: {
        useLocalStorage: false
    },
    proxy: {
        type: 'ajax',
        url: `${Ext.manifest.api.url}/everything`,
        reader: { type: 'json', rootProperty: 'articles' },
    },
    listeners: {
        load(store, records, successful, operation, eOpts) {
            //<debug>
            console.log('✅ BaseStore.listeners.load', store, records, successful, operation, eOpts);
            //</debug>
            if (store.useLocalStorage && store.storeId && successful) {
                const data = {
                    date: new Date(),
                    data: records.map((record) => (Ext.isFunction(record.getData) ? record.getData() : record))
                };
                localStorage.setItem(this._getStoreKey(), Ext.encode(data));
            }
        }
    },
    privates: {
        _getStoreKey() {
            //<debug>
            console.log('✅ BaseStore._getStoreKey');
            //</debug>
            const me = this;
            if (me.storeId) {
                return `JsDaysDataStore.baseClasses-store-${me.storeId}`;
            }
            return '';
        },
    },
    constructor: function (config) {
        //<debug>
        console.log('✅ BaseStore.constructor', config);
        //</debug>
        const me = this;
        me.callParent([config]);
        // me.addEventHandlers();
    },
    addEventHandlers() {
        //<debug>
        console.log('✅ BaseStore.addEventHandlers');
        //</debug>
        const me = this;
    },
});
