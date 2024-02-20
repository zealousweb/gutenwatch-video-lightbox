/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const {
    selectedSize,
    buttonBorderWidth,
    buttonBorderColor,
    buttonBorderHoverColor,
    buttonBackgroundColor,
    buttonBackgroundHoverColor,
    buttonTextColor,
    buttonTextHoverColor,
    buttonBorderRadius,
    videoThumbnailBorderRadius,
    blockClass,
    text_color
  } = attributes;

  /** get thumbnail image sizes from wordpress */
  const imageSizes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)('core/editor').getEditorSettings().imageSizes.map(size => size.slug);
  if (blockClass === '') {
    setAttributes({
      blockClass: Math.random().toString(36).substring(7)
    });
  }

  /** Constant values to contain default values */
  const onSelectImage = image => {
    if (image && (image.mime === 'image/jpeg' || image.mime === 'image/jpg' || image.mime === 'image/png')) {
      setAttributes({
        image: image
      });
    }
  };

  /** Remove Main Image */
  const removeImage = () => {
    setAttributes({
      image: ''
    });
  };

  /** On Select Play Icon */
  const onSelectIcon = newIcon => {
    if (newIcon && (newIcon.mime === 'image/jpeg' || newIcon.mime === 'image/jpg' || newIcon.mime === 'image/png' || newIcon.mime === 'image/svg+xml')) {
      setAttributes({
        playIconImage: newIcon.url
      });
    }
  };

  /** Remove Play Icon */
  const removeIcon = () => {
    setAttributes({
      playIconImage: ''
    });
  };

  /** Handling Button or Image to appear on Front-end */
  const handleSelectionChange = newSelection => {
    setAttributes({
      selection: newSelection
    });
  };

  /** Handling Button Text */
  const handleTextChange = newText => {
    setAttributes({
      buttonText: newText
    });
  };

  /** Handling Button Background Color */
  const handleBackgroundColorChange = color => {
    setAttributes({
      buttonBackgroundColor: color
    });
  };

  /** Handling Button Text Color */
  const handleTextColorChange = color => {
    setAttributes({
      buttonTextColor: color
    });
  };

  /** Handling Button Border Color */
  const handleBorderColorChange = color => {
    setAttributes({
      buttonBorderColor: color
    });
  };

  /** Handling Button Hover Background Color */
  const handleBackgroundHoverColorChange = color => {
    setAttributes({
      buttonBackgroundHoverColor: color
    });
  };

  /** Handling Button Hover Text Color */
  const handleTextHoverColorChange = color => {
    setAttributes({
      buttonTextHoverColor: color
    });
  };

  /** Handling Button Hover Border Color */
  const handleBorderHoverColorChange = color => {
    setAttributes({
      buttonBorderHoverColor: color
    });
  };

  /** Handling Button Border Width Size */
  const handleButtonBorderWidth = value => {
    setAttributes({
      buttonBorderWidth: value
    });
  };

  /** Handling Button Border Radius */
  const handleButtonBorderRadius = value => {
    setAttributes({
      buttonBorderRadius: value
    });
  };

  // const handleImageSizeChange = (newSize) => {
  //     setAttributes({ imageSize: newSize });
  // };

  /** Handling video thumbnail Border Radius */
  const handleVideoThumbnailBorderRadius = value => {
    setAttributes({
      videoThumbnailBorderRadius: value
    });
  };

  /** Handling video Play Icon */
  const handlePlayIcon = checked => {
    setAttributes({
      playIconEnabled: checked
    });
  };

  /** Handling video Play Icon Size */
  const handlePlayIconSizeChange = newSize => {
    setAttributes({
      playIconImageSize: newSize
    });
  };

  /** Handling Lightbox Overlay Color */
  const handleLightBoxOverlayColorChange = color => {
    setAttributes({
      videoLightboxColor: color
    });
  };

  /** Handling Lightbox Overlay Opacity */
  const handleOpacityChange = value => {
    setAttributes({
      videoLightboxOpacity: value
    });
  };

  /** Handling Lightbox Width Color */
  const handleWidthChange = value => {
    setAttributes({
      videoLightboxWidth: value
    });
  };

  /** Handling Video Type */
  const handleVideoTypeChange = newType => {
    setAttributes({
      videoType: newType
    });
  };

  /** Handle Video URL */
  const handleVideoUrlChange = newUrl => {
    setAttributes({
      videoUrl: newUrl
    });
    setAttributes({
      video: ''
    });
  };

  /** Upload Video **/
  const onUploadVideo = newVideo => {
    console.log(newVideo.mime);
    if (newVideo && (newVideo.mime === 'video/mp4' || newVideo.mime === 'video/avi')) {
      setAttributes({
        video: newVideo.url
      });
      setAttributes({
        videoUrl: ''
      });
    }
  };

  /** Remove Upload Video */
  const removeVideo = () => {
    setAttributes({
      video: ''
    });
  };
  const onChangeTextColor = hexColor => {
    setAttributes({
      text_color: hexColor
    });
  };
  const generateRandomId = () => {
    const blockId = Math.random().toString(36).substring(7);
    setAttributes({
      blockClass: `button-id-${blockId}`
    });
  };

  //generateRandomId();

  // Generate a unique identifier for this block instance

  // Create a unique CSS class for this block instance
  //const blockClass = `button-id-${blockId}`;

  /**
   * Custom style selected by User
   */
  const customStyles = `
      .${blockClass} {
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
      .video-thumbnail.${blockClass} {
        border-radius: ${videoThumbnailBorderRadius}px !important;
      }
      /* Add more styles as needed */
    `;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "video-lightbox"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, customStyles), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "video-lb-notes"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option for Video Popup', 'video-lightbox-for-guten-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('* Please find Video upload, and customization options in sidebar', 'video-lightbox-for-guten-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl
  //label={__('Select Option for Video Popup')}
  , {
    selected: attributes.selection,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'video-lightbox-for-guten-blocks'),
      value: 'button'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media Upload', 'video-lightbox-for-guten-blocks'),
      value: 'media'
    }],
    onChange: handleSelectionChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Design', 'video-lightbox-for-guten-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Border Width', 'video-lightbox-for-guten-blocks'),
    value: attributes.buttonBorderWidth,
    onChange: handleButtonBorderWidth,
    min: 0,
    max: 2,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Border Radius', 'video-lightbox-for-guten-blocks'),
    value: attributes.buttonBorderRadius,
    onChange: handleButtonBorderRadius,
    min: 0,
    max: 30,
    step: 2
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Colors', 'video-lightbox-for-guten-blocks'),
    colorSettings: [{
      value: attributes.buttonBackgroundColor,
      onChange: handleBackgroundColorChange,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'video-lightbox-for-guten-blocks')
    }, {
      value: attributes.buttonTextColor,
      onChange: handleTextColorChange,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'video-lightbox-for-guten-blocks')
    }, {
      value: attributes.buttonBorderColor,
      onChange: handleBorderColorChange,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'video-lightbox-for-guten-blocks')
    }, {
      value: attributes.buttonBackgroundHoverColor,
      onChange: handleBackgroundHoverColorChange,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Hover Color', 'video-lightbox-for-guten-blocks')
    }, {
      value: attributes.buttonTextHoverColor,
      onChange: handleTextHoverColorChange,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Hover Color', 'video-lightbox-for-guten-blocks')
    }, {
      value: attributes.buttonBorderHoverColor,
      onChange: handleBorderHoverColorChange,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Hover Color', 'video-lightbox-for-guten-blocks')
    }]
  }), attributes.selection === 'media' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play Icon Settings', 'video-lightbox-for-guten-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom Play Icon', 'video-lightbox-for-guten-blocks'),
    checked: attributes.playIconEnabled,
    onChange: handlePlayIcon
  }), attributes.playIconEnabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.playIconImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "vl-thumbnail"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.playIconImage,
    alt: "Uploaded Icon"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `vl-button vl-icon-button ${blockClass}`,
    onClick: removeIcon
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 3L19 5M21 7L19 5M19 5L21 3M19 5L17 7",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), " ")))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectIcon,
    type: "image",
    value: attributes.playIconImage,
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      style: {
        marginBottom: 20
      },
      className: `vl-button vl-icon-text-button ${blockClass}`,
      onClick: open,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Icon', 'video-lightbox-for-guten-blocks')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      viewBox: "0 0 24 24"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "0",
      fill: "none",
      width: "24",
      height: "24"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"
    }), " "), " ")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Icon', 'video-lightbox-for-guten-blocks')))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play Icon Size', 'video-lightbox-for-guten-blocks'),
    value: attributes.playIconImageSize,
    onChange: handlePlayIconSizeChange,
    min: 0,
    max: 100,
    step: 2
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Thumbnail Size', 'video-lightbox-for-guten-blocks'),
    value: selectedSize,
    options: imageSizes.map(size => ({
      label: size,
      value: size
    })),
    onChange: newSelectedSize => setAttributes({
      selectedSize: newSelectedSize
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Thumbnail Border Radius', 'video-lightbox-for-guten-blocks'),
    value: attributes.videoThumbnailBorderRadius,
    onChange: handleVideoThumbnailBorderRadius,
    min: 0,
    max: 30,
    step: 2
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Type Settings', 'video-lightbox-for-guten-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Video Type', 'video-lightbox-for-guten-blocks'),
    selected: attributes.videoType,
    options: [{
      label: 'Upload Video',
      value: 'uploadvideo'
    }, {
      label: 'Video Url',
      value: 'videourl'
    }],
    onChange: handleVideoTypeChange
  }), attributes.videoType === 'videourl' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video URL', 'video-lightbox-for-guten-blocks'),
    value: attributes.videoUrl,
    onChange: handleVideoUrlChange,
    isRequired: true
  })), attributes.videoType === 'uploadvideo' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, attributes.video ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "video-thumbnail "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    src: attributes.video
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `vl-button vl-icon-button ${blockClass}`,
    onClick: removeVideo
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.03 14.57 19.83 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.88 21.2 15.17 21.55 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C16.44 22.62 17.42 23 18.5 23C20.14 23 21.57 22.12 22.35 20.82C22.58 20.43 22.76 20 22.87 19.55C22.96 19.21 23 18.86 23 18.5C23 17.43 22.62 16.44 21.98 15.67ZM20.23 20.21C20.08 20.36 19.89 20.43 19.7 20.43C19.51 20.43 19.32 20.36 19.17 20.21L18.51 19.55L17.82 20.24C17.67 20.39 17.48 20.46 17.29 20.46C17.1 20.46 16.91 20.39 16.76 20.24C16.47 19.95 16.47 19.47 16.76 19.18L17.45 18.49L16.79 17.83C16.5 17.54 16.5 17.06 16.79 16.77C17.08 16.48 17.56 16.48 17.85 16.77L18.51 17.43L19.14 16.8C19.43 16.51 19.91 16.51 20.2 16.8C20.49 17.09 20.49 17.57 20.2 17.86L19.57 18.49L20.23 19.15C20.53 19.44 20.53 19.91 20.23 20.21Z",
    fill: "currentColor"
  }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7295 5.86V2.5C14.7295 2.22 14.5095 2 14.2295 2H9.76953C9.48953 2 9.26953 2.22 9.26953 2.5V5.86C9.26953 6.14 9.48953 6.36 9.76953 6.36H14.2295C14.5095 6.36 14.7295 6.14 14.7295 5.86Z",
    fill: "currentColor"
  }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.24851 2.0207C4.68851 2.1807 2.93851 3.5007 2.28851 5.7007C2.18851 6.0307 2.42851 6.3607 2.76851 6.3607H7.26851C7.54851 6.3607 7.76851 6.1407 7.76851 5.8607V2.5207C7.76851 2.2407 7.52851 2.0007 7.24851 2.0207Z",
    fill: "currentColor"
  }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.7505 2.00898C19.3105 2.16898 21.0605 3.48898 21.7105 5.68898C21.8105 6.01898 21.5705 6.34898 21.2305 6.34898H16.7305C16.4505 6.34898 16.2305 6.12898 16.2305 5.84898V2.50898C16.2305 2.22898 16.4705 1.98898 16.7505 2.00898Z",
    fill: "currentColor"
  }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 8.35937V12.7394C22 13.1094 21.61 13.3494 21.28 13.1794C20.44 12.7394 19.48 12.4994 18.5 12.4994C16.89 12.4994 15.32 13.1594 14.2 14.3094C13.1 15.4294 12.5 16.9194 12.5 18.4994C12.5 19.3094 12.82 20.3494 13.22 21.2194C13.38 21.5694 13.14 21.9994 12.75 21.9994H7.81C4.6 21.9994 2 19.3994 2 16.1894V8.35937C2 8.07937 2.22 7.85938 2.5 7.85938H21.5C21.78 7.85938 22 8.07937 22 8.35937Z",
    fill: "currentColor"
  }))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onUploadVideo,
    type: "video",
    value: attributes.video,
    allowedTypes: ['video/*'] // Allows all video formats
    ,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: `vl-button vl-icon-text-button ${blockClass}`,
      onClick: open
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M14.7295 5.86V2.5C14.7295 2.22 14.5095 2 14.2295 2H9.76953C9.48953 2 9.26953 2.22 9.26953 2.5V5.86C9.26953 6.14 9.48953 6.36 9.76953 6.36H14.2295C14.5095 6.36 14.7295 6.14 14.7295 5.86Z",
      fill: "currentColor"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M7.24851 2.0207C4.68851 2.1807 2.93851 3.5007 2.28851 5.7007C2.18851 6.0307 2.42851 6.3607 2.76851 6.3607H7.26851C7.54851 6.3607 7.76851 6.1407 7.76851 5.8607V2.5207C7.76851 2.2407 7.52851 2.0007 7.24851 2.0207Z",
      fill: "currentColor"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16.7505 2.00898C19.3105 2.16898 21.0605 3.48898 21.7105 5.68898C21.8105 6.01898 21.5705 6.34898 21.2305 6.34898H16.7305C16.4505 6.34898 16.2305 6.12898 16.2305 5.84898V2.50898C16.2305 2.22898 16.4705 1.98898 16.7505 2.00898Z",
      fill: "currentColor"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C15.69 21.99 15.7 22 15.71 22C16.46 22.63 17.43 23 18.5 23C20.14 23 21.57 22.12 22.35 20.82C22.58 20.43 22.76 20 22.87 19.55C22.96 19.21 23 18.86 23 18.5C23 17.44 22.63 16.46 22 15.7ZM20.18 19.23H19.25V20.2C19.25 20.61 18.91 20.95 18.5 20.95C18.09 20.95 17.75 20.61 17.75 20.2V19.23H16.82C16.41 19.23 16.07 18.89 16.07 18.48C16.07 18.07 16.41 17.73 16.82 17.73H17.75V16.84C17.75 16.43 18.09 16.09 18.5 16.09C18.91 16.09 19.25 16.43 19.25 16.84V17.73H20.18C20.59 17.73 20.93 18.07 20.93 18.48C20.93 18.89 20.6 19.23 20.18 19.23Z",
      fill: "currentColor"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M22 8.35937V12.7394C22 13.1094 21.61 13.3494 21.28 13.1794C20.44 12.7394 19.48 12.4994 18.5 12.4994C16.89 12.4994 15.32 13.1594 14.2 14.3094C13.1 15.4294 12.5 16.9194 12.5 18.4994C12.5 19.3094 12.82 20.3494 13.22 21.2194C13.38 21.5694 13.14 21.9994 12.75 21.9994H7.81C4.6 21.9994 2 19.3994 2 16.1894V8.35937C2 8.07937 2.22 7.85938 2.5 7.85938H21.5C21.78 7.85938 22 8.07937 22 8.35937Z",
      fill: "currentColor"
    }), " ")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Video', 'video-lightbox-for-guten-blocks'))
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Lightbox Settings', 'video-lightbox-for-guten-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox Background Color', 'block-development-examples')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    label: "test",
    value: attributes.videoLightboxColor,
    onChange: hexColor => setAttributes({
      videoLightboxColor: hexColor
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox Opacity', 'video-lightbox-for-guten-blocks'),
    value: attributes.videoLightboxOpacity,
    onChange: handleOpacityChange,
    min: 0,
    max: 1,
    step: 0.1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox Width', 'video-lightbox-for-guten-blocks'),
    value: attributes.videoLightboxWidth,
    onChange: handleWidthChange,
    min: 320,
    max: 1180,
    step: 10
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "media-block"
  }, attributes.selection === 'button' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update Button Text', 'video-lightbox-for-guten-blocks'),
    value: attributes.buttonText,
    onChange: handleTextChange,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play Video', 'video-lightbox-for-guten-blocks')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `vl-button vl-icon-text-button ${blockClass}`,
    onClick: () => setAttributes({
      selection: 'button'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    width: "24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"
  }), " ")), attributes.buttonText)), attributes.selection === 'media' && selectedSize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: image => onSelectImage(image),
    allowedTypes: ['image'],
    value: attributes.image && attributes.image.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, attributes.image ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `video-thumbnail ${blockClass}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.image.sizes[selectedSize].url,
      alt: attributes.image.alt ? attributes.image.alt : ''
    }), attributes.playIconEnabled && attributes.playIconImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.playIconImage,
      width: attributes.playIconImageSize,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play Icon', 'video-lightbox-for-guten-blocks'),
      className: "play-icon"
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      viewBox: "0 0 24 24",
      width: attributes.playIconImageSize,
      className: "play-icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z",
      fill: "currentColor"
    }), " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: `vl-button vl-icon-button ${blockClass}`,
      onClick: removeImage
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      viewBox: "0 0 24 24",
      fill: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M17 3L19 5M21 7L19 5M19 5L21 3M19 5L17 7",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), " ")))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: `vl-button vl-icon-text-button ${blockClass}`,
      onClick: open
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      viewBox: "0 0 24 24",
      width: "24"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "0",
      fill: "none",
      width: "24",
      height: "24"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"
    }), " "), " ")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('upload Image', 'video-lightbox-for-guten-blocks')))
  })))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */



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
function save({
  attributes
}) {
  /** Get constant values contains values to save */
  const {
    blockClass,
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
    buttonBorderRadius,
    videoThumbnailBorderRadius,
    videoType,
    videoUrl,
    video,
    playIconEnabled,
    playIconImage,
    playIconImageSize,
    imageSize,
    selectedSize,
    videoLightboxOpacity
  } = attributes;
  const buttonContent = buttonText.trim() !== '' ? buttonText : 'Open Video';
  function isValidHttpUrl(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' +
    // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    // query string
    '(\\#[-a-z\\d_]*)?$',
    // fragment locator
    'i');
    return pattern.test(str);
  }
  const customStyles = `
      .${blockClass}-fancy-custom .fancybox__backdrop {
        background: ${videoLightboxColor} !important;
        opacity: ${videoLightboxOpacity} !important;
      }
      .${blockClass}-fancy-custom .fancybox__content {
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
      .video-thumbnail.${blockClass}{
        border-radius: ${videoThumbnailBorderRadius}px !important;
      }
      /* Add more styles as needed */
    `;
  return /** Structure to show for update data */(
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, customStyles), attributes.selection === 'button' && (isValidHttpUrl(attributes.videoUrl) || attributes.video) && (videoType === 'videourl' || videoType === 'uploadvideo') ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      "data-fancybox": `video-lightbox-${blockClass}`,
      "data-fancy-class": blockClass,
      href: attributes.videoUrl || attributes.video,
      className: `vl-button vl-icon-text-button ${blockClass}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      viewBox: "0 0 24 24",
      width: "24"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z",
      fill: "currentColor"
    }), " ")), buttonContent)) : attributes.selection === 'media' && selectedSize && image && (isValidHttpUrl(attributes.videoUrl) || attributes.video) && (videoType === 'videourl' || videoType === 'uploadvideo') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      "data-fancybox": `video-lightbox-${blockClass}`,
      "data-fancy-class": blockClass,
      href: attributes.videoUrl || attributes.video,
      class: `video-thumbnail ${blockClass}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.image.sizes[selectedSize].url,
      alt: attributes.image.alt ? attributes.image.alt : ''
    }), attributes.playIconEnabled && attributes.playIconImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "play-icon",
      style: `width:${playIconImageSize}px`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: playIconImage,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play Icon', 'video-lightbox-for-guten-blocks')
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      viewBox: "0 0 24 24",
      className: "play-icon",
      width: attributes.playIconImageSize
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z",
      fill: "currentColor"
    }), " "))))
  );
}

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

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"video-lightbox-for-guten-blocks/videolightbox","version":"1.0.0","title":"Video Lightbox","category":"zealblocks","icon":"video-alt3","description":"Enhance your WordPress website with the Video Lightbox for Gutenberg Blocks plugin, a powerful tool that seamlessly integrates into the Gutenberg editor to bring a captivating multimedia experience to your content.","attributes":{"image":{"type":"object","default":null},"selection":{"type":"string","default":"button"},"buttonText":{"type":"string","default":"Play Video"},"buttonBackgroundColor":{"type":"string","default":"#0073aa"},"buttonTextColor":{"type":"string","default":"#ffffff"},"buttonBorderColor":{"type":"string","default":"#0073aa"},"buttonBackgroundHoverColor":{"type":"string","default":"#0073aa"},"buttonTextHoverColor":{"type":"string","default":"#ffffff"},"buttonBorderHoverColor":{"type":"string","default":"#0073aa"},"buttonBorderWidth":{"type":"number","default":0},"imageSize":{"type":"string","default":"full"},"playIconEnabled":{"type":"boolean","default":false},"playIconImage":{"type":"string","default":null},"playIconImageSize":{"type":"number","default":30},"videoLightboxColor":{"type":"string","default":"#000000"},"videoLightboxOpacity":{"type":"number","default":0.8},"videoLightboxWidth":{"type":"number","default":640},"videoType":{"type":"string","default":null},"selectedSize":{"type":"string","default":"thumbnail"},"videoUrl":{"type":"string","default":null},"video":{"type":"string","default":null},"buttonBorderRadius":{"type":"number","default":0},"videoThumbnailBorderRadius":{"type":"number","default":0},"text_color":{"type":"string","default":null},"blockClass":{"type":"string","default":""}},"textdomain":"video-lightbox-for-guten-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkvideo_lightbox_for_guten_blocks"] = globalThis["webpackChunkvideo_lightbox_for_guten_blocks"] || [];
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