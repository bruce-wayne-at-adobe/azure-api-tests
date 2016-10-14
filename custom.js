window.onload = function() {

var jcontent = {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.4140625}],"tags":[{"name":"person","confidence":0.999476969242096},{"name":"people","confidence":0.81858372688293457},{"name":"crowd","confidence":0.0085046868771314621}],"requestId":"92d4fbc5-62b0-4857-9a46-43db69a89301","metadata":{"width":1280,"height":960,"format":"Jpeg"}}
var text = document.getElementById('output');

var jcontent2 = {"categories":[{"name":"others_","score":0.00390625},{"name":"people_","score":0.3125,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99692058563232422},{"name":"spectacles","confidence":0.15585459768772125}],"requestId":"41ff5c28-c766-41fd-b1f9-d1c1d6b047d2","metadata":{"width":1818,"height":1228,"format":"Jpeg"}}
var text2 = document.getElementById('output2');

var jcontent3 = {"categories":[{"name":"people_crowd","score":0.484375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.3125}],"tags":[{"name":"person","confidence":0.999496579170227}],"requestId":"2c52e5aa-e16c-4737-87aa-3d7e68c11096","metadata":{"width":2816,"height":2112,"format":"Jpeg"}}
var text3 = document.getElementById('output3');
    
var jcontent4 = {"categories":[{"name":"people_","score":0.94921875,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99035865068435669},{"name":"outdoor","confidence":0.99035370349884033},{"name":"woman","confidence":0.902657687664032},{"name":"street","confidence":0.75811612606048584}],"requestId":"abe0e56d-8879-441b-b076-ba1a8da1a092","metadata":{"width":960,"height":1280,"format":"Jpeg"}}
var text4 = document.getElementById('output4');

 
 for (i = 0; i < 3 ; i++) {
      var a = "name: " + (jcontent.tags)[i].name + ", confidence: " + (jcontent.tags)[i].confidence
    text.innerHTML = text.innerHTML + "<br>" + a;
//    text4.innerHTML = text4.innerHTML + "</br>" + d;

   var output = document.getElementById('output');
//       test.append(a);

text.innerHTML = text.innerHTML + 'jcontent';
  }
 console.log(jcontent)
  for (i = 0; i < 2; i++) {
//       debugger;
      var b = "name: " + (jcontent2.tags)[i].name + ", confidence: " + (jcontent2.tags)[i].confidence
         text2.innerHTML = text2.innerHTML + "</br>" + b;
      
   var output2 = document.getElementById('output2')
 
   text2.innerHTML = text2.innerHTML + 'jcontent2';
//     text2.appendChild(b);
  }
 console.log(jcontent2)
//  console.log(jcontent3)
   for (i = 0; i < 1; i++) {
      var c = "name: " + (jcontent3.tags)[i].name + ", confidence: " + (jcontent3.tags)[i].confidence
         text3.innerHTML = text3.innerHTML + "</br>" + c;
      
   var output3 = document.getElementById('output3')
 
   text3.innerHTML = text3.innerHTML + 'jcontent3';
       console.log(jcontent3);
//     text2.appendChild(b);
  }
    
   
//  console.log(jcontent3)
   for (i = 0; i < 4; i++) {
      var d = "name: " + (jcontent4.tags)[i].name + ", confidence: " + (jcontent4.tags)[i].confidence
         text4.innerHTML = text4.innerHTML + "</br>" + d;
        console.log(jcontent4)   
   //var output4 = document.getElementById('output4')
 
   //text4.innerHTML = text4.innerHTML + 'jcontent4';
   //    console.log(jcontent4);
//     text2.appendChild(b);
  }
 //text.innerHTML = jcontent.tags[0].confidence
};
