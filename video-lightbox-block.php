<?php
/**
 * Plugin Name:       Video Lightbox for Gutenberg
 * Description:       Working copy Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-first-block
 *
 * @package           create-block
 */

if (!defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if (!defined('VIDEO_LIGHTBOX_VERSION')) {
    define('VIDEO_LIGHTBOX_VERSION', time());
}


//require_once GRID_MASONRY_DIR . '/inc/custom-functions.php';

/**
 * Register block assets.
 *
 * @return void
 */
function Video_Lightbox_For_Gutenberg_Block_init(){

    wp_enqueue_script(
        'fancyapp-lib-video-lb',
        plugins_url('/assets/js/fancybox.umd.js', __FILE__),
        array('jquery'),
        '5.0.24',
        true
    );

    wp_enqueue_style(
        'fancyapp-css-video-lb',
        plugins_url('/assets/css/fancybox.css', __FILE__),
        '',
        '5.0.24',
        true
    );

	wp_enqueue_script(
        'script-custom-video-lb',
        plugins_url('/assets/js/script.js', __FILE__),
        array('jquery', 'fancyapp-lib-video-lb'),
        VIDEO_LIGHTBOX_VERSION,
        true
    );

    register_block_type( __DIR__ . '/build' );

}

add_action('init', 'Video_Lightbox_For_Gutenberg_Block_init');


/**
 * Undocumented function
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