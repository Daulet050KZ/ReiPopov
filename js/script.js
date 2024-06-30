const intro = document.querySelector('.intro')
const header = document.querySelector('#header')

document.querySelector('.stage__0').addEventListener('click', function(){
	document.querySelector('.intro').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.stage__1').addEventListener('click', function(){
	document.querySelector('.section__1').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.stage__2').addEventListener('click', function(){
	document.querySelector('.section__2').scrollIntoView({ behavior: 'smooth' });

});
document.querySelector('.stage__3').addEventListener('click', function(){
	document.querySelector('.section__3').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.stage__4').addEventListener('click', function(){
	document.querySelector('.section__4').scrollIntoView({ behavior: 'smooth' });

});

document.querySelector('#certif__label-1').onclick = function(){
	document.querySelector('.certif__1').style.display = '';
	document.querySelector('.certif__2').style.display = 'none';
	document.querySelector('.certif__3').style.display = 'none';

	document.querySelector('#certif__label-1').style.backgroundColor = '#ffbe41';
	document.querySelector('#certif__label-2').style.backgroundColor = '#bdbdbd';
	document.querySelector('#certif__label-3').style.backgroundColor = '#bdbdbd';
};
document.querySelector('#certif__label-2').onclick = function(){
	document.querySelector('.certif__1').style.display = 'none';
	document.querySelector('.certif__2').style.display = '';
	document.querySelector('.certif__3').style.display = 'none';

	document.querySelector('#certif__label-1').style.backgroundColor = '#bdbdbd';
	document.querySelector('#certif__label-2').style.backgroundColor = '#ffbe41';
	document.querySelector('#certif__label-3').style.backgroundColor = '#bdbdbd';
};
document.querySelector('#certif__label-3').onclick = function(){
	document.querySelector('.certif__1').style.display = 'none';
	document.querySelector('.certif__2').style.display = 'none';
	document.querySelector('.certif__3').style.display = '';

	document.querySelector('#certif__label-1').style.backgroundColor = '#bdbdbd';
	document.querySelector('#certif__label-2').style.backgroundColor = '#bdbdbd';
	document.querySelector('#certif__label-3').style.backgroundColor = '#ffbe41';
};


function handleResize() {
    if (window.matchMedia('(max-width: 1023px)').matches) {
		const diagramm_photoshop = document.querySelector('.section__diagramm.Photoshop').querySelector('.diagramm')
		const diagramm_illustrator = document.querySelector('.section__diagramm.Illustrator').querySelector('.diagramm')
		const diagramm_corelDraw = document.querySelector('.section__diagramm.CorelDraw').querySelector('.diagramm')
		const diagramm_figma = document.querySelector('.section__diagramm.Figma').querySelector('.diagramm')
		const diagramm_indesign = document.querySelector('.section__diagramm.InDesign').querySelector('.diagramm')
		const diagramm_blender = document.querySelector('.section__diagramm.Blender').querySelector('.diagramm')

		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			if(380 < window.pageYOffset){
				header.style.backgroundColor = '#222222'
			}else{
				header.style.backgroundColor = ''
			}
			if (3350 < window.pageYOffset) {
				setTimeout(() => {
					diagramm_photoshop.style.width = '90%'
				}, 100);
				setTimeout(() => {
					diagramm_illustrator.style.width = '80%'
				}, 100);
				setTimeout(() => {
					diagramm_corelDraw.style.width = '80%'
				}, 100);
				setTimeout(() => {
					diagramm_figma.style.width = '70%'
				}, 100);
				setTimeout(() => {
					diagramm_indesign.style.width = '60%'
				}, 100);
				setTimeout(() => {
					diagramm_blender.style.width = '50%'
				}, 100);
			}else {
				setTimeout(() => {
					diagramm_photoshop.style.width = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_illustrator.style.width = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_figma.style.width = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_corelDraw.style.width = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_indesign.style.width = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_blender.style.width = '0%'
				}, 100);
			}
		}

    	document.querySelector('.review_1').style.marginLeft = '-10px';
    	document.querySelector('#reviews__label-left').onclick = function() {
    		if(document.querySelector('.review_1').style.marginLeft === '-2970px'){
    			document.querySelector('.review_1').style.marginLeft = '-2600px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-2600px'){
    			document.querySelector('.review_1').style.marginLeft = '-2230px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-2230px'){
    			document.querySelector('.review_1').style.marginLeft = '-1860px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-1860px'){
    			document.querySelector('.review_1').style.marginLeft = '-1490px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-1490px'){
    			document.querySelector('.review_1').style.marginLeft = '-1120px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-1120px'){
    			document.querySelector('.review_1').style.marginLeft = '-750px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-750px'){
    			document.querySelector('.review_1').style.marginLeft = '-380px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-380px'){
    			document.querySelector('.review_1').style.marginLeft = '-10px';
    		}
		};
    	document.querySelector('#reviews__label-right').onclick = function() {
    		if(document.querySelector('.review_1').style.marginLeft === '-2600px'){
    			document.querySelector('.review_1').style.marginLeft = '-2970px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-2230px'){
    			document.querySelector('.review_1').style.marginLeft = '-2600px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-1860px'){
    			document.querySelector('.review_1').style.marginLeft = '-2230px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-1490px'){
    			document.querySelector('.review_1').style.marginLeft = '-1860px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-1120px'){
    			document.querySelector('.review_1').style.marginLeft = '-1490px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-750px'){
    			document.querySelector('.review_1').style.marginLeft = '-1120px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-380px'){
    			document.querySelector('.review_1').style.marginLeft = '-750px';
    		}else if(document.querySelector('.review_1').style.marginLeft === '-10px'){
    			document.querySelector('.review_1').style.marginLeft = '-380px';
    		}
		};

    } else {
		const diagramm_photoshop = document.querySelector('.section__diagramm.Photoshop').querySelector('.diagramm')
		const diagramm_illustrator = document.querySelector('.section__diagramm.Illustrator').querySelector('.diagramm')
		const diagramm_corelDraw = document.querySelector('.section__diagramm.CorelDraw').querySelector('.diagramm')
		const diagramm_figma = document.querySelector('.section__diagramm.Figma').querySelector('.diagramm')
		const diagramm_indesign = document.querySelector('.section__diagramm.InDesign').querySelector('.diagramm')
		const diagramm_blender = document.querySelector('.section__diagramm.Blender').querySelector('.diagramm')
		
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			if(380 < window.pageYOffset){
				header.style.backgroundColor = '#222222'
			}else{
				header.style.backgroundColor = ''
			}
			if (1700 < window.pageYOffset) {
				setTimeout(() => {
					diagramm_photoshop.style.height = '90%'
				}, 100);
				setTimeout(() => {
					diagramm_illustrator.style.height = '80%'
				}, 100);
				setTimeout(() => {
					diagramm_corelDraw.style.height = '80%'
				}, 100);
				setTimeout(() => {
					diagramm_figma.style.height = '70%'
				}, 100);
				setTimeout(() => {
					diagramm_indesign.style.height = '60%'
				}, 100);
				setTimeout(() => {
					diagramm_blender.style.height = '50%'
				}, 100);
			}else {
				setTimeout(() => {
					diagramm_photoshop.style.height = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_illustrator.style.height = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_figma.style.height = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_corelDraw.style.height = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_indesign.style.height = '0%'
				}, 100);
				setTimeout(() => {
					diagramm_blender.style.height = '0%'
				}, 100);
			}
		}
		document.getElementById('reviews__label-1').onclick = function(){
			document.querySelector('.review_1').style.transform = 'translateY(calc(0%))'
			document.querySelector('.review_2').style.transform = 'translateY(calc(0%))'
			document.querySelector('.review_3').style.transform = 'translateY(calc(0%))'

			document.querySelector('.review_4').style.transform = 'translateY(calc(0% + 0px))'
			document.querySelector('.review_5').style.transform = 'translateY(calc(0% + 0px))'
			document.querySelector('.review_6').style.transform = 'translateY(calc(0% + 0px))'

			document.querySelector('.review_7').style.transform = 'translateY(calc(0% + 0px))'
			document.querySelector('.review_8').style.transform = 'translateY(calc(0% + 0px))'
			document.querySelector('.review_9').style.transform = 'translateY(calc(0% + 0px))'

			document.getElementById('reviews__label-1').style.backgroundColor = '#ffbe41'
			document.getElementById('reviews__label-2').style.backgroundColor = '#bdbdbd'
			document.getElementById('reviews__label-3').style.backgroundColor = '#bdbdbd'
		}
		document.getElementById('reviews__label-2').onclick = function(){
			document.querySelector('.review_1').style.transform = 'translateY(calc(-100% - 20px))'
			document.querySelector('.review_2').style.transform = 'translateY(calc(-100% - 20px))'
			document.querySelector('.review_3').style.transform = 'translateY(calc(-100% - 20px))'

			document.querySelector('.review_4').style.transform = 'translateY(calc(-100% - 20px))'
			document.querySelector('.review_5').style.transform = 'translateY(calc(-100% - 20px))'
			document.querySelector('.review_6').style.transform = 'translateY(calc(-100% - 20px))'

			document.querySelector('.review_7').style.transform = 'translateY(calc(-100% - 20px))'
			document.querySelector('.review_8').style.transform = 'translateY(calc(-100% - 20px))'
			document.querySelector('.review_9').style.transform = 'translateY(calc(-100% - 20px))'

			document.getElementById('reviews__label-1').style.backgroundColor = '#bdbdbd'
			document.getElementById('reviews__label-2').style.backgroundColor = '#ffbe41'
			document.getElementById('reviews__label-3').stye.backgroundColor = '#bdbdbd'
		}
		document.getElementById('reviews__label-3').onclick = function(){
			document.querySelector('.review_1').style.transform = 'translateY(calc(-200% - 40px))'
			document.querySelector('.review_2').style.transform = 'translateY(calc(-200% - 40px))'
			document.querySelector('.review_3').style.transform = 'translateY(calc(-200% - 40px))'

			document.querySelector('.review_4').style.transform = 'translateY(calc(-200% - 40px))'
			document.querySelector('.review_5').style.transform = 'translateY(calc(-200% - 40px))'
			document.querySelector('.review_6').style.transform = 'translateY(calc(-200% - 40px))'

			document.querySelector('.review_7').style.transform = 'translateY(calc(-200% - 40px))'
			document.querySelector('.review_8').style.transform = 'translateY(calc(-200% - 40px))'
			document.querySelector('.review_9').style.transform = 'translateY(calc(-200% - 40px))'

			document.getElementById('reviews__label-1').style.backgroundColor = '#bdbdbd'
			document.getElementById('reviews__label-2').style.backgroundColor = '#bdbdbd'
			document.getElementById('reviews__label-3').style.backgroundColor = '#ffbe41'
		}
    }
}
// Вызов функции при загрузке страницы
handleResize();

// Вызов функции при изменении размера окна
window.addEventListener('resize', handleResize);
