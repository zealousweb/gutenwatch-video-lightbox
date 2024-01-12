<?php
/**
 * Plugin Name:       Video Lightbox For Guten Blocks
 * Description:       Video.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       video-lightbox-for-guten-blocks
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if (!defined('VIDEO_LIGHTBOX_VERSION')) {
    define('VIDEO_LIGHTBOX_VERSION', time());
}


/**
 * Register block assets.
 *
 * @return void
 */
function Video_Lightbox_For_Gutenberg_Block_init(){

    wp_enqueue_script(
        'video-lightbox-fancybox-library-js',
        plugins_url('/assets/js/fancybox.umd.js', __FILE__),
        array('jquery'),
        '5.0.24',
        true
    );

    wp_enqueue_style(
        'video-lightbox-fancybox-liblibrary-css',
        plugins_url('/assets/css/fancybox.css', __FILE__),
        '',
        '5.0.24',
        ''
    );

	// wp_enqueue_script(
    //     'video-lightbox-script-custom',
    //     plugins_url('/assets/js/script.js', __FILE__),
    //     array('jquery', 'video-lightbox-fancybox-library-js'),
    //     VIDEO_LIGHTBOX_VERSION,
    //     true
    // );

    // wp_enqueue_style(
    //     'front-styles',
    //     plugins_url('/build/style-index.css', __FILE__),
    //     VIDEO_LIGHTBOX_VERSION,
    //     true
    // );
}

add_action('init', 'Video_Lightbox_For_Gutenberg_Block_init');

/**
 * Category Creation function
 *
 * @param array $categories - list of category.
 *
 * @return mixed Return description.
 */
function VideoLightbox_Plugin_Block_Categories( $categories )
{
    if (array_search('zealblocks', array_column($categories, 'slug'), true) === false) {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'zealblocks',
                    'title' => __('ZealBlocks', 'videolightboxforgutenberg'),
                    'icon' => '',
                ),
            )
        );
    }
    return $categories;
}
add_action('block_categories_all', 'VideoLightbox_Plugin_Block_Categories', 10, 2);

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function video_lightbox_for_guten_blocks_video_lightbox_for_guten_blocks_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'video_lightbox_for_guten_blocks_video_lightbox_for_guten_blocks_block_init' );