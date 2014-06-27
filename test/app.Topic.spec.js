module( "Topic Backbone.Model" );

test( "Can be created with default values for its attributes.", function() {
    expect( 5 );

    var topic = new app.Topic();
    strictEqual( topic.get( "title" ), "", "fails as title !== ''" );
    strictEqual( topic.get( "start" ), null, "fails as start !== null" );
    strictEqual( topic.get( "end" ), null, "fails as end !== null" );
    strictEqual( topic.get( "time" ), 0, "fails as time !== 0" );
    strictEqual( topic.get( "completed" ), false, "fails as completed !== false" );
});
