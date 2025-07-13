Ext.define('JsDaysDataStore.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-view',

    showPanel: function(panelId) {
        const container = this.lookupReference('contentContainer');
        if (container) {
            container.setActiveItem(panelId);
        }
    },

    onDashboardClick: function() {
        this.showPanel(0);
    },

    onGridClick: function() {
        this.showPanel(1);
    },

    onUsersClick: function() {
        this.showPanel(2);
    },

    onFiltersClick: function() {
        this.showPanel(3);
    },

    onEventsClick: function() {
        this.showPanel(4);
    },

    onSettingsClick: function() {
        this.showPanel(5);
    },

    onFilterChange: function(field, newValue) {
        clearTimeout(this.filterTimeout);
        this.filterTimeout = setTimeout(() => {
            let store = this.getViewModel().getStore('users');
            store.filter('name', newValue);
        }, 300);
    },

    onRowSelect: function(grid, record) {
        Ext.Msg.alert('Detalhes', `Nome: ${record.get('name')}`);
    }
});
