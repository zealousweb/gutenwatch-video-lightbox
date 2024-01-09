/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var validator_lib_isURL__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! validator/lib/isURL */ "./node_modules/validator/lib/isURL.js");
/* harmony import */ var validator_lib_isURL__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isURL__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
* WordPress dependencies
* @return void
*/












/**
 * Video Lightbox block registration
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('video-lightbox-block/video-lightbox', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Lightbox'),
  icon: 'video-alt3',
  category: 'zealblocks',
  attributes: {
    /** Image, Description, and VideoURL */
    image: {
      type: 'object',
      default: null
    },
    selection: {
      type: 'string',
      default: 'button'
    },
    buttonText: {
      type: 'string',
      default: 'Button Text'
    },
    buttonBackgroundColor: {
      type: 'string',
      default: '#0073aa'
    },
    buttonTextColor: {
      type: 'string',
      default: '#ffffff'
    },
    buttonBorderColor: {
      type: 'string',
      default: '#0073aa'
    },
    buttonBackgroundHoverColor: {
      type: 'string',
      default: '#0073aa'
    },
    buttonTextHoverColor: {
      type: 'string',
      default: '#ffffff'
    },
    buttonBorderHoverColor: {
      type: 'string',
      default: '#0073aa'
    },
    buttonBorderWidth: {
      type: 'number',
      default: 0 // Default opacity for video lightbox
    },
    imageSize: {
      type: 'string',
      default: 'full' // Default image size
    },
    /** Enable Disable option for PlayIcon */
    additionalSettingsEnabled: {
      type: 'boolean',
      default: false
    },
    /** Icon Image Upload Option Settings*/
    iconImage: {
      type: 'string',
      default: null
    },
    /** Icon Image Size Option Settings in pixels*/
    iconImageSize: {
      type: 'string',
      default: '30px' // Default icon size in pixels
    },
    /** Video Lightbox Background color */
    videoLightboxColor: {
      type: 'string',
      default: '#000000' // Default color for video lightbox
    },
    /** Video Lightbox Opacity Option */
    videoLightboxOpacity: {
      type: 'number',
      default: 0.8 // Default opacity for video lightbox
    },
    /** Video Lightbox width Option */
    videoLightboxWidth: {
      type: 'number',
      default: 640 // Default width for video lightbox
    },
    videoType: {
      type: 'string',
      default: null // Default video type
    },
    selectedSize: {
      type: 'string',
      default: 'thumbnail'
    },
    videoUrl: {
      type: 'string',
      default: null // Default video type
    },
    video: {
      type: 'string',
      default: null // Default video type
    }
  },
  /**
   * Main Editor Structure
   * @param {*} props
   *
   * @returns void
   */
  edit: ({
    attributes,
    setAttributes,
    noticeOperations
  }) => {
    const {
      useState
    } = wp.element;
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessagePlayIcon, setErrorMessagePlayIcon] = useState('');
    const [errorMessageUploadVideo, setErrorMessageUploadVideo] = useState('');
    const {
      selectedSize
    } = attributes;
    const {
      video
    } = attributes;
    const {
      image
    } = attributes;
    const [val, setVal] = useState('');
    const [err, setErr] = useState('');
    const {
      buttonBorderWidth,
      buttonBorderColor,
      buttonBorderHoverColor,
      buttonBackgroundColor,
      buttonBackgroundHoverColor,
      buttonTextColor,
      buttonTextHoverColor
    } = attributes;
    console.log(selectedSize);

    /** get thumbnail image sizes from wordpress */
    const imageSizes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select)('core/editor').getEditorSettings().imageSizes.map(size => size.slug);

    /** Constant values to contain default values */
    const onSelectImage = image => {
      console.log(image);
      if (image && (image.mime === 'image/jpeg' || image.mime === 'image/jpg' || image.mime === 'image/png')) {
        setAttributes({
          image: image
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
      setAttributes({
        image: ''
      });
    };
    const onSelectIcon = newIcon => {
      if (newIcon && (newIcon.mime === 'image/jpeg' || newIcon.mime === 'image/jpg' || newIcon.mime === 'image/png' || newIcon.mime === 'image/svg+xml')) {
        setAttributes({
          iconImage: newIcon.url
        });
        setErrorMessagePlayIcon('');
      } else {
        setErrorMessagePlayIcon('Invalid file type. Please select a JPG, PNG, or SVG file.');
      }
    };

    /** Remove Play Icon */
    const removeIcon = () => {
      setAttributes({
        iconImage: ''
      });
    };
    const handleSelectionChange = newSelection => {
      setAttributes({
        selection: newSelection
      });
    };
    const handleTextChange = newText => {
      setAttributes({
        buttonText: newText
      });
    };
    const handleBackgroundColorChange = color => {
      setAttributes({
        buttonBackgroundColor: color
      });
    };
    const handleTextColorChange = color => {
      setAttributes({
        buttonTextColor: color
      });
    };
    const handleBorderColorChange = color => {
      setAttributes({
        buttonBorderColor: color
      });
    };
    const handleBackgroundHoverColorChange = color => {
      setAttributes({
        buttonBackgroundHoverColor: color
      });
    };
    const handleTextHoverColorChange = color => {
      setAttributes({
        buttonTextHoverColor: color
      });
    };
    const handleBorderHoverColorChange = color => {
      setAttributes({
        buttonBorderHoverColor: color
      });
    };
    const handleButtonBorderWidth = value => {
      setAttributes({
        buttonBorderWidth: value
      });
    };
    const handleImageSizeChange = newSize => {
      setAttributes({
        imageSize: newSize
      });
    };
    const handleToggleChange = checked => {
      setAttributes({
        additionalSettingsEnabled: checked
      });
    };
    const handleIconSizeChange = newSize => {
      setAttributes({
        iconImageSize: newSize
      });
    };
    const handleColorChange = color => {
      setAttributes({
        videoLightboxColor: color
      });
    };
    const handleOpacityChange = value => {
      setAttributes({
        videoLightboxOpacity: value
      });
    };
    const handleWidthChange = value => {
      setAttributes({
        videoLightboxWidth: value
      });
    };
    const handleVideoTypeChange = newType => {
      setAttributes({
        videoType: newType
      });
    };
    const handleVideoUrlChange = newUrl => {
      setAttributes({
        videoUrl: newUrl
      });
    };
    const validate = newUrl => {
      console.log(newUrl);
      setVal(newUrl);
      if (validator_lib_isURL__WEBPACK_IMPORTED_MODULE_9___default()(newUrl)) {
        setErr('Valid URL');
        setAttributes({
          videoUrl: newUrl
        });
      } else {
        setErr('Invalid URL');
      }
    };

    /** Upload Video **/
    const onUploadVideo = newVideo => {
      if (newVideo && newVideo.mime === 'video/mp4') {
        setAttributes({
          video: newVideo.url
        });
        setErrorMessageUploadVideo('');
      } else {
        setErrorMessageUploadVideo('Invalid file type. Please upload mp4 file.');
      }
    };

    /** Remove Upload Video */
    const removeVideo = () => {
      setAttributes({
        video: ''
      });
    };
    const saveBlock = () => {
      if (!caption) {
        const errorMessage = 'Caption is required!';
        const notice = (0,_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.createErrorNotice)(errorMessage, {
          type: 'block',
          isDismissible: true
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

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-lightbox"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, customStyles), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-lb-notes"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option for Video Popup', 'videolightboxforgutenberg')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "* Please find Video upload, and customization options in sidebar")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl
    //label={__('Select Option for Video Popup')}
    , {
      selected: attributes.selection,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'videolightboxforgutenberg'),
        value: 'button'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media Upload', 'videolightboxforgutenberg'),
        value: 'media'
      }],
      onChange: handleSelectionChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, attributes.selection === 'button' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Settings', 'videolightboxforgutenberg')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text', 'videolightboxforgutenberg'),
      value: attributes.buttonText,
      onChange: handleTextChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Border Width', 'videolightboxforgutenberg'),
      value: attributes.buttonBorderWidth,
      onChange: handleButtonBorderWidth,
      min: 0,
      max: 2,
      step: 1
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Design', 'videolightboxforgutenberg'),
      colorSettings: [{
        value: attributes.buttonBackgroundColor,
        onChange: handleBackgroundColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'videolightboxforgutenberg')
      }, {
        value: attributes.buttonTextColor,
        onChange: handleTextColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'videolightboxforgutenberg')
      }, {
        value: attributes.buttonBorderColor,
        onChange: handleBorderColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'videolightboxforgutenberg')
      }, {
        value: attributes.buttonBackgroundHoverColor,
        onChange: handleBackgroundHoverColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Hover Color', 'videolightboxforgutenberg')
      }, {
        value: attributes.buttonTextHoverColor,
        onChange: handleTextHoverColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Hover Color', 'videolightboxforgutenberg')
      }, {
        value: attributes.buttonBorderHoverColor,
        onChange: handleBorderHoverColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Hover Color', 'videolightboxforgutenberg')
      }]
    })), attributes.selection === 'media' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media Upload Settings', 'videolightboxforgutenberg')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play Icon', 'videolightboxforgutenberg'),
      checked: attributes.additionalSettingsEnabled,
      onChange: handleToggleChange
    }), attributes.additionalSettingsEnabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.iconImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.iconImage,
      alt: "Uploaded Icon"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: removeIcon
    }, "Remove")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: onSelectIcon,
      type: "image",
      value: attributes.iconImage,
      accept: "image/jpeg,image/jpg,image/png,image/svg+xml",
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "upload",
        onClick: open,
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Icon', 'videolightboxforgutenberg')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Icon', 'videolightboxforgutenberg'))))
    }), errorMessagePlayIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        color: 'red'
      }
    }, errorMessagePlayIcon)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Size (in pixels)', 'videolightboxforgutenberg'),
      value: attributes.iconImageSize,
      onChange: handleIconSizeChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Image Size', 'videolightboxforgutenberg'),
      value: selectedSize,
      options: imageSizes.map(size => ({
        label: size,
        value: size
      }))
      //onChange={(onSelectImageSize) => setSize(onSelectImageSize)}
      //onChange={handleSizeChange}
      ,
      onChange: newSelectedSize => setAttributes({
        selectedSize: newSelectedSize
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Type Settings', 'videolightboxforgutenberg')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Video Type', 'videolightboxforgutenberg'),
      selected: attributes.videoType,
      options: [{
        label: 'Upload Video',
        value: 'uploadvideo'
      }, {
        label: 'Video Url',
        value: 'videourl'
      }
      // Add more options as needed
      ],
      onChange: handleVideoTypeChange
    }), attributes.videoType === 'videourl' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video URL', 'videolightboxforgutenberg'),
      value: attributes.videoUrl,
      onChange: handleVideoUrlChange,
      isRequired: true
    })), attributes.videoType === 'uploadvideo' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, attributes.video ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      src: attributes.video
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: removeVideo
    }, "Remove")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: onUploadVideo,
      type: "video",
      value: attributes.video,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Video', 'videolightboxforgutenberg'))
    })), errorMessageUploadVideo && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        color: 'red'
      }
    }, errorMessageUploadVideo))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Lightbox Settings', 'videolightboxforgutenberg')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox Color', 'videolightboxforgutenberg'),
      colorSettings: [{
        value: attributes.videoLightboxColor,
        onChange: handleColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Lightbox Color', 'videolightboxforgutenberg')
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox Opacity', 'videolightboxforgutenberg'),
      value: attributes.videoLightboxOpacity,
      onChange: handleOpacityChange,
      min: 0,
      max: 1,
      step: 0.1
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox Width', 'videolightboxforgutenberg'),
      value: attributes.videoLightboxWidth,
      onChange: handleWidthChange,
      min: 320,
      max: 1920,
      step: 10
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "media-block"
    }, attributes.selection === 'button' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      className: "button-open-vl",
      onClick: () => setAttributes({
        selection: 'button'
      }),
      style: {/*
              backgroundColor: attributes.buttonBackgroundColor,
              color: attributes.buttonTextColor,*/
      }
    }, attributes.buttonText), attributes.selection === 'media' && selectedSize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: image => onSelectImage(image),
      allowedTypes: ['image'],
      value: attributes.image && attributes.image.id,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, attributes.image ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "video-thumbnail"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.image.sizes[selectedSize].url,
        alt: attributes.image.alt ? attributes.image.alt : ''
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "button-remove",
        onClick: removeImage
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        viewBox: "0 0 24 24"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11",
        stroke: "#000000",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25",
        stroke: "#000000",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M17 3L19 5M21 7L19 5M19 5L21 3M19 5L17 7",
        stroke: "#000000",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), " ")))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "upload-image",
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        viewBox: "0 0 24 24",
        width: "24",
        fill: "#000000"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
        x: "0",
        fill: "none",
        width: "24",
        height: "24"
      }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"
      }), " "), " ")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('upload Image', 'videolightboxforgutenberg')))
    })), errorMessage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        color: 'red'
      }
    }, errorMessage))));
  },
  /**
   * Main Save Structure
   * @param {*} param0
   * @returns
   */
  save: function ({
    attributes
  }) {
    /** Get constant values contains values to save */
    const {
      selection,
      image,
      buttonText,
      buttonBorderWidth,
      buttonBackgroundColor,
      buttonBackgroundHoverColor,
      buttonTextHoverColor,
      buttonBorderHoverColor,
      videoLightboxWidth,
      videoLightboxColor,
      buttonTextColor,
      buttonBorderColor,
      videoType,
      videoUrl,
      video,
      iconImage,
      iconImageSize,
      imageSize,
      selectedSize,
      videoLightboxOpacity
    } = attributes;
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
    return /** Structure to show for update data */(
      (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, customStyles), attributes.selection === 'button' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        class: "button-open-vl",
        type: "button",
        "data-fancybox": "video-lightbox",
        style: {/* backgroundColor: buttonBackgroundColor, textColor: buttonTextColor, borderWidth: buttonBorderWidth */}
      }, buttonContent), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "hidden"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
        src: video
      }))) : attributes.selection === 'media' && selectedSize && image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        "data-fancybox": "video-lightbox",
        href: video
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.image.sizes[selectedSize].url,
        alt: attributes.image.alt ? attributes.image.alt : ''
      })))
    );
  }
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/validator/lib/isFQDN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isFQDN;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_numeric_tld: false,
  allow_wildcard: false,
  ignore_max_length: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  /* Remove the optional wildcard before checking validity */


  if (options.allow_wildcard === true && str.indexOf('*.') === 0) {
    str = str.substring(2);
  }

  var parts = str.split('.');
  var tld = parts[parts.length - 1];

  if (options.require_tld) {
    // disallow fqdns without tld
    if (parts.length < 2) {
      return false;
    }

    if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces


    if (/\s/.test(tld)) {
      return false;
    }
  } // reject numeric TLDs


  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
    return false;
  }

  return parts.every(function (part) {
    if (part.length > 63 && !options.ignore_max_length) {
      return false;
    }

    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    } // disallow parts starting or ending with hyphen


    if (/^-|-$/.test(part)) {
      return false;
    }

    if (!options.allow_underscores && /_/.test(part)) {
      return false;
    }

    return true;
  });
}

module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isIP.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIP.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isIP;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */
var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z-.:]{1,})?$');

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  }

  if (version === '4') {
    return IPv4AddressRegExp.test(str);
  }

  if (version === '6') {
    return IPv6AddressRegExp.test(str);
  }

  return false;
}

module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/isURL.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isURL.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isURL;

var _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js"));

var _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js"));

var _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
require_port - if set as true isURL will check if port is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

*/
var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_port: false,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
  allow_fragments: true,
  allow_query_components: true,
  validate_length: true
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);

  if (options.validate_length && url.length >= 2083) {
    return false;
  }

  if (!options.allow_fragments && url.includes('#')) {
    return false;
  }

  if (!options.allow_query_components && (url.includes('?') || url.includes('&'))) {
    return false;
  }

  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.slice(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.slice(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    if (split[0] === '') {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }

    var _auth$split = auth.split(':'),
        _auth$split2 = _slicedToArray(_auth$split, 2),
        user = _auth$split2[0],
        password = _auth$split2[1];

    if (user === '' && password === '') {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null && port_str.length > 0) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  } else if (options.require_port) {
    return false;
  }

  if (options.host_whitelist) {
    return checkHost(host, options.host_whitelist);
  }

  if (host === '' && !options.require_host) {
    return true;
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/assertString.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = assertString;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType = _typeof(input);

    if (input === null) invalidType = 'null';else if (invalidType === 'object') invalidType = input.constructor.name;
    throw new TypeError("Expected a string but received a ".concat(invalidType));
  }
}

module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ }),

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmy_first_block"] = globalThis["webpackChunkmy_first_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map