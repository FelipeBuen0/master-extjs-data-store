Ext.define('JsDaysDataStore.view.main.DashboardPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboard-panel',
    title: 'Dashboard',
    cls: 'dashboard-panel',
    layout: 'vbox',
    items: [{
        xtype: 'component',
        html: '<h2>Resumo dos Dados</h2>'
    }, {
        xtype: 'component',
        html: '<p>Aqui você pode exibir estatísticas, gráficos ou KPIs usando dados da Store.</p>'
    }, {
        xtype: 'component',
        html: '<ul><li>Total de usuários: <b>...</b></li><li>Ativos: <b>...</b></li><li>Inativos: <b>...</b></li></ul>'
    }]
});
