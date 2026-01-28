function changeContent(id) {
    console.log("Click en:", id); // <--- esto te muestra si el click llega
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }
}

function scrollInside(targetId) {
  const container = document.querySelector('.about-center-box');
  const target = document.getElementById(targetId);

  if (container && target) {
    const targetOffset = target.offsetTop - container.offsetTop;
    container.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll(".random-button");

buttons.forEach(btn => {
  const phrasesJSON = btn.getAttribute("data-phrases");
  const phrases = JSON.parse(phrasesJSON);

  const outputId = btn.getAttribute("data-output");
  const output = document.getElementById(outputId);

  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    output.textContent = phrases[randomIndex];
  });
});

