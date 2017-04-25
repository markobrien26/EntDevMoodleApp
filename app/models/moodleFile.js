// Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Defines the File schema
var MoodleFileSchema = new Schema({
    name: {type: String, required: true},
    moodleFile: {type: Schema.Types.Mixed, required: true},
    moreMoodleFiles: Schema.Types.Mixed,
    module: {type: String, default: ""},
    createdAt: {type: Date, default: Date.now},    
});

// Sets the createdAt parameter equal to the current time
MoodleFileSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

// Exports the FileSchema for use elsewhere.
module.exports = mongoose.model('MoodleFile', MoodleFileSchema);
