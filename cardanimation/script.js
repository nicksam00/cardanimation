(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });
  
  

}());
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("animatedBtn");

  // 5 second baad button show hoga
  setTimeout(() => {
    btn.classList.add("show");
  }, 5000);

  // Click hone par same tab me link open hoga
  btn.addEventListener("click", () => {
    window.location.href = "https://example.com"; // Apni link daalo
  });
});
