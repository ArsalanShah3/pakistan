window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  const video = document.getElementById("bgVideo");
  const volUp = document.getElementById("volUp");
  const volDown = document.getElementById("volDown");
  const muteToggle = document.getElementById("muteToggle");

  volUp.addEventListener("click", () => {
    video.muted = false; // unmute when volume changed
    video.volume = Math.min(1, video.volume + 0.1);
  });

  volDown.addEventListener("click", () => {
    video.muted = false; // unmute when volume changed
    video.volume = Math.max(0, video.volume - 0.1);
  });

  muteToggle.addEventListener("click", () => {
    video.muted = !video.muted;
    muteToggle.textContent = video.muted ? "🔇" : "🔈";
  });
