Ext.define('JsDaysDataStore.baseClasses.store.BaseStore', {
    extend: 'Ext.data.Store',
    config: {
        useLocalStorage: false
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
        _hasLocalStorageData() {
            //<debug>
            console.log('✅ BaseStore._hasLocalStorageData');
            //</debug>
            const me = this;
            const storeKey = me._getStoreKey();
            if (!storeKey || !me.useLocalStorage) {
                return false;
            }
            const localData = Ext.decode(localStorage.getItem(storeKey), true);
            if (!localData) {
                return false;
            }
            if (Ext.Date.diff(localData.date, new Date(), Ext.Date.MINUTE) > 120) {
                return false;
            }
            return true;
        },
        _loadLocalStorageData() {
            //<debug>
            console.log('✅ BaseStore._loadLocalStorageData');
            //</debug>
            const me = this;
            const storeKey = me._getStoreKey();
            if (!storeKey || !me.useLocalStorage) {
                return;
            }
            const localData = Ext.decode(localStorage.getItem(storeKey), true);
            if (!localData) {
                return;
            }
            if (Ext.Date.diff(localData.date, new Date(), Ext.Date.MINUTE) > 120) {
                return;
            }
            me.loadData(localData.data, false);
            me.fireEvent('load', me, localData.data, true);
            return localData;
        },
        _onClearAuthentication() {
            //<debug>
            console.log('✅ BaseStore._onClearAuthentication');
            //</debug>
            localStorage.removeItem(this._getStoreKey());
        }
    },
    constructor: function (config) {
        //<debug>
        console.log('✅ BaseStore.constructor', config);
        //</debug>
        const me = this;
        me.callParent([config]);
        me.addEventHandlers();
        me._loadLocalStorageData();
    },
    addEventHandlers() {
        //<debug>
        console.log('✅ BaseStore.addEventHandlers');
        //</debug>
        const me = this;
        Ext.GlobalEvents.on({
            scope: me,
            clearAuthentication: me._onClearAuthentication
        });
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
    load(options) {
        //<debug>
        console.log('✅ BaseStore.load', options);
        //</debug>
        const me = this;
        if (!me._hasLocalStorageData()) {
            this.callParent([options]);
            return;
        }
        me._loadLocalStorageData();
    }
});
