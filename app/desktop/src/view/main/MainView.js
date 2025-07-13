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
        xtype: 'container',
        margin: '0 0 8 0',  
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'toolbar',
            cls: 'main-toolbar',
            defaults: {
                xtype: 'button',
                iconAlign: 'top',
                margin: '0 8 0 0',
                ui: 'round'
            },
            items: [{
                text: 'Dashboard',
                iconCls: 'x-fas fa-chart-bar',
                handler: 'onDashboardClick'
            }, {
                text: 'Grids',
                iconCls: 'x-fas fa-table',
                handler: 'onGridClick'
            }, {
                text: 'Filtros',
                iconCls: 'x-fas fa-filter',
                handler: 'onFiltersClick'
            }, {
                text: 'Eventos',
                iconCls: 'x-fas fa-bolt',
                handler: 'onEventsClick'
            }, {
                text: '',
                iconCls: 'x-fas fa-user',
                handler: 'onUsersClick'
            }, {
                text: 'Settings',
                iconCls: 'x-fas fa-cog',
                handler: 'onSettingsClick'
            }]  
        }, {
            xtype: 'container',
            cls: 'main-card',
            reference: 'contentContainer',
            activeItem: 0,
            flex: 1,
            layout: {
                type: 'card',
                animation: 'slide'
            },
            items: [{
                xtype: 'dashboard-panel',
                itemId: 'dashboardPanel'
            }, {
                xtype: 'users-grid',
                itemId: 'usersGrid'
            }, {
                xtype: 'advanced-filters-panel',
                itemId: 'filtersPanel'
            }, {
                xtype: 'events-panel',
                itemId: 'eventsPanel'
            }]
        }]
    }, {
        xtype: 'component',
        cls: 'main-footer',
        html: `<footer>Thank you!</footer>`
    }]
});
