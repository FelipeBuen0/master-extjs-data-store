Ext.define('JsDaysDataStore.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'main-view',
    controller: 'main-view',
    viewModel: 'main-view',
    cls: 'main-view',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'main-tab-panel',
        cls: 'main-tab-panel',
    }]
});
