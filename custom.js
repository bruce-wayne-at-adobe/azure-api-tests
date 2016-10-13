window.onload = function() {
var jcontent = {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.4140625}],"tags":[{"name":"person","confidence":0.999476969242096},{"name":"people","confidence":0.81858372688293457},{"name":"crowd","confidence":0.0085046868771314621}],"requestId":"92d4fbc5-62b0-4857-9a46-43db69a89301","metadata":{"width":1280,"height":960,"format":"Jpeg"}}
var text = document.getElementById('output');

var tags = function() {
 var confidencejson = jcontent.tags.name
 var namejson = jcontent.tags.confidence

 console.log(confidencejson);
 console.log(namejson);

console.log(jcontent.tags);
// tags.forEach( function (confidence)

// var jcontent.tags = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//var i; 
//for (i = 0; i < jcontent.length; i++) {
//    var a = "name: " + jcontent[i].name + ", confidence: " + jcontent[i].confidence
//    text.innerHTML = a;
//}
// document.getElementById("").innerHTML = text;

//  var str ="";
// for (jcontent.tags in tags) {
//  str += jcontent.tags.name + " : " + jcontent.tags.confidence + "<br>";
// }
  
  
//  output.innerHTML = str;
 
}

for (i = 0; i < 3; i++) {
    var a = "name: " + (jcontent.tags)[i].name + ", confidence: " + (jcontent.tags)[i].confidence
    text.appendChild(a);
}

 //text.innerHTML = jcontent.tags[0].confidence

 tags();
}
