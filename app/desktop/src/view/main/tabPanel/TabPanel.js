Ext.define('JsDaysDataStore.view.main.tabPanel.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'main-tab-panel',
    cls: 'main-tab-panel',
    flex: 1,
    defaults: {
        padding: 8,
        scrollable: true,
    },
    items: [{
        xtype: 'recent-news-panel',
        title: 'Recent News',
        iconCls: 'x-fas fa-calendar'
    }, {
        xtype: 'news-grid',
        title: 'News Grid',
        padding: 0,
        iconCls: 'x-fas fa-table'
    }, {
        xtype: 'events-panel',
        title: 'Events',
        iconCls: 'x-fas fa-bolt'
    }]
});