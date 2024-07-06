let BookPage = document.getElementById('BookPage');

let ImageIndex = 0;

document.querySelector('.left').addEventListener('click', ClickLeft);
document.querySelector('.right').addEventListener('click', ClickRight);

function ClickLeft(){
	if(ImageIndex === 0){
		BookPage.src = 'img/BOOKDESIGN/BrandBook - Kyrgyztelecom/Page-' + ImageIndex + '.jpg';
	}else{
		ImageIndex--;
		BookPage.src = 'img/BOOKDESIGN/BrandBook - Kyrgyztelecom/Page-' + ImageIndex + '.jpg';
	}
};

function ClickRight(){
	if(ImageIndex === 7){
		BookPage.src = 'img/BOOKDESIGN/BrandBook - Kyrgyztelecom/Page-' + ImageIndex + '.jpg';
	}else{
		ImageIndex++;
		BookPage.src = 'img/BOOKDESIGN/BrandBook - Kyrgyztelecom/Page-' + ImageIndex + '.jpg';
	}
};