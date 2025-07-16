Ext.define('JsDaysDataStore.view.news.NewsDetailDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.news-detail-dialog',
    closeHandler() {
        this.getView().close();
    },
    saveHandler () {
        const viewModel = this.getViewModel();
        const selectedNews = viewModel.get('selectedNews');
        if (selectedNews) {
            selectedNews.save({
                success: function() {
                    Ext.Msg.alert('Success', 'News article saved successfully.');
                },
                failure: function() {
                    Ext.Msg.alert('Error', 'Failed to save news article.');
                }
            });
        }
    }
});
