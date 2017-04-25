// Dependencies
var mongoose  = require('mongoose');
var MoodleFile = require('../models/moodleFile');

// App routes

module.exports = function() {
    return {
        /*
         * Get route to retrieve all the files.
         */
         getAll : function(req, res){
            //Query the DB and if no errors, send all the files
            var query = MoodleFile.find({});
            query.exec(function(err, moodleFiles){
                if(err) res.send(err);
                //If no errors, send them back to the client
                res.json(moodleFiles);
            });
        },
        /*
         * Post route to save a new file into the DB.
         */
         post: function(req, res){
            //Creates a new file
            var newMoodleFile = new MoodleFile(req.body);
            //Save it into the DB.
            newMoodleFile.save(function(err){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(req.body);
            });
        },
        /*
         * Get a single file based on id.
         */
         getOne: function(req, res){
            MoodleFile.findById(req.params.id, function(err, moodleFile){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(moodleFile);
            });     
        }
    }
};  