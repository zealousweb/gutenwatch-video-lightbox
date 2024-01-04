var $ = jQuery.noConflict();


/** Script on ready start
------------------------------------------------------------------------------*/
$(() => {

    console.log('tr');

	/** Fancybox bindings for Media Grid */
    Fancybox.bind('[data-fancybox="video-lightbox"]', {
        mainClass: "video-lightbox-fancy",
    });
});
