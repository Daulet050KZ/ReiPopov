const header = document.getElementById('header');
const body = document.getElementById('body');
const fullScreen = document.querySelector('.fullScreen');
const fullScreenImage = document.getElementById('fullScreen__image');
const fullScreenBtnZoom = document.getElementById('fullScreenBtn__zoom');
const fullScreenBtnToLeft = document.getElementById('fullScreenBtn__ToLeft');
const fullScreenBtnToRight = document.getElementById('fullScreenBtn__ToRight');
const fullScreenBtnClose = document.getElementById('fullScreenBtn__close');
const imageList = document.querySelector('.image__list');

const listToLeft = document.getElementById('List__ToLeft');
const listToRight = document.getElementById('List__ToRight');

let currentImageIndex;

function updateListItems() {
    const startIndex = Math.floor((currentImageIndex - 1) / 9) * 9 + 1;
    for (let i = 1; i <= 9; i++) {
        const listItem = document.getElementById(`list__item-${i}`);
        const newIndex = startIndex + i - 1;
        listItem.src = document.getElementById(`image_${newIndex}`).src;
        listItem.classList.remove('active-item'); // Remove active style from all
        if (newIndex === currentImageIndex) {
            listItem.classList.add('active-item'); // Add active style to current
        }
        listItem.removeEventListener('click', listItemClickHandler);
        listItem.addEventListener('click', () => listItemClickHandler(newIndex));
    }
}

function listItemClickHandler(newIndex) {
    currentImageIndex = newIndex;
    fullScreenImage.src = document.getElementById(`image_${currentImageIndex}`).src;
    updateListItems();
}

document.querySelectorAll('.item').forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index + 1;
        header.style.display = 'none';
        body.style.overflow = 'hidden';
        fullScreen.style.display = '';
        fullScreenImage.src = document.getElementById(`image_${currentImageIndex}`).src;
        updateListItems();
        document.documentElement.requestFullscreen();
    });
});

fullScreenBtnToLeft.addEventListener('click', () => {
    if (currentImageIndex > 1) {
        currentImageIndex--;
        fullScreenImage.src = document.getElementById(`image_${currentImageIndex}`).src;
        updateListItems();
    }
});

fullScreenBtnToRight.addEventListener('click', () => {
    if (currentImageIndex < 54) {
        currentImageIndex++;
        fullScreenImage.src = document.getElementById(`image_${currentImageIndex}`).src;
        updateListItems();
    }
});

listToLeft.addEventListener('click', () => {
    let startIndex = Math.floor((currentImageIndex - 1) / 9) * 9 + 1;
    if (startIndex > 1) {
        startIndex -= 9;
        currentImageIndex = startIndex;
        updateListItems();
    }
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`list__item-${i}`).classList.remove('active-item');
    }
});

listToRight.addEventListener('click', () => {
    let startIndex = Math.floor((currentImageIndex - 1) / 9) * 9 + 1;
    if (startIndex + 9 <= 54) {
        startIndex += 9;
        currentImageIndex = startIndex;
        updateListItems();
    }
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`list__item-${i}`).classList.remove('active-item');
    }
});

fullScreenBtnClose.addEventListener('click', () => {
    header.style.display = '';
    body.style.overflow = 'visible';
    fullScreen.style.display = 'none';
    document.exitFullscreen();
});

function handleResize() {
    if (window.matchMedia('(max-width: 1023px)').matches) {
        fullScreenBtnZoom.style.display = 'none'
        function updateOrientation() {
            const orientation = window.screen.orientation.type;
            if (orientation.includes('portrait')) {
                document.querySelector('.fullScreen__window').style.width = ''
            } else if (orientation.includes('landscape')) {
                document.querySelector('.fullScreen__window').style.width = '90%'
            }
        }

        window.addEventListener('orientationchange', updateOrientation);
        updateOrientation(); // Initial check

    } else {
        fullScreenBtnZoom.classList.add('fa-magnifying-glass')
        fullScreenBtnZoom.classList.remove('fa-expand')

        fullScreenBtnZoom.onclick = function(){
            if (fullScreen.style.padding === '50px') {
                fullScreen.style.padding = '175px';
                imageList.style.display = '';
                fullScreenBtnClose.style.top = '30px';
                fullScreenBtnClose.style.right = '140px';
                fullScreenBtnZoom.style.backgroundColor = '#222';
                fullScreenBtnZoom.style.color = '#000';
            } else {
                fullScreen.style.padding = '50px';
                imageList.style.display = 'none';
                fullScreenBtnClose.style.top = '10px';
                fullScreenBtnClose.style.right = '10px';
                fullScreenBtnZoom.style.backgroundColor = '#ffbe41';
                fullScreenBtnZoom.style.color = '#fff';
            }
        };
    }
}

// Вызов функции при загрузке страницы
handleResize();

// Вызов функции при изменении размера окна
window.addEventListener('resize', handleResize);