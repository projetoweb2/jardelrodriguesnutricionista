// debounce vai segurar a ativação da função
// evitando que ela seja ativada várias vezes durante o scroll.
debounce = function(func, wait, immediate){
	var timeout;

	return function() {

		var context = this, args = arguments;
		var later = function(){
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



(function(){ // Essa função encapsula as demais para ocultar a visualização pelo usuário.

var $target = $('.anime'),
	animationClass = 'anime-start',
	offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){

			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);

			} else {
				$(this).removeClass(animationClass);
			}
		})

	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
		
	},200 ));
	// vai segurar a função por 200 milisegundos

	//MELHORA A PERFORMACE DO SITE

}());