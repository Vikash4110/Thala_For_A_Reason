
function checkSearch() {
  const inputText = document.getElementById("searchInput").value;
  const totalChars = countChars(inputText);

  if (totalChars === 7) {
    openModal();
    playVideo();
  } else {
    alert("Please enter text or numbers that total 7 characters.");
  }
}

function countChars(text) {
  const alphanumeric = text.replace(/[^a-z0-9]/gi, '');
  return alphanumeric.length;
}

function playVideo() {
  const videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.innerHTML = '<video width="100%" height="100%" controls autoplay><source src="3b37a044.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
}

function openModal() {
  const modal = document.getElementById("videoModal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  modal.style.display = "none";
  const video = document.querySelector("#videoPlayer video");
  if (video) {
    video.pause();
  }
}