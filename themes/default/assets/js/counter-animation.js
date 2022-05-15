// Przykłdowe użycie
// <span class="counter" data-target="300" data-speed="150">0</span>
// data-speed - atrybut opcjonalny, domyślnie 200

$('.counter').viewportChecker({
  offset: 100,
  callbackFunction: function (elem) {
    let speed = 200;
    const counter = elem[0];

    if (counter.getAttribute('data-speed')) {
      speed = counter.getAttribute('data-speed');
    }

    const updateCount = () => {
      const countTo = +counter.getAttribute('data-target');
      const countFrom = +counter.innerText;

      const inc = countTo / speed;


      if (countFrom < countTo) {
        counter.innerText = countFrom + inc;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = countTo;
      }
    }

    updateCount();
  }
});