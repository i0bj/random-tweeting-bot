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
