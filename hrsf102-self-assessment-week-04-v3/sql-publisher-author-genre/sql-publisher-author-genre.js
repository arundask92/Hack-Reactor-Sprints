var Schemas = {
  FIX_ME: "wrong answer",
  OPTION_0: "option 0",
  OPTION_1: "option 1",
  OPTION_2: "option 2",
  OPTION_3: "option 3",
  OPTION_4: "option 4",
  OPTION_5: "option 5",
  OPTION_6: "option 6"
};

var sqlPublisherAuthorSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
/* 
  This is a many to many relationship and due to that there is 
  a join table (Publisher_Author) to hold both publisher and author primary keys as foriegn keys.
*/

var sqlPublisherGenreSchema = Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
/* 
  This is a one to many relationship the foriegn key should be in the publisher table
*/
var sqlAuthorGenreSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
/* 
  This is a many to many relationship same as above and due to that there is 
  a join table (author_genre) to hold both author and genre primary keys as foriegn keys.
*/
