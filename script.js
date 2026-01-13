let container = document.querySelector(".container");
let titleHeader = document.getElementById("title-header");
let titleFooter = document.getElementById("title-footer");
let image = container.querySelector("img");

const buttons = [
  document.getElementById("btn-1"),
  document.getElementById("btn-2"),
  document.getElementById("btn-3"),
  document.getElementById("btn-4"),
  document.getElementById("btn-5"),
  document.getElementById("btn-6"),
  document.getElementById("btn-7"),
  document.getElementById("btn-8"),
  document.getElementById("btn-9"),
  document.getElementById("btn-10"),
];

const actions = {
  1: {
    footer: "Semangatttttttttttttttt",
    showImage: true,
    imageSrc: "https://yathidayat.github.io/ultah-sri-ke-23/image/semangat.gif",
  },
  3: {
    footer: "Sabarrrr, kesal yaaa",
    showImage: true,
    imageSrc: "https://yathidayat.github.io/ultah-sri-ke-23/image/sabar.jpg",
  },
  4: {
    footer: "klik lagiii dongggg",
    showImage: true,
    imageSrc: "https://yathidayat.github.io/ultah-sri-ke-23/image/semangat2.gif",
  },
  5: {
    footer: "Jangan lupa senyum :)",
    showImage: true,
    imageSrc: "https://yathidayat.github.io/ultah-sri-ke-23/image/senyum.gif",
  },
  6: {
    footer: "Baca bismillah dulu yaaa",
    showImage: true,
    imageSrc: "https://yathidayat.github.io/ultah-sri-ke-23/image/bukagift.gif",
  },
  7: {
    footer: "Prankk!!!!!,, sabar yaaa",
    showImage: true,
    imageSrc: "https://yathidayat.github.io/ultah-sri-ke-23/image/ketawa.gif",
  },
  8: {
    footer: "Semoga panjang umur dan sehat selalu💕",
    showImage: true,
    imageSrc: "https://yathidayat.github.io/ultah-sri-ke-23/image/love.gif",
  },
  9: {
    showImage: true,
    imageSrc: "https://yathidayat.github.io/ultah-sri-ke-23/image/bukagift.gif",
  },
};

const carouselImages = [
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/1.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/2.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/3.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/4.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/5.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/6.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/7.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/8.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/9.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/10.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/11.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/12.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/13.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/14.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/15.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/16.jpg",
  "https://yathidayat.github.io/ultah-sri-ke-23/Ultah/17.jpg",
];

function randomPosition(btn) {
  const maxX = window.innerWidth - btn.offsetWidth;
  const maxY = window.innerHeight - btn.offsetHeight;

  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
}

// tampilkan button pertama
let currentIndex = 0;
buttons[currentIndex].style.display = "block";
randomPosition(buttons[currentIndex]);
let carouselOffset = 0;
let carouselInterval = null;

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index === 9) {
      const music = document.getElementById("bg-music");

      music.loop = true;
      if (music.paused) music.play();

      const track = document.querySelector(".carousel-track");
      track.innerHTML = "";

      // buat array 2x
      const images = [...carouselImages, ...carouselImages];

      let loaded = 0;

      images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;

        img.onload = () => {
          loaded++;
          if (loaded === images.length) {
            startCarousel(); // ⬅️ baru mulai setelah semua gambar siap
          }
        };

        track.appendChild(img);
      });

      function startCarousel() {
        carouselOffset = 0;

        const singleLoopWidth = track.scrollWidth / 2;

        if (carouselInterval) clearInterval(carouselInterval);

        carouselInterval = setInterval(() => {
          carouselOffset -= 1;
          track.style.transform = `translateX(${carouselOffset}px)`;

          if (Math.abs(carouselOffset) >= singleLoopWidth) {
            carouselOffset = 0;
            track.style.transform = `translateX(0px)`;
          }
        }, 20);
      }
    }


    if (actions[index]) {
      if (actions[index].header) {
        titleHeader.innerText = actions[index].header;
      }

      if (actions[index].footer) {
        titleFooter.innerText = actions[index].footer;
      }

      if (actions[index].showImage === false) {
        image.style.display = "none";
      } else {
        image.style.display = "block";
      }

      if (actions[index].imageSrc) {
        image.src = actions[index].imageSrc;
      }
    }

    // hide button sekarang
    btn.style.display = "none";

    // tampilkan button berikutnya
    const nextIndex = index + 1;
    if (buttons[nextIndex]) {
      buttons[nextIndex].style.display = "block";
      randomPosition(buttons[nextIndex]);
    }
  });
});
