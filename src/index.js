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
    edit: ({ attributes, setAttributes }) => {

        const { useState } = wp.element;
        const [errorMessage, setErrorMessage] = useState('');
        const [errorMessagePlayIcon, setErrorMessagePlayIcon] = useState('');
        const [errorMessageUploadVideo, setErrorMessageUploadVideo] = useState('');
        const { selectedSize } = attributes;
        const { video } = attributes;
        const { image } = attributes;

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

        return (

            <div class="">

                <RadioControl
                    label={__('Select Option for Video Popup')}
                    selected={attributes.selection}
                    options={[
                        { label: __('Button'), value: 'button' },
                        { label: __('Media Upload'), value: 'media' },
                    ]}
                    onChange={handleSelectionChange}
                />

                <InspectorControls>
                    <Panel>

                        {attributes.selection === 'button' && (
                            <PanelBody title={__('Button Settings')}>
                                <TextControl
                                    label={__('Button Text')}
                                    value={attributes.buttonText}
                                    onChange={handleTextChange}
                                />
                                <PanelColorSettings
                                    title={__('Button Background Color')}
                                    colorSettings={[
                                        {
                                            value: attributes.buttonBackgroundColor,
                                            onChange: handleBackgroundColorChange,
                                            label: __('Select Button Background Color'),
                                        },
                                    ]}
                                />
                                <PanelColorSettings
                                    title={__('Button Text Color')}
                                    colorSettings={[
                                        {
                                            value: attributes.buttonTextColor,
                                            onChange: handleTextColorChange,
                                            label: __('Select Button Text Color'),
                                        },
                                    ]}
                                />
                            </PanelBody>
                        )}

                        {attributes.selection === 'media' && (
                            <PanelBody title={__('Media Upload Settings')}>
                                <ToggleControl
                                    label={__('Play Icon')}
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
                                                            aria-label={__('Upload Icon')} >
                                                            <span>{__('Upload Icon')}</span>
                                                        </Button>                                                        
                                                    </div>
                                                )}
                                            />
                                        )}

                                        {errorMessagePlayIcon && <p style={{ color: 'red' }}>{errorMessagePlayIcon}</p>}

                                    </div>
                                )}

                                <TextControl
                                    label={__('Icon Size (in pixels)')}
                                    value={attributes.iconImageSize}
                                    onChange={handleIconSizeChange}
                                />

                                <SelectControl
                                    label="Select Image Size"
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

                        <PanelBody title={__('Video Type Settings')}>
                            <RadioControl
                                label={__('Select Video Type')}
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
                                        label={__('Video URL')}
                                        value={attributes.videoUrl}
                                        onChange={handleVideoUrlChange}
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
                                                        {__('Upload Video')}
                                                    </Button>
                                                )}
                                            />
                                        </>
                                    )}

                                    {errorMessageUploadVideo && <p style={{ color: 'red' }}>{errorMessageUploadVideo}</p>}

                                </>
                            )}

                        </PanelBody>

                        <PanelBody title={__('Video Lightbox Settings')}>
                            <PanelColorSettings
                                title={__('Lightbox Color')}
                                colorSettings={[
                                    {
                                        value: attributes.videoLightboxColor,
                                        onChange: handleColorChange,
                                        label: __('Select Lightbox Color'),
                                    },
                                ]}
                            />
                            <RangeControl
                                label={__('Lightbox Opacity')}
                                value={attributes.videoLightboxOpacity}
                                onChange={handleOpacityChange}
                                min={0}
                                max={1}
                                step={0.1}
                            />
                            <RangeControl
                                label={__('Lightbox Width')}
                                value={attributes.videoLightboxWidth}
                                onChange={handleWidthChange}
                                min={320}
                                max={1920}
                                step={10}
                            />
                        </PanelBody>

                    </Panel>
                </InspectorControls>

                <div className="custom-block">
                    {attributes.selection === 'button' && (
                        <Button
                            onClick={() => setAttributes({ selection: 'button' })}
                            style={{
                                backgroundColor: attributes.buttonBackgroundColor,
                                color: attributes.buttonTextColor,
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
                                                <>                                                                                  
                                                    <img src={attributes.image.sizes[selectedSize].url} alt={(attributes.image.alt ? attributes.image.alt : '')} />
                                                    <Button onClick={removeImage}>Remove/Replace </Button>
                                                </>
                                            ) : (
                                                <Button onClick={open}>
                                                    {__('Upload Image')}
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
        const { selection, image, buttonText, buttonBackgroundColor, videoLightboxWidth, videoLightboxColor, buttonTextColor, videoType, videoUrl, video, iconImage, iconImageSize, imageSize, selectedSize, videoLightboxOpacity } = attributes;
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
      /* Add more styles as needed */
    `;

        return (
            /** Structure to show for update data */
            <>
               {/**
                *  <ul>
                    {Object.keys(attributes).map((key) => (
                        <li key={key}>
                            <strong>{key}:</strong> {attributes[key]}
                        </li>
                    ))}
                </ul>
                */}
                {attributes.selection === 'button' && (
                    <>
                        <button data-fancybox="video-lightbox"
                            style={{ backgroundColor: buttonBackgroundColor }}
                        >
                            {buttonContent}
                        </button>
                        <div class="hidden" >
                            <video src={video}></video>
                        </div>
                    </>
                )}

                {attributes.selection === 'media' && selectedSize && image ? (                      
                    <a data-fancybox="video-lightbox" href={video} >
                        
                        <style>
                            {customStyles}
                        </style>
                        {videoLightboxOpacity}
                        {videoLightboxWidth}
                        {videoLightboxColor}
                        <img src={attributes.image.sizes[selectedSize].url} alt={(attributes.image.alt ? attributes.image.alt : '')} />
                    </a>
                ) : (
                    <span>Please upload image first</span>
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
