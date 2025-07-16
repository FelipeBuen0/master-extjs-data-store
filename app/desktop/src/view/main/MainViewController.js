Ext.define('JsDaysDataStore.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-view',
    bindings: {
        onFilterChange: '{searchValue}',
    },
    showPanel: function(panelId) {
        const container = this.lookupReference('contentContainer');
        if (container) {
            container.setActiveItem(panelId);
        }
    },
    setActivePanel: function(panelId) {
        const contentContainer = this.lookupReference('contentContainer');
        const layout = contentContainer.getLayout();
        const index = contentContainer.items.findIndex('itemId', panelId);
        if (index !== -1) {
            layout.setActiveItem(index);
        }
    },
    onEventsPanelPainted () {
        const me = this;
        Ext.GlobalEvents.on('log-update', function(message) {
            const area = me.lookupReference('logArea');
            area.setValue(area.getValue() + message + '\n');
        });
    },

    onDashboardClick: function() {
        this.setActivePanel('dashboardPanel');
    },

    onGridClick: function() {
        this.setActivePanel('usersGrid');
    },

    onFiltersClick: function() {
        this.setActivePanel('filtersPanel');
    },

    onEventsClick: function() {
        this.setActivePanel('eventsPanel');
    },

    onPerformanceClick: function() {
        this.setActivePanel('performancePanel');
    },

    onSettingsClick: function() {
        this.setActivePanel('settingsPanel');
    },

    onFilterChange: function(field, newValue) {
        clearTimeout(this.filterTimeout);
        this.filterTimeout = setTimeout(() => {
            let store = this.getViewModel().getStore('newsStore');
            this.proxyQuery(store, newValue);
        }, 500);
    },

    onRowSelect: function(grid, record) {
        Ext.Msg.alert('Detalhes', `Nome: ${record.get('name')}`);
    },
    onChildTap (dataview, selected) {
        const redirectUrl = selected.record.get('url');
        window.location = redirectUrl;
    },
    queryNews () {
        const viewModel = this.getViewModel();
        const query = viewModel.get('query');
        const store = viewModel.getStore('recentNewsStore');
        this.proxyQuery(store, query);
    },
    proxyQuery (store, query) {
        if (store && store.getProxy()) {
            store.getProxy().setExtraParam('q', query);
            store.load();
        }
    }
});
