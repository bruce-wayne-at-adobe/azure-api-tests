window.onload = function() {
var jcontent = {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.4140625}],"tags":[{"name":"person","confidence":0.999476969242096},{"name":"people","confidence":0.81858372688293457},{"name":"crowd","confidence":0.0085046868771314621}],"requestId":"92d4fbc5-62b0-4857-9a46-43db69a89301","metadata":{"width":1280,"height":960,"format":"Jpeg"}}
var output = document.getElementById('output');

var tags = function() {
 var confidencejson = jcontent.tags
 var namejson = jcontent.tags

 console.log(confidencejson);
 console.log(namejson);


  
  
 output.innerHTML = confidencejson
 
}


//  output.innerHTML = namejson

 

}
tags();

