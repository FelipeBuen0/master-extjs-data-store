Ext.define('JsDaysDataStore.view.main.DashboardPanel', {
    extend: 'Ext.Container',
    xtype: 'dashboard-panel',
    cls: 'dashboard-panel',
    layout: {
        type: 'vbox'
    },
    items: [
        {
            xtype: 'component',
            html: '<h2>Resumo dos Dados</h2>',
            margin: '0 0 16 0'
        },
        {
            xtype: 'component',
            html: '<p>Aqui você pode exibir estatísticas, gráficos ou KPIs usando dados da Store.</p>',
            margin: '0 0 16 0'
        },
        {
            xtype: 'component',
            itemId: 'usersStats',
            html: '<ul><li>Total de usuários: <b>...</b></li><li>Ativos: <b>...</b></li><li>Inativos: <b>...</b></li></ul>'
        }
    ]
});
