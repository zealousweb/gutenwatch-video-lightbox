/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
    setAttributes
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: ""
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Option for Video Popup'),
      selected: attributes.selection,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button'),
        value: 'button'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media Upload'),
        value: 'media'
      }],
      onChange: handleSelectionChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, attributes.selection === 'button' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text'),
      value: attributes.buttonText,
      onChange: handleTextChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Background Color'),
      colorSettings: [{
        value: attributes.buttonBackgroundColor,
        onChange: handleBackgroundColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Button Background Color')
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text Color'),
      colorSettings: [{
        value: attributes.buttonTextColor,
        onChange: handleTextColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Button Text Color')
      }]
    })), attributes.selection === 'media' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media Upload Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play Icon'),
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
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, null, "icon=\"upload\" onClick=", open, "aria-label=", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Icon'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Icon'))))
    }), errorMessagePlayIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        color: 'red'
      }
    }, errorMessagePlayIcon)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Size (in pixels)'),
      value: attributes.iconImageSize,
      onChange: handleIconSizeChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: "Select Image Size",
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
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Type Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Video Type'),
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video URL'),
      value: attributes.videoUrl,
      onChange: handleVideoUrlChange
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
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Video'))
    })), errorMessageUploadVideo && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        color: 'red'
      }
    }, errorMessageUploadVideo))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Lightbox Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox Color'),
      colorSettings: [{
        value: attributes.videoLightboxColor,
        onChange: handleColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Lightbox Color')
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox Opacity'),
      value: attributes.videoLightboxOpacity,
      onChange: handleOpacityChange,
      min: 0,
      max: 1,
      step: 0.1
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lightbox Width'),
      value: attributes.videoLightboxWidth,
      onChange: handleWidthChange,
      min: 320,
      max: 1920,
      step: 10
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "custom-block"
    }, attributes.selection === 'button' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: () => setAttributes({
        selection: 'button'
      }),
      style: {
        backgroundColor: attributes.buttonBackgroundColor,
        color: attributes.buttonTextColor
      }
    }, attributes.buttonText), attributes.selection === 'media' && selectedSize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: image => onSelectImage(image)
      //ref={mediaUploadRef[index]}
      //ref={buttonRef}
      ,
      allowedTypes: ['image'],
      value: attributes.image && attributes.image.id,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, attributes.image ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        "data-fancybox": "video-lightbox"
      }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.image.sizes[selectedSize].url,
        alt: attributes.image.alt ? attributes.image.alt : ''
      })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image')))
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
      buttonBackgroundColor,
      buttonTextColor,
      videoType,
      videoUrl,
      video,
      iconImage,
      iconImageSize,
      imageSize,
      selectedSize
    } = attributes;
    const buttonContent = buttonText.trim() !== '' ? buttonText : 'Open Video';
    //const videoContent = videoUrl != '' ? videoUrl : video;

    return /** Structure to show for update data */(
      (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, attributes.selection === 'button' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        "data-fancybox": "video-lightbox",
        style: {
          backgroundColor: buttonBackgroundColor
        }
      }, buttonContent), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "hidden"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
        src: video
      }))), attributes.selection === 'media' && selectedSize && image ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        "data-fancybox": "video-lightbox"
      }, " ", video, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.image.sizes[selectedSize].url,
        alt: attributes.image.alt ? attributes.image.alt : ''
      })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Please upload image first"))
    );
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map