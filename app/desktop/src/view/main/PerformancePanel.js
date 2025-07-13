Ext.define('JsDaysDataStore.view.main.PerformancePanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'performance-panel',
    title: 'Performance',
    cls: 'performance-panel',
    layout: 'vbox',
    items: [{
        xtype: 'component',
        html: '<h2>Dicas de Performance</h2>'
    }, {
        xtype: 'component',
        html: '<ul>' +
              '<li>Use <b>BufferedStore</b> para grandes volumes de dados.</li>' +
              '<li>Evite filtros e ordenações pesadas no frontend.</li>' +
              '<li>Prefira paginação remota.</li>' +
              '<li>Monitore eventos da Store para identificar gargalos.</li>' +
              '<li>Utilize <b>extraParams</b> e <b>paramNames</b> para otimizar requisições.</li>' +
              '</ul>'
    }]
});
