<?php
/**
 * Plugin Name:       Gutenwatch Video Lightbox
 * Description:       Gutenwatch Video Lightbox: A sleek, user-friendly plugin for displaying videos in a stylish pop-up box.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            ZealousWeb
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenwatch-video-lightbox
 *
 * @category  ZealousWeb
 * @package   gutenwatch-video-lightbox
 * @author    zealousweb <support@zealousweb.com>
 * @copyright 2023 zealousweb
 * @license   https://github.com/pjreddie/darknet/blob/master/LICENSE.gpl GPL-2.0+
 * @link      http://www.zealousweb.com/
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'ZWT_GVL_BLOCKS_FILE' ) ) {
	define( 'ZWT_GVL_BLOCKS_FILE', __FILE__ );
}

if ( ! defined( 'ZWT_GVL_BLOCKS_DIR' ) ) {
	define( 'ZWT_GVL_BLOCKS_DIR', dirname( __FILE__ ) );
}

if ( ! defined( 'ZWT_GVL_BLOCKS_ROOT' ) ) {
	define( 'ZWT_GVL_BLOCKS_ROOT', dirname( plugin_basename( ZWT_GVL_BLOCKS_FILE ) ) );
}

if ( ! defined( 'ZWT_GVL_BLOCK_PLUGIN_NAME' ) ) {
	define( 'ZWT_GVL_BLOCK_PLUGIN_NAME', 'ZWT GVL Blocks' );
}

if ( ! defined( 'ZWT_GVL_BLOCKS_VERSION' ) ) {
	define( 'ZWT_GVL_BLOCKS_VERSION', time() );
}

if ( ! defined( 'ZWT_GVL_BLOCKS_VERSION' ) ) {
	define( 'ZWT_GVL_BLOCK_PLUGIN_SHORT_NAME', 'GVL' );
}

/**
 * Add category in blocks lists.
 *
 * @param  array $categories - get category array.
 * @return array
 */
function zwt_gvl_plugin_block_categories( $categories ) {

    if ( array_search( 'zwt-blocks', array_column( $categories, 'slug' ), true ) === false ) {

		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'zwt-blocks',
					'title' => __( 'Zeal Blocks', 'gutenwatch-video-lightbox' ),
					'icon'  => '',
				),
			)
		);
	}
	      
	return $categories;
}
add_action( 'block_categories_all', 'zwt_gvl_plugin_block_categories', 10, 2 );


function zwt_gutenwatch_video_lightbox_block_init() {
	
	// Register LightBox CSS and JS.
	register_block_type(
		'zwt-gvl-blocks/gutenwatch-video-lightbox',
		array(
			'style'         => 'zwt_gvl_blocks-style-css',
			'style-comman'  => 'zwt_gvl_blocks-comman-style-css',
			'editor_script' => 'zwt_gvl_blocks-block-js',
			'editor_style'  => 'zwt_gvl_blocks-block-editor-css',
		)
	);
}
add_action( 'init', 'zwt_gutenwatch_video_lightbox_block_init' );