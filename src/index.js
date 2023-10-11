/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'zwt-gvl-blocks/gutenwatch-video-lightbox', {
	apiVersion: 2,
	title: __( 'Video Lightbox', 'gutenwatch-video-lightbox' ),
	description: __( 'Slider with Image and Text which you can use for Testimonials slider.', 'gutenwatch-video-lightbox' ),
	icon: 'format-quote',
	category: 'zwt-blocks',
	example: {},
	supports: {
		align: true,
	}
} );
