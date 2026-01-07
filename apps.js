// Edit this file to add icons and screenshots.
// Place image files in ./assets and reference them here.
const APPS = [
  {
    name: "Tracky — Simple Budget Planner",
    url: "https://apps.apple.com/us/app/tracky-simple-budget-planner/id1663043762",
    landing: "/tracky/",
    tagline: "Envelope budgeting, reimagined for your phone.",
    icon: "assets/tracky/appicon.png", // (1024px PNG recommended)
    accent: "#EDAA28",
    screenshots: [
      "assets/tracky/1.jpg",
      "assets/tracky/2.jpg",
      "assets/tracky/3.jpg",
      "assets/tracky/4.jpg",
      "assets/tracky/5.jpg",
      "assets/tracky/6.jpg",
      "assets/tracky/7.jpg",
      "assets/tracky/8.jpg"
    ]
  },
  {
    name: "TCG Card Scanner for Lorcana",
    url: "https://apps.apple.com/us/app/tcg-card-scanner-for-lorcana/id6720749819",
    landing: "/lorcana-scan/",
    tagline: "Scan Lorcana cards, get details instantly, and manage your collection easily.",
    icon: "assets/lorcanaTCG/appicon.png",
    accent: "#5226DE",
    screenshots: [
      "assets/lorcanaTCG/1.jpg",
      "assets/lorcanaTCG/2.jpg",
      "assets/lorcanaTCG/3.jpg",
      "assets/lorcanaTCG/4.jpg",
      "assets/lorcanaTCG/5.jpg",
      "assets/lorcanaTCG/6.jpg"
    ]
  },
  {
    name: "Wally — Create Custom Wallpaper",
    url: "https://apps.apple.com/us/app/wally-create-custom-wallpaper/id6473636677",
    tagline: "Create your own wallpapers in seconds.",
    icon: "assets/wally/appicon.png",
    accent: ["#8900C9", "#D141D1", "#FC6130", "#FFD749"],
    screenshots: [
      "assets/wally/1.jpg",
      "assets/wally/2.jpg",
      "assets/wally/3.jpg",
      "assets/wally/4.jpg",
      "assets/wally/5.jpg",
      "assets/wally/6.jpg",
      "assets/wally/7.jpg",
      "assets/wally/8.jpg",
      "assets/wally/9.jpg",
      "assets/wally/10.jpg"
    ]
  },
  {
    name: "Card Value Scanner for TCG",
    url: "https://apps.apple.com/us/app/card-value-scanner-for-tcg/id6741767342",
    tagline: "Scan Pokémon cards, check values, and grow your collection.",
    icon: "assets/pokeTCG/appicon.png",
    accent: "#006FCB",
    screenshots: [
      "assets/pokeTCG/1.jpg",
      "assets/pokeTCG/2.jpg",
      "assets/pokeTCG/3.jpg",
      "assets/pokeTCG/4.jpg",
      "assets/pokeTCG/5.jpg",
      "assets/pokeTCG/6.jpg"
    ]
  }
];

function rearrangeCardActions() {
  document.querySelectorAll('.card').forEach(card => {
    const screens = card.querySelector('.screens');
    const actions = card.querySelector('.actions');

    if (window.innerWidth <= 600) {
      // move actions after screenshots
      if (screens && actions && screens.nextSibling !== actions) {
        screens.after(actions);
      }
    } else {
      // move actions back to header on desktop
      const head = card.querySelector('.card-head');
      if (head && actions && head.nextSibling !== actions) {
        head.appendChild(actions);
      }
    }
  });
}

window.addEventListener('resize', rearrangeCardActions);
window.addEventListener('load', rearrangeCardActions);
