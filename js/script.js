var close = document.querySelectorAll(".modal-close");
if (close) {
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (e) {
      e.preventDefault();
      var popup = this.parentNode;
      popup.classList.remove("visible");
      popup.classList.remove("modal-error");
    });
  }
}

var map_opener = document.querySelector(".map-opener");
if (map_opener) {
  map_opener.addEventListener("click", function (e) {
    e.preventDefault();
    var popup = document.querySelector(".modal-map");
    popup.classList.add("visible");
  });
}

var isStorageSupport = true;
var username_stored = "";
var email_stored = "";
try {
  username_stored = localStorage.getItem("username");
  email_stored = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

var write_us_opener = document.querySelector(".write-us");
if (write_us_opener) {

  var write_us_modal = document.querySelector(".modal-write-us");
  var username = write_us_modal.querySelector("[name=name]");
  var email = write_us_modal.querySelector("[name=email]");
  var message_text = write_us_modal.querySelector("[name=message-text]");
  var form = write_us_modal.querySelector("form");

  write_us_opener.addEventListener("click", function (e) {
    e.preventDefault();
    write_us_modal.classList.add("visible");

    if (username_stored || email_stored) {
      if (username_stored) {
        username.value = username_stored;
        email.focus();
      }
      if (email_stored) {
        email.value = email_stored;
        message_text.focus();
      }
    }
    else {
      username.focus();
    }
  });

  form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !message_text.value) {
      evt.preventDefault();
      write_us_modal.classList.remove("modal-error");
      write_us_modal.offsetWidth = write_us_modal.offsetWidth;
      write_us_modal.classList.add("modal-error");
      console.log("Нужно заполнить все поля");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (write_us_modal.classList.contains("visible")) {
        write_us_modal.classList.remove("visible");
        write_us_modal.classList.remove("modal-error");
      }
    }
  });

}

var buy_openers = document.querySelectorAll(".catalog-item-buy");
if (buy_openers) {
  for (var i = 0; i < buy_openers.length; i++) {
    buy_openers[i].addEventListener("click", function (e) {
      e.preventDefault();
      var popup = document.querySelector(".modal-added-to-cart");
      popup.classList.add("visible");
    });
  }
}

