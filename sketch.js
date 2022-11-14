//variable with image results
const element = document.getElementById("imageResult");

function startImageScan() {
  // initialized the ml5.js image classifier with MobileNet
  const classifier = ml5.imageClassifier("MobileNet");

  classifier.classify(
    document.getElementById("uploadedImage"),
    imageScanResult
  );
  element.innerHTML = "...";
}

//display results, will check for errors
function imageScanResult(error, results) {
  if (error) {
    element.innerHTML = error;
  } else {
    let num = results[0].confidence * 100;
    element.innerHTML =
      results[0].label + "<br>Confidence: " + num.toFixed(0) + "%";
  }
}

//commented out code is an image classifier that includes the image in code.

//let mobilenet;
//let testImage;
// function modelReady() {
//   console.log("Model is ready!!!");
//   mobilenet.predict(testImage, gotResults);
// }

// function gotResults(error, results) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(results);
//     let label = results[1].label;
//     let prop = results[1].confidence;
//     let percentage = Math.round(Number(prop) * 100);

//     createP(`Label: ${label}`);
//     createP(`Confidence: ${percentage}%`);
//   }
// }

// function imageReady() {
//   image(testImage, 0, 0, width, height);
// }

// function setup() {
//   createCanvas(640, 480);
//   background(0);
//   testImage = createImg("images/romell.jpeg", imageReady);
//   testImage.hide();
//   mobilenet = ml5.imageClassifier("MobileNet", modelReady);
// }
