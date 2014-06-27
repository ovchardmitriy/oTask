var app = app || {};

app.Topic = Backbone.Model.extend({
    defaults: {
        title: '',
        start: null,
        end: null,
        time: 0,
        completed: false,
        order_id: 0
    }
});
