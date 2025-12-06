// script.js

function openDragonPopup(name, sections) {
  const title = document.getElementById("popupTitle");
  const container = document.getElementById("popupSections");

  title.textContent = name;
  container.innerHTML = "";

  sections.forEach(sec => {
    const sectionDiv = document.createElement("div");
    sectionDiv.style.marginTop = "15px";

    const heading = document.createElement("h3");
    heading.textContent = sec.titulo;
    heading.style.color = "#00bfff";
    sectionDiv.appendChild(heading);

    const list = document.createElement("ul");
    list.style.textAlign = "left";
    list.style.margin = "0 auto";
    list.style.display = "inline-block";

    sec.itens.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      li.style.color = "#00ffea";
      li.style.marginBottom = "4px";
      list.appendChild(li);
    });

    sectionDiv.appendChild(list);
    container.appendChild(sectionDiv);
  });

  document.getElementById("dragonPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("dragonPopup").style.display = "none";
}
// Lista de imagens por dragão
const dragonGalleries = {
  "threadtail": [
    "assets/threadtail/caudafina1.png",
    "assets/threadtail/caudafina2.png",
    "assets/threadtail/caudafina3.png",
    "assets/threadtail/caudafina4.png",
    "assets/threadtail/caudafina5.png",
    "assets/threadtail/caudafina6.png",
    "assets/threadtail/caudafina7.png",
    "assets/threadtail/caudafina8.png",
  ],
  "cavern_crasher": [
    "assets/cavern_crasher/cavern_crasher.png",
    "assets/cavern_crasher/cavern_crasher2.png",
    "assets/cavern_crasher/cavern_crasher3.png",
    "assets/cavern_crasher/cavern_crasher4.png",
    "assets/cavern_crasher/cavern_crasher5.png",
    "assets/cavern_crasher/cavern_crasher6.png",
    "assets/cavern_crasher/cavern_crasher7.png",
    "assets/cavern_crasher/cavern_crasher8.png",
    "assets/cavern_crasher/cavern_crasher9.png",
    "assets/cavern_crasher/cavern_crasher10.png",
  ],
  "deathsong": [
    "assets/deathsong/deathsong.png",
    "assets/deathsong/deathsong2.png",
    "assets/deathsong/deathsong3.png",
    "assets/deathsong/deathsong4.png",
    "assets/deathsong/deathsong5.png",
    "assets/deathsong/deathsong6.png",
    "assets/deathsong/deathsong7.png",
    "assets/deathsong/deathsong8.png",
    "assets/deathsong/deathsong9.png",
  ],
  "gronckel": [
    "assets/gronckel/gronckel.png",
    "assets/gronckel/gronckel2.png",
    "assets/gronckel/gronckel3.png",
    "assets/gronckel/gronckel4.png",
    "assets/gronckel/gronckel5.png",
    "assets/gronckel/gronckel6.png",
    "assets/gronckel/gronckel7.png",
    "assets/gronckel/gronckel8.png",
    "assets/gronckel/gronckel9.png",
    "assets/gronckel/gronckel10.png",
    "assets/gronckel/gronckel11.png",
  ],
  "seashocker": [
    "assets/seashocker/seashocker.png",
    "assets/seashocker/seashocker2.png",
    "assets/seashocker/seashocker3.png",
    "assets/seashocker/seashocker4.png",
    "assets/seashocker/seashocker5.png",
    "assets/seashocker/seashocker6.png",
    "assets/seashocker/seashocker7.png",
    "assets/seashocker/seashocker8.png",
    "assets/seashocker/seashocker9.png",
    "assets/seashocker/seashocker10.png",
  ],
  "slitherwing": [
    "assets/slitherwing/slitherwing.png",
    "assets/slitherwing/slitherwing2.png",
    "assets/slitherwing/slitherwing3.png",
    "assets/slitherwing/slitherwing4.png",
    "assets/slitherwing/slitherwing5.png",
    "assets/slitherwing/slitherwing6.png",
    "assets/slitherwing/slitherwing7.png",
    "assets/slitherwing/slitherwing8.png",
    "assets/slitherwing/slitherwing9.png",
    "assets/slitherwing/slitherwing10.png",
    "assets/slitherwing/slitherwing11.png",
    "assets/slitherwing/slitherwing12.png",
    "assets/slitherwing/slitherwing13.png",
    "assets/slitherwing/slitherwing14.png",
    "assets/slitherwing/slitherwing15.png",
  ],
   "speed_stinger": [
    "assets/speed_stinger/speed_stinger.png",
    "assets/speed_stinger/speed_stinger2.png",
    "assets/speed_stinger/speed_stinger3.png",
    "assets/speed_stinger/speed_stinger4.png",
    "assets/speed_stinger/speed_stinger5.png",
    "assets/speed_stinger/speed_stinger6.png",
    "assets/speed_stinger/speed_stinger7.png",
  ],
  "speed_stinger_alpha": [
    "assets/speed_stinger_alpha/speed_stinger_alpha.png",
    "assets/speed_stinger_alpha/speed_stinger_alpha2.png",
    "assets/speed_stinger_alpha/speed_stinger_alpha3.png",
    "assets/speed_stinger_alpha/speed_stinger_alpha4.png",
    "assets/speed_stinger_alpha/speed_stinger_alpha5.png",
    "assets/speed_stinger_alpha/speed_stinger_alpha6.png",
    "assets/speed_stinger_alpha/speed_stinger_alpha7.png",
    "assets/speed_stinger_alpha/speed_stinger_alpha8.png",
    "assets/speed_stinger_alpha/speed_stinger_alpha9.png",
    "assets/speed_stinger_alpha/speed_stinger_alpha10.png",
  ],
};

function openGallery(dragonName) {
  const popup = document.getElementById("galleryPopup");
  const gallery = document.getElementById("galleryImages");
  const title = document.getElementById("galleryTitle");

  title.textContent = "Galeria - " + dragonName;
  gallery.innerHTML = ""; // limpa imagens anteriores

  const imgs = dragonGalleries[dragonName] || [];
  imgs.forEach(src => {
    const div = document.createElement("div");
    div.className = "gallery-card";
    div.innerHTML = `<img src="${src}" alt="${dragonName}">`;
    gallery.appendChild(div);
  });

  popup.style.display = "flex";
}

function closeGallery() {
  document.getElementById("galleryPopup").style.display = "none";
}


function showSection(id) {
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (window.innerWidth <= 768) {
    document.querySelector('nav').classList.remove('show');
  }
}

function toggleSubmenu() {
  document.getElementById('submenu-dragoes').classList.toggle('show');
}

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show');
});
