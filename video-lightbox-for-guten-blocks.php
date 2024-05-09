<?php
/**
 * Plugin Name:       Video Lightbox For Guten Blocks
 * Description:       Enhance your WordPress website with the "Video Lightbox for Gutenberg Blocks" plugin, a powerful tool that seamlessly integrates into the Gutenberg editor to bring a captivating multimedia experience to your content.
 * Requires at least: 5.9
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            <a href="https://www.zealousweb.com/">ZealousWeb</a>
 * License:           GNU General Public License v3.0 or later
 * License URI:       https://spdx.org/licenses/GPL-3.0-or-later.html
 * Text Domain:       video-lightbox-for-guten-blocks
 *
 * @category  ZealBlocks
 * @package   Video-Lightbox-for-Guten-Blocks
 * @author    ZealousWeb <support@zealousweb.com>
 * @copyright 2024 ZealousWeb
 * @license   GNU General Public License v3.0 or later
 * @link      https://spdx.org/licenses/GPL-3.0-or-later.html
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if (!defined('ZWT_VLFGB_VERSION')) {
    define('ZWT_VLFGB_VERSION', time());
}


/**
 * Register block assets.
 *
 * @return void
 */
function ZWT_VLFGB_init(){

    wp_enqueue_script(
        'zwt-vlfgb-fancybox-library-js',
        plugins_url('/assets/js/fancybox.umd.js', __FILE__),
        array('jquery'),
        '5.0.24',
        false
    );

    wp_enqueue_style(
        'zwt-vlfgb-fancybox-liblibrary-css',
        plugins_url('/assets/css/fancybox.css', __FILE__),
        '',
        '5.0.24',
        ''
    );

    // wp_enqueue_script(
    //     'zwt-vlfgb-custom-js',
    //     plugins_url('/assets/js/scripts.js', __FILE__),
    //     array('jquery', 'zwt-vlfgb-fancybox-library-js'),
    //     '',
    //     false
    // );
}

add_action('init', 'ZWT_VLFGB_init');

/**
 * Category Creation function
 *
 * @param array $categories - list of category.
 *
 * @return mixed Return description.
 */
function ZWT_VLFGB_Categories( $categories )
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
add_action('block_categories_all', 'ZWT_VLFGB_Categories', 10, 2);

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ZWT_VLFGB_VLFGB_init() {
    if ( ! function_exists( 'register_block_type' ) ) {
        // Block editor is not available.
        return;
    }
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ZWT_VLFGB_VLFGB_init' );
