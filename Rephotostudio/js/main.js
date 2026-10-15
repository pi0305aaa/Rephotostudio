
document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".main-visual .slide");
  const flash = document.querySelector(".flash");
  const dots = document.querySelectorAll(".dots span");

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      slide.classList.remove("show-color");
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    // 白黒写真からスタート
    setTimeout(() => {
      if (flash) {
        flash.classList.remove("active");
        void flash.offsetWidth;
        flash.classList.add("active");
      }

      // フラッシュと同時にカラーへ
      slides[index].classList.add("show-color");

    }, 1400);
  }

  if (slides.length) {
    showSlide(current);

    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 4000);
  }

  // FAQ開閉
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".faq-item").classList.toggle("open");
    });
  });

});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("photoModalImg");

  if (!modal || !modalImg) return;

  document.querySelectorAll(".plan-gallery img").forEach((photo) => {
    photo.addEventListener("click", () => {
      modalImg.src = photo.dataset.full || photo.src;
      modal.classList.add("active");
    });
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});


/* ==================================
   スマホ用ヘッダー・メニュー
================================== */

document.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("spHeader");
  const menuBtn = document.getElementById("spMenuBtn");
  const nav = document.getElementById("spNav");

  if (!header || !menuBtn || !nav) return;

  // スクロールするとヘッダーが出る
  function updateHeader() {
    if (window.scrollY > 80) {
      header.classList.add("show");
    } else {
      header.classList.remove("show");
      nav.classList.remove("open");
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-expanded", "false");
    }
  }

  window.addEventListener("scroll", updateHeader);
  updateHeader();

  // ☰ を押すとメニューが開く
  menuBtn.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuBtn.textContent = isOpen ? "×" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));

  });

});
