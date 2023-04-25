//https://teachablemachine.withgoogle.com/models/rkwwAO0CE/

Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rkwwAO0CE/model.json',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, getResult);
}

function getResult(error, results){
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("name_of_obj").innerHTML = results[0].label;
        document.getElementById("accuracy_of_identification").innerHTML = results[0].confidence.toFixed(3);
    }
}