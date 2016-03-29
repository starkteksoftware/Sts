/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
var express = require('express');

var app = express();

 

var net = require('net');
var servers = net.Socket(function(connection) {
    
 
    
 var events = require('events');
var eventEmitter = new events.EventEmitter();
var listner1 = function listner1() {
 console.log('listner1 executed.');
}

var listener2 = function listner2(){
    servers.listen(8082, function(exception) { 
   console.log('server is listening');
   var host = servers.address().address
  var port = servers.address().port

  console.log("Example app listening at http://%s:%s", host, port)
 
}) 


}

eventEmitter.addListener('connection', listner1);
eventEmitter.addListener('lookup',listener2)
 
});
 net.connect(8082, function(exception){
      console.log("crea")
  })
  
  */
/*
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
 
// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
   console.log("Connected correctly to server");

  insertDocuments(db, function() {
    updateDocument(db, function() {
      removeDocument(db, function() {
        findDocuments(db, function() {
          db.close();
        });
      });
    });
  });
});
 
    
  var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
   
    console.dir(docs);
    callback(docs);
  });      
}
  
  
  var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.remove({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    //assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
}




var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.remove({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    //assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
};

 
 
 var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.update({ j : 3 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
};
 

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insert([
    {b : 1}, {c : 2}, {j : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3,result.insertedCount);
    
    console.log(result)
     console.log(result.result);
    
    console.log("Inserted 3 document into the document collection");
    callback(result);
  });
};




app.use(express.static('public'));
// This responds to the login page
app.get('/', function (req, res) {
      
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/login', function (req, res) {
     console.log("requested for")
 res.setHeader('Content-Type', 'application/json');
    res.json({ user: 'tobi' })
    //res.send(JSON.stringify({ user: 'jolaade' }));
 
 
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");

})


app.get('/connect',function (req,res){
    var nets = require('net');
    console.log("socket created");
    var client = nets.connect({port: 8082}, function() {
   console.log('connected to server!');  
});
client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});
client.on('end', function() { 
   console.log('disconnected from server');
});

})
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)


})

/*
var express = require('express');

var app = express();

app.use(express.static('public'));
// This responds to the login page
app.get('/', function (req, res) {
      
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/login', function (req, res) {
     console.log("requested for")
 res.setHeader('Content-Type', 'application/json');
    res.json({ user: 'tobi' })
    //res.send(JSON.stringify({ user: 'jolaade' }));
 
 
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");

})



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)


})



var WebSocketServer = require('websocket').server;
var webSocketsServerPort = 1337;
var history = [];
var clients = [];

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
var colors = [ 'red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange' ];
colors.sort(function(a,b) { return Math.random() > 0.5; } );
// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
     console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
    var connection = request.accept(null, request.origin);
  var index = clients.push(connection) - 1
  var userName = false;
  var userColor = false;
  
  console.log((new Date()) + ' Connection accepted.');
  // this will connect to the database
  if (history.length > 0) {
        connection.sendUTF(JSON.stringify( { type: 'history', data: history} ));
    }
    
    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            // process WebSocket message
           if (userName === false) { // first message sent by user is their name
                // remember user name
                userName = htmlEntities(message.utf8Data);
                // get random color and send it back to the user
                userColor = colors.shift();
                connection.sendUTF(JSON.stringify({ type:'color', data: userColor }));
                console.log((new Date()) + ' User is known as: ' + userName
                            + ' with ' + userColor + ' color.');

            } else { // log and broadcast the message
                console.log((new Date()) + ' Received Message from '
                            + userName + ': ' + message.utf8Data);
                
                // we want to keep history of all sent messages
                var obj = {
                    time: (new Date()).getTime(),
                    text: htmlEntities(message.utf8Data),
                    author: userName,
                    color: userColor
                };
                history.push(obj);
                history = history.slice(-100);
                var json = JSON.stringify({ type:'message', data: obj });
                for (var i=0; i < clients.length; i++) {
                    clients[i].sendUTF(json);
        }
    }

    connection.on('close', function(connection) {
        // close user connection
         if (userName !== false && userColor !== false) {
            console.log((new Date()) + " Peer "
                + connection.remoteAddress + " disconnected.");
            // remove user from the list of connected clients
            clients.splice(index, 1);
            // push back user's color to be reused by another user
            colors.push(userColor);
        } 
    });
}} );

} );
*/

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

var path = require("path");
 
// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var MongoClient = require('mongodb').MongoClient, assert = require('assert'); //mongo db
//var url = 'mongodb://localhost:27017/myproject'; //mongo db connection string
var url = 'mongodb://mongodb9623-env-node.j.scaleforce.net/myproject';
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
   var file =  path.join(__dirname,req.query.file);// + "\\" + ;
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
    var file =  path.join(__dirname,req.file.originalname); // + "\\" + ;
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
 