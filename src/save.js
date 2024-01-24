/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( {attributes} ) {

    /** Get constant values contains values to save */
    const { blockClass, selection, image, buttonText, buttonBorderWidth, buttonBackgroundColor, buttonBackgroundHoverColor, buttonTextHoverColor, buttonBorderHoverColor, videoLightboxWidth, videoLightboxColor, buttonTextColor, buttonBorderColor, buttonBorderRadius, videoThumbnailBorderRadius, videoType, videoUrl, video, playIconEnabled, playIconImage, playIconImageSize, imageSize, selectedSize, videoLightboxOpacity } = attributes;
    const buttonContent = buttonText.trim() !== '' ? buttonText : 'Open Video';

    function isValidHttpUrl(str) {
        const pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', // fragment locator
            'i'
        );
        return pattern.test(str);
    }
    const customStyles = `
      .video-lightbox-fancy .fancybox__backdrop {
        background: ${videoLightboxColor};
        opacity: ${videoLightboxOpacity};
      }
      .video-lightbox-fancy .fancybox__content {
        max-width: ${videoLightboxWidth}px;
        width: 100% !important;
      }
      .${blockClass}{
        background-color: ${buttonBackgroundColor} !important;
        color: ${buttonTextColor} !important;
        border: ${buttonBorderWidth}px solid ${buttonBorderColor} !important;
        border-radius: ${buttonBorderRadius}px !important;
      }
      .${blockClass}:hover {
        background-color: ${buttonBackgroundHoverColor} !important;
        color: ${buttonTextHoverColor} !important;
        border: ${buttonBorderWidth}px solid ${buttonBorderHoverColor} !important;
      }
      .video-thumbnail{
        border-radius: ${videoThumbnailBorderRadius}px;
      }
      /* Add more styles as needed */
    `;
	return (
        /** Structure to show for update data */
        <div {...useBlockProps.save()}>
            {<style>
                {customStyles}
            </style>}
            {/**
                *  <ul>
                    {Object.keys(attributes).map((key) => (
                        <li key={key}>
                            <strong>{key}:</strong> {attributes[key]}
                        </li>
                    ))}
                </ul>
                */}
            {attributes.selection === 'button' && ((isValidHttpUrl(attributes.videoUrl) || attributes.video) && (videoType === 'videourl' || videoType === 'uploadvideo')) ? (
                <>
                    <a data-fancybox={`video-lightbox-${blockClass}`} href={attributes.videoUrl || attributes.video} className={`vl-button vl-icon-text-button ${blockClass}`}>						
                        <svg viewBox="0 0 24 24" width="24"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="currentColor"></path> </g></svg>
                        {buttonContent}	
                    </a>
                </>
            ) : (
                attributes.selection === 'media' && selectedSize && image && ((isValidHttpUrl(attributes.videoUrl) || attributes.video) && (videoType === 'videourl' || videoType === 'uploadvideo')) && (
                    <a data-fancybox={`video-lightbox-${blockClass}`} href={attributes.videoUrl || attributes.video} class="video-thumbnail" >
                        <img src={attributes.image.sizes[selectedSize].url} alt={(attributes.image.alt ? attributes.image.alt : '')} />
                        {attributes.playIconEnabled && attributes.playIconImage ? (
                            <span className="play-icon" style={`width:${playIconImageSize}px`}>
                                <img src={playIconImage} alt={__('Play Icon', 'video-lightbox-for-guten-blocks')} />
                            </span>
                        ) : (
                            <svg viewBox="0 0 24 24" className="play-icon" width={attributes.playIconImageSize}><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="currentColor"></path> </g></svg>
						)}
                    </a>
                )
            )}
        </div>
	);
}
