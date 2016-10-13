window.onload = function() {
var jcontent = {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.4140625}],"tags":[{"name":"person","confidence":0.999476969242096},{"name":"people","confidence":0.81858372688293457},{"name":"crowd","confidence":0.0085046868771314621}],"requestId":"92d4fbc5-62b0-4857-9a46-43db69a89301","metadata":{"width":1280,"height":960,"format":"Jpeg"}}
var text = document.getElementById('output2');

var jcontent2 = {"categories":[{"name":"others_","score":0.00390625},{"name":"people_","score":0.3125,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99692058563232422},{"name":"spectacles","confidence":0.15585459768772125}],"requestId":"41ff5c28-c766-41fd-b1f9-d1c1d6b047d2","metadata":{"width":1818,"height":1228,"format":"Jpeg"}}
var text2 = document.getElementById('output'); 

 var tags = function() {
 var confidencejson = jcontent.tags.name
       var namejson = jcontent.tags.confidence

 console.log(confidencejson);
 console.log(namejson);

 console.log(jcontent.tags);
 console.log("this is the jcontent:"jcontent2);
 }
 
 tags();
 for (i = 0; i < 3; i++) {
      var a = "name: " + (jcontent.tags)[i].name + ", confidence: " + (jcontent.tags)[i].confidence
    text.innerHTML = text.innerHTML + a;
    text.appendChild(a);
  }
 
  for (i = 0; i < 3; i++) {
      var b = "name: " + (jcontent2.tags)[i].name + ", confidence: " + (jcontent2.tags)[i].confidence
    text2.innerHTML = text2.innerHTML + a;
    text2.appendChild(a);
  }
 //text.innerHTML = jcontent.tags[0].confidence
};
