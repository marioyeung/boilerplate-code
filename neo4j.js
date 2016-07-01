// require npm module
var neo4j = require('neo4j-driver').v1;

// start neo4j database
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
var session = driver.session();

// query the neo4j database
session
  .run(cypher)
  .then( function( result ) {
    // TODO: do with result fetched from neo4j database
    // close neo4j database
    session.close();
    driver.close();
  });
