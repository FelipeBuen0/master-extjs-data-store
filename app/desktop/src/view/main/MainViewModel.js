Ext.define('JsDaysDataStore.view.main.MainViewModel', {
    extend: 'JsDaysDataStore.baseClasses.BaseViewModel',
    alias: 'viewmodel.main-view',
    stores: {
        usersStore: {
            type: 'users',
            autoLoad: true,
            listeners: {
                load: 'onStoreLoad'
            }
        }
    },
});
