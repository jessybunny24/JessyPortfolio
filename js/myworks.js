const VIDEO_DATA = {
  makeup: [
    "assets/videos/aztk.mov",
    "assets/videos/careline.mov",
    "assets/videos/dopi.mov",
    "assets/videos/cloudbeauty.mp4",
    "assets/videos/sacelady.mp4",
    "assets/videos/colorkey.mp4"
  ],

  skincare: [
    "assets/videos/papafeel.mp4",
    "assets/videos/helloglow.mp4",
    "assets/videos/lavojoy.mp4",
    "assets/videos/chyevon.mp4",
    "assets/videos/skinever.mp4",
    "assets/videos/papafeel2.mp4"
  ],

  wellness: [
    "assets/videos/sugardolls1.mp4",
    "assets/videos/sugardolls2.mp4",
    "assets/videos/athena.mp4",
    "assets/videos/sip2glow2.mp4",
    "assets/videos/sipbiotic.mp4",
    "assets/videos/dermaid.mp4"
  ],

  haircare: [
    "assets/videos/loreal.mov",
    "assets/videos/dove1.mp4",
    "assets/videos/dove2.mp4",
    "assets/videos/loreal2.mp4",
    "assets/videos/skinavor.mp4",
    "assets/videos/byond.mp4"
  ]
};

const LABELS = {
  makeup: "Make Up",
  skincare: "Skincare",
  wellness: "Wellness",
  haircare: "Haircare"
};

const tabs = document.querySelectorAll(".toggle-tab");
const slider = document.getElementById("toggleSlider");
const toggleBar = document.getElementById("toggleBar");
const phoneContents = document.querySelectorAll(".phone-content");

let activeIndex = -1;

// Move slider
function positionSlider(index) {
  const tab = tabs[index];
  const barBox = toggleBar.getBoundingClientRect();
  const tabBox = tab.getBoundingClientRect();

  slider.style.width = tabBox.width + "px";
  slider.style.transform =
    `translateX(${tabBox.left - barBox.left - 8}px)`;
}

// Switch category
function switchCategory(index) {

  if (index === activeIndex) return;
  activeIndex = index;

  const cat = tabs[index].dataset.cat;
  const label = LABELS[cat];
  const videos = VIDEO_DATA[cat];

  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
  });

  positionSlider(index);

  phoneContents.forEach((content, i) => {

    const video = content.querySelector(".phone-video");
    const placeholder = content.querySelector(".phone-placeholder");
    const catLabel = placeholder.querySelector(".ph-cat");

    catLabel.textContent = label;

    if (videos[i]) {

      video.pause();
      video.src = videos[i];
      video.load();

      video.play().catch(() => {});

      placeholder.classList.add("hidden");

    } else {

      video.pause();
      video.removeAttribute("src");
      video.load();

      placeholder.classList.remove("hidden");
    }

  });
}

// Tab click
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => switchCategory(index));
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  switchCategory(0);
});

// Reposition slider after fonts load
if (document.fonts) {
  document.fonts.ready.then(() => {
    positionSlider(activeIndex >= 0 ? activeIndex : 0);
  });
}

// Mobile menu
function toggleMenu() {
  document.getElementById("mobileMenu")?.classList.toggle("open");
}