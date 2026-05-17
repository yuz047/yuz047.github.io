(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function findCaption(img) {
    var figure = img.closest("figure, .figure-card, .hero-figure");
    if (!figure) return img.getAttribute("alt") || "Expanded figure";

    var caption = figure.querySelector("figcaption, .caption");
    if (caption && caption.textContent.trim()) return caption.textContent.trim();

    return img.getAttribute("alt") || "Expanded figure";
  }

  function buildLightbox() {
    var dialog = document.createElement("dialog");
    dialog.className = "image-lightbox";
    dialog.setAttribute("aria-label", "Expanded figure");

    var close = document.createElement("button");
    close.type = "button";
    close.className = "image-lightbox__close";
    close.textContent = "Close";
    close.setAttribute("aria-label", "Close expanded image");

    var figure = document.createElement("figure");
    var image = document.createElement("img");
    var caption = document.createElement("figcaption");

    figure.appendChild(image);
    figure.appendChild(caption);
    dialog.appendChild(close);
    dialog.appendChild(figure);
    document.body.appendChild(dialog);

    close.addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", function () {
      document.body.classList.remove("lightbox-open");
    });

    return {
      open: function (source) {
        image.src = source.currentSrc || source.src;
        image.alt = source.getAttribute("alt") || "";
        caption.textContent = findCaption(source);
        document.body.classList.add("lightbox-open");
        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        } else {
          dialog.setAttribute("open", "");
        }
      }
    };
  }

  onReady(function () {
    var article = document.querySelector(".article");
    if (!article) return;

    var images = Array.prototype.slice.call(article.querySelectorAll("img"));
    if (!images.length) return;

    var lightbox = buildLightbox();

    images.forEach(function (img) {
      if (img.closest("a")) return;

      img.classList.add("is-zoomable");
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      img.setAttribute("aria-label", "Enlarge figure");

      img.addEventListener("click", function () {
        lightbox.open(img);
      });

      img.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          lightbox.open(img);
        }
      });
    });
  });
})();
