/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { MediaUploadCheck, MediaUpload, InspectorControls, PanelColorSettings, useBlockProps } from '@wordpress/block-editor';
import { Button, TextControl, RadioControl, Panel, PanelBody, SelectControl, ToggleControl, IconButton, RangeControl } from '@wordpress/components';
import { select } from '@wordpress/data';
import React, { useRef } from 'react';
import isURL from 'validator/lib/isURL';
import { createErrorNotice } from '@wordpress/notices';
import { withDispatch } from '@wordpress/data';

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
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, noticeOperations }) {

    const { selectedSize } = attributes;
    const { video } = attributes;
    const { image } = attributes;
    const { buttonBorderWidth, buttonBorderColor, buttonBorderHoverColor, buttonBackgroundColor, buttonBackgroundHoverColor, buttonTextColor, buttonTextHoverColor, buttonBorderRadius, videoThumbnailBorderRadius } = attributes;

    /** get thumbnail image sizes from wordpress */
    const imageSizes = select('core/editor').getEditorSettings().imageSizes.map((size) => size.slug);

    /** Constant values to contain default values */
    const onSelectImage = (image) => {
        if (image && (image.mime === 'image/jpeg' || image.mime === 'image/jpg' || image.mime === 'image/png')) {
            setAttributes({
                image: image,
            });
        }
    };

    /** Remove Main Image */
    const removeImage = () => {
        setAttributes({ image: '' });
    };

    /** On Select Play Icon */
    const onSelectIcon = (newIcon) => {
        if (newIcon && (newIcon.mime === 'image/jpeg' || newIcon.mime === 'image/jpg' || newIcon.mime === 'image/png' || newIcon.mime === 'image/svg+xml')) {
            setAttributes({ playIconImage: newIcon.url });
        }
    };

    /** Remove Play Icon */
    const removeIcon = () => {
        setAttributes({ playIconImage: '' });
    };

    /** Handling Button or Image to appear on Front-end */
    const handleSelectionChange = (newSelection) => {
        setAttributes({ selection: newSelection });
    };

    /** Handling Button Text */
    const handleTextChange = (newText) => {
        setAttributes({ buttonText: newText });
    };

    /** Handling Button Background Color */
    const handleBackgroundColorChange = (color) => {
        setAttributes({ buttonBackgroundColor: color });
    };

    /** Handling Button Text Color */
    const handleTextColorChange = (color) => {
        setAttributes({ buttonTextColor: color });
    };

    /** Handling Button Border Color */
    const handleBorderColorChange = (color) => {
        setAttributes({ buttonBorderColor: color });
    };

    /** Handling Button Hover Background Color */
    const handleBackgroundHoverColorChange = (color) => {
        setAttributes({ buttonBackgroundHoverColor: color });
    };

    /** Handling Button Hover Text Color */
    const handleTextHoverColorChange = (color) => {
        setAttributes({ buttonTextHoverColor: color });
    };

    /** Handling Button Hover Border Color */
    const handleBorderHoverColorChange = (color) => {
        setAttributes({ buttonBorderHoverColor: color });
    };

    /** Handling Button Border Width Size */
    const handleButtonBorderWidth = (value) => {
        setAttributes({ buttonBorderWidth: value });
    };

    /** Handling Button Border Radius */
    const handleButtonBorderRadius = (value) => {
        setAttributes({ buttonBorderRadius: value });
    };

    // const handleImageSizeChange = (newSize) => {
    //     setAttributes({ imageSize: newSize });
    // };


    const handleVideoThumbnailBorderRadius = (value) => {
        setAttributes({ videoThumbnailBorderRadius: value });
    };

    const handlePlayIcon = (checked) => {
        setAttributes({ playIconEnabled: checked });
    };

    const handlePlayIconSizeChange = (newSize) => {
        setAttributes({ playIconImageSize: newSize });
    };

    const handlePlayIconImageChange = (value) => {
        setAttributes({ playIconImage: value });
    };

    const handleColorChange = (color) => {
        setAttributes({ videoLightboxColor: color });
    };

    const handleOpacityChange = (value) => {
        setAttributes({ videoLightboxOpacity: value });
    };

    const handleWidthChange = (value) => {
        setAttributes({ videoLightboxWidth: value });
    };

    const handleVideoTypeChange = (newType) => {
        setAttributes({ videoType: newType });
    };

    const handleVideoUrlChange = (newUrl) => {
        setAttributes({ videoUrl: newUrl });
        setAttributes({ video: '' });
    };

    /** Upload Video **/
    const onUploadVideo = (newVideo) => {
        if (newVideo && (newVideo.mime === 'video/mp4')) {
            setAttributes({ video: newVideo.url });
            setAttributes({ videoUrl: '' });
        }
    };

    /** Remove Upload Video */
    const removeVideo = () => {
        setAttributes({ video: '' });
    };

    const customStyles = `
      .vl-button {
        background-color: ${buttonBackgroundColor} !important;
        color: ${buttonTextColor} !important;
        border: ${buttonBorderWidth}px solid ${buttonBorderColor} !important;
        border-radius: ${buttonBorderRadius}px !important;
      }
      .vl-button:hover {
        background-color: ${buttonBackgroundHoverColor} !important;
        color: ${buttonTextHoverColor} !important;
        border: ${buttonBorderWidth}px solid ${buttonBorderHoverColor} !important;
      }

      .video-thumbnail {
        border-radius: ${videoThumbnailBorderRadius}px;
      }
      /* Add more styles as needed */
    `;

    return (
        <div className="video-lightbox">
            {
                <style>
                    {customStyles}
                </style>
            }
            <div className="video-lb-notes">
                <h2>{__('Select Option for Video Popup', 'video-lightbox-for-guten-blocks')}</h2>
                <p>{__('* Please find Video upload, and customization options in sidebar', 'video-lightbox-for-guten-blocks')}</p>
            </div>
            <RadioControl
                //label={__('Select Option for Video Popup')}
                selected={attributes.selection}
                options={[
                    { label: __('Button', 'video-lightbox-for-guten-blocks'), value: 'button' },
                    { label: __('Media Upload', 'video-lightbox-for-guten-blocks'), value: 'media' },
                ]}
                onChange={handleSelectionChange}
            />

            <InspectorControls>
                <Panel>
                    <PanelBody title={__('Button Design', 'video-lightbox-for-guten-blocks')}>
                        <RangeControl
                            label={__('Button Border Width', 'video-lightbox-for-guten-blocks')}
                            value={attributes.buttonBorderWidth}
                            onChange={handleButtonBorderWidth}
                            min={0}
                            max={2}
                            step={1}
                        />
                        <RangeControl
                            label={__('Button Border Radius', 'video-lightbox-for-guten-blocks')}
                            value={attributes.buttonBorderRadius}
                            onChange={handleButtonBorderRadius}
                            min={0}
                            max={30}
                            step={2}
                        />
                        <PanelColorSettings
                            title={__('Button Design', 'video-lightbox-for-guten-blocks')}
                            colorSettings={[
                                {
                                    value: attributes.buttonBackgroundColor,
                                    onChange: handleBackgroundColorChange,
                                    label: __('Background Color', 'video-lightbox-for-guten-blocks'),
                                },
                                {
                                    value: attributes.buttonTextColor,
                                    onChange: handleTextColorChange,
                                    label: __('Text Color', 'video-lightbox-for-guten-blocks'),
                                },
                                {
                                    value: attributes.buttonBorderColor,
                                    onChange: handleBorderColorChange,
                                    label: __('Border Color', 'video-lightbox-for-guten-blocks'),
                                },
                                {
                                    value: attributes.buttonBackgroundHoverColor,
                                    onChange: handleBackgroundHoverColorChange,
                                    label: __('Background Hover Color', 'video-lightbox-for-guten-blocks'),
                                },
                                {
                                    value: attributes.buttonTextHoverColor,
                                    onChange: handleTextHoverColorChange,
                                    label: __('Text Hover Color', 'video-lightbox-for-guten-blocks'),
                                },
                                {
                                    value: attributes.buttonBorderHoverColor,
                                    onChange: handleBorderHoverColorChange,
                                    label: __('Border Hover Color', 'video-lightbox-for-guten-blocks'),
                                },
                            ]}
                        />
                    </PanelBody>
                    {/*attributes.selection === 'button' && (
                        <PanelBody title={__('Button Settings', 'video-lightbox-for-guten-blocks')}>


                        </PanelBody>
                    )*/}

                    {attributes.selection === 'media' && (
                        <PanelBody title={__('Play Icon Settings', 'video-lightbox-for-guten-blocks')}>
                            <ToggleControl
                                label={__('Cusstom Play Icon', 'video-lightbox-for-guten-blocks')}
                                checked={attributes.playIconEnabled}
                                onChange={handlePlayIcon}
                            />

                            {attributes.playIconEnabled && (
                                <div>
                                    {attributes.playIconImage ? (
                                        <div class="vl-thumbnail">
                                            <img src={attributes.playIconImage} alt="Uploaded Icon" />
                                            <Button className="vl-button vl-icon-button" onClick={removeIcon}>
                                                <svg viewBox="0 0 24 24"><g><path d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 3L19 5M21 7L19 5M19 5L21 3M19 5L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                            </Button>
                                        </div>
                                    ) : (
                                        <MediaUploadCheck>
                                            <MediaUpload
                                                onSelect={onSelectIcon}
                                                type="image"
                                                value={attributes.playIconImage}
                                                allowedTypes={['image']}
                                                render={({ open }) => (
                                                    <div>
                                                        <Button
                                                            style={{ marginBottom: 20 }}
                                                            className="vl-button vl-icon-text-button"
                                                            onClick={open}
                                                            aria-label={__('Upload Icon', 'video-lightbox-for-guten-blocks')} >
                                                            <svg viewBox="0 0 24 24"><g> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"></path> </g> </g></svg>
                                                            {__('Upload Icon', 'video-lightbox-for-guten-blocks')}
                                                        </Button>
                                                    </div>
                                                )}
                                            />
                                        </MediaUploadCheck>
                                    )}

                                    <RangeControl
                                        label={__('Play Icon Size', 'video-lightbox-for-guten-blocks')}
                                        value={attributes.playIconImageSize}
                                        onChange={handlePlayIconSizeChange}
                                        min={0}
                                        max={100}
                                        step={2}
                                    />
                                </div>
                            )}
                        </PanelBody>
                    )}

                    <PanelBody title={__('Video Type Settings', 'video-lightbox-for-guten-blocks')}>
                        <SelectControl
                            label={__('Video Thumbnail Size', 'video-lightbox-for-guten-blocks')}
                            value={selectedSize}
                            options={imageSizes.map((size) => ({ label: size, value: size }))}
                            onChange={(newSelectedSize) => setAttributes({ selectedSize: newSelectedSize })}
                        />
                        <RadioControl
                            label={__('Select Video Type', 'video-lightbox-for-guten-blocks')}
                            selected={attributes.videoType}
                            options={[
                                { label: 'Upload Video', value: 'uploadvideo' },
                                { label: 'Video Url', value: 'videourl' },
                            ]}
                            onChange={handleVideoTypeChange}
                        />

                        {attributes.videoType === 'videourl' && (
                            <>
                                <TextControl
                                    label={__('Video URL', 'video-lightbox-for-guten-blocks')}
                                    value={attributes.videoUrl}
                                    onChange={handleVideoUrlChange}
                                    isRequired={true}
                                />

                            </>
                        )}

                        {attributes.videoType === 'uploadvideo' && (
                            <>
                                {attributes.video ? (

                                    <div className="video-thumbnail">
                                        <video src={attributes.video}></video>
                                        <Button className="vl-button vl-icon-button" onClick={removeVideo}>
                                            <svg viewBox="0 0 24 24"><g><path d="M21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.03 14.57 19.83 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.88 21.2 15.17 21.55 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C16.44 22.62 17.42 23 18.5 23C20.14 23 21.57 22.12 22.35 20.82C22.58 20.43 22.76 20 22.87 19.55C22.96 19.21 23 18.86 23 18.5C23 17.43 22.62 16.44 21.98 15.67ZM20.23 20.21C20.08 20.36 19.89 20.43 19.7 20.43C19.51 20.43 19.32 20.36 19.17 20.21L18.51 19.55L17.82 20.24C17.67 20.39 17.48 20.46 17.29 20.46C17.1 20.46 16.91 20.39 16.76 20.24C16.47 19.95 16.47 19.47 16.76 19.18L17.45 18.49L16.79 17.83C16.5 17.54 16.5 17.06 16.79 16.77C17.08 16.48 17.56 16.48 17.85 16.77L18.51 17.43L19.14 16.8C19.43 16.51 19.91 16.51 20.2 16.8C20.49 17.09 20.49 17.57 20.2 17.86L19.57 18.49L20.23 19.15C20.53 19.44 20.53 19.91 20.23 20.21Z" fill="currentColor"></path> <path d="M14.7295 5.86V2.5C14.7295 2.22 14.5095 2 14.2295 2H9.76953C9.48953 2 9.26953 2.22 9.26953 2.5V5.86C9.26953 6.14 9.48953 6.36 9.76953 6.36H14.2295C14.5095 6.36 14.7295 6.14 14.7295 5.86Z" fill="currentColor"></path> <path d="M7.24851 2.0207C4.68851 2.1807 2.93851 3.5007 2.28851 5.7007C2.18851 6.0307 2.42851 6.3607 2.76851 6.3607H7.26851C7.54851 6.3607 7.76851 6.1407 7.76851 5.8607V2.5207C7.76851 2.2407 7.52851 2.0007 7.24851 2.0207Z" fill="currentColor"></path> <path d="M16.7505 2.00898C19.3105 2.16898 21.0605 3.48898 21.7105 5.68898C21.8105 6.01898 21.5705 6.34898 21.2305 6.34898H16.7305C16.4505 6.34898 16.2305 6.12898 16.2305 5.84898V2.50898C16.2305 2.22898 16.4705 1.98898 16.7505 2.00898Z" fill="currentColor"></path> <path d="M22 8.35937V12.7394C22 13.1094 21.61 13.3494 21.28 13.1794C20.44 12.7394 19.48 12.4994 18.5 12.4994C16.89 12.4994 15.32 13.1594 14.2 14.3094C13.1 15.4294 12.5 16.9194 12.5 18.4994C12.5 19.3094 12.82 20.3494 13.22 21.2194C13.38 21.5694 13.14 21.9994 12.75 21.9994H7.81C4.6 21.9994 2 19.3994 2 16.1894V8.35937C2 8.07937 2.22 7.85938 2.5 7.85938H21.5C21.78 7.85938 22 8.07937 22 8.35937Z" fill="currentColor"></path></g></svg>
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <MediaUpload
                                            onSelect={onUploadVideo}
                                            type="video"
                                            value={attributes.video}
                                            allowedTypes={['video']}
                                            render={({ open }) => (
                                                <Button className="vl-button vl-icon-text-button" onClick={open}>
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M14.7295 5.86V2.5C14.7295 2.22 14.5095 2 14.2295 2H9.76953C9.48953 2 9.26953 2.22 9.26953 2.5V5.86C9.26953 6.14 9.48953 6.36 9.76953 6.36H14.2295C14.5095 6.36 14.7295 6.14 14.7295 5.86Z" fill="currentColor"></path> <path d="M7.24851 2.0207C4.68851 2.1807 2.93851 3.5007 2.28851 5.7007C2.18851 6.0307 2.42851 6.3607 2.76851 6.3607H7.26851C7.54851 6.3607 7.76851 6.1407 7.76851 5.8607V2.5207C7.76851 2.2407 7.52851 2.0007 7.24851 2.0207Z" fill="currentColor"></path> <path d="M16.7505 2.00898C19.3105 2.16898 21.0605 3.48898 21.7105 5.68898C21.8105 6.01898 21.5705 6.34898 21.2305 6.34898H16.7305C16.4505 6.34898 16.2305 6.12898 16.2305 5.84898V2.50898C16.2305 2.22898 16.4705 1.98898 16.7505 2.00898Z" fill="currentColor"></path> <path d="M22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C15.69 21.99 15.7 22 15.71 22C16.46 22.63 17.43 23 18.5 23C20.14 23 21.57 22.12 22.35 20.82C22.58 20.43 22.76 20 22.87 19.55C22.96 19.21 23 18.86 23 18.5C23 17.44 22.63 16.46 22 15.7ZM20.18 19.23H19.25V20.2C19.25 20.61 18.91 20.95 18.5 20.95C18.09 20.95 17.75 20.61 17.75 20.2V19.23H16.82C16.41 19.23 16.07 18.89 16.07 18.48C16.07 18.07 16.41 17.73 16.82 17.73H17.75V16.84C17.75 16.43 18.09 16.09 18.5 16.09C18.91 16.09 19.25 16.43 19.25 16.84V17.73H20.18C20.59 17.73 20.93 18.07 20.93 18.48C20.93 18.89 20.6 19.23 20.18 19.23Z" fill="currentColor"></path> <path d="M22 8.35937V12.7394C22 13.1094 21.61 13.3494 21.28 13.1794C20.44 12.7394 19.48 12.4994 18.5 12.4994C16.89 12.4994 15.32 13.1594 14.2 14.3094C13.1 15.4294 12.5 16.9194 12.5 18.4994C12.5 19.3094 12.82 20.3494 13.22 21.2194C13.38 21.5694 13.14 21.9994 12.75 21.9994H7.81C4.6 21.9994 2 19.3994 2 16.1894V8.35937C2 8.07937 2.22 7.85938 2.5 7.85938H21.5C21.78 7.85938 22 8.07937 22 8.35937Z" fill="currentColor"></path> </g></svg>
                                                    {__('Upload Video', 'video-lightbox-for-guten-blocks')}
                                                </Button>
                                            )}
                                        />
                                    </>
                                )}
                            </>
                        )}


                    </PanelBody>

                    <PanelBody title={__('Video Lightbox Settings', 'video-lightbox-for-guten-blocks')}>
                        <PanelColorSettings
                            title={__('Lightbox Color', 'video-lightbox-for-guten-blocks')}
                            colorSettings={[
                                {
                                    value: attributes.videoLightboxColor,
                                    onChange: handleColorChange,
                                    label: __('Select Lightbox Color', 'video-lightbox-for-guten-blocks'),
                                },
                            ]}
                        />
                        <RangeControl
                            label={__('Video Thumbnail Border Radius', 'video-lightbox-for-guten-blocks')}
                            value={attributes.videoThumbnailBorderRadius}
                            onChange={handleVideoThumbnailBorderRadius}
                            min={0}
                            max={30}
                            step={2}
                        />
                        <RangeControl
                            label={__('Lightbox Opacity', 'video-lightbox-for-guten-blocks')}
                            value={attributes.videoLightboxOpacity}
                            onChange={handleOpacityChange}
                            min={0}
                            max={1}
                            step={0.1}
                        />
                        <RangeControl
                            label={__('Lightbox Width', 'video-lightbox-for-guten-blocks')}
                            value={attributes.videoLightboxWidth}
                            onChange={handleWidthChange}
                            min={320}
                            max={1180}
                            step={10}
                        />
                    </PanelBody>

                </Panel>
            </InspectorControls>

            <div className="media-block">
                {attributes.selection === 'button' && (
                    <>
                        <TextControl
                            label={__('Update Button Text', 'video-lightbox-for-guten-blocks')}
                            value={attributes.buttonText}
                            onChange={handleTextChange}
                            placeholder={__('Play Video', 'video-lightbox-for-guten-blocks')}
                        />
                        <Button
                            className="vl-button vl-icon-text-button"
                            onClick={() => setAttributes({ selection: 'button' })}>
                            <svg viewBox="0 0 24 24" width="24"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" ></path> </g></svg>
                            {attributes.buttonText}
                        </Button>
                    </>
                )}

                {attributes.selection === 'media' && selectedSize && (
                    <div>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(image) => onSelectImage(image)}
                                allowedTypes={['image']}
                                value={attributes.image && attributes.image.id}
                                render={({ open }) => (
                                    <>
                                        {attributes.image ? (
                                            <div className="video-thumbnail">
                                                <img src={attributes.image.sizes[selectedSize].url} alt={(attributes.image.alt ? attributes.image.alt : '')} />
                                                {attributes.playIconEnabled && attributes.playIconImage ? (
                                                    <div><img src={attributes.playIconImage} width={attributes.playIconImageSize} alt={__('Play Icon', 'video-lightbox-for-guten-blocks')} className="play-icon" /></div>
                                                ) : (
                                                    <svg viewBox="0 0 24 24" width={attributes.playIconImageSize} className="play-icon"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" ></path> </g></svg>
                                                )}
                                                <Button className="vl-button vl-icon-button" onClick={removeImage}>
                                                    <svg viewBox="0 0 24 24" fill="none"><g><path d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 3L19 5M21 7L19 5M19 5L21 3M19 5L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                    {/* <svg fill="#000000" width="32" viewBox="0 0 52 52"><g><path d="M20,37.5c0-0.8-0.7-1.5-1.5-1.5h-15C2.7,36,2,36.7,2,37.5v11C2,49.3,2.7,50,3.5,50h15c0.8,0,1.5-0.7,1.5-1.5 V37.5z"></path> <path d="M8.1,22H3.2c-1,0-1.5,0.9-0.9,1.4l8,8.3c0.4,0.3,1,0.3,1.4,0l8-8.3c0.6-0.6,0.1-1.4-0.9-1.4h-4.7 c0-5,4.9-10,9.9-10V6C15,6,8.1,13,8.1,22z"></path> <path d="M41.8,20.3c-0.4-0.3-1-0.3-1.4,0l-8,8.3c-0.6,0.6-0.1,1.4,0.9,1.4h4.8c0,6-4.1,10-10.1,10v6 c9,0,16.1-7,16.1-16H49c1,0,1.5-0.9,0.9-1.4L41.8,20.3z"></path> <path d="M50,3.5C50,2.7,49.3,2,48.5,2h-15C32.7,2,32,2.7,32,3.5v11c0,0.8,0.7,1.5,1.5,1.5h15c0.8,0,1.5-0.7,1.5-1.5 V3.5z"></path></g></svg> */}
                                                </Button>
                                            </div>
                                        ) : (
                                            <Button className="vl-button vl-icon-text-button" onClick={open}>
                                                <svg viewBox="0 0 24 24" width="24" ><g> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"></path> </g> </g></svg>
                                                {__('upload Image', 'video-lightbox-for-guten-blocks')}
                                            </Button>
                                        )}
                                    </>
                                )}
                            />
                        </MediaUploadCheck>
                    </div>
                )}

            </div>
        </div>
    );
}
