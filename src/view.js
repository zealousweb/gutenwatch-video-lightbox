/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
var $ = jQuery.noConflict();


/** Script on ready start
------------------------------------------------------------------------------*/
$(() => {

    jQuery("[data-fancybox]").each(function () {
        $this = jQuery(this);
        $datafancyclass = jQuery(this).attr('data-fancy-class');
        console.log('data' + $datafancyclass);
        Fancybox.bind('[data-fancybox="' + $datafancyclass + '"]', {
            mainClass: `zwt-vlfgb-fancy ` + $datafancyclass + '-fancy-custom',
        });
        // jQuery(".vl-button ." + $datafancyclass).fancybox({
        //     mainClass: $datafancyclass + '-fancy-custom'
        //     // Add other options as needed
        // });
        // Fancybox.bind(['data-fancybox="zwt-vlfgb-' + $datafancyclass + '"'] , {
        //     mainClass: `zwt-vlfgb-fancy ` + $datafancyclass + '-fancy-custom',
        // });
        // var galleryId = $(this).data("fancybox");
        // $(this).find("a").attr("data-fancybox", galleryId);
    });

    // $(document).on('click', '.vl-button', function(){
    //
    // });



    /** Fancybox bindings for Media Grid */
    // Fancybox.bind('[data-fancybox]', {
    // mainClass: `zwt-vlfgb-fancy`,
    // });
});
/* eslint-enable no-console */


// $(window).on('load', () => {
//     // Your code here
//     $("[data-fancybox]").each(function () {
//         $this = $(this);
//         $datafancyclass = $(this).attr('data-fancy-class');
//         console.log($datafancyclass);
//         $(".vl-button ." + $datafancyclass).fancybox({
//             mainClass: $datafancyclass + '-fancy-custom'
//             // Add other options as needed
//         });
//         // Fancybox.bind(['data-fancybox="video-lightbox-' + $datafancyclass + '"'] , {
//         //     mainClass: `video-lightbox-fancy ` + $datafancyclass + '-fancy-custom',
//         // });
//         // var galleryId = $(this).data("fancybox");
//         // $(this).find("a").attr("data-fancybox", galleryId);
//     });
//     console.log('Page and all resources are loaded');
// });
