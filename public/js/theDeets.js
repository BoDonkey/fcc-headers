var theDeets = function(headers){
   
  var langString = headers["accept-language"];
  var uaString = headers["user-agent"];
  var ipString = headers["x-forwarded-for"];
    var theLang = langString.substr(0, 5);
    var theIP = ipString;
    var thePattern = new RegExp(/\((\S{1,}\s[^\)]{1,})/);
    var match = thePattern.exec(uaString);
    var theSoftware = match[1];
    var finalDeets = '{ "ipaddress": "'+ theIP +'", "language": "' +theLang+'", "software": "' + theSoftware+'"}';
    return (finalDeets);
    
};
module.exports.theDeets = theDeets;