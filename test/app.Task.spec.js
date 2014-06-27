module( "Task Backbone.Model", {
    /*
    setup: function() {
        this.i = 0;
        debugger;
        if (!app.Tasks) {
            app.Tasks = {};
        }
        this.nextIdStub = this.stub( app.Tasks, "nextId" );
        this.nextIdStub.returns( this.i++ );
    },
    teardown: function() {
        app.Tasks.nextId.restore();
    }*/
});

test( "Can be created with default values for its attributes.", function() {
    expect( 8 );

    var task = new app.Task();
    strictEqual( task.get( "title" ), "", "fails as title !== ''" );
    strictEqual( task.get( "start" ), null, "fails as start !== null" );
    strictEqual( task.get( "end" ), null, "fails as end !== null" );
    strictEqual( task.get( "time" ), 0, "fails as time !== 0" );
    strictEqual( task.get( "running" ), false, "fails as running !== false" );
    strictEqual( task.get( "completed" ), false, "fails as completed !== false" );
    strictEqual( task.get( "topic_id" ), 0, "fails as topic_id !== 0" );
    strictEqual( task.get( "order_id" ), 0, "fails as order_id !== 0" );
});
