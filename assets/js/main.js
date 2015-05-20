(function ($) {
	var $document = $(document);

	$document.ready(function () {
		$('.project').each(function() {
			var index = $(this).data('index');

			if (index % 2 === 0) {
				$(this).addClass('project--even');
			} else {
				$(this).addClass('project--odd');
			}
		});
    });

})(jQuery);