<?php
/**
 * Plugin Name:       My First Block
 * Description:       Example block scaffolded with Create Block tool.
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

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if (!defined('VIDEO_LIGHTBOX_VERSION')) {
    define('VIDEO_LIGHTBOX_VERSION', time());
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function VIdeo_Lightbox_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'VIdeo_Lightbox_init' );


/**
 * Register block assets.
 *
 * @return void
 */
function Video_Lightbox_For_Gutenberg_Block_init(){

    wp_enqueue_script(
        'fancyapp-lib',
        plugins_url('/assets/js/fancybox.umd.js', __FILE__),
        array('jquery'),
        '5.0.24',
        true
    );

    wp_enqueue_style(
        'fancyapp-css',
        plugins_url('/assets/css/fancybox.css', __FILE__),
        '5.0.24',
        true
    );

	wp_enqueue_script(
        'script-custom',
        plugins_url('/assets/js/script.js', __FILE__),
        array('jquery', 'fancyapp-lib'),
        VIDEO_LIGHTBOX_VERSION,
        true
    );

}

add_action('init', 'Video_Lightbox_For_Gutenberg_Block_init');
