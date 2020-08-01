/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const {
			className,
			attributes: { title, body, mediaAlt, mediaID, mediaURL },
		} = props;

	return (
		<div>
		<div className={ "card bcdl-mask-contain shadow" }>
			<div className={ "img-contain" }>
				{ mediaURL && (
					<img
						className="card-img"
						src={ mediaURL }
						//alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
						alt={ mediaAlt }
					/>
				) }
				<div class="bcdl-mask rounded"></div>
			</div>
			<div className="card-body">
				<a className="stretched-link" href="#" data-toggle="modal" data-target="#exampleModal">
					<RichText.Content 
						tagName="h2"
						className="card-title h5 text-center bcdl-rounded font-weight-bold"
						value={ title }
					/>
				</a>
				<RichText.Content 
					tagName="p"
					className="card-text"
					value={ body }
				/>
			</div>
		</div>
		<div class="modal fade h-100" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl h-100">
				<div class="modal-content bg-dark">
					<div class="modal-body">
						{ mediaURL && (
							<img
									className="img-fluid"
									src={ mediaURL }
									alt={ mediaAlt }
								/>
							) }
					</div>
					<div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
				</div>
			</div>
		</div>
		</div>
	);
}
