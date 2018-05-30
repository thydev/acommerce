var headers = {
  "Content-type"     : "application/json",
  "app_id"          : "",
  "app_key"         : ""
};
//Need to adjust payload: subject_id name With Every new registration and alter for login
var payload  = { "image" :  "", "subject_id": "", "gallery_name": "acommerce"};
var width = 320;    // We will scale the photo width to this
var height = 0;     // This will be computed based on the
var streaming = false;
var video = null;
var canvas = null;
var photo = null;
var startbutton = null;
console.log(width)
console.log(window.location.href);
var url = window.location.href;
// Below is for facial recog Registration
if(url.includes("/facialrecogreg")){
  window.addEventListener('load', startup, false);
    function startup() {
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        startbutton = document.getElementById('startbutton');
        console.log(startbutton)

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function(stream) {
            video.srcObject = stream;
            console.log(video);
            console.log(video.srcObject);
            console.log(video.srcObject.active);
            video.play();
        })
        .catch(function(err) {
            console.log("An error occured! " + err);
        });

        video.addEventListener('canplay', function(ev){
            if (!streaming) {
                height = video.videoHeight / (video.videoWidth/width);
                console.log(ev);
                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);
        clearphoto();
    }
    function clearphoto() {
        var context = canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);
        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }
    function ready(){
      var picCount = 0;
      var picFunction = setInterval(takepicture, 600);
      function takepicture() {
          let emailcheck = document.getElementById('emailUsed');
          console.log("EmailCheck", emailcheck);
          if(emailcheck){
            clearInterval(picFunction);
          }
          if(!emailcheck){
            picCount++;
            if(picCount == 4){
              clearInterval(picFunction);
              let stream = video.srcObject;
              let tracks = stream.getTracks();
              tracks.forEach((track)=>{
                  console.log(track);
                  track.stop();
              })
              return;
            }
            var context = canvas.getContext('2d');
            if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);
            //send this data to facialrecognition for testing
            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
            payload.image = data;
    //FACIAL RECOGNITION API BELOW
            var useremail = document.getElementById('email').value;
            console.log(useremail);
            payload.subject_id = useremail;
            var url = "http://api.kairos.com/enroll";
    // make request with AJAX:
            $.ajax(url, {
                headers  : headers,
                type: "POST",
                data: JSON.stringify(payload),
                dataType: "text"
            }).done(function(response){
                console.log(response);
            });
            } else {
            clearphoto();
            }
          }
      }
    }
  }
  //Below is for facial Recog Login:
  if(url.includes("/facialrecoglogin")){
    window.addEventListener('load', startuplogin, false);
    function startuplogin() {
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        startbutton = document.getElementById('startbutton');
        console.log(startbutton)

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function(stream) {
            video.srcObject = stream;
            console.log(video);
            console.log(video.srcObject);
            console.log(video.srcObject.active);
            video.play();
        })
        .catch(function(err) {
            console.log("An error occured! " + err);
        });
        video.addEventListener('canplay', function(ev){
            if (!streaming) {
                height = video.videoHeight / (video.videoWidth/width);
                console.log(ev);
                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);
        clearphoto();
    }
    function clearphoto() {
        var context = canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);
        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }
    function takepicture() {
          var context = canvas.getContext('2d');
          if (width && height) {
          canvas.width = width;
          canvas.height = height;
          context.drawImage(video, 0, 0, width, height);
          //send this data to facialrecognition for testing
          var data = canvas.toDataURL('image/png');
          photo.setAttribute('src', data);
          payload.image = data;
  //FACIAL RECOGNITION API BELOW
          //For log in have user input name, grab that data to verify. Send data to TS component if successful (meeting CI level then log-in, pass data to DB to log user in)
          var useremail = document.getElementById('email').value;
          console.log(useremail);
          payload.subject_id = useremail;
          var url = "http://api.kairos.com/verify";
  // make request with AJAX:
          $.ajax(url, {
              headers  : headers,
              type: "POST",
              data: JSON.stringify(payload),
              dataType: "json"
          }).done(function(response){
              console.log(response);
              if(response['Errors']){
                return;
              }
              let resCI = response.images[0].transaction.confidence;
              console.log(resCI);
              let Confidence = document.getElementById("CI");
              Confidence.value = resCI;
          });
          } else {
          clearphoto();
          }
        }
    }
