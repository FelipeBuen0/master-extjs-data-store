Ext.define('JsDaysDataStore.plugins.grid.PagingToolbar', {
    extend: 'Ext.grid.plugin.PagingToolbar',
    alias: ['plugin.xpagingtoolbar', 'plugin.xgridpagingtoolbar'],
    init: function (grid) {
        const me = this;
        me.setGrid(grid);
        const toolbar = this.getToolbar();
        grid.add(toolbar);
        Ext.each(me.extraItems, function (item) {
            toolbar.add(item);
        });
    }
});
