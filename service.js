function detectSpam() {
  var inputContent = document.getElementById("inputContent").value;

  // Ensure this URL matches your deployed backend's URL
  fetch("https://spam-detection-system-1.onrender.com/detect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: inputContent }),
  })
    .then((response) => response.json())
    .then((data) => {
      var resultContainer = document.getElementById("resultContainer");
      var formContainer = document.querySelector(".form-container");
      if (data.is_spam) {
        resultContainer.innerHTML = "This is spam.";
        resultContainer.style.color = "white";
        resultContainer.style.backgroundColor = "red";
        formContainer.classList.add("flash-red");
        setTimeout(() => {
          formContainer.classList.remove("flash-red");
        }, 1500); // Adjust duration to match the animation duration
      } else {
        resultContainer.innerHTML = "This is not spam.";
        resultContainer.style.color = "green";
        resultContainer.style.backgroundColor = "transparent";
        formContainer.classList.add("flash-green");
        setTimeout(() => {
          formContainer.classList.remove("flash-green");
        }, 1500); // Adjust duration to match the animation duration
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Return false to prevent form submission
  return false;
}

function clearResult() {
  var resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";
  resultContainer.style.color = "";
  resultContainer.style.backgroundColor = "";
}

// Clear result on input change
document.getElementById("inputContent").addEventListener("input", clearResult);
