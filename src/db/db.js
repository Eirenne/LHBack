//require mongoose module
var mongoose = require('mongoose');

//require database URL from properties file
var dbURL = process.env.DATABASE_CONNECTION
console.log(dbURL)
module.exports = function(){
    // if (process.env.NODE_ENV === 'testing' ||
    //     process.env.NODE_ENV === 'development'
    // ) {
    //     mongoose.set('debug', true)
    // }

    /**
     * Mongoose Configuration
     */
    var mongoConnectOptions = {
        autoReconnect: true,
        poolSize: 10,
        keepAlive: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 500,
        useNewUrlParser: true
        // promiseLibrary: global.Promise,
        // useMongoClient: true
    }
    mongoose.set('useCreateIndex', true)

    mongoose.connect(dbURL, mongoConnectOptions);

    mongoose.connection.on('connected', function(){
        console.log("Mongoose default connection is open to ", dbURL);
    });

    mongoose.connection.on('error', function(err){
        console.log("Mongoose default connection has occured "+err+" error");
    });

    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose default connection is disconnected");
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0)
        });
    });
}