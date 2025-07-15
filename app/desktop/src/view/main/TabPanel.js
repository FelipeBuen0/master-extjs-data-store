Ext.define('JsDaysDataStore.view.main.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'main-tab-panel',
    cls: 'main-tab-panel',
    flex: 1,
    defaults: {
        padding: 8,
        scrollable: true,
    },
    items: [{
        xtype: 'dashboard-panel',
        title: 'Dashboard',
        iconCls: 'x-fas fa-chart-bar'
    }, {
        xtype: 'users-grid',
        title: 'Grids',
        iconCls: 'x-fas fa-table'
    }, {
        xtype: 'events-panel',
        title: 'Events',
        iconCls: 'x-fas fa-bolt'
    }, {
        xtype: 'performance-panel',
        title: 'Performance',
        iconCls: 'x-fas fa-tachometer-alt'
    }]
});