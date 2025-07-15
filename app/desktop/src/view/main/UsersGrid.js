Ext.define('JsDaysDataStore.view.main.UsersGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'users-grid',
    title: 'Usuários',
    store: {
        type: 'news'
    },
    columns: [
        { text: 'ID', dataIndex: 'id', width: 60 },
        { text: 'Nome', dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Status', dataIndex: 'status', width: 100 }
    ],
    selModel: 'rowmodel',
    listeners: {
        select: 'onRowSelect'
    },
    tbar: [{
        xtype: 'textfield',
        emptyText: 'Filtrar por nome...',
        enableKeyEvents: true,
        listeners: {
            change: 'onFilterChange'
        }
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
