// 🎵 MUSIC
function toggleMusic() {
  const music = document.getElementById("music");
  music.paused ? music.play() : music.pause();
}

// 🔐 UNLOCK
function unlock() {
  const pass = document.getElementById("pass").value;

  if (pass === "srijita") {
    document.getElementById("hidden").style.display = "block";
    startTimer();
    typeWriter();
  } else {
    alert("Wrong password ❤️");
  }
}

// ⏳ TIMER
function startTimer() {
  const start = new Date("2019-01-01");

  setInterval(() => {
    const now = new Date();
    const diff = now - start;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerText =
      "Together for " + days + " days ❤️";
  }, 1000);
}

// 💌 TYPEWRITER
const message = "You are the best thing that ever happened to me. Forever isn't enough with you ❤️";
let i = 0;

function typeWriter() {
  const el = document.getElementById("typeText");

  function type() {
    if (i < message.length) {
      el.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}

// 📤 SHARE
function shareLove() {
  if (navigator.share) {
    navigator.share({
      title: "Our Love Story ❤️",
      text: "Check this out!",
      url: window.location.href
    });
  } else {
    alert("Copy link: " + window.location.href);
  }
}