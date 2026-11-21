
// JELLYFISH DAYDREAM 🪼

// Give every bubble its own floating rhythm
const bubbles = document.querySelectorAll(".distant-bubbles i");

bubbles.forEach((bubble, index) => {
  bubble.style.animationDelay = `${-index * 1.37}s`;
});

// Add a tiny sparkle effect to the aquarium
const aquarium = document.querySelector(".post");

function createSparkle() {
  const sparkle = document.createElement("span");

  sparkle.textContent = "✦";
  sparkle.style.position = "absolute";
  sparkle.style.left = `${10 + Math.random() * 80}%`;
  sparkle.style.top = `${10 + Math.random() * 75}%`;
  sparkle.style.color = "#d7ffff";
  sparkle.style.fontSize = "10px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.animation = "twinkle 2s ease-in-out";

  aquarium.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

setInterval(createSparkle, 1800);
