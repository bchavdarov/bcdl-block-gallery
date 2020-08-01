/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		className,
		attributes: { title, body, mediaAlt, mediaID, mediaURL },
		setAttributes,
	} = props;

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaURL: media.url,
			mediaID: media.id,
			mediaAlt: media.alt,
			title: media.alt,
			body: media.description,
		} );
	};

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onChangeBody = ( value ) => {
		setAttributes( { body: value } );
	};

	return (
		<div className="card bcdl-mask-contain shadow">
			<div className="img-contain">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ onSelectImage }
						allowedTypes="image"
						value={ mediaID }
						render={ ( { open } ) => (
							<Button
								className={
									mediaID
										? 'image-button'
										: 'button button-large'
								}
								onClick={ open }
							>
								{ ! mediaID ? (
									__( 'Upload Image', 'bcdl-block-gallery' )
								) : (
									<img
										src={ mediaURL }
										alt={ mediaAlt }
										className="card-img"
									/>
								) }
							</Button>
						) }
					/>
				</MediaUploadCheck>
				<div className="bcdl-mask rounded"></div>
			</div>
			<div className="card-body">
				<a className="stretched-link" href="#">
				<RichText
					tagName="h2"
					className="card-title h5 text-center bcdl-rounded font-weight-bold"
					placeholder={ __( 'The card title', 'bcdl-block-gallery' ) }
					value={ title }
					onChange={ onChangeTitle }
				/>
				</a>
				<RichText
					tagName="p"
					className="card-text"
					placeholder={ __( 'The card body text', 'bcdl-block-gallery' ) }
					value={ body }
					onChange={ onChangeBody }
				/>
			</div>
		</div>
	);
}
