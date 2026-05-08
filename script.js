const PROJECT_DATA = [
  { title: 'Project 01', cover: './images/p1_cover.jpg', details: ['./images/p1_1.jpg'], date: 'WORKS 01 / 2026' },
  { title: 'Project 02', cover: './images/p2_cover.jpg', details: ['./images/p2_1.jpg'], date: 'WORKS 02 / 2026' },
  { title: 'Project 03', cover: './images/p3_cover.jpg', details: ['./images/p3_1.jpg'], date: 'WORKS 03 / 2026' },
  { title: 'Project 04', cover: './images/p4_cover.jpg', details: ['./images/p4_1.jpg'], date: 'WORKS 04 / 2026' },
  { title: 'Project 05', cover: './images/p5_cover.jpg', details: ['./images/p5_1.jpg'], date: 'WORKS 05 / 2026' },
  { title: 'Project 06', cover: './images/p6_cover.jpg', details: ['./images/p6_1.jpg'], date: 'WORKS 06 / 2026' },
  { title: 'Project 07', cover: './images/p7_cover.jpg', details: ['./images/p7_1.jpg'], date: 'WORKS 07 / 2026' },
  { title: 'Project 08', cover: './images/p8_cover.jpg', details: ['./images/p8_1.jpg'], date: 'WORKS 08 / 2026' },
  { title: 'Project 09', cover: './images/p9_cover.jpg', details: ['./images/p9_1.jpg'], date: 'WORKS 09 / 2026' }
];

let currentImgList = [];
let currentIndex = 0;

// 确保在页面加载时渲染作品
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

// 切换到介绍页
function showIntro() {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('studioIntro').style.display = 'block';
}

// 切换回作品页
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
    `<div class="img-placeholder" onclick="openLevel2(${index})" style="margin-bottom:20px; background-image:url('${img}'); height: 450px; display:block; background-size:cover; background-position:center;"></div>`
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
  document.getElementById('overlay2').classList.add('active');
}

function closeLevel2() {
  document.getElementById('drawerL2').classList.remove('open');
  document.getElementById('overlay2').classList.remove('active');
}

function updatePreviewImage() {
  const preview = document.getElementById('activePreview');
  preview.style.backgroundImage = `url('${currentImgList[currentIndex]}')`;
  preview.style.backgroundSize = 'contain';
  preview.style.backgroundRepeat = 'no-repeat';
  preview.style.backgroundPosition = 'center';
}

function changeImg(step) {
  currentIndex = (currentIndex + step + currentImgList.length) % currentImgList.length;
  updatePreviewImage();
}