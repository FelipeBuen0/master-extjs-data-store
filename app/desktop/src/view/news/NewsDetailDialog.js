Ext.define('JsDaysDataStore.view.news.NewsDetailDialog', {
    extend: 'Ext.Dialog',
    xtype: 'news-detail-dialog',
    controller: 'news-detail-dialog',
    title: 'Article Details',
    modal: true,
    width: 500,
    bodyPadding: 10,
    scrollable: true,
    defaultFocus: 'button',

    items: [{
        xtype: 'textfield',
        reference: 'detailsContent',
        label: 'Title',
        bind: {
            value: '{selectedNews.title}'
        }
    }, {
        xtype: 'textfield',
        label: 'Description',
        bind: {
            value: '{selectedNews.description}'
        }
    }, {
        xtype: 'textareafield',
        label: 'Content',
        bind: {
            value: '{selectedNews.content}'
        }
    }],

    bbar: ['->', {
        xtype: 'button',
        text: 'Close',
        handler: 'closeHandler'
    }, {
        xtype: 'button',
        text: 'Save',
        handler: 'saveHandler'
    }]
});
