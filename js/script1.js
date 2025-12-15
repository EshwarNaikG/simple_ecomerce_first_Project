const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const speed = 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + target / speed);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
