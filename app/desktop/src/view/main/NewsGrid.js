Ext.define('JsDaysDataStore.view.main.NewsGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'news-grid',
    title: 'News',
    cls: 'news-grid',
    requires: [
        'Ext.grid.plugin.PagingToolbar'
    ],
    plugins: {
        gridfilterbar: true,
        xpagingtoolbar: {
            extraItems: [{
                xtype: 'textfield',
                flex: 1,
                margin: '0 32 0 32',
                placeholder: 'Search here...',
                bind: {
                    value: '{searchValue}'
                }
            }]
        }
    },
    bind: {
        store: '{newsStore}'
    },

    columns: [
        {
            dataIndex: 'urlToImage',
            text: 'Title',
            flex: 1,
            cell: { encodeHtml: false },
            renderer(value, record) {
                return `<div style="display: flex; align-items: center;"> 
                            <img src="${value}" style="width: 32px; height: 32px; border-radius: 8px;">&nbsp;
                            ${record.get('title')}
                        </div>`;
            }
        },
        { dataIndex: 'sourceName', text: 'Source', width: 128 },
        { dataIndex: 'author', text: 'Author', width: 128 },
        { dataIndex: 'description', text: 'Description', flex: 1 },
        { dataIndex: 'url', text: 'URL', width: 128 },
        { dataIndex: 'publishedAt', text: 'Published At', formatter: 'date("Y-m-d H:i:s")', flex: 1 }
    ],
    listeners: {
        select: 'onRowSelect'
    }
});
