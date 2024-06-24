
function startClassification()
{

navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hyyxgAbU3/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
    console.error(error);
    }else{}
    console.log(results);
    red = Math.floor(Math.random() * 255) + 1;
    green = Math.floor(Math.random() * 255) + 1;
    blue = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = count
    results[0].label;
    document.getElementById("result_confidence").innerHTML = count
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("
    +red+", "+green+", "+blue+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +red+","+green+", "+blue+")";
      document.getElementById('cat');
    document.getElementById('dog');
  document.getElementById('cow');
document.getElementById('lion');

    if (results [0].label == "roar") {
        img.src='lion.png';
    } else if (results [0].label == "mooing") {
        img.src='cow.png';

    } else if (results [0].label == "barking") {
        img.src='dog.png';
    } else {
        img.src='cat.png';
    }
    if (results [1].label == "roar") {
        img.src='lion.png';
    } else if (results [1].label == "mooing") {
        img.src='cow.png';

    } else if (results [1].label == "barking") {
        img.src='dog.png';
    } else {
        img.src='cat.png';
    }
}