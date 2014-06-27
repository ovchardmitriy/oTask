module( "TaskList Backbone.Collection", {
    setup: function() {
        // Define new todos
        this.taskOne = new app.Task();
        this.taskTwo = new app.Task();
        this.taskThree = new app.Task({completed: true, topic_id: 1});
        this.tasks = new app.TaskList([this.taskOne, this.taskTwo, this.taskThree]);
    },
    teardown: function() {
        // run after
    }
});

test( "Should have the Todo model", function() {
    expect( 1 );

	equal( this.tasks.model, app.Task );
});

test( "Should return lists of completed and remaining models", function() {
    expect( 2 );
	strictEqual( this.tasks.completed().length, 1, "passes as amount of completed models === 1" );
    strictEqual( this.tasks.remaining().length, 2, "passes as amount of remaining models === 2" );
});

test( "Should return lists of models which belong to certain topic", function() {
    expect( 2 );
	strictEqual( this.tasks.belongToTopic( 0 ).length, 2, "passes as amount of models with topic_id 0 === 2" );
    strictEqual( this.tasks.belongToTopic( 1 ).length, 1, "passes as amount of models with topic_id 1 === 1");
});
