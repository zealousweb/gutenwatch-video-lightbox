/**
* WordPress dependencies
* @return void
*/
import { __ } from '@wordpress/i18n';
import { MediaUploadCheck, MediaUpload, InspectorControls, PanelColorSettings, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { Button, TextControl, RadioControl, Panel, PanelBody, SelectControl, ToggleControl, IconButton, RangeControl } from '@wordpress/components';
import { select } from '@wordpress/data';
import React, { useRef } from 'react';
import isURL from 'validator/lib/isURL';
import { createErrorNotice } from '@wordpress/notices';
import { withDispatch } from '@wordpress/data';


import './style.scss';
import './editor.scss';

/**
 * Video Lightbox block registration
 */
registerBlockType('video-lightbox-block/video-lightbox', {
    title: __('Video Lightbox'),
    icon: 'video-alt3',
    category: 'zealblocks',
    attributes: {
        /** Image, Description, and VideoURL */
        image: {
            type: 'object',
            default: null,
        },
        selection: {
            type: 'string',
            default: 'button',
        },
        buttonText: {
            type: 'string',
            default: 'Button Text',
        },
        buttonBackgroundColor: {
            type: 'string',
            default: '#0073aa',
        },
        buttonTextColor: {
            type: 'string',
            default: '#ffffff',
        },
        buttonBorderColor: {
            type: 'string',
            default: '#0073aa',
        },
        buttonBackgroundHoverColor: {
            type: 'string',
            default: '#0073aa',
        },
        buttonTextHoverColor: {
            type: 'string',
            default: '#ffffff',
        },
        buttonBorderHoverColor: {
            type: 'string',
            default: '#0073aa',
        },
        buttonBorderWidth: {
            type: 'number',
            default: 0, // Default opacity for video lightbox
        },
        
        imageSize: {
            type: 'string',
            default: 'full', // Default image size
        },
        /** Enable Disable option for PlayIcon */
        additionalSettingsEnabled: {
            type: 'boolean',
            default: false,
        },
        /** Icon Image Upload Option Settings*/
        iconImage: {
            type: 'string',
            default: null,
        },
        /** Icon Image Size Option Settings in pixels*/
        iconImageSize: {
            type: 'string',
            default: '30px', // Default icon size in pixels
        },
        /** Video Lightbox Background color */
        videoLightboxColor: {
            type: 'string',
            default: '#000000', // Default color for video lightbox
        },
        /** Video Lightbox Opacity Option */
        videoLightboxOpacity: {
            type: 'number',
            default: 0.8, // Default opacity for video lightbox
        },
        /** Video Lightbox width Option */
        videoLightboxWidth: {
            type: 'number',
            default: 640, // Default width for video lightbox
        },
        videoType: {
            type: 'string',
            default: null, // Default video type
        },
        selectedSize: {
            type: 'string',
            default: 'thumbnail',
        },
        videoUrl: {
            type: 'string',
            default: null, // Default video type
        },
        video: {
            type: 'string',
            default: null, // Default video type
        },
    },


    /**
     * Main Editor Structure
     * @param {*} props
     *
     * @returns void
     */
    edit: ({ attributes, setAttributes, noticeOperations }) => {

        const { useState } = wp.element;
        const [errorMessage, setErrorMessage] = useState('');
        const [errorMessagePlayIcon, setErrorMessagePlayIcon] = useState('');
        const [errorMessageUploadVideo, setErrorMessageUploadVideo] = useState('');
        const { selectedSize } = attributes;
        const { video } = attributes;
        const { image } = attributes;
        const [val, setVal] = useState('');
        const [err, setErr] = useState('');
        const { buttonBorderWidth, buttonBorderColor, buttonBorderHoverColor, buttonBackgroundColor, buttonBackgroundHoverColor, buttonTextColor, buttonTextHoverColor,  } = attributes;

        console.log(selectedSize);

        /** get thumbnail image sizes from wordpress */
        const imageSizes = select('core/editor').getEditorSettings().imageSizes.map((size) => size.slug);

        /** Constant values to contain default values */
        const onSelectImage = (image) => {
            console.log(image);
            if (image && (image.mime === 'image/jpeg' || image.mime === 'image/jpg' || image.mime === 'image/png')) {
                setAttributes({
                    image: image,
                    //image_url: image.sizes[selectedSize].url
                });
                setErrorMessage('');
            } else {
                setErrorMessage('Invalid file type. Please select a JPG, JPEG or PNG file.');
            }
        };

        //         const updateRepeaterItem = (image, image_caption, selectedVideoType, video_media, popup_url, index) => {
        // 
        //             const newItems = [...attributes.items];
        //             newItems[index].image = image;
        //             newItems[index].image_caption = image_caption;
        //             newItems[index].selectedVideoType = selectedVideoType;
        //             newItems[index].video_media = video_media;
        //             newItems[index].popup_url = popup_url;
        //             setAttributes({ items: newItems });
        //             console.log(image);
        //         };

        /** Remove Main Image */
        const removeImage = () => {
            setAttributes({ image: '' });
        };

        const onSelectIcon = (newIcon) => {
            if (newIcon && (newIcon.mime === 'image/jpeg' || newIcon.mime === 'image/jpg' || newIcon.mime === 'image/png' || newIcon.mime === 'image/svg+xml')) {
                setAttributes({ iconImage: newIcon.url });
                setErrorMessagePlayIcon('');
            } else {
                setErrorMessagePlayIcon('Invalid file type. Please select a JPG, PNG, or SVG file.');
            }
        };

        /** Remove Play Icon */
        const removeIcon = () => {
            setAttributes({ iconImage: '' });
        };

        const handleSelectionChange = (newSelection) => {
            setAttributes({ selection: newSelection });
        };

        const handleTextChange = (newText) => {
            setAttributes({ buttonText: newText });
        };

        const handleBackgroundColorChange = (color) => {
            setAttributes({ buttonBackgroundColor: color });
        };

        const handleTextColorChange = (color) => {
            setAttributes({ buttonTextColor: color });
        };

        const handleBorderColorChange = (color) => {
            setAttributes({ buttonBorderColor: color });
        };

        const handleBackgroundHoverColorChange = (color) => {
            setAttributes({ buttonBackgroundHoverColor: color });
        };

        const handleTextHoverColorChange = (color) => {
            setAttributes({ buttonTextHoverColor: color });
        };

        const handleBorderHoverColorChange = (color) => {
            setAttributes({ buttonBorderHoverColor: color });
        };

        

        const handleButtonBorderWidth = (value) => {
            setAttributes({ buttonBorderWidth: value });
        };

        const handleImageSizeChange = (newSize) => {
            setAttributes({ imageSize: newSize });
        };

        const handleToggleChange = (checked) => {
            setAttributes({ additionalSettingsEnabled: checked });
        };

        const handleIconSizeChange = (newSize) => {
            setAttributes({ iconImageSize: newSize });
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
        };

        const validate = (newUrl) => {
            console.log(newUrl);
            setVal(newUrl);
            if (isURL(newUrl)) {
                setErr('Valid URL');
                setAttributes({ videoUrl: newUrl });
            } else {
                setErr('Invalid URL');
            }
        };

        /** Upload Video **/
        const onUploadVideo = (newVideo) => {
            if (newVideo && (newVideo.mime === 'video/mp4')) {
                setAttributes({ video: newVideo.url });
                setErrorMessageUploadVideo('');
            } else {
                setErrorMessageUploadVideo('Invalid file type. Please upload mp4 file.');
            }
        };

        /** Remove Upload Video */
        const removeVideo = () => {
            setAttributes({ video: '' });
        };

        const saveBlock = () => {
            if (!caption) {
                const errorMessage = 'Caption is required!';
                const notice = createErrorNotice(errorMessage, {
                    type: 'block',
                    isDismissible: true,
                });
                noticeOperations.createNotice(notice);
                return;
            }

            // Proceed with saving the block
            // ...
        };

        const customStyles = `
      .button-open-vl {
        background-color: ${buttonBackgroundColor};
        color: ${buttonTextColor};
        border: ${buttonBorderWidth}px solid ${buttonBorderColor};
      }
      .button-open-vl:hover {
        background-color: ${buttonBackgroundHoverColor};
        color: ${buttonTextHoverColor};
        border: ${buttonBorderWidth}px solid ${buttonBorderHoverColor};
      }
      /* Add more styles as needed */
    `;
        

        // Enhance the component with withDispatch to access dispatch functions
        // const MyMediaBlockWithDispatch = withDispatch((dispatch) => {
        //     return {
        //         noticeOperations: dispatch('core/notices'),
        //     };
        // })(MyMediaBlock);


        return (

            <div className="video-lightbox">
                {
                    <style>
                        {customStyles}
                    </style>
                }
                <div className="video-lb-notes">
                    <h2>{__('Select Option for Video Popup', 'videolightboxforgutenberg')}</h2>
                    <p>* Please find Video upload, and customization options in sidebar</p>
                </div>
                <RadioControl
                    //label={__('Select Option for Video Popup')}
                    selected={attributes.selection}
                    options={[
                        { label: __('Button', 'videolightboxforgutenberg'), value: 'button' },
                        { label: __('Media Upload', 'videolightboxforgutenberg'), value: 'media' },
                    ]}
                    onChange={handleSelectionChange}
                />

                <InspectorControls>
                    <Panel>

                        {attributes.selection === 'button' && (
                            <PanelBody title={__('Button Settings', 'videolightboxforgutenberg')}>
                                <TextControl
                                    label={__('Button Text', 'videolightboxforgutenberg')}
                                    value={attributes.buttonText}
                                    onChange={handleTextChange}
                                />
                                <RangeControl
                                    label={__('Button Border Width', 'videolightboxforgutenberg')}
                                    value={attributes.buttonBorderWidth}
                                    onChange={handleButtonBorderWidth}
                                    min={0}
                                    max={2}
                                    step={1}
                                />
                                <PanelColorSettings
                                    title={__('Button Design', 'videolightboxforgutenberg')}
                                    colorSettings={[
                                        {
                                            value: attributes.buttonBackgroundColor,
                                            onChange: handleBackgroundColorChange,
                                            label: __('Background Color', 'videolightboxforgutenberg'),
                                        },
                                        {
                                            value: attributes.buttonTextColor,
                                            onChange: handleTextColorChange,
                                            label: __('Text Color', 'videolightboxforgutenberg'),
                                        },
                                        {
                                            value: attributes.buttonBorderColor,
                                            onChange: handleBorderColorChange,
                                            label: __('Border Color', 'videolightboxforgutenberg'),
                                        },
                                        {
                                            value: attributes.buttonBackgroundHoverColor,
                                            onChange: handleBackgroundHoverColorChange,
                                            label: __('Background Hover Color', 'videolightboxforgutenberg'),
                                        },
                                        {
                                            value: attributes.buttonTextHoverColor,
                                            onChange: handleTextHoverColorChange,
                                            label: __('Text Hover Color', 'videolightboxforgutenberg'),
                                        },
                                        {
                                            value: attributes.buttonBorderHoverColor,
                                            onChange: handleBorderHoverColorChange,
                                            label: __('Border Hover Color', 'videolightboxforgutenberg'),
                                        },
                                    ]}
                                />
                                {/*<PanelColorSettings
                                    title={__('Button Text Color', 'videolightboxforgutenberg')}
                                    colorSettings={[
                                        {
                                            value: attributes.buttonTextColor,
                                            onChange: handleTextColorChange,
                                            label: __('Select Button Text Color', 'videolightboxforgutenberg'),
                                        },
                                    ]}
                                />*/}
                            </PanelBody>
                        )}

                        {attributes.selection === 'media' && (
                            <PanelBody title={__('Media Upload Settings', 'videolightboxforgutenberg')}>
                                <ToggleControl
                                    label={__('Play Icon', 'videolightboxforgutenberg')}
                                    checked={attributes.additionalSettingsEnabled}
                                    onChange={handleToggleChange}
                                />

                                {attributes.additionalSettingsEnabled && (
                                    <div>
                                        {attributes.iconImage ? (
                                            <div>
                                                <img src={attributes.iconImage} alt="Uploaded Icon" />
                                                <Button onClick={removeIcon}>Remove</Button>
                                            </div>
                                        ) : (
                                            <MediaUpload
                                                onSelect={onSelectIcon}
                                                type="image"
                                                value={attributes.iconImage}
                                                accept="image/jpeg,image/jpg,image/png,image/svg+xml"
                                                render={({ open }) => (
                                                    <div>
                                                        <Button
                                                            icon="upload"
                                                            onClick={open}
                                                            aria-label={__('Upload Icon', 'videolightboxforgutenberg')} >
                                                            <span>{__('Upload Icon', 'videolightboxforgutenberg')}</span>
                                                        </Button>
                                                    </div>
                                                )}
                                            />
                                        )}

                                        {errorMessagePlayIcon && <p style={{ color: 'red' }}>{errorMessagePlayIcon}</p>}

                                    </div>
                                )}

                                <TextControl
                                    label={__('Icon Size (in pixels)', 'videolightboxforgutenberg')}
                                    value={attributes.iconImageSize}
                                    onChange={handleIconSizeChange}
                                />

                                <SelectControl
                                    label={__('Select Image Size', 'videolightboxforgutenberg')}
                                    value={selectedSize}
                                    options={imageSizes.map((size) => ({ label: size, value: size }))}
                                    //onChange={(onSelectImageSize) => setSize(onSelectImageSize)}
                                    //onChange={handleSizeChange}
                                    onChange={(newSelectedSize) => setAttributes({ selectedSize: newSelectedSize })}
                                />

                                {/**
                             * <SelectControl
                                label={__('Select Image Size')}
                                value={attributes.imageSize}
                                options={[
                                    { label: __('Thumbnail'), value: 'thumbnail' },
                                    { label: __('Medium'), value: 'medium' },
                                    { label: __('Large'), value: 'large' },
                                    { label: __('Full'), value: 'full' },
                                    // Add more size options as needed
                                ]}
                                onChange={handleImageSizeChange}
                            />
                             */}
                            </PanelBody>
                        )}

                        <PanelBody title={__('Video Type Settings', 'videolightboxforgutenberg')}>
                            <RadioControl
                                label={__('Select Video Type', 'videolightboxforgutenberg')}
                                selected={attributes.videoType}
                                options={[
                                    { label: 'Upload Video', value: 'uploadvideo' },
                                    { label: 'Video Url', value: 'videourl' },
                                    // Add more options as needed
                                ]}
                                onChange={handleVideoTypeChange}
                            />

                            {attributes.videoType === 'videourl' && (
                                <>
                                    <TextControl
                                        label={__('Video URL', 'videolightboxforgutenberg')}
                                        value={attributes.videoUrl}
                                        onChange={handleVideoUrlChange}
                                        isRequired={true}
                                    />
                                    
                                </>
                            )}

                            {attributes.videoType === 'uploadvideo' && (
                                <>
                                    {attributes.video ? (

                                        <>
                                            <video src={attributes.video}></video>
                                            <Button onClick={removeVideo}>Remove</Button>
                                        </>
                                    ) : (
                                        <>
                                            <MediaUpload
                                                onSelect={onUploadVideo}
                                                type="video"
                                                value={attributes.video}
                                                render={({ open }) => (
                                                    <Button onClick={open}>
                                                        {__('Upload Video', 'videolightboxforgutenberg')}
                                                    </Button>
                                                )}
                                            />
                                        </>
                                    )}

                                    {errorMessageUploadVideo && <p style={{ color: 'red' }}>{errorMessageUploadVideo}</p>}

                                </>
                            )}

                        </PanelBody>

                        <PanelBody title={__('Video Lightbox Settings', 'videolightboxforgutenberg')}>
                            <PanelColorSettings
                                title={__('Lightbox Color', 'videolightboxforgutenberg')}
                                colorSettings={[
                                    {
                                        value: attributes.videoLightboxColor,
                                        onChange: handleColorChange,
                                        label: __('Select Lightbox Color', 'videolightboxforgutenberg'),
                                    },
                                ]}
                            />
                            <RangeControl
                                label={__('Lightbox Opacity', 'videolightboxforgutenberg')}
                                value={attributes.videoLightboxOpacity}
                                onChange={handleOpacityChange}
                                min={0}
                                max={1}
                                step={0.1}
                            />
                            <RangeControl
                                label={__('Lightbox Width', 'videolightboxforgutenberg')}
                                value={attributes.videoLightboxWidth}
                                onChange={handleWidthChange}
                                min={320}
                                max={1920}
                                step={10}
                            />
                        </PanelBody>

                    </Panel>
                </InspectorControls>

                <div className="media-block">
                    {attributes.selection === 'button' && (
                        <Button className="button-open-vl"
                            onClick={() => setAttributes({ selection: 'button' })}
                            style={{ /*
                                backgroundColor: attributes.buttonBackgroundColor,
                                color: attributes.buttonTextColor,*/
                            }}
                        >
                            {attributes.buttonText}
                        </Button>
                    )}

                    {attributes.selection === 'media' && selectedSize && (
                        <div>
                            {/*attributes.image ? (
                                <div>
                                    {
                                        selectedSize
                                            ? (<img src={attributes.image.sizes[selectedSize].url} alt={(attributes.image.alt ? attributes.image.alt : '')} />)
                                            : (<img src={attributes.image.sizes.medium.url} alt={(attributes.image.alt ? attributes.image.alt : '')} />)
                                    }

                                    <Button onClick={removeImage}>Remove</Button>
                                </div>
                            ) : (
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    type="image"
                                    value={attributes.image && attributes.image.id}
                                    accept="image/jpeg,image/jpg,image/png"
                                    render={({ open }) => (
                                        <Button onClick={open}>
                                            {__('Upload Image')}
                                        </Button>
                                    )}
                                />
                                    )*/}

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
                                                    <Button className="button-remove" onClick={removeImage}>
                                                        <svg viewBox="0 0 24 24"><g><path d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 3L19 5M21 7L19 5M19 5L21 3M19 5L17 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                        {/* <svg fill="#000000" width="32" viewBox="0 0 52 52"><g><path d="M20,37.5c0-0.8-0.7-1.5-1.5-1.5h-15C2.7,36,2,36.7,2,37.5v11C2,49.3,2.7,50,3.5,50h15c0.8,0,1.5-0.7,1.5-1.5 V37.5z"></path> <path d="M8.1,22H3.2c-1,0-1.5,0.9-0.9,1.4l8,8.3c0.4,0.3,1,0.3,1.4,0l8-8.3c0.6-0.6,0.1-1.4-0.9-1.4h-4.7 c0-5,4.9-10,9.9-10V6C15,6,8.1,13,8.1,22z"></path> <path d="M41.8,20.3c-0.4-0.3-1-0.3-1.4,0l-8,8.3c-0.6,0.6-0.1,1.4,0.9,1.4h4.8c0,6-4.1,10-10.1,10v6 c9,0,16.1-7,16.1-16H49c1,0,1.5-0.9,0.9-1.4L41.8,20.3z"></path> <path d="M50,3.5C50,2.7,49.3,2,48.5,2h-15C32.7,2,32,2.7,32,3.5v11c0,0.8,0.7,1.5,1.5,1.5h15c0.8,0,1.5-0.7,1.5-1.5 V3.5z"></path></g></svg> */}
                                                    </Button>
                                                </div>
                                            ) : (
                                                <Button className="upload-image" onClick={open}>
                                                    <svg viewBox="0 0 24 24" width="24" fill="#000000"><g> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"></path> </g> </g></svg>
                                                    {__('upload Image', 'videolightboxforgutenberg')}
                                                </Button>
                                            )}
                                        </>
                                    )}
                                />
                            </MediaUploadCheck>

                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                        </div>
                    )}

                </div>
            </div>
        );
    },

    /**
     * Main Save Structure
     * @param {*} param0
     * @returns
     */
    save: function ({ attributes }) {
        /** Get constant values contains values to save */
        const { selection, image, buttonText, buttonBorderWidth, buttonBackgroundColor, buttonBackgroundHoverColor, buttonTextHoverColor, buttonBorderHoverColor, videoLightboxWidth, videoLightboxColor, buttonTextColor, buttonBorderColor, videoType, videoUrl, video, iconImage, iconImageSize, imageSize, selectedSize, videoLightboxOpacity } = attributes;
        const buttonContent = buttonText.trim() !== '' ? buttonText : 'Open Video';
        //const videoContent = videoUrl != '' ? videoUrl : video;

        const customStyles = `
      .video-lightbox-fancy .fancybox__backdrop {
        background: ${videoLightboxColor};
        opacity: ${videoLightboxOpacity};
      }
      .video-lightbox-fancy .fancybox__content {
        max-width: ${videoLightboxWidth}px;
      }
      .button-open-vl {
        background-color: ${buttonBackgroundColor};
        color: ${buttonTextColor};
        border: ${buttonBorderWidth}px solid ${buttonBorderColor};
      }
      .button-open-vl:hover {
        background-color: ${buttonBackgroundHoverColor};
        color: ${buttonTextHoverColor};
        border: ${buttonBorderWidth}px solid ${buttonBorderHoverColor};
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
                {attributes.selection === 'button' ? (
                    <>
                        <button class="button-open-vl" type="button" data-fancybox="video-lightbox"
                            style={{/* backgroundColor: buttonBackgroundColor, textColor: buttonTextColor, borderWidth: buttonBorderWidth */}}
                        >
                            {buttonContent}
                        </button>
                        <div class="hidden" >
                            <video src={video}></video>
                        </div>
                    </>
                ) : (
                        attributes.selection === 'media' && selectedSize && image && (
                            <a data-fancybox="video-lightbox" href={video} >                                                               
                                <img src={attributes.image.sizes[selectedSize].url} alt={(attributes.image.alt ? attributes.image.alt : '')} />
                            </a>
                        )
                )}

                
                {/*attributes.image && selectedSize && (
                    <div>
                        {`${selectedSize}EEE`}
                        {
                            selectedSize
                                ? (<img src={attributes.image.sizes[selectedSize].url} alt={(attributes.image.alt ? attributes.image.alt : '')} />)
                                : (<img src={attributes.image.sizes.medium.url} alt={(attributes.image.alt ? attributes.image.alt : '')} />)
                        }
                    </div>
                    )*/}

            </>
        );
    },
});
