var express = require("express"),
	http = require("http"),
	Crawler = require("simplecrawler"),
	StringDecoder = require("string_decoder").StringDecoder

Crawler.crawl("http://example.com/")
    .on("fetchcomplete", function(queueItem, responseBuffer, response){
        console.log("Whole item", queueItem);
        console.log("RESPONSEBUFFER", responseBuffer);
        console.log("RESPONSE", response);
        console.log("Completed fetching resource:", queueItem.url);
        var decoder = new StringDecoder('utf8');
        textChunk = decoder.write(responseBuffer);
        console.log(textChunk)
    });

var app = express();

var server = http.createServer(app);

server.listen(3000);