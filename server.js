var http = require('http');
var url ='http://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&APPID=05df2f89887cd93c3a09d721a57acc06&units=metric';
 
var server = http.createServer(function(req,response){
    var request = require('request');
    request(url,function(err,res,body){
        var data  = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>"+ 'cityName' + data['name']+ '<br>'+"</h1>");
        response.write("<h2>"+'Temperature'+data.main['temp']+'<br>'+ "</h2>");
        response.write("<h2>" + 'Sunset tIME ' + new Date(data.sys['sunset']*1000)+ "</h2>")
        response.write("<div><body><html>");
        response.end();


    });
}).listen(3000);

//Will add html to look more good
