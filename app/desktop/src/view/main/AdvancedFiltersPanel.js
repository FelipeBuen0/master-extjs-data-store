Ext.define('JsDaysDataStore.view.main.AdvancedFiltersPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'advanced-filters-panel',
    title: 'Filtros Avançados',
    cls: 'advanced-filters-panel',
    layout: 'vbox',
    items: [{
        xtype: 'component',
        html: '<h2>Filtros Avançados</h2>'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Nome',
        emptyText: 'Filtrar por nome...'
    }, {
        xtype: 'combobox',
        fieldLabel: 'Status',
        store: ['Ativo', 'Inativo'],
        emptyText: 'Selecione o status'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Data de Cadastro',
        emptyText: 'Filtrar por data...'
    }, {
        xtype: 'button',
        text: 'Aplicar Filtros',
        margin: '10 0 0 0'
    }]
});
