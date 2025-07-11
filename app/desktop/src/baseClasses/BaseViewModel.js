Ext.define('JsDaysDataStore.baseClasses.BaseViewModel', {
    extend: 'Ext.app.ViewModel',
    data: {
        manifest: Ext.manifest
    },
    stores: {
        allFeatures: {
            type: 'features',
            autoLoad: true,
            loadingLabel: 'Funcionalidades'
        }
    },
    privates: {
        _loadSession() {
            this.getStore('allFeatures').loadData(Ext.decode(Session.profile.features, true), false);
        },
        _consumeSession() {
            const me = this;
            if (Session && Session.profile && Session.profile.features) {
                me.set('session', Session);
            }
            if (Session && Session.profile && Session.profile.features) {
                me.onLoadSession();
                return;
            }
        }
    },
    constructor(config) {
        const me = this;
        me.callParent([arguments]);
        me._consumeSession();
        Ext.GlobalEvents.on('loadSession', me.onLoadSession, me);
    },
    onLoadSession() {
        this._loadSession();
    }
});
