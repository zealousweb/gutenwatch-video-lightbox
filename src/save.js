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
    const { selection, image, buttonText, buttonBorderWidth, buttonBackgroundColor, buttonBackgroundHoverColor, buttonTextHoverColor, buttonBorderHoverColor, videoLightboxWidth, videoLightboxColor, buttonTextColor, buttonBorderColor, buttonBorderRadius, videoThumbnailBorderRadius, videoType, videoUrl, video, additionalSettingsEnabled, playIconImage, playIconImageSize, imageSize, selectedSize, videoLightboxOpacity } = attributes;
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
      .button-open-vl button{
        background-color: ${buttonBackgroundColor} !important;
        color: ${buttonTextColor} !important;
        border: ${buttonBorderWidth}px solid ${buttonBorderColor} !important;
        border-radius: ${buttonBorderRadius}px !important;
      }
      .button-open-vl:hover button {
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
        <>
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
                    <a data-fancybox="video-lightbox" href={attributes.videoUrl || attributes.video} class="button-open-vl"
                        style={{/* backgroundColor: buttonBackgroundColor, textColor: buttonTextColor, borderWidth: buttonBorderWidth */ }}
                    ><button>
                            {buttonContent}
                        </button>
                    </a>
                </>
            ) : (
                attributes.selection === 'media' && selectedSize && image && ((isValidHttpUrl(attributes.videoUrl) || attributes.video) && (videoType === 'videourl' || videoType === 'uploadvideo')) && (
                    <a data-fancybox="video-lightbox" href={attributes.videoUrl || attributes.video} class="video-thumbnail" >
                        <img src={attributes.image.sizes[selectedSize].url} alt={(attributes.image.alt ? attributes.image.alt : '')} />
                        {attributes.additionalSettingsEnabled && attributes.playIconImage && (
                            <span className="play-icon" style={`width:${playIconImageSize}px`}>
                                <img src={playIconImage} alt={__('Play Icon', 'videolightboxforgutenberg')} />
                            </span>
                        )}
                    </a>
                )
            )}
        </>
	);
}
