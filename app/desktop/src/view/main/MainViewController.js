Ext.define('JsDaysDataStore.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-view',

    // === Panel Navigation Methods ===

    /**
     * Shows a panel by its itemId.
     * @param {String} panelId
     */
    showPanel(panelId) {
        const container = this.lookupReference('contentContainer');
        if (container) {
            container.setActiveItem(panelId);
        }
    },

    /**
     * Sets the active panel in the content container.
     * @param {String} panelId
     */
    setActivePanel(panelId) {
        const contentContainer = this.lookupReference('contentContainer');
        const layout = contentContainer.getLayout();
        const index = contentContainer.items.findIndex('itemId', panelId);
        if (index !== -1) {
            layout.setActiveItem(index);
        }
    },

    // === Panel Button Handlers ===

    /**
     * Navigation button handlers.
     */
    onDashboardClick() { this.setActivePanel('dashboardPanel'); },
    onGridClick() { this.setActivePanel('usersGrid'); },
    onFiltersClick() { this.setActivePanel('filtersPanel'); },
    onEventsClick() { this.setActivePanel('eventsPanel'); },
    onPerformanceClick() { this.setActivePanel('performancePanel'); },
    onSettingsClick() { this.setActivePanel('settingsPanel'); },

    // === Event Logging ===

    /**
     * Sets up log area to receive global log-update events.
     */
    onEventsPanelPainted() {
        const me = this;
        Ext.GlobalEvents.on('log-update', function(message) {
            const area = me.lookupReference('logArea');
            area.setValue(area.getValue() + message + '\n');
        });
    },

    // === News Interaction ===

    /**
     * Opens the News Detail dialog on double tap.
     * @param {Ext.grid.Panel} grid
     * @param {Object} selected
     */
    onChildDoubleTap(grid, selected) {
        const viewModel = this.getViewModel();
        viewModel.set('selectedNews', selected.record);
        Ext.create('JsDaysDataStore.view.news.NewsDetailDialog', {
            viewModel: { parent: viewModel }
        }).show();
    },

    /**
     * Redirects to the news article URL on tap. This is used in th DashboardPanel
     * @param {Ext.dataview.DataView} dataview
     * @param {Object} selected
     */
    onChildTap(dataview, selected) {
        const redirectUrl = selected.record.get('url');
        window.location = redirectUrl;
    },

    // === Filtering & Querying ===

    /**
     * Handles filter changes with debounce.
     * @param {Ext.form.field.Field} field
     * @param {String} newValue
     */
    onFilterChange(field, newValue) {
        clearTimeout(this.filterTimeout);
        this.filterTimeout = setTimeout(() => {
            let store = this.getViewModel().getStore('newsStore');
            this.proxyQuery(store, newValue);
        }, 500);
    },

    /**
     * Queries news using the current query value in the ViewModel.
     */
    queryNews() {
        const viewModel = this.getViewModel();
        const query = viewModel.get('query');
        const store = viewModel.getStore('recentNewsStore');
        this.proxyQuery(store, query);
    },

    /**
     * Sets extra param and reloads the store.
     * @param {Ext.data.Store} store
     * @param {String} query
     */
    proxyQuery(store, query) {
        if (store && store.getProxy()) {
            store.getProxy().setExtraParam('q', query);
            store.load();
        }
    }
});