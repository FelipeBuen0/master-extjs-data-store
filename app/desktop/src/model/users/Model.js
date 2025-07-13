Ext.define('JsDaysDataStore.model.users.Model', {
    extend: 'JsDaysDataStore.model.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'jobTitle',
        type: 'string'
    }, {
        name: 'email',
        type: 'string'
    }, {
        name: 'status',
        type: 'string'
    }]
});
