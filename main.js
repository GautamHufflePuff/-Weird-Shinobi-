function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/2Z0pdRUhB/model.json",
    modelready
  );
}
function modelready() {
  classifier.classify(gotResults);
}
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML =
      "I can hear - -" + results[0].label;
    document.getElementById("result_confidence").innerHTML =
      "Accuracy - -" + (results[0].confidence * 100).toFixed(2) + " %";
    document.getElementById("result_label").style.color =
      "rgb(" +
      random_number_r +
      "," +
      random_number_g +
      ", " +
      random_number_b +
      ")";
      document.getElementById("result_confidence").style.color =
        "rgb(" +
        random_number_r +
        "," +
        random_number_g +
        ", " +
        random_number_b +
      ")";
    img1 = document.getElementById("Itachi")
    img2 = document.getElementById("Naruto")
    img3 = document.getElementById("Jiraya");
    img4 = document.getElementById("Kakashi");
    if (results[0].label == "Clap") {
      img1.src = "bfS.gif";
      img2.src = "oof.PNG";
      img3.src = "Capture.PNG";
      img4.src = "heheheheh.PNG";
    } else if (results[0].label == "Snap") {
      img1.src = "Itachi.PNG";
      img2.src = "naru-icegif.gif";
      img3.src = "Capture.PNG";
      img4.src = "heheheheh.PNG";
    } else if (results[0].label == "Bell") {
      img1.src = "Itachi.PNG";
      img2.src = "oof.PNG";
      img3.src = "Jiraya.gif";
      img4.src = "heheheheh.PNG";
    } else{
      img1.src = "Itachi.PNG";
      img2.src = "oof.PNG";
      img3.src = "Capture.PNG";
      img4.src = "kakashi-dance.gif";
    }
  }
}
