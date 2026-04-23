let currentImgList = [];
let currentIndex = 0;

const drawerL1 = document.getElementById('drawerL1');

// 监听一级分页内的滚动，实现 4/5 -> 5/5 变化
drawerL1.addEventListener('scroll', () => {
  if (drawerL1.scrollTop > 20) {
    drawerL1.classList.add('full-height');
  } else if (drawerL1.scrollTop <= 0) {
    drawerL1.classList.remove('full-height');
  }
});

// 打开一级分页
function openLevel1(title, images) {
  currentImgList = images;
  document.getElementById('l1Title').innerText = title;
  
  const body = document.getElementById('l1Body');
  // 必须确保高度存在，iPad 才能捕捉点击
  body.innerHTML = images.map((img, index) => 
    `<div class="img-placeholder" 
          onclick="openLevel2(${index})" 
          style="margin-bottom:20px; background:${img}; height: 450px; display:block; border: 1px solid #f0f0f0;">
     </div>`
  ).join('');

  drawerL1.classList.add('open');
  document.getElementById('overlay1').classList.add('active');
  document.getElementById('mainContent').style.opacity = "0.2";
}

function closeLevel1() {
  drawerL1.classList.remove('open');
  drawerL1.classList.remove('full-height');
  document.getElementById('overlay1').classList.remove('active');
  document.getElementById('mainContent').style.opacity = "1";
}

// 打开二级预览
function openLevel2(index) {
  // 阻止事件冒泡防止干扰
  event.stopPropagation(); 
  currentIndex = index;
  updatePreviewImage();
  document.getElementById('drawerL2').classList.add('open');
  document.getElementById('overlay2').classList.add('active');
  document.getElementById('drawerL1').style.opacity = "0.2";
}

function closeLevel2() {
  document.getElementById('drawerL2').classList.remove('open');
  document.getElementById('overlay2').classList.remove('active');
  document.getElementById('drawerL1').style.opacity = "1";
}

function updatePreviewImage() {
  const preview = document.getElementById('activePreview');
  preview.style.background = currentImgList[currentIndex];
}

function changeImg(step) {
  currentIndex = (currentIndex + step + currentImgList.length) % currentImgList.length;
  updatePreviewImage();
}