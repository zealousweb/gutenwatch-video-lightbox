var $ = jQuery.noConflict();


/** Script on ready start
------------------------------------------------------------------------------*/
$(() => {

	/** Fancybox bindings for Media Grid */
    Fancybox.bind('[data-fancybox="video-lightbox"]', {
        mainClass: "video-lightbox-fancy",
    });
});
