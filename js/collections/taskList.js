var app = app || {};

app.TaskList = Backbone.Collection.extend({
	model: app.Task,

    localStorage: new Backbone.LocalStorage( 'oTask-tasks' ),

	// Filter down the list of all task items that are finished.
    completed: function() {
        return this.filter(function( task ) {
            return task.get( 'completed' );
        });
    },

    // Filter down the list to only task items that are still not finished.
    remaining: function() {
        return this.without.apply( this, this.completed() );
    },
    
    belongToTopic: function( topic ) {
        return this.where({ topic_id: topic });
    }
});

/*app.Tasks = new app.TaskList();*/