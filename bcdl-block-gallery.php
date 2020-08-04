<?php
/**
 * Plugin Name:        BCDL Gutenberg Block Gallery
 * Plugin URI:         https://github.com/bchavdarov/bcdl-block-gallery
 * Description:        BCDL block written with ESNext standard and JSX support – build step required!
 * Version:            1.2
 * Requires at least:  5.2
 * Requires PHP:       7.2
 * Author:             Boncho Chavdarov
 * Author URI:         https://bchavdarov.github.io/bcdlab
 * License:            GPL-2.0-or-later
 * License URI:        https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:        bcdl-block-gallery
 *
 * @package            bcdl-block-gallery
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function bcdl_block_gallery_bcdl_block_gallery_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "bcdl-block-gallery/bcdl-block-gallery" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'bcdl-block-gallery-bcdl-block-gallery-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'bcdl-block-gallery-bcdl-block-gallery-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'bcdl-block-gallery-bcdl-block-gallery-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'bcdl-block-gallery/bcdl-block-gallery', array(
		'editor_script' => 'bcdl-block-gallery-bcdl-block-gallery-block-editor',
		'editor_style'  => 'bcdl-block-gallery-bcdl-block-gallery-block-editor',
		'style'         => 'bcdl-block-gallery-bcdl-block-gallery-block',
	) );
}
add_action( 'init', 'bcdl_block_gallery_bcdl_block_gallery_block_init' );
