/* This is the main bot program */
let twit = require("twit"); // API client to communicate with Twitter
let config = require("./config.js"); // Pulls config file into main program

// This loads the API & secret keys to the application
let twitter = new twit(config);
// Will grab and find latest tweets for us.
var retweet = function () {
  var params = {
    query: "#cybersecurity, #breach, #Breach, #malware, #Malware, #Virus, #Ransomware",
    result_type: "recent",
    language: "en"
  }
}

twitter.get("search/tweets", params, function(err, data( {
//if we do not see errors
    if (!err) {
       var retweetID = data.statuses[0].id_str;
twitter.post("statuses/retweet/:id", {
    id: retweetID
}, function(err, response) {
    if (response) {
       console.log("Retweeted!!!");
}
    if (err) {
       console.log("Something went wrong while 'tweeting!!'");
}
});
}
    else {
       console.log("Something went wrong while searching");
}
});
}

setInterval(retweet, 3000000);
