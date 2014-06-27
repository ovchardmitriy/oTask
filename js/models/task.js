var app = app || {};

app.Task = Backbone.Model.extend({
    defaults: {
        /*id: 0,*/
        title: '',
        start: null,
        end: null,
        time: 0,
        running: false,
        completed: false,
        topic_id: 0,
        order_id: 0 //order number in collection
    }
});
