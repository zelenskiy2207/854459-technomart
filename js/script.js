var close = document.querySelectorAll(".modal-close");
if (close) {
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (e) {
      e.preventDefault();
      var popup = this.parentNode;
      popup.classList.remove('visible');
    });
  }
}

var map_opener = document.querySelector(".map-opener");
if (map_opener) {
  map_opener.addEventListener("click", function (e) {
    e.preventDefault();
    var popup = document.querySelector(".modal-map");
    popup.classList.add('visible');
  });
}

var write_us_opener = document.querySelector(".write-us");
if (write_us_opener) {
  write_us_opener.addEventListener("click", function (e) {
    e.preventDefault();
    var popup = document.querySelector(".modal-write-us");
    popup.classList.add('visible');
  });
}

var buy_openers = document.querySelectorAll(".catalog-item-buy");
if (buy_openers) {
  for (var i = 0; i < buy_openers.length; i++) {
    buy_openers[i].addEventListener("click", function (e) {
      e.preventDefault();
      var popup = document.querySelector(".modal-added-to-cart");
      popup.classList.add('visible');
    });
  }
}

