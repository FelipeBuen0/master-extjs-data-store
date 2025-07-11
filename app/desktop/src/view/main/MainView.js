Ext.define('JsDaysDataStore.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'main-view',
    controller: 'main-view',
    viewModel: 'main-view',
    cls: 'main-view',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'component',
            html: `<h1>Welcome to JsDays Data Store</h1>
                        <p>This is a sample application demonstrating the use of Ext JS with a data store.</p>`
        }, {
            xtype: 'component',
            reference: 'contentContainer',
            html: `<p>Content will be loaded here based on the selected feature.</p>`,
            flex: 1,
            layout: 'fit'
        }, {
            xtype: 'container',
            html: `<p>Content will be loaded here based on the selected feature.</p>`,
            flex: 1,
            layout: 'fit'
        }]
    }]
});
