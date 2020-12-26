Webcam.set({
    width: 350,
    height: 270,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='rounded_img' src='" + data_uri + "'/>";
    })
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yryBROvV8/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model is loaded");
}

function check(){
    var Image = document.getElementById("rounded_img");
    classifier.classify(Image,gotResult);


}

function gotResult(error,results){
    if(error){
        console.error(error);
        window.alert(error);
    }
    else{
        console.log(results);
        document.getElementById('obj_name').innerHTML = results[0].label;
        document.getElementById('result_accuracy_name').innerHTML = results[0].confidence.toFixed(4);
    }
}