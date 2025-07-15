Ext.define('JsDaysDataStore.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-view',

    showPanel: function(panelId) {
        const container = this.lookupReference('contentContainer');
        if (container) {
            container.setActiveItem(panelId);
        }
    },
    setActivePanel: function(panelId) {
        var contentContainer = this.lookupReference('contentContainer');
        var layout = contentContainer.getLayout();
        var index = contentContainer.items.findIndex('itemId', panelId);
        if (index !== -1) {
            layout.setActiveItem(index);
        }
    },
    onChildTap (dataview, selected) {
        debugger;
        const redirectUrl = selected.record.get('url');
        window.location = redirectUrl;
    },
    queryNews () {
        var vm = this.getViewModel();
        var query = vm.get('query');
        var store = vm.getStore('newsStore');
        if (store && store.getProxy()) {
            store.getProxy().setExtraParam('q', query);
            store.load();
        }
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
            let store = this.getViewModel().getStore('news');
            store.filter('name', newValue);
        }, 300);
    },

    onRowSelect: function(grid, record) {
        Ext.Msg.alert('Detalhes', `Nome: ${record.get('name')}`);
    }
});
