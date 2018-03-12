var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://lisa.stuy.edu:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodejs");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("nodejs");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });