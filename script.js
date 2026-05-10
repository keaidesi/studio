const PROJECT_DATA = [
  { title: 'Project 01', cover: './images/p1_cover.JPG', details: ['./images/p1_1.JPG', './images/p1_2.JPG', './images/p1_3.JPG', './images/p1_4.JPG', './images/p1_5.JPG', './images/p1_6.JPG', './images/p1_7.JPG'], date: 'WORKS 01 / 2026' },
  { title: 'Project 02', cover: './images/p2_cover.JPG', details: ['./images/p2_1.JPG', './images/p2_2.JPG', './images/p2_3.JPG', './images/p2_4.JPG', './images/p2_5.JPG', './images/p2_6.JPG', './images/p2_7.JPG', './images/p2_8.JPG'], date: 'WORKS 02 / 2026' },
  { title: 'Project 03', cover: './images/p3_cover.JPG', details: ['./images/p3_1.JPG', './images/p3_2.JPG', './images/p3_3.JPG', './images/p3_4.JPG', './images/p3_5.JPG', './images/p3_6.JPG', './images/p3_7.JPG', './images/p3_8.JPG', './images/p3_9.JPG', './images/p3_10.JPG'], date: 'WORKS 03 / 2026' },
  { title: 'Project 04', cover: './images/p4_cover.JPG', details: ['./images/p4_1.JPG'], date: 'WORKS 04 / 2026' },
  { title: 'Project 05', cover: './images/p5_cover.JPG', details: ['./images/p5_1.JPG', './images/p5_2.JPG', './images/p5_3.JPG', './images/p5_4.JPG'], date: 'WORKS 05 / 2026' },
  { title: 'Project 06', cover: './images/p6_cover.JPG', details: ['./images/p6_1.JPG', './images/p6_2.JPG', './images/p6_3.JPG', './images/p6_4.JPG'], date: 'WORKS 06 / 2026' },
  { title: 'Project 07', cover: './images/p7_cover.JPG', details: ['./images/p7_1.jpg', './images/p7_2.jpg', './images/p7_3.jpg', './images/p7_4.jpg', './images/p7_5.jpg', './images/p7_6.jpg', './images/p7_7.jpg', './images/p7_8.jpg', './images/p7_9.jpg', './images/p7_10.jpg', './images/p7_11.jpg', './images/p7_12.jpg'], date: 'WORKS 07 / 2026' },
  { title: 'Project 08', cover: './images/p8_cover.JPG', details: ['./images/p8_1.JPG'], date: 'WORKS 08 / 2026' },
  { title: 'Project 09', cover: './images/p9_cover.JPG', details: ['./images/p9_1.JPG'], date: 'WORKS 09 / 2026' },
  { title: 'Project 10', cover: './images/p10_cover.JPG', details: ['./images/p10_1.JPG', './images/p10_2.JPG', './images/p10_3.JPG', './images/p10_4.JPG', './images/p10_5.JPG', './images/p10_6.JPG', './images/p10_7.JPG', './images/p10_8.GIF', './images/p10_9.JPG', './images/p10_10.GIF', './images/p10_11.GIF', './images/p10_12.GIF', './images/p10_13.GIF', './images/p10_14.GIF'], date: 'WORKS 10 / 2026' },
  { title: 'Project 11', cover: './images/p11_cover.JPG', details: ['./images/p11_1.JPG', './images/p11_2.JPG', './images/p11_3.JPG', './images/p11_4.JPG', './images/p11_5.JPG'], date: 'WORKS 11 / 2026' },
  { title: 'Project 12', cover: './images/p12_cover.JPG', details: ['./images/p12_1.JPG'], date: 'WORKS 12 / 2026' }
];

let currentImgList = [];
let currentIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
  renderWorks();
});

function renderWorks() {
  const container = document.getElementById('mainContent');
  if (!container) return;
  container.innerHTML = PROJECT_DATA.map((project, pIndex) => `
    <div class="work-card" onclick="openLevel1(${pIndex})">
      <div class="img-placeholder" style="background-image: url('${project.cover}')"></div>
      <div class="work-meta">${project.date}</div>
    </div>
  `).join('');
}

function showIntro() {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('studioIntro').style.display = 'block';
}

function showWorks() {
  document.getElementById('mainContent').style.display = 'grid';
  document.getElementById('studioIntro').style.display = 'none';
}

function openLevel1(pIndex) {
  const project = PROJECT_DATA[pIndex];
  currentImgList = project.details; 
  document.getElementById('l1Title').innerText = project.title;
  const body = document.getElementById('l1Body');
  
  body.innerHTML = currentImgList.map((img, index) => 
    `<img src="${img}" class="gallery-thumb" onclick="openLevel2(${index})">`
  ).join('');
  
  document.getElementById('drawerL1').classList.add('open');
  document.getElementById('overlay1').classList.add('active');
}

function closeLevel1() {
  document.getElementById('drawerL1').classList.remove('open');
  document.getElementById('overlay1').classList.remove('active');
}

function openLevel2(index) {
  currentIndex = index;
  updatePreviewImage();
  document.getElementById('drawerL2').classList.add('open');
}

function closeLevel2() {
  document.getElementById('drawerL2').classList.remove('open');
}

function updatePreviewImage() {
  const preview = document.getElementById('activePreview');
  preview.style.backgroundImage = `url('${currentImgList[currentIndex]}')`;
}

function changeImg(step) {
  if (currentImgList.length <= 1) return;
  currentIndex = (currentIndex + step + currentImgList.length) % currentImgList.length;
  updatePreviewImage();
}
