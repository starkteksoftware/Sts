/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Load required modules
var http    = require("http");              // http server core module
var express = require("express");           // web framework external module
var io      = require("socket.io");         // web socket external module
var easyrtc = require("easyrtc");           // EasyRTC external module


 
// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var MongoClient = require('mongodb').MongoClient, assert = require('assert'); //mongo db
var url = 'mongodb://localhost:27017/myproject'; //mongo db connection string
var fs = require("fs");
var multer  = require('multer');
var globalArray = [];
var globalVideos = [];
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
 
var upload = multer({ storage: storage });


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
   console.log("Connected correctly to server");

});


var httpApp = express();
httpApp.use(express.static('public'));

httpApp.get('/', function (req, res) {
      res.sendFile( __dirname + "/" + "index.htm" );
       
});
 
httpApp.post('/CreateAccount',function (req,res){
    
   MongoClient.connect(url, function(err, db) {
   assert.equal(null, err);
   insertDocuments(db, function() {},req);
   
   });
    
    
   res.send(JSON.stringify({ message: 'Account Successfully Created... Please Login' }));
});

httpApp.get('/Dashboard',function(req,res){
     MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      
        findDashboard(db, function() {db.close()},req,res);
        
          
   });
});

httpApp.get("/Stream",function (req,res){
   var id= req.query.id;
   var name = req.query.name;
   var title = req.query.title;
   var message = req.query.message;
   var description = req.query.description;
   console.log(id);
   console.log(name);
   console.log(title);
   console.log(message);
   console.log(description);
   var vids = new getVideo(id,name,title,message,description);
   globalVideos.push(vids);
   
});
 
httpApp.get("/StreamItem",function (req,res){
   
   res.end( JSON.stringify( globalVideos ) );
   
});

function getVideo(id,name,title,message,description){
    this.id = id,
    this.name = name,
    this.title = title,
    this.message = message,
    this.description = description;
}

httpApp.get("/Store",function (req,res){
   var id= req.query.id;
   var name = req.query.name;
   console.log(id);
   console.log(name);
   var chats = new chatName(id,name);
   globalArray.push(chats);
   
});

httpApp.get("/Chats",function (req,res){
   
   res.end( JSON.stringify( globalArray ) );
   
});
 
function chatName(id,name){
    this.id = id,
    this.name = name;
}

httpApp.get('/ViewFile',function(req,res){
   console.log(req.query.file);
   var file = __dirname + "\\" + req.query.file;
   console.log(file);
   var range = req.headers.range;
   var positions = range.replace(/bytes=/, "").split("-");
   var start = parseInt(positions[0], 10);
   
   var data= "";
   
   fs.stat(file, function(err, stats) {
      var total = stats.size;
      var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
      var chunksize = (end - start) + 1;

      res.writeHead(206, {
        "Content-Range": "bytes " + start + "-" + end + "/" + total,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4"
      });
   
   var readerStream = fs.createReadStream(file, { start: start, end: end })
           .on("open", function() {
          readerStream.pipe(res);
        }).on("error", function(err) {
          res.end(err);
        });
   
   } );
   
   return;
 // Set the encoding to be utf8. 
   //readerStream.setEncoding('UTF8');

 // Handle stream events --> data, end, and error
    //readerStream.on('data', function(chunk) {
      //data += chunk;
     // readerStream.pipe(res.send(data));
     //});

    //readerStream.on('end',function(){
      //console.log(data);
      //readerStream.pipe(res.send(data))
      
     //});

   //readerStream.on('error', function(err){
   //   console.log(err.stack);
 //    });

});


httpApp.get('/Login',function(req,res){
      console.log("Came to login")
      MongoClient.connect(url, function(err, db) {
     // assert.equal(null, err);
      
        findDocuments(db, function() {db.close()},req,res);
        
          
   });
   
   
});



httpApp.post('/file_upload', upload.single('myForm'), function (req, res, next) {
     
     console.log(req.body);
     MongoClient.connect(url, function(err, db) {
    // assert.equal(null, err);
     insertUploadDocuments(db, function() {},req);
   
     });
     console.log(req.file.originalname);
    var file = __dirname + "\\" + req.file.originalname;
   fs.readFile( req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully',
                   filename:req.file.originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
});
 

 
httpApp.post('/file_uploader', function (req, res) {

   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);

   var file = __dirname + "/" + req.files.file.name;
   fs.readFile( req.files.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully',
                   filename:req.files.file.name
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
});

 

// Start Express http server on port 8080
var webServer = http.createServer(httpApp).listen(8084);

// Start Socket.io so it attaches itself to Express server
var socketServer = io.listen(webServer, {"log level":1});

// Start EasyRTC server
var rtc = easyrtc.listen(httpApp, socketServer);










var insertDocuments = function(db, callback,req) {
    
    
  // Get the documents collection
  var collection = db.collection('administrator');
  // Insert some documents
  collection.createIndex({email:1},{unique:true});
  collection.insert([
    {email : req.query.email, fullname:req.query.fullName ,password:req.query.password}
  ], function(err, result) {
  //  assert.equal(err, null);
  //  assert.equal(1,result.insertedCount);
     
     console.log(result)
     console.log(result.result);
    
    console.log("Inserted 1 document into the document collection");
    callback(result);
  });
};





var insertUploadDocuments = function(db, callback,req) {
    
    
  // Get the documents collection
  var collection = db.collection('storedvideos');
  var d = new Date();
  var presentDate = d.getDate()+"/" +d.getMonth()+"/"+d.getFullYear();
  console.log(presentDate);
  // Insert some documents
  collection.createIndex({videokey:1},{unique:true});
  collection.insert([
    {videokey : req.body.user+req.file.originalname, datastored:req.body ,date:presentDate}
  ], function(err, result) {
  //  assert.equal(err, null);
   // assert.equal(1,result.insertedCount);
     
     console.log(result)
     console.log(result.result);
    
    console.log("Inserted 1 document into the document collection");
    callback(result);
  });
};
    
  var findDocuments = function(db, callback,req,res) {
  
  // Get the documents collection
  var collection = db.collection('administrator');
  // Insert some documents
  collection.find({email:req.query.email,password:req.query.password}).toArray(function(err, docs) {
  // assert.equal(err, null);
   
    
    var documents = docs;
    if(documents[0] === undefined){
       
       res.send(JSON.stringify({ message: 'Invalid Username or password'}));
       
    }
    else{
         
        console.log(documents[0].email);
        res.send(JSON.stringify({ message: 'Log in Success',username:documents[0].fullname}));
    }
     
    
    callback(docs);
      
  });   
  

};


 var findDashboard = function(db, callback,req,res) {
  
  // Get the documents collection
  var collection = db.collection('storedvideos');
  
  // Insert some documents
  console.log(req.query.user);
  
  
   collection.find({"datastored.user":req.query.user}).toArray(function(err, docs) {
  // assert.equal(err, null);
   
     
    res.send(JSON.stringify({ documents: docs}));
   
    callback(docs);
      
  });   
  

};
