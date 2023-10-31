// Settings
const imageRatio = 3 / 2;

// Data
const points = [
  { x: 10, y: 10, data: "Point 0" },
  { x: 60, y: 10, data: "Point 1" },
  { x: 50, y: 30, data: "Point 2" },
  { x: 70, y: 90, data: "Point 3" },
];

// Elements
const map = document.getElementById("map");

// Functions
function setMapHeight() {
  const width = map.clientWidth;
  const newHeight = Math.floor(width / imageRatio);
  map.style.height = `${newHeight}px`;
}

function createMapButtons() {
  points.forEach((point) => {
    const el = document.createElement("a");
    el.className = "map__button";
    el.onclick = (_e) => {
      alert(point.data);
    };
    // el.href = point.data;
    el.style.left = `${point.x}%`;
    el.style.top = `${point.y}%`;
    map.appendChild(el);
  });
}

// Main
function main() {
  window.addEventListener("resize", (e) => {
    setMapHeight();
  });
  setMapHeight();
  createMapButtons();
}

main();
