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

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

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
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);

/**
* WordPress dependencies
* @return void
*/



//import VideoLightboxBlock from './VideoLightboxBlock';


/**
 * Video Lightbox block registration
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('my-first-block/video-lightbox', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Video Lightbox'),
  icon: 'video-alt3',
  category: 'common',
  attributes: {
    /** Image, Description, and VideoURL */
    image: {
      type: 'string',
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
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const onSelectImage = newImage => {
      setAttributes({
        image: newImage.sizes.full.url
      });
    };
    const onSelectIcon = newIcon => {
      setAttributes({
        iconImage: newIcon.sizes.full.url
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Option for Video Popup'),
      selected: attributes.selection,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Button'),
        value: 'button'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Media Upload'),
        value: 'media'
      }],
      onChange: handleSelectionChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, attributes.selection === 'button' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Button Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Button Text'),
      value: attributes.buttonText,
      onChange: handleTextChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Button Background Color'),
      colorSettings: [{
        value: attributes.buttonBackgroundColor,
        onChange: handleBackgroundColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Button Background Color')
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Button Text Color'),
      colorSettings: [{
        value: attributes.buttonTextColor,
        onChange: handleTextColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Button Text Color')
      }]
    })), attributes.selection === 'media' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Media Upload Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Play Icon'),
      checked: attributes.additionalSettingsEnabled,
      onChange: handleToggleChange
    }), attributes.additionalSettingsEnabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: onSelectIcon,
      type: "image",
      value: attributes.iconImage,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        icon: "upload",
        onClick: open,
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upload Icon')
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upload Icon')))
    }), attributes.iconImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.iconImage,
      alt: "Icon Uploaded"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icon Size (in pixels)'),
      value: attributes.iconImageSize,
      onChange: handleIconSizeChange
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Image Size'),
      value: attributes.imageSize,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Thumbnail'),
        value: 'thumbnail'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Medium'),
        value: 'medium'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Large'),
        value: 'large'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Full'),
        value: 'full'
      }
      // Add more size options as needed
      ],
      onChange: handleImageSizeChange
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Video Type Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Video Type'),
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
    }), attributes.videoType === 'videourl' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Video URL'),
      value: attributes.videoUrl,
      onChange: handleVideoUrlChange
    })), attributes.videoType === 'uploadvideo' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: newVideo => setAttributes({
        video: newVideo.url
      }),
      type: "video",
      value: attributes.video,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upload Video'))
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Video Lightbox Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Lightbox Color'),
      colorSettings: [{
        value: attributes.videoLightboxColor,
        onChange: handleColorChange,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Lightbox Color')
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Lightbox Opacity'),
      value: attributes.videoLightboxOpacity,
      onChange: handleOpacityChange,
      min: 0,
      max: 1,
      step: 0.1
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Lightbox Width'),
      value: attributes.videoLightboxWidth,
      onChange: handleWidthChange,
      min: 320,
      max: 1920,
      step: 10
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "custom-block"
    }, attributes.selection === 'button' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => setAttributes({
        selection: 'media'
      }),
      style: {
        backgroundColor: attributes.buttonBackgroundColor,
        color: attributes.buttonTextColor
      }
    }, attributes.buttonText), attributes.selection === 'media' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: attributes.image,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upload Image'))
    }), attributes.image && attributes.selection === 'media' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.image,
      alt: "Uploaded"
    })));
  },
  save: ({
    attributes
  }) => {
    const {
      selection,
      buttonText,
      buttonBackgroundColor,
      buttonTextColor,
      videoType,
      videoUrl,
      iconImage,
      iconImageSize
    } = attributes;
    const buttonContent = buttonText.trim() !== '' ? buttonText : 'Open Video';
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.selection === 'button' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      "data-fancybox": "video-lightbox",
      style: {
        backgroundColor: buttonBackgroundColor
      }
    }, buttonContent), attributes.image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      "data-fancybox": "video-lightbox",
      href: videoUrl
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.image,
      alt: "Uploaded"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      style: {
        width: iconImageSize
      },
      src: attributes.iconImage,
      alt: "IconImage"
    })));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map