window.onload = function() {

var jcontent = {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.4140625}],"tags":[{"name":"person","confidence":0.999476969242096},{"name":"people","confidence":0.81858372688293457},{"name":"crowd","confidence":0.0085046868771314621}],"requestId":"92d4fbc5-62b0-4857-9a46-43db69a89301","metadata":{"width":1280,"height":960,"format":"Jpeg"}}
var text = document.getElementById('output');

var jcontent2 = {"categories":[{"name":"others_","score":0.00390625},{"name":"people_","score":0.3125,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99692058563232422},{"name":"spectacles","confidence":0.15585459768772125}],"requestId":"41ff5c28-c766-41fd-b1f9-d1c1d6b047d2","metadata":{"width":1818,"height":1228,"format":"Jpeg"}}
var text2 = document.getElementById('output2');

var jcontent3 = {"categories":[{"name":"people_crowd","score":0.484375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.3125}],"tags":[{"name":"person","confidence":0.999496579170227}],"requestId":"2c52e5aa-e16c-4737-87aa-3d7e68c11096","metadata":{"width":2816,"height":2112,"format":"Jpeg"}}
var text3 = document.getElementById('output3');
    
var jcontent4 = {"categories":[{"name":"people_","score":0.94921875,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99035865068435669},{"name":"outdoor","confidence":0.99035370349884033},{"name":"woman","confidence":0.902657687664032},{"name":"street","confidence":0.75811612606048584}],"requestId":"abe0e56d-8879-441b-b076-ba1a8da1a092","metadata":{"width":960,"height":1280,"format":"Jpeg"}}
var text4 = document.getElementById('output4');

var jcontent5 = {"categories":[{"name":"people_","score":0.33203125,"detail":{"celebrities":[]}},{"name":"people_group","score":0.640625}],"tags":[{"name":"person","confidence":0.99981540441513062},{"name":"clothing","confidence":0.93182039260864258},{"name":"posing","confidence":0.92629814147949219},{"name":"suit","confidence":0.69583016633987427}],"requestId":"ed7845f5-e6ac-46ce-bb1f-69f18ce58f0a","metadata":{"width":1280,"height":960,"format":"Jpeg"}}
var text5 = document.getElementById('output5');
    
var jcontent6 = {"categories":[{"name":"people_","score":0.3984375,"detail":{"celebrities":[]}},{"name":"people_group","score":0.44921875}],"tags":[{"name":"person","confidence":0.9997829794883728},{"name":"clothing","confidence":0.95785820484161377},{"name":"posing","confidence":0.83074581623077393},{"name":"suit","confidence":0.63975614309310913}],"requestId":"faf12b74-56da-4921-a86b-3e36abd74070","metadata":{"width":1280,"height":960,"format":"Jpeg"}}
var text6 = document.getElementById('output6');

var jcontent7 = {"categories":[{"name":"people_group","score":0.6328125,"detail":{"celebrities":[]}}],"tags":[{"name":"person","confidence":0.99835050106048584},{"name":"indoor","confidence":0.93220812082290649},{"name":"posing","confidence":0.826675534248352}],"requestId":"75616523-ca5e-47b3-9db4-5b2361138f15","metadata":{"width":2576,"height":1952,"format":"Jpeg"}}
var text7 = document.getElementById('output7');
    
    
 for (i = 0; i < jcontent.tags.length ; i++) {
      var a = "name: " + (jcontent.tags)[i].name + ", confidence: " + (jcontent.tags)[i].confidence
    text.innerHTML = text.innerHTML + "<br>" + a;
//    text4.innerHTML = text4.innerHTML + "</br>" + d;

   var output = document.getElementById('output');
//       test.append(a);

text.innerHTML = text.innerHTML + 'jcontent';
  }
 console.log(jcontent)
  for (i = 0; i < 2; i++) {
      var b = "name: " + (jcontent2.tags)[i].name + ", confidence: " + (jcontent2.tags)[i].confidence
         text2.innerHTML = text2.innerHTML + "</br>" + b;   
   var output2 = document.getElementById('output2') 
   text2.innerHTML = text2.innerHTML + 'jcontent2';
  }
 console.log(jcontent2)
   for (i = 0; i < 1; i++) {
      var c = "name: " + (jcontent3.tags)[i].name + ", confidence: " + (jcontent3.tags)[i].confidence
         text3.innerHTML = text3.innerHTML + "</br>" + c;
      
   var output3 = document.getElementById('output3')
 
   text3.innerHTML = text3.innerHTML + 'jcontent3';
       console.log(jcontent3);
  }
    
   for (i = 0; i < 4; i++) {
      var d = "name: " + (jcontent4.tags)[i].name + ", confidence: " + (jcontent4.tags)[i].confidence
         text4.innerHTML = text4.innerHTML + "</br>" + d;
        console.log(jcontent4)   
  }
      for (i = 0; i < 4; i++) {
      var e = "name: " + (jcontent5.tags)[i].name + ", confidence: " + (jcontent5.tags)[i].confidence
         text5.innerHTML = text5.innerHTML + "</br>" + e;
        console.log(jcontent5)   
  }
      for (i = 0; i < 4; i++) {
      var f = "name: " + (jcontent6.tags)[i].name + ", confidence: " + (jcontent6.tags)[i].confidence
         text6.innerHTML = text6.innerHTML + "</br>" + f;
        console.log(jcontent6)   
  }
  
      for (i = 0; i < 3; i++) {
      var g = "name: " + (jcontent7.tags)[i].name + ", confidence: " + (jcontent7.tags)[i].confidence
         text7.innerHTML = text7.innerHTML + "</br>" + g;
        console.log(jcontent7)   
  }
    document.getElementById("Save").onclick = function fun() {
        alert("hello");
        f1();
        //validation code to see State field is mandatory.  
    }
    
//   document.getElementById() function sendFileRequest(file) {

//         var params = {
//             // Request parameters
//             "visualFeatures": "Categories,Tags",
//             "details": "Celebrities",
//         };
      
//         $.ajax({
//             url: "https://api.projectoxford.ai/vision/v1.0/analyze?" + $.param(params),
//             beforeSend: function(xhrObj){
//                 // Request headers
//                 xhrObj.setRequestHeader("Content-Type","application/octet-stream");
//                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","ef16492357394ee2b719b50fb10cd6c9");
//             },
//             type: "POST",
//             // Request body
//             data: file,
//             processData: false,
//             contentType: "application/octet-stream"
//         })
//         .done(function(data) {
//             alert("success");
//         })
//         .fail(function(jqHQR, status) {
//             alert("error : " + jqHQR + " status " + status);
//         });

// }


// console.log("checking in from custom!")
    
};
