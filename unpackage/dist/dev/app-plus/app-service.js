(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**********************!*\
  !*** E:/pwl/main.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);__webpack_require__(/*! @dcloudio/uni-stat */ 58);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 62));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 65));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUIsa0RBQTRCOzs7QUFHL0Msc0U7QUFDQUEsYUFBSUMsTUFBSixDQUFXQyxhQUFYLEdBQTJCLEtBQTNCO0FBQ0FDLGFBQUlDLE1BQUosR0FBYSxLQUFiO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDUkcsWUFEUSxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7aW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG5cdC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************!*\
  !*** E:/pwl/pages.json ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/chat/chat', function () {return Vue.extend(__webpack_require__(/*! pages/chat/chat.vue?mpType=page */ 12).default);});
__definePage('pages/chat/redpacket', function () {return Vue.extend(__webpack_require__(/*! pages/chat/redpacket.vue?mpType=page */ 43).default);});
__definePage('pages/chat/userInfo', function () {return Vue.extend(__webpack_require__(/*! pages/chat/userInfo.vue?mpType=page */ 48).default);});
__definePage('pages/chat/setting', function () {return Vue.extend(__webpack_require__(/*! pages/chat/setting.vue?mpType=page */ 53).default);});

/***/ }),
/* 2 */
/*!************************************************!*\
  !*** E:/pwl/pages/index/index.vue?mpType=page ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************************************************************!*\
  !*** E:/pwl/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("image", { staticClass: _vm._$s(1, "sc", "logo"), attrs: { _i: 1 } }),
      _c(
        "view",
        {
          staticClass: _vm._$s(2, "sc", "login-form-box"),
          class: _vm._$s(2, "c", { show: _vm.ShowLogin }),
          attrs: { _i: 2 }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.nameOrEmail,
                expression: "nameOrEmail"
              }
            ],
            staticClass: _vm._$s(3, "sc", "login-input"),
            attrs: { _i: 3 },
            domProps: { value: _vm._$s(3, "v-model", _vm.nameOrEmail) },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.nameOrEmail = $event.target.value
              }
            }
          }),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.userPassword,
                expression: "userPassword"
              }
            ],
            staticClass: _vm._$s(4, "sc", "login-input"),
            attrs: { _i: 4 },
            domProps: { value: _vm._$s(4, "v-model", _vm.userPassword) },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.userPassword = $event.target.value
              }
            }
          }),
          _c("button", {
            staticClass: _vm._$s(5, "sc", "login-btn"),
            attrs: { _i: 5 },
            on: { click: _vm.login }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!************************************************************************!*\
  !*** E:/pwl/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8);\n\n\n\nvar _sparkMd = _interopRequireDefault(__webpack_require__(/*! spark-md5 */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { ShowLogin: false, nameOrEmail: \"\", userPassword: \"\" };}, onLoad: function onLoad() {this.init();},\n  methods: {\n    init: function init() {var _this = this;\n      var apiKey = uni.getStorageSync('apiKey');\n      var data = uni.getStorageSync('userData');\n\n      if (!apiKey) {\n        // 你丫的登录信息没了，快去登录\n        setTimeout(function () {\n          _this.ShowLogin = true;\n        }, 100);\n      } else {\n        // 看看登录信息过期没有\n        this.CheckUser(apiKey);\n      }\n\n    },\n    login: function login() {\n      var that = this;\n      (0, _api.getKey)({\n        nameOrEmail: this.nameOrEmail,\n        userPassword: _sparkMd.default.hash(this.userPassword) }).\n      then(function (res) {\n        if (res.code == 0) {\n          __f__(\"log\", res, \" at pages/index/index.vue:52\");\n          // 没问题，先验证下,再滚去聊天室\n          that.CheckUser(res.Key);\n        } else {\n          // 报错就是你的错\n          uni.showToast({\n            title: '账号密码错误!',\n            icon: 'error',\n            duration: 2000 });\n\n        }\n      });\n    },\n    CheckUser: function CheckUser(apiKey) {var _this2 = this;\n      (0, _api.checkUser)({\n        apiKey: apiKey }).\n      then(function (res) {\n        if (res.code == 0) {\n          // 没过期，继续用\n          uni.setStorageSync('userData', res.data);\n          uni.setStorageSync('apiKey', apiKey);\n          getApp().globalData.data = res.data;\n          getApp().globalData.apiKey = apiKey;\n          uni.reLaunch({\n            url: '/pages/chat/chat' });\n\n        } else {\n          // 你丫的登录信息过期了，快去登录\n          setTimeout(function () {\n            _this2.ShowLogin = true;\n          }, 100);\n        }\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBOzs7O0FBSUEsZ0Y7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxnQkFEQSxFQUVBLGVBRkEsRUFHQSxnQkFIQSxHQUtBLENBUEEsRUFRQSxNQVJBLG9CQVFBLENBQ0EsWUFDQSxDQVZBO0FBV0E7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxHQUZBO0FBR0EsT0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBZkE7QUFnQkEsU0FoQkEsbUJBZ0JBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsOERBRkE7QUFHQSxVQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLHlCQUZBO0FBR0EsMEJBSEE7O0FBS0E7QUFDQSxPQWhCQTtBQWlCQSxLQW5DQTtBQW9DQSxhQXBDQSxxQkFvQ0EsTUFwQ0EsRUFvQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsVUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTs7QUFHQSxTQVRBLE1BU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLEVBRUEsR0FGQTtBQUdBO0FBQ0EsT0FsQkE7QUFtQkEsS0F4REEsRUFYQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8aW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxvZ2luLWZvcm0tYm94XCIgOmNsYXNzPVwie3Nob3cgOiBTaG93TG9naW59XCI+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luLWlucHV0XCIgdi1tb2RlbD1cIm5hbWVPckVtYWlsXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuaRuOmxvOa0vui0puWPt1wiIC8+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luLWlucHV0XCIgdi1tb2RlbD1cInVzZXJQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi5pG46bG85rS+5a+G56CBXCIgLz5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIGNsYXNzPVwibG9naW4tYnRuXCIgQGNsaWNrPVwibG9naW5cIj7nmbvlvZU8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRnZXRLZXksXHJcblx0XHRjaGVja1VzZXJcclxuXHR9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcclxuXHRpbXBvcnQgU3BhcmtNRDUgZnJvbSAnc3BhcmstbWQ1J1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0U2hvd0xvZ2luOiBmYWxzZSxcclxuXHRcdFx0XHRuYW1lT3JFbWFpbDogXCJcIixcclxuXHRcdFx0XHR1c2VyUGFzc3dvcmQ6IFwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0KCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRpbml0KCkge1xyXG5cdFx0XHRcdGxldCBhcGlLZXkgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2FwaUtleScpO1xyXG5cdFx0XHRcdGxldCBkYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyRGF0YScpO1xyXG5cclxuXHRcdFx0XHRpZiAoIWFwaUtleSkge1xyXG5cdFx0XHRcdFx0Ly8g5L2g5Lir55qE55m75b2V5L+h5oGv5rKh5LqG77yM5b+r5Y6755m75b2VXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5TaG93TG9naW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSwgMTAwKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDnnIvnnIvnmbvlvZXkv6Hmga/ov4fmnJ/msqHmnIlcclxuXHRcdFx0XHRcdHRoaXMuQ2hlY2tVc2VyKGFwaUtleSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2dpbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Z2V0S2V5KHtcclxuXHRcdFx0XHRcdG5hbWVPckVtYWlsOiB0aGlzLm5hbWVPckVtYWlsLFxyXG5cdFx0XHRcdFx0dXNlclBhc3N3b3JkOiBTcGFya01ENS5oYXNoKHRoaXMudXNlclBhc3N3b3JkKVxyXG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0Ly8g5rKh6Zeu6aKY77yM5YWI6aqM6K+B5LiLLOWGjea7muWOu+iBiuWkqeWupFxyXG5cdFx0XHRcdFx0XHR0aGF0LkNoZWNrVXNlcihyZXMuS2V5KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g5oql6ZSZ5bCx5piv5L2g55qE6ZSZXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6LSm5Y+35a+G56CB6ZSZ6K+vIScsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRDaGVja1VzZXIoYXBpS2V5KSB7XHJcblx0XHRcdFx0Y2hlY2tVc2VyKHtcclxuXHRcdFx0XHRcdGFwaUtleTogYXBpS2V5XHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0Ly8g5rKh6L+H5pyf77yM57un57ut55SoXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlckRhdGEnLCByZXMuZGF0YSlcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdhcGlLZXknLCBhcGlLZXkpXHJcblx0XHRcdFx0XHRcdGdldEFwcCgpLmdsb2JhbERhdGEuZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLmFwaUtleSA9IGFwaUtleTtcclxuXHRcdFx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvY2hhdC9jaGF0J1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g5L2g5Lir55qE55m75b2V5L+h5oGv6L+H5pyf5LqG77yM5b+r5Y6755m75b2VXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuU2hvd0xvZ2luID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSwgMTAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHRwYWRkaW5nOiA1dnc7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzNiM2U0MztcclxuXHR9XHJcblxyXG5cdC5sb2dvIHtcclxuXHRcdHdpZHRoOiA2MHB4O1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0bWFyZ2luOiAxNXZoIDI1dncgMnZoO1xyXG5cdFx0YW5pbWF0aW9uOiBnbyA1cyBpbmZpbml0ZTtcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1mb3JtLWJveCB7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHRyYW5zaXRpb246IC41cztcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1mb3JtLWJveC5zaG93IHtcclxuXHRcdGhlaWdodDogMzAwcHg7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0LmxvZ2luLWlucHV0IHtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0bWFyZ2luOiA1dncgYXV0bztcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggMnB4ICMzMzM7XHJcblx0fVxyXG5cclxuXHQubG9naW4tYnRuIHtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0bWFyZ2luOiA1dncgYXV0bztcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzYwYjA0NDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgZ28ge1xyXG5cdFx0MzAlIHtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTB2dyk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZ3KTtcclxuXHRcdH1cclxuXHJcblx0XHQ1MCUge1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHZ3KTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwdncpO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!***************************!*\
  !*** E:/pwl/utils/api.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.upload = exports.checkCollectedLiveness = exports.getYesterdayLiveness = exports.getLiveness = exports.getUserInfo = exports.deleteMsg = exports.faceList = exports.send = exports.openRedPacket = exports.getMorePage = exports.checkUser = exports.getKey = exports.WS = void 0;var _util = _interopRequireDefault(__webpack_require__(/*! ./util.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar baseURL = \"https://pwl.icu\";\nvar baaseWS = \"wss://pwl.icu\";\nvar API = {\n  getKey: baseURL + \"/api/getKey\",\n  checkUser: baseURL + \"/api/user\",\n  getUserInfo: baseURL + \"/user/\",\n  emotions: baseURL + \"/users/emotions\",\n  liveness: baseURL + \"/user/liveness\",\n  more: baseURL + \"/chat-room/more\",\n  send: baseURL + \"/chat-room/send\",\n  delete: baseURL + \"/chat-room/revoke/\", ///chat-room/revoke/{消息oId}\n  ylra: baseURL + \"/activity/yesterday-liveness-reward-api\",\n  icl: baseURL + \"/api/activity/is-collected-liveness\",\n  open: baseURL + \"/chat-room/red-packet/open\",\n  getface: baseURL + \"/api/cloud/get\",\n  upload: baseURL + \"/upload\" };\n\n\nvar WS = {\n  channel: baaseWS + \"/chat-room-channel\" };exports.WS = WS;\n\n\nvar getKey = function getKey(params) {\n  return _util.default.flirt({\n    url: API.getKey,\n    data: params,\n    method: \"POST\" });\n\n};exports.getKey = getKey;\n\nvar checkUser = function checkUser(params) {\n  return _util.default.flirt({\n    url: API.checkUser,\n    data: params });\n\n};exports.checkUser = checkUser;\n\nvar getMorePage = function getMorePage(params) {\n  return _util.default.flirt({\n    url: API.more,\n    data: params });\n\n};exports.getMorePage = getMorePage;\n\nvar openRedPacket = function openRedPacket(params) {\n  return _util.default.flirt({\n    url: API.open,\n    data: params,\n    method: \"POST\" });\n\n};exports.openRedPacket = openRedPacket;\n\nvar send = function send(params) {\n  return _util.default.flirt({\n    url: API.send,\n    data: params,\n    method: \"POST\" });\n\n};exports.send = send;\n\nvar faceList = function faceList(params) {\n  return _util.default.flirt({\n    url: API.getface,\n    data: params,\n    method: \"POST\" });\n\n};exports.faceList = faceList;\n\nvar deleteMsg = function deleteMsg(params) {\n  return _util.default.flirt({\n    url: API.delete + params.oId,\n    data: {\n      apiKey: params.apiKey },\n\n    method: \"DELETE\" });\n\n};exports.deleteMsg = deleteMsg;\n\nvar getUserInfo = function getUserInfo(params) {\n  return _util.default.flirt({\n    url: API.getUserInfo + params });\n\n};exports.getUserInfo = getUserInfo;\n\nvar getLiveness = function getLiveness(params) {\n  return _util.default.flirt({\n    url: API.liveness,\n    data: params });\n\n};exports.getLiveness = getLiveness;\n\nvar getYesterdayLiveness = function getYesterdayLiveness(params) {\n  return _util.default.flirt({\n    url: API.ylra,\n    data: params });\n\n};exports.getYesterdayLiveness = getYesterdayLiveness;\n\nvar checkCollectedLiveness = function checkCollectedLiveness(params) {\n  return _util.default.flirt({\n    url: API.icl,\n    data: params });\n\n};exports.checkCollectedLiveness = checkCollectedLiveness;\n\nvar upload = function upload(params) {\n  return new Promise(function (resolve, reject) {\n    uni.uploadFile({\n      url: API.upload,\n      filePath: params,\n      name: 'file[]',\n      header: {\n        \"enctype\": \"multipart/form-data\" },\n\n      success: function success(res) {\n        resolve(res);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n\n};exports.upload = upload;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBpLmpzIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJiYWFzZVdTIiwiQVBJIiwiZ2V0S2V5IiwiY2hlY2tVc2VyIiwiZ2V0VXNlckluZm8iLCJlbW90aW9ucyIsImxpdmVuZXNzIiwibW9yZSIsInNlbmQiLCJkZWxldGUiLCJ5bHJhIiwiaWNsIiwib3BlbiIsImdldGZhY2UiLCJ1cGxvYWQiLCJXUyIsImNoYW5uZWwiLCJwYXJhbXMiLCJVVElMIiwiZmxpcnQiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiZ2V0TW9yZVBhZ2UiLCJvcGVuUmVkUGFja2V0IiwiZmFjZUxpc3QiLCJkZWxldGVNc2ciLCJvSWQiLCJhcGlLZXkiLCJnZXRMaXZlbmVzcyIsImdldFllc3RlcmRheUxpdmVuZXNzIiwiY2hlY2tDb2xsZWN0ZWRMaXZlbmVzcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidW5pIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIl0sIm1hcHBpbmdzIjoid1ZBQUEsNEU7QUFDQSxJQUFNQSxPQUFPLEdBQUcsaUJBQWhCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLGVBQWhCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHO0FBQ1hDLFFBQU0sRUFBRUgsT0FBTyxHQUFHLGFBRFA7QUFFWEksV0FBUyxFQUFFSixPQUFPLEdBQUcsV0FGVjtBQUdYSyxhQUFXLEVBQUVMLE9BQU8sR0FBRyxRQUhaO0FBSVhNLFVBQVEsRUFBRU4sT0FBTyxHQUFHLGlCQUpUO0FBS1hPLFVBQVEsRUFBRVAsT0FBTyxHQUFHLGdCQUxUO0FBTVhRLE1BQUksRUFBRVIsT0FBTyxHQUFHLGlCQU5MO0FBT1hTLE1BQUksRUFBRVQsT0FBTyxHQUFHLGlCQVBMO0FBUVhVLFFBQU0sRUFBRVYsT0FBTyxHQUFHLG9CQVJQLEVBUTZCO0FBQ3hDVyxNQUFJLEVBQUVYLE9BQU8sR0FBRyx5Q0FUTDtBQVVYWSxLQUFHLEVBQUVaLE9BQU8sR0FBRyxxQ0FWSjtBQVdYYSxNQUFJLEVBQUViLE9BQU8sR0FBRyw0QkFYTDtBQVlYYyxTQUFPLEVBQUVkLE9BQU8sR0FBRyxnQkFaUjtBQWFYZSxRQUFNLEVBQUVmLE9BQU8sR0FBRyxTQWJQLEVBQVo7OztBQWdCTyxJQUFNZ0IsRUFBRSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUVoQixPQUFPLEdBQUcsb0JBREYsRUFBWCxDOzs7QUFJQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBZSxNQUFNLEVBQUk7QUFDL0IsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNDLE1BRFE7QUFFakJtQixRQUFJLEVBQUVKLE1BRlc7QUFHakJLLFVBQU0sRUFBRSxNQUhTLEVBQVgsQ0FBUDs7QUFLQSxDQU5NLEM7O0FBUUEsSUFBTW5CLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFjLE1BQU0sRUFBSTtBQUNsQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRW5CLEdBQUcsQ0FBQ0UsU0FEUTtBQUVqQmtCLFFBQUksRUFBRUosTUFGVyxFQUFYLENBQVA7O0FBSUEsQ0FMTSxDOztBQU9BLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFOLE1BQU0sRUFBSTtBQUNwQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRW5CLEdBQUcsQ0FBQ00sSUFEUTtBQUVqQmMsUUFBSSxFQUFFSixNQUZXLEVBQVgsQ0FBUDs7QUFJQSxDQUxNLEM7O0FBT0EsSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBUCxNQUFNLEVBQUk7QUFDdEMsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNXLElBRFE7QUFFakJTLFFBQUksRUFBRUosTUFGVztBQUdqQkssVUFBTSxFQUFFLE1BSFMsRUFBWCxDQUFQOztBQUtBLENBTk0sQzs7QUFRQSxJQUFNZCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBUyxNQUFNLEVBQUk7QUFDN0IsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNPLElBRFE7QUFFakJhLFFBQUksRUFBRUosTUFGVztBQUdqQkssVUFBTSxFQUFFLE1BSFMsRUFBWCxDQUFQOztBQUtBLENBTk0sQzs7QUFRQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBUixNQUFNLEVBQUk7QUFDakMsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNZLE9BRFE7QUFFakJRLFFBQUksRUFBRUosTUFGVztBQUdqQkssVUFBTSxFQUFFLE1BSFMsRUFBWCxDQUFQOztBQUtBLENBTk0sQzs7QUFRQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBVCxNQUFNLEVBQUk7QUFDbEMsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNRLE1BQUosR0FBYVEsTUFBTSxDQUFDVSxHQURSO0FBRWpCTixRQUFJLEVBQUM7QUFDSk8sWUFBTSxFQUFDWCxNQUFNLENBQUNXLE1BRFYsRUFGWTs7QUFLakJOLFVBQU0sRUFBRSxRQUxTLEVBQVgsQ0FBUDs7QUFPQSxDQVJNLEM7O0FBVUEsSUFBTWxCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFhLE1BQU0sRUFBSTtBQUNwQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRW5CLEdBQUcsQ0FBQ0csV0FBSixHQUFrQmEsTUFETixFQUFYLENBQVA7O0FBR0EsQ0FKTSxDOztBQU1BLElBQU1ZLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFaLE1BQU0sRUFBRztBQUNuQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRW5CLEdBQUcsQ0FBQ0ssUUFEUTtBQUVqQmUsUUFBSSxFQUFFSixNQUZXLEVBQVgsQ0FBUDs7QUFJQSxDQUxNLEM7O0FBT0EsSUFBTWEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBYixNQUFNLEVBQUc7QUFDNUMsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNTLElBRFE7QUFFakJXLFFBQUksRUFBRUosTUFGVyxFQUFYLENBQVA7O0FBSUEsQ0FMTSxDOztBQU9BLElBQU1jLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQWQsTUFBTSxFQUFHO0FBQzlDLFNBQU9DLGNBQUtDLEtBQUwsQ0FBVztBQUNqQkMsT0FBRyxFQUFFbkIsR0FBRyxDQUFDVSxHQURRO0FBRWpCVSxRQUFJLEVBQUVKLE1BRlcsRUFBWCxDQUFQOztBQUlBLENBTE0sQzs7QUFPQSxJQUFNSCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBRyxNQUFNLEVBQUk7QUFDL0IsU0FBTyxJQUFJZSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDQyxPQUFHLENBQUNDLFVBQUosQ0FBZTtBQUNkaEIsU0FBRyxFQUFFbkIsR0FBRyxDQUFDYSxNQURLO0FBRWR1QixjQUFRLEVBQUVwQixNQUZJO0FBR2RxQixVQUFJLEVBQUUsUUFIUTtBQUlkQyxZQUFNLEVBQUM7QUFDTixtQkFBVSxxQkFESixFQUpPOztBQU9kQyxhQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtBQUNmUixlQUFPLENBQUNRLEdBQUQsQ0FBUDtBQUNBLE9BVGE7QUFVZEMsVUFBSSxFQUFFLGNBQUFDLEdBQUcsRUFBSTtBQUNaVCxjQUFNLENBQUNTLEdBQUQsQ0FBTjtBQUNBLE9BWmEsRUFBZjs7QUFjQSxHQWZNLENBQVA7O0FBaUJBLENBbEJNLEMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVVElMIGZyb20gJy4vdXRpbC5qcydcclxuY29uc3QgYmFzZVVSTCA9IFwiaHR0cHM6Ly9wd2wuaWN1XCJcclxuY29uc3QgYmFhc2VXUyA9IFwid3NzOi8vcHdsLmljdVwiXHJcbmNvbnN0IEFQSSA9IHtcclxuXHRnZXRLZXk6IGJhc2VVUkwgKyBcIi9hcGkvZ2V0S2V5XCIsXHJcblx0Y2hlY2tVc2VyOiBiYXNlVVJMICsgXCIvYXBpL3VzZXJcIixcclxuXHRnZXRVc2VySW5mbzogYmFzZVVSTCArIFwiL3VzZXIvXCIsXHJcblx0ZW1vdGlvbnM6IGJhc2VVUkwgKyBcIi91c2Vycy9lbW90aW9uc1wiLFxyXG5cdGxpdmVuZXNzOiBiYXNlVVJMICsgXCIvdXNlci9saXZlbmVzc1wiLFxyXG5cdG1vcmU6IGJhc2VVUkwgKyBcIi9jaGF0LXJvb20vbW9yZVwiLFxyXG5cdHNlbmQ6IGJhc2VVUkwgKyBcIi9jaGF0LXJvb20vc2VuZFwiLFxyXG5cdGRlbGV0ZTogYmFzZVVSTCArIFwiL2NoYXQtcm9vbS9yZXZva2UvXCIsIC8vL2NoYXQtcm9vbS9yZXZva2Uve+a2iOaBr29JZH1cclxuXHR5bHJhOiBiYXNlVVJMICsgXCIvYWN0aXZpdHkveWVzdGVyZGF5LWxpdmVuZXNzLXJld2FyZC1hcGlcIixcclxuXHRpY2w6IGJhc2VVUkwgKyBcIi9hcGkvYWN0aXZpdHkvaXMtY29sbGVjdGVkLWxpdmVuZXNzXCIsXHJcblx0b3BlbjogYmFzZVVSTCArIFwiL2NoYXQtcm9vbS9yZWQtcGFja2V0L29wZW5cIixcclxuXHRnZXRmYWNlOiBiYXNlVVJMICsgXCIvYXBpL2Nsb3VkL2dldFwiLFxyXG5cdHVwbG9hZDogYmFzZVVSTCArIFwiL3VwbG9hZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXUyA9IHtcclxuXHRjaGFubmVsOiBiYWFzZVdTICsgXCIvY2hhdC1yb29tLWNoYW5uZWxcIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEtleSA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkuZ2V0S2V5LFxyXG5cdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIlxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1VzZXIgPSBwYXJhbXMgPT4ge1xyXG5cdHJldHVybiBVVElMLmZsaXJ0KHtcclxuXHRcdHVybDogQVBJLmNoZWNrVXNlcixcclxuXHRcdGRhdGE6IHBhcmFtc1xyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb3JlUGFnZSA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkubW9yZSxcclxuXHRcdGRhdGE6IHBhcmFtc1xyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuUmVkUGFja2V0ID0gcGFyYW1zID0+IHtcclxuXHRyZXR1cm4gVVRJTC5mbGlydCh7XHJcblx0XHR1cmw6IEFQSS5vcGVuLFxyXG5cdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIlxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kID0gcGFyYW1zID0+IHtcclxuXHRyZXR1cm4gVVRJTC5mbGlydCh7XHJcblx0XHR1cmw6IEFQSS5zZW5kLFxyXG5cdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIlxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmYWNlTGlzdCA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkuZ2V0ZmFjZSxcclxuXHRcdGRhdGE6IHBhcmFtcyxcclxuXHRcdG1ldGhvZDogXCJQT1NUXCJcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTXNnID0gcGFyYW1zID0+IHtcclxuXHRyZXR1cm4gVVRJTC5mbGlydCh7XHJcblx0XHR1cmw6IEFQSS5kZWxldGUgKyBwYXJhbXMub0lkLFxyXG5cdFx0ZGF0YTp7XHJcblx0XHRcdGFwaUtleTpwYXJhbXMuYXBpS2V5XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kOiBcIkRFTEVURVwiXHJcblx0fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gcGFyYW1zID0+IHtcclxuXHRyZXR1cm4gVVRJTC5mbGlydCh7XHJcblx0XHR1cmw6IEFQSS5nZXRVc2VySW5mbyArIHBhcmFtcyxcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGl2ZW5lc3MgPSBwYXJhbXMgPT57XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkubGl2ZW5lc3MsXHJcblx0XHRkYXRhOiBwYXJhbXNcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0WWVzdGVyZGF5TGl2ZW5lc3MgPSBwYXJhbXMgPT57XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkueWxyYSxcclxuXHRcdGRhdGE6IHBhcmFtc1xyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvbGxlY3RlZExpdmVuZXNzID0gcGFyYW1zID0+e1xyXG5cdHJldHVybiBVVElMLmZsaXJ0KHtcclxuXHRcdHVybDogQVBJLmljbCxcclxuXHRcdGRhdGE6IHBhcmFtc1xyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWQgPSBwYXJhbXMgPT4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdHVybDogQVBJLnVwbG9hZCwgXHJcblx0XHRcdGZpbGVQYXRoOiBwYXJhbXMsXHJcblx0XHRcdG5hbWU6ICdmaWxlW10nLFxyXG5cdFx0XHRoZWFkZXI6e1xyXG5cdFx0XHRcdFwiZW5jdHlwZVwiOlwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXMpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IGVyciA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSlcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!****************************!*\
  !*** E:/pwl/utils/util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var flirt = function flirt(_ref)\n\n\n\n\n{var url = _ref.url,_ref$method = _ref.method,method = _ref$method === void 0 ? \"GET\" : _ref$method,data = _ref.data,header = _ref.header;\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: url,\n      method: method,\n      data: data,\n      header: header,\n      success: function success(res) {\n        resolve(res.data);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n};\n\nmodule.exports = {\n  flirt: flirt };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmbGlydCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVuaSIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFROzs7OztBQUtYLEtBSkZDLEdBSUUsUUFKRkEsR0FJRSxvQkFIRkMsTUFHRSxDQUhGQSxNQUdFLDRCQUhPLEtBR1AsZUFGRkMsSUFFRSxRQUZGQSxJQUVFLENBREZDLE1BQ0UsUUFERkEsTUFDRTtBQUNGLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2Q0MsT0FBRyxDQUFDQyxPQUFKLENBQVk7QUFDWFIsU0FBRyxFQUFFQSxHQURNO0FBRVhDLFlBQU0sRUFBRUEsTUFGRztBQUdYQyxVQUFJLEVBQUVBLElBSEs7QUFJWEMsWUFBTSxFQUFFQSxNQUpHO0FBS1hNLGFBQU8sRUFBRSxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2pCTCxlQUFPLENBQUNLLEdBQUcsQ0FBQ1IsSUFBTCxDQUFQO0FBQ0EsT0FQVTtBQVFYUyxVQUFJLEVBQUUsY0FBQ0MsR0FBRCxFQUFTO0FBQ2ROLGNBQU0sQ0FBQ00sR0FBRCxDQUFOO0FBQ0EsT0FWVSxFQUFaOztBQVlBLEdBYk0sQ0FBUDtBQWNBLENBcEJEOztBQXNCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCZixPQUFLLEVBQUxBLEtBRGdCLEVBQWpCIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmbGlydCA9IGZ1bmN0aW9uKHtcclxuXHR1cmwsXHJcblx0bWV0aG9kID0gXCJHRVRcIixcclxuXHRkYXRhLFxyXG5cdGhlYWRlclxyXG59KSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRoZWFkZXI6IGhlYWRlcixcclxuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRmbGlydFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*******************************************************************!*\
  !*** E:/pwl/node_modules/_spark-md5@3.0.2@spark-md5/spark-md5.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
  if (true) {
    // Node/CommonJS
    module.exports = factory();
  } else { var glob; }
})(function (undefined) {

  'use strict';

  /*
                 * Fastest md5 implementation around (JKM md5).
                 * Credits: Joseph Myers
                 *
                 * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
                 * @see http://jsperf.com/md5-shootout/7
                 */

  /* this function is much faster,
                      so if possible we use it. Some IEs
                      are the only ones I know of that
                      need the idiotic second function,
                      generated by an if clause.  */
  var add32 = function add32(a, b) {
    return a + b & 0xFFFFFFFF;
  },
  hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32(a << s | a >>> 32 - s, b);
  }

  function md5cycle(x, k) {
    var a = x[0],
    b = x[1],
    c = x[2],
    d = x[3];

    a += (b & c | ~b & d) + k[0] - 680876936 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[1] - 389564586 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[2] + 606105819 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[4] - 176418897 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[7] - 45705983 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[10] - 42063 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[13] - 40341101 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
    b = (b << 22 | b >>> 10) + c | 0;

    a += (b & d | c & ~d) + k[1] - 165796510 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[11] + 643717713 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[0] - 373897302 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[5] - 701558691 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[10] + 38016083 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[15] - 660478335 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[4] - 405537848 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[9] + 568446438 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[3] - 187363961 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[2] - 51403784 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
    b = (b << 20 | b >>> 12) + c | 0;

    a += (b ^ c ^ d) + k[5] - 378558 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[14] - 35309556 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[7] - 155497632 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[13] + 681279174 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[0] - 358537222 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[3] - 722521979 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[6] + 76029189 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[9] - 640364487 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[12] - 421815835 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[15] + 530742520 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[2] - 995338651 | 0;
    b = (b << 23 | b >>> 9) + c | 0;

    a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
    b = (b << 21 | b >>> 11) + c | 0;

    x[0] = a + x[0] | 0;
    x[1] = b + x[1] | 0;
    x[2] = c + x[2] | 0;
    x[3] = d + x[3] | 0;
  }

  function md5blk(s) {
    var md5blks = [],
    i; /* Andy King said do it this way. */

    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }

  function md5blk_array(a) {
    var md5blks = [],
    i; /* Andy King said do it this way. */

    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }
    return md5blks;
  }

  function md51(s) {
    var n = s.length,
    state = [1732584193, -271733879, -1732584194, 271733878],
    i,
    length,
    tail,
    tmp,
    lo,
    hi;

    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    length = s.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    }
    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }

    // Beware that the final length might not fit in 32 bits so we take care of that
    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;

    tail[14] = lo;
    tail[15] = hi;

    md5cycle(state, tail);
    return state;
  }

  function md51_array(a) {
    var n = a.length,
    state = [1732584193, -271733879, -1732584194, 271733878],
    i,
    length,
    tail,
    tmp,
    lo,
    hi;

    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    }

    // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
    // containing the last element of the parent array if the sub array specified starts
    // beyond the length of the parent array - weird.
    // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
    a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);

    length = a.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= a[i] << (i % 4 << 3);
    }

    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }

    // Beware that the final length might not fit in 32 bits so we take care of that
    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;

    tail[14] = lo;
    tail[15] = hi;

    md5cycle(state, tail);

    return state;
  }

  function rhex(n) {
    var s = '',
    j;
    for (j = 0; j < 4; j += 1) {
      s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
    }
    return s;
  }

  function hex(x) {
    var i;
    for (i = 0; i < x.length; i += 1) {
      x[i] = rhex(x[i]);
    }
    return x.join('');
  }

  // In some cases the fast add32 function cannot be used..
  if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
    add32 = function add32(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF),
      msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xFFFF;
    };
  }

  // ---------------------------------------------------

  /**
   * ArrayBuffer slice polyfill.
   *
   * @see https://github.com/ttaubert/node-arraybuffer-slice
   */

  if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
    (function () {
      function clamp(val, length) {
        val = val | 0 || 0;

        if (val < 0) {
          return Math.max(val + length, 0);
        }

        return Math.min(val, length);
      }

      ArrayBuffer.prototype.slice = function (from, to) {
        var length = this.byteLength,
        begin = clamp(from, length),
        end = length,
        num,
        target,
        targetArray,
        sourceArray;

        if (to !== undefined) {
          end = clamp(to, length);
        }

        if (begin > end) {
          return new ArrayBuffer(0);
        }

        num = end - begin;
        target = new ArrayBuffer(num);
        targetArray = new Uint8Array(target);

        sourceArray = new Uint8Array(this, begin, num);
        targetArray.set(sourceArray);

        return target;
      };
    })();
  }

  // ---------------------------------------------------

  /**
   * Helpers.
   */

  function toUtf8(str) {
    if (/[\u0080-\uFFFF]/.test(str)) {
      str = unescape(encodeURIComponent(str));
    }

    return str;
  }

  function utf8Str2ArrayBuffer(str, returnUInt8Array) {
    var length = str.length,
    buff = new ArrayBuffer(length),
    arr = new Uint8Array(buff),
    i;

    for (i = 0; i < length; i += 1) {
      arr[i] = str.charCodeAt(i);
    }

    return returnUInt8Array ? arr : buff;
  }

  function arrayBuffer2Utf8Str(buff) {
    return String.fromCharCode.apply(null, new Uint8Array(buff));
  }

  function concatenateArrayBuffers(first, second, returnUInt8Array) {
    var result = new Uint8Array(first.byteLength + second.byteLength);

    result.set(new Uint8Array(first));
    result.set(new Uint8Array(second), first.byteLength);

    return returnUInt8Array ? result : result.buffer;
  }

  function hexToBinaryString(hex) {
    var bytes = [],
    length = hex.length,
    x;

    for (x = 0; x < length - 1; x += 2) {
      bytes.push(parseInt(hex.substr(x, 2), 16));
    }

    return String.fromCharCode.apply(String, bytes);
  }

  // ---------------------------------------------------

  /**
   * SparkMD5 OOP implementation.
   *
   * Use this class to perform an incremental md5, otherwise use the
   * static methods instead.
   */

  function SparkMD5() {
    // call reset to init the instance
    this.reset();
  }

  /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
  SparkMD5.prototype.append = function (str) {
    // Converts the string to utf8 bytes if necessary
    // Then append as binary
    this.appendBinary(toUtf8(str));

    return this;
  };

  /**
      * Appends a binary string.
      *
      * @param {String} contents The binary string to be appended
      *
      * @return {SparkMD5} The instance itself
      */
  SparkMD5.prototype.appendBinary = function (contents) {
    this._buff += contents;
    this._length += contents.length;

    var length = this._buff.length,
    i;

    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
    }

    this._buff = this._buff.substring(i - 64);

    return this;
  };

  /**
      * Finishes the incremental computation, reseting the internal state and
      * returning the result.
      *
      * @param {Boolean} raw True to get the raw string, false to get the hex string
      *
      * @return {String} The result
      */
  SparkMD5.prototype.end = function (raw) {
    var buff = this._buff,
    length = buff.length,
    i,
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ret;

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
    }

    this._finish(tail, length);
    ret = hex(this._hash);

    if (raw) {
      ret = hexToBinaryString(ret);
    }

    this.reset();

    return ret;
  };

  /**
      * Resets the internal state of the computation.
      *
      * @return {SparkMD5} The instance itself
      */
  SparkMD5.prototype.reset = function () {
    this._buff = '';
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];

    return this;
  };

  /**
      * Gets the internal state of the computation.
      *
      * @return {Object} The state
      */
  SparkMD5.prototype.getState = function () {
    return {
      buff: this._buff,
      length: this._length,
      hash: this._hash.slice() };

  };

  /**
      * Gets the internal state of the computation.
      *
      * @param {Object} state The state
      *
      * @return {SparkMD5} The instance itself
      */
  SparkMD5.prototype.setState = function (state) {
    this._buff = state.buff;
    this._length = state.length;
    this._hash = state.hash;

    return this;
  };

  /**
      * Releases memory used by the incremental buffer and other additional
      * resources. If you plan to use the instance again, use reset instead.
      */
  SparkMD5.prototype.destroy = function () {
    delete this._hash;
    delete this._buff;
    delete this._length;
  };

  /**
      * Finish the final calculation based on the tail.
      *
      * @param {Array}  tail   The tail (will be modified)
      * @param {Number} length The length of the remaining buffer
      */
  SparkMD5.prototype._finish = function (tail, length) {
    var i = length,
    tmp,
    lo,
    hi;

    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(this._hash, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }

    // Do the final computation based on the tail and length
    // Beware that the final length may not fit in 32 bits so we take care of that
    tmp = this._length * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;

    tail[14] = lo;
    tail[15] = hi;
    md5cycle(this._hash, tail);
  };

  /**
      * Performs the md5 hash on a string.
      * A conversion will be applied if utf8 string is detected.
      *
      * @param {String}  str The string
      * @param {Boolean} [raw] True to get the raw string, false to get the hex string
      *
      * @return {String} The result
      */
  SparkMD5.hash = function (str, raw) {
    // Converts the string to utf8 bytes if necessary
    // Then compute it using the binary function
    return SparkMD5.hashBinary(toUtf8(str), raw);
  };

  /**
      * Performs the md5 hash on a binary string.
      *
      * @param {String}  content The binary string
      * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
      *
      * @return {String} The result
      */
  SparkMD5.hashBinary = function (content, raw) {
    var hash = md51(content),
    ret = hex(hash);

    return raw ? hexToBinaryString(ret) : ret;
  };

  // ---------------------------------------------------

  /**
   * SparkMD5 OOP implementation for array buffers.
   *
   * Use this class to perform an incremental md5 ONLY for array buffers.
   */
  SparkMD5.ArrayBuffer = function () {
    // call reset to init the instance
    this.reset();
  };

  /**
      * Appends an array buffer.
      *
      * @param {ArrayBuffer} arr The array to be appended
      *
      * @return {SparkMD5.ArrayBuffer} The instance itself
      */
  SparkMD5.ArrayBuffer.prototype.append = function (arr) {
    var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
    length = buff.length,
    i;

    this._length += arr.byteLength;

    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
    }

    this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

    return this;
  };

  /**
      * Finishes the incremental computation, reseting the internal state and
      * returning the result.
      *
      * @param {Boolean} raw True to get the raw string, false to get the hex string
      *
      * @return {String} The result
      */
  SparkMD5.ArrayBuffer.prototype.end = function (raw) {
    var buff = this._buff,
    length = buff.length,
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    i,
    ret;

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff[i] << (i % 4 << 3);
    }

    this._finish(tail, length);
    ret = hex(this._hash);

    if (raw) {
      ret = hexToBinaryString(ret);
    }

    this.reset();

    return ret;
  };

  /**
      * Resets the internal state of the computation.
      *
      * @return {SparkMD5.ArrayBuffer} The instance itself
      */
  SparkMD5.ArrayBuffer.prototype.reset = function () {
    this._buff = new Uint8Array(0);
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];

    return this;
  };

  /**
      * Gets the internal state of the computation.
      *
      * @return {Object} The state
      */
  SparkMD5.ArrayBuffer.prototype.getState = function () {
    var state = SparkMD5.prototype.getState.call(this);

    // Convert buffer to a string
    state.buff = arrayBuffer2Utf8Str(state.buff);

    return state;
  };

  /**
      * Gets the internal state of the computation.
      *
      * @param {Object} state The state
      *
      * @return {SparkMD5.ArrayBuffer} The instance itself
      */
  SparkMD5.ArrayBuffer.prototype.setState = function (state) {
    // Convert string to buffer
    state.buff = utf8Str2ArrayBuffer(state.buff, true);

    return SparkMD5.prototype.setState.call(this, state);
  };

  SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

  SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

  /**
                                                                        * Performs the md5 hash on an array buffer.
                                                                        *
                                                                        * @param {ArrayBuffer} arr The array buffer
                                                                        * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
                                                                        *
                                                                        * @return {String} The result
                                                                        */
  SparkMD5.ArrayBuffer.hash = function (arr, raw) {
    var hash = md51_array(new Uint8Array(arr)),
    ret = hex(hash);

    return raw ? hexToBinaryString(ret) : ret;
  };

  return SparkMD5;
});

/***/ }),
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/*!**********************************************!*\
  !*** E:/pwl/pages/chat/chat.vue?mpType=page ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page */ 13);\n/* harmony import */ var _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js&mpType=page */ 37);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e057ff54\",\n  null,\n  false,\n  _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/chat.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUwNTdmZjU0JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTA1N2ZmNTRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC9jaGF0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!****************************************************************************************!*\
  !*** E:/pwl/pages/chat/chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/chat/chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = { mpHtml: __webpack_require__(/*! @/components/mp-html/mp-html.vue */ 15).default }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _vm._$s(1, "i", _vm.isSocketClose)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(1, "sc", "SocketCloseMsg"),
              attrs: { _i: 1 }
            },
            [
              _vm._v(_vm._$s(1, "t0-0", _vm._s(_vm.JoinChatTime))),
              _c("text", {
                staticClass: _vm._$s(2, "sc", "textLink"),
                attrs: { _i: 2 },
                on: {
                  click: function($event) {
                    return _vm.initChat()
                  }
                }
              })
            ]
          )
        : _vm._e(),
      _vm._$s(3, "i", _vm.content.length > 0)
        ? _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "contentBox"), attrs: { _i: 3 } },
            [
              _vm._l(_vm._$s(4, "f", { forItems: _vm.content }), function(
                item,
                index,
                $20,
                $30
              ) {
                return _c(
                  "view",
                  {
                    key: _vm._$s(4, "f", {
                      forIndex: $20,
                      key:
                        (item.type || "msg") +
                        "_" +
                        item.oId +
                        (item.whoGot || "")
                    }),
                    staticClass: _vm._$s("4-" + $30, "sc", "msgInfo"),
                    class: _vm._$s("4-" + $30, "c", {
                      isYou: _vm.data.userName == item.userName ? true : false
                    }),
                    attrs: { _i: "4-" + $30 }
                  },
                  [
                    _vm._$s(
                      "5-" + $30,
                      "i",
                      item.type != "redPacketStatus" && !item.hide
                    )
                      ? [
                          _vm._$s(
                            "6-" + $30,
                            "i",
                            _vm.data.userName != item.userName
                          )
                            ? _c("image", {
                                staticClass: _vm._$s(
                                  "6-" + $30,
                                  "sc",
                                  "userAvatar"
                                ),
                                attrs: {
                                  src: _vm._$s(
                                    "6-" + $30,
                                    "a-src",
                                    item.userAvatarURL
                                  ),
                                  _i: "6-" + $30
                                },
                                on: {
                                  longpress: function($event) {
                                    return _vm.atThis(item.userName)
                                  },
                                  click: function($event) {
                                    return _vm.toUser(item.userName)
                                  }
                                }
                              })
                            : _vm._e(),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "7-" + $30,
                                "sc",
                                "MsgDetailBox"
                              ),
                              attrs: {
                                "data-oid": _vm._$s(
                                  "7-" + $30,
                                  "a-data-oid",
                                  item.oId
                                ),
                                "data-msg": _vm._$s(
                                  "7-" + $30,
                                  "a-data-msg",
                                  item.content
                                ),
                                "data-username": _vm._$s(
                                  "7-" + $30,
                                  "a-data-username",
                                  item.userName
                                ),
                                _i: "7-" + $30
                              },
                              on: { longpress: _vm.longpress }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "8-" + $30,
                                    "sc",
                                    "msgBox"
                                  ),
                                  attrs: { _i: "8-" + $30 }
                                },
                                [
                                  _vm._$s(
                                    "9-" + $30,
                                    "i",
                                    _vm.data.userName != item.userName
                                  )
                                    ? [
                                        _vm._$s(
                                          "10-" + $30,
                                          "i",
                                          item.userNickname
                                        )
                                          ? _c(
                                              "view",
                                              {
                                                staticClass: _vm._$s(
                                                  "10-" + $30,
                                                  "sc",
                                                  "userName"
                                                ),
                                                attrs: { _i: "10-" + $30 }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._$s(
                                                    "10-" + $30,
                                                    "t0-0",
                                                    _vm._s(item.userNickname)
                                                  ) +
                                                    _vm._$s(
                                                      "10-" + $30,
                                                      "t0-1",
                                                      _vm._s(item.userName)
                                                    )
                                                )
                                              ]
                                            )
                                          : _c(
                                              "view",
                                              {
                                                staticClass: _vm._$s(
                                                  "11-" + $30,
                                                  "sc",
                                                  "userName"
                                                ),
                                                attrs: { _i: "11-" + $30 }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._$s(
                                                    "11-" + $30,
                                                    "t0-0",
                                                    _vm._s(item.userName)
                                                  )
                                                )
                                              ]
                                            )
                                      ]
                                    : _vm._e(),
                                  _vm._$s("12-" + $30, "i", item.isMoney)
                                    ? _c(
                                        "view",
                                        {
                                          attrs: { _i: "12-" + $30 },
                                          on: {
                                            click: function($event) {
                                              return _vm.getMoney(item.oId)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "view",
                                            {
                                              staticClass: _vm._$s(
                                                "13-" + $30,
                                                "sc",
                                                "red-packet"
                                              ),
                                              attrs: { _i: "13-" + $30 }
                                            },
                                            [
                                              _c("view", {
                                                staticClass: _vm._$s(
                                                  "14-" + $30,
                                                  "sc",
                                                  "rp-header"
                                                ),
                                                attrs: { _i: "14-" + $30 }
                                              }),
                                              _c(
                                                "view",
                                                {
                                                  staticClass: _vm._$s(
                                                    "15-" + $30,
                                                    "sc",
                                                    "rp-main"
                                                  ),
                                                  attrs: { _i: "15-" + $30 }
                                                },
                                                [
                                                  _c("view", {
                                                    staticClass: _vm._$s(
                                                      "16-" + $30,
                                                      "sc",
                                                      "open"
                                                    ),
                                                    attrs: { _i: "16-" + $30 }
                                                  }),
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "17-" + $30,
                                                        "sc",
                                                        "rp-msg"
                                                      ),
                                                      attrs: { _i: "17-" + $30 }
                                                    },
                                                    [
                                                      _c("view", [
                                                        _vm._v(
                                                          _vm._$s(
                                                            "18-" + $30,
                                                            "t0-0",
                                                            _vm._s(
                                                              item.content.msg
                                                            )
                                                          )
                                                        )
                                                      ]),
                                                      _c("view", [
                                                        _vm._v(
                                                          _vm._$s(
                                                            "19-" + $30,
                                                            "t0-0",
                                                            _vm._s(
                                                              _vm.defaultTitle[
                                                                item.content
                                                                  .type
                                                              ]
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    : _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "20-" + $30,
                                            "sc",
                                            "msgContent"
                                          ),
                                          attrs: { _i: "20-" + $30 }
                                        },
                                        [
                                          _c("mp-html", {
                                            attrs: {
                                              "container-style": "MessageBox",
                                              "copy-link": false,
                                              content: item.content,
                                              "show-img-menu": false,
                                              _i: "21-" + $30
                                            },
                                            on: {
                                              load: function($event) {
                                                return _vm.scrollToBottom()
                                              },
                                              ready: function($event) {
                                                return _vm.scrollToBottom()
                                              },
                                              linktap: _vm.showLink
                                            }
                                          })
                                        ],
                                        1
                                      )
                                ],
                                2
                              ),
                              _vm._$s(
                                "22-" + $30,
                                "i",
                                _vm.content.length > 2 &&
                                  _vm.firstMsg.content ==
                                    _vm.secondMsg.content &&
                                  _vm.firstMsg.oId == item.oId &&
                                  item.userName != _vm.data.userName
                              )
                                ? _c("view", {
                                    staticClass: _vm._$s(
                                      "22-" + $30,
                                      "sc",
                                      "humanNature"
                                    ),
                                    attrs: { _i: "22-" + $30 },
                                    on: {
                                      click: function($event) {
                                        return _vm.SendMsg(item.content)
                                      }
                                    }
                                  })
                                : _vm._e()
                            ]
                          ),
                          _vm._$s(
                            "23-" + $30,
                            "i",
                            _vm.data.userName == item.userName
                          )
                            ? _c("image", {
                                staticClass: _vm._$s(
                                  "23-" + $30,
                                  "sc",
                                  "userAvatar"
                                ),
                                attrs: {
                                  src: _vm._$s(
                                    "23-" + $30,
                                    "a-src",
                                    item.userAvatarURL
                                  ),
                                  _i: "23-" + $30
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.toUser(item.userName)
                                  }
                                }
                              })
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._$s("24-" + $30, "i", item.type == "redPacketStatus")
                      ? [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "25-" + $30,
                                "sc",
                                "redPacketinfo"
                              ),
                              attrs: { _i: "25-" + $30 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "25-" + $30,
                                  "t0-0",
                                  _vm._s(item.whoGot)
                                ) +
                                  _vm._$s(
                                    "25-" + $30,
                                    "t0-1",
                                    _vm._s(item.whoGive)
                                  )
                              ),
                              _c("view", {
                                attrs: { _i: "26-" + $30 },
                                on: {
                                  click: function($event) {
                                    return _vm.getMoney(item.oId)
                                  }
                                }
                              }),
                              _vm._v(
                                _vm._$s("25-" + $30, "t2-0", _vm._s(item.got)) +
                                  _vm._$s(
                                    "25-" + $30,
                                    "t2-1",
                                    _vm._s(item.count)
                                  )
                              )
                            ]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              }),
              _c("view", { attrs: { id: "BottomView", _i: 27 } })
            ],
            2
          )
        : _vm._e(),
      _c(
        "view",
        { staticClass: _vm._$s(28, "sc", "sendBox"), attrs: { _i: 28 } },
        [
          _c("view", {
            staticClass: _vm._$s(29, "sc", "livenessLine"),
            style: _vm._$s(29, "s", { width: _vm.liveness + "%" }),
            attrs: { _i: 29 }
          }),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.msg,
                expression: "msg"
              }
            ],
            staticClass: _vm._$s(30, "sc", "chat-input"),
            attrs: { focus: _vm._$s(30, "a-focus", _vm.isSend), _i: 30 },
            domProps: { value: _vm._$s(30, "v-model", _vm.msg) },
            on: {
              focus: function($event) {
                return _vm.onInputFocus()
              },
              blur: function($event) {
                return _vm.noSend()
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.msg = $event.target.value
              }
            }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(31, "sc", "menuBox"), attrs: { _i: 31 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(32, "sc", "iconBtn"),
                  attrs: { _i: 32 },
                  on: {
                    click: function($event) {
                      return _vm.toRedPacket()
                    }
                  }
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        33,
                        "a-src",
                        __webpack_require__(/*! ../../static/icon/hongbao.png */ 33)
                      ),
                      _i: 33
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(34, "sc", "iconBtn"),
                  attrs: { _i: 34 },
                  on: {
                    click: function($event) {
                      return _vm.toggleFace()
                    }
                  }
                },
                [
                  _c("image", {
                    attrs: { src: _vm._$s(35, "a-src", _vm.emojeSrc), _i: 35 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(36, "sc", "iconBtn"),
                  attrs: { _i: 36 },
                  on: {
                    click: function($event) {
                      return _vm.getImage()
                    }
                  }
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        37,
                        "a-src",
                        __webpack_require__(/*! ../../static/icon/tupian.png */ 34)
                      ),
                      _i: 37
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(38, "sc", "iconBtn"),
                  attrs: { _i: 38 },
                  on: {
                    click: function($event) {
                      return _vm.toggleVoice()
                    }
                  }
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        39,
                        "a-src",
                        __webpack_require__(/*! ../../static/icon/yuyin.png */ 35)
                      ),
                      _i: 39
                    }
                  })
                ]
              )
            ]
          ),
          _c(
            "view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm._$s(40, "v-show", _vm.isShowFace),
                  expression: "_$s(40,'v-show',isShowFace)"
                }
              ],
              staticClass: _vm._$s(40, "sc", "faceBox"),
              attrs: { _i: 40 }
            },
            _vm._l(_vm._$s(41, "f", { forItems: _vm.face }), function(
              item,
              index,
              $21,
              $31
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(41, "f", { forIndex: $21, key: index }),
                  staticClass: _vm._$s("41-" + $31, "sc", "face-item"),
                  attrs: { _i: "41-" + $31 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s("42-" + $31, "sc", "face-item"),
                    attrs: {
                      src: _vm._$s("42-" + $31, "a-src", item.url),
                      _i: "42-" + $31
                    },
                    on: {
                      click: function($event) {
                        return _vm.sendFace(item.preUrl)
                      }
                    }
                  })
                ]
              )
            }),
            0
          ),
          _c(
            "view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm._$s(43, "v-show", _vm.isSendVoice),
                  expression: "_$s(43,'v-show',isSendVoice)"
                }
              ],
              staticClass: _vm._$s(43, "sc", "faceBox"),
              attrs: { _i: 43 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(44, "sc", "voice-btn"),
                  attrs: { _i: 44 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(45, "sc", "voice-time"),
                      attrs: { _i: 45 }
                    },
                    [_vm._v(_vm._$s(45, "t0-0", _vm._s(_vm.voiceTime)))]
                  ),
                  _c("image", {
                    staticClass: _vm._$s(46, "sc", "voice-img"),
                    attrs: {
                      src: _vm._$s(
                        46,
                        "a-src",
                        __webpack_require__(/*! ../../static/icon/yuyinbtn.png */ 36)
                      ),
                      _i: 46
                    },
                    on: {
                      touchstart: function($event) {
                        return _vm.toVoice(0)
                      },
                      touchend: function($event) {
                        return _vm.toVoice(1)
                      }
                    }
                  })
                ]
              )
            ]
          ),
          _c("button", {
            staticClass: _vm._$s(47, "sc", "sendBtn"),
            attrs: { _i: 47 },
            on: {
              touchend: function($event) {
                $event.preventDefault()
                return _vm.SendMsg()
              }
            }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(48, "sc", "longTap-list"),
          style: _vm._$s(48, "s", {
            top: _vm.clientY + "px",
            left: _vm.clientX + "px"
          }),
          attrs: { _i: 48 }
        },
        [
          _c("view", {
            staticClass: _vm._$s(49, "sc", "longTap-item"),
            attrs: { _i: 49 },
            on: {
              click: function($event) {
                return _vm.longTapEvent(0)
              }
            }
          }),
          _vm._$s(
            50,
            "i",
            _vm.data.userRole == "纪律委员" ||
              _vm.data.userRole == "OP" ||
              _vm.data.userRole == "管理员"
          )
            ? _c("view", {
                staticClass: _vm._$s(50, "sc", "longTap-item"),
                attrs: { _i: 50 },
                on: {
                  click: function($event) {
                    return _vm.longTapEvent(1)
                  }
                }
              })
            : _vm._$s(51, "e", _vm.data.userName == _vm.longData.userName)
            ? _c("view", {
                staticClass: _vm._$s(51, "sc", "longTap-item"),
                attrs: { _i: 51 },
                on: {
                  click: function($event) {
                    return _vm.longTapEvent(1)
                  }
                }
              })
            : _vm._e(),
          _c("view", {
            staticClass: _vm._$s(52, "sc", "longTap-item"),
            attrs: { _i: 52 },
            on: {
              click: function($event) {
                return _vm.longTapEvent(2)
              }
            }
          })
        ]
      ),
      _c(
        "view",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm._$s(53, "v-show", _vm.showRedPacketData),
              expression: "_$s(53,'v-show',showRedPacketData)"
            }
          ],
          staticClass: _vm._$s(53, "sc", "redPacketBg"),
          attrs: { _i: 53 },
          on: {
            click: function($event) {
              $event.stopPropagation()
              _vm.showRedPacketData = false
            }
          }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(54, "sc", "redPacketbox"),
              attrs: { _i: 54 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(55, "sc", "redPacketInfo"),
                  attrs: { _i: 55 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(56, "sc", "rpi-user"),
                      attrs: { _i: 56 }
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s(57, "sc", "rpi-user-img"),
                        attrs: {
                          src: _vm._$s(
                            57,
                            "a-src",
                            _vm.redpacketData.info.userAvatarURL
                          ),
                          _i: 57
                        }
                      }),
                      _vm._v(
                        _vm._$s(
                          56,
                          "t1-0",
                          _vm._s(_vm.redpacketData.info.userName)
                        )
                      )
                    ]
                  ),
                  _vm._$s(
                    58,
                    "i",
                    _vm.redpacketData.recivers &&
                      _vm.redpacketData.recivers.length > 0 &&
                      _vm.redpacketData.recivers[0] != ""
                  )
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(58, "sc", "rpi-recivers"),
                          attrs: { _i: 58 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              58,
                              "t0-0",
                              _vm._s(_vm.redpacketData.recivers.join(","))
                            )
                          )
                        ]
                      )
                    : _c(
                        "view",
                        {
                          staticClass: _vm._$s(59, "sc", "rpi-recivers"),
                          attrs: { _i: 59 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              59,
                              "t0-0",
                              _vm._s(_vm.redpacketData.info.msg)
                            )
                          )
                        ]
                      ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(60, "sc", "rpi-msg"),
                      attrs: { _i: 60 }
                    },
                    [_vm._v(_vm._$s(60, "t0-0", _vm._s(_vm.redpacketData.msg)))]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(61, "sc", "rpi-count"),
                      attrs: { _i: 61 }
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          61,
                          "t0-0",
                          _vm._s(_vm.redpacketData.info.got)
                        ) +
                          _vm._$s(
                            61,
                            "t0-1",
                            _vm._s(_vm.redpacketData.info.count)
                          )
                      )
                    ]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(62, "sc", "redPacketList"),
                  attrs: { _i: 62 }
                },
                _vm._l(
                  _vm._$s(63, "f", { forItems: _vm.redpacketData.who }),
                  function(item, index, $22, $32) {
                    return _c(
                      "view",
                      {
                        key: _vm._$s(63, "f", { forIndex: $22, key: index }),
                        staticClass: _vm._$s("63-" + $32, "sc", "rpl-item"),
                        attrs: { _i: "63-" + $32 }
                      },
                      [
                        _c("image", {
                          staticClass: _vm._$s("64-" + $32, "sc", "rpl-img"),
                          attrs: {
                            src: _vm._$s("64-" + $32, "a-src", item.avatar),
                            _i: "64-" + $32
                          }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("65-" + $32, "sc", "rpl-info"),
                            attrs: { _i: "65-" + $32 }
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "66-" + $32,
                                  "sc",
                                  "rpl-name"
                                ),
                                attrs: { _i: "66-" + $32 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "66-" + $32,
                                    "t0-0",
                                    _vm._s(item.userName)
                                  )
                                )
                              ]
                            ),
                            _vm._$s("67-" + $32, "i", item.isMax)
                              ? _c("view", {
                                  staticClass: _vm._$s(
                                    "67-" + $32,
                                    "sc",
                                    "rpl-tag isMax"
                                  ),
                                  attrs: { _i: "67-" + $32 }
                                })
                              : _vm._e(),
                            _vm._$s("68-" + $32, "i", item.is0)
                              ? _c("view", {
                                  staticClass: _vm._$s(
                                    "68-" + $32,
                                    "sc",
                                    "rpl-tag is0"
                                  ),
                                  attrs: { _i: "68-" + $32 }
                                })
                              : _vm._e(),
                            _vm._$s("69-" + $32, "i", item.isNeg)
                              ? _c("view", {
                                  staticClass: _vm._$s(
                                    "69-" + $32,
                                    "sc",
                                    "rpl-tag isNeg"
                                  ),
                                  attrs: { _i: "69-" + $32 }
                                })
                              : _vm._e(),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "70-" + $32,
                                  "sc",
                                  "rpl-time"
                                ),
                                attrs: { _i: "70-" + $32 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "70-" + $32,
                                    "t0-0",
                                    _vm._s(item.time)
                                  )
                                )
                              ]
                            )
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              "71-" + $32,
                              "sc",
                              "rpl-money"
                            ),
                            attrs: { _i: "71-" + $32 }
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                "71-" + $32,
                                "t0-0",
                                _vm._s(item.userMoney)
                              )
                            )
                          ]
                        )
                      ]
                    )
                  }
                ),
                0
              )
            ]
          )
        ]
      ),
      _vm._$s(72, "i", _vm.isShowToBottom)
        ? _c("view", {
            staticClass: _vm._$s(72, "sc", "backTobottom"),
            style: _vm._$s(72, "s", {
              bottom: _vm.isShowFace || _vm.isSendVoice ? "302px" : "102px"
            }),
            attrs: { _i: 72 },
            on: {
              click: function($event) {
                return _vm.toBottom()
              }
            }
          })
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!*********************************************!*\
  !*** E:/pwl/components/mp-html/mp-html.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mp_html_vue_vue_type_template_id_35fd0930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mp-html.vue?vue&type=template&id=35fd0930& */ 16);\n/* harmony import */ var _mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mp-html.vue?vue&type=script&lang=js& */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mp_html_vue_vue_type_template_id_35fd0930___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mp_html_vue_vue_type_template_id_35fd0930___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mp_html_vue_vue_type_template_id_35fd0930___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/mp-html/mp-html.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDs7O0FBR3REO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxrRkFBTTtBQUNSLEVBQUUsMkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21wLWh0bWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1ZmQwOTMwJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXAtaHRtbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21wLWh0bWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbXAtaHRtbC9tcC1odG1sLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!****************************************************************************!*\
  !*** E:/pwl/components/mp-html/mp-html.vue?vue&type=template&id=35fd0930& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_35fd0930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mp-html.vue?vue&type=template&id=35fd0930& */ 17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_35fd0930___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_35fd0930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_35fd0930___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_35fd0930___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 17 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/components/mp-html/mp-html.vue?vue&type=template&id=35fd0930& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      class: _vm._$s(0, "c", (_vm.selectable ? "_select " : "") + "_root"),
      style: _vm._$s(0, "s", _vm.containerStyle),
      attrs: { id: "_root", _i: 0 }
    },
    [
      _vm._$s(1, "i", !_vm.nodes[0])
        ? _vm._t("default", null, { _i: 1 })
        : _c("node", {
            attrs: {
              childs: _vm.nodes,
              opts: [
                _vm.lazyLoad,
                _vm.loadingImg,
                _vm.errorImg,
                _vm.showImgMenu
              ],
              name: "span",
              _i: 2
            }
          })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 18 */
/*!**********************************************************************!*\
  !*** E:/pwl/components/mp-html/mp-html.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mp-html.vue?vue&type=script&lang=js& */ 19);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtpQixDQUFnQixxa0JBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21wLWh0bWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tcC1odG1sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/components/mp-html/mp-html.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _node2 = _interopRequireDefault(__webpack_require__(/*! ./node/node */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\r\n * mp-html v2.2.0\r\n * @description 富文本组件\r\n * @tutorial https://github.com/jin-yufeng/mp-html\r\n * @property {String} container-style 容器的样式\r\n * @property {String} content 用于渲染的 html 字符串\r\n * @property {Boolean} copy-link 是否允许外部链接被点击时自动复制\r\n * @property {String} domain 主域名，用于拼接链接\r\n * @property {String} error-img 图片出错时的占位图链接\r\n * @property {Boolean} lazy-load 是否开启图片懒加载\r\n * @property {string} loading-img 图片加载过程中的占位图链接\r\n * @property {Boolean} pause-video 是否在播放一个视频时自动暂停其他视频\r\n * @property {Boolean} preview-img 是否允许图片被点击时自动预览\r\n * @property {Boolean} scroll-table 是否给每个表格添加一个滚动层使其能单独横向滚动\r\n * @property {Boolean | String} selectable 是否开启长按复制\r\n * @property {Boolean} set-title 是否将 title 标签的内容设置到页面标题\r\n * @property {Boolean} show-img-menu 是否允许图片被长按时显示菜单\r\n * @property {Object} tag-style 标签的默认样式\r\n * @property {Boolean | Number} use-anchor 是否使用锚点链接\r\n * @event {Function} load dom 结构加载完毕时触发\r\n * @event {Function} ready 所有图片加载完毕时触发\r\n * @event {Function} imgTap 图片被点击时触发\r\n * @event {Function} linkTap 链接被点击时触发\r\n * @event {Function} error 媒体加载出错时触发\r\n */var plugins = [];var Parser = __webpack_require__(/*! ./parser */ 32);var _default = { name: 'mp-html', data: function data() {return { nodes: [] };}, props: { containerStyle: { type: String, default: '' }, content: String, copyLink: { type: [Boolean, String], default: true }, domain: String, errorImg: { type: String, default: '' }, lazyLoad: { type: [Boolean, String], default: false }, loadingImg: {\n      type: String,\n      default: '' },\n\n    pauseVideo: {\n      type: [Boolean, String],\n      default: true },\n\n    previewImg: {\n      type: [Boolean, String],\n      default: true },\n\n    scrollTable: [Boolean, String],\n    selectable: [Boolean, String],\n    setTitle: {\n      type: [Boolean, String],\n      default: true },\n\n    showImgMenu: {\n      type: [Boolean, String],\n      default: true },\n\n    tagStyle: Object,\n    useAnchor: [Boolean, Number] },\n\n\n  components: {\n    node: _node2.default },\n\n\n  watch: {\n    content: function content(_content) {\n      this.setContent(_content);\n    } },\n\n  created: function created() {\n    this.plugins = [];\n    for (var i = plugins.length; i--;) {\n      this.plugins.push(new plugins[i](this));\n    }\n  },\n  mounted: function mounted() {\n    if (this.content && !this.nodes.length) {\n      this.setContent(this.content);\n    }\n  },\n  beforeDestroy: function beforeDestroy() {\n    this._hook('onDetached');\n    clearInterval(this._timer);\n  },\n  methods: {\n    /**\r\n              * @description 将锚点跳转的范围限定在一个 scroll-view 内\r\n              * @param {Object} page scroll-view 所在页面的示例\r\n              * @param {String} selector scroll-view 的选择器\r\n              * @param {String} scrollTop scroll-view scroll-top 属性绑定的变量名\r\n              */\n    in: function _in(page, selector, scrollTop) {\n\n      if (page && selector && scrollTop) {\n        this._in = {\n          page: page,\n          selector: selector,\n          scrollTop: scrollTop };\n\n      }\n\n    },\n\n    /**\r\n        * @description 锚点跳转\r\n        * @param {String} id 要跳转的锚点 id\r\n        * @param {Number} offset 跳转位置的偏移量\r\n        * @returns {Promise}\r\n        */\n    navigateTo: function navigateTo(id, offset) {var _this = this;\n      return new Promise(function (resolve, reject) {\n        if (!_this.useAnchor) {\n          reject(Error('Anchor is disabled'));\n          return;\n        }\n        offset = offset || parseInt(_this.useAnchor) || 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        var deep = ' ';\n\n\n\n        var selector = uni.createSelectorQuery().\n\n        in(_this._in ? _this._in.page : _this).\n\n        select((_this._in ? _this._in.selector : '._root') + (id ? \"\".concat(deep, \"#\").concat(id) : '')).boundingClientRect();\n        if (_this._in) {\n          selector.select(_this._in.selector).scrollOffset().\n          select(_this._in.selector).boundingClientRect();\n        } else {\n          // 获取 scroll-view 的位置和滚动距离\n          selector.selectViewport().scrollOffset(); // 获取窗口的滚动距离\n        }\n        selector.exec(function (res) {\n          if (!res[0]) {\n            reject(Error('Label not found'));\n            return;\n          }\n          var scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + offset;\n          if (_this._in) {\n            // scroll-view 跳转\n            _this._in.page[_this._in.scrollTop] = scrollTop;\n          } else {\n            // 页面跳转\n            uni.pageScrollTo({\n              scrollTop: scrollTop,\n              duration: 300 });\n\n          }\n          resolve();\n        });\n\n      });\n    },\n\n    /**\r\n        * @description 获取文本内容\r\n        * @return {String}\r\n        */\n    getText: function getText(nodes) {\n      var text = '';\n      (function traversal(nodes) {\n        for (var i = 0; i < nodes.length; i++) {\n          var _node = nodes[i];\n          if (_node.type === 'text') {\n            text += _node.text.replace(/&amp;/g, '&');\n          } else if (_node.name === 'br') {\n            text += '\\n';\n          } else {\n            // 块级标签前后加换行\n            var isBlock = _node.name === 'p' || _node.name === 'div' || _node.name === 'tr' || _node.name === 'li' || _node.name[0] === 'h' && _node.name[1] > '0' && _node.name[1] < '7';\n            if (isBlock && text && text[text.length - 1] !== '\\n') {\n              text += '\\n';\n            }\n            // 递归获取子节点的文本\n            if (_node.children) {\n              traversal(_node.children);\n            }\n            if (isBlock && text[text.length - 1] !== '\\n') {\n              text += '\\n';\n            } else if (_node.name === 'td' || _node.name === 'th') {\n              text += '\\t';\n            }\n          }\n        }\n      })(nodes || this.nodes);\n      return text;\n    },\n\n    /**\r\n        * @description 获取内容大小和位置\r\n        * @return {Promise}\r\n        */\n    getRect: function getRect() {var _this2 = this;\n      return new Promise(function (resolve, reject) {\n        uni.createSelectorQuery().\n\n        in(_this2).\n\n        select('#_root').boundingClientRect().exec(function (res) {return res[0] ? resolve(res[0]) : reject(Error('Root label not found'));});\n      });\n    },\n\n    /**\r\n        * @description 设置内容\r\n        * @param {String} content html 内容\r\n        * @param {Boolean} append 是否在尾部追加\r\n        */\n    setContent: function setContent(content, append) {var _this3 = this;\n      if (!append || !this.imgList) {\n        this.imgList = [];\n      }\n      var nodes = new Parser(this).parse(content);\n\n\n\n\n\n      this.$set(this, 'nodes', append ? (this.nodes || []).concat(nodes) : nodes);\n\n\n      this._videos = [];\n      this.$nextTick(function () {\n        _this3._hook('onLoad');\n        _this3.$emit('load');\n      });\n\n      // 等待图片加载完毕\n      var height;\n      clearInterval(this._timer);\n      this._timer = setInterval(function () {\n        _this3.getRect().then(function (rect) {\n          // 350ms 总高度无变化就触发 ready 事件\n          if (rect.height === height) {\n            _this3.$emit('ready', rect);\n            clearInterval(_this3._timer);\n          }\n          height = rect.height;\n        }).catch(function () {});\n      }, 350);\n\n    },\n\n    /**\r\n        * @description 调用插件钩子函数\r\n        */\n    _hook: function _hook(name) {\n      for (var i = plugins.length; i--;) {\n        if (this.plugins[i][name]) {\n          this.plugins[i][name]();\n        }\n      }\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tcC1odG1sL21wLWh0bWwudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQSxnRjs7Ozs7Ozs7Ozs7O0FBMUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QkEsaUJBQ0EscUQsZUFJQSxFQUNBLGVBREEsRUFFQSxJQUZBLGtCQUVBLENBQ0EsU0FDQSxTQURBLEdBTUEsQ0FUQSxFQVVBLFNBQ0Esa0JBQ0EsWUFEQSxFQUVBLFdBRkEsRUFEQSxFQUtBLGVBTEEsRUFNQSxZQUNBLHVCQURBLEVBRUEsYUFGQSxFQU5BLEVBVUEsY0FWQSxFQVdBLFlBQ0EsWUFEQSxFQUVBLFdBRkEsRUFYQSxFQWVBLFlBQ0EsdUJBREEsRUFFQSxjQUZBLEVBZkEsRUFtQkE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBbkJBOztBQXVCQTtBQUNBLDZCQURBO0FBRUEsbUJBRkEsRUF2QkE7O0FBMkJBO0FBQ0EsNkJBREE7QUFFQSxtQkFGQSxFQTNCQTs7QUErQkEsa0NBL0JBO0FBZ0NBLGlDQWhDQTtBQWlDQTtBQUNBLDZCQURBO0FBRUEsbUJBRkEsRUFqQ0E7O0FBcUNBO0FBQ0EsNkJBREE7QUFFQSxtQkFGQSxFQXJDQTs7QUF5Q0Esb0JBekNBO0FBMENBLGdDQTFDQSxFQVZBOzs7QUF1REE7QUFDQSx3QkFEQSxFQXZEQTs7O0FBMkRBO0FBQ0EsV0FEQSxtQkFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBLEtBSEEsRUEzREE7O0FBZ0VBLFNBaEVBLHFCQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FyRUE7QUFzRUEsU0F0RUEscUJBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0ExRUE7QUEyRUEsZUEzRUEsMkJBMkVBO0FBQ0E7QUFDQTtBQUNBLEdBOUVBO0FBK0VBO0FBQ0E7Ozs7OztBQU1BLE1BUEEsZUFPQSxJQVBBLEVBT0EsUUFQQSxFQU9BLFNBUEEsRUFPQTs7QUFFQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSw0QkFGQTtBQUdBLDhCQUhBOztBQUtBOztBQUVBLEtBakJBOztBQW1CQTs7Ozs7O0FBTUEsY0F6QkEsc0JBeUJBLEVBekJBLEVBeUJBLE1BekJBLEVBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7OztBQUlBOztBQUVBLFVBRkEsQ0FFQSxrQ0FGQTs7QUFJQSxjQUpBLENBSUEseUZBSkEsRUFJQSxrQkFKQTtBQUtBO0FBQ0E7QUFDQSxnQkFEQSxDQUNBLGtCQURBLEVBQ0Esa0JBREE7QUFFQSxTQUhBLE1BR0E7QUFDQTtBQUNBLG1EQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLDJCQUZBOztBQUlBO0FBQ0E7QUFDQSxTQWpCQTs7QUFtQkEsT0F6REE7QUEwREEsS0FwRkE7O0FBc0ZBOzs7O0FBSUEsV0ExRkEsbUJBMEZBLEtBMUZBLEVBMEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQXhCQSxFQXdCQSxtQkF4QkE7QUF5QkE7QUFDQSxLQXRIQTs7QUF3SEE7Ozs7QUFJQSxXQTVIQSxxQkE0SEE7QUFDQTtBQUNBOztBQUVBLFVBRkEsQ0FFQSxNQUZBOztBQUlBLGNBSkEsQ0FJQSxRQUpBLEVBSUEsa0JBSkEsR0FJQSxJQUpBLENBSUEseUZBSkE7QUFLQSxPQU5BO0FBT0EsS0FwSUE7O0FBc0lBOzs7OztBQUtBLGNBM0lBLHNCQTJJQSxPQTNJQSxFQTJJQSxNQTNJQSxFQTJJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVBBLEVBT0EsS0FQQSxDQU9BLGNBUEE7QUFRQSxPQVRBLEVBU0EsR0FUQTs7QUFXQSxLQTVLQTs7QUE4S0E7OztBQUdBLFNBakxBLGlCQWlMQSxJQWpMQSxFQWlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZMQSxFQS9FQSxFIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDx2aWV3IGlkPVwiX3Jvb3RcIiA6Y2xhc3M9XCIoc2VsZWN0YWJsZT8nX3NlbGVjdCAnOicnKSsnX3Jvb3QnXCIgOnN0eWxlPVwiY29udGFpbmVyU3R5bGVcIj5cclxuICAgIDxzbG90IHYtaWY9XCIhbm9kZXNbMF1cIiAvPlxyXG4gICAgPCEtLSAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcbiAgICA8bm9kZSB2LWVsc2UgOmNoaWxkcz1cIm5vZGVzXCIgOm9wdHM9XCJbbGF6eUxvYWQsbG9hZGluZ0ltZyxlcnJvckltZyxzaG93SW1nTWVudV1cIiBuYW1lPVwic3BhblwiIC8+XHJcbiAgICA8IS0tICNlbmRpZiAtLT5cclxuICAgIDwhLS0gI2lmZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcbiAgICA8d2ViLXZpZXcgcmVmPVwid2ViXCIgc3JjPVwiL3N0YXRpYy9hcHAtcGx1cy9tcC1odG1sL2xvY2FsLmh0bWxcIiA6c3R5bGU9XCInbWFyZ2luLXRvcDotMnB4O2hlaWdodDonICsgaGVpZ2h0ICsgJ3B4J1wiIEBvblBvc3RNZXNzYWdlPVwiX29uTWVzc2FnZVwiIC8+XHJcbiAgICA8IS0tICNlbmRpZiAtLT5cclxuICA8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vKipcclxuICogbXAtaHRtbCB2Mi4yLjBcclxuICogQGRlc2NyaXB0aW9uIOWvjOaWh+acrOe7hOS7tlxyXG4gKiBAdHV0b3JpYWwgaHR0cHM6Ly9naXRodWIuY29tL2ppbi15dWZlbmcvbXAtaHRtbFxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gY29udGFpbmVyLXN0eWxlIOWuueWZqOeahOagt+W8j1xyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gY29udGVudCDnlKjkuo7muLLmn5PnmoQgaHRtbCDlrZfnrKbkuLJcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBjb3B5LWxpbmsg5piv5ZCm5YWB6K645aSW6YOo6ZO+5o6l6KKr54K55Ye75pe26Ieq5Yqo5aSN5Yi2XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkb21haW4g5Li75Z+f5ZCN77yM55So5LqO5ou85o6l6ZO+5o6lXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBlcnJvci1pbWcg5Zu+54mH5Ye66ZSZ5pe255qE5Y2g5L2N5Zu+6ZO+5o6lXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbGF6eS1sb2FkIOaYr+WQpuW8gOWQr+WbvueJh+aHkuWKoOi9vVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbG9hZGluZy1pbWcg5Zu+54mH5Yqg6L296L+H56iL5Lit55qE5Y2g5L2N5Zu+6ZO+5o6lXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcGF1c2UtdmlkZW8g5piv5ZCm5Zyo5pKt5pS+5LiA5Liq6KeG6aKR5pe26Ieq5Yqo5pqC5YGc5YW25LuW6KeG6aKRXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcHJldmlldy1pbWcg5piv5ZCm5YWB6K645Zu+54mH6KKr54K55Ye75pe26Ieq5Yqo6aKE6KeIXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2Nyb2xsLXRhYmxlIOaYr+WQpue7meavj+S4quihqOagvOa3u+WKoOS4gOS4qua7muWKqOWxguS9v+WFtuiDveWNleeLrOaoquWQkea7muWKqFxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW4gfCBTdHJpbmd9IHNlbGVjdGFibGUg5piv5ZCm5byA5ZCv6ZW/5oyJ5aSN5Yi2XHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2V0LXRpdGxlIOaYr+WQpuWwhiB0aXRsZSDmoIfnrb7nmoTlhoXlrrnorr7nva7liLDpobXpnaLmoIfpophcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93LWltZy1tZW51IOaYr+WQpuWFgeiuuOWbvueJh+iiq+mVv+aMieaXtuaYvuekuuiPnOWNlVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gdGFnLXN0eWxlIOagh+etvueahOm7mOiupOagt+W8j1xyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW4gfCBOdW1iZXJ9IHVzZS1hbmNob3Ig5piv5ZCm5L2/55So6ZSa54K56ZO+5o6lXHJcbiAqIEBldmVudCB7RnVuY3Rpb259IGxvYWQgZG9tIOe7k+aehOWKoOi9veWujOavleaXtuinpuWPkVxyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufSByZWFkeSDmiYDmnInlm77niYfliqDovb3lrozmr5Xml7bop6blj5FcclxuICogQGV2ZW50IHtGdW5jdGlvbn0gaW1nVGFwIOWbvueJh+iiq+eCueWHu+aXtuinpuWPkVxyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufSBsaW5rVGFwIOmTvuaOpeiiq+eCueWHu+aXtuinpuWPkVxyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufSBlcnJvciDlqpLkvZPliqDovb3lh7rplJnml7bop6blj5FcclxuICovXHJcbi8vICNpZm5kZWYgQVBQLVBMVVMtTlZVRVxyXG5pbXBvcnQgbm9kZSBmcm9tICcuL25vZGUvbm9kZSdcclxuLy8gI2VuZGlmXHJcbmNvbnN0IHBsdWdpbnM9W11cclxuY29uc3QgUGFyc2VyID0gcmVxdWlyZSgnLi9wYXJzZXInKVxyXG4vLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5jb25zdCBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpXHJcbi8vICNlbmRpZlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ21wLWh0bWwnLFxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm9kZXM6IFtdLFxyXG4gICAgICAvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG4gICAgICBoZWlnaHQ6IDNcclxuICAgICAgLy8gI2VuZGlmXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgY29udGFpbmVyU3R5bGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IFN0cmluZyxcclxuICAgIGNvcHlMaW5rOiB7XHJcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZG9tYWluOiBTdHJpbmcsXHJcbiAgICBlcnJvckltZzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgbGF6eUxvYWQ6IHtcclxuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgbG9hZGluZ0ltZzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgcGF1c2VWaWRlbzoge1xyXG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHByZXZpZXdJbWc6IHtcclxuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBzY3JvbGxUYWJsZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICBzZWxlY3RhYmxlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgIHNldFRpdGxlOiB7XHJcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgc2hvd0ltZ01lbnU6IHtcclxuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB0YWdTdHlsZTogT2JqZWN0LFxyXG4gICAgdXNlQW5jaG9yOiBbQm9vbGVhbiwgTnVtYmVyXVxyXG4gIH0sXHJcbiAgLy8gI2lmbmRlZiBBUFAtUExVUy1OVlVFXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgbm9kZVxyXG4gIH0sXHJcbiAgLy8gI2VuZGlmXHJcbiAgd2F0Y2g6IHtcclxuICAgIGNvbnRlbnQgKGNvbnRlbnQpIHtcclxuICAgICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkICgpIHtcclxuICAgIHRoaXMucGx1Z2lucyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gcGx1Z2lucy5sZW5ndGg7IGktLTspIHtcclxuICAgICAgdGhpcy5wbHVnaW5zLnB1c2gobmV3IHBsdWdpbnNbaV0odGhpcykpXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkICgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnQgJiYgIXRoaXMubm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2V0Q29udGVudCh0aGlzLmNvbnRlbnQpXHJcbiAgICB9XHJcbiAgfSxcclxuICBiZWZvcmVEZXN0cm95ICgpIHtcclxuICAgIHRoaXMuX2hvb2soJ29uRGV0YWNoZWQnKVxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcilcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOWwhumUmueCuei3s+i9rOeahOiMg+WbtOmZkOWumuWcqOS4gOS4qiBzY3JvbGwtdmlldyDlhoVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlIHNjcm9sbC12aWV3IOaJgOWcqOmhtemdoueahOekuuS+i1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIHNjcm9sbC12aWV3IOeahOmAieaLqeWZqFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNjcm9sbFRvcCBzY3JvbGwtdmlldyBzY3JvbGwtdG9wIOWxnuaAp+e7keWumueahOWPmOmHj+WQjVxyXG4gICAgICovXHJcbiAgICBpbiAocGFnZSwgc2VsZWN0b3IsIHNjcm9sbFRvcCkge1xyXG4gICAgICAvLyAjaWZuZGVmIEFQUC1QTFVTLU5WVUVcclxuICAgICAgaWYgKHBhZ2UgJiYgc2VsZWN0b3IgJiYgc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgdGhpcy5faW4gPSB7XHJcbiAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgc2VsZWN0b3IsXHJcbiAgICAgICAgICBzY3JvbGxUb3BcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gI2VuZGlmXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOmUmueCuei3s+i9rFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIOimgei3s+i9rOeahOmUmueCuSBpZFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCDot7PovazkvY3nva7nmoTlgY/np7vph49cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBuYXZpZ2F0ZVRvIChpZCwgb2Zmc2V0KSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZUFuY2hvcikge1xyXG4gICAgICAgICAgcmVqZWN0KEVycm9yKCdBbmNob3IgaXMgZGlzYWJsZWQnKSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgcGFyc2VJbnQodGhpcy51c2VBbmNob3IpIHx8IDBcclxuICAgICAgICAvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgIGRvbS5zY3JvbGxUb0VsZW1lbnQodGhpcy4kcmVmcy53ZWIsIHtcclxuICAgICAgICAgICAgb2Zmc2V0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX25hdmlnYXRlVG8gPSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUsXHJcbiAgICAgICAgICAgIHJlamVjdCxcclxuICAgICAgICAgICAgb2Zmc2V0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRyZWZzLndlYi5ldmFsSnMoJ3VuaS5wb3N0TWVzc2FnZSh7ZGF0YTp7YWN0aW9uOlwiZ2V0T2Zmc2V0XCIsb2Zmc2V0Oihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnICsgaWQgKyAnKXx8e30pLm9mZnNldFRvcH19KScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICNlbmRpZlxyXG4gICAgICAgIC8vICNpZm5kZWYgQVBQLVBMVVMtTlZVRVxyXG4gICAgICAgIGxldCBkZWVwID0gJyAnXHJcbiAgICAgICAgLy8gI2lmZGVmIE1QLVdFSVhJTiB8fCBNUC1RUSB8fCBNUC1UT1VUSUFPXHJcbiAgICAgICAgZGVlcCA9ICc+Pj4nXHJcbiAgICAgICAgLy8gI2VuZGlmXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcbiAgICAgICAgICAvLyAjaWZuZGVmIE1QLUFMSVBBWVxyXG4gICAgICAgICAgLmluKHRoaXMuX2luID8gdGhpcy5faW4ucGFnZSA6IHRoaXMpXHJcbiAgICAgICAgICAvLyAjZW5kaWZcclxuICAgICAgICAgIC5zZWxlY3QoKHRoaXMuX2luID8gdGhpcy5faW4uc2VsZWN0b3IgOiAnLl9yb290JykgKyAoaWQgPyBgJHtkZWVwfSMke2lkfWAgOiAnJykpLmJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgaWYgKHRoaXMuX2luKSB7XHJcbiAgICAgICAgICBzZWxlY3Rvci5zZWxlY3QodGhpcy5faW4uc2VsZWN0b3IpLnNjcm9sbE9mZnNldCgpXHJcbiAgICAgICAgICAgIC5zZWxlY3QodGhpcy5faW4uc2VsZWN0b3IpLmJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIOiOt+WPliBzY3JvbGwtdmlldyDnmoTkvY3nva7lkozmu5rliqjot53nprtcclxuICAgICAgICAgIHNlbGVjdG9yLnNlbGVjdFZpZXdwb3J0KCkuc2Nyb2xsT2Zmc2V0KCkgLy8g6I635Y+W56qX5Y+j55qE5rua5Yqo6Led56a7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdG9yLmV4ZWMocmVzID0+IHtcclxuICAgICAgICAgIGlmICghcmVzWzBdKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChFcnJvcignTGFiZWwgbm90IGZvdW5kJykpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gcmVzWzFdLnNjcm9sbFRvcCArIHJlc1swXS50b3AgLSAocmVzWzJdID8gcmVzWzJdLnRvcCA6IDApICsgb2Zmc2V0XHJcbiAgICAgICAgICBpZiAodGhpcy5faW4pIHtcclxuICAgICAgICAgICAgLy8gc2Nyb2xsLXZpZXcg6Lez6L2sXHJcbiAgICAgICAgICAgIHRoaXMuX2luLnBhZ2VbdGhpcy5faW4uc2Nyb2xsVG9wXSA9IHNjcm9sbFRvcFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g6aG16Z2i6Lez6L2sXHJcbiAgICAgICAgICAgIHVuaS5wYWdlU2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgIHNjcm9sbFRvcCxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vICNlbmRpZlxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5bmlofmnKzlhoXlrrlcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0VGV4dCAobm9kZXMpIHtcclxuICAgICAgbGV0IHRleHQgPSAnJztcclxuICAgICAgKGZ1bmN0aW9uIHRyYXZlcnNhbCAobm9kZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV1cclxuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IG5vZGUudGV4dC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmFtZSA9PT0gJ2JyJykge1xyXG4gICAgICAgICAgICB0ZXh0ICs9ICdcXG4nXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlnZfnuqfmoIfnrb7liY3lkI7liqDmjaLooYxcclxuICAgICAgICAgICAgY29uc3QgaXNCbG9jayA9IG5vZGUubmFtZSA9PT0gJ3AnIHx8IG5vZGUubmFtZSA9PT0gJ2RpdicgfHwgbm9kZS5uYW1lID09PSAndHInIHx8IG5vZGUubmFtZSA9PT0gJ2xpJyB8fCAobm9kZS5uYW1lWzBdID09PSAnaCcgJiYgbm9kZS5uYW1lWzFdID4gJzAnICYmIG5vZGUubmFtZVsxXSA8ICc3JylcclxuICAgICAgICAgICAgaWYgKGlzQmxvY2sgJiYgdGV4dCAmJiB0ZXh0W3RleHQubGVuZ3RoIC0gMV0gIT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgdGV4dCArPSAnXFxuJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOmAkuW9kuiOt+WPluWtkOiKgueCueeahOaWh+acrFxyXG4gICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgIHRyYXZlcnNhbChub2RlLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0Jsb2NrICYmIHRleHRbdGV4dC5sZW5ndGggLSAxXSAhPT0gJ1xcbicpIHtcclxuICAgICAgICAgICAgICB0ZXh0ICs9ICdcXG4nXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5uYW1lID09PSAndGQnIHx8IG5vZGUubmFtZSA9PT0gJ3RoJykge1xyXG4gICAgICAgICAgICAgIHRleHQgKz0gJ1xcdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSkobm9kZXMgfHwgdGhpcy5ub2RlcylcclxuICAgICAgcmV0dXJuIHRleHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635Y+W5YaF5a655aSn5bCP5ZKM5L2N572uXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBnZXRSZWN0ICgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcbiAgICAgICAgICAvLyAjaWZuZGVmIE1QLUFMSVBBWVxyXG4gICAgICAgICAgLmluKHRoaXMpXHJcbiAgICAgICAgICAvLyAjZW5kaWZcclxuICAgICAgICAgIC5zZWxlY3QoJyNfcm9vdCcpLmJvdW5kaW5nQ2xpZW50UmVjdCgpLmV4ZWMocmVzID0+IHJlc1swXSA/IHJlc29sdmUocmVzWzBdKSA6IHJlamVjdChFcnJvcignUm9vdCBsYWJlbCBub3QgZm91bmQnKSkpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOiuvue9ruWGheWuuVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnQgaHRtbCDlhoXlrrlcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYXBwZW5kIOaYr+WQpuWcqOWwvumDqOi/veWKoFxyXG4gICAgICovXHJcbiAgICBzZXRDb250ZW50IChjb250ZW50LCBhcHBlbmQpIHtcclxuICAgICAgaWYgKCFhcHBlbmQgfHwgIXRoaXMuaW1nTGlzdCkge1xyXG4gICAgICAgIHRoaXMuaW1nTGlzdCA9IFtdXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgbm9kZXMgPSBuZXcgUGFyc2VyKHRoaXMpLnBhcnNlKGNvbnRlbnQpXHJcbiAgICAgIC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcbiAgICAgIGlmICh0aGlzLl9yZWFkeSkge1xyXG4gICAgICAgIHRoaXMuX3NldChub2RlcywgYXBwZW5kKVxyXG4gICAgICB9XHJcbiAgICAgIC8vICNlbmRpZlxyXG4gICAgICB0aGlzLiRzZXQodGhpcywgJ25vZGVzJywgYXBwZW5kID8gKHRoaXMubm9kZXMgfHwgW10pLmNvbmNhdChub2RlcykgOiBub2RlcylcclxuXHJcbiAgICAgIC8vICNpZm5kZWYgQVBQLVBMVVMtTlZVRVxyXG4gICAgICB0aGlzLl92aWRlb3MgPSBbXVxyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faG9vaygnb25Mb2FkJylcclxuICAgICAgICB0aGlzLiRlbWl0KCdsb2FkJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIOetieW+heWbvueJh+WKoOi9veWujOavlVxyXG4gICAgICBsZXQgaGVpZ2h0XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpXHJcbiAgICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0UmVjdCgpLnRoZW4ocmVjdCA9PiB7XHJcbiAgICAgICAgICAvLyAzNTBtcyDmgLvpq5jluqbml6Dlj5jljJblsLHop6blj5EgcmVhZHkg5LqL5Lu2XHJcbiAgICAgICAgICBpZiAocmVjdC5oZWlnaHQgPT09IGhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZWFkeScsIHJlY3QpXHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoZWlnaHQgPSByZWN0LmhlaWdodFxyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHsgfSlcclxuICAgICAgfSwgMzUwKVxyXG4gICAgICAvLyAjZW5kaWZcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g6LCD55So5o+S5Lu26ZKp5a2Q5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIF9ob29rIChuYW1lKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBwbHVnaW5zLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbnNbaV1bbmFtZV0pIHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luc1tpXVtuYW1lXSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDorr7nva7lhoXlrrlcclxuICAgICAqL1xyXG4gICAgX3NldCAobm9kZXMsIGFwcGVuZCkge1xyXG4gICAgICB0aGlzLiRyZWZzLndlYi5ldmFsSnMoJ3NldENvbnRlbnQoJyArIEpTT04uc3RyaW5naWZ5KG5vZGVzKSArICcsJyArIEpTT04uc3RyaW5naWZ5KFt0aGlzLmNvbnRhaW5lclN0eWxlLnJlcGxhY2UoLyg/Om1hcmdpbnxwYWRkaW5nKVteO10rL2csICcnKSwgdGhpcy5lcnJvckltZywgdGhpcy5sb2FkaW5nSW1nLCB0aGlzLnBhdXNlVmlkZW8sIHRoaXMuc2Nyb2xsVGFibGUsIHRoaXMuc2VsZWN0YWJsZV0pICsgJywnICsgYXBwZW5kICsgJyknKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDmjqXmlLbliLAgd2ViLXZpZXcg5raI5oGvXHJcbiAgICAgKi9cclxuICAgIF9vbk1lc3NhZ2UgKGUpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGUuZGV0YWlsLmRhdGFbMF1cclxuICAgICAgc3dpdGNoIChtZXNzYWdlLmFjdGlvbikge1xyXG4gICAgICAgIC8vIHdlYi12aWV3IOWIneWni+WMluWujOavlVxyXG4gICAgICAgIGNhc2UgJ29uSlNCcmlkZ2VSZWFkeSc6XHJcbiAgICAgICAgICB0aGlzLl9yZWFkeSA9IHRydWVcclxuICAgICAgICAgIGlmICh0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldCh0aGlzLm5vZGVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICAvLyDlhoXlrrkgZG9tIOWKoOi9veWujOavlVxyXG4gICAgICAgIGNhc2UgJ29uTG9hZCc6XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IG1lc3NhZ2UuaGVpZ2h0XHJcbiAgICAgICAgICB0aGlzLl9ob29rKCdvbkxvYWQnKVxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZCcpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIC8vIOaJgOacieWbvueJh+WKoOi9veWujOavlVxyXG4gICAgICAgIGNhc2UgJ29uUmVhZHknOlxyXG4gICAgICAgICAgdGhpcy5nZXRSZWN0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZWFkeScsIHJlcylcclxuICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHsgfSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgLy8g5oC76auY5bqm5Y+R55Sf5Y+Y5YyWXHJcbiAgICAgICAgY2FzZSAnb25IZWlnaHRDaGFuZ2UnOlxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBtZXNzYWdlLmhlaWdodFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICAvLyDlm77niYfngrnlh7tcclxuICAgICAgICBjYXNlICdvbkltZ1RhcCc6XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdpbWd0YXAnLCBtZXNzYWdlLmF0dHJzKVxyXG4gICAgICAgICAgaWYgKHRoaXMucHJldmlld0ltZykge1xyXG4gICAgICAgICAgICB1bmkucHJldmlld0ltYWdlKHtcclxuICAgICAgICAgICAgICBjdXJyZW50OiBwYXJzZUludChtZXNzYWdlLmF0dHJzLmkpLFxyXG4gICAgICAgICAgICAgIHVybHM6IHRoaXMuaW1nTGlzdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICAvLyDpk77mjqXngrnlh7tcclxuICAgICAgICBjYXNlICdvbkxpbmtUYXAnOiB7XHJcbiAgICAgICAgICBjb25zdCBocmVmID0gbWVzc2FnZS5hdHRycy5ocmVmXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdsaW5rdGFwJywgbWVzc2FnZS5hdHRycylcclxuICAgICAgICAgIGlmIChocmVmKSB7XHJcbiAgICAgICAgICAgIC8vIOmUmueCuei3s+i9rFxyXG4gICAgICAgICAgICBpZiAoaHJlZlswXSA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlQW5jaG9yKSB7XHJcbiAgICAgICAgICAgICAgICBkb20uc2Nyb2xsVG9FbGVtZW50KHRoaXMuJHJlZnMud2ViLCB7XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogbWVzc2FnZS5vZmZzZXRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhyZWYuaW5jbHVkZXMoJzovLycpKSB7XHJcbiAgICAgICAgICAgICAgLy8g5omT5byA5aSW6ZO+XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29weUxpbmspIHtcclxuICAgICAgICAgICAgICAgIHBsdXMucnVudGltZS5vcGVuV2ViKGhyZWYpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogaHJlZixcclxuICAgICAgICAgICAgICAgIGZhaWwgKCkge1xyXG4gICAgICAgICAgICAgICAgICB1bmkuc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGhyZWZcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5bliLDplJrngrnnmoTlgY/np7vph49cclxuICAgICAgICBjYXNlICdnZXRPZmZzZXQnOlxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlLm9mZnNldCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgZG9tLnNjcm9sbFRvRWxlbWVudCh0aGlzLiRyZWZzLndlYiwge1xyXG4gICAgICAgICAgICAgIG9mZnNldDogbWVzc2FnZS5vZmZzZXQgKyB0aGlzLl9uYXZpZ2F0ZVRvLm9mZnNldFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVRvLnJlc29sdmUoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGVUby5yZWplY3QoRXJyb3IoJ0xhYmVsIG5vdCBmb3VuZCcpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICAvLyDngrnlh7tcclxuICAgICAgICBjYXNlICdvbkNsaWNrJzpcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhcCcpXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIC8vIOWHuumUmVxyXG4gICAgICAgIGNhc2UgJ29uRXJyb3InOlxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnZXJyb3InLCB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogbWVzc2FnZS5zb3VyY2UsXHJcbiAgICAgICAgICAgIGF0dHJzOiBtZXNzYWdlLmF0dHJzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAjZW5kaWZcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG4vKiDmoLnoioLngrnmoLflvI8gKi9cclxuLl9yb290IHtcclxuICBwYWRkaW5nOiAxcHggMDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuXHJcbi8qIOmVv+aMieWkjeWItiAqL1xyXG4uX3NlbGVjdCB7XHJcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XHJcbn1cclxuLyogI2VuZGlmICovXHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!***********************************************!*\
  !*** E:/pwl/components/mp-html/node/node.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_vue_vue_type_template_id_1d2f0fca_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2_2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW_2BruS_2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.vue?vue&type=template&id=1d2f0fca&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2%2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW%2BruS%2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19& */ 21);\n/* harmony import */ var _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.vue?vue&type=script&lang=js& */ 28);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n/* harmony import */ var _node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs */ 30);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _node_vue_vue_type_template_id_1d2f0fca_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2_2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW_2BruS_2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _node_vue_vue_type_template_id_1d2f0fca_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2_2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW_2BruS_2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _node_vue_vue_type_template_id_1d2f0fca_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2_2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW_2BruS_2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\n/* custom blocks */\n\nif (typeof _node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\ncomponent.options.__file = \"components/mp-html/node/node.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpZ0M7QUFDamdDO0FBQ3dEO0FBQ0w7OztBQUduRDtBQUNxSztBQUNySyxnQkFBZ0IsK0tBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsKzlCQUFNO0FBQ1IsRUFBRSx3K0JBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbStCQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNnRztBQUNoRyxXQUFXLGtIQUFNLGlCQUFpQiwwSEFBTTs7QUFFeEM7QUFDZSxnRiIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbm9kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQyZjBmY2EmZmlsdGVyLW1vZHVsZXM9ZXlKb1lXNWtiR1Z5SWpwN0luUjVjR1VpT2lKelkzSnBjSFFpTENKamIyNTBaVzUwSWpvaUx5OGc2S0dNNVlhRjVxQ0g1NjIlMkI1WWlYNktHb1hHNTJZWElnYVc1c2FXNWxWR0ZuY3lBOUlIdGNibHgwWVdKaWNqb2dkSEoxWlN4Y2JseDBZam9nZEhKMVpTeGNibHgwWW1sbk9pQjBjblZsTEZ4dVhIUmpiMlJsT2lCMGNuVmxMRnh1WEhSa1pXdzZJSFJ5ZFdVc1hHNWNkR1Z0T2lCMGNuVmxMRnh1WEhScE9pQjBjblZsTEZ4dVhIUnBibk02SUhSeWRXVXNYRzVjZEd4aFltVnNPaUIwY25WbExGeHVYSFJ4T2lCMGNuVmxMRnh1WEhSemJXRnNiRG9nZEhKMVpTeGNibHgwYzNCaGJqb2dkSEoxWlN4Y2JseDBjM1J5YjI1bk9pQjBjblZsTEZ4dVhIUnpkV0k2SUhSeWRXVXNYRzVjZEhOMWNEb2dkSEoxWlZ4dWZWeHVMeW9xWEc0Z0tpQkFaR1Z6WTNKcGNIUnBiMjRnNXBpdjVaQ201TDIlMkY1NVNvSUhKcFkyZ3RkR1Y0ZENEbW1MN25wTHJsaWFua3Zabmxob1hscnJsY2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3WEc1Y2RIVnpaVG9nWm5WdVkzUnBiMjRvYVhSbGJTa2dlMXh1WEhSY2RHbG1JQ2hwZEdWdExtTXBJSEpsZEhWeWJpQm1ZV3h6WlZ4dVhIUmNkQzh2SU9XJTJCcnVTJTJGb2VXU2pDQlJVU0RubW9RZ2NtbGphQzEwWlhoMElHbHViR2x1WlNEbHVJUGxzWURtbDZEbWxZaGNibHgwWEhSeVpYUjFjbTRnSVdsdWJHbHVaVlJoWjNOYmFYUmxiUzV1WVcxbFhTQW1KaUFvYVhSbGJTNWhkSFJ5Y3k1emRIbHNaU0I4ZkNBbkp5a3VhVzVrWlhoUFppZ25aR2x6Y0d4aGVUcHBibXhwYm1VbktTQTlQU0F0TVZ4dVhIUjlYRzU5SWl3aWMzUmhjblFpT2pVd05qVXNJbUYwZEhKeklqcDdJbTF2WkhWc1pTSTZJbWhoYm1Sc1pYSWlMQ0pzWVc1bklqb2lkM2h6SW4wc0ltVnVaQ0k2TlRVNE5IMTkmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ub2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbi8qIGN1c3RvbSBibG9ja3MgKi9cbmltcG9ydCBibG9jazAgZnJvbSBcIi4vbm9kZS52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPXNjcmlwdCZtb2R1bGU9aGFuZGxlciZsYW5nPXd4c1wiXG5pZiAodHlwZW9mIGJsb2NrMCA9PT0gJ2Z1bmN0aW9uJykgYmxvY2swKGNvbXBvbmVudClcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21wLWh0bWwvbm9kZS9ub2RlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** E:/pwl/components/mp-html/node/node.vue?vue&type=template&id=1d2f0fca&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2%2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW%2BruS%2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_1d2f0fca_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2_2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW_2BruS_2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=template&id=1d2f0fca&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2%2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW%2BruS%2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_1d2f0fca_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2_2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW_2BruS_2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_1d2f0fca_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2_2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW_2BruS_2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_1d2f0fca_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2_2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW_2BruS_2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_1d2f0fca_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2_2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW_2BruS_2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/components/mp-html/node/node.vue?vue&type=template&id=1d2f0fca&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXG52YXIgaW5saW5lVGFncyA9IHtcblx0YWJicjogdHJ1ZSxcblx0YjogdHJ1ZSxcblx0YmlnOiB0cnVlLFxuXHRjb2RlOiB0cnVlLFxuXHRkZWw6IHRydWUsXG5cdGVtOiB0cnVlLFxuXHRpOiB0cnVlLFxuXHRpbnM6IHRydWUsXG5cdGxhYmVsOiB0cnVlLFxuXHRxOiB0cnVlLFxuXHRzbWFsbDogdHJ1ZSxcblx0c3BhbjogdHJ1ZSxcblx0c3Ryb25nOiB0cnVlLFxuXHRzdWI6IHRydWUsXG5cdHN1cDogdHJ1ZVxufVxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5piv5ZCm5L2%2F55SoIHJpY2gtdGV4dCDmmL7npLrliankvZnlhoXlrrlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHVzZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmIChpdGVtLmMpIHJldHVybiBmYWxzZVxuXHRcdC8vIOW%2BruS%2FoeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcblx0XHRyZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxuXHR9XG59Iiwic3RhcnQiOjUwNjUsImF0dHJzIjp7Im1vZHVsZSI6ImhhbmRsZXIiLCJsYW5nIjoid3hzIn0sImVuZCI6NTU4NH19& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    eliseAudio: __webpack_require__(/*! @/components/elise-audio/elise-audio.vue */ 23).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      class: _vm._$s(0, "c", "_block _" + _vm.name + " " + _vm.attrs.class),
      style: _vm._$s(0, "s", _vm.attrs.style),
      attrs: { id: _vm._$s(0, "a-id", _vm.attrs.id), _i: 0 }
    },
    [
      _vm._l(_vm._$s(1, "f", { forItems: _vm.childs }), function(
        n,
        i,
        $20,
        $30
      ) {
        return [
          _vm._$s(
            "2-" + $30,
            "i",
            n.name === "img" &&
              ((_vm.opts[1] && !_vm.ctrl[i]) || _vm.ctrl[i] < 0)
          )
            ? _c("image", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: 0,
                  key: i + "_0"
                }),
                staticClass: _vm._$s("2-" + $30, "sc", "_img"),
                style: _vm._$s("2-" + $30, "s", n.attrs.style),
                attrs: {
                  src: _vm._$s(
                    "2-" + $30,
                    "a-src",
                    _vm.ctrl[i] < 0 ? _vm.opts[2] : _vm.opts[1]
                  ),
                  _i: "2-" + $30
                }
              })
            : _vm._e(),
          _vm._$s("3-" + $30, "i", n.name === "img")
            ? _c("img", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: 1,
                  key: i + "_1"
                }),
                class: _vm._$s("3-" + $30, "c", "_img " + n.attrs.class),
                style: _vm._$s(
                  "3-" + $30,
                  "s",
                  (_vm.ctrl[i] === -1 ? "display:none;" : "") + n.attrs.style
                ),
                attrs: {
                  id: _vm._$s("3-" + $30, "a-id", n.attrs.id),
                  src: _vm._$s(
                    "3-" + $30,
                    "a-src",
                    n.attrs.src || (_vm.ctrl.load ? n.attrs["data-src"] : "")
                  ),
                  "data-i": _vm._$s("3-" + $30, "a-data-i", i),
                  _i: "3-" + $30
                },
                on: {
                  load: _vm.imgLoad,
                  error: _vm.mediaError,
                  longpress: _vm.imgLongTap,
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.imgTap($event)
                  }
                }
              })
            : _vm._$s("4-" + $30, "e", n.text)
            ? _c(
                "text",
                {
                  key: _vm._$s(1, "f", {
                    forIndex: $20,
                    keyIndex: -1,
                    key: 1 + "--1" + $30
                  }),
                  attrs: {
                    "user-select": _vm._$s("4-" + $30, "a-user-select", n.us),
                    _i: "4-" + $30
                  }
                },
                [_vm._v(_vm._$s("4-" + $30, "t0-0", _vm._s(n.text)))]
              )
            : _vm._$s("5-" + $30, "e", n.name === "br")
            ? _c("text", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: -1,
                  key: 1 + "--1" + $30
                })
              })
            : _vm._$s("6-" + $30, "e", n.name === "a")
            ? _c(
                "view",
                {
                  key: _vm._$s(1, "f", {
                    forIndex: $20,
                    keyIndex: -1,
                    key: 1 + "--1" + $30
                  }),
                  class: _vm._$s(
                    "6-" + $30,
                    "c",
                    (n.attrs.href ? "_a " : "") + n.attrs.class
                  ),
                  style: _vm._$s(
                    "6-" + $30,
                    "s",
                    "display:inline;" + n.attrs.style
                  ),
                  attrs: {
                    id: _vm._$s("6-" + $30, "a-id", n.attrs.id),
                    "data-i": _vm._$s("6-" + $30, "a-data-i", i),
                    _i: "6-" + $30
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.linkTap($event)
                    }
                  }
                },
                [
                  _c("node", {
                    attrs: {
                      name: "span",
                      childs: n.children,
                      opts: _vm.opts,
                      _i: "7-" + $30
                    }
                  })
                ],
                1
              )
            : _vm._$s("8-" + $30, "e", n.html)
            ? _c("view", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: -1,
                  key: 1 + "--1" + $30
                }),
                class: _vm._$s("8-" + $30, "c", "_video " + n.attrs.class),
                style: _vm._$s("8-" + $30, "s", n.attrs.style),
                attrs: {
                  id: _vm._$s("8-" + $30, "a-id", n.attrs.id),
                  _i: "8-" + $30
                },
                domProps: {
                  innerHTML: _vm._s(_vm._$s("8-" + $30, "v-html", n.html))
                }
              })
            : _vm._$s("9-" + $30, "e", n.name === "iframe")
            ? _c("iframe", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: -1,
                  key: 1 + "--1" + $30
                }),
                style: _vm._$s("9-" + $30, "s", n.attrs.style),
                attrs: {
                  allowfullscreen: _vm._$s(
                    "9-" + $30,
                    "a-allowfullscreen",
                    n.attrs.allowfullscreen
                  ),
                  frameborder: _vm._$s(
                    "9-" + $30,
                    "a-frameborder",
                    n.attrs.frameborder
                  ),
                  src: _vm._$s("9-" + $30, "a-src", n.attrs.src),
                  _i: "9-" + $30
                }
              })
            : _vm._$s("10-" + $30, "e", n.name === "embed")
            ? _c("embed", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: -1,
                  key: 1 + "--1" + $30
                }),
                style: _vm._$s("10-" + $30, "s", n.attrs.style),
                attrs: {
                  src: _vm._$s("10-" + $30, "a-src", n.attrs.src),
                  _i: "10-" + $30
                }
              })
            : _vm._$s("11-" + $30, "e", n.name === "audio")
            ? _c("elise-audio", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: -1,
                  key: 1 + "--1" + $30
                }),
                attrs: {
                  audioId: n.attrs.id,
                  url: n.src[_vm.ctrl[i] || 0],
                  audioColor: "#E0E0E0",
                  _i: "11-" + $30
                }
              })
            : _vm._$s(
                "12-" + $30,
                "e",
                (n.name === "table" && n.c) || n.name === "li"
              )
            ? _c(
                "view",
                {
                  key: _vm._$s(1, "f", {
                    forIndex: $20,
                    keyIndex: -1,
                    key: 1 + "--1" + $30
                  }),
                  class: _vm._$s(
                    "12-" + $30,
                    "c",
                    "_" + n.name + " " + n.attrs.class
                  ),
                  style: _vm._$s("12-" + $30, "s", n.attrs.style),
                  attrs: {
                    id: _vm._$s("12-" + $30, "a-id", n.attrs.id),
                    _i: "12-" + $30
                  }
                },
                [
                  _vm._$s("13-" + $30, "i", n.name === "li")
                    ? _c("node", {
                        attrs: {
                          childs: n.children,
                          opts: _vm.opts,
                          _i: "13-" + $30
                        }
                      })
                    : _vm._l(
                        _vm._$s(14, "f", { forItems: n.children }),
                        function(tbody, x, $21, $31) {
                          return _c(
                            "view",
                            {
                              key: _vm._$s(14, "f", { forIndex: $21, key: x }),
                              class: _vm._$s(
                                "14-" + $30 + $31,
                                "c",
                                "_" + tbody.name + " " + tbody.attrs.class
                              ),
                              style: _vm._$s(
                                "14-" + $30 + $31,
                                "s",
                                tbody.attrs.style
                              ),
                              attrs: { _i: "14-" + $30 + $31 }
                            },
                            [
                              _vm._$s(
                                "15-" + $30 + $31,
                                "i",
                                tbody.name === "td" || tbody.name === "th"
                              )
                                ? _c("node", {
                                    attrs: {
                                      childs: tbody.children,
                                      opts: _vm.opts,
                                      _i: "15-" + $30 + $31
                                    }
                                  })
                                : _vm._l(
                                    _vm._$s(16, "f", {
                                      forItems: tbody.children
                                    }),
                                    function(tr, y, $22, $32) {
                                      return [
                                        _vm._$s(
                                          "17-" + $30 + $31 + $32,
                                          "i",
                                          tr.name === "td" || tr.name === "th"
                                        )
                                          ? _c(
                                              "view",
                                              {
                                                key: _vm._$s(16, "f", {
                                                  forIndex: $22,
                                                  keyIndex: 0,
                                                  key: y + "_0"
                                                }),
                                                class: _vm._$s(
                                                  "17-" + $30 + $31 + $32,
                                                  "c",
                                                  "_" +
                                                    tr.name +
                                                    " " +
                                                    tr.attrs.class
                                                ),
                                                style: _vm._$s(
                                                  "17-" + $30 + $31 + $32,
                                                  "s",
                                                  tr.attrs.style
                                                ),
                                                attrs: {
                                                  _i: "17-" + $30 + $31 + $32
                                                }
                                              },
                                              [
                                                _c("node", {
                                                  attrs: {
                                                    childs: tr.children,
                                                    opts: _vm.opts,
                                                    _i: "18-" + $30 + $31 + $32
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _c(
                                              "view",
                                              {
                                                key: _vm._$s(16, "f", {
                                                  forIndex: $22,
                                                  keyIndex: -1,
                                                  key: 16 + "--1" + $32
                                                }),
                                                class: _vm._$s(
                                                  "19-" + $30 + $31 + $32,
                                                  "c",
                                                  "_" +
                                                    tr.name +
                                                    " " +
                                                    tr.attrs.class
                                                ),
                                                style: _vm._$s(
                                                  "19-" + $30 + $31 + $32,
                                                  "s",
                                                  tr.attrs.style
                                                ),
                                                attrs: {
                                                  _i: "19-" + $30 + $31 + $32
                                                }
                                              },
                                              _vm._l(
                                                _vm._$s(
                                                  20 +
                                                    "-" +
                                                    $30 +
                                                    "-" +
                                                    $31 +
                                                    "-" +
                                                    $32,
                                                  "f",
                                                  { forItems: tr.children }
                                                ),
                                                function(td, z, $23, $33) {
                                                  return _c(
                                                    "view",
                                                    {
                                                      key: _vm._$s(
                                                        20 +
                                                          "-" +
                                                          $30 +
                                                          "-" +
                                                          $31 +
                                                          "-" +
                                                          $32,
                                                        "f",
                                                        {
                                                          forIndex: $23,
                                                          key: z
                                                        }
                                                      ),
                                                      class: _vm._$s(
                                                        "20-" +
                                                          $30 +
                                                          $31 +
                                                          $32 +
                                                          "-" +
                                                          $33,
                                                        "c",
                                                        "_" +
                                                          td.name +
                                                          " " +
                                                          td.attrs.class
                                                      ),
                                                      style: _vm._$s(
                                                        "20-" +
                                                          $30 +
                                                          $31 +
                                                          $32 +
                                                          "-" +
                                                          $33,
                                                        "s",
                                                        td.attrs.style
                                                      ),
                                                      attrs: {
                                                        _i:
                                                          "20-" +
                                                          $30 +
                                                          $31 +
                                                          $32 +
                                                          "-" +
                                                          $33
                                                      }
                                                    },
                                                    [
                                                      _c("node", {
                                                        attrs: {
                                                          childs: td.children,
                                                          opts: _vm.opts,
                                                          _i:
                                                            "21-" +
                                                            $30 +
                                                            $31 +
                                                            $32 +
                                                            "-" +
                                                            $33
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                      ]
                                    }
                                  )
                            ],
                            2
                          )
                        }
                      )
                ],
                2
              )
            : _vm._$s("22-" + $30, "e", _vm.handler.use(n))
            ? _c("rich-text", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: -1,
                  key: 1 + "--1" + $30
                }),
                style: _vm._$s("22-" + $30, "s", n.f),
                attrs: {
                  id: _vm._$s("22-" + $30, "a-id", n.attrs.id),
                  nodes: _vm._$s("22-" + $30, "a-nodes", [n]),
                  _i: "22-" + $30
                }
              })
            : _vm._$s("23-" + $30, "e", n.c === 2)
            ? _c(
                "view",
                {
                  key: _vm._$s(1, "f", {
                    forIndex: $20,
                    keyIndex: -1,
                    key: 1 + "--1" + $30
                  }),
                  class: _vm._$s(
                    "23-" + $30,
                    "c",
                    "_block _" + n.name + " " + n.attrs.class
                  ),
                  style: _vm._$s("23-" + $30, "s", n.f + ";" + n.attrs.style),
                  attrs: {
                    id: _vm._$s("23-" + $30, "a-id", n.attrs.id),
                    _i: "23-" + $30
                  }
                },
                _vm._l(
                  _vm._$s(24 + "-" + $30, "f", { forItems: n.children }),
                  function(n2, j, $24, $34) {
                    return _c("node", {
                      key: _vm._$s(24 + "-" + $30, "f", {
                        forIndex: $24,
                        key: j
                      }),
                      style: _vm._$s("24-" + $30 + "-" + $34, "s", n2.f),
                      attrs: {
                        name: n2.name,
                        attrs: n2.attrs,
                        childs: n2.children,
                        opts: _vm.opts,
                        _i: "24-" + $30 + "-" + $34
                      }
                    })
                  }
                ),
                1
              )
            : _c("node", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: -1,
                  key: 1 + "--1" + $30
                }),
                style: _vm._$s("25-" + $30, "s", n.f),
                attrs: {
                  name: n.name,
                  attrs: n.attrs,
                  childs: n.children,
                  opts: _vm.opts,
                  _i: "25-" + $30
                }
              })
        ]
      })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!*****************************************************!*\
  !*** E:/pwl/components/elise-audio/elise-audio.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elise_audio_vue_vue_type_template_id_0c6b5f00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elise-audio.vue?vue&type=template&id=0c6b5f00& */ 24);\n/* harmony import */ var _elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elise-audio.vue?vue&type=script&lang=js& */ 26);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _elise_audio_vue_vue_type_template_id_0c6b5f00___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _elise_audio_vue_vue_type_template_id_0c6b5f00___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _elise_audio_vue_vue_type_template_id_0c6b5f00___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/elise-audio/elise-audio.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDs7O0FBRzFEO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2VsaXNlLWF1ZGlvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzZiNWYwMCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2VsaXNlLWF1ZGlvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZWxpc2UtYXVkaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvZWxpc2UtYXVkaW8vZWxpc2UtYXVkaW8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!************************************************************************************!*\
  !*** E:/pwl/components/elise-audio/elise-audio.vue?vue&type=template&id=0c6b5f00& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_template_id_0c6b5f00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./elise-audio.vue?vue&type=template&id=0c6b5f00& */ 25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_template_id_0c6b5f00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_template_id_0c6b5f00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_template_id_0c6b5f00___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_template_id_0c6b5f00___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 25 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/components/elise-audio/elise-audio.vue?vue&type=template&id=0c6b5f00& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.url)
    ? _c(
        "view",
        {
          staticClass: _vm._$s(0, "sc", "flex audio"),
          class: _vm._$s(0, "c", { active: _vm.status }),
          style: _vm._$s(0, "s", {
            width: _vm.getWith(_vm.durationS),
            background: _vm.audioColor
          }),
          attrs: { _i: 0 },
          on: {
            click: function($event) {
              return _vm.play(_vm.audioId)
            }
          }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(1, "sc", "mr-3"), attrs: { _i: 1 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(2, "sc", "wifi-symbol "),
                  class: _vm._$s(2, "c", _vm.status ? "active" : ""),
                  attrs: { _i: 2 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(3, "sc", "wifi-circle first"),
                    attrs: { _i: 3 }
                  }),
                  _c("view", {
                    staticClass: _vm._$s(4, "sc", "wifi-circle second"),
                    attrs: { _i: 4 }
                  }),
                  _c("view", {
                    staticClass: _vm._$s(5, "sc", "wifi-circle third"),
                    attrs: { _i: 5 }
                  })
                ]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(6, "sc", "ml-3"), attrs: { _i: 6 } },
            [
              _vm._v(
                _vm._$s(
                  6,
                  "t0-0",
                  _vm._s(_vm.durationS ? _vm.durationS + "s" : "")
                )
              )
            ]
          )
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 26 */
/*!******************************************************************************!*\
  !*** E:/pwl/components/elise-audio/elise-audio.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./elise-audio.vue?vue&type=script&lang=js& */ 27);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_elise_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNpQixDQUFnQix5a0JBQUcsRUFBQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VsaXNlLWF1ZGlvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZWxpc2UtYXVkaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/components/elise-audio/elise-audio.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      context: null,\n      duration: 100,\n      status: false };\n\n  },\n  props: {\n    url: {\n      type: String,\n      default: '' },\n\n    audioColor: {\n      type: String,\n      default: '#fff' },\n\n    durationS: [String, Number],\n    audioId: [String, Number] },\n\n  created: function created() {var _this = this;\n    this.context = uni.createInnerAudioContext();\n    this.context.src = this.url;\n    this.onEnded();\n    uni.$on('stop', function (id) {\n      if (id && id != _this.audioId) {\n        _this.context.stop();\n        _this.status = false;\n      } else if (!id) {\n        _this.context.stop();\n        _this.status = false;\n      }\n    });\n  },\n  methods: {\n    play: function play(id) {//点击播放\n      if (this.status) {\n        this.context.pause();\n        this.status = !this.status;\n      } else {\n        uni.$emit('stop', id);\n        this.context.play();\n        this.status = !this.status;\n      }\n    },\n    onEnded: function onEnded() {var _this2 = this; //播放结束\n      this.context.onEnded(function () {\n        _this2.status = false;\n      });\n    },\n    getWith: function getWith(s) {\n      if (s) {\n        var w = s * 10 + 150;\n        return w > 520 ? '520rpx' : s * 10 + 150 + 'rpx';\n      }\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9lbGlzZS1hdWRpby9lbGlzZS1hdWRpby52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBO0FBR0EsbUJBSEE7O0FBS0EsR0FQQTtBQVFBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBLEVBTEE7O0FBU0EsK0JBVEE7QUFVQSw2QkFWQSxFQVJBOztBQW9CQSxTQXBCQSxxQkFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUkE7QUFTQSxHQWpDQTtBQWtDQTtBQUNBLFFBREEsZ0JBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVZBO0FBV0EsV0FYQSxxQkFXQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FmQTtBQWdCQSxXQWhCQSxtQkFnQkEsQ0FoQkEsRUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckJBLEVBbENBLEUiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgdi1pZj0ndXJsJyBjbGFzcz0nZmxleCBhdWRpbycgOmNsYXNzPVwie2FjdGl2ZTpzdGF0dXN9XCJcclxuXHRcdDpzdHlsZT1cInt3aWR0aDpnZXRXaXRoKGR1cmF0aW9uUyksICBiYWNrZ3JvdW5kOmF1ZGlvQ29sb3J9XCIgQGNsaWNrPSdwbGF5KGF1ZGlvSWQpJz5cclxuXHRcdDx2aWV3IGNsYXNzPSdtci0zJz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3aWZpLXN5bWJvbCBcIiA6Y2xhc3M9XCJzdGF0dXM/J2FjdGl2ZSc6JydcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndpZmktY2lyY2xlIGZpcnN0XCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwid2lmaS1jaXJjbGUgc2Vjb25kXCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwid2lmaS1jaXJjbGUgdGhpcmRcIj48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPSdtbC0zJz57e2R1cmF0aW9uUyA/IGR1cmF0aW9uUyArICdzJyA6ICcnfX08L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNvbnRleHQ6IG51bGwsXHJcblx0XHRcdFx0ZHVyYXRpb246IDEwMCxcclxuXHRcdFx0XHRzdGF0dXM6IGZhbHNlLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dXJsOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGF1ZGlvQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyNmZmYnXHJcblx0XHRcdH0sXHJcblx0XHRcdGR1cmF0aW9uUzogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0YXVkaW9JZDogW1N0cmluZywgTnVtYmVyXVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMuY29udGV4dCA9IHVuaS5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xyXG5cdFx0XHR0aGlzLmNvbnRleHQuc3JjID0gdGhpcy51cmw7XHJcblx0XHRcdHRoaXMub25FbmRlZCgpO1xyXG5cdFx0XHR1bmkuJG9uKCdzdG9wJywgKGlkKSA9PiB7XHJcblx0XHRcdFx0aWYgKGlkICYmIGlkICE9IHRoaXMuYXVkaW9JZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZXh0LnN0b3AoKTtcclxuXHRcdFx0XHRcdHRoaXMuc3RhdHVzID0gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIGlmICghaWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGV4dC5zdG9wKCk7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHBsYXkoaWQpIHsgLy/ngrnlh7vmkq3mlL5cclxuXHRcdFx0XHRpZiAodGhpcy5zdGF0dXMpIHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGV4dC5wYXVzZSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS4kZW1pdCgnc3RvcCcsIGlkKVxyXG5cdFx0XHRcdFx0dGhpcy5jb250ZXh0LnBsYXkoKVxyXG5cdFx0XHRcdFx0dGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkVuZGVkKCkgeyAvL+aSreaUvue7k+adn1xyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5vbkVuZGVkKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3RhdHVzID0gZmFsc2U7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0V2l0aChzKSB7XHJcblx0XHRcdFx0aWYgKHMpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHcgPSBzICogMTAgKyAxNTBcclxuXHRcdFx0XHRcdHJldHVybiB3ID4gNTIwID8gJzUyMHJweCcgOiAocyAqIDEwICsgMTUwKSArICdycHgnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQuYXVkaW8ge1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50OztcclxuXHRcdGhlaWdodDogNThycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHJweDtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdC8vIHBhZGRpbmc6IDIwcnB4O1xyXG5cdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRvcGFjaXR5OiAwLjg7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHQuaXNZb3UgLmF1ZGlve1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZmxleCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG5cdC5mbGV4LTEge1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC5tbC0zIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMzBycHg7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHR9XHJcblxyXG5cdC5tci0zIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzMHJweDtcclxuXHR9XHJcblxyXG5cdC53aWZpLXN5bWJvbCB7XHJcblx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQud2lmaS1jaXJjbGUge1xyXG5cdFx0Ym9yZGVyOiA1cnB4IHNvbGlkICMwMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0fVxyXG5cclxuXHQuZmlyc3Qge1xyXG5cdFx0d2lkdGg6IDVycHg7XHJcblx0XHRoZWlnaHQ6IDVycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdFx0dG9wOiA0NXJweDtcclxuXHRcdGxlZnQ6IDQ1cnB4O1xyXG5cdH1cclxuXHJcblx0LnNlY29uZCB7XHJcblx0XHR3aWR0aDogMjVycHg7XHJcblx0XHRoZWlnaHQ6IDI1cnB4O1xyXG5cdFx0dG9wOiAzNXJweDtcclxuXHRcdGxlZnQ6IDM1cnB4O1xyXG5cdH1cclxuXHJcblx0LnRoaXJkIHtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHR0b3A6IDI1cnB4O1xyXG5cdFx0bGVmdDogMjVycHg7XHJcblx0fVxyXG5cclxuXHQuYWN0aXZlIHtcclxuXHRcdC5zZWNvbmQge1xyXG5cdFx0XHRhbmltYXRpb246IGZhZGVJbk91dCAxcyBpbmZpbml0ZSAwLjJzO1xyXG5cdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluT3V0IDFzIGluZmluaXRlIDAuMnM7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRoaXJkIHtcclxuXHRcdFx0YW5pbWF0aW9uOiBmYWRlSW5PdXQgMXMgaW5maW5pdGUgMC40cztcclxuXHRcdFx0LXdlYmtpdC1hbmltYXRpb246IGZhZGVJbk91dCAxcyBpbmZpbml0ZSAwLjRzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QGtleWZyYW1lcyBmYWRlSW5PdXQge1xyXG5cdFx0MCUge1xyXG5cdFx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0XHQvKuWIneWni+eKtuaAgSDpgI/mmI7luqbkuLowKi9cclxuXHRcdH1cclxuXHJcblx0XHQxMDAlIHtcclxuXHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0Lyrnu5PlsL7nirbmgIEg6YCP5piO5bqm5Li6MSovXHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!************************************************************************!*\
  !*** E:/pwl/components/mp-html/node/node.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=script&lang=js& */ 29);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStoQixDQUFnQixra0JBQUcsRUFBQyIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/components/mp-html/node/node.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _eliseAudio = _interopRequireDefault(__webpack_require__(/*! @/components/elise-audio/elise-audio.vue */ 23));\nvar _node = _interopRequireDefault(__webpack_require__(/*! ./node */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 = { name: 'node', options: {}, data: function data() {return { ctrl: {} };}, props: { name: String, attrs: { type: Object, default: function _default() {return {};} }, childs: Array, opts: Array }, components: { node: _node.default, eliseAudio: _eliseAudio.default }, mounted: function mounted() {var _this = this;this.$nextTick(function () {for (_this.root = _this.$parent; _this.root.$options.name !== 'mp-html'; _this.root = _this.root.$parent) {;}});if (this.opts[0]) {var i;for (i = this.childs.length; i--;) {if (this.childs[i].name === 'img') break;}if (i !== -1) {this.observer = uni.createIntersectionObserver(this).relativeToViewport({ top: 500, bottom: 500 });this.observer.observe('._img', function (res) {if (res.intersectionRatio) {_this.$set(_this.ctrl, 'load', 1);_this.observer.disconnect();}});}}}, beforeDestroy: function beforeDestroy() {if (this.observer) {this.observer.disconnect();}}, methods: { /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @description 播放视频事件\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @param {Event} e\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */play: function play(e) {}, /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @description 图片点击事件\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Event} e\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */imgTap: function imgTap(e) {var node = this.childs[e.currentTarget.dataset.i];if (node.a) {this.linkTap(node.a);return;}if (node.attrs.ignore) return;node.attrs.src = node.attrs.src || node.attrs['data-src'];this.root.$emit('imgtap', node.attrs); // 自动预览图片\n      if (this.root.previewImg) {uni.previewImage({ current: parseInt(node.attrs.i), urls: this.root.imgList });}}, /**\n                                                                                                                     * @description 图片长按\n                                                                                                                     */imgLongTap: function imgLongTap(e) {var _this2 = this;var attrs = this.childs[e.currentTarget.dataset.i].attrs;\n      if (this.opts[3] && !attrs.ignore) {\n        uni.showActionSheet({\n          itemList: ['保存图片'],\n          success: function success() {\n            var save = function save(path) {\n              uni.saveImageToPhotosAlbum({\n                filePath: path,\n                success: function success() {\n                  uni.showToast({\n                    title: '保存成功' });\n\n                } });\n\n            };\n            if (_this2.root.imgList[attrs.i].startsWith('http')) {\n              uni.downloadFile({\n                url: _this2.root.imgList[attrs.i],\n                success: function success(res) {return save(res.tempFilePath);} });\n\n            } else {\n              save(_this2.root.imgList[attrs.i]);\n            }\n          } });\n\n      }\n\n    },\n\n    /**\n        * @description 图片加载完成事件\n        * @param {Event} e\n        */\n    imgLoad: function imgLoad(e) {\n      var i = e.currentTarget.dataset.i;\n\n\n\n\n\n      if (this.opts[1] && !this.ctrl[i] || this.ctrl[i] === -1) {\n        // 加载完毕，取消加载中占位图\n        this.$set(this.ctrl, i, 1);\n      }\n    },\n\n    /**\n        * @description 链接点击事件\n        * @param {Event} e\n        */\n    linkTap: function linkTap(e) {\n      var node = e.currentTarget ? this.childs[e.currentTarget.dataset.i] : {};\n      var attrs = node.attrs || e;\n      var href = attrs.href;\n      this.root.$emit('linktap', Object.assign({\n        innerText: this.root.getText(node.children || []) // 链接内的文本内容\n      }, attrs));\n      if (href) {\n        if (href[0] === '#') {\n          // 跳转锚点\n          this.root.navigateTo(href.substring(1)).catch(function () {});\n        } else if (href.split('?')[0].includes('://')) {\n          // 复制外部链接\n          if (this.root.copyLink) {\n\n\n\n\n\n\n\n\n\n\n\n\n\n            plus.runtime.openWeb(href);\n\n          }\n        } else {\n          // 跳转页面\n          uni.navigateTo({\n            url: href,\n            fail: function fail() {\n              uni.switchTab({\n                url: href,\n                fail: function fail() {} });\n\n            } });\n\n        }\n      }\n    },\n\n    /**\n        * @description 错误事件\n        * @param {Event} e\n        */\n    mediaError: function mediaError(e) {\n      var i = e.currentTarget.dataset.i;\n      var node = this.childs[i];\n      // 加载其他源\n      if (node.name === 'video' || node.name === 'audio') {\n        var index = (this.ctrl[i] || 0) + 1;\n        if (index > node.src.length) {\n          index = 0;\n        }\n        if (index < node.src.length) {\n          this.$set(this.ctrl, i, index);\n          return;\n        }\n      } else if (node.name === 'img' && this.opts[2]) {\n        // 显示错误占位图\n        this.$set(this.ctrl, i, -1);\n      }\n      if (this.root) {\n        this.root.$emit('error', {\n          source: node.name,\n          attrs: node.attrs,\n          errMsg: e.detail.errMsg });\n\n      }\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tcC1odG1sL25vZGUvbm9kZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0hBO0FBQ0EsMEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUNBLEVBQ0EsWUFEQSxFQUVBLFdBRkEsRUFVQSxJQVZBLGtCQVVBLENBQ0EsU0FDQSxRQURBLEdBR0EsQ0FkQSxFQWVBLFNBQ0EsWUFEQSxFQUVBLFNBQ0EsWUFEQSxFQUVBLE9BRkEsc0JBRUEsQ0FDQSxVQUNBLENBSkEsRUFGQSxFQVFBLGFBUkEsRUFTQSxXQVRBLEVBZkEsRUEwQkEsY0FFQSxtQkFGQSxFQUdBLCtCQUhBLEVBMUJBLEVBK0JBLE9BL0JBLHFCQStCQSxrQkFDQSw0QkFDQSxpR0FDQSxPQURBLEdBQ0EsQ0FEQSxDQUVBLENBSEEsRUFLQSxtQkFDQSxNQUNBLG9DQUNBLHlDQUNBLENBQ0EsZUFDQSwwRUFDQSxRQURBLEVBRUEsV0FGQSxJQUlBLCtDQUNBLDRCQUNBLGtDQUNBLDRCQUNBLENBQ0EsQ0FMQSxFQU1BLENBQ0EsQ0FFQSxDQXhEQSxFQXlEQSxhQXpEQSwyQkF5REEsQ0FFQSxvQkFDQSwyQkFDQSxDQUVBLENBL0RBLEVBZ0VBLFdBSUE7Ozt5NkJBSUEsSUFSQSxnQkFRQSxDQVJBLEVBUUEsQ0F3QkEsQ0FoQ0EsRUFrQ0E7Ozt1OEJBSUEsTUF0Q0Esa0JBc0NBLENBdENBLEVBc0NBLENBQ0Esa0RBQ0EsYUFDQSxxQkFDQSxPQUNBLENBQ0EsOEJBRUEsMERBRUEsc0NBVkEsQ0FXQTtBQUNBLGlDQUNBLG1CQUNBLCtCQURBLEVBRUEsdUJBRkEsSUFJQSxDQUNBLENBeERBLEVBMERBOzt1SEFHQSxVQTdEQSxzQkE2REEsQ0E3REEsRUE2REEsbUJBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLHVCQUZBLHFCQUVBO0FBQ0E7QUFDQSxpQ0FEQTs7QUFHQSxpQkFOQTs7QUFRQSxhQVRBO0FBVUE7QUFDQTtBQUNBLGlEQURBO0FBRUEsK0VBRkE7O0FBSUEsYUFMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBLFdBckJBOztBQXVCQTs7QUFFQSxLQTFGQTs7QUE0RkE7Ozs7QUFJQSxXQWhHQSxtQkFnR0EsQ0FoR0EsRUFnR0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNHQTs7QUE2R0E7Ozs7QUFJQSxXQWpIQSxtQkFpSEEsQ0FqSEEsRUFpSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQURBLENBQ0E7QUFEQSxTQUVBLEtBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsTUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7O0FBRUE7QUFDQSxTQW5CQSxNQW1CQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLGdCQUZBLGtCQUVBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLG9CQUZBLGtCQUVBLEVBRkE7O0FBSUEsYUFQQTs7QUFTQTtBQUNBO0FBQ0EsS0E1SkE7O0FBOEpBOzs7O0FBSUEsY0FsS0Esc0JBa0tBLENBbEtBLEVBa0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FUQSxNQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsMkJBRkE7QUFHQSxpQ0FIQTs7QUFLQTtBQUNBLEtBMUxBLEVBaEVBLEUiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgOmlkPVwiYXR0cnMuaWRcIiA6Y2xhc3M9XCInX2Jsb2NrIF8nK25hbWUrJyAnK2F0dHJzLmNsYXNzXCIgOnN0eWxlPVwiYXR0cnMuc3R5bGVcIj5cclxuXHRcdDxibG9jayB2LWZvcj1cIihuLCBpKSBpbiBjaGlsZHNcIiB2LWJpbmQ6a2V5PVwiaVwiPlxyXG5cdFx0XHQ8IS0tIOWbvueJhyAtLT5cclxuXHRcdFx0PCEtLSDljaDkvY3lm74gLS0+XHJcblx0XHRcdDxpbWFnZSB2LWlmPVwibi5uYW1lPT09J2ltZycmJigob3B0c1sxXSYmIWN0cmxbaV0pfHxjdHJsW2ldPDApXCIgY2xhc3M9XCJfaW1nXCIgOnN0eWxlPVwibi5hdHRycy5zdHlsZVwiXHJcblx0XHRcdFx0OnNyYz1cImN0cmxbaV08MD9vcHRzWzJdOm9wdHNbMV1cIiBtb2RlPVwid2lkdGhGaXhcIiAvPlxyXG5cdFx0XHQ8IS0tIOaYvuekuuWbvueJhyAtLT5cclxuXHRcdFx0PCEtLSAjaWZkZWYgSDUgfHwgQVBQLVBMVVMgLS0+XHJcblx0XHRcdDxpbWcgdi1pZj1cIm4ubmFtZT09PSdpbWcnXCIgOmlkPVwibi5hdHRycy5pZFwiIDpjbGFzcz1cIidfaW1nICcrbi5hdHRycy5jbGFzc1wiXHJcblx0XHRcdFx0OnN0eWxlPVwiKGN0cmxbaV09PT0tMT8nZGlzcGxheTpub25lOyc6JycpK24uYXR0cnMuc3R5bGVcIlxyXG5cdFx0XHRcdDpzcmM9XCJuLmF0dHJzLnNyY3x8KGN0cmwubG9hZD9uLmF0dHJzWydkYXRhLXNyYyddOicnKVwiIDpkYXRhLWk9XCJpXCIgQGxvYWQ9XCJpbWdMb2FkXCIgQGVycm9yPVwibWVkaWFFcnJvclwiXHJcblx0XHRcdFx0QHRhcC5zdG9wPVwiaW1nVGFwXCIgQGxvbmdwcmVzcz1cImltZ0xvbmdUYXBcIiAvPlxyXG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0PCEtLSAjaWZuZGVmIEg1IHx8IEFQUC1QTFVTIC0tPlxyXG5cdFx0XHQ8aW1hZ2Ugdi1pZj1cIm4ubmFtZT09PSdpbWcnXCIgOmlkPVwibi5hdHRycy5pZFwiIDpjbGFzcz1cIidfaW1nICcrbi5hdHRycy5jbGFzc1wiXHJcblx0XHRcdFx0OnN0eWxlPVwiKGN0cmxbaV09PT0tMT8nZGlzcGxheTpub25lOyc6JycpKyd3aWR0aDonKyhjdHJsW2ldfHwxKSsncHg7aGVpZ2h0OjFweDsnK24uYXR0cnMuc3R5bGVcIlxyXG5cdFx0XHRcdDpzcmM9XCJuLmF0dHJzLnNyY1wiIDptb2RlPVwibi5oPycnOid3aWR0aEZpeCdcIiA6bGF6eS1sb2FkPVwib3B0c1swXVwiIDp3ZWJwPVwibi53ZWJwXCJcclxuXHRcdFx0XHQ6c2hvdy1tZW51LWJ5LWxvbmdwcmVzcz1cIm9wdHNbM10mJiFuLmF0dHJzLmlnbm9yZVwiIDppbWFnZS1tZW51LXByZXZlbnQ9XCIhb3B0c1szXXx8bi5hdHRycy5pZ25vcmVcIlxyXG5cdFx0XHRcdDpkYXRhLWk9XCJpXCIgQGxvYWQ9XCJpbWdMb2FkXCIgQGVycm9yPVwibWVkaWFFcnJvclwiIEB0YXAuc3RvcD1cImltZ1RhcFwiIEBsb25ncHJlc3M9XCJpbWdMb25nVGFwXCIgLz5cclxuXHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdDwhLS0g5paH5pysIC0tPlxyXG5cdFx0XHQ8IS0tICNpZm5kZWYgTVAtQkFJRFUgfHwgTVAtQUxJUEFZIHx8IE1QLVRPVVRJQU8gLS0+XHJcblx0XHRcdDx0ZXh0IHYtZWxzZS1pZj1cIm4udGV4dFwiIDp1c2VyLXNlbGVjdD1cIm4udXNcIiBkZWNvZGU+e3tuLnRleHR9fTwvdGV4dD5cclxuXHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdDx0ZXh0IHYtZWxzZS1pZj1cIm4ubmFtZT09PSdicidcIj5cXG48L3RleHQ+XHJcblx0XHRcdDwhLS0g6ZO+5o6lIC0tPlxyXG5cdFx0XHQ8dmlldyB2LWVsc2UtaWY9XCJuLm5hbWU9PT0nYSdcIiA6aWQ9XCJuLmF0dHJzLmlkXCIgOmNsYXNzPVwiKG4uYXR0cnMuaHJlZj8nX2EgJzonJykrbi5hdHRycy5jbGFzc1wiXHJcblx0XHRcdFx0aG92ZXItY2xhc3M9XCJfaG92ZXJcIiA6c3R5bGU9XCInZGlzcGxheTppbmxpbmU7JytuLmF0dHJzLnN0eWxlXCIgOmRhdGEtaT1cImlcIiBAdGFwLnN0b3A9XCJsaW5rVGFwXCI+XHJcblx0XHRcdFx0PG5vZGUgbmFtZT1cInNwYW5cIiA6Y2hpbGRzPVwibi5jaGlsZHJlblwiIDpvcHRzPVwib3B0c1wiIHN0eWxlPVwiZGlzcGxheTppbmhlcml0XCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOinhumikSAtLT5cclxuXHRcdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMgLS0+XHJcblx0XHRcdDx2aWV3IHYtZWxzZS1pZj1cIm4uaHRtbFwiIDppZD1cIm4uYXR0cnMuaWRcIiA6Y2xhc3M9XCInX3ZpZGVvICcrbi5hdHRycy5jbGFzc1wiIDpzdHlsZT1cIm4uYXR0cnMuc3R5bGVcIlxyXG5cdFx0XHRcdHYtaHRtbD1cIm4uaHRtbFwiIC8+XHJcblx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHQ8IS0tICNpZm5kZWYgQVBQLVBMVVMgLS0+XHJcblx0XHRcdDx2aWRlbyB2LWVsc2UtaWY9XCJuLm5hbWU9PT0ndmlkZW8nXCIgOmlkPVwibi5hdHRycy5pZFwiIDpjbGFzcz1cIm4uYXR0cnMuY2xhc3NcIiA6c3R5bGU9XCJuLmF0dHJzLnN0eWxlXCJcclxuXHRcdFx0XHQ6YXV0b3BsYXk9XCJuLmF0dHJzLmF1dG9wbGF5XCIgOmNvbnRyb2xzPVwibi5hdHRycy5jb250cm9sc1wiIDpsb29wPVwibi5hdHRycy5sb29wXCIgOm11dGVkPVwibi5hdHRycy5tdXRlZFwiXHJcblx0XHRcdFx0OnBvc3Rlcj1cIm4uYXR0cnMucG9zdGVyXCIgOnNyYz1cIm4uc3JjW2N0cmxbaV18fDBdXCIgOmRhdGEtaT1cImlcIiBAcGxheT1cInBsYXlcIiBAZXJyb3I9XCJtZWRpYUVycm9yXCIgLz5cclxuXHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdDwhLS0gI2lmZGVmIEg1IHx8IEFQUC1QTFVTIC0tPlxyXG5cdFx0XHQ8aWZyYW1lIHYtZWxzZS1pZj1cIm4ubmFtZT09PSdpZnJhbWUnXCIgOnN0eWxlPVwibi5hdHRycy5zdHlsZVwiIDphbGxvd2Z1bGxzY3JlZW49XCJuLmF0dHJzLmFsbG93ZnVsbHNjcmVlblwiXHJcblx0XHRcdFx0OmZyYW1lYm9yZGVyPVwibi5hdHRycy5mcmFtZWJvcmRlclwiIDpzcmM9XCJuLmF0dHJzLnNyY1wiIC8+XHJcblx0XHRcdDxlbWJlZCB2LWVsc2UtaWY9XCJuLm5hbWU9PT0nZW1iZWQnXCIgOnN0eWxlPVwibi5hdHRycy5zdHlsZVwiIDpzcmM9XCJuLmF0dHJzLnNyY1wiIC8+XHJcblx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHQ8IS0tICNpZm5kZWYgTVAtVE9VVElBTyAtLT5cclxuXHRcdFx0PCEtLSDpn7PpopEgLS0+XHJcblx0XHRcdDwhLS0gPGF1ZGlvIHYtZWxzZS1pZj1cIm4ubmFtZT09PSdhdWRpbydcIiA6aWQ9XCJuLmF0dHJzLmlkXCIgOmNsYXNzPVwibi5hdHRycy5jbGFzc1wiIDpzdHlsZT1cIm4uYXR0cnMuc3R5bGVcIiA6YXV0aG9yPVwibi5hdHRycy5hdXRob3JcIiA6Y29udHJvbHM9XCJuLmF0dHJzLmNvbnRyb2xzXCIgOmxvb3A9XCJuLmF0dHJzLmxvb3BcIiA6bmFtZT1cIm4uYXR0cnMubmFtZVwiIDpwb3N0ZXI9XCJuLmF0dHJzLnBvc3RlclwiIDpzcmM9XCJuLnNyY1tjdHJsW2ldfHwwXVwiIDpkYXRhLWk9XCJpXCIgQHBsYXk9XCJwbGF5XCIgQGVycm9yPVwibWVkaWFFcnJvclwiIC8+IC0tPlxyXG5cdFx0XHQ8ZWxpc2UtYXVkaW8gdi1lbHNlLWlmPVwibi5uYW1lPT09J2F1ZGlvJ1wiIDphdWRpb0lkPVwibi5hdHRycy5pZFwiIDp1cmw9XCJuLnNyY1tjdHJsW2ldfHwwXVwiIGF1ZGlvQ29sb3I9XCIjRTBFMEUwXCI+PC9lbGlzZS1hdWRpbz5cclxuXHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdDx2aWV3IHYtZWxzZS1pZj1cIihuLm5hbWU9PT0ndGFibGUnJiZuLmMpfHxuLm5hbWU9PT0nbGknXCIgOmlkPVwibi5hdHRycy5pZFwiXHJcblx0XHRcdFx0OmNsYXNzPVwiJ18nK24ubmFtZSsnICcrbi5hdHRycy5jbGFzc1wiIDpzdHlsZT1cIm4uYXR0cnMuc3R5bGVcIj5cclxuXHRcdFx0XHQ8bm9kZSB2LWlmPVwibi5uYW1lPT09J2xpJ1wiIDpjaGlsZHM9XCJuLmNoaWxkcmVuXCIgOm9wdHM9XCJvcHRzXCIgLz5cclxuXHRcdFx0XHQ8dmlldyB2LWVsc2Ugdi1mb3I9XCIodGJvZHksIHgpIGluIG4uY2hpbGRyZW5cIiB2LWJpbmQ6a2V5PVwieFwiXHJcblx0XHRcdFx0XHQ6Y2xhc3M9XCInXycrdGJvZHkubmFtZSsnICcrdGJvZHkuYXR0cnMuY2xhc3NcIiA6c3R5bGU9XCJ0Ym9keS5hdHRycy5zdHlsZVwiPlxyXG5cdFx0XHRcdFx0PG5vZGUgdi1pZj1cInRib2R5Lm5hbWU9PT0ndGQnfHx0Ym9keS5uYW1lPT09J3RoJ1wiIDpjaGlsZHM9XCJ0Ym9keS5jaGlsZHJlblwiIDpvcHRzPVwib3B0c1wiIC8+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1lbHNlIHYtZm9yPVwiKHRyLCB5KSBpbiB0Ym9keS5jaGlsZHJlblwiIHYtYmluZDprZXk9XCJ5XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJ0ci5uYW1lPT09J3RkJ3x8dHIubmFtZT09PSd0aCdcIiA6Y2xhc3M9XCInXycrdHIubmFtZSsnICcrdHIuYXR0cnMuY2xhc3NcIlxyXG5cdFx0XHRcdFx0XHRcdDpzdHlsZT1cInRyLmF0dHJzLnN0eWxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PG5vZGUgOmNoaWxkcz1cInRyLmNoaWxkcmVuXCIgOm9wdHM9XCJvcHRzXCIgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWVsc2UgOmNsYXNzPVwiJ18nK3RyLm5hbWUrJyAnK3RyLmF0dHJzLmNsYXNzXCIgOnN0eWxlPVwidHIuYXR0cnMuc3R5bGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIih0ZCwgeikgaW4gdHIuY2hpbGRyZW5cIiB2LWJpbmQ6a2V5PVwielwiIDpjbGFzcz1cIidfJyt0ZC5uYW1lKycgJyt0ZC5hdHRycy5jbGFzc1wiXHJcblx0XHRcdFx0XHRcdFx0XHQ6c3R5bGU9XCJ0ZC5hdHRycy5zdHlsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG5vZGUgOmNoaWxkcz1cInRkLmNoaWxkcmVuXCIgOm9wdHM9XCJvcHRzXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8IS0tIOWvjOaWh+acrCAtLT5cclxuXHRcdFx0PCEtLSAjaWZkZWYgSDUgfHwgTVAtV0VJWElOIHx8IE1QLVFRIHx8IEFQUC1QTFVTIHx8IE1QLTM2MCAtLT5cclxuXHRcdFx0PHJpY2gtdGV4dCB2LWVsc2UtaWY9XCJoYW5kbGVyLnVzZShuKVwiIDppZD1cIm4uYXR0cnMuaWRcIiA6c3R5bGU9XCJuLmZcIiA6bm9kZXM9XCJbbl1cIiAvPlxyXG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0PCEtLSAjaWZuZGVmIEg1IHx8IE1QLVdFSVhJTiB8fCBNUC1RUSB8fCBBUFAtUExVUyB8fCBNUC0zNjAgLS0+XHJcblx0XHRcdDxyaWNoLXRleHQgdi1lbHNlLWlmPVwiIW4uY1wiIDppZD1cIm4uYXR0cnMuaWRcIiA6c3R5bGU9XCJuLmYrJztkaXNwbGF5OmlubGluZSdcIiA6cHJldmlldz1cImZhbHNlXCIgOm5vZGVzPVwiW25dXCIgLz5cclxuXHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdDwhLS0g57un57ut6YCS5b2SIC0tPlxyXG5cdFx0XHQ8dmlldyB2LWVsc2UtaWY9XCJuLmM9PT0yXCIgOmlkPVwibi5hdHRycy5pZFwiIDpjbGFzcz1cIidfYmxvY2sgXycrbi5uYW1lKycgJytuLmF0dHJzLmNsYXNzXCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJuLmYrJzsnK24uYXR0cnMuc3R5bGVcIj5cclxuXHRcdFx0XHQ8bm9kZSB2LWZvcj1cIihuMiwgaikgaW4gbi5jaGlsZHJlblwiIHYtYmluZDprZXk9XCJqXCIgOnN0eWxlPVwibjIuZlwiIDpuYW1lPVwibjIubmFtZVwiIDphdHRycz1cIm4yLmF0dHJzXCJcclxuXHRcdFx0XHRcdDpjaGlsZHM9XCJuMi5jaGlsZHJlblwiIDpvcHRzPVwib3B0c1wiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PG5vZGUgdi1lbHNlIDpzdHlsZT1cIm4uZlwiIDpuYW1lPVwibi5uYW1lXCIgOmF0dHJzPVwibi5hdHRyc1wiIDpjaGlsZHM9XCJuLmNoaWxkcmVuXCIgOm9wdHM9XCJvcHRzXCIgLz5cclxuXHRcdDwvYmxvY2s+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0IG1vZHVsZT1cImhhbmRsZXJcIiBsYW5nPVwid3hzXCI+XHJcblx0Ly8g6KGM5YaF5qCH562+5YiX6KGoXHJcblx0dmFyIGlubGluZVRhZ3MgPSB7XHJcblx0XHRhYmJyOiB0cnVlLFxyXG5cdFx0YjogdHJ1ZSxcclxuXHRcdGJpZzogdHJ1ZSxcclxuXHRcdGNvZGU6IHRydWUsXHJcblx0XHRkZWw6IHRydWUsXHJcblx0XHRlbTogdHJ1ZSxcclxuXHRcdGk6IHRydWUsXHJcblx0XHRpbnM6IHRydWUsXHJcblx0XHRsYWJlbDogdHJ1ZSxcclxuXHRcdHE6IHRydWUsXHJcblx0XHRzbWFsbDogdHJ1ZSxcclxuXHRcdHNwYW46IHRydWUsXHJcblx0XHRzdHJvbmc6IHRydWUsXHJcblx0XHRzdWI6IHRydWUsXHJcblx0XHRzdXA6IHRydWVcclxuXHR9XHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIOaYr+WQpuS9v+eUqCByaWNoLXRleHQg5pi+56S65Ymp5L2Z5YaF5a65XHJcblx0ICovXHJcblx0bW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XHR1c2U6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0aWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcblx0XHRcdC8vIOW+ruS/oeWSjCBRUSDnmoQgcmljaC10ZXh0IGlubGluZSDluIPlsYDml6DmlYhcclxuXHRcdFx0cmV0dXJuICFpbmxpbmVUYWdzW2l0ZW0ubmFtZV0gJiYgKGl0ZW0uYXR0cnMuc3R5bGUgfHwgJycpLmluZGV4T2YoJ2Rpc3BsYXk6aW5saW5lJykgPT0gLTFcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBlbGlzZUF1ZGlvIGZyb20gJ0AvY29tcG9uZW50cy9lbGlzZS1hdWRpby9lbGlzZS1hdWRpby52dWUnXHJcblx0aW1wb3J0IG5vZGUgZnJvbSAnLi9ub2RlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdub2RlJyxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHR2aXJ0dWFsSG9zdDogdHJ1ZSxcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRcdGFkZEdsb2JhbENsYXNzOiBmYWxzZVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGN0cmw6IHt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRuYW1lOiBTdHJpbmcsXHJcblx0XHRcdGF0dHJzOiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGlsZHM6IEFycmF5LFxyXG5cdFx0XHRvcHRzOiBBcnJheVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHJcblx0XHRcdG5vZGUsXHJcblx0XHRcdGVsaXNlQXVkaW9cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0Zm9yICh0aGlzLnJvb3QgPSB0aGlzLiRwYXJlbnQ7IHRoaXMucm9vdC4kb3B0aW9ucy5uYW1lICE9PSAnbXAtaHRtbCc7IHRoaXMucm9vdCA9IHRoaXMucm9vdFxyXG5cdFx0XHRcdFx0LiRwYXJlbnQpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQvLyAjaWZkZWYgSDUgfHwgQVBQLVBMVVNcclxuXHRcdFx0aWYgKHRoaXMub3B0c1swXSkge1xyXG5cdFx0XHRcdGxldCBpXHJcblx0XHRcdFx0Zm9yIChpID0gdGhpcy5jaGlsZHMubGVuZ3RoOyBpLS07KSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jaGlsZHNbaV0ubmFtZSA9PT0gJ2ltZycpIGJyZWFrXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChpICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5vYnNlcnZlciA9IHVuaS5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzKS5yZWxhdGl2ZVRvVmlld3BvcnQoe1xyXG5cdFx0XHRcdFx0XHR0b3A6IDUwMCxcclxuXHRcdFx0XHRcdFx0Ym90dG9tOiA1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR0aGlzLm9ic2VydmVyLm9ic2VydmUoJy5faW1nJywgcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5pbnRlcnNlY3Rpb25SYXRpbykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmN0cmwsICdsb2FkJywgMSlcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH0sXHJcblx0XHRiZWZvcmVEZXN0cm95KCkge1xyXG5cdFx0XHQvLyAjaWZkZWYgSDUgfHwgQVBQLVBMVVNcclxuXHRcdFx0aWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuXHRcdFx0XHR0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHR0b0pTT04oKSB7fSxcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBAZGVzY3JpcHRpb24g5pKt5pS+6KeG6aKR5LqL5Lu2XHJcblx0XHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcclxuXHRcdFx0ICovXHJcblx0XHRcdHBsYXkoZSkge1xyXG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRpZiAodGhpcy5yb290LnBhdXNlVmlkZW8pIHtcclxuXHRcdFx0XHRcdGxldCBmbGFnID0gZmFsc2U7XHJcblx0XHRcdFx0XHRjb25zdCBpZCA9IGUudGFyZ2V0LmlkXHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gdGhpcy5yb290Ll92aWRlb3MubGVuZ3RoOyBpLS07KSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnJvb3QuX3ZpZGVvc1tpXS5pZCA9PT0gaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGFnID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucm9vdC5fdmlkZW9zW2ldLnBhdXNlKCkgLy8g6Ieq5Yqo5pqC5YGc5YW25LuW6KeG6aKRXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIOWwhuiHquW3seWKoOWFpeWIl+ihqFxyXG5cdFx0XHRcdFx0aWYgKCFmbGFnKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGN0eCA9IHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoaWRcclxuXHRcdFx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QLUJBSURVXHJcblx0XHRcdFx0XHRcdFx0LCB0aGlzXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0Y3R4LmlkID0gaWRcclxuXHRcdFx0XHRcdFx0dGhpcy5yb290Ll92aWRlb3MucHVzaChjdHgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIEBkZXNjcmlwdGlvbiDlm77niYfngrnlh7vkuovku7ZcclxuXHRcdFx0ICogQHBhcmFtIHtFdmVudH0gZVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0aW1nVGFwKGUpIHtcclxuXHRcdFx0XHRjb25zdCBub2RlID0gdGhpcy5jaGlsZHNbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaV1cclxuXHRcdFx0XHRpZiAobm9kZS5hKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxpbmtUYXAobm9kZS5hKVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChub2RlLmF0dHJzLmlnbm9yZSkgcmV0dXJuXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1IHx8IEFQUC1QTFVTXHJcblx0XHRcdFx0bm9kZS5hdHRycy5zcmMgPSBub2RlLmF0dHJzLnNyYyB8fCBub2RlLmF0dHJzWydkYXRhLXNyYyddXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0dGhpcy5yb290LiRlbWl0KCdpbWd0YXAnLCBub2RlLmF0dHJzKVxyXG5cdFx0XHRcdC8vIOiHquWKqOmihOiniOWbvueJh1xyXG5cdFx0XHRcdGlmICh0aGlzLnJvb3QucHJldmlld0ltZykge1xyXG5cdFx0XHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0XHRcdGN1cnJlbnQ6IHBhcnNlSW50KG5vZGUuYXR0cnMuaSksXHJcblx0XHRcdFx0XHRcdHVybHM6IHRoaXMucm9vdC5pbWdMaXN0XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBAZGVzY3JpcHRpb24g5Zu+54mH6ZW/5oyJXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpbWdMb25nVGFwKGUpIHtcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRjb25zdCBhdHRycyA9IHRoaXMuY2hpbGRzW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmldLmF0dHJzXHJcblx0XHRcdFx0aWYgKHRoaXMub3B0c1szXSAmJiAhYXR0cnMuaWdub3JlKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd0FjdGlvblNoZWV0KHtcclxuXHRcdFx0XHRcdFx0aXRlbUxpc3Q6IFsn5L+d5a2Y5Zu+54mHJ10sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBzYXZlID0gcGF0aCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGVQYXRoOiBwYXRoLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkv53lrZjmiJDlip8nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucm9vdC5pbWdMaXN0W2F0dHJzLmldLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLmRvd25sb2FkRmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogdGhpcy5yb290LmltZ0xpc3RbYXR0cnMuaV0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiBzYXZlKHJlcy50ZW1wRmlsZVBhdGgpXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzYXZlKHRoaXMucm9vdC5pbWdMaXN0W2F0dHJzLmldKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogQGRlc2NyaXB0aW9uIOWbvueJh+WKoOi9veWujOaIkOS6i+S7tlxyXG5cdFx0XHQgKiBAcGFyYW0ge0V2ZW50fSBlXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpbWdMb2FkKGUpIHtcclxuXHRcdFx0XHRjb25zdCBpID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaVxyXG5cdFx0XHRcdC8qICNpZm5kZWYgSDUgfHwgQVBQLVBMVVMgKi9cclxuXHRcdFx0XHRpZiAoIXRoaXMuY2hpbGRzW2ldLncpIHtcclxuXHRcdFx0XHRcdC8vIOiuvue9ruWOn+WuveW6plxyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuY3RybCwgaSwgZS5kZXRhaWwud2lkdGgpXHJcblx0XHRcdFx0fSBlbHNlIC8qICNlbmRpZiAqL1xyXG5cdFx0XHRcdFx0aWYgKCh0aGlzLm9wdHNbMV0gJiYgIXRoaXMuY3RybFtpXSkgfHwgdGhpcy5jdHJsW2ldID09PSAtMSkge1xyXG5cdFx0XHRcdFx0XHQvLyDliqDovb3lrozmr5XvvIzlj5bmtojliqDovb3kuK3ljaDkvY3lm75cclxuXHRcdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuY3RybCwgaSwgMSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBAZGVzY3JpcHRpb24g6ZO+5o6l54K55Ye75LqL5Lu2XHJcblx0XHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcclxuXHRcdFx0ICovXHJcblx0XHRcdGxpbmtUYXAoZSkge1xyXG5cdFx0XHRcdGNvbnN0IG5vZGUgPSBlLmN1cnJlbnRUYXJnZXQgPyB0aGlzLmNoaWxkc1tlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pXSA6IHt9XHJcblx0XHRcdFx0Y29uc3QgYXR0cnMgPSBub2RlLmF0dHJzIHx8IGVcclxuXHRcdFx0XHRjb25zdCBocmVmID0gYXR0cnMuaHJlZlxyXG5cdFx0XHRcdHRoaXMucm9vdC4kZW1pdCgnbGlua3RhcCcsIE9iamVjdC5hc3NpZ24oe1xyXG5cdFx0XHRcdFx0aW5uZXJUZXh0OiB0aGlzLnJvb3QuZ2V0VGV4dChub2RlLmNoaWxkcmVuIHx8IFtdKSAvLyDpk77mjqXlhoXnmoTmlofmnKzlhoXlrrlcclxuXHRcdFx0XHR9LCBhdHRycykpXHJcblx0XHRcdFx0aWYgKGhyZWYpIHtcclxuXHRcdFx0XHRcdGlmIChocmVmWzBdID09PSAnIycpIHtcclxuXHRcdFx0XHRcdFx0Ly8g6Lez6L2s6ZSa54K5XHJcblx0XHRcdFx0XHRcdHRoaXMucm9vdC5uYXZpZ2F0ZVRvKGhyZWYuc3Vic3RyaW5nKDEpKS5jYXRjaCgoKSA9PiB7fSlcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoaHJlZi5zcGxpdCgnPycpWzBdLmluY2x1ZGVzKCc6Ly8nKSkge1xyXG5cdFx0XHRcdFx0XHQvLyDlpI3liLblpJbpg6jpk77mjqVcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucm9vdC5jb3B5TGluaykge1xyXG5cdFx0XHRcdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5vcGVuKGhyZWYpXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2lmZGVmIE1QXHJcblx0XHRcdFx0XHRcdFx0dW5pLnNldENsaXBib2FyZERhdGEoe1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YTogaHJlZixcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6ICgpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6ZO+5o6l5bey5aSN5Yi2J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRcdFx0cGx1cy5ydW50aW1lLm9wZW5XZWIoaHJlZilcclxuXHRcdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g6Lez6L2s6aG16Z2iXHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6IGhyZWYsXHJcblx0XHRcdFx0XHRcdFx0ZmFpbCgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IGhyZWYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZhaWwoKSB7fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIEBkZXNjcmlwdGlvbiDplJnor6/kuovku7ZcclxuXHRcdFx0ICogQHBhcmFtIHtFdmVudH0gZVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0bWVkaWFFcnJvcihlKSB7XHJcblx0XHRcdFx0Y29uc3QgaSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlcclxuXHRcdFx0XHRjb25zdCBub2RlID0gdGhpcy5jaGlsZHNbaV1cclxuXHRcdFx0XHQvLyDliqDovb3lhbbku5bmupBcclxuXHRcdFx0XHRpZiAobm9kZS5uYW1lID09PSAndmlkZW8nIHx8IG5vZGUubmFtZSA9PT0gJ2F1ZGlvJykge1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gKHRoaXMuY3RybFtpXSB8fCAwKSArIDFcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IG5vZGUuc3JjLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRpbmRleCA9IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChpbmRleCA8IG5vZGUuc3JjLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5jdHJsLCBpLCBpbmRleClcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChub2RlLm5hbWUgPT09ICdpbWcnICYmIHRoaXMub3B0c1syXSkge1xyXG5cdFx0XHRcdFx0Ly8g5pi+56S66ZSZ6K+v5Y2g5L2N5Zu+XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5jdHJsLCBpLCAtMSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMucm9vdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5yb290LiRlbWl0KCdlcnJvcicsIHtcclxuXHRcdFx0XHRcdFx0c291cmNlOiBub2RlLm5hbWUsXHJcblx0XHRcdFx0XHRcdGF0dHJzOiBub2RlLmF0dHJzLFxyXG5cdFx0XHRcdFx0XHRlcnJNc2c6IGUuZGV0YWlsLmVyck1zZ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblx0LyogYSDmoIfnrb7pu5jorqTmlYjmnpwgKi9cclxuXHQuX2Ege1xyXG5cdFx0cGFkZGluZzogMS41cHggMCAxLjVweCAwO1xyXG5cdFx0Y29sb3I6ICMzNjYwOTI7XHJcblx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblx0fVxyXG5cclxuXHQvKiBhIOagh+etvueCueWHu+aAgeaViOaenCAqL1xyXG5cdC5faG92ZXIge1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRvcGFjaXR5OiAwLjc7XHJcblx0fVxyXG5cclxuXHQvKiDlm77niYfpu5jorqTmlYjmnpwgKi9cclxuXHQuX2ltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQvKiDlhoXpg6jmoLflvI8gKi9cclxuXHJcblx0Ll9ibG9jayB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblxyXG5cdC5fYixcclxuXHQuX3N0cm9uZyB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5fY29kZSB7XHJcblx0XHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5cdH1cclxuXHJcblx0Ll9kZWwge1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0fVxyXG5cclxuXHQuX2VtLFxyXG5cdC5faSB7XHJcblx0XHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0fVxyXG5cclxuXHQuX2gxIHtcclxuXHRcdGZvbnQtc2l6ZTogMmVtO1xyXG5cdH1cclxuXHJcblx0Ll9oMiB7XHJcblx0XHRmb250LXNpemU6IDEuNWVtO1xyXG5cdH1cclxuXHJcblx0Ll9oMyB7XHJcblx0XHRmb250LXNpemU6IDEuMTdlbTtcclxuXHR9XHJcblxyXG5cdC5faDUge1xyXG5cdFx0Zm9udC1zaXplOiAwLjgzZW07XHJcblx0fVxyXG5cclxuXHQuX2g2IHtcclxuXHRcdGZvbnQtc2l6ZTogMC42N2VtO1xyXG5cdH1cclxuXHJcblx0Ll9oMSxcclxuXHQuX2gyLFxyXG5cdC5faDMsXHJcblx0Ll9oNCxcclxuXHQuX2g1LFxyXG5cdC5faDYge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblxyXG5cdC5faW1hZ2Uge1xyXG5cdFx0aGVpZ2h0OiAxcHg7XHJcblx0fVxyXG5cclxuXHQuX2lucyB7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHR9XHJcblxyXG5cdC5fbGkge1xyXG5cdFx0ZGlzcGxheTogbGlzdC1pdGVtO1xyXG5cdH1cclxuXHJcblx0Ll9vbCB7XHJcblx0XHRsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XHJcblx0fVxyXG5cclxuXHQuX29sLFxyXG5cdC5fdWwge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcblx0XHRtYXJnaW46IDFlbSAwO1xyXG5cdH1cclxuXHJcblx0Ll9xOjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJ1wiJztcclxuXHR9XHJcblxyXG5cdC5fcTo6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJ1wiJztcclxuXHR9XHJcblxyXG5cdC5fc3ViIHtcclxuXHRcdGZvbnQtc2l6ZTogc21hbGxlcjtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcblx0fVxyXG5cclxuXHQuX3N1cCB7XHJcblx0XHRmb250LXNpemU6IHNtYWxsZXI7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcblx0fVxyXG5cclxuXHQuX3RoZWFkLFxyXG5cdC5fdGJvZHksXHJcblx0Ll90Zm9vdCB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcblx0fVxyXG5cclxuXHQuX3RyIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlLXJvdztcclxuXHR9XHJcblxyXG5cdC5fdGQsXHJcblx0Ll90aCB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHR9XHJcblxyXG5cdC5fdGgge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuX3VsIHtcclxuXHRcdGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxuXHR9XHJcblxyXG5cdC5fdWwgLl91bCB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcclxuXHR9XHJcblxyXG5cdC5fdWwgLl91bCAuX3VsIHtcclxuXHRcdGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG5cdH1cclxuXHJcblx0Ll9hYmJyLFxyXG5cdC5fYixcclxuXHQuX2NvZGUsXHJcblx0Ll9kZWwsXHJcblx0Ll9lbSxcclxuXHQuX2ksXHJcblx0Ll9pbnMsXHJcblx0Ll9sYWJlbCxcclxuXHQuX3EsXHJcblx0Ll9zcGFuLFxyXG5cdC5fc3Ryb25nLFxyXG5cdC5fc3ViLFxyXG5cdC5fc3VwIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZTtcclxuXHR9XHJcblxyXG5cdC8qICNpZmRlZiBBUFAtUExVUyAqL1xyXG5cdC5fdmlkZW8ge1xyXG5cdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0aGVpZ2h0OiAyMjVweDtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!****************************************************************************************************************!*\
  !*** E:/pwl/components/mp-html/node/node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs */ 31);\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBd1csQ0FBZ0IsaWFBQUcsRUFBQyIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1maWx0ZXItbG9hZGVyXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGUudnVlP3Z1ZSZ0eXBlPWN1c3RvbSZpbmRleD0wJmJsb2NrVHlwZT1zY3JpcHQmbW9kdWxlPWhhbmRsZXImbGFuZz13eHNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWZpbHRlci1sb2FkZXJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZS52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPXNjcmlwdCZtb2R1bGU9aGFuZGxlciZsYW5nPXd4c1wiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/components/mp-html/node/node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n       (Component.options.wxs||(Component.options.wxs={}))['handler'] = (function(module){\n       // 行内标签列表\nvar inlineTags = {\n\tabbr: true,\n\tb: true,\n\tbig: true,\n\tcode: true,\n\tdel: true,\n\tem: true,\n\ti: true,\n\tins: true,\n\tlabel: true,\n\tq: true,\n\tsmall: true,\n\tspan: true,\n\tstrong: true,\n\tsub: true,\n\tsup: true\n}\n/**\n * @description 是否使用 rich-text 显示剩余内容\n */\nmodule.exports = {\n\tuse: function(item) {\n\t\tif (item.c) return false\n\t\t// 微信和 QQ 的 rich-text inline 布局无效\n\t\treturn !inlineTags[item.name] && (item.attrs.style || '').indexOf('display:inline') == -1\n\t}\n}\n       return module.exports\n       })({exports:{}});\n     });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZix3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsR0FBRyxXQUFXO0FBQ3RCLE0iLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgICAgKENvbXBvbmVudC5vcHRpb25zLnd4c3x8KENvbXBvbmVudC5vcHRpb25zLnd4cz17fSkpWydoYW5kbGVyJ10gPSAoZnVuY3Rpb24obW9kdWxlKXtcbiAgICAgICAvLyDooYzlhoXmoIfnrb7liJfooahcbnZhciBpbmxpbmVUYWdzID0ge1xuXHRhYmJyOiB0cnVlLFxuXHRiOiB0cnVlLFxuXHRiaWc6IHRydWUsXG5cdGNvZGU6IHRydWUsXG5cdGRlbDogdHJ1ZSxcblx0ZW06IHRydWUsXG5cdGk6IHRydWUsXG5cdGluczogdHJ1ZSxcblx0bGFiZWw6IHRydWUsXG5cdHE6IHRydWUsXG5cdHNtYWxsOiB0cnVlLFxuXHRzcGFuOiB0cnVlLFxuXHRzdHJvbmc6IHRydWUsXG5cdHN1YjogdHJ1ZSxcblx0c3VwOiB0cnVlXG59XG4vKipcbiAqIEBkZXNjcmlwdGlvbiDmmK/lkKbkvb/nlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dXNlOiBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXG5cdFx0Ly8g5b6u5L+h5ZKMIFFRIOeahCByaWNoLXRleHQgaW5saW5lIOW4g+WxgOaXoOaViFxuXHRcdHJldHVybiAhaW5saW5lVGFnc1tpdGVtLm5hbWVdICYmIChpdGVtLmF0dHJzLnN0eWxlIHx8ICcnKS5pbmRleE9mKCdkaXNwbGF5OmlubGluZScpID09IC0xXG5cdH1cbn1cbiAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHNcbiAgICAgICB9KSh7ZXhwb3J0czp7fX0pO1xuICAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*******************************************!*\
  !*** E:/pwl/components/mp-html/parser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * @fileoverview html 解析器\r\n */\n\n// 配置\nvar config = {\n  // 信任的标签（保持标签名不变）\n  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),\n\n  // 块级标签（转为 div，其他的非信任标签转为 span）\n  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),\n\n  // 要移除的标签\n  ignoreTags: makeMap('area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr'),\n\n  // 自闭合的标签\n  voidTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),\n\n  // html 实体\n  entities: {\n    lt: '<',\n    gt: '>',\n    quot: '\"',\n    apos: \"'\",\n    ensp: \"\\u2002\",\n    emsp: \"\\u2003\",\n    nbsp: '\\xA0',\n    semi: ';',\n    ndash: '–',\n    mdash: '—',\n    middot: '·',\n    lsquo: '‘',\n    rsquo: '’',\n    ldquo: '“',\n    rdquo: '”',\n    bull: '•',\n    hellip: '…' },\n\n\n  // 默认的标签样式\n  tagStyle: {\n\n    address: 'font-style:italic',\n    big: 'display:inline;font-size:1.2em',\n    caption: 'display:table-caption;text-align:center',\n    center: 'text-align:center',\n    cite: 'font-style:italic',\n    dd: 'margin-left:40px',\n    mark: 'background-color:yellow',\n    pre: 'font-family:monospace;white-space:pre',\n    s: 'text-decoration:line-through',\n    small: 'display:inline;font-size:0.8em',\n    strike: 'text-decoration:line-through',\n    u: 'text-decoration:underline' },\n\n\n\n  // svg 大小写对照表\n  svgDict: {\n    animatetransform: 'animateTransform',\n    lineargradient: 'linearGradient',\n    viewbox: 'viewBox',\n    attributename: 'attributeName',\n    repeatcount: 'repeatCount',\n    repeatdur: 'repeatDur' } };\n\n\nvar tagSelector = {};var _uni$getSystemInfoSyn =\n\n\n\n\n\nuni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth;\nvar blankChar = makeMap(' ,\\r,\\n,\\t,\\f');\nvar idIndex = 0;\n\n\nconfig.ignoreTags.iframe = undefined;\nconfig.trustTags.iframe = true;\nconfig.ignoreTags.embed = undefined;\nconfig.trustTags.embed = true;\n\n\n\n\n\n\n/**\r\n                                * @description 创建 map\r\n                                * @param {String} str 逗号分隔\r\n                                */\nfunction makeMap(str) {\n  var map = Object.create(null);\n  var list = str.split(',');\n  for (var i = list.length; i--;) {\n    map[list[i]] = true;\n  }\n  return map;\n}\n\n/**\r\n   * @description 解码 html 实体\r\n   * @param {String} str 要解码的字符串\r\n   * @param {Boolean} amp 要不要解码 &amp;\r\n   * @returns {String} 解码后的字符串\r\n   */\nfunction decodeEntity(str, amp) {\n  var i = str.indexOf('&');\n  while (i !== -1) {\n    var j = str.indexOf(';', i + 3);\n    var code = void 0;\n    if (j === -1) break;\n    if (str[i + 1] === '#') {\n      // &#123; 形式的实体\n      code = parseInt((str[i + 2] === 'x' ? '0' : '') + str.substring(i + 2, j));\n      if (!isNaN(code)) {\n        str = str.substr(0, i) + String.fromCharCode(code) + str.substr(j + 1);\n      }\n    } else {\n      // &nbsp; 形式的实体\n      code = str.substring(i + 1, j);\n      if (config.entities[code] || code === 'amp' && amp) {\n        str = str.substr(0, i) + (config.entities[code] || '&') + str.substr(j + 1);\n      }\n    }\n    i = str.indexOf('&', i + 1);\n  }\n  return str;\n}\n\n/**\r\n   * @description html 解析器\r\n   * @param {Object} vm 组件实例\r\n   */\nfunction Parser(vm) {\n  this.options = vm || {};\n  this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);\n  this.imgList = vm.imgList || [];\n  this.plugins = vm.plugins || [];\n  this.attrs = Object.create(null);\n  this.stack = [];\n  this.nodes = [];\n  this.pre = (this.options.containerStyle || '').includes('white-space') && this.options.containerStyle.includes('pre') ? 2 : 0;\n}\n\n/**\r\n   * @description 执行解析\r\n   * @param {String} content 要解析的文本\r\n   */\nParser.prototype.parse = function (content) {\n  // 插件处理\n  for (var i = this.plugins.length; i--;) {\n    if (this.plugins[i].onUpdate) {\n      content = this.plugins[i].onUpdate(content, config) || content;\n    }\n  }\n\n  new Lexer(this).parse(content);\n  // 出栈未闭合的标签\n  while (this.stack.length) {\n    this.popNode();\n  }\n  return this.nodes;\n};\n\n/**\r\n    * @description 将标签暴露出来（不被 rich-text 包含）\r\n    */\nParser.prototype.expose = function () {\n\n  for (var i = this.stack.length; i--;) {\n    var item = this.stack[i];\n    if (item.c || item.name === 'a' || item.name === 'video' || item.name === 'audio') return;\n    item.c = 1;\n  }\n\n};\n\n/**\r\n    * @description 处理插件\r\n    * @param {Object} node 要处理的标签\r\n    * @returns {Boolean} 是否要移除此标签\r\n    */\nParser.prototype.hook = function (node) {\n  for (var i = this.plugins.length; i--;) {\n    if (this.plugins[i].onParse && this.plugins[i].onParse(node, this) === false) {\n      return false;\n    }\n  }\n  return true;\n};\n\n/**\r\n    * @description 将链接拼接上主域名\r\n    * @param {String} url 需要拼接的链接\r\n    * @returns {String} 拼接后的链接\r\n    */\nParser.prototype.getUrl = function (url) {\n  var domain = this.options.domain;\n  if (url[0] === '/') {\n    if (url[1] === '/') {\n      // // 开头的补充协议名\n      url = (domain ? domain.split('://')[0] : 'http') + ':' + url;\n    } else if (domain) {\n      // 否则补充整个域名\n      url = domain + url;\n    }\n  } else if (domain && !url.includes('data:') && !url.includes('://')) {\n    url = domain + '/' + url;\n  }\n  return url;\n};\n\n/**\r\n    * @description 解析样式表\r\n    * @param {Object} node 标签\r\n    * @returns {Object}\r\n    */\nParser.prototype.parseStyle = function (node) {\n  var attrs = node.attrs;\n  var list = (this.tagStyle[node.name] || '').split(';').concat((attrs.style || '').split(';'));\n  var styleObj = {};\n  var tmp = '';\n\n  if (attrs.id && !this.xml) {\n    // 暴露锚点\n    if (this.options.useAnchor) {\n      this.expose();\n    } else if (node.name !== 'img' && node.name !== 'a' && node.name !== 'video' && node.name !== 'audio') {\n      attrs.id = undefined;\n    }\n  }\n\n  // 转换 width 和 height 属性\n  if (attrs.width) {\n    styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');\n    attrs.width = undefined;\n  }\n  if (attrs.height) {\n    styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');\n    attrs.height = undefined;\n  }\n\n  for (var i = 0, len = list.length; i < len; i++) {\n    var info = list[i].split(':');\n    if (info.length < 2) continue;\n    var key = info.shift().trim().toLowerCase();\n    var value = info.join(':').trim();\n    if (value[0] === '-' && value.lastIndexOf('-') > 0 || value.includes('safe')) {\n      // 兼容性的 css 不压缩\n      tmp += \";\".concat(key, \":\").concat(value);\n    } else if (!styleObj[key] || value.includes('import') || !styleObj[key].includes('import')) {\n      // 重复的样式进行覆盖\n      if (value.includes('url')) {\n        // 填充链接\n        var j = value.indexOf('(') + 1;\n        if (j) {\n          while (value[j] === '\"' || value[j] === \"'\" || blankChar[value[j]]) {\n            j++;\n          }\n          value = value.substr(0, j) + this.getUrl(value.substr(j));\n        }\n      } else if (value.includes('rpx')) {\n        // 转换 rpx（rich-text 内部不支持 rpx）\n        value = value.replace(/[0-9.]+\\s*rpx/g, function ($) {return parseFloat($) * windowWidth / 750 + 'px';});\n      }\n      styleObj[key] = value;\n    }\n  }\n\n  node.attrs.style = tmp;\n  return styleObj;\n};\n\n/**\r\n    * @description 解析到标签名\r\n    * @param {String} name 标签名\r\n    * @private\r\n    */\nParser.prototype.onTagName = function (name) {\n  this.tagName = this.xml ? name : name.toLowerCase();\n  if (this.tagName === 'svg') {\n    this.xml = (this.xml || 0) + 1; // svg 标签内大小写敏感\n  }\n};\n\n/**\r\n    * @description 解析到属性名\r\n    * @param {String} name 属性名\r\n    * @private\r\n    */\nParser.prototype.onAttrName = function (name) {\n  name = this.xml ? name : name.toLowerCase();\n  if (name.substr(0, 5) === 'data-') {\n    if (name === 'data-src' && !this.attrs.src) {\n      // data-src 自动转为 src\n      this.attrName = 'src';\n    } else if (this.tagName === 'img' || this.tagName === 'a') {\n      // a 和 img 标签保留 data- 的属性，可以在 imgtap 和 linktap 事件中使用\n      this.attrName = name;\n    } else {\n      // 剩余的移除以减小大小\n      this.attrName = undefined;\n    }\n  } else {\n    this.attrName = name;\n    this.attrs[name] = 'T'; // boolean 型属性缺省设置\n  }\n};\n\n/**\r\n    * @description 解析到属性值\r\n    * @param {String} val 属性值\r\n    * @private\r\n    */\nParser.prototype.onAttrVal = function (val) {\n  var name = this.attrName || '';\n  if (name === 'style' || name === 'href') {\n    // 部分属性进行实体解码\n    this.attrs[name] = decodeEntity(val, true);\n  } else if (name.includes('src')) {\n    // 拼接主域名\n    this.attrs[name] = this.getUrl(decodeEntity(val, true));\n  } else if (name) {\n    this.attrs[name] = val;\n  }\n};\n\n/**\r\n    * @description 解析到标签开始\r\n    * @param {Boolean} selfClose 是否有自闭合标识 />\r\n    * @private\r\n    */\nParser.prototype.onOpenTag = function (selfClose) {\n  // 拼装 node\n  var node = Object.create(null);\n  node.name = this.tagName;\n  node.attrs = this.attrs;\n  // 避免因为自动 diff 使得 type 被设置为 null 导致部分内容不显示\n  if (this.options.nodes.length) {\n    node.type = 'node';\n  }\n  this.attrs = Object.create(null);\n\n  var attrs = node.attrs;\n  var parent = this.stack[this.stack.length - 1];\n  var siblings = parent ? parent.children : this.nodes;\n  var close = this.xml ? selfClose : config.voidTags[node.name];\n\n  // 替换标签名选择器\n  if (tagSelector[node.name]) {\n    attrs.class = tagSelector[node.name] + (attrs.class ? ' ' + attrs.class : '');\n  }\n\n  // 转换 embed 标签\n  if (node.name === 'embed') {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    this.expose();\n\n  }\n\n\n  // 处理音视频\n  if (node.name === 'video' || node.name === 'audio') {\n    // 设置 id 以便获取 context\n    if (node.name === 'video' && !attrs.id) {\n      attrs.id = 'v' + idIndex++;\n    }\n    // 没有设置 controls 也没有设置 autoplay 的自动设置 controls\n    if (!attrs.controls && !attrs.autoplay) {\n      attrs.controls = 'T';\n    }\n    // 用数组存储所有可用的 source\n    node.src = [];\n    if (attrs.src) {\n      node.src.push(attrs.src);\n      attrs.src = undefined;\n    }\n    this.expose();\n  }\n\n\n  // 处理自闭合标签\n  if (close) {\n    if (!this.hook(node) || config.ignoreTags[node.name]) {\n      // 通过 base 标签设置主域名\n      if (node.name === 'base' && !this.options.domain) {\n        this.options.domain = attrs.href;\n      } else if (node.name === 'source' && parent && (parent.name === 'video' || parent.name === 'audio') && attrs.src) {\n        // 设置 source 标签（仅父节点为 video 或 audio 时有效）\n        parent.src.push(attrs.src);\n      }\n      return;\n    }\n\n    // 解析 style\n    var styleObj = this.parseStyle(node);\n\n    // 处理图片\n    if (node.name === 'img') {\n      if (attrs.src) {\n        // 标记 webp\n        if (attrs.src.includes('webp')) {\n          node.webp = 'T';\n        }\n        // data url 图片如果没有设置 original-src 默认为不可预览的小图片\n        if (attrs.src.includes('data:') && !attrs['original-src']) {\n          attrs.ignore = 'T';\n        }\n        if (!attrs.ignore || node.webp || attrs.src.includes('cloud://')) {\n          for (var i = this.stack.length; i--;) {\n            var item = this.stack[i];\n            if (item.name === 'a') {\n              node.a = item.attrs;\n              break;\n            }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            item.c = 1;\n          }\n          attrs.i = this.imgList.length.toString();\n          var src = attrs['original-src'] || attrs.src;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          this.imgList.push(src);\n\n          if (this.options.lazyLoad) {\n            attrs['data-src'] = attrs.src;\n            attrs.src = undefined;\n          }\n\n        }\n      }\n      if (styleObj.display === 'inline') {\n        styleObj.display = '';\n      }\n\n      if (attrs.ignore) {\n        styleObj['max-width'] = styleObj['max-width'] || '100%';\n        attrs.style += ';-webkit-touch-callout:none';\n      }\n\n      // 设置的宽度超出屏幕，为避免变形，高度转为自动\n      if (parseInt(styleObj.width) > windowWidth) {\n        styleObj.height = undefined;\n      }\n      // 记录是否设置了宽高\n      if (styleObj.width) {\n        if (styleObj.width.includes('auto')) {\n          styleObj.width = '';\n        } else {\n          node.w = 'T';\n          if (styleObj.height && !styleObj.height.includes('auto')) {\n            node.h = 'T';\n          }\n        }\n      }\n    } else if (node.name === 'svg') {\n      siblings.push(node);\n      this.stack.push(node);\n      this.popNode();\n      return;\n    }\n    for (var key in styleObj) {\n      if (styleObj[key]) {\n        attrs.style += \";\".concat(key, \":\").concat(styleObj[key].replace(' !important', ''));\n      }\n    }\n    attrs.style = attrs.style.substr(1) || undefined;\n  } else {\n    if ((node.name === 'pre' || (attrs.style || '').includes('white-space') && attrs.style.includes('pre')) && this.pre !== 2) {\n      this.pre = node.pre = 1;\n    }\n    node.children = [];\n    this.stack.push(node);\n  }\n\n  // 加入节点树\n  siblings.push(node);\n};\n\n/**\r\n    * @description 解析到标签结束\r\n    * @param {String} name 标签名\r\n    * @private\r\n    */\nParser.prototype.onCloseTag = function (name) {\n  // 依次出栈到匹配为止\n  name = this.xml ? name : name.toLowerCase();\n  var i;\n  for (i = this.stack.length; i--;) {\n    if (this.stack[i].name === name) break;\n  }\n  if (i !== -1) {\n    while (this.stack.length > i) {\n      this.popNode();\n    }\n  } else if (name === 'p' || name === 'br') {\n    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;\n    siblings.push({\n      name: name,\n      attrs: {\n        class: tagSelector[name],\n        style: this.tagStyle[name] } });\n\n\n  }\n};\n\n/**\r\n    * @description 处理标签出栈\r\n    * @private\r\n    */\nParser.prototype.popNode = function () {\n  var node = this.stack.pop();\n  var attrs = node.attrs;\n  var children = node.children;\n  var parent = this.stack[this.stack.length - 1];\n  var siblings = parent ? parent.children : this.nodes;\n\n  if (!this.hook(node) || config.ignoreTags[node.name]) {\n    // 获取标题\n    if (node.name === 'title' && children.length && children[0].type === 'text' && this.options.setTitle) {\n      uni.setNavigationBarTitle({\n        title: children[0].text });\n\n    }\n    siblings.pop();\n    return;\n  }\n\n  if (node.pre && this.pre !== 2) {\n    // 是否合并空白符标识\n    this.pre = node.pre = undefined;\n    for (var i = this.stack.length; i--;) {\n      if (this.stack[i].pre) {\n        this.pre = 1;\n      }\n    }\n  }\n\n  var styleObj = {};\n\n  // 转换 svg\n  if (node.name === 'svg') {\n    if (this.xml > 1) {\n      // 多层 svg 嵌套\n      this.xml--;\n      return;\n    }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    var src = '';\n    var style = attrs.style;\n    attrs.style = '';\n    attrs.xmlns = 'http://www.w3.org/2000/svg';\n    (function traversal(node) {\n      if (node.type === 'text') {\n        src += node.text;\n        return;\n      }\n      var name = config.svgDict[node.name] || node.name;\n      src += '<' + name;\n      for (var item in node.attrs) {\n        var val = node.attrs[item];\n        if (val) {\n          src += \" \".concat(config.svgDict[item] || item, \"=\\\"\").concat(val, \"\\\"\");\n        }\n      }\n      if (!node.children) {\n        src += '/>';\n      } else {\n        src += '>';\n        for (var _i = 0; _i < node.children.length; _i++) {\n          traversal(node.children[_i]);\n        }\n        src += '</' + name + '>';\n      }\n    })(node);\n    node.name = 'img';\n    node.attrs = {\n      src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),\n      style: style,\n      ignore: 'T' };\n\n    node.children = undefined;\n\n    this.xml = false;\n    return;\n  }\n\n\n  // 转换 align 属性\n  if (attrs.align) {\n    if (node.name === 'table') {\n      if (attrs.align === 'center') {\n        styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';\n      } else {\n        styleObj.float = attrs.align;\n      }\n    } else {\n      styleObj['text-align'] = attrs.align;\n    }\n    attrs.align = undefined;\n  }\n\n  // 转换 dir 属性\n  if (attrs.dir) {\n    styleObj.direction = attrs.dir;\n    attrs.dir = undefined;\n  }\n\n  // 转换 font 标签的属性\n  if (node.name === 'font') {\n    if (attrs.color) {\n      styleObj.color = attrs.color;\n      attrs.color = undefined;\n    }\n    if (attrs.face) {\n      styleObj['font-family'] = attrs.face;\n      attrs.face = undefined;\n    }\n    if (attrs.size) {\n      var size = parseInt(attrs.size);\n      if (!isNaN(size)) {\n        if (size < 1) {\n          size = 1;\n        } else if (size > 7) {\n          size = 7;\n        }\n        styleObj['font-size'] = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'][size - 1];\n      }\n      attrs.size = undefined;\n    }\n  }\n\n\n  // 一些编辑器的自带 class\n  if ((attrs.class || '').includes('align-center')) {\n    styleObj['text-align'] = 'center';\n  }\n\n  Object.assign(styleObj, this.parseStyle(node));\n\n  if (node.name !== 'table' && parseInt(styleObj.width) > windowWidth) {\n    styleObj['max-width'] = '100%';\n    styleObj['box-sizing'] = 'border-box';\n  }\n\n\n  if (config.blockTags[node.name]) {\n    node.name = 'div';\n  } else if (!config.trustTags[node.name] && !this.xml) {\n    // 未知标签转为 span，避免无法显示\n    node.name = 'span';\n  }\n\n  if (node.name === 'a' || node.name === 'ad' ||\n\n  node.name === 'iframe' // eslint-disable-line\n  )\n    {\n      this.expose();\n    } else if (node.name === 'video') {\n    var str = '<video style=\"width:100%;height:100%\"';\n    for (var item in attrs) {\n      if (attrs[item]) {\n        str += ' ' + item + '=\"' + attrs[item] + '\"';\n      }\n    }\n    if (this.options.pauseVideo) {\n      str += ' onplay=\"for(var e=document.getElementsByTagName(\\'video\\'),t=0;t<e.length;t++)e[t]!=this&&e[t].pause()\"';\n    }\n    str += '>';\n    for (var _i2 = 0; _i2 < node.src.length; _i2++) {\n      str += '<source src=\"' + node.src[_i2] + '\">';\n    }\n    str += '</video>';\n    node.html = str;\n  } else if ((node.name === 'ul' || node.name === 'ol') && node.c) {\n    // 列表处理\n    var types = {\n      a: 'lower-alpha',\n      A: 'upper-alpha',\n      i: 'lower-roman',\n      I: 'upper-roman' };\n\n    if (types[attrs.type]) {\n      attrs.style += ';list-style-type:' + types[attrs.type];\n      attrs.type = undefined;\n    }\n    for (var _i3 = children.length; _i3--;) {\n      if (children[_i3].name === 'li') {\n        children[_i3].c = 1;\n      }\n    }\n  } else if (node.name === 'table') {\n    // 表格处理\n    // cellpadding、cellspacing、border 这几个常用表格属性需要通过转换实现\n    var padding = parseFloat(attrs.cellpadding);\n    var spacing = parseFloat(attrs.cellspacing);\n    var border = parseFloat(attrs.border);\n    if (node.c) {\n      // padding 和 spacing 默认 2\n      if (isNaN(padding)) {\n        padding = 2;\n      }\n      if (isNaN(spacing)) {\n        spacing = 2;\n      }\n    }\n    if (border) {\n      attrs.style += ';border:' + border + 'px solid gray';\n    }\n    if (node.flag && node.c) {\n      // 有 colspan 或 rowspan 且含有链接的表格通过 grid 布局实现\n      styleObj.display = 'grid';\n      if (spacing) {\n        styleObj['grid-gap'] = spacing + 'px';\n        styleObj.padding = spacing + 'px';\n      } else if (border) {\n        // 无间隔的情况下避免边框重叠\n        attrs.style += ';border-left:0;border-top:0';\n      }\n\n      var width = []; // 表格的列宽\n      var trList = []; // tr 列表\n      var cells = []; // 保存新的单元格\n      var map = {}; // 被合并单元格占用的格子\n\n      (function traversal(nodes) {\n        for (var _i4 = 0; _i4 < nodes.length; _i4++) {\n          if (nodes[_i4].name === 'tr') {\n            trList.push(nodes[_i4]);\n          } else {\n            traversal(nodes[_i4].children || []);\n          }\n        }\n      })(children);\n\n      for (var row = 1; row <= trList.length; row++) {\n        var col = 1;\n        for (var j = 0; j < trList[row - 1].children.length; j++, col++) {\n          var td = trList[row - 1].children[j];\n          if (td.name === 'td' || td.name === 'th') {\n            // 这个格子被上面的单元格占用，则列号++\n            while (map[row + '.' + col]) {\n              col++;\n            }\n            var _style = td.attrs.style || '';\n            var start = _style.indexOf('width') ? _style.indexOf(';width') : 0;\n            // 提取出 td 的宽度\n            if (start !== -1) {\n              var end = _style.indexOf(';', start + 6);\n              if (end === -1) {\n                end = _style.length;\n              }\n              if (!td.attrs.colspan) {\n                width[col] = _style.substring(start ? start + 7 : 6, end);\n              }\n              _style = _style.substr(0, start) + _style.substr(end);\n            }\n            _style += (border ? \";border:\".concat(border, \"px solid gray\") + (spacing ? '' : ';border-right:0;border-bottom:0') : '') + (padding ? \";padding:\".concat(padding, \"px\") : '');\n            // 处理列合并\n            if (td.attrs.colspan) {\n              _style += \";grid-column-start:\".concat(col, \";grid-column-end:\").concat(col + parseInt(td.attrs.colspan));\n              if (!td.attrs.rowspan) {\n                _style += \";grid-row-start:\".concat(row, \";grid-row-end:\").concat(row + 1);\n              }\n              col += parseInt(td.attrs.colspan) - 1;\n            }\n            // 处理行合并\n            if (td.attrs.rowspan) {\n              _style += \";grid-row-start:\".concat(row, \";grid-row-end:\").concat(row + parseInt(td.attrs.rowspan));\n              if (!td.attrs.colspan) {\n                _style += \";grid-column-start:\".concat(col, \";grid-column-end:\").concat(col + 1);\n              }\n              // 记录下方单元格被占用\n              for (var rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {\n                for (var colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {\n                  map[row + rowspan + '.' + (col - colspan)] = 1;\n                }\n              }\n            }\n            if (_style) {\n              td.attrs.style = _style;\n            }\n            cells.push(td);\n          }\n        }\n        if (row === 1) {\n          var temp = '';\n          for (var _i5 = 1; _i5 < col; _i5++) {\n            temp += (width[_i5] ? width[_i5] : 'auto') + ' ';\n          }\n          styleObj['grid-template-columns'] = temp;\n        }\n      }\n      node.children = cells;\n    } else {\n      // 没有使用合并单元格的表格通过 table 布局实现\n      if (node.c) {\n        styleObj.display = 'table';\n      }\n      if (!isNaN(spacing)) {\n        styleObj['border-spacing'] = spacing + 'px';\n      }\n      if (border || padding) {\n        // 遍历\n        (function traversal(nodes) {\n          for (var _i6 = 0; _i6 < nodes.length; _i6++) {\n            var _td = nodes[_i6];\n            if (_td.name === 'th' || _td.name === 'td') {\n              if (border) {\n                _td.attrs.style = \"border:\".concat(border, \"px solid gray;\").concat(_td.attrs.style || '');\n              }\n              if (padding) {\n                _td.attrs.style = \"padding:\".concat(padding, \"px;\").concat(_td.attrs.style || '');\n              }\n            } else if (_td.children) {\n              traversal(_td.children);\n            }\n          }\n        })(children);\n      }\n    }\n    // 给表格添加一个单独的横向滚动层\n    if (this.options.scrollTable && !(attrs.style || '').includes('inline')) {\n      var table = Object.assign({}, node);\n      node.name = 'div';\n      node.attrs = {\n        style: 'overflow:auto' };\n\n      node.children = [table];\n      attrs = table.attrs;\n    }\n  } else if ((node.name === 'td' || node.name === 'th') && (attrs.colspan || attrs.rowspan)) {\n    for (var _i7 = this.stack.length; _i7--;) {\n      if (this.stack[_i7].name === 'table') {\n        this.stack[_i7].flag = 1; // 指示含有合并单元格\n        break;\n      }\n    }\n  } else if (node.name === 'ruby') {\n    // 转换 ruby\n    node.name = 'span';\n    for (var _i8 = 0; _i8 < children.length - 1; _i8++) {\n      if (children[_i8].type === 'text' && children[_i8 + 1].name === 'rt') {\n        children[_i8] = {\n          name: 'div',\n          attrs: {\n            style: 'display:inline-block;text-align:center' },\n\n          children: [{\n            name: 'div',\n            attrs: {\n              style: 'font-size:50%;' + (children[_i8 + 1].attrs.style || '') },\n\n            children: children[_i8 + 1].children },\n          children[_i8]] };\n\n        children.splice(_i8 + 1, 1);\n      }\n    }\n  } else if (node.c) {\n    node.c = 2;\n    for (var _i9 = node.children.length; _i9--;) {\n      if (!node.children[_i9].c || node.children[_i9].name === 'table') {\n        node.c = 1;\n      }\n    }\n  }\n\n  if ((styleObj.display || '').includes('flex') && !node.c) {\n    for (var _i10 = children.length; _i10--;) {\n      var _item = children[_i10];\n      if (_item.f) {\n        _item.attrs.style = (_item.attrs.style || '') + _item.f;\n        _item.f = undefined;\n      }\n    }\n  }\n  // flex 布局时部分样式需要提取到 rich-text 外层\n  var flex = parent && (parent.attrs.style || '').includes('flex') &&\n\n\n\n\n\n  !node.c; // eslint-disable-line\n\n  if (flex) {\n    node.f = ';max-width:100%';\n  }\n\n\n  for (var key in styleObj) {\n    if (styleObj[key]) {\n      var val = \";\".concat(key, \":\").concat(styleObj[key].replace(' !important', ''));\n\n      if (flex && (key.includes('flex') && key !== 'flex-direction' || key === 'align-self' || styleObj[key][0] === '-' || key === 'width' && val.includes('%'))) {\n        node.f += val;\n        if (key === 'width') {\n          attrs.style += ';width:100%';\n        }\n      } else {\n        attrs.style += val;\n      }\n    }\n  }\n  attrs.style = attrs.style.substr(1) || undefined;\n};\n\n/**\r\n    * @description 解析到文本\r\n    * @param {String} text 文本内容\r\n    */\nParser.prototype.onText = function (text) {\n  if (!this.pre) {\n    // 合并空白符\n    var trim = '';\n    var flag;\n    for (var i = 0, len = text.length; i < len; i++) {\n      if (!blankChar[text[i]]) {\n        trim += text[i];\n      } else {\n        if (trim[trim.length - 1] !== ' ') {\n          trim += ' ';\n        }\n        if (text[i] === '\\n' && !flag) {\n          flag = true;\n        }\n      }\n    }\n    // 去除含有换行符的空串\n    if (trim === ' ' && flag) return;\n    text = trim;\n  }\n  var node = Object.create(null);\n  node.type = 'text';\n  node.text = decodeEntity(text);\n  if (this.hook(node)) {\n\n\n\n\n\n\n    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;\n    siblings.push(node);\n  }\n};\n\n/**\r\n    * @description html 词法分析器\r\n    * @param {Object} handler 高层处理器\r\n    */\nfunction Lexer(handler) {\n  this.handler = handler;\n}\n\n/**\r\n   * @description 执行解析\r\n   * @param {String} content 要解析的文本\r\n   */\nLexer.prototype.parse = function (content) {\n  this.content = content || '';\n  this.i = 0; // 标记解析位置\n  this.start = 0; // 标记一个单词的开始位置\n  this.state = this.text; // 当前状态\n  for (var len = this.content.length; this.i !== -1 && this.i < len;) {\n    this.state();\n  }\n};\n\n/**\r\n    * @description 检查标签是否闭合\r\n    * @param {String} method 如果闭合要进行的操作\r\n    * @returns {Boolean} 是否闭合\r\n    * @private\r\n    */\nLexer.prototype.checkClose = function (method) {\n  var selfClose = this.content[this.i] === '/';\n  if (this.content[this.i] === '>' || selfClose && this.content[this.i + 1] === '>') {\n    if (method) {\n      this.handler[method](this.content.substring(this.start, this.i));\n    }\n    this.i += selfClose ? 2 : 1;\n    this.start = this.i;\n    this.handler.onOpenTag(selfClose);\n    if (this.handler.tagName === 'script') {\n      this.i = this.content.indexOf('</', this.i);\n      if (this.i !== -1) {\n        this.i += 2;\n        this.start = this.i;\n      }\n      this.state = this.endTag;\n    } else {\n      this.state = this.text;\n    }\n    return true;\n  }\n  return false;\n};\n\n/**\r\n    * @description 文本状态\r\n    * @private\r\n    */\nLexer.prototype.text = function () {\n  this.i = this.content.indexOf('<', this.i); // 查找最近的标签\n  if (this.i === -1) {\n    // 没有标签了\n    if (this.start < this.content.length) {\n      this.handler.onText(this.content.substring(this.start, this.content.length));\n    }\n    return;\n  }\n  var c = this.content[this.i + 1];\n  if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {\n    // 标签开头\n    if (this.start !== this.i) {\n      this.handler.onText(this.content.substring(this.start, this.i));\n    }\n    this.start = ++this.i;\n    this.state = this.tagName;\n  } else if (c === '/' || c === '!' || c === '?') {\n    if (this.start !== this.i) {\n      this.handler.onText(this.content.substring(this.start, this.i));\n    }\n    var next = this.content[this.i + 2];\n    if (c === '/' && (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z')) {\n      // 标签结尾\n      this.i += 2;\n      this.start = this.i;\n      this.state = this.endTag;\n      return;\n    }\n    // 处理注释\n    var end = '-->';\n    if (c !== '!' || this.content[this.i + 2] !== '-' || this.content[this.i + 3] !== '-') {\n      end = '>';\n    }\n    this.i = this.content.indexOf(end, this.i);\n    if (this.i !== -1) {\n      this.i += end.length;\n      this.start = this.i;\n    }\n  } else {\n    this.i++;\n  }\n};\n\n/**\r\n    * @description 标签名状态\r\n    * @private\r\n    */\nLexer.prototype.tagName = function () {\n  if (blankChar[this.content[this.i]]) {\n    // 解析到标签名\n    this.handler.onTagName(this.content.substring(this.start, this.i));\n    while (blankChar[this.content[++this.i]]) {;}\n    if (this.i < this.content.length && !this.checkClose()) {\n      this.start = this.i;\n      this.state = this.attrName;\n    }\n  } else if (!this.checkClose('onTagName')) {\n    this.i++;\n  }\n};\n\n/**\r\n    * @description 属性名状态\r\n    * @private\r\n    */\nLexer.prototype.attrName = function () {\n  var c = this.content[this.i];\n  if (blankChar[c] || c === '=') {\n    // 解析到属性名\n    this.handler.onAttrName(this.content.substring(this.start, this.i));\n    var needVal = c === '=';\n    var len = this.content.length;\n    while (++this.i < len) {\n      c = this.content[this.i];\n      if (!blankChar[c]) {\n        if (this.checkClose()) return;\n        if (needVal) {\n          // 等号后遇到第一个非空字符\n          this.start = this.i;\n          this.state = this.attrVal;\n          return;\n        }\n        if (this.content[this.i] === '=') {\n          needVal = true;\n        } else {\n          this.start = this.i;\n          this.state = this.attrName;\n          return;\n        }\n      }\n    }\n  } else if (!this.checkClose('onAttrName')) {\n    this.i++;\n  }\n};\n\n/**\r\n    * @description 属性值状态\r\n    * @private\r\n    */\nLexer.prototype.attrVal = function () {\n  var c = this.content[this.i];\n  var len = this.content.length;\n  if (c === '\"' || c === \"'\") {\n    // 有冒号的属性\n    this.start = ++this.i;\n    this.i = this.content.indexOf(c, this.i);\n    if (this.i === -1) return;\n    this.handler.onAttrVal(this.content.substring(this.start, this.i));\n  } else {\n    // 没有冒号的属性\n    for (; this.i < len; this.i++) {\n      if (blankChar[this.content[this.i]]) {\n        this.handler.onAttrVal(this.content.substring(this.start, this.i));\n        break;\n      } else if (this.checkClose('onAttrVal')) return;\n    }\n  }\n  while (blankChar[this.content[++this.i]]) {;}\n  if (this.i < len && !this.checkClose()) {\n    this.start = this.i;\n    this.state = this.attrName;\n  }\n};\n\n/**\r\n    * @description 结束标签状态\r\n    * @returns {String} 结束的标签名\r\n    * @private\r\n    */\nLexer.prototype.endTag = function () {\n  var c = this.content[this.i];\n  if (blankChar[c] || c === '>' || c === '/') {\n    this.handler.onCloseTag(this.content.substring(this.start, this.i));\n    if (c !== '>') {\n      this.i = this.content.indexOf('>', this.i);\n      if (this.i === -1) return;\n    }\n    this.start = ++this.i;\n    this.state = this.text;\n  } else {\n    this.i++;\n  }\n};\n\nmodule.exports = Parser;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tcC1odG1sL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJ0cnVzdFRhZ3MiLCJtYWtlTWFwIiwiYmxvY2tUYWdzIiwiaWdub3JlVGFncyIsInZvaWRUYWdzIiwiZW50aXRpZXMiLCJsdCIsImd0IiwicXVvdCIsImFwb3MiLCJlbnNwIiwiZW1zcCIsIm5ic3AiLCJzZW1pIiwibmRhc2giLCJtZGFzaCIsIm1pZGRvdCIsImxzcXVvIiwicnNxdW8iLCJsZHF1byIsInJkcXVvIiwiYnVsbCIsImhlbGxpcCIsInRhZ1N0eWxlIiwiYWRkcmVzcyIsImJpZyIsImNhcHRpb24iLCJjZW50ZXIiLCJjaXRlIiwiZGQiLCJtYXJrIiwicHJlIiwicyIsInNtYWxsIiwic3RyaWtlIiwidSIsInN2Z0RpY3QiLCJhbmltYXRldHJhbnNmb3JtIiwibGluZWFyZ3JhZGllbnQiLCJ2aWV3Ym94IiwiYXR0cmlidXRlbmFtZSIsInJlcGVhdGNvdW50IiwicmVwZWF0ZHVyIiwidGFnU2VsZWN0b3IiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiYmxhbmtDaGFyIiwiaWRJbmRleCIsImlmcmFtZSIsInVuZGVmaW5lZCIsImVtYmVkIiwic3RyIiwibWFwIiwiT2JqZWN0IiwiY3JlYXRlIiwibGlzdCIsInNwbGl0IiwiaSIsImxlbmd0aCIsImRlY29kZUVudGl0eSIsImFtcCIsImluZGV4T2YiLCJqIiwiY29kZSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiaXNOYU4iLCJzdWJzdHIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJQYXJzZXIiLCJ2bSIsIm9wdGlvbnMiLCJhc3NpZ24iLCJpbWdMaXN0IiwicGx1Z2lucyIsImF0dHJzIiwic3RhY2siLCJub2RlcyIsImNvbnRhaW5lclN0eWxlIiwiaW5jbHVkZXMiLCJwcm90b3R5cGUiLCJwYXJzZSIsImNvbnRlbnQiLCJvblVwZGF0ZSIsIkxleGVyIiwicG9wTm9kZSIsImV4cG9zZSIsIml0ZW0iLCJjIiwibmFtZSIsImhvb2siLCJub2RlIiwib25QYXJzZSIsImdldFVybCIsInVybCIsImRvbWFpbiIsInBhcnNlU3R5bGUiLCJjb25jYXQiLCJzdHlsZSIsInN0eWxlT2JqIiwidG1wIiwiaWQiLCJ4bWwiLCJ1c2VBbmNob3IiLCJ3aWR0aCIsInBhcnNlRmxvYXQiLCJoZWlnaHQiLCJsZW4iLCJpbmZvIiwia2V5Iiwic2hpZnQiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJ2YWx1ZSIsImpvaW4iLCJsYXN0SW5kZXhPZiIsInJlcGxhY2UiLCIkIiwib25UYWdOYW1lIiwidGFnTmFtZSIsIm9uQXR0ck5hbWUiLCJzcmMiLCJhdHRyTmFtZSIsIm9uQXR0clZhbCIsInZhbCIsIm9uT3BlblRhZyIsInNlbGZDbG9zZSIsInR5cGUiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImNoaWxkcmVuIiwiY2xvc2UiLCJjbGFzcyIsImNvbnRyb2xzIiwiYXV0b3BsYXkiLCJwdXNoIiwiaHJlZiIsIndlYnAiLCJpZ25vcmUiLCJhIiwidG9TdHJpbmciLCJsYXp5TG9hZCIsImRpc3BsYXkiLCJ3IiwiaCIsIm9uQ2xvc2VUYWciLCJwb3AiLCJzZXRUaXRsZSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwidGV4dCIsInhtbG5zIiwidHJhdmVyc2FsIiwiYWxpZ24iLCJmbG9hdCIsImRpciIsImRpcmVjdGlvbiIsImNvbG9yIiwiZmFjZSIsInNpemUiLCJwYXVzZVZpZGVvIiwiaHRtbCIsInR5cGVzIiwiQSIsIkkiLCJwYWRkaW5nIiwiY2VsbHBhZGRpbmciLCJzcGFjaW5nIiwiY2VsbHNwYWNpbmciLCJib3JkZXIiLCJmbGFnIiwidHJMaXN0IiwiY2VsbHMiLCJyb3ciLCJjb2wiLCJ0ZCIsInN0YXJ0IiwiZW5kIiwiY29sc3BhbiIsInJvd3NwYW4iLCJ0ZW1wIiwic2Nyb2xsVGFibGUiLCJ0YWJsZSIsInNwbGljZSIsImYiLCJmbGV4Iiwib25UZXh0IiwiaGFuZGxlciIsInN0YXRlIiwiY2hlY2tDbG9zZSIsIm1ldGhvZCIsImVuZFRhZyIsIm5leHQiLCJuZWVkVmFsIiwiYXR0clZhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUE7QUFDQSxJQUFNQSxNQUFNLEdBQUc7QUFDYjtBQUNBQyxXQUFTLEVBQUVDLE9BQU8sQ0FBQyx5TkFBRCxDQUZMOztBQUliO0FBQ0FDLFdBQVMsRUFBRUQsT0FBTyxDQUFDLG1GQUFELENBTEw7O0FBT2I7QUFDQUUsWUFBVSxFQUFFRixPQUFPLENBQUMsb0hBQUQsQ0FSTjs7QUFVYjtBQUNBRyxVQUFRLEVBQUVILE9BQU8sQ0FBQyxzSEFBRCxDQVhKOztBQWFiO0FBQ0FJLFVBQVEsRUFBRTtBQUNSQyxNQUFFLEVBQUUsR0FESTtBQUVSQyxNQUFFLEVBQUUsR0FGSTtBQUdSQyxRQUFJLEVBQUUsR0FIRTtBQUlSQyxRQUFJLEVBQUUsR0FKRTtBQUtSQyxRQUFJLEVBQUUsUUFMRTtBQU1SQyxRQUFJLEVBQUUsUUFORTtBQU9SQyxRQUFJLEVBQUUsTUFQRTtBQVFSQyxRQUFJLEVBQUUsR0FSRTtBQVNSQyxTQUFLLEVBQUUsR0FUQztBQVVSQyxTQUFLLEVBQUUsR0FWQztBQVdSQyxVQUFNLEVBQUUsR0FYQTtBQVlSQyxTQUFLLEVBQUUsR0FaQztBQWFSQyxTQUFLLEVBQUUsR0FiQztBQWNSQyxTQUFLLEVBQUUsR0FkQztBQWVSQyxTQUFLLEVBQUUsR0FmQztBQWdCUkMsUUFBSSxFQUFFLEdBaEJFO0FBaUJSQyxVQUFNLEVBQUUsR0FqQkEsRUFkRzs7O0FBa0NiO0FBQ0FDLFVBQVEsRUFBRTs7QUFFUkMsV0FBTyxFQUFFLG1CQUZEO0FBR1JDLE9BQUcsRUFBRSxnQ0FIRztBQUlSQyxXQUFPLEVBQUUseUNBSkQ7QUFLUkMsVUFBTSxFQUFFLG1CQUxBO0FBTVJDLFFBQUksRUFBRSxtQkFORTtBQU9SQyxNQUFFLEVBQUUsa0JBUEk7QUFRUkMsUUFBSSxFQUFFLHlCQVJFO0FBU1JDLE9BQUcsRUFBRSx1Q0FURztBQVVSQyxL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o+aekOWZqFxyXG4gKi9cclxuXHJcbi8vIOmFjee9rlxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgLy8g5L+h5Lu755qE5qCH562+77yI5L+d5oyB5qCH562+5ZCN5LiN5Y+Y77yJXHJcbiAgdHJ1c3RUYWdzOiBtYWtlTWFwKCdhLGFiYnIsYWQsYXVkaW8sYixibG9ja3F1b3RlLGJyLGNvZGUsY29sLGNvbGdyb3VwLGRkLGRlbCxkbCxkdCxkaXYsZW0sZmllbGRzZXQsaDEsaDIsaDMsaDQsaDUsaDYsaHIsaSxpbWcsaW5zLGxhYmVsLGxlZ2VuZCxsaSxvbCxwLHEscnVieSxydCxzb3VyY2Usc3BhbixzdHJvbmcsc3ViLHN1cCx0YWJsZSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0cix0aXRsZSx1bCx2aWRlbycpLFxyXG5cclxuICAvLyDlnZfnuqfmoIfnrb7vvIjovazkuLogZGl277yM5YW25LuW55qE6Z2e5L+h5Lu75qCH562+6L2s5Li6IHNwYW7vvIlcclxuICBibG9ja1RhZ3M6IG1ha2VNYXAoJ2FkZHJlc3MsYXJ0aWNsZSxhc2lkZSxib2R5LGNhcHRpb24sY2VudGVyLGNpdGUsZm9vdGVyLGhlYWRlcixodG1sLG5hdixwcmUsc2VjdGlvbicpLFxyXG5cclxuICAvLyDopoHnp7vpmaTnmoTmoIfnrb5cclxuICBpZ25vcmVUYWdzOiBtYWtlTWFwKCdhcmVhLGJhc2UsY2FudmFzLGVtYmVkLGZyYW1lLGhlYWQsaWZyYW1lLGlucHV0LGxpbmssbWFwLG1ldGEscGFyYW0scnAsc2NyaXB0LHNvdXJjZSxzdHlsZSx0ZXh0YXJlYSx0aXRsZSx0cmFjayx3YnInKSxcclxuXHJcbiAgLy8g6Ieq6Zet5ZCI55qE5qCH562+XHJcbiAgdm9pZFRhZ3M6IG1ha2VNYXAoJ2FyZWEsYmFzZSxicixjb2wsY2lyY2xlLGVsbGlwc2UsZW1iZWQsZnJhbWUsaHIsaW1nLGlucHV0LGxpbmUsbGluayxtZXRhLHBhcmFtLHBhdGgscG9seWdvbixyZWN0LHNvdXJjZSx0cmFjayx1c2Usd2JyJyksXHJcblxyXG4gIC8vIGh0bWwg5a6e5L2TXHJcbiAgZW50aXRpZXM6IHtcclxuICAgIGx0OiAnPCcsXHJcbiAgICBndDogJz4nLFxyXG4gICAgcXVvdDogJ1wiJyxcclxuICAgIGFwb3M6IFwiJ1wiLFxyXG4gICAgZW5zcDogJ1xcdTIwMDInLFxyXG4gICAgZW1zcDogJ1xcdTIwMDMnLFxyXG4gICAgbmJzcDogJ1xceEEwJyxcclxuICAgIHNlbWk6ICc7JyxcclxuICAgIG5kYXNoOiAn4oCTJyxcclxuICAgIG1kYXNoOiAn4oCUJyxcclxuICAgIG1pZGRvdDogJ8K3JyxcclxuICAgIGxzcXVvOiAn4oCYJyxcclxuICAgIHJzcXVvOiAn4oCZJyxcclxuICAgIGxkcXVvOiAn4oCcJyxcclxuICAgIHJkcXVvOiAn4oCdJyxcclxuICAgIGJ1bGw6ICfigKInLFxyXG4gICAgaGVsbGlwOiAn4oCmJ1xyXG4gIH0sXHJcblxyXG4gIC8vIOm7mOiupOeahOagh+etvuagt+W8j1xyXG4gIHRhZ1N0eWxlOiB7XHJcblxyXG4gICAgYWRkcmVzczogJ2ZvbnQtc3R5bGU6aXRhbGljJyxcclxuICAgIGJpZzogJ2Rpc3BsYXk6aW5saW5lO2ZvbnQtc2l6ZToxLjJlbScsXHJcbiAgICBjYXB0aW9uOiAnZGlzcGxheTp0YWJsZS1jYXB0aW9uO3RleHQtYWxpZ246Y2VudGVyJyxcclxuICAgIGNlbnRlcjogJ3RleHQtYWxpZ246Y2VudGVyJyxcclxuICAgIGNpdGU6ICdmb250LXN0eWxlOml0YWxpYycsXHJcbiAgICBkZDogJ21hcmdpbi1sZWZ0OjQwcHgnLFxyXG4gICAgbWFyazogJ2JhY2tncm91bmQtY29sb3I6eWVsbG93JyxcclxuICAgIHByZTogJ2ZvbnQtZmFtaWx5Om1vbm9zcGFjZTt3aGl0ZS1zcGFjZTpwcmUnLFxyXG4gICAgczogJ3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2gnLFxyXG4gICAgc21hbGw6ICdkaXNwbGF5OmlubGluZTtmb250LXNpemU6MC44ZW0nLFxyXG4gICAgc3RyaWtlOiAndGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaCcsXHJcbiAgICB1OiAndGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSdcclxuXHJcbiAgfSxcclxuXHJcbiAgLy8gc3ZnIOWkp+Wwj+WGmeWvueeFp+ihqFxyXG4gIHN2Z0RpY3Q6IHtcclxuICAgIGFuaW1hdGV0cmFuc2Zvcm06ICdhbmltYXRlVHJhbnNmb3JtJyxcclxuICAgIGxpbmVhcmdyYWRpZW50OiAnbGluZWFyR3JhZGllbnQnLFxyXG4gICAgdmlld2JveDogJ3ZpZXdCb3gnLFxyXG4gICAgYXR0cmlidXRlbmFtZTogJ2F0dHJpYnV0ZU5hbWUnLFxyXG4gICAgcmVwZWF0Y291bnQ6ICdyZXBlYXRDb3VudCcsXHJcbiAgICByZXBlYXRkdXI6ICdyZXBlYXREdXInXHJcbiAgfVxyXG59XHJcbmNvbnN0IHRhZ1NlbGVjdG9yPXt9XHJcbmNvbnN0IHtcclxuICB3aW5kb3dXaWR0aCxcclxuXHJcblxyXG5cclxufSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbmNvbnN0IGJsYW5rQ2hhciA9IG1ha2VNYXAoJyAsXFxyLFxcbixcXHQsXFxmJylcclxubGV0IGlkSW5kZXggPSAwXHJcblxyXG5cclxuY29uZmlnLmlnbm9yZVRhZ3MuaWZyYW1lID0gdW5kZWZpbmVkXHJcbmNvbmZpZy50cnVzdFRhZ3MuaWZyYW1lID0gdHJ1ZVxyXG5jb25maWcuaWdub3JlVGFncy5lbWJlZCA9IHVuZGVmaW5lZFxyXG5jb25maWcudHJ1c3RUYWdzLmVtYmVkID0gdHJ1ZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOWIm+W7uiBtYXBcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciDpgJflj7fliIbpmpRcclxuICovXHJcbmZ1bmN0aW9uIG1ha2VNYXAgKHN0cikge1xyXG4gIGNvbnN0IG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcclxuICBjb25zdCBsaXN0ID0gc3RyLnNwbGl0KCcsJylcclxuICBmb3IgKGxldCBpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcclxuICAgIG1hcFtsaXN0W2ldXSA9IHRydWVcclxuICB9XHJcbiAgcmV0dXJuIG1hcFxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOino+eggSBodG1sIOWunuS9k1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIOimgeino+eggeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFtcCDopoHkuI3opoHop6PnoIEgJmFtcDtcclxuICogQHJldHVybnMge1N0cmluZ30g6Kej56CB5ZCO55qE5a2X56ym5LiyXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWNvZGVFbnRpdHkgKHN0ciwgYW1wKSB7XHJcbiAgbGV0IGkgPSBzdHIuaW5kZXhPZignJicpXHJcbiAgd2hpbGUgKGkgIT09IC0xKSB7XHJcbiAgICBjb25zdCBqID0gc3RyLmluZGV4T2YoJzsnLCBpICsgMylcclxuICAgIGxldCBjb2RlXHJcbiAgICBpZiAoaiA9PT0gLTEpIGJyZWFrXHJcbiAgICBpZiAoc3RyW2kgKyAxXSA9PT0gJyMnKSB7XHJcbiAgICAgIC8vICYjMTIzOyDlvaLlvI/nmoTlrp7kvZNcclxuICAgICAgY29kZSA9IHBhcnNlSW50KChzdHJbaSArIDJdID09PSAneCcgPyAnMCcgOiAnJykgKyBzdHIuc3Vic3RyaW5nKGkgKyAyLCBqKSlcclxuICAgICAgaWYgKCFpc05hTihjb2RlKSkge1xyXG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMCwgaSkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpICsgc3RyLnN1YnN0cihqICsgMSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gJm5ic3A7IOW9ouW8j+eahOWunuS9k1xyXG4gICAgICBjb2RlID0gc3RyLnN1YnN0cmluZyhpICsgMSwgailcclxuICAgICAgaWYgKGNvbmZpZy5lbnRpdGllc1tjb2RlXSB8fCAoY29kZSA9PT0gJ2FtcCcgJiYgYW1wKSkge1xyXG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMCwgaSkgKyAoY29uZmlnLmVudGl0aWVzW2NvZGVdIHx8ICcmJykgKyBzdHIuc3Vic3RyKGogKyAxKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpID0gc3RyLmluZGV4T2YoJyYnLCBpICsgMSlcclxuICB9XHJcbiAgcmV0dXJuIHN0clxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIGh0bWwg6Kej5p6Q5ZmoXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2bSDnu4Tku7blrp7kvotcclxuICovXHJcbmZ1bmN0aW9uIFBhcnNlciAodm0pIHtcclxuICB0aGlzLm9wdGlvbnMgPSB2bSB8fCB7fVxyXG4gIHRoaXMudGFnU3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcudGFnU3R5bGUsIHRoaXMub3B0aW9ucy50YWdTdHlsZSlcclxuICB0aGlzLmltZ0xpc3QgPSB2bS5pbWdMaXN0IHx8IFtdXHJcbiAgdGhpcy5wbHVnaW5zID0gdm0ucGx1Z2lucyB8fCBbXVxyXG4gIHRoaXMuYXR0cnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgdGhpcy5zdGFjayA9IFtdXHJcbiAgdGhpcy5ub2RlcyA9IFtdXHJcbiAgdGhpcy5wcmUgPSAodGhpcy5vcHRpb25zLmNvbnRhaW5lclN0eWxlIHx8ICcnKS5pbmNsdWRlcygnd2hpdGUtc3BhY2UnKSAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyU3R5bGUuaW5jbHVkZXMoJ3ByZScpID8gMiA6IDBcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmiafooYzop6PmnpBcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnQg6KaB6Kej5p6Q55qE5paH5pysXHJcbiAqL1xyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAvLyDmj5Lku7blpITnkIZcclxuICBmb3IgKGxldCBpID0gdGhpcy5wbHVnaW5zLmxlbmd0aDsgaS0tOykge1xyXG4gICAgaWYgKHRoaXMucGx1Z2luc1tpXS5vblVwZGF0ZSkge1xyXG4gICAgICBjb250ZW50ID0gdGhpcy5wbHVnaW5zW2ldLm9uVXBkYXRlKGNvbnRlbnQsIGNvbmZpZykgfHwgY29udGVudFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3IExleGVyKHRoaXMpLnBhcnNlKGNvbnRlbnQpXHJcbiAgLy8g5Ye65qCI5pyq6Zet5ZCI55qE5qCH562+XHJcbiAgd2hpbGUgKHRoaXMuc3RhY2subGVuZ3RoKSB7XHJcbiAgICB0aGlzLnBvcE5vZGUoKVxyXG4gIH1cclxuICByZXR1cm4gdGhpcy5ub2Rlc1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOWwhuagh+etvuaatOmcsuWHuuadpe+8iOS4jeiiqyByaWNoLXRleHQg5YyF5ZCr77yJXHJcbiAqL1xyXG5QYXJzZXIucHJvdG90eXBlLmV4cG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgZm9yIChsZXQgaSA9IHRoaXMuc3RhY2subGVuZ3RoOyBpLS07KSB7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5zdGFja1tpXVxyXG4gICAgaWYgKGl0ZW0uYyB8fCBpdGVtLm5hbWUgPT09ICdhJyB8fCBpdGVtLm5hbWUgPT09ICd2aWRlbycgfHwgaXRlbS5uYW1lID09PSAnYXVkaW8nKSByZXR1cm5cclxuICAgIGl0ZW0uYyA9IDFcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOWkhOeQhuaPkuS7tlxyXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSDopoHlpITnkIbnmoTmoIfnrb5cclxuICogQHJldHVybnMge0Jvb2xlYW59IOaYr+WQpuimgeenu+mZpOatpOagh+etvlxyXG4gKi9cclxuUGFyc2VyLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICBmb3IgKGxldCBpID0gdGhpcy5wbHVnaW5zLmxlbmd0aDsgaS0tOykge1xyXG4gICAgaWYgKHRoaXMucGx1Z2luc1tpXS5vblBhcnNlICYmIHRoaXMucGx1Z2luc1tpXS5vblBhcnNlKG5vZGUsIHRoaXMpID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDlsIbpk77mjqXmi7zmjqXkuIrkuLvln5/lkI1cclxuICogQHBhcmFtIHtTdHJpbmd9IHVybCDpnIDopoHmi7zmjqXnmoTpk77mjqVcclxuICogQHJldHVybnMge1N0cmluZ30g5ou85o6l5ZCO55qE6ZO+5o6lXHJcbiAqL1xyXG5QYXJzZXIucHJvdG90eXBlLmdldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICBjb25zdCBkb21haW4gPSB0aGlzLm9wdGlvbnMuZG9tYWluXHJcbiAgaWYgKHVybFswXSA9PT0gJy8nKSB7XHJcbiAgICBpZiAodXJsWzFdID09PSAnLycpIHtcclxuICAgICAgLy8gLy8g5byA5aS055qE6KGl5YWF5Y2P6K6u5ZCNXHJcbiAgICAgIHVybCA9IChkb21haW4gPyBkb21haW4uc3BsaXQoJzovLycpWzBdIDogJ2h0dHAnKSArICc6JyArIHVybFxyXG4gICAgfSBlbHNlIGlmIChkb21haW4pIHtcclxuICAgICAgLy8g5ZCm5YiZ6KGl5YWF5pW05Liq5Z+f5ZCNXHJcbiAgICAgIHVybCA9IGRvbWFpbiArIHVybFxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZG9tYWluICYmICF1cmwuaW5jbHVkZXMoJ2RhdGE6JykgJiYgIXVybC5pbmNsdWRlcygnOi8vJykpIHtcclxuICAgIHVybCA9IGRvbWFpbiArICcvJyArIHVybFxyXG4gIH1cclxuICByZXR1cm4gdXJsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g6Kej5p6Q5qC35byP6KGoXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIOagh+etvlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZVN0eWxlID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICBjb25zdCBhdHRycyA9IG5vZGUuYXR0cnNcclxuICBjb25zdCBsaXN0ID0gKHRoaXMudGFnU3R5bGVbbm9kZS5uYW1lXSB8fCAnJykuc3BsaXQoJzsnKS5jb25jYXQoKGF0dHJzLnN0eWxlIHx8ICcnKS5zcGxpdCgnOycpKVxyXG4gIGNvbnN0IHN0eWxlT2JqID0ge31cclxuICBsZXQgdG1wID0gJydcclxuXHJcbiAgaWYgKGF0dHJzLmlkICYmICF0aGlzLnhtbCkge1xyXG4gICAgLy8g5pq06Zyy6ZSa54K5XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnVzZUFuY2hvcikge1xyXG4gICAgICB0aGlzLmV4cG9zZSgpXHJcbiAgICB9IGVsc2UgaWYgKG5vZGUubmFtZSAhPT0gJ2ltZycgJiYgbm9kZS5uYW1lICE9PSAnYScgJiYgbm9kZS5uYW1lICE9PSAndmlkZW8nICYmIG5vZGUubmFtZSAhPT0gJ2F1ZGlvJykge1xyXG4gICAgICBhdHRycy5pZCA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6L2s5o2iIHdpZHRoIOWSjCBoZWlnaHQg5bGe5oCnXHJcbiAgaWYgKGF0dHJzLndpZHRoKSB7XHJcbiAgICBzdHlsZU9iai53aWR0aCA9IHBhcnNlRmxvYXQoYXR0cnMud2lkdGgpICsgKGF0dHJzLndpZHRoLmluY2x1ZGVzKCclJykgPyAnJScgOiAncHgnKVxyXG4gICAgYXR0cnMud2lkdGggPSB1bmRlZmluZWRcclxuICB9XHJcbiAgaWYgKGF0dHJzLmhlaWdodCkge1xyXG4gICAgc3R5bGVPYmouaGVpZ2h0ID0gcGFyc2VGbG9hdChhdHRycy5oZWlnaHQpICsgKGF0dHJzLmhlaWdodC5pbmNsdWRlcygnJScpID8gJyUnIDogJ3B4JylcclxuICAgIGF0dHJzLmhlaWdodCA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGNvbnN0IGluZm8gPSBsaXN0W2ldLnNwbGl0KCc6JylcclxuICAgIGlmIChpbmZvLmxlbmd0aCA8IDIpIGNvbnRpbnVlXHJcbiAgICBjb25zdCBrZXkgPSBpbmZvLnNoaWZ0KCkudHJpbSgpLnRvTG93ZXJDYXNlKClcclxuICAgIGxldCB2YWx1ZSA9IGluZm8uam9pbignOicpLnRyaW0oKVxyXG4gICAgaWYgKCh2YWx1ZVswXSA9PT0gJy0nICYmIHZhbHVlLmxhc3RJbmRleE9mKCctJykgPiAwKSB8fCB2YWx1ZS5pbmNsdWRlcygnc2FmZScpKSB7XHJcbiAgICAgIC8vIOWFvOWuueaAp+eahCBjc3Mg5LiN5Y6L57ypXHJcbiAgICAgIHRtcCArPSBgOyR7a2V5fToke3ZhbHVlfWBcclxuICAgIH0gZWxzZSBpZiAoIXN0eWxlT2JqW2tleV0gfHwgdmFsdWUuaW5jbHVkZXMoJ2ltcG9ydCcpIHx8ICFzdHlsZU9ialtrZXldLmluY2x1ZGVzKCdpbXBvcnQnKSkge1xyXG4gICAgICAvLyDph43lpI3nmoTmoLflvI/ov5vooYzopobnm5ZcclxuICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCd1cmwnKSkge1xyXG4gICAgICAgIC8vIOWhq+WFhemTvuaOpVxyXG4gICAgICAgIGxldCBqID0gdmFsdWUuaW5kZXhPZignKCcpICsgMVxyXG4gICAgICAgIGlmIChqKSB7XHJcbiAgICAgICAgICB3aGlsZSAodmFsdWVbal0gPT09ICdcIicgfHwgdmFsdWVbal0gPT09IFwiJ1wiIHx8IGJsYW5rQ2hhclt2YWx1ZVtqXV0pIHtcclxuICAgICAgICAgICAgaisrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBqKSArIHRoaXMuZ2V0VXJsKHZhbHVlLnN1YnN0cihqKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJ3JweCcpKSB7XHJcbiAgICAgICAgLy8g6L2s5o2iIHJweO+8iHJpY2gtdGV4dCDlhoXpg6jkuI3mlK/mjIEgcnB477yJXHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bMC05Ll0rXFxzKnJweC9nLCAkID0+IHBhcnNlRmxvYXQoJCkgKiB3aW5kb3dXaWR0aCAvIDc1MCArICdweCcpXHJcbiAgICAgIH1cclxuICAgICAgc3R5bGVPYmpba2V5XSA9IHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBub2RlLmF0dHJzLnN0eWxlID0gdG1wXHJcbiAgcmV0dXJuIHN0eWxlT2JqXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g6Kej5p6Q5Yiw5qCH562+5ZCNXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIOagh+etvuWQjVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuUGFyc2VyLnByb3RvdHlwZS5vblRhZ05hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gIHRoaXMudGFnTmFtZSA9IHRoaXMueG1sID8gbmFtZSA6IG5hbWUudG9Mb3dlckNhc2UoKVxyXG4gIGlmICh0aGlzLnRhZ05hbWUgPT09ICdzdmcnKSB7XHJcbiAgICB0aGlzLnhtbCA9ICh0aGlzLnhtbCB8fCAwKSArIDEgLy8gc3ZnIOagh+etvuWGheWkp+Wwj+WGmeaVj+aEn1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDop6PmnpDliLDlsZ7mgKflkI1cclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUg5bGe5oCn5ZCNXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5QYXJzZXIucHJvdG90eXBlLm9uQXR0ck5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gIG5hbWUgPSB0aGlzLnhtbCA/IG5hbWUgOiBuYW1lLnRvTG93ZXJDYXNlKClcclxuICBpZiAobmFtZS5zdWJzdHIoMCwgNSkgPT09ICdkYXRhLScpIHtcclxuICAgIGlmIChuYW1lID09PSAnZGF0YS1zcmMnICYmICF0aGlzLmF0dHJzLnNyYykge1xyXG4gICAgICAvLyBkYXRhLXNyYyDoh6rliqjovazkuLogc3JjXHJcbiAgICAgIHRoaXMuYXR0ck5hbWUgPSAnc3JjJ1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRhZ05hbWUgPT09ICdpbWcnIHx8IHRoaXMudGFnTmFtZSA9PT0gJ2EnKSB7XHJcbiAgICAgIC8vIGEg5ZKMIGltZyDmoIfnrb7kv53nlZkgZGF0YS0g55qE5bGe5oCn77yM5Y+v5Lul5ZyoIGltZ3RhcCDlkowgbGlua3RhcCDkuovku7bkuK3kvb/nlKhcclxuICAgICAgdGhpcy5hdHRyTmFtZSA9IG5hbWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOWJqeS9meeahOenu+mZpOS7peWHj+Wwj+Wkp+Wwj1xyXG4gICAgICB0aGlzLmF0dHJOYW1lID0gdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuYXR0ck5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmF0dHJzW25hbWVdID0gJ1QnIC8vIGJvb2xlYW4g5Z6L5bGe5oCn57y655yB6K6+572uXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOino+aekOWIsOWxnuaAp+WAvFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsIOWxnuaAp+WAvFxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuUGFyc2VyLnByb3RvdHlwZS5vbkF0dHJWYWwgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgY29uc3QgbmFtZSA9IHRoaXMuYXR0ck5hbWUgfHwgJydcclxuICBpZiAobmFtZSA9PT0gJ3N0eWxlJyB8fCBuYW1lID09PSAnaHJlZicpIHtcclxuICAgIC8vIOmDqOWIhuWxnuaAp+i/m+ihjOWunuS9k+ino+eggVxyXG4gICAgdGhpcy5hdHRyc1tuYW1lXSA9IGRlY29kZUVudGl0eSh2YWwsIHRydWUpXHJcbiAgfSBlbHNlIGlmIChuYW1lLmluY2x1ZGVzKCdzcmMnKSkge1xyXG4gICAgLy8g5ou85o6l5Li75Z+f5ZCNXHJcbiAgICB0aGlzLmF0dHJzW25hbWVdID0gdGhpcy5nZXRVcmwoZGVjb2RlRW50aXR5KHZhbCwgdHJ1ZSkpXHJcbiAgfSBlbHNlIGlmIChuYW1lKSB7XHJcbiAgICB0aGlzLmF0dHJzW25hbWVdID0gdmFsXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOino+aekOWIsOagh+etvuW8gOWni1xyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNlbGZDbG9zZSDmmK/lkKbmnInoh6rpl63lkIjmoIfor4YgLz5cclxuICogQHByaXZhdGVcclxuICovXHJcblBhcnNlci5wcm90b3R5cGUub25PcGVuVGFnID0gZnVuY3Rpb24gKHNlbGZDbG9zZSkge1xyXG4gIC8vIOaLvOijhSBub2RlXHJcbiAgY29uc3Qgbm9kZSA9IE9iamVjdC5jcmVhdGUobnVsbClcclxuICBub2RlLm5hbWUgPSB0aGlzLnRhZ05hbWVcclxuICBub2RlLmF0dHJzID0gdGhpcy5hdHRyc1xyXG4gIC8vIOmBv+WFjeWboOS4uuiHquWKqCBkaWZmIOS9v+W+lyB0eXBlIOiiq+iuvue9ruS4uiBudWxsIOWvvOiHtOmDqOWIhuWGheWuueS4jeaYvuekulxyXG4gIGlmICh0aGlzLm9wdGlvbnMubm9kZXMubGVuZ3RoKSB7XHJcbiAgICBub2RlLnR5cGUgPSAnbm9kZSdcclxuICB9XHJcbiAgdGhpcy5hdHRycyA9IE9iamVjdC5jcmVhdGUobnVsbClcclxuXHJcbiAgY29uc3QgYXR0cnMgPSBub2RlLmF0dHJzXHJcbiAgY29uc3QgcGFyZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXHJcbiAgY29uc3Qgc2libGluZ3MgPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4gOiB0aGlzLm5vZGVzXHJcbiAgY29uc3QgY2xvc2UgPSB0aGlzLnhtbCA/IHNlbGZDbG9zZSA6IGNvbmZpZy52b2lkVGFnc1tub2RlLm5hbWVdXHJcblxyXG4gIC8vIOabv+aNouagh+etvuWQjemAieaLqeWZqFxyXG4gIGlmICh0YWdTZWxlY3Rvcltub2RlLm5hbWVdKSB7XHJcbiAgICBhdHRycy5jbGFzcyA9IHRhZ1NlbGVjdG9yW25vZGUubmFtZV0gKyAoYXR0cnMuY2xhc3MgPyAnICcgKyBhdHRycy5jbGFzcyA6ICcnKVxyXG4gIH1cclxuXHJcbiAgLy8g6L2s5o2iIGVtYmVkIOagh+etvlxyXG4gIGlmIChub2RlLm5hbWUgPT09ICdlbWJlZCcpIHtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdGhpcy5leHBvc2UoKVxyXG5cclxuICB9XHJcblxyXG5cclxuICAvLyDlpITnkIbpn7Pop4bpopFcclxuICBpZiAobm9kZS5uYW1lID09PSAndmlkZW8nIHx8IG5vZGUubmFtZSA9PT0gJ2F1ZGlvJykge1xyXG4gICAgLy8g6K6+572uIGlkIOS7peS+v+iOt+WPliBjb250ZXh0XHJcbiAgICBpZiAobm9kZS5uYW1lID09PSAndmlkZW8nICYmICFhdHRycy5pZCkge1xyXG4gICAgICBhdHRycy5pZCA9ICd2JyArIGlkSW5kZXgrK1xyXG4gICAgfVxyXG4gICAgLy8g5rKh5pyJ6K6+572uIGNvbnRyb2xzIOS5n+ayoeacieiuvue9riBhdXRvcGxheSDnmoToh6rliqjorr7nva4gY29udHJvbHNcclxuICAgIGlmICghYXR0cnMuY29udHJvbHMgJiYgIWF0dHJzLmF1dG9wbGF5KSB7XHJcbiAgICAgIGF0dHJzLmNvbnRyb2xzID0gJ1QnXHJcbiAgICB9XHJcbiAgICAvLyDnlKjmlbDnu4TlrZjlgqjmiYDmnInlj6/nlKjnmoQgc291cmNlXHJcbiAgICBub2RlLnNyYyA9IFtdXHJcbiAgICBpZiAoYXR0cnMuc3JjKSB7XHJcbiAgICAgIG5vZGUuc3JjLnB1c2goYXR0cnMuc3JjKVxyXG4gICAgICBhdHRycy5zcmMgPSB1bmRlZmluZWRcclxuICAgIH1cclxuICAgIHRoaXMuZXhwb3NlKClcclxuICB9XHJcblxyXG5cclxuICAvLyDlpITnkIboh6rpl63lkIjmoIfnrb5cclxuICBpZiAoY2xvc2UpIHtcclxuICAgIGlmICghdGhpcy5ob29rKG5vZGUpIHx8IGNvbmZpZy5pZ25vcmVUYWdzW25vZGUubmFtZV0pIHtcclxuICAgICAgLy8g6YCa6L+HIGJhc2Ug5qCH562+6K6+572u5Li75Z+f5ZCNXHJcbiAgICAgIGlmIChub2RlLm5hbWUgPT09ICdiYXNlJyAmJiAhdGhpcy5vcHRpb25zLmRvbWFpbikge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5kb21haW4gPSBhdHRycy5ocmVmXHJcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5uYW1lID09PSAnc291cmNlJyAmJiBwYXJlbnQgJiYgKHBhcmVudC5uYW1lID09PSAndmlkZW8nIHx8IHBhcmVudC5uYW1lID09PSAnYXVkaW8nKSAmJiBhdHRycy5zcmMpIHtcclxuICAgICAgICAvLyDorr7nva4gc291cmNlIOagh+etvu+8iOS7heeItuiKgueCueS4uiB2aWRlbyDmiJYgYXVkaW8g5pe25pyJ5pWI77yJXHJcbiAgICAgICAgcGFyZW50LnNyYy5wdXNoKGF0dHJzLnNyYylcclxuICAgICAgfVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PmnpAgc3R5bGVcclxuICAgIGNvbnN0IHN0eWxlT2JqID0gdGhpcy5wYXJzZVN0eWxlKG5vZGUpXHJcblxyXG4gICAgLy8g5aSE55CG5Zu+54mHXHJcbiAgICBpZiAobm9kZS5uYW1lID09PSAnaW1nJykge1xyXG4gICAgICBpZiAoYXR0cnMuc3JjKSB7XHJcbiAgICAgICAgLy8g5qCH6K6wIHdlYnBcclxuICAgICAgICBpZiAoYXR0cnMuc3JjLmluY2x1ZGVzKCd3ZWJwJykpIHtcclxuICAgICAgICAgIG5vZGUud2VicCA9ICdUJ1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkYXRhIHVybCDlm77niYflpoLmnpzmsqHmnInorr7nva4gb3JpZ2luYWwtc3JjIOm7mOiupOS4uuS4jeWPr+mihOiniOeahOWwj+WbvueJh1xyXG4gICAgICAgIGlmIChhdHRycy5zcmMuaW5jbHVkZXMoJ2RhdGE6JykgJiYgIWF0dHJzWydvcmlnaW5hbC1zcmMnXSkge1xyXG4gICAgICAgICAgYXR0cnMuaWdub3JlID0gJ1QnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXR0cnMuaWdub3JlIHx8IG5vZGUud2VicCB8fCBhdHRycy5zcmMuaW5jbHVkZXMoJ2Nsb3VkOi8vJykpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YWNrLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5zdGFja1tpXVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSAnYScpIHtcclxuICAgICAgICAgICAgICBub2RlLmEgPSBpdGVtLmF0dHJzXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaXRlbS5jID0gMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXR0cnMuaSA9IHRoaXMuaW1nTGlzdC5sZW5ndGgudG9TdHJpbmcoKVxyXG4gICAgICAgICAgbGV0IHNyYyA9IGF0dHJzWydvcmlnaW5hbC1zcmMnXSB8fCBhdHRycy5zcmNcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICB0aGlzLmltZ0xpc3QucHVzaChzcmMpXHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sYXp5TG9hZCkge1xyXG4gICAgICAgICAgICBhdHRyc1snZGF0YS1zcmMnXSA9IGF0dHJzLnNyY1xyXG4gICAgICAgICAgICBhdHRycy5zcmMgPSB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdHlsZU9iai5kaXNwbGF5ID09PSAnaW5saW5lJykge1xyXG4gICAgICAgIHN0eWxlT2JqLmRpc3BsYXkgPSAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYXR0cnMuaWdub3JlKSB7XHJcbiAgICAgICAgc3R5bGVPYmpbJ21heC13aWR0aCddID0gc3R5bGVPYmpbJ21heC13aWR0aCddIHx8ICcxMDAlJ1xyXG4gICAgICAgIGF0dHJzLnN0eWxlICs9ICc7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmUnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOiuvue9rueahOWuveW6pui2heWHuuWxj+W5le+8jOS4uumBv+WFjeWPmOW9ou+8jOmrmOW6pui9rOS4uuiHquWKqFxyXG4gICAgICBpZiAocGFyc2VJbnQoc3R5bGVPYmoud2lkdGgpID4gd2luZG93V2lkdGgpIHtcclxuICAgICAgICBzdHlsZU9iai5oZWlnaHQgPSB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgICAvLyDorrDlvZXmmK/lkKborr7nva7kuoblrr3pq5hcclxuICAgICAgaWYgKHN0eWxlT2JqLndpZHRoKSB7XHJcbiAgICAgICAgaWYgKHN0eWxlT2JqLndpZHRoLmluY2x1ZGVzKCdhdXRvJykpIHtcclxuICAgICAgICAgIHN0eWxlT2JqLndpZHRoID0gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbm9kZS53ID0gJ1QnXHJcbiAgICAgICAgICBpZiAoc3R5bGVPYmouaGVpZ2h0ICYmICFzdHlsZU9iai5oZWlnaHQuaW5jbHVkZXMoJ2F1dG8nKSkge1xyXG4gICAgICAgICAgICBub2RlLmggPSAnVCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobm9kZS5uYW1lID09PSAnc3ZnJykge1xyXG4gICAgICBzaWJsaW5ncy5wdXNoKG5vZGUpXHJcbiAgICAgIHRoaXMuc3RhY2sucHVzaChub2RlKVxyXG4gICAgICB0aGlzLnBvcE5vZGUoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlT2JqKSB7XHJcbiAgICAgIGlmIChzdHlsZU9ialtrZXldKSB7XHJcbiAgICAgICAgYXR0cnMuc3R5bGUgKz0gYDske2tleX06JHtzdHlsZU9ialtrZXldLnJlcGxhY2UoJyAhaW1wb3J0YW50JywgJycpfWBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXR0cnMuc3R5bGUgPSBhdHRycy5zdHlsZS5zdWJzdHIoMSkgfHwgdW5kZWZpbmVkXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICgobm9kZS5uYW1lID09PSAncHJlJyB8fCAoKGF0dHJzLnN0eWxlIHx8ICcnKS5pbmNsdWRlcygnd2hpdGUtc3BhY2UnKSAmJiBhdHRycy5zdHlsZS5pbmNsdWRlcygncHJlJykpKSAmJiB0aGlzLnByZSAhPT0gMikge1xyXG4gICAgICB0aGlzLnByZSA9IG5vZGUucHJlID0gMVxyXG4gICAgfVxyXG4gICAgbm9kZS5jaGlsZHJlbiA9IFtdXHJcbiAgICB0aGlzLnN0YWNrLnB1c2gobm9kZSlcclxuICB9XHJcblxyXG4gIC8vIOWKoOWFpeiKgueCueagkVxyXG4gIHNpYmxpbmdzLnB1c2gobm9kZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDop6PmnpDliLDmoIfnrb7nu5PmnZ9cclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUg5qCH562+5ZCNXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5QYXJzZXIucHJvdG90eXBlLm9uQ2xvc2VUYWcgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gIC8vIOS+neasoeWHuuagiOWIsOWMuemFjeS4uuatolxyXG4gIG5hbWUgPSB0aGlzLnhtbCA/IG5hbWUgOiBuYW1lLnRvTG93ZXJDYXNlKClcclxuICBsZXQgaVxyXG4gIGZvciAoaSA9IHRoaXMuc3RhY2subGVuZ3RoOyBpLS07KSB7XHJcbiAgICBpZiAodGhpcy5zdGFja1tpXS5uYW1lID09PSBuYW1lKSBicmVha1xyXG4gIH1cclxuICBpZiAoaSAhPT0gLTEpIHtcclxuICAgIHdoaWxlICh0aGlzLnN0YWNrLmxlbmd0aCA+IGkpIHtcclxuICAgICAgdGhpcy5wb3BOb2RlKClcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdwJyB8fCBuYW1lID09PSAnYnInKSB7XHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IHRoaXMuc3RhY2subGVuZ3RoID8gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmNoaWxkcmVuIDogdGhpcy5ub2Rlc1xyXG4gICAgc2libGluZ3MucHVzaCh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgY2xhc3M6IHRhZ1NlbGVjdG9yW25hbWVdLFxyXG4gICAgICAgIHN0eWxlOiB0aGlzLnRhZ1N0eWxlW25hbWVdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOWkhOeQhuagh+etvuWHuuagiFxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuUGFyc2VyLnByb3RvdHlwZS5wb3BOb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrLnBvcCgpXHJcbiAgbGV0IGF0dHJzID0gbm9kZS5hdHRyc1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxyXG4gIGNvbnN0IHBhcmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxyXG4gIGNvbnN0IHNpYmxpbmdzID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuIDogdGhpcy5ub2Rlc1xyXG5cclxuICBpZiAoIXRoaXMuaG9vayhub2RlKSB8fCBjb25maWcuaWdub3JlVGFnc1tub2RlLm5hbWVdKSB7XHJcbiAgICAvLyDojrflj5bmoIfpophcclxuICAgIGlmIChub2RlLm5hbWUgPT09ICd0aXRsZScgJiYgY2hpbGRyZW4ubGVuZ3RoICYmIGNoaWxkcmVuWzBdLnR5cGUgPT09ICd0ZXh0JyAmJiB0aGlzLm9wdGlvbnMuc2V0VGl0bGUpIHtcclxuICAgICAgdW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgdGl0bGU6IGNoaWxkcmVuWzBdLnRleHRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHNpYmxpbmdzLnBvcCgpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGlmIChub2RlLnByZSAmJiB0aGlzLnByZSAhPT0gMikge1xyXG4gICAgLy8g5piv5ZCm5ZCI5bm256m655m956ym5qCH6K+GXHJcbiAgICB0aGlzLnByZSA9IG5vZGUucHJlID0gdW5kZWZpbmVkXHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFjay5sZW5ndGg7IGktLTspIHtcclxuICAgICAgaWYgKHRoaXMuc3RhY2tbaV0ucHJlKSB7XHJcbiAgICAgICAgdGhpcy5wcmUgPSAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN0eWxlT2JqID0ge31cclxuXHJcbiAgLy8g6L2s5o2iIHN2Z1xyXG4gIGlmIChub2RlLm5hbWUgPT09ICdzdmcnKSB7XHJcbiAgICBpZiAodGhpcy54bWwgPiAxKSB7XHJcbiAgICAgIC8vIOWkmuWxgiBzdmcg5bWM5aWXXHJcbiAgICAgIHRoaXMueG1sLS1cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBsZXQgc3JjID0gJydcclxuICAgIGNvbnN0IHN0eWxlID0gYXR0cnMuc3R5bGVcclxuICAgIGF0dHJzLnN0eWxlID0gJydcclxuICAgIGF0dHJzLnhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcclxuICAgIChmdW5jdGlvbiB0cmF2ZXJzYWwgKG5vZGUpIHtcclxuICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgc3JjICs9IG5vZGUudGV4dFxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBjb25maWcuc3ZnRGljdFtub2RlLm5hbWVdIHx8IG5vZGUubmFtZVxyXG4gICAgICBzcmMgKz0gJzwnICsgbmFtZVxyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gbm9kZS5hdHRycykge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IG5vZGUuYXR0cnNbaXRlbV1cclxuICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICBzcmMgKz0gYCAke2NvbmZpZy5zdmdEaWN0W2l0ZW1dIHx8IGl0ZW19PVwiJHt2YWx9XCJgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIHNyYyArPSAnLz4nXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3JjICs9ICc+J1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdHJhdmVyc2FsKG5vZGUuY2hpbGRyZW5baV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNyYyArPSAnPC8nICsgbmFtZSArICc+J1xyXG4gICAgICB9XHJcbiAgICB9KShub2RlKVxyXG4gICAgbm9kZS5uYW1lID0gJ2ltZydcclxuICAgIG5vZGUuYXR0cnMgPSB7XHJcbiAgICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCcgKyBzcmMucmVwbGFjZSgvIy9nLCAnJTIzJyksXHJcbiAgICAgIHN0eWxlLFxyXG4gICAgICBpZ25vcmU6ICdUJ1xyXG4gICAgfVxyXG4gICAgbm9kZS5jaGlsZHJlbiA9IHVuZGVmaW5lZFxyXG5cclxuICAgIHRoaXMueG1sID0gZmFsc2VcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcblxyXG4gIC8vIOi9rOaNoiBhbGlnbiDlsZ7mgKdcclxuICBpZiAoYXR0cnMuYWxpZ24pIHtcclxuICAgIGlmIChub2RlLm5hbWUgPT09ICd0YWJsZScpIHtcclxuICAgICAgaWYgKGF0dHJzLmFsaWduID09PSAnY2VudGVyJykge1xyXG4gICAgICAgIHN0eWxlT2JqWydtYXJnaW4taW5saW5lLXN0YXJ0J10gPSBzdHlsZU9ialsnbWFyZ2luLWlubGluZS1lbmQnXSA9ICdhdXRvJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0eWxlT2JqLmZsb2F0ID0gYXR0cnMuYWxpZ25cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3R5bGVPYmpbJ3RleHQtYWxpZ24nXSA9IGF0dHJzLmFsaWduXHJcbiAgICB9XHJcbiAgICBhdHRycy5hbGlnbiA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLy8g6L2s5o2iIGRpciDlsZ7mgKdcclxuICBpZiAoYXR0cnMuZGlyKSB7XHJcbiAgICBzdHlsZU9iai5kaXJlY3Rpb24gPSBhdHRycy5kaXJcclxuICAgIGF0dHJzLmRpciA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLy8g6L2s5o2iIGZvbnQg5qCH562+55qE5bGe5oCnXHJcbiAgaWYgKG5vZGUubmFtZSA9PT0gJ2ZvbnQnKSB7XHJcbiAgICBpZiAoYXR0cnMuY29sb3IpIHtcclxuICAgICAgc3R5bGVPYmouY29sb3IgPSBhdHRycy5jb2xvclxyXG4gICAgICBhdHRycy5jb2xvciA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gICAgaWYgKGF0dHJzLmZhY2UpIHtcclxuICAgICAgc3R5bGVPYmpbJ2ZvbnQtZmFtaWx5J10gPSBhdHRycy5mYWNlXHJcbiAgICAgIGF0dHJzLmZhY2UgPSB1bmRlZmluZWRcclxuICAgIH1cclxuICAgIGlmIChhdHRycy5zaXplKSB7XHJcbiAgICAgIGxldCBzaXplID0gcGFyc2VJbnQoYXR0cnMuc2l6ZSlcclxuICAgICAgaWYgKCFpc05hTihzaXplKSkge1xyXG4gICAgICAgIGlmIChzaXplIDwgMSkge1xyXG4gICAgICAgICAgc2l6ZSA9IDFcclxuICAgICAgICB9IGVsc2UgaWYgKHNpemUgPiA3KSB7XHJcbiAgICAgICAgICBzaXplID0gN1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHlsZU9ialsnZm9udC1zaXplJ10gPSBbJ3h4LXNtYWxsJywgJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ3gtbGFyZ2UnLCAneHgtbGFyZ2UnXVtzaXplIC0gMV1cclxuICAgICAgfVxyXG4gICAgICBhdHRycy5zaXplID0gdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8g5LiA5Lqb57yW6L6R5Zmo55qE6Ieq5bimIGNsYXNzXHJcbiAgaWYgKChhdHRycy5jbGFzcyB8fCAnJykuaW5jbHVkZXMoJ2FsaWduLWNlbnRlcicpKSB7XHJcbiAgICBzdHlsZU9ialsndGV4dC1hbGlnbiddID0gJ2NlbnRlcidcclxuICB9XHJcblxyXG4gIE9iamVjdC5hc3NpZ24oc3R5bGVPYmosIHRoaXMucGFyc2VTdHlsZShub2RlKSlcclxuXHJcbiAgaWYgKG5vZGUubmFtZSAhPT0gJ3RhYmxlJyAmJiBwYXJzZUludChzdHlsZU9iai53aWR0aCkgPiB3aW5kb3dXaWR0aCkge1xyXG4gICAgc3R5bGVPYmpbJ21heC13aWR0aCddID0gJzEwMCUnXHJcbiAgICBzdHlsZU9ialsnYm94LXNpemluZyddID0gJ2JvcmRlci1ib3gnXHJcbiAgfVxyXG5cclxuXHJcbiAgaWYgKGNvbmZpZy5ibG9ja1RhZ3Nbbm9kZS5uYW1lXSkge1xyXG4gICAgbm9kZS5uYW1lID0gJ2RpdidcclxuICB9IGVsc2UgaWYgKCFjb25maWcudHJ1c3RUYWdzW25vZGUubmFtZV0gJiYgIXRoaXMueG1sKSB7XHJcbiAgICAvLyDmnKrnn6XmoIfnrb7ovazkuLogc3Bhbu+8jOmBv+WFjeaXoOazleaYvuekulxyXG4gICAgbm9kZS5uYW1lID0gJ3NwYW4nXHJcbiAgfVxyXG5cclxuICBpZiAobm9kZS5uYW1lID09PSAnYScgfHwgbm9kZS5uYW1lID09PSAnYWQnXHJcblxyXG4gICAgfHwgbm9kZS5uYW1lID09PSAnaWZyYW1lJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcblxyXG4gICkge1xyXG4gICAgdGhpcy5leHBvc2UoKVxyXG4gIH0gZWxzZSBpZiAobm9kZS5uYW1lID09PSAndmlkZW8nKSB7XHJcbiAgICBsZXQgc3RyID0gJzx2aWRlbyBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjEwMCVcIidcclxuICAgIGZvciAoY29uc3QgaXRlbSBpbiBhdHRycykge1xyXG4gICAgICBpZiAoYXR0cnNbaXRlbV0pIHtcclxuICAgICAgICBzdHIgKz0gJyAnICsgaXRlbSArICc9XCInICsgYXR0cnNbaXRlbV0gKyAnXCInXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMucGF1c2VWaWRlbykge1xyXG4gICAgICBzdHIgKz0gJyBvbnBsYXk9XCJmb3IodmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXFwndmlkZW9cXCcpLHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdIT10aGlzJiZlW3RdLnBhdXNlKClcIidcclxuICAgIH1cclxuICAgIHN0ciArPSAnPidcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5zcmMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc3RyICs9ICc8c291cmNlIHNyYz1cIicgKyBub2RlLnNyY1tpXSArICdcIj4nXHJcbiAgICB9XHJcbiAgICBzdHIgKz0gJzwvdmlkZW8+J1xyXG4gICAgbm9kZS5odG1sID0gc3RyXHJcbiAgfSBlbHNlIGlmICgobm9kZS5uYW1lID09PSAndWwnIHx8IG5vZGUubmFtZSA9PT0gJ29sJykgJiYgbm9kZS5jKSB7XHJcbiAgICAvLyDliJfooajlpITnkIZcclxuICAgIGNvbnN0IHR5cGVzID0ge1xyXG4gICAgICBhOiAnbG93ZXItYWxwaGEnLFxyXG4gICAgICBBOiAndXBwZXItYWxwaGEnLFxyXG4gICAgICBpOiAnbG93ZXItcm9tYW4nLFxyXG4gICAgICBJOiAndXBwZXItcm9tYW4nXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZXNbYXR0cnMudHlwZV0pIHtcclxuICAgICAgYXR0cnMuc3R5bGUgKz0gJztsaXN0LXN0eWxlLXR5cGU6JyArIHR5cGVzW2F0dHJzLnR5cGVdXHJcbiAgICAgIGF0dHJzLnR5cGUgPSB1bmRlZmluZWRcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGg7IGktLTspIHtcclxuICAgICAgaWYgKGNoaWxkcmVuW2ldLm5hbWUgPT09ICdsaScpIHtcclxuICAgICAgICBjaGlsZHJlbltpXS5jID0gMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChub2RlLm5hbWUgPT09ICd0YWJsZScpIHtcclxuICAgIC8vIOihqOagvOWkhOeQhlxyXG4gICAgLy8gY2VsbHBhZGRpbmfjgIFjZWxsc3BhY2luZ+OAgWJvcmRlciDov5nlh6DkuKrluLjnlKjooajmoLzlsZ7mgKfpnIDopoHpgJrov4fovazmjaLlrp7njrBcclxuICAgIGxldCBwYWRkaW5nID0gcGFyc2VGbG9hdChhdHRycy5jZWxscGFkZGluZylcclxuICAgIGxldCBzcGFjaW5nID0gcGFyc2VGbG9hdChhdHRycy5jZWxsc3BhY2luZylcclxuICAgIGNvbnN0IGJvcmRlciA9IHBhcnNlRmxvYXQoYXR0cnMuYm9yZGVyKVxyXG4gICAgaWYgKG5vZGUuYykge1xyXG4gICAgICAvLyBwYWRkaW5nIOWSjCBzcGFjaW5nIOm7mOiupCAyXHJcbiAgICAgIGlmIChpc05hTihwYWRkaW5nKSkge1xyXG4gICAgICAgIHBhZGRpbmcgPSAyXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzTmFOKHNwYWNpbmcpKSB7XHJcbiAgICAgICAgc3BhY2luZyA9IDJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJvcmRlcikge1xyXG4gICAgICBhdHRycy5zdHlsZSArPSAnO2JvcmRlcjonICsgYm9yZGVyICsgJ3B4IHNvbGlkIGdyYXknXHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5mbGFnICYmIG5vZGUuYykge1xyXG4gICAgICAvLyDmnIkgY29sc3BhbiDmiJYgcm93c3BhbiDkuJTlkKvmnInpk77mjqXnmoTooajmoLzpgJrov4cgZ3JpZCDluIPlsYDlrp7njrBcclxuICAgICAgc3R5bGVPYmouZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgICBpZiAoc3BhY2luZykge1xyXG4gICAgICAgIHN0eWxlT2JqWydncmlkLWdhcCddID0gc3BhY2luZyArICdweCdcclxuICAgICAgICBzdHlsZU9iai5wYWRkaW5nID0gc3BhY2luZyArICdweCdcclxuICAgICAgfSBlbHNlIGlmIChib3JkZXIpIHtcclxuICAgICAgICAvLyDml6Dpl7TpmpTnmoTmg4XlhrXkuIvpgb/lhY3ovrnmoYbph43lj6BcclxuICAgICAgICBhdHRycy5zdHlsZSArPSAnO2JvcmRlci1sZWZ0OjA7Ym9yZGVyLXRvcDowJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB3aWR0aCA9IFtdIC8vIOihqOagvOeahOWIl+WuvVxyXG4gICAgICBjb25zdCB0ckxpc3QgPSBbXSAvLyB0ciDliJfooahcclxuICAgICAgY29uc3QgY2VsbHMgPSBbXSAvLyDkv53lrZjmlrDnmoTljZXlhYPmoLxcclxuICAgICAgY29uc3QgbWFwID0ge307IC8vIOiiq+WQiOW5tuWNleWFg+agvOWNoOeUqOeahOagvOWtkFxyXG5cclxuICAgICAgKGZ1bmN0aW9uIHRyYXZlcnNhbCAobm9kZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAobm9kZXNbaV0ubmFtZSA9PT0gJ3RyJykge1xyXG4gICAgICAgICAgICB0ckxpc3QucHVzaChub2Rlc1tpXSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyYXZlcnNhbChub2Rlc1tpXS5jaGlsZHJlbiB8fCBbXSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pKGNoaWxkcmVuKVxyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMTsgcm93IDw9IHRyTGlzdC5sZW5ndGg7IHJvdysrKSB7XHJcbiAgICAgICAgbGV0IGNvbCA9IDFcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRyTGlzdFtyb3cgLSAxXS5jaGlsZHJlbi5sZW5ndGg7IGorKywgY29sKyspIHtcclxuICAgICAgICAgIGNvbnN0IHRkID0gdHJMaXN0W3JvdyAtIDFdLmNoaWxkcmVuW2pdXHJcbiAgICAgICAgICBpZiAodGQubmFtZSA9PT0gJ3RkJyB8fCB0ZC5uYW1lID09PSAndGgnKSB7XHJcbiAgICAgICAgICAgIC8vIOi/meS4quagvOWtkOiiq+S4iumdoueahOWNleWFg+agvOWNoOeUqO+8jOWImeWIl+WPtysrXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXBbcm93ICsgJy4nICsgY29sXSkge1xyXG4gICAgICAgICAgICAgIGNvbCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHN0eWxlID0gdGQuYXR0cnMuc3R5bGUgfHwgJydcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBzdHlsZS5pbmRleE9mKCd3aWR0aCcpID8gc3R5bGUuaW5kZXhPZignO3dpZHRoJykgOiAwXHJcbiAgICAgICAgICAgIC8vIOaPkOWPluWHuiB0ZCDnmoTlrr3luqZcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgIGxldCBlbmQgPSBzdHlsZS5pbmRleE9mKCc7Jywgc3RhcnQgKyA2KVxyXG4gICAgICAgICAgICAgIGlmIChlbmQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBzdHlsZS5sZW5ndGhcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKCF0ZC5hdHRycy5jb2xzcGFuKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aFtjb2xdID0gc3R5bGUuc3Vic3RyaW5nKHN0YXJ0ID8gc3RhcnQgKyA3IDogNiwgZW5kKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlLnN1YnN0cigwLCBzdGFydCkgKyBzdHlsZS5zdWJzdHIoZW5kKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlICs9IChib3JkZXIgPyBgO2JvcmRlcjoke2JvcmRlcn1weCBzb2xpZCBncmF5YCArIChzcGFjaW5nID8gJycgOiAnO2JvcmRlci1yaWdodDowO2JvcmRlci1ib3R0b206MCcpIDogJycpICsgKHBhZGRpbmcgPyBgO3BhZGRpbmc6JHtwYWRkaW5nfXB4YCA6ICcnKVxyXG4gICAgICAgICAgICAvLyDlpITnkIbliJflkIjlubZcclxuICAgICAgICAgICAgaWYgKHRkLmF0dHJzLmNvbHNwYW4pIHtcclxuICAgICAgICAgICAgICBzdHlsZSArPSBgO2dyaWQtY29sdW1uLXN0YXJ0OiR7Y29sfTtncmlkLWNvbHVtbi1lbmQ6JHtjb2wgKyBwYXJzZUludCh0ZC5hdHRycy5jb2xzcGFuKX1gXHJcbiAgICAgICAgICAgICAgaWYgKCF0ZC5hdHRycy5yb3dzcGFuKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBgO2dyaWQtcm93LXN0YXJ0OiR7cm93fTtncmlkLXJvdy1lbmQ6JHtyb3cgKyAxfWBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29sICs9IHBhcnNlSW50KHRkLmF0dHJzLmNvbHNwYW4pIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWkhOeQhuihjOWQiOW5tlxyXG4gICAgICAgICAgICBpZiAodGQuYXR0cnMucm93c3Bhbikge1xyXG4gICAgICAgICAgICAgIHN0eWxlICs9IGA7Z3JpZC1yb3ctc3RhcnQ6JHtyb3d9O2dyaWQtcm93LWVuZDoke3JvdyArIHBhcnNlSW50KHRkLmF0dHJzLnJvd3NwYW4pfWBcclxuICAgICAgICAgICAgICBpZiAoIXRkLmF0dHJzLmNvbHNwYW4pIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IGA7Z3JpZC1jb2x1bW4tc3RhcnQ6JHtjb2x9O2dyaWQtY29sdW1uLWVuZDoke2NvbCArIDF9YFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyDorrDlvZXkuIvmlrnljZXlhYPmoLzooqvljaDnlKhcclxuICAgICAgICAgICAgICBmb3IgKGxldCByb3dzcGFuID0gMTsgcm93c3BhbiA8IHRkLmF0dHJzLnJvd3NwYW47IHJvd3NwYW4rKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sc3BhbiA9IDA7IGNvbHNwYW4gPCAodGQuYXR0cnMuY29sc3BhbiB8fCAxKTsgY29sc3BhbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcFsocm93ICsgcm93c3BhbikgKyAnLicgKyAoY29sIC0gY29sc3BhbildID0gMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICB0ZC5hdHRycy5zdHlsZSA9IHN0eWxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2VsbHMucHVzaCh0ZClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdyA9PT0gMSkge1xyXG4gICAgICAgICAgbGV0IHRlbXAgPSAnJ1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjb2w7IGkrKykge1xyXG4gICAgICAgICAgICB0ZW1wICs9ICh3aWR0aFtpXSA/IHdpZHRoW2ldIDogJ2F1dG8nKSArICcgJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3R5bGVPYmpbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddID0gdGVtcFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBub2RlLmNoaWxkcmVuID0gY2VsbHNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOayoeacieS9v+eUqOWQiOW5tuWNleWFg+agvOeahOihqOagvOmAmui/hyB0YWJsZSDluIPlsYDlrp7njrBcclxuICAgICAgaWYgKG5vZGUuYykge1xyXG4gICAgICAgIHN0eWxlT2JqLmRpc3BsYXkgPSAndGFibGUnXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc05hTihzcGFjaW5nKSkge1xyXG4gICAgICAgIHN0eWxlT2JqWydib3JkZXItc3BhY2luZyddID0gc3BhY2luZyArICdweCdcclxuICAgICAgfVxyXG4gICAgICBpZiAoYm9yZGVyIHx8IHBhZGRpbmcpIHtcclxuICAgICAgICAvLyDpgY3ljoZcclxuICAgICAgICAoZnVuY3Rpb24gdHJhdmVyc2FsIChub2Rlcykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ZCA9IG5vZGVzW2ldXHJcbiAgICAgICAgICAgIGlmICh0ZC5uYW1lID09PSAndGgnIHx8IHRkLm5hbWUgPT09ICd0ZCcpIHtcclxuICAgICAgICAgICAgICBpZiAoYm9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0ZC5hdHRycy5zdHlsZSA9IGBib3JkZXI6JHtib3JkZXJ9cHggc29saWQgZ3JheTske3RkLmF0dHJzLnN0eWxlIHx8ICcnfWBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHBhZGRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRkLmF0dHJzLnN0eWxlID0gYHBhZGRpbmc6JHtwYWRkaW5nfXB4OyR7dGQuYXR0cnMuc3R5bGUgfHwgJyd9YFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0ZC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgIHRyYXZlcnNhbCh0ZC5jaGlsZHJlbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKGNoaWxkcmVuKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDnu5nooajmoLzmt7vliqDkuIDkuKrljZXni6znmoTmqKrlkJHmu5rliqjlsYJcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2Nyb2xsVGFibGUgJiYgIShhdHRycy5zdHlsZSB8fCAnJykuaW5jbHVkZXMoJ2lubGluZScpKSB7XHJcbiAgICAgIGNvbnN0IHRhYmxlID0gT2JqZWN0LmFzc2lnbih7fSwgbm9kZSlcclxuICAgICAgbm9kZS5uYW1lID0gJ2RpdidcclxuICAgICAgbm9kZS5hdHRycyA9IHtcclxuICAgICAgICBzdHlsZTogJ292ZXJmbG93OmF1dG8nXHJcbiAgICAgIH1cclxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFt0YWJsZV1cclxuICAgICAgYXR0cnMgPSB0YWJsZS5hdHRyc1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoKG5vZGUubmFtZSA9PT0gJ3RkJyB8fCBub2RlLm5hbWUgPT09ICd0aCcpICYmIChhdHRycy5jb2xzcGFuIHx8IGF0dHJzLnJvd3NwYW4pKSB7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5zdGFjay5sZW5ndGg7IGktLTspIHtcclxuICAgICAgaWYgKHRoaXMuc3RhY2tbaV0ubmFtZSA9PT0gJ3RhYmxlJykge1xyXG4gICAgICAgIHRoaXMuc3RhY2tbaV0uZmxhZyA9IDEgLy8g5oyH56S65ZCr5pyJ5ZCI5bm25Y2V5YWD5qC8XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAobm9kZS5uYW1lID09PSAncnVieScpIHtcclxuICAgIC8vIOi9rOaNoiBydWJ5XHJcbiAgICBub2RlLm5hbWUgPSAnc3BhbidcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgIGlmIChjaGlsZHJlbltpXS50eXBlID09PSAndGV4dCcgJiYgY2hpbGRyZW5baSArIDFdLm5hbWUgPT09ICdydCcpIHtcclxuICAgICAgICBjaGlsZHJlbltpXSA9IHtcclxuICAgICAgICAgIG5hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgc3R5bGU6ICdkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmNlbnRlcidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjaGlsZHJlbjogW3tcclxuICAgICAgICAgICAgbmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgc3R5bGU6ICdmb250LXNpemU6NTAlOycgKyAoY2hpbGRyZW5baSArIDFdLmF0dHJzLnN0eWxlIHx8ICcnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5baSArIDFdLmNoaWxkcmVuXHJcbiAgICAgICAgICB9LCBjaGlsZHJlbltpXV1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGRyZW4uc3BsaWNlKGkgKyAxLCAxKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChub2RlLmMpIHtcclxuICAgIG5vZGUuYyA9IDJcclxuICAgIGZvciAobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICBpZiAoIW5vZGUuY2hpbGRyZW5baV0uYyB8fCBub2RlLmNoaWxkcmVuW2ldLm5hbWUgPT09ICd0YWJsZScpIHtcclxuICAgICAgICBub2RlLmMgPSAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICgoc3R5bGVPYmouZGlzcGxheSB8fCAnJykuaW5jbHVkZXMoJ2ZsZXgnKSAmJiAhbm9kZS5jKSB7XHJcbiAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBjaGlsZHJlbltpXVxyXG4gICAgICBpZiAoaXRlbS5mKSB7XHJcbiAgICAgICAgaXRlbS5hdHRycy5zdHlsZSA9IChpdGVtLmF0dHJzLnN0eWxlIHx8ICcnKSArIGl0ZW0uZlxyXG4gICAgICAgIGl0ZW0uZiA9IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGZsZXgg5biD5bGA5pe26YOo5YiG5qC35byP6ZyA6KaB5o+Q5Y+W5YiwIHJpY2gtdGV4dCDlpJblsYJcclxuICBjb25zdCBmbGV4ID0gcGFyZW50ICYmIChwYXJlbnQuYXR0cnMuc3R5bGUgfHwgJycpLmluY2x1ZGVzKCdmbGV4JylcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgJiYgIW5vZGUuYyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcblxyXG4gIGlmIChmbGV4KSB7XHJcbiAgICBub2RlLmYgPSAnO21heC13aWR0aDoxMDAlJ1xyXG4gIH1cclxuXHJcblxyXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlT2JqKSB7XHJcbiAgICBpZiAoc3R5bGVPYmpba2V5XSkge1xyXG4gICAgICBjb25zdCB2YWwgPSBgOyR7a2V5fToke3N0eWxlT2JqW2tleV0ucmVwbGFjZSgnICFpbXBvcnRhbnQnLCAnJyl9YFxyXG5cclxuICAgICAgaWYgKGZsZXggJiYgKChrZXkuaW5jbHVkZXMoJ2ZsZXgnKSAmJiBrZXkgIT09ICdmbGV4LWRpcmVjdGlvbicpIHx8IGtleSA9PT0gJ2FsaWduLXNlbGYnIHx8IHN0eWxlT2JqW2tleV1bMF0gPT09ICctJyB8fCAoa2V5ID09PSAnd2lkdGgnICYmIHZhbC5pbmNsdWRlcygnJScpKSkpIHtcclxuICAgICAgICBub2RlLmYgKz0gdmFsXHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3dpZHRoJykge1xyXG4gICAgICAgICAgYXR0cnMuc3R5bGUgKz0gJzt3aWR0aDoxMDAlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhdHRycy5zdHlsZSArPSB2YWxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhdHRycy5zdHlsZSA9IGF0dHJzLnN0eWxlLnN1YnN0cigxKSB8fCB1bmRlZmluZWRcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDop6PmnpDliLDmlofmnKxcclxuICogQHBhcmFtIHtTdHJpbmd9IHRleHQg5paH5pys5YaF5a65XHJcbiAqL1xyXG5QYXJzZXIucHJvdG90eXBlLm9uVGV4dCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgaWYgKCF0aGlzLnByZSkge1xyXG4gICAgLy8g5ZCI5bm256m655m956ymXHJcbiAgICBsZXQgdHJpbSA9ICcnXHJcbiAgICBsZXQgZmxhZ1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRleHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgaWYgKCFibGFua0NoYXJbdGV4dFtpXV0pIHtcclxuICAgICAgICB0cmltICs9IHRleHRbaV1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodHJpbVt0cmltLmxlbmd0aCAtIDFdICE9PSAnICcpIHtcclxuICAgICAgICAgIHRyaW0gKz0gJyAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ZXh0W2ldID09PSAnXFxuJyAmJiAhZmxhZykge1xyXG4gICAgICAgICAgZmxhZyA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOWOu+mZpOWQq+acieaNouihjOespueahOepuuS4slxyXG4gICAgaWYgKHRyaW0gPT09ICcgJyAmJiBmbGFnKSByZXR1cm5cclxuICAgIHRleHQgPSB0cmltXHJcbiAgfVxyXG4gIGNvbnN0IG5vZGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgbm9kZS50eXBlID0gJ3RleHQnXHJcbiAgbm9kZS50ZXh0ID0gZGVjb2RlRW50aXR5KHRleHQpXHJcbiAgaWYgKHRoaXMuaG9vayhub2RlKSkge1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2libGluZ3MgPSB0aGlzLnN0YWNrLmxlbmd0aCA/IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5jaGlsZHJlbiA6IHRoaXMubm9kZXNcclxuICAgIHNpYmxpbmdzLnB1c2gobm9kZSlcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gaHRtbCDor43ms5XliIbmnpDlmahcclxuICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXIg6auY5bGC5aSE55CG5ZmoXHJcbiAqL1xyXG5mdW5jdGlvbiBMZXhlciAoaGFuZGxlcikge1xyXG4gIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmiafooYzop6PmnpBcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnQg6KaB6Kej5p6Q55qE5paH5pysXHJcbiAqL1xyXG5MZXhlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xyXG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQgfHwgJydcclxuICB0aGlzLmkgPSAwIC8vIOagh+iusOino+aekOS9jee9rlxyXG4gIHRoaXMuc3RhcnQgPSAwIC8vIOagh+iusOS4gOS4quWNleivjeeahOW8gOWni+S9jee9rlxyXG4gIHRoaXMuc3RhdGUgPSB0aGlzLnRleHQgLy8g5b2T5YmN54q25oCBXHJcbiAgZm9yIChsZXQgbGVuID0gdGhpcy5jb250ZW50Lmxlbmd0aDsgdGhpcy5pICE9PSAtMSAmJiB0aGlzLmkgPCBsZW47KSB7XHJcbiAgICB0aGlzLnN0YXRlKClcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g5qOA5p+l5qCH562+5piv5ZCm6Zet5ZCIXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2Qg5aaC5p6c6Zet5ZCI6KaB6L+b6KGM55qE5pON5L2cXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSDmmK/lkKbpl63lkIhcclxuICogQHByaXZhdGVcclxuICovXHJcbkxleGVyLnByb3RvdHlwZS5jaGVja0Nsb3NlID0gZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gIGNvbnN0IHNlbGZDbG9zZSA9IHRoaXMuY29udGVudFt0aGlzLmldID09PSAnLydcclxuICBpZiAodGhpcy5jb250ZW50W3RoaXMuaV0gPT09ICc+JyB8fCAoc2VsZkNsb3NlICYmIHRoaXMuY29udGVudFt0aGlzLmkgKyAxXSA9PT0gJz4nKSkge1xyXG4gICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICB0aGlzLmhhbmRsZXJbbWV0aG9kXSh0aGlzLmNvbnRlbnQuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuaSkpXHJcbiAgICB9XHJcbiAgICB0aGlzLmkgKz0gc2VsZkNsb3NlID8gMiA6IDFcclxuICAgIHRoaXMuc3RhcnQgPSB0aGlzLmlcclxuICAgIHRoaXMuaGFuZGxlci5vbk9wZW5UYWcoc2VsZkNsb3NlKVxyXG4gICAgaWYgKHRoaXMuaGFuZGxlci50YWdOYW1lID09PSAnc2NyaXB0Jykge1xyXG4gICAgICB0aGlzLmkgPSB0aGlzLmNvbnRlbnQuaW5kZXhPZignPC8nLCB0aGlzLmkpXHJcbiAgICAgIGlmICh0aGlzLmkgIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5pICs9IDJcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5pXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZW5kVGFnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy50ZXh0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmlofmnKznirbmgIFcclxuICogQHByaXZhdGVcclxuICovXHJcbkxleGVyLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuaSA9IHRoaXMuY29udGVudC5pbmRleE9mKCc8JywgdGhpcy5pKSAvLyDmn6Xmib7mnIDov5HnmoTmoIfnrb5cclxuICBpZiAodGhpcy5pID09PSAtMSkge1xyXG4gICAgLy8g5rKh5pyJ5qCH562+5LqGXHJcbiAgICBpZiAodGhpcy5zdGFydCA8IHRoaXMuY29udGVudC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uVGV4dCh0aGlzLmNvbnRlbnQuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuY29udGVudC5sZW5ndGgpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNvbnN0IGMgPSB0aGlzLmNvbnRlbnRbdGhpcy5pICsgMV1cclxuICBpZiAoKGMgPj0gJ2EnICYmIGMgPD0gJ3onKSB8fCAoYyA+PSAnQScgJiYgYyA8PSAnWicpKSB7XHJcbiAgICAvLyDmoIfnrb7lvIDlpLRcclxuICAgIGlmICh0aGlzLnN0YXJ0ICE9PSB0aGlzLmkpIHtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uVGV4dCh0aGlzLmNvbnRlbnQuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuaSkpXHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXJ0ID0gKyt0aGlzLmlcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRhZ05hbWVcclxuICB9IGVsc2UgaWYgKGMgPT09ICcvJyB8fCBjID09PSAnIScgfHwgYyA9PT0gJz8nKSB7XHJcbiAgICBpZiAodGhpcy5zdGFydCAhPT0gdGhpcy5pKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vblRleHQodGhpcy5jb250ZW50LnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmkpKVxyXG4gICAgfVxyXG4gICAgY29uc3QgbmV4dCA9IHRoaXMuY29udGVudFt0aGlzLmkgKyAyXVxyXG4gICAgaWYgKGMgPT09ICcvJyAmJiAoKG5leHQgPj0gJ2EnICYmIG5leHQgPD0gJ3onKSB8fCAobmV4dCA+PSAnQScgJiYgbmV4dCA8PSAnWicpKSkge1xyXG4gICAgICAvLyDmoIfnrb7nu5PlsL5cclxuICAgICAgdGhpcy5pICs9IDJcclxuICAgICAgdGhpcy5zdGFydCA9IHRoaXMuaVxyXG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5lbmRUYWdcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICAvLyDlpITnkIbms6jph4pcclxuICAgIGxldCBlbmQgPSAnLS0+J1xyXG4gICAgaWYgKGMgIT09ICchJyB8fCB0aGlzLmNvbnRlbnRbdGhpcy5pICsgMl0gIT09ICctJyB8fCB0aGlzLmNvbnRlbnRbdGhpcy5pICsgM10gIT09ICctJykge1xyXG4gICAgICBlbmQgPSAnPidcclxuICAgIH1cclxuICAgIHRoaXMuaSA9IHRoaXMuY29udGVudC5pbmRleE9mKGVuZCwgdGhpcy5pKVxyXG4gICAgaWYgKHRoaXMuaSAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5pICs9IGVuZC5sZW5ndGhcclxuICAgICAgdGhpcy5zdGFydCA9IHRoaXMuaVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLmkrK1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmoIfnrb7lkI3nirbmgIFcclxuICogQHByaXZhdGVcclxuICovXHJcbkxleGVyLnByb3RvdHlwZS50YWdOYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmIChibGFua0NoYXJbdGhpcy5jb250ZW50W3RoaXMuaV1dKSB7XHJcbiAgICAvLyDop6PmnpDliLDmoIfnrb7lkI1cclxuICAgIHRoaXMuaGFuZGxlci5vblRhZ05hbWUodGhpcy5jb250ZW50LnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmkpKVxyXG4gICAgd2hpbGUgKGJsYW5rQ2hhclt0aGlzLmNvbnRlbnRbKyt0aGlzLmldXSk7XHJcbiAgICBpZiAodGhpcy5pIDwgdGhpcy5jb250ZW50Lmxlbmd0aCAmJiAhdGhpcy5jaGVja0Nsb3NlKCkpIHtcclxuICAgICAgdGhpcy5zdGFydCA9IHRoaXMuaVxyXG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5hdHRyTmFtZVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoIXRoaXMuY2hlY2tDbG9zZSgnb25UYWdOYW1lJykpIHtcclxuICAgIHRoaXMuaSsrXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOWxnuaAp+WQjeeKtuaAgVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuTGV4ZXIucHJvdG90eXBlLmF0dHJOYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gIGxldCBjID0gdGhpcy5jb250ZW50W3RoaXMuaV1cclxuICBpZiAoYmxhbmtDaGFyW2NdIHx8IGMgPT09ICc9Jykge1xyXG4gICAgLy8g6Kej5p6Q5Yiw5bGe5oCn5ZCNXHJcbiAgICB0aGlzLmhhbmRsZXIub25BdHRyTmFtZSh0aGlzLmNvbnRlbnQuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuaSkpXHJcbiAgICBsZXQgbmVlZFZhbCA9IGMgPT09ICc9J1xyXG4gICAgY29uc3QgbGVuID0gdGhpcy5jb250ZW50Lmxlbmd0aFxyXG4gICAgd2hpbGUgKCsrdGhpcy5pIDwgbGVuKSB7XHJcbiAgICAgIGMgPSB0aGlzLmNvbnRlbnRbdGhpcy5pXVxyXG4gICAgICBpZiAoIWJsYW5rQ2hhcltjXSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQ2xvc2UoKSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKG5lZWRWYWwpIHtcclxuICAgICAgICAgIC8vIOetieWPt+WQjumBh+WIsOesrOS4gOS4qumdnuepuuWtl+esplxyXG4gICAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuaVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuYXR0clZhbFxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRbdGhpcy5pXSA9PT0gJz0nKSB7XHJcbiAgICAgICAgICBuZWVkVmFsID0gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5pXHJcbiAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5hdHRyTmFtZVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICghdGhpcy5jaGVja0Nsb3NlKCdvbkF0dHJOYW1lJykpIHtcclxuICAgIHRoaXMuaSsrXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOWxnuaAp+WAvOeKtuaAgVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuTGV4ZXIucHJvdG90eXBlLmF0dHJWYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgYyA9IHRoaXMuY29udGVudFt0aGlzLmldXHJcbiAgY29uc3QgbGVuID0gdGhpcy5jb250ZW50Lmxlbmd0aFxyXG4gIGlmIChjID09PSAnXCInIHx8IGMgPT09IFwiJ1wiKSB7XHJcbiAgICAvLyDmnInlhpLlj7fnmoTlsZ7mgKdcclxuICAgIHRoaXMuc3RhcnQgPSArK3RoaXMuaVxyXG4gICAgdGhpcy5pID0gdGhpcy5jb250ZW50LmluZGV4T2YoYywgdGhpcy5pKVxyXG4gICAgaWYgKHRoaXMuaSA9PT0gLTEpIHJldHVyblxyXG4gICAgdGhpcy5oYW5kbGVyLm9uQXR0clZhbCh0aGlzLmNvbnRlbnQuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuaSkpXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIOayoeacieWGkuWPt+eahOWxnuaAp1xyXG4gICAgZm9yICg7IHRoaXMuaSA8IGxlbjsgdGhpcy5pKyspIHtcclxuICAgICAgaWYgKGJsYW5rQ2hhclt0aGlzLmNvbnRlbnRbdGhpcy5pXV0pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIub25BdHRyVmFsKHRoaXMuY29udGVudC5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5pKSlcclxuICAgICAgICBicmVha1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tDbG9zZSgnb25BdHRyVmFsJykpIHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuICB3aGlsZSAoYmxhbmtDaGFyW3RoaXMuY29udGVudFsrK3RoaXMuaV1dKTtcclxuICBpZiAodGhpcy5pIDwgbGVuICYmICF0aGlzLmNoZWNrQ2xvc2UoKSkge1xyXG4gICAgdGhpcy5zdGFydCA9IHRoaXMuaVxyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuYXR0ck5hbWVcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g57uT5p2f5qCH562+54q25oCBXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IOe7k+adn+eahOagh+etvuWQjVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuTGV4ZXIucHJvdG90eXBlLmVuZFRhZyA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjID0gdGhpcy5jb250ZW50W3RoaXMuaV1cclxuICBpZiAoYmxhbmtDaGFyW2NdIHx8IGMgPT09ICc+JyB8fCBjID09PSAnLycpIHtcclxuICAgIHRoaXMuaGFuZGxlci5vbkNsb3NlVGFnKHRoaXMuY29udGVudC5zdWJzdHJpbmcodGhpcy5zdGFydCwgdGhpcy5pKSlcclxuICAgIGlmIChjICE9PSAnPicpIHtcclxuICAgICAgdGhpcy5pID0gdGhpcy5jb250ZW50LmluZGV4T2YoJz4nLCB0aGlzLmkpXHJcbiAgICAgIGlmICh0aGlzLmkgPT09IC0xKSByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuc3RhcnQgPSArK3RoaXMuaVxyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMudGV4dFxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLmkrK1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!**************************************!*\
  !*** E:/pwl/static/icon/hongbao.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon/hongbao.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi9ob25nYmFvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!*************************************!*\
  !*** E:/pwl/static/icon/tupian.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon/tupian.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi90dXBpYW4ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!************************************!*\
  !*** E:/pwl/static/icon/yuyin.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon/yuyin.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi95dXlpbi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!***************************************!*\
  !*** E:/pwl/static/icon/yuyinbtn.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon/yuyinbtn.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi95dXlpbmJ0bi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!**********************************************************************!*\
  !*** E:/pwl/pages/chat/chat.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=script&lang=js&mpType=page */ 38);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBpQixDQUFnQiw2a0JBQUcsRUFBQyIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/chat/chat.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mpHtml = _interopRequireDefault(__webpack_require__(/*! ../../components/mp-html/mp-html */ 15));\nvar _permission = _interopRequireDefault(__webpack_require__(/*! ../../utils/permission.js */ 42));\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar recorderManager = uni.getRecorderManager();var innerAudioContext = uni.createInnerAudioContext();var _default = { components: { mpHtml: _mpHtml.default }, data: function data() {return { content: [], apiKey: \"\", data: {}, msg: \"\", firstMsg: null, secondMsg: null, emojeSrc: '../../static/icon/huaji1.png', redpacketData: { \"who\": [], \"info\": { \"msg\": \"试试看，这是给你的红包吗？\", \"userAvatarURL\": \"\", \"count\": 1, \"userName\": \"Yui\", \"got\": 0 } }, redpacketTitle: \"\", showRedPacketData: false, JoinChat: null, JoinChatTime: 30, scrollPower: true, isShowFace: false, face: [], isSend: false, defaultTitle: { random: \"拼手气红包\", average: \"普通红包\", specify: \"专属红包\", heartbeat: \"心跳红包\" }, clientY: -999, clientX: 0, longData: { msg: \"\", oId: \"\", userName: \"\" }, nowPage: 1, isSending: false, isHistory: false, isSendVoice: false, isShowToBottom: false, isSocketClose: false, scrollTimeout: null, setting: { JoinChatTime: 30, ImageLoadHome: \"https://pwl.yuis.cc/GetImage?url=\" }, scrollInfo: { oldTop: 99999 }, liveness: 0, voicePath: \"\", voiceTimeout: null, voiceTime: 0, isVoice: false };}, onPullDownRefresh: function onPullDownRefresh() {__f__(\"log\", \"loadPage~~\", \" at pages/chat/chat.vue:223\");clearTimeout(this.scrollTimeout);this.scrollPower = false;this.getHistoryMsg();}, onReachBottom: function onReachBottom() {this.scrollPower = true;this.isShowToBottom = false;}, onNavigationBarButtonTap: function onNavigationBarButtonTap(obj) {if (obj.type == \"menu\") {// 去设置页\n      uni.navigateTo({ url: './setting?apiKey=' + this.apiKey, animationType: 'pop-in', animationDuration: 200 });}}, onPageScroll: function onPageScroll(e) {this.clientY = -999;this.isSend = false;if (e.scrollTop < this.scrollInfo.oldTop) {this.scrollPower = false;}this.scrollInfo.oldTop = e.scrollTop;}, onLoad: function onLoad() {var _this = this;this.apiKey = getApp().globalData.apiKey || uni.getStorageSync('apiKey');this.data = getApp().globalData.data || uni.getStorageSync('userData');this.setting = uni.getStorageSync('setting') || { JoinChatTime: 30, ImageLoadHome: \"https://pwl.yuis.cc/GetImage?url=\" };if (!this.apiKey || !this.data) {uni.reLaunch({ url: '/pages/index/index' });return;}this.getPage(1);this.getFaceList();this.initChat(); // this.getUserEmotions();\n    var that = this;uni.onSocketClose(function (res) {__f__(\"log\", 'WebSocket 已关闭！', \" at pages/chat/chat.vue:269\");that.isSocketClose = true;that.JoinChat = setInterval(function () {that.JoinChatTime--;__f__(\"log\", \"\".concat(that.JoinChatTime, \"s\\u540E\\u5C1D\\u8BD5\\u91CD\\u8FDEWebSocket\"), \" at pages/chat/chat.vue:273\");if (that.JoinChatTime == 0) {that.initChat();that.JoinChatTime = that.setting.JoinChatTime || 30;}}, 1000);});recorderManager.onStop(function (res) {that.voicePath = res.tempFilePath;that.voiceTime = 0;that.isVoice = false;uni.showLoading({ title: '发送中...' });\n      (0, _api.upload)(res.tempFilePath).then(function (result) {\n        uni.hideLoading();\n        if (result.statusCode == 200) {\n          var urlList = JSON.parse(result.data);\n          urlList = urlList.data.succMap;\n          __f__(\"log\", urlList, \" at pages/chat/chat.vue:292\");\n          for (var key in urlList) {\n            that.msg = \" <audio controls> <source src=\\\"\".concat(\n            urlList[key], \"?key=userVoice\\\" type=\\\"audio/mpeg\\\"></audio>\");\n          }\n          that.isSend = true;\n        } else {\n          uni.showToast({\n            title: \"语音上传失败！\",\n            icon: \"none\" });\n\n        }\n      });\n    });\n    this.emojeSrc = \"../../static/icon/huaji\".concat(Math.ceil(Math.random() * 6), \".png\");\n    uni.onKeyboardHeightChange(function (res) {\n      if (res.height == 0) {\n        _this.isShowFace = false;\n        _this.isSend = false;\n        _this.isSendVoice = false;\n      }\n    });\n    setTimeout(function () {\n      _this.getUserLiveness();\n    }, Math.random() * 30000 + 30000);\n  },\n  methods: {\n    toVoice: function toVoice(index) {var _this2 = this;\n      if (index == 0) {\n        _permission.default.requestAndroidPermission(\"android.permission.RECORD_AUDIO\").then(function (viocePower) {\n          if (viocePower == 1) {\n            if (!_this2.isVoice) {\n              __f__(\"log\", \"录音开始\", \" at pages/chat/chat.vue:324\");\n              _this2.isVoice = true;\n              recorderManager.start();\n              _this2.voiceTimeout = setInterval(function () {\n                _this2.voiceTime = _this2.voiceTime + 1;\n                if (_this2.voiceTime > 14) {\n                  recorderManager.stop();\n                  clearInterval(_this2.voiceTimeout);\n                }\n              }, 1000);\n            }\n          } else {\n            uni.showToast({\n              title: \"没有麦克风权限\",\n              icon: \"none\" });\n\n          }\n        });\n      } else {\n        __f__(\"log\", \"录音结束\", \" at pages/chat/chat.vue:343\");\n        clearInterval(this.voiceTimeout);\n        recorderManager.stop();\n      }\n    },\n    getUserLiveness: function getUserLiveness() {var _this3 = this;\n      var liveness = uni.getStorageSync(\"liveness\");\n      if (liveness) {\n        liveness = JSON.parse(liveness);\n        if (new Date().getTime() - liveness.time < 1 * 60 * 1000) {\n          this.liveness = liveness.liveness;\n          return;\n        }\n      }\n      (0, _api.getLiveness)({\n        apiKey: this.apiKey }).\n      then(function (res) {\n        _this3.liveness = res.liveness;\n        uni.setStorageSync(\"liveness\", JSON.stringify({\n          liveness: res.liveness,\n          time: new Date().getTime() }));\n\n      });\n    },\n    deleteMessage: function deleteMessage(oId) {\n      (0, _api.deleteMsg)({\n        oId: oId,\n        apiKey: this.apiKey }).\n      then(function (res) {\n        __f__(\"log\", res, \" at pages/chat/chat.vue:372\");\n      });\n    },\n    getHistoryMsg: function getHistoryMsg() {var _this4 = this;\n      if (this.isHistory) {\n        return;\n      }\n      this.isHistory = true;\n      this.nowPage = this.nowPage + 1;\n      (0, _api.getMorePage)({\n        page: this.nowPage,\n        apiKey: this.apiKey }).\n      then(function (res) {\n        _this4.isHistory = false;\n        uni.stopPullDownRefresh();\n        if (res.code == 0) {\n          var info = res.data;\n          info.reverse();\n          info.forEach(function (msg) {\n\n\n\n\n\n            if (_this4.isJSON(msg.content)) {\n              msg.content = JSON.parse(msg.content);\n              msg.isMoney = true;\n            }\n            _this4.content.forEach(function (items) {\n              if (items.oId == msg.oId) {\n                msg.hide = true;\n              }\n            });\n          });\n          _this4.content = info.concat(_this4.content);\n        }\n      });\n    },\n    longTapEvent: function longTapEvent(index) {\n      this.clientY = -999;\n      if (index == 0) {\n        this.SendMsg(this.longData.msg);\n      } else if (index == 1) {\n        this.deleteMessage(this.longData.oId);\n      } else {\n        this.msg = \"##### \\u5F15\\u7528 @\".concat(this.longData.userName, \" \\n  > \").concat(this.longData.msg, \" \\n\\n\") + this.msg;\n        this.isSend = true;\n      }\n    },\n    longpress: function longpress(e) {\n      this.clientY = e.changedTouches[0].clientY - 50;\n      this.clientX = e.changedTouches[0].clientX - 50;\n      this.longData.msg = e.currentTarget.dataset.msg;\n      this.longData.oId = e.currentTarget.dataset.oid;\n      this.longData.userName = e.currentTarget.dataset.username;\n    },\n    atThis: function atThis(user) {var _this5 = this;\n      this.msg = \"@\".concat(user, \" :\") + this.msg;\n      setTimeout(function () {\n        _this5.isSend = true;\n      }, 100);\n    },\n    noSend: function noSend() {\n      this.isSend = false;\n      this.isShowFace = false;\n      this.isSendVoice = false;\n    },\n    onInputFocus: function onInputFocus() {\n      this.clientY = -999;\n      this.scrollPower = true;\n      this.scrollToBottom();\n    },\n    keyboardChange: function keyboardChange(e) {\n      if (e.detail.detail == 0) {\n        this.isSend = false;\n        this.isShowFace = false;\n        this.isSendVoice = false;\n      }\n    },\n    toRedPacket: function toRedPacket() {\n      uni.navigateTo({\n        url: './redpacket?apiKey=' + this.apiKey,\n        animationType: 'pop-in',\n        animationDuration: 200 });\n\n    },\n    getImage: function getImage() {\n      var that = this;\n      uni.chooseImage({\n        count: 1, //默认9\n        sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有\n        success: function success(res) {\n          uni.showLoading({\n            title: '上传中...' });\n\n          (0, _api.upload)(res.tempFilePaths[0]).then(function (result) {\n            uni.hideLoading();\n            if (result.statusCode == 200) {\n              var urlList = JSON.parse(result.data);\n              urlList = urlList.data.succMap;\n              // console.log(urlList)\n              for (var key in urlList) {\n                that.msg = that.msg + \" ![\\u56FE\\u7247\\u8868\\u60C5](\".concat(urlList[key], \")\");\n              }\n              that.isSend = true;\n            } else {\n              uni.showToast({\n                title: \"图片上传失败！\",\n                icon: \"none\" });\n\n            }\n          });\n        } });\n\n\n    },\n    getFaceList: function getFaceList() {var _this6 = this;\n      (0, _api.faceList)({\n        gameId: 'emojis',\n        apiKey: this.apiKey }).\n      then(function (res) {\n        if (res.code == 0) {\n          var list = JSON.parse(res.data);\n          list.forEach(function (item) {\n            var items = encodeURI(item);\n            items = btoa(items);\n\n\n\n\n\n\n\n            _this6.face.push({\n              url: \"\".concat(_this6.setting.ImageLoadHome + items),\n              preUrl: item });\n\n\n          });\n        } else {\n          __f__(\"log\", \"===:error:===\", \" at pages/chat/chat.vue:512\");\n          __f__(\"log\", res, \" at pages/chat/chat.vue:513\");\n        }\n      });\n    },\n    sendFace: function sendFace(url) {\n      this.msg = this.msg + \" ![\\u56FE\\u7247\\u8868\\u60C5](\".concat(url, \")\");\n      this.isShowFace = false;\n      this.isSendVoice = false;\n      this.isSend = true;\n    },\n    toggleFace: function toggleFace() {\n      this.isShowFace = !this.isShowFace;\n    },\n    toggleVoice: function toggleVoice() {\n      this.isSendVoice = !this.isSendVoice;\n    },\n    showLink: function showLink(e) {\n      var linkInfo = e;\n      // console.log(linkInfo)\n      if (linkInfo.class && linkInfo.class == \"name-at\") {\n        this.toUser(e[\"aria-label\"]);\n      }\n      if (linkInfo.target && linkInfo.target == \"_blank\") {\n\n        plus.runtime.openURL(linkInfo.href);\n\n\n\n\n      }\n    },\n    toUser: function toUser(userName) {\n      uni.navigateTo({\n        url: \"./userInfo?user=\" + userName,\n        animationType: 'pop-in',\n        animationDuration: 200 });\n\n    },\n    getPage: function getPage(page) {var _this7 = this;\n      var that = this;\n      if (page == 1) {\n        this.content = [];\n      }\n      this.scrollPower = false;\n      (0, _api.getMorePage)({\n        page: page,\n        apiKey: this.apiKey }).\n      then(function (res) {\n        if (res.code == 0) {\n          var info = res.data;\n          info.reverse();\n          info.forEach(function (msg) {\n\n\n\n\n\n            _this7.filterMsg(msg);\n          });\n          _this7.scrollPower = true;\n          _this7.scrollToBottom();\n        }\n      });\n    },\n    getMoney: function getMoney(oId) {var _this8 = this;\n      var that = this;\n      (0, _api.openRedPacket)({\n        oId: oId,\n        apiKey: that.apiKey }).\n      then(function (res) {\n        // console.log(res)\n        _this8.redpacketData = res;\n\n        var money = _this8.redpacketData.who.find(function (w) {return w.userName == _this8.data.userName;});\n\n        var specify = _this8.redpacketData.recivers && _this8.redpacketData.recivers.length && _this8.\n        redpacketData.recivers.indexOf(_this8.data.userName) >= 0;\n        var msg = \"\";\n        if (_this8.redpacketData.recivers && _this8.redpacketData.recivers.length && !specify && _this8.\n        redpacketData.recivers[0] != \"\") {\n          msg = \"会错意了\";\n        } else if (!money) {\n          msg = \"错过一个亿\";\n        } else {\n          msg =\n          money.userMoney == 0 ?\n          \"抢了个寂寞\" :\n          money.userMoney < 0 ?\n          \"被反抢了吧~\" : \"\".concat(\n          money.userMoney, \" \\u79EF\\u5206\");\n        }\n        var moneyList = _this8.redpacketData.who;\n        var max = 0;\n        var maxIndex = 0;\n        moneyList.forEach(function (item, index) {\n          if (item.userMoney >= max) {\n            max = item.userMoney;\n            maxIndex = index;\n          }\n          if (item.userMoney == 0) {\n            moneyList[index].is0 = true;\n          }\n          if (item.userMoney < 0) {\n            moneyList[index].isNeg = true;\n          }\n        });\n        if (_this8.redpacketData.info.got == _this8.redpacketData.info.count) {\n          moneyList[maxIndex].isMax = true;\n        }\n        _this8.redpacketData.who = moneyList;\n        _this8.redpacketData.msg = msg;\n        _this8.showRedPacketData = true;\n      });\n    },\n    SendMsg: function SendMsg(msg) {\n      if (this.isSending) {\n        return;\n      }\n      var that = this;\n      var content = that.msg || msg;\n      this.isShowFace = false;\n      this.isSendVoice = false;\n      this.isSending = true;\n      if (content && content.trim() == \"\") {\n        return;\n      }\n      (0, _api.send)({\n        content: content,\n        apiKey: that.apiKey }).\n      then(function (res) {\n        that.msg = \"\";\n        that.isSending = false;\n        that.scrollPower = true;\n      });\n    },\n    initChat: function initChat() {\n      var that = this;\n      var socketTask = uni.connectSocket({\n        url: _api.WS.channel,\n        success: function success(res) {\n          that.isSocketClose = false;\n          __f__(\"log\", \"WebSocket 连接成功！\", \" at pages/chat/chat.vue:654\");\n          clearInterval(that.JoinChat);\n        },\n        fail: function fail(err) {\n          __f__(\"log\", \"WebSocket 连接失败！\", \" at pages/chat/chat.vue:658\");\n        } });\n\n      socketTask.onMessage(function (res) {\n        that.wsMessage(res);\n      });\n    },\n    wsMessage: function wsMessage(res) {\n      var msg = JSON.parse(res.data);\n      switch (msg.type) {\n        case \"online\": //在线人数\n          uni.setStorageSync('users', JSON.stringify(msg.users));\n          uni.setNavigationBarTitle({\n            title: \"\\u6478\\u9C7C\\u6D3E-\\u804A\\u5929\\u5BA4(\".concat(msg.onlineChatCnt, \")\") });\n\n          break;\n        case \"revoke\": //撤回\n          for (var i = 0; i < this.content.length; i++) {\n            var c = this.content[i];\n            if (c.oId != msg.oId) continue;\n            this.content.splice(i, 1);\n            break;\n          }\n          break;\n        case \"msg\": //消息\n          if (!this.scrollPower && !this.isShowToBottom) {\n            this.isShowToBottom = true;\n          }\n\n\n\n\n\n          this.filterMsg(msg);\n          if (this.content.length > 500) {\n            this.getPage(1);\n          }\n          break;\n        case \"redPacketStatus\":\n          this.content.push(msg);\n          break;}\n\n    },\n    filterMsg: function filterMsg(msg) {\n      var that = this;\n      if (this.isJSON(msg.content)) {\n        msg.content = JSON.parse(msg.content);\n        msg.isMoney = true;\n        this.content.push(msg);\n        this.scrollToBottom();\n\n      } else if (/<img [^>]*src=['\"]([^'\"]+)[^>]*>/gi.test(msg.content)) {\n\n\n\n\n\n\n\n\n\n        this.content.push(msg);\n      } else {\n        this.content.push(msg);\n      }\n      if (!msg.isMoney) {\n        this.secondMsg = this.firstMsg;\n        this.firstMsg = msg;\n      }\n\n    },\n    isJSON: function isJSON(str) {\n      if (typeof str == 'string') {\n        try {\n          var obj = JSON.parse(str);\n          if (typeof obj == 'object' && obj) {\n            return true;\n          } else {\n            return false;\n          }\n\n        } catch (e) {\n          return false;\n        }\n      }\n    },\n    toBottom: function toBottom() {\n      this.scrollPower = true;\n      this.isShowToBottom = false;\n      this.scrollToBottom();\n    },\n    scrollToBottom: function scrollToBottom() {\n      if (this.scrollPower) {\n        var query = uni.createSelectorQuery();\n        query.select('.contentBox').boundingClientRect();\n        query.selectViewport().scrollOffset();\n        query.exec(function (res) {\n          if (res[0]) {\n            setTimeout(function () {\n              uni.pageScrollTo({\n                scrollTop: res[0].height,\n                duration: 100 });\n\n            }, 100);\n          }\n        });\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9jaGF0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SUE7QUFDQTtBQUNBLDREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLCtDQUNBLHNELGVBQ0EsRUFDQSxjQUNBLHVCQURBLEVBREEsRUFJQSxJQUpBLGtCQUlBLENBQ0EsU0FDQSxXQURBLEVBRUEsVUFGQSxFQUdBLFFBSEEsRUFJQSxPQUpBLEVBS0EsY0FMQSxFQU1BLGVBTkEsRUFPQSx3Q0FQQSxFQVFBLGlCQUNBLFNBREEsRUFFQSxVQUNBLHNCQURBLEVBRUEsbUJBRkEsRUFHQSxVQUhBLEVBSUEsaUJBSkEsRUFLQSxRQUxBLEVBRkEsRUFSQSxFQWtCQSxrQkFsQkEsRUFtQkEsd0JBbkJBLEVBb0JBLGNBcEJBLEVBcUJBLGdCQXJCQSxFQXNCQSxpQkF0QkEsRUF1QkEsaUJBdkJBLEVBd0JBLFFBeEJBLEVBeUJBLGFBekJBLEVBMEJBLGdCQUNBLGVBREEsRUFFQSxlQUZBLEVBR0EsZUFIQSxFQUlBLGlCQUpBLEVBMUJBLEVBZ0NBLGFBaENBLEVBaUNBLFVBakNBLEVBa0NBLFlBQ0EsT0FEQSxFQUVBLE9BRkEsRUFHQSxZQUhBLEVBbENBLEVBdUNBLFVBdkNBLEVBd0NBLGdCQXhDQSxFQXlDQSxnQkF6Q0EsRUEwQ0Esa0JBMUNBLEVBMkNBLHFCQTNDQSxFQTRDQSxvQkE1Q0EsRUE2Q0Es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O0FBQ0EsU0FOQTtBQU9BO0FBQ0E7QUFDQSxTQVRBOztBQVdBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0ExVkE7QUEyVkEsYUEzVkEscUJBMlZBLEdBM1ZBLEVBMlZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQS9CQTs7QUFpQ0EsS0E5WEE7QUErWEEsYUEvWEEscUJBK1hBLEdBL1hBLEVBK1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BTkEsTUFNQTs7Ozs7Ozs7OztBQVVBO0FBQ0EsT0FYQSxNQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBMVpBO0FBMlpBLFVBM1pBLGtCQTJaQSxHQTNaQSxFQTJaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBOztBQUVBLFNBUkEsQ0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBemFBO0FBMGFBLFlBMWFBLHNCQTBhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOWFBO0FBK2FBLGtCQS9hQSw0QkErYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSw2QkFGQTs7QUFJQSxhQUxBLEVBS0EsR0FMQTtBQU1BO0FBQ0EsU0FUQTtBQVVBO0FBQ0EsS0EvYkEsRUFqS0EsRSIsImZpbGUiOiIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDwhLS0gV2ViU29ja2V05pat5byA5o+Q6YaSIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJTb2NrZXRDbG9zZU1zZ1wiIHYtaWY9XCJpc1NvY2tldENsb3NlXCI+XHJcblx0XHRcdFdlYlNvY2tldOW3suaWreW8gO+8mnt7Sm9pbkNoYXRUaW1lfX1z5ZCO6YeN5paw6L+e5o6lIDx0ZXh0IGNsYXNzPVwidGV4dExpbmtcIiBAY2xpY2s9XCJpbml0Q2hhdCgpXCI+54K55Ye76YeN6L+ePC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50Qm94XCIgdi1pZj1cImNvbnRlbnQubGVuZ3RoID4gMFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1zZ0luZm9cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBjb250ZW50XCJcclxuXHRcdFx0XHQ6a2V5PVwiKGl0ZW0udHlwZSB8fCAnbXNnJykgKyAnXycgKyBpdGVtLm9JZCArIChpdGVtLndob0dvdCB8fCAnJylcIlxyXG5cdFx0XHRcdDpjbGFzcz1cIntpc1lvdSA6IChkYXRhLnVzZXJOYW1lID09IGl0ZW0udXNlck5hbWUgPyB0cnVlIDogZmFsc2UpfVwiPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS50eXBlICE9ICdyZWRQYWNrZXRTdGF0dXMnICYmICFpdGVtLmhpZGVcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiZGF0YS51c2VyTmFtZSAhPSBpdGVtLnVzZXJOYW1lXCIgOnNyYz0naXRlbS51c2VyQXZhdGFyVVJMJyBtb2RlPVwid2lkdGhGaXhcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInVzZXJBdmF0YXJcIiBAbG9uZ3ByZXNzPVwiYXRUaGlzKGl0ZW0udXNlck5hbWUpXCIgQGNsaWNrPVwidG9Vc2VyKGl0ZW0udXNlck5hbWUpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiTXNnRGV0YWlsQm94XCIgQGxvbmdwcmVzcz1cImxvbmdwcmVzc1wiIDpkYXRhLW9pZD1cIml0ZW0ub0lkXCIgOmRhdGEtbXNnPVwiaXRlbS5jb250ZW50XCJcclxuXHRcdFx0XHRcdFx0OmRhdGEtdXNlcm5hbWU9XCJpdGVtLnVzZXJOYW1lXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXNnQm94XCI+XHJcblx0XHRcdFx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJkYXRhLnVzZXJOYW1lICE9IGl0ZW0udXNlck5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlck5hbWVcIiB2LWlmPVwiaXRlbS51c2VyTmlja25hbWVcIj57e2l0ZW0udXNlck5pY2tuYW1lfX0oe3tpdGVtLnVzZXJOYW1lfX0pXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJOYW1lXCIgdi1lbHNlPnt7aXRlbS51c2VyTmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0uaXNNb25leVwiIEBjbGljaz1cImdldE1vbmV5KGl0ZW0ub0lkKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWQtcGFja2V0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnAtaGVhZGVyXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwLW1haW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9wZW5cIj7lvIA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycC1tc2dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3Pnt7aXRlbS5jb250ZW50Lm1zZ319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj57e2RlZmF1bHRUaXRsZVtpdGVtLmNvbnRlbnQudHlwZV19fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtc2dDb250ZW50XCIgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG1wLWh0bWwgQGxvYWQ9XCJzY3JvbGxUb0JvdHRvbSgpXCIgY29udGFpbmVyLXN0eWxlPVwiTWVzc2FnZUJveFwiIEByZWFkeT1cInNjcm9sbFRvQm90dG9tKClcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6Y29weS1saW5rPVwiZmFsc2VcIiA6Y29udGVudD1cIml0ZW0uY29udGVudFwiIDpzaG93LWltZy1tZW51PVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRAbGlua3RhcD1cInNob3dMaW5rXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gPHJpY2gtdGV4dCA6bm9kZXM9XCJpdGVtLmNvbnRlbnRcIiA6cHJldmlldz1cInRydWVcIiBAaXRlbWNsaWNrPVwic2hvd0xpbmtcIj48L3JpY2gtdGV4dD4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImh1bWFuTmF0dXJlXCJcclxuXHRcdFx0XHRcdFx0XHR2LWlmPVwiY29udGVudC5sZW5ndGggPiAyICYmIGZpcnN0TXNnLmNvbnRlbnQgPT0gc2Vjb25kTXNnLmNvbnRlbnQgJiYgZmlyc3RNc2cub0lkID09IGl0ZW0ub0lkICYmIGl0ZW0udXNlck5hbWUgIT0gZGF0YS51c2VyTmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwiU2VuZE1zZyhpdGVtLmNvbnRlbnQpXCI+KzE8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImRhdGEudXNlck5hbWUgPT0gaXRlbS51c2VyTmFtZVwiIDpzcmM9J2l0ZW0udXNlckF2YXRhclVSTCcgbW9kZT1cIndpZHRoRml4XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ1c2VyQXZhdGFyXCIgQGNsaWNrPVwidG9Vc2VyKGl0ZW0udXNlck5hbWUpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS50eXBlID09ICdyZWRQYWNrZXRTdGF0dXMnXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZFBhY2tldGluZm9cIj57e2l0ZW0ud2hvR290fX0g5oqi5Yiw5LqGIHt7aXRlbS53aG9HaXZlfX0g55qEIDx2aWV3IEBjbGljaz1cImdldE1vbmV5KGl0ZW0ub0lkKVwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9XCJjb2xvcjojZjk0MTUxXCI+57qi5YyFPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQoe3tpdGVtLmdvdH19L3t7aXRlbS5jb3VudH19KTwvdmlldz5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGlkPVwiQm90dG9tVmlld1wiIHN0eWxlPVwiaGVpZ2h0OiA1MHB4O1wiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5Y+R6YCB5qCPIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzZW5kQm94XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibGl2ZW5lc3NMaW5lXCIgOnN0eWxlPVwie3dpZHRoOmxpdmVuZXNzKyclJ31cIj48L3ZpZXc+XHJcblx0XHRcdDwhLS0g5L+d55WZ5Y+C5pWwIOetiXVuaWFwcOabtOaWsCAtLT5cclxuXHRcdFx0PCEtLSBjb25maXJtLXR5cGU9XCJzZW5kXCIgY29uZmlybS1ob2xkPVwidHJ1ZVwiIEBjb25maXJtPVwiU2VuZE1zZygpXCIgIC0tPlxyXG5cdFx0XHQ8dGV4dGFyZWEgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibXNnXCIgY2xhc3M9XCJjaGF0LWlucHV0XCIgOmZvY3VzPVwiaXNTZW5kXCIgQGZvY3VzPVwib25JbnB1dEZvY3VzKClcIlxyXG5cdFx0XHRcdEBibHVyPVwibm9TZW5kKClcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCIgLz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51Qm94XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uQnRuXCIgQGNsaWNrPVwidG9SZWRQYWNrZXQoKVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pY29uL2hvbmdiYW8ucG5nXCIgbW9kZT1cImhlaWdodEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbkJ0blwiIEBjbGljaz1cInRvZ2dsZUZhY2UoKVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJlbW9qZVNyY1wiIG1vZGU9XCJoZWlnaHRGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25CdG5cIiBAY2xpY2s9XCJnZXRJbWFnZSgpXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ljb24vdHVwaWFuLnBuZ1wiIG1vZGU9XCJoZWlnaHRGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25CdG5cIiBAY2xpY2s9XCJ0b2dnbGVWb2ljZSgpXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ljb24veXV5aW4ucG5nXCIgbW9kZT1cImhlaWdodEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g6KGo5oOF5YyFIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZhY2VCb3hcIiB2LXNob3c9XCJpc1Nob3dGYWNlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmYWNlLWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBmYWNlXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJmYWNlLWl0ZW1cIiA6c3JjPVwiaXRlbS51cmxcIiBtb2RlPVwiYXNwZWN0Rml0XCIgQGNsaWNrPVwic2VuZEZhY2UoaXRlbS5wcmVVcmwpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDor63pn7MgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmFjZUJveFwiIHYtc2hvdz1cImlzU2VuZFZvaWNlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2b2ljZS1idG5cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidm9pY2UtdGltZVwiPnt7dm9pY2VUaW1lfX1zPC92aWV3PlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidm9pY2UtaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb24veXV5aW5idG4ucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiXHJcblx0XHRcdFx0XHRcdEB0b3VjaHN0YXJ0PVwidG9Wb2ljZSgwKVwiIEB0b3VjaGVuZD1cInRvVm9pY2UoMSlcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgY2xhc3M9XCJzZW5kQnRuXCIgQHRvdWNoZW5kLnByZXZlbnQ9XCJTZW5kTXNnKClcIj7lj5HpgIE8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5Y+z6ZSu6I+c5Y2VIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJsb25nVGFwLWxpc3RcIiA6c3R5bGU9XCJ7dG9wOmNsaWVudFkgKyAncHgnLGxlZnQ6Y2xpZW50WCArICdweCd9XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibG9uZ1RhcC1pdGVtXCIgQGNsaWNrPVwibG9uZ1RhcEV2ZW50KDApXCI+5aSN6K+75py6PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxvbmdUYXAtaXRlbVwiIEBjbGljaz1cImxvbmdUYXBFdmVudCgxKVwiXHJcblx0XHRcdFx0di1pZj1cImRhdGEudXNlclJvbGUgPT0n57qq5b6L5aeU5ZGYJyB8fCBkYXRhLnVzZXJSb2xlID09J09QJyB8fCBkYXRhLnVzZXJSb2xlID09J+euoeeQhuWRmCdcIj7mkqTlm548L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibG9uZ1RhcC1pdGVtXCIgQGNsaWNrPVwibG9uZ1RhcEV2ZW50KDEpXCIgdi1lbHNlLWlmPVwiZGF0YS51c2VyTmFtZSA9PSBsb25nRGF0YS51c2VyTmFtZVwiPuaSpOWbnjwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb25nVGFwLWl0ZW1cIiBAY2xpY2s9XCJsb25nVGFwRXZlbnQoMilcIj7lvJXnlKg8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOe6ouWMhSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwicmVkUGFja2V0QmdcIiB2LXNob3c9XCJzaG93UmVkUGFja2V0RGF0YVwiIEBjbGljay5zdG9wPVwic2hvd1JlZFBhY2tldERhdGEgPSBmYWxzZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJlZFBhY2tldGJveFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVkUGFja2V0SW5mb1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycGktdXNlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJycGktdXNlci1pbWdcIiA6c3JjPVwicmVkcGFja2V0RGF0YS5pbmZvLnVzZXJBdmF0YXJVUkxcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdHt7cmVkcGFja2V0RGF0YS5pbmZvLnVzZXJOYW1lfX0nc+eahOe6ouWMhVxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycGktcmVjaXZlcnNcIlxyXG5cdFx0XHRcdFx0XHR2LWlmPVwicmVkcGFja2V0RGF0YS5yZWNpdmVycyAmJiByZWRwYWNrZXREYXRhLnJlY2l2ZXJzLmxlbmd0aCA+IDAgJiYgcmVkcGFja2V0RGF0YS5yZWNpdmVyc1swXSAhPSAnJ1wiPlxyXG5cdFx0XHRcdFx0XHTov5nkuKrnuqLljIXlsZ7kuo7vvJp7e3JlZHBhY2tldERhdGEucmVjaXZlcnMuam9pbihcIixcIil9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBpLXJlY2l2ZXJzXCIgdi1lbHNlPnt7cmVkcGFja2V0RGF0YS5pbmZvLm1zZ319PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycGktbXNnXCI+e3tyZWRwYWNrZXREYXRhLm1zZ319PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycGktY291bnRcIj7mgLvorqHvvJp7e3JlZHBhY2tldERhdGEuaW5mby5nb3R9fS97e3JlZHBhY2tldERhdGEuaW5mby5jb3VudH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZFBhY2tldExpc3RcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiByZWRwYWNrZXREYXRhLndob1wiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJycGwtaW1nXCIgOnNyYz1cIml0ZW0uYXZhdGFyXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwbC1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycGwtbmFtZVwiPnt7aXRlbS51c2VyTmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLXRhZyBpc01heFwiIHYtaWY9XCJpdGVtLmlzTWF4XCI+5p2l6Ieq6ICB546L55qE6K6k5Y+vPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLXRhZyBpczBcIiB2LWlmPVwiaXRlbS5pczBcIj4w5rqi5LqL5Lu2PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLXRhZyBpc05lZ1wiIHYtaWY9XCJpdGVtLmlzTmVnXCI+5oqi57qi5YyF5pyJ6aOO6ZmpPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLXRpbWVcIj57e2l0ZW0udGltZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLW1vbmV5XCI+e3tpdGVtLnVzZXJNb25leX19IOenr+WIhjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5Zue5Yiw5pyA5paw5raI5oGvIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJiYWNrVG9ib3R0b21cIiB2LWlmPVwiaXNTaG93VG9Cb3R0b21cIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7Ym90dG9tOihpc1Nob3dGYWNlIHx8IGlzU2VuZFZvaWNlKSA/ICczMDJweCcgOiAnMTAycHgnfVwiIEBjbGljaz1cInRvQm90dG9tKClcIj5cclxuXHRcdFx05p+l55yL5pyA5paw5raI5oGvXHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IG1wSHRtbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21wLWh0bWwvbXAtaHRtbCdcclxuXHRpbXBvcnQgcGVybWlzaW9uIGZyb20gXCIuLi8uLi91dGlscy9wZXJtaXNzaW9uLmpzXCJcclxuXHRpbXBvcnQge1xyXG5cdFx0dXBsb2FkLFxyXG5cdFx0Z2V0TW9yZVBhZ2UsXHJcblx0XHRvcGVuUmVkUGFja2V0LFxyXG5cdFx0V1MsXHJcblx0XHRzZW5kLFxyXG5cdFx0ZmFjZUxpc3QsXHJcblx0XHRnZXRVc2VySW5mbyxcclxuXHRcdGRlbGV0ZU1zZyxcclxuXHRcdGdldExpdmVuZXNzXHJcblx0fSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXHJcblx0Y29uc3QgcmVjb3JkZXJNYW5hZ2VyID0gdW5pLmdldFJlY29yZGVyTWFuYWdlcigpO1xyXG5cdGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gdW5pLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRtcEh0bWxcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFtdLFxyXG5cdFx0XHRcdGFwaUtleTogXCJcIixcclxuXHRcdFx0XHRkYXRhOiB7fSxcclxuXHRcdFx0XHRtc2c6IFwiXCIsXHJcblx0XHRcdFx0Zmlyc3RNc2c6IG51bGwsXHJcblx0XHRcdFx0c2Vjb25kTXNnOiBudWxsLFxyXG5cdFx0XHRcdGVtb2plU3JjOiAnLi4vLi4vc3RhdGljL2ljb24vaHVhamkxLnBuZycsXHJcblx0XHRcdFx0cmVkcGFja2V0RGF0YToge1xyXG5cdFx0XHRcdFx0XCJ3aG9cIjogW10sXHJcblx0XHRcdFx0XHRcImluZm9cIjoge1xyXG5cdFx0XHRcdFx0XHRcIm1zZ1wiOiBcIuivleivleeci++8jOi/meaYr+e7meS9oOeahOe6ouWMheWQl++8n1wiLFxyXG5cdFx0XHRcdFx0XHRcInVzZXJBdmF0YXJVUkxcIjogXCJcIixcclxuXHRcdFx0XHRcdFx0XCJjb3VudFwiOiAxLFxyXG5cdFx0XHRcdFx0XHRcInVzZXJOYW1lXCI6IFwiWXVpXCIsXHJcblx0XHRcdFx0XHRcdFwiZ290XCI6IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHJlZHBhY2tldFRpdGxlOiBcIlwiLFxyXG5cdFx0XHRcdHNob3dSZWRQYWNrZXREYXRhOiBmYWxzZSxcclxuXHRcdFx0XHRKb2luQ2hhdDogbnVsbCxcclxuXHRcdFx0XHRKb2luQ2hhdFRpbWU6IDMwLFxyXG5cdFx0XHRcdHNjcm9sbFBvd2VyOiB0cnVlLFxyXG5cdFx0XHRcdGlzU2hvd0ZhY2U6IGZhbHNlLFxyXG5cdFx0XHRcdGZhY2U6IFtdLFxyXG5cdFx0XHRcdGlzU2VuZDogZmFsc2UsXHJcblx0XHRcdFx0ZGVmYXVsdFRpdGxlOiB7XHJcblx0XHRcdFx0XHRyYW5kb206IFwi5ou85omL5rCU57qi5YyFXCIsXHJcblx0XHRcdFx0XHRhdmVyYWdlOiBcIuaZrumAmue6ouWMhVwiLFxyXG5cdFx0XHRcdFx0c3BlY2lmeTogXCLkuJPlsZ7nuqLljIVcIixcclxuXHRcdFx0XHRcdGhlYXJ0YmVhdDogXCLlv4Pot7PnuqLljIVcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y2xpZW50WTogLTk5OSxcclxuXHRcdFx0XHRjbGllbnRYOiAwLFxyXG5cdFx0XHRcdGxvbmdEYXRhOiB7XHJcblx0XHRcdFx0XHRtc2c6IFwiXCIsXHJcblx0XHRcdFx0XHRvSWQ6IFwiXCIsXHJcblx0XHRcdFx0XHR1c2VyTmFtZTogXCJcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG5vd1BhZ2U6IDEsXHJcblx0XHRcdFx0aXNTZW5kaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRpc0hpc3Rvcnk6IGZhbHNlLFxyXG5cdFx0XHRcdGlzU2VuZFZvaWNlOiBmYWxzZSxcclxuXHRcdFx0XHRpc1Nob3dUb0JvdHRvbTogZmFsc2UsXHJcblx0XHRcdFx0aXNTb2NrZXRDbG9zZTogZmFsc2UsXHJcblx0XHRcdFx0c2Nyb2xsVGltZW91dDogbnVsbCxcclxuXHRcdFx0XHRzZXR0aW5nOiB7XHJcblx0XHRcdFx0XHRKb2luQ2hhdFRpbWU6IDMwLFxyXG5cdFx0XHRcdFx0SW1hZ2VMb2FkSG9tZTogXCJodHRwczovL3B3bC55dWlzLmNjL0dldEltYWdlP3VybD1cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2Nyb2xsSW5mbzoge1xyXG5cdFx0XHRcdFx0b2xkVG9wOiA5OTk5OVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bGl2ZW5lc3M6IDAsXHJcblx0XHRcdFx0dm9pY2VQYXRoOiBcIlwiLFxyXG5cdFx0XHRcdHZvaWNlVGltZW91dDogbnVsbCxcclxuXHRcdFx0XHR2b2ljZVRpbWU6IDAsXHJcblx0XHRcdFx0aXNWb2ljZTogZmFsc2UsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJsb2FkUGFnZX5+XCIpXHJcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVvdXQpO1xyXG5cdFx0XHR0aGlzLnNjcm9sbFBvd2VyID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZ2V0SGlzdG9yeU1zZygpXHJcblx0XHR9LFxyXG5cdFx0b25SZWFjaEJvdHRvbSgpIHtcclxuXHRcdFx0dGhpcy5zY3JvbGxQb3dlciA9IHRydWU7XHJcblx0XHRcdHRoaXMuaXNTaG93VG9Cb3R0b20gPSBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAob2JqKSB7XHJcblx0XHRcdGlmIChvYmoudHlwZSA9PSBcIm1lbnVcIikge1xyXG5cdFx0XHRcdC8vIOWOu+iuvue9rumhtVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4vc2V0dGluZz9hcGlLZXk9JyArIHRoaXMuYXBpS2V5LFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogJ3BvcC1pbicsXHJcblx0XHRcdFx0XHRhbmltYXRpb25EdXJhdGlvbjogMjAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUGFnZVNjcm9sbChlKSB7XHJcblx0XHRcdHRoaXMuY2xpZW50WSA9IC05OTk7XHJcblx0XHRcdHRoaXMuaXNTZW5kID0gZmFsc2U7XHJcblx0XHRcdGlmIChlLnNjcm9sbFRvcCA8IHRoaXMuc2Nyb2xsSW5mby5vbGRUb3ApIHtcclxuXHRcdFx0XHR0aGlzLnNjcm9sbFBvd2VyID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY3JvbGxJbmZvLm9sZFRvcCA9IGUuc2Nyb2xsVG9wO1xyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5hcGlLZXkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhLmFwaUtleSB8fCB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2FwaUtleScpO1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBnZXRBcHAoKS5nbG9iYWxEYXRhLmRhdGEgfHwgdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyRGF0YScpO1xyXG5cdFx0XHR0aGlzLnNldHRpbmcgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3NldHRpbmcnKSB8fCB7XHJcblx0XHRcdFx0Sm9pbkNoYXRUaW1lOiAzMCxcclxuXHRcdFx0XHRJbWFnZUxvYWRIb21lOiBcImh0dHBzOi8vcHdsLnl1aXMuY2MvR2V0SW1hZ2U/dXJsPVwiXHJcblx0XHRcdH07XHJcblx0XHRcdGlmICghdGhpcy5hcGlLZXkgfHwgIXRoaXMuZGF0YSkge1xyXG5cdFx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5nZXRQYWdlKDEpO1xyXG5cdFx0XHR0aGlzLmdldEZhY2VMaXN0KCk7XHJcblx0XHRcdHRoaXMuaW5pdENoYXQoKTtcclxuXHRcdFx0Ly8gdGhpcy5nZXRVc2VyRW1vdGlvbnMoKTtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR1bmkub25Tb2NrZXRDbG9zZShmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnV2ViU29ja2V0IOW3suWFs+mXre+8gScpO1xyXG5cdFx0XHRcdHRoYXQuaXNTb2NrZXRDbG9zZSA9IHRydWU7XHJcblx0XHRcdFx0dGhhdC5Kb2luQ2hhdCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoYXQuSm9pbkNoYXRUaW1lLS07XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgJHt0aGF0LkpvaW5DaGF0VGltZX1z5ZCO5bCd6K+V6YeN6L+eV2ViU29ja2V0YCk7XHJcblx0XHRcdFx0XHRpZiAodGhhdC5Kb2luQ2hhdFRpbWUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmluaXRDaGF0KClcclxuXHRcdFx0XHRcdFx0dGhhdC5Kb2luQ2hhdFRpbWUgPSB0aGF0LnNldHRpbmcuSm9pbkNoYXRUaW1lIHx8IDMwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZWNvcmRlck1hbmFnZXIub25TdG9wKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdHRoYXQudm9pY2VQYXRoID0gcmVzLnRlbXBGaWxlUGF0aDtcclxuXHRcdFx0XHR0aGF0LnZvaWNlVGltZSA9IDA7XHJcblx0XHRcdFx0dGhhdC5pc1ZvaWNlID0gZmFsc2U7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5Y+R6YCB5LitLi4uJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dXBsb2FkKHJlcy50ZW1wRmlsZVBhdGgpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRpZiAocmVzdWx0LnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdGxldCB1cmxMaXN0ID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XHJcblx0XHRcdFx0XHRcdHVybExpc3QgPSB1cmxMaXN0LmRhdGEuc3VjY01hcDtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codXJsTGlzdClcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQga2V5IGluIHVybExpc3QpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0Lm1zZyA9XHJcblx0XHRcdFx0XHRcdFx0XHRgIDxhdWRpbyBjb250cm9scz4gPHNvdXJjZSBzcmM9XCIke3VybExpc3Rba2V5XX0/a2V5PXVzZXJWb2ljZVwiIHR5cGU9XCJhdWRpby9tcGVnXCI+PC9hdWRpbz5gXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5pc1NlbmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+t6Z+z5LiK5Lyg5aSx6LSl77yBXCIsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5lbW9qZVNyYyA9IGAuLi8uLi9zdGF0aWMvaWNvbi9odWFqaSR7TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqNil9LnBuZ2BcclxuXHRcdFx0dW5pLm9uS2V5Ym9hcmRIZWlnaHRDaGFuZ2UocmVzID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmhlaWdodCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzU2hvd0ZhY2UgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuaXNTZW5kID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmlzU2VuZFZvaWNlID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmdldFVzZXJMaXZlbmVzcygpO1xyXG5cdFx0XHR9LCBNYXRoLnJhbmRvbSgpICogMzAwMDAgKyAzMDAwMClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHRvVm9pY2UoaW5kZXgpIHtcclxuXHRcdFx0XHRpZiAoaW5kZXggPT0gMCkge1xyXG5cdFx0XHRcdFx0cGVybWlzaW9uLnJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihcImFuZHJvaWQucGVybWlzc2lvbi5SRUNPUkRfQVVESU9cIikudGhlbih2aW9jZVBvd2VyPT57XHJcblx0XHRcdFx0XHRcdGlmICh2aW9jZVBvd2VyID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMuaXNWb2ljZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlvZXpn7PlvIDlp4tcIilcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaXNWb2ljZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRyZWNvcmRlck1hbmFnZXIuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudm9pY2VUaW1lb3V0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnZvaWNlVGltZSA9IHRoaXMudm9pY2VUaW1lICsgMTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudm9pY2VUaW1lID4gMTQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWNvcmRlck1hbmFnZXIuc3RvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy52b2ljZVRpbWVvdXQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5rKh5pyJ6bqm5YWL6aOO5p2D6ZmQXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5b2V6Z+z57uT5p2fXCIpXHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMudm9pY2VUaW1lb3V0KVxyXG5cdFx0XHRcdFx0cmVjb3JkZXJNYW5hZ2VyLnN0b3AoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFVzZXJMaXZlbmVzcygpIHtcclxuXHRcdFx0XHRsZXQgbGl2ZW5lc3MgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJsaXZlbmVzc1wiKTtcclxuXHRcdFx0XHRpZiAobGl2ZW5lc3MpIHtcclxuXHRcdFx0XHRcdGxpdmVuZXNzID0gSlNPTi5wYXJzZShsaXZlbmVzcylcclxuXHRcdFx0XHRcdGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxpdmVuZXNzLnRpbWUgPCAxICogNjAgKiAxMDAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubGl2ZW5lc3MgPSBsaXZlbmVzcy5saXZlbmVzcztcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnZXRMaXZlbmVzcyh7XHJcblx0XHRcdFx0XHRhcGlLZXk6IHRoaXMuYXBpS2V5XHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5saXZlbmVzcyA9IHJlcy5saXZlbmVzcztcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImxpdmVuZXNzXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcdFx0bGl2ZW5lc3M6IHJlcy5saXZlbmVzcyxcclxuXHRcdFx0XHRcdFx0dGltZTogbmV3IERhdGUoKS5nZXRUaW1lKClcclxuXHRcdFx0XHRcdH0pKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGRlbGV0ZU1lc3NhZ2Uob0lkKSB7XHJcblx0XHRcdFx0ZGVsZXRlTXNnKHtcclxuXHRcdFx0XHRcdG9JZDogb0lkLFxyXG5cdFx0XHRcdFx0YXBpS2V5OiB0aGlzLmFwaUtleVxyXG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRIaXN0b3J5TXNnKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzSGlzdG9yeSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmlzSGlzdG9yeSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5ub3dQYWdlID0gdGhpcy5ub3dQYWdlICsgMTtcclxuXHRcdFx0XHRnZXRNb3JlUGFnZSh7XHJcblx0XHRcdFx0XHRwYWdlOiB0aGlzLm5vd1BhZ2UsXHJcblx0XHRcdFx0XHRhcGlLZXk6IHRoaXMuYXBpS2V5XHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5pc0hpc3RvcnkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdGxldCBpbmZvID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdGluZm8ucmV2ZXJzZSgpO1xyXG5cdFx0XHRcdFx0XHRpbmZvLmZvckVhY2gobXNnID0+IHtcclxuXHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHRcdFx0XHRsZXQgdXNlckF2YXRhciA9IGVuY29kZVVSSShtc2cudXNlckF2YXRhclVSTClcclxuXHRcdFx0XHRcdFx0XHR1c2VyQXZhdGFyID0gYnRvYSh1c2VyQXZhdGFyKTtcclxuXHRcdFx0XHRcdFx0XHRtc2cudXNlckF2YXRhclVSTCA9IGAke3RoaXMuc2V0dGluZy5JbWFnZUxvYWRIb21lK3VzZXJBdmF0YXJ9YFxyXG5cdFx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzSlNPTihtc2cuY29udGVudCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1zZy5jb250ZW50ID0gSlNPTi5wYXJzZShtc2cuY29udGVudClcclxuXHRcdFx0XHRcdFx0XHRcdG1zZy5pc01vbmV5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb250ZW50LmZvckVhY2goaXRlbXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGl0ZW1zLm9JZCA9PSBtc2cub0lkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1zZy5oaWRlID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoaXMuY29udGVudCA9IGluZm8uY29uY2F0KHRoaXMuY29udGVudClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb25nVGFwRXZlbnQoaW5kZXgpIHtcclxuXHRcdFx0XHR0aGlzLmNsaWVudFkgPSAtOTk5O1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLlNlbmRNc2codGhpcy5sb25nRGF0YS5tc2cpXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRlbGV0ZU1lc3NhZ2UodGhpcy5sb25nRGF0YS5vSWQpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubXNnID0gYCMjIyMjIOW8leeUqCBAJHt0aGlzLmxvbmdEYXRhLnVzZXJOYW1lfSBcXG4gID4gJHt0aGlzLmxvbmdEYXRhLm1zZ30gXFxuXFxuYCArIHRoaXMubXNnO1xyXG5cdFx0XHRcdFx0dGhpcy5pc1NlbmQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0bG9uZ3ByZXNzKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNsaWVudFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSA1MDtcclxuXHRcdFx0XHR0aGlzLmNsaWVudFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSA1MDtcclxuXHRcdFx0XHR0aGlzLmxvbmdEYXRhLm1zZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm1zZztcclxuXHRcdFx0XHR0aGlzLmxvbmdEYXRhLm9JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm9pZDtcclxuXHRcdFx0XHR0aGlzLmxvbmdEYXRhLnVzZXJOYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXNlcm5hbWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGF0VGhpcyh1c2VyKSB7XHJcblx0XHRcdFx0dGhpcy5tc2cgPSBgQCR7dXNlcn0gOmAgKyB0aGlzLm1zZztcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaXNTZW5kID0gdHJ1ZTtcclxuXHRcdFx0XHR9LCAxMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdG5vU2VuZCgpIHtcclxuXHRcdFx0XHR0aGlzLmlzU2VuZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuaXNTaG93RmFjZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuaXNTZW5kVm9pY2UgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25JbnB1dEZvY3VzKCkge1xyXG5cdFx0XHRcdHRoaXMuY2xpZW50WSA9IC05OTk7XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxQb3dlciA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdGtleWJvYXJkQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRpZiAoZS5kZXRhaWwuZGV0YWlsID09IDApIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNTZW5kID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmlzU2hvd0ZhY2UgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuaXNTZW5kVm9pY2UgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvUmVkUGFja2V0KCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4vcmVkcGFja2V0P2FwaUtleT0nICsgdGhpcy5hcGlLZXksXHJcblx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiAncG9wLWluJyxcclxuXHRcdFx0XHRcdGFuaW1hdGlvbkR1cmF0aW9uOiAyMDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRJbWFnZSgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dW5pLmNob29zZUltYWdlKHtcclxuXHRcdFx0XHRcdGNvdW50OiAxLCAvL+m7mOiupDlcclxuXHRcdFx0XHRcdHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXSwgLy/lj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5LiK5Lyg5LitLi4uJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR1cGxvYWQocmVzLnRlbXBGaWxlUGF0aHNbMF0pLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCB1cmxMaXN0ID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxMaXN0ID0gdXJsTGlzdC5kYXRhLnN1Y2NNYXA7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh1cmxMaXN0KVxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQga2V5IGluIHVybExpc3QpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5tc2cgPSB0aGF0Lm1zZyArIGAgIVvlm77niYfooajmg4VdKCR7dXJsTGlzdFtrZXldfSlgXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmlzU2VuZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLlm77niYfkuIrkvKDlpLHotKXvvIFcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0RmFjZUxpc3QoKSB7XHJcblx0XHRcdFx0ZmFjZUxpc3Qoe1xyXG5cdFx0XHRcdFx0Z2FtZUlkOiAnZW1vamlzJyxcclxuXHRcdFx0XHRcdGFwaUtleTogdGhpcy5hcGlLZXlcclxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgbGlzdCA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRsaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGl0ZW1zID0gZW5jb2RlVVJJKGl0ZW0pXHJcblx0XHRcdFx0XHRcdFx0aXRlbXMgPSBidG9hKGl0ZW1zKTtcclxuXHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZhY2UucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6IGAke3RoaXMuc2V0dGluZy5JbWFnZUxvYWRIb21lK2l0ZW1zfWAsXHJcblx0XHRcdFx0XHRcdFx0XHRwcmVVcmw6IGl0ZW1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZmFjZS5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogYCR7dGhpcy5zZXR0aW5nLkltYWdlTG9hZEhvbWUraXRlbXN9YCxcclxuXHRcdFx0XHRcdFx0XHRcdHByZVVybDogaXRlbVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIj09PTplcnJvcjo9PT1cIilcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbmRGYWNlKHVybCkge1xyXG5cdFx0XHRcdHRoaXMubXNnID0gdGhpcy5tc2cgKyBgICFb5Zu+54mH6KGo5oOFXSgke3VybH0pYDtcclxuXHRcdFx0XHR0aGlzLmlzU2hvd0ZhY2UgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmlzU2VuZFZvaWNlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5pc1NlbmQgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b2dnbGVGYWNlKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNTaG93RmFjZSA9ICF0aGlzLmlzU2hvd0ZhY2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvZ2dsZVZvaWNlKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNTZW5kVm9pY2UgPSAhdGhpcy5pc1NlbmRWb2ljZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0xpbmsoZSkge1xyXG5cdFx0XHRcdGxldCBsaW5rSW5mbyA9IGU7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cobGlua0luZm8pXHJcblx0XHRcdFx0aWYgKGxpbmtJbmZvLmNsYXNzICYmIGxpbmtJbmZvLmNsYXNzID09IFwibmFtZS1hdFwiKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvVXNlcihlW1wiYXJpYS1sYWJlbFwiXSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGxpbmtJbmZvLnRhcmdldCAmJiBsaW5rSW5mby50YXJnZXQgPT0gXCJfYmxhbmtcIikge1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTIFxyXG5cdFx0XHRcdFx0cGx1cy5ydW50aW1lLm9wZW5VUkwobGlua0luZm8uaHJlZik7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdFx0d2luZG93Lm9wZW4obGlua0luZm8uaHJlZilcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9Vc2VyKHVzZXJOYW1lKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi4vdXNlckluZm8/dXNlcj1cIiArIHVzZXJOYW1lLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogJ3BvcC1pbicsXHJcblx0XHRcdFx0XHRhbmltYXRpb25EdXJhdGlvbjogMjAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0UGFnZShwYWdlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmIChwYWdlID09IDEpIHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudCA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNjcm9sbFBvd2VyID0gZmFsc2U7XHJcblx0XHRcdFx0Z2V0TW9yZVBhZ2Uoe1xyXG5cdFx0XHRcdFx0cGFnZTogcGFnZSxcclxuXHRcdFx0XHRcdGFwaUtleTogdGhpcy5hcGlLZXlcclxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgaW5mbyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRpbmZvLnJldmVyc2UoKTtcclxuXHRcdFx0XHRcdFx0aW5mby5mb3JFYWNoKG1zZyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0XHRcdFx0bGV0IHVzZXJBdmF0YXIgPSBlbmNvZGVVUkkobXNnLnVzZXJBdmF0YXJVUkwpXHJcblx0XHRcdFx0XHRcdFx0dXNlckF2YXRhciA9IGJ0b2EodXNlckF2YXRhcik7XHJcblx0XHRcdFx0XHRcdFx0bXNnLnVzZXJBdmF0YXJVUkwgPSBgJHt0aGlzLnNldHRpbmcuSW1hZ2VMb2FkSG9tZSt1c2VyQXZhdGFyfWBcclxuXHRcdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZpbHRlck1zZyhtc2cpXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoaXMuc2Nyb2xsUG93ZXIgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRNb25leShvSWQpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0b3BlblJlZFBhY2tldCh7XHJcblx0XHRcdFx0XHRvSWQ6IG9JZCxcclxuXHRcdFx0XHRcdGFwaUtleTogdGhhdC5hcGlLZXlcclxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHR0aGlzLnJlZHBhY2tldERhdGEgPSByZXM7XHJcblxyXG5cdFx0XHRcdFx0bGV0IG1vbmV5ID0gdGhpcy5yZWRwYWNrZXREYXRhLndoby5maW5kKHcgPT4gdy51c2VyTmFtZSA9PSB0aGlzLmRhdGEudXNlck5hbWUpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBzcGVjaWZ5ID0gKHRoaXMucmVkcGFja2V0RGF0YS5yZWNpdmVycyAmJiB0aGlzLnJlZHBhY2tldERhdGEucmVjaXZlcnMubGVuZ3RoICYmIHRoaXNcclxuXHRcdFx0XHRcdFx0LnJlZHBhY2tldERhdGEucmVjaXZlcnMuaW5kZXhPZih0aGlzLmRhdGEudXNlck5hbWUpID49IDApXHJcblx0XHRcdFx0XHRsZXQgbXNnID0gXCJcIjtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnJlZHBhY2tldERhdGEucmVjaXZlcnMgJiYgdGhpcy5yZWRwYWNrZXREYXRhLnJlY2l2ZXJzLmxlbmd0aCAmJiAhc3BlY2lmeSAmJiB0aGlzXHJcblx0XHRcdFx0XHRcdC5yZWRwYWNrZXREYXRhLnJlY2l2ZXJzWzBdICE9IFwiXCIpIHtcclxuXHRcdFx0XHRcdFx0bXNnID0gXCLkvJrplJnmhI/kuoZcIlxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICghbW9uZXkpIHtcclxuXHRcdFx0XHRcdFx0bXNnID0gXCLplJnov4fkuIDkuKrkur9cIjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1zZyA9XHJcblx0XHRcdFx0XHRcdFx0bW9uZXkudXNlck1vbmV5ID09IDAgP1xyXG5cdFx0XHRcdFx0XHRcdFwi5oqi5LqG5Liq5a+C5a+eXCIgOlxyXG5cdFx0XHRcdFx0XHRcdG1vbmV5LnVzZXJNb25leSA8IDAgP1xyXG5cdFx0XHRcdFx0XHRcdFwi6KKr5Y+N5oqi5LqG5ZCnflwiIDpcclxuXHRcdFx0XHRcdFx0XHRgJHttb25leS51c2VyTW9uZXl9IOenr+WIhmA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsZXQgbW9uZXlMaXN0ID0gdGhpcy5yZWRwYWNrZXREYXRhLndobztcclxuXHRcdFx0XHRcdGxldCBtYXggPSAwO1xyXG5cdFx0XHRcdFx0bGV0IG1heEluZGV4ID0gMDtcclxuXHRcdFx0XHRcdG1vbmV5TGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbS51c2VyTW9uZXkgPj0gbWF4KSB7XHJcblx0XHRcdFx0XHRcdFx0bWF4ID0gaXRlbS51c2VyTW9uZXk7XHJcblx0XHRcdFx0XHRcdFx0bWF4SW5kZXggPSBpbmRleDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbS51c2VyTW9uZXkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdG1vbmV5TGlzdFtpbmRleF0uaXMwID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbS51c2VyTW9uZXkgPCAwKSB7XHJcblx0XHRcdFx0XHRcdFx0bW9uZXlMaXN0W2luZGV4XS5pc05lZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRpZiAodGhpcy5yZWRwYWNrZXREYXRhLmluZm8uZ290ID09IHRoaXMucmVkcGFja2V0RGF0YS5pbmZvLmNvdW50KSB7XHJcblx0XHRcdFx0XHRcdG1vbmV5TGlzdFttYXhJbmRleF0uaXNNYXggPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5yZWRwYWNrZXREYXRhLndobyA9IG1vbmV5TGlzdDtcclxuXHRcdFx0XHRcdHRoaXMucmVkcGFja2V0RGF0YS5tc2cgPSBtc2c7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dSZWRQYWNrZXREYXRhID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRTZW5kTXNnKG1zZykge1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzU2VuZGluZykge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IGNvbnRlbnQgPSB0aGF0Lm1zZyB8fCBtc2c7XHJcblx0XHRcdFx0dGhpcy5pc1Nob3dGYWNlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5pc1NlbmRWb2ljZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuaXNTZW5kaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoY29udGVudCAmJiBjb250ZW50LnRyaW0oKSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNlbmQoe1xyXG5cdFx0XHRcdFx0Y29udGVudDogY29udGVudCxcclxuXHRcdFx0XHRcdGFwaUtleTogdGhhdC5hcGlLZXlcclxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHR0aGF0Lm1zZyA9IFwiXCI7XHJcblx0XHRcdFx0XHR0aGF0LmlzU2VuZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhhdC5zY3JvbGxQb3dlciA9IHRydWU7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdENoYXQoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBzb2NrZXRUYXNrID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xyXG5cdFx0XHRcdFx0dXJsOiBXUy5jaGFubmVsLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmlzU29ja2V0Q2xvc2UgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJXZWJTb2NrZXQg6L+e5o6l5oiQ5Yqf77yBXCIpXHJcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhhdC5Kb2luQ2hhdCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIldlYlNvY2tldCDov57mjqXlpLHotKXvvIFcIilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzb2NrZXRUYXNrLm9uTWVzc2FnZShmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdHRoYXQud3NNZXNzYWdlKHJlcylcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3c01lc3NhZ2UocmVzKSB7XHJcblx0XHRcdFx0bGV0IG1zZyA9IEpTT04ucGFyc2UocmVzLmRhdGEpXHJcblx0XHRcdFx0c3dpdGNoIChtc2cudHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSBcIm9ubGluZVwiOiAvL+WcqOe6v+S6uuaVsFxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJzJywgSlNPTi5zdHJpbmdpZnkobXNnLnVzZXJzKSlcclxuXHRcdFx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGDmkbjpsbzmtL4t6IGK5aSp5a6kKCR7bXNnLm9ubGluZUNoYXRDbnR9KWBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwicmV2b2tlXCI6IC8v5pKk5ZueXHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGMgPSB0aGlzLmNvbnRlbnRbaV07XHJcblx0XHRcdFx0XHRcdFx0aWYgKGMub0lkICE9IG1zZy5vSWQpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY29udGVudC5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwibXNnXCI6IC8v5raI5oGvXHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5zY3JvbGxQb3dlciAmJiAhdGhpcy5pc1Nob3dUb0JvdHRvbSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaXNTaG93VG9Cb3R0b20gPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdFx0XHRsZXQgdXNlckF2YXRhciA9IGVuY29kZVVSSShtc2cudXNlckF2YXRhclVSTClcclxuXHRcdFx0XHRcdFx0dXNlckF2YXRhciA9IGJ0b2EodXNlckF2YXRhcik7XHJcblx0XHRcdFx0XHRcdG1zZy51c2VyQXZhdGFyVVJMID0gYCR7dGhpcy5zZXR0aW5nLkltYWdlTG9hZEhvbWUrdXNlckF2YXRhcn1gXHJcblx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHR0aGlzLmZpbHRlck1zZyhtc2cpXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmNvbnRlbnQubGVuZ3RoID4gNTAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRQYWdlKDEpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwicmVkUGFja2V0U3RhdHVzXCI6XHJcblx0XHRcdFx0XHRcdHRoaXMuY29udGVudC5wdXNoKG1zZyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZmlsdGVyTXNnKG1zZykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRpZiAodGhpcy5pc0pTT04obXNnLmNvbnRlbnQpKSB7XHJcblx0XHRcdFx0XHRtc2cuY29udGVudCA9IEpTT04ucGFyc2UobXNnLmNvbnRlbnQpXHJcblx0XHRcdFx0XHRtc2cuaXNNb25leSA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQucHVzaChtc2cpXHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKClcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICgvPGltZyBbXj5dKnNyYz1bJ1wiXShbXidcIl0rKVtePl0qPi9naS50ZXN0KG1zZy5jb250ZW50KSkge1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0XHRsZXQgbmV3U3JjTGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0bXNnLmNvbnRlbnQgPSBtc2cuY29udGVudC5yZXBsYWNlKC88aW1nIFtePl0qc3JjPVsnXCJdKFteJ1wiXSspW14+XSo+L2dpLCBmdW5jdGlvbihtYXRjaCwgY2FwdHVyZSkge1xyXG5cdFx0XHRcdFx0XHRsZXQgdXJsID0gZW5jb2RlVVJJKGNhcHR1cmUpO1xyXG5cdFx0XHRcdFx0XHR1cmwgPSBidG9hKHVybCk7XHJcblx0XHRcdFx0XHRcdGxldCBpbWdVcmwgPSBgJHsgdGhhdC5zZXR0aW5nLkltYWdlTG9hZEhvbWUgKyB1cmx9YDtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGA8aW1nIHNyYz1cIiR7aW1nVXJsfVwiIGFsdD1cIuWbvueJh+ihqOaDhVwiIC8+YFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudC5wdXNoKG1zZylcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50LnB1c2gobXNnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIW1zZy5pc01vbmV5KSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlY29uZE1zZyA9IHRoaXMuZmlyc3RNc2c7XHJcblx0XHRcdFx0XHR0aGlzLmZpcnN0TXNnID0gbXNnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGlzSlNPTihzdHIpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHN0ciA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0dmFyIG9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgb2JqKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0JvdHRvbSgpIHtcclxuXHRcdFx0XHR0aGlzLnNjcm9sbFBvd2VyID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmlzU2hvd1RvQm90dG9tID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzY3JvbGxUb0JvdHRvbSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5zY3JvbGxQb3dlcikge1xyXG5cdFx0XHRcdFx0bGV0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxyXG5cdFx0XHRcdFx0cXVlcnkuc2VsZWN0KCcuY29udGVudEJveCcpLmJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblx0XHRcdFx0XHRxdWVyeS5zZWxlY3RWaWV3cG9ydCgpLnNjcm9sbE9mZnNldCgpXHJcblx0XHRcdFx0XHRxdWVyeS5leGVjKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNbMF0pIHtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5wYWdlU2Nyb2xsVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUb3A6IHJlc1swXS5oZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDBcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fSwgMTAwKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzYjNlNDM7XHJcblx0fVxyXG5cclxuXHQudXNlckF2YXRhciB7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5tc2dJbmZvIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5tc2dJbmZvLmlzWW91IHtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0fVxyXG5cclxuXHQuTXNnRGV0YWlsQm94IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0fVxyXG5cclxuXHQuY29udGVudEJveCB7XHJcblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMTVweCAxMHB4IDgwcHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0Lm1zZ0JveCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuaXNZb3UgLm1zZ0JveCB7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0fVxyXG5cclxuXHQuaXNZb3UgLnVzZXJBdmF0YXIge1xyXG5cdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0fVxyXG5cclxuXHQudXNlck5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQubXNnQ29udGVudCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtaW4td2lkdGg6IDEwcHg7XHJcblx0XHRtYXgtd2lkdGg6IDYwdnc7XHJcblx0XHRtaW4taGVpZ2h0OiAxNXB4O1xyXG5cdFx0bWFyZ2luOiA1cHggMDtcclxuXHRcdHBhZGRpbmc6IDhweCAxMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0fVxyXG5cclxuXHQubXNnQ29udGVudDo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAtMTBweDtcclxuXHRcdHRvcDogNXB4O1xyXG5cdFx0d2lkdGg6IDA7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZmZmO1xyXG5cdFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcblx0XHRib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuXHRcdGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuXHR9XHJcblxyXG5cdC5pc1lvdSAubXNnQ29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjOWVlYTZhO1xyXG5cdH1cclxuXHJcblx0LmlzWW91IC5tc2dDb250ZW50OjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAtMTBweDtcclxuXHRcdGxlZnQ6IGF1dG87XHJcblx0XHR0b3A6IDVweDtcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuXHRcdGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcblx0XHRib3JkZXItbGVmdDogNXB4IHNvbGlkICM5ZWVhNmE7XHJcblx0fVxyXG5cclxuXHQubXNnQ29udGVudCBwIHtcclxuXHRcdG1pbi13aWR0aDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5zZW5kQm94IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR6LWluZGV4OiAxMDAwO1xyXG5cdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0bWluLWhlaWdodDogMTAwcHg7XHJcblx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdC5saXZlbmVzc0xpbmUge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtMXB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0aGVpZ2h0OiAycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiByZWQ7XHJcblx0fVxyXG5cclxuXHQubWVudUJveCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0aGVpZ2h0OiA0MnB4O1xyXG5cdFx0cGFkZGluZzogNXB4IDA7XHJcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI0Y4RjhGODtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQuc2VuZEJ0biB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDogNXZ3O1xyXG5cdFx0dG9wOiAxMHB4O1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM2MGIwNDQ7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC5pY29uQnRuIHtcclxuXHRcdG1hcmdpbjogMCA1cHg7XHJcblx0fVxyXG5cclxuXHQuaWNvbkJ0biBpbWFnZSB7XHJcblx0XHRoZWlnaHQ6IDMycHg7XHJcblx0fVxyXG5cclxuXHQuY2hhdC1pbnB1dCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gNDJweCk7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogNjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHR9XHJcblxyXG5cdC5yZWQtcGFja2V0IHtcclxuXHRcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0aGVpZ2h0OiAyMDBweDtcclxuXHRcdG1hcmdpbjogMTBweCBhdXRvIDA7XHJcblx0XHR3aWR0aDogMTYwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2M2MWEyZjtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMnB4IDJweCAjMzMzO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC5ycC1oZWFkZXIge1xyXG5cdFx0LyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG5cdFx0d2lkdGg6IDE2MHB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBweDtcclxuXHRcdG1hcmdpbi10b3A6IC0xMjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjk0MTUxO1xyXG5cdH1cclxuXHJcblx0LnJwLW1haW4ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQucnAtbXNnIHtcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxuXHJcblx0LnJlZC1wYWNrZXQgLm9wZW4ge1xyXG5cdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0bWFyZ2luOiAtMjBweCBhdXRvIDIwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZiMDNhO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5yZWRQYWNrZXRpbmZvIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5odW1hbk5hdHVyZSB7XHJcblx0XHR3aWR0aDogMzVweDtcclxuXHRcdGhlaWdodDogMzVweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMzVweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG5cdH1cclxuXHJcblx0LnJlZFBhY2tldEJnIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDI1MDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwdnc7XHJcblx0XHRoZWlnaHQ6IDEwMHZoO1xyXG5cdH1cclxuXHJcblx0LnJlZFBhY2tldGJveCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDh2aDtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdFx0aGVpZ2h0OiA3MHZoO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdGJhY2tncm91bmQ6ICNmZGY3ZWI7XHJcblx0fVxyXG5cclxuXHQucmVkUGFja2V0SW5mbyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTMwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjk0MTUxO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQucnBpLXVzZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcblxyXG5cdC5ycGktdXNlci1pbWcge1xyXG5cdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHR9XHJcblxyXG5cdC5ycGktcmVjaXZlcnMge1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdH1cclxuXHJcblx0LnJwaS1tc2cge1xyXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdH1cclxuXHJcblx0LnJwaS1jb3VudCB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG5cclxuXHQucmVkUGFja2V0TGlzdCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gMTMwcHgpO1xyXG5cdFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQucnBsLWl0ZW0ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW46IDVweCAwO1xyXG5cdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC5ycGwtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzk5OTtcclxuXHR9XHJcblxyXG5cdC5ycGwtaW1nIHtcclxuXHRcdHdpZHRoOiAzOHB4O1xyXG5cdFx0aGVpZ2h0OiAzOHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdH1cclxuXHJcblx0LnJwbC10aW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xyXG5cdH1cclxuXHJcblx0LnJwbC1pbmZvIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0d2lkdGg6IDY1JTtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdH1cclxuXHJcblx0LnJwbC10YWcge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG5cdFx0cGFkZGluZzogMCA1cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdG1heC13aWR0aDogOTVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcblx0fVxyXG5cclxuXHQuaXNNYXgge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzYwYjA0NDtcclxuXHRcdGJvcmRlci1jb2xvcjogIzVjYTk0MTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0LmlzMCB7XHJcblx0XHRib3JkZXItY29sb3I6ICNENUQ1RDU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcclxuXHRcdGNvbG9yOiAjZmFhO1xyXG5cdH1cclxuXHJcblx0LmlzTmVnIHtcclxuXHRcdGJvcmRlci1jb2xvcjogI0Q1RDVENTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG5cdFx0Y29sb3I6ICMwMDA7XHJcblx0fVxyXG5cclxuXHQucnBsLW1vbmV5IHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHR9XHJcblxyXG5cdC5mYWNlQm94IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdH1cclxuXHJcblx0LmZhY2UtaXRlbSB7XHJcblx0XHRtaW4td2lkdGg6IDUwcHg7XHJcblx0XHRtYXgtd2lkdGg6IDUwcHg7XHJcblx0XHRtaW4taGVpZ2h0OiA1MHB4O1xyXG5cdFx0bWF4LWhlaWdodDogNTBweDtcclxuXHRcdG1hcmdpbjogNXB4O1xyXG5cdH1cclxuXHJcblx0LnZvaWNlLWJ0biB7XHJcblx0XHR3aWR0aDogNzBweDtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcblxyXG5cdC52b2ljZS10aW1lIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC52b2ljZS1pbWcge1xyXG5cdFx0d2lkdGg6IDcwcHg7XHJcblx0XHRoZWlnaHQ6IDcwcHg7XHJcblxyXG5cdH1cclxuXHJcblx0LmxvbmdUYXAtbGlzdCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0b3A6IC0yNXZ3O1xyXG5cdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRtaW4td2lkdGg6IDEwMHB4O1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdGJveC1zaGFkb3c6IDAgMnB4IDJweCAjNmM2YzZjO1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LmxvbmdUYXAtaXRlbSB7XHJcblx0XHRtYXJnaW46IDAgNXB4O1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuYmFja1RvYm90dG9tIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHotaW5kZXg6IDEwMDE7XHJcblx0XHRib3R0b206IDEwMHB4O1xyXG5cdFx0cmlnaHQ6IDE1cHg7XHJcblx0XHR3aWR0aDogMTAwcHg7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjNENEOTY0O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xyXG5cdH1cclxuXHJcblx0LlNvY2tldENsb3NlTXNnIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR6LWluZGV4OiAxMDAxO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0YmFja2dyb3VuZDogI2Y1NmM2YztcclxuXHR9XHJcblxyXG5cdC50ZXh0TGluayB7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0fVxyXG48L3N0eWxlPlxyXG48c3R5bGU+XHJcblx0LmNvbnRlbnRCb3g+Pj5hIHtcclxuXHRcdGNvbG9yOiAjNmE3MzdkO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM2YTczN2Q7XHJcblx0fVxyXG5cclxuXHQuY29udGVudEJveD4+PmltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDU1dnc7XHJcblx0fVxyXG5cclxuXHQuY29udGVudEJveD4+PmJsb2NrcXVvdGUge1xyXG5cdFx0Y29sb3I6ICM2YTczN2Q7XHJcblx0XHRib3JkZXItbGVmdDogLjI1ZW0gc29saWQgI2VhZWNlZjtcclxuXHRcdHBhZGRpbmctbGVmdDogMWVtO1xyXG5cdFx0bWFyZ2luOiA1cHggMDtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50Qm94Pj4+b2wge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/*!**********************************!*\
  !*** E:/pwl/utils/permission.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/**\r\n * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启\r\n */\n\nvar isIos;\n\nisIos = plus.os.name == \"iOS\";\n\n\n// 判断推送权限是否开启\nfunction judgeIosPermissionPush() {\n  var result = false;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    __f__(\"log\", \"enabledTypes1:\" + enabledTypes, \" at utils/permission.js:19\");\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启\", \" at utils/permission.js:21\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at utils/permission.js:24\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启!\", \" at utils/permission.js:30\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at utils/permission.js:33\");\n    }\n    __f__(\"log\", \"enabledTypes2:\" + enabledTypes, \" at utils/permission.js:35\");\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\n// 判断定位权限是否开启\nfunction judgeIosPermissionLocation() {\n  var result = false;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var status = cllocationManger.authorizationStatus();\n  result = status != 2;\n  __f__(\"log\", \"定位权限开启：\" + result, \" at utils/permission.js:48\");\n  // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation\n  /* var enable = cllocationManger.locationServicesEnabled();\r\n  var status = cllocationManger.authorizationStatus();\r\n  console.log(\"enable:\" + enable);\r\n  console.log(\"status:\" + status);\r\n  if (enable && status != 2) {\r\n  \tresult = true;\r\n  \tconsole.log(\"手机定位服务已开启且已授予定位权限\");\r\n  } else {\r\n  \tconsole.log(\"手机系统的定位没有打开或未给予定位权限\");\r\n  } */\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\n// 判断麦克风权限是否开启\nfunction judgeIosPermissionRecord() {\n  var result = false;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var permissionStatus = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + permissionStatus, \" at utils/permission.js:70\");\n  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {\n    __f__(\"log\", \"麦克风权限没有开启\", \" at utils/permission.js:72\");\n  } else {\n    result = true;\n    __f__(\"log\", \"麦克风权限已经开启\", \" at utils/permission.js:75\");\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\n// 判断相机权限是否开启\nfunction judgeIosPermissionCamera() {\n  var result = false;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at utils/permission.js:86\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相机权限已经开启\", \" at utils/permission.js:89\");\n  } else {\n    __f__(\"log\", \"相机权限没有开启\", \" at utils/permission.js:91\");\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\n// 判断相册权限是否开启\nfunction judgeIosPermissionPhotoLibrary() {\n  var result = false;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at utils/permission.js:102\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相册权限已经开启\", \" at utils/permission.js:105\");\n  } else {\n    __f__(\"log\", \"相册权限没有开启\", \" at utils/permission.js:107\");\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\n// 判断通讯录权限是否开启\nfunction judgeIosPermissionContact() {\n  var result = false;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"通讯录权限已经开启\", \" at utils/permission.js:120\");\n  } else {\n    __f__(\"log\", \"通讯录权限没有开启\", \" at utils/permission.js:122\");\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\n// 判断日历权限是否开启\nfunction judgeIosPermissionCalendar() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"日历权限已经开启\", \" at utils/permission.js:135\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at utils/permission.js:137\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// 判断备忘录权限是否开启\nfunction judgeIosPermissionMemo() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at utils/permission.js:150\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at utils/permission.js:152\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// Android权限查询\nfunction requestAndroidPermission(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at utils/permission.js:167\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at utils/permission.js:172\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at utils/permission.js:177\");\n        result = -1;\n      }\n      resolve(result);\n      // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限\n      // if (result != 1) {\n      // gotoAppPermissionSetting()\n      // }\n    },\n    function (error) {\n      __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at utils/permission.js:187\");\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\n// 使用一个方法，根据参数判断权限\nfunction judgeIosPermission(permissionID) {\n  if (permissionID == \"location\") {\n    return judgeIosPermissionLocation();\n  } else if (permissionID == \"camera\") {\n    return judgeIosPermissionCamera();\n  } else if (permissionID == \"photoLibrary\") {\n    return judgeIosPermissionPhotoLibrary();\n  } else if (permissionID == \"record\") {\n    return judgeIosPermissionRecord();\n  } else if (permissionID == \"push\") {\n    return judgeIosPermissionPush();\n  } else if (permissionID == \"contact\") {\n    return judgeIosPermissionContact();\n  } else if (permissionID == \"calendar\") {\n    return judgeIosPermissionCalendar();\n  } else if (permissionID == \"memo\") {\n    return judgeIosPermissionMemo();\n  }\n  return false;\n}\n\n// 跳转到**应用**的权限页面\nfunction gotoAppPermissionSetting() {\n  if (isIos) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    // var setting2 = NSURL2.URLWithString(\"prefs:root=LOCATION_SERVICES\");\t\t\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    // console.log(plus.device.vendor);\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\n// 检查系统的设备服务是否开启\n// var checkSystemEnableLocation = async function () {\nfunction checkSystemEnableLocation() {\n  if (isIos) {\n    var result = false;\n    var cllocationManger = plus.ios.import(\"CLLocationManager\");\n    var result = cllocationManger.locationServicesEnabled();\n    __f__(\"log\", \"系统定位开启:\" + result, \" at utils/permission.js:253\");\n    plus.ios.deleteObject(cllocationManger);\n    return result;\n  } else {\n    var context = plus.android.importClass(\"android.content.Context\");\n    var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n    var main = plus.android.runtimeMainActivity();\n    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);\n    __f__(\"log\", \"系统定位开启:\" + result, \" at utils/permission.js:262\");\n    return result;\n  }\n}\n\nmodule.exports = {\n  judgeIosPermission: judgeIosPermission,\n  requestAndroidPermission: requestAndroidPermission,\n  checkSystemEnableLocation: checkSystemEnableLocation,\n  gotoAppPermissionSetting: gotoAppPermissionSetting };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcGVybWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJpc0lvcyIsInBsdXMiLCJvcyIsIm5hbWUiLCJqdWRnZUlvc1Blcm1pc3Npb25QdXNoIiwicmVzdWx0IiwiVUlBcHBsaWNhdGlvbiIsImlvcyIsImltcG9ydCIsImFwcCIsInNoYXJlZEFwcGxpY2F0aW9uIiwiZW5hYmxlZFR5cGVzIiwiY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNldHRpbmdzIiwicGx1c0dldEF0dHJpYnV0ZSIsImRlbGV0ZU9iamVjdCIsImVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcyIsImp1ZGdlSW9zUGVybWlzc2lvbkxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsInN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQiLCJhdmF1ZGlvc2Vzc2lvbiIsImF2YXVkaW8iLCJzaGFyZWRJbnN0YW5jZSIsInBlcm1pc3Npb25TdGF0dXMiLCJyZWNvcmRQZXJtaXNzaW9uIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JNZWRpYVR5cGUiLCJqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkiLCJQSFBob3RvTGlicmFyeSIsImp1ZGdlSW9zUGVybWlzc2lvbkNvbnRhY3QiLCJDTkNvbnRhY3RTdG9yZSIsImNuQXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIiLCJFS0V2ZW50U3RvcmUiLCJla0F1dGhTdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25NZW1vIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwicGVybWlzc2lvbklEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmRyb2lkIiwicmVxdWVzdFBlcm1pc3Npb25zIiwicmVzdWx0T2JqIiwiaSIsImdyYW50ZWQiLCJsZW5ndGgiLCJncmFudGVkUGVybWlzc2lvbiIsImRlbmllZFByZXNlbnQiLCJkZW5pZWRQcmVzZW50UGVybWlzc2lvbiIsImRlbmllZEFsd2F5cyIsImRlbmllZEFsd2F5c1Blcm1pc3Npb24iLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwianVkZ2VJb3NQZXJtaXNzaW9uIiwiZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nIiwiYXBwbGljYXRpb24yIiwiTlNVUkwyIiwic2V0dGluZzIiLCJVUkxXaXRoU3RyaW5nIiwib3BlblVSTCIsIkludGVudCIsImltcG9ydENsYXNzIiwiU2V0dGluZ3MiLCJVcmkiLCJtYWluQWN0aXZpdHkiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiaW50ZW50Iiwic2V0QWN0aW9uIiwiQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MiLCJ1cmkiLCJmcm9tUGFydHMiLCJnZXRQYWNrYWdlTmFtZSIsInNldERhdGEiLCJzdGFydEFjdGl2aXR5IiwiY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwiY29udGV4dCIsImxvY2F0aW9uTWFuYWdlciIsIm1haW4iLCJtYWluU3ZyIiwiZ2V0U3lzdGVtU2VydmljZSIsIkxPQ0FUSU9OX1NFUlZJQ0UiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsIkdQU19QUk9WSURFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUEsSUFBSUEsS0FBSjs7QUFFQUEsS0FBSyxHQUFJQyxJQUFJLENBQUNDLEVBQUwsQ0FBUUMsSUFBUixJQUFnQixLQUF6Qjs7O0FBR0E7QUFDQSxTQUFTQyxzQkFBVCxHQUFrQztBQUNqQyxNQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUlDLGFBQWEsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZUFBaEIsQ0FBcEI7QUFDQSxNQUFJQyxHQUFHLEdBQUdILGFBQWEsQ0FBQ0ksaUJBQWQsRUFBVjtBQUNBLE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLE1BQUlGLEdBQUcsQ0FBQ0csK0JBQVIsRUFBeUM7QUFDeEMsUUFBSUMsUUFBUSxHQUFHSixHQUFHLENBQUNHLCtCQUFKLEVBQWY7QUFDQUQsZ0JBQVksR0FBR0UsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixDQUFmO0FBQ0EsaUJBQVksbUJBQW1CSCxZQUEvQjtBQUNBLFFBQUlBLFlBQVksSUFBSSxDQUFwQixFQUF1QjtBQUN0QixtQkFBWSxVQUFaO0FBQ0EsS0FGRCxNQUVPO0FBQ05OLFlBQU0sR0FBRyxJQUFUO0FBQ0EsbUJBQVksV0FBWjtBQUNBO0FBQ0RKLFFBQUksQ0FBQ00sR0FBTCxDQUFTUSxZQUFULENBQXNCRixRQUF0QjtBQUNBLEdBWEQsTUFXTztBQUNORixnQkFBWSxHQUFHRixHQUFHLENBQUNPLDhCQUFKLEVBQWY7QUFDQSxRQUFJTCxZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDdEIsbUJBQVksV0FBWjtBQUNBLEtBRkQsTUFFTztBQUNOTixZQUFNLEdBQUcsSUFBVDtBQUNBLG1CQUFZLFdBQVo7QUFDQTtBQUNELGlCQUFZLG1CQUFtQk0sWUFBL0I7QUFDQTtBQUNEVixNQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQk4sR0FBdEI7QUFDQVIsTUFBSSxDQUFDTSxHQUFMLENBQVNRLFlBQVQsQ0FBc0JULGFBQXRCO0FBQ0EsU0FBT0QsTUFBUDtBQUNBOztBQUVEO0FBQ0EsU0FBU1ksMEJBQVQsR0FBc0M7QUFDckMsTUFBSVosTUFBTSxHQUFHLEtBQWI7QUFDQSxNQUFJYSxnQkFBZ0IsR0FBR2pCLElBQUksQ0FBQ00sR0FBTCxDQUFTQyxNQUFULENBQWdCLG1CQUFoQixDQUF2QjtBQUNBLE1BQUlXLE1BQU0sR0FBR0QsZ0JBQWdCLENBQUNFLG1CQUFqQixFQUFiO0FBQ0FmLFFBQU0sR0FBSWMsTUFBTSxJQUFJLENBQXBCO0FBQ0EsZUFBWSxZQUFZZCxNQUF4QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQUosTUFBSSxDQUFDTSxHQUFMLENBQVNRLFlBQVQsQ0FBc0JHLGdCQUF0QjtBQUNBLFNBQU9iLE1BQVA7QUFDQTs7QUFFRDtBQUNBLFNBQVNnQix3QkFBVCxHQUFvQztBQUNuQyxNQUFJaEIsTUFBTSxHQUFHLEtBQWI7QUFDQSxNQUFJaUIsY0FBYyxHQUFHckIsSUFBSSxDQUFDTSxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZ0JBQWhCLENBQXJCO0FBQ0EsTUFBSWUsT0FBTyxHQUFHRCxjQUFjLENBQUNFLGNBQWYsRUFBZDtBQUNBLE1BQUlDLGdCQUFnQixHQUFHRixPQUFPLENBQUNHLGdCQUFSLEVBQXZCO0FBQ0EsZUFBWSxzQkFBc0JELGdCQUFsQztBQUNBLE1BQUlBLGdCQUFnQixJQUFJLFVBQXBCLElBQWtDQSxnQkFBZ0IsSUFBSSxVQUExRCxFQUFzRTtBQUNyRSxpQkFBWSxXQUFaO0FBQ0EsR0FGRCxNQUVPO0FBQ05wQixVQUFNLEdBQUcsSUFBVDtBQUNBLGlCQUFZLFdBQVo7QUFDQTtBQUNESixNQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQk8sY0FBdEI7QUFDQSxTQUFPakIsTUFBUDtBQUNBOztBQUVEO0FBQ0EsU0FBU3NCLHdCQUFULEdBQW9DO0FBQ25DLE1BQUl0QixNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUl1QixlQUFlLEdBQUczQixJQUFJLENBQUNNLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixpQkFBaEIsQ0FBdEI7QUFDQSxNQUFJcUIsVUFBVSxHQUFHRCxlQUFlLENBQUNFLCtCQUFoQixDQUFnRCxNQUFoRCxDQUFqQjtBQUNBLGVBQVksZ0JBQWdCRCxVQUE1QjtBQUNBLE1BQUlBLFVBQVUsSUFBSSxDQUFsQixFQUFxQjtBQUNwQnhCLFVBQU0sR0FBRyxJQUFUO0FBQ0EsaUJBQVksVUFBWjtBQUNBLEdBSEQsTUFHTztBQUNOLGlCQUFZLFVBQVo7QUFDQTtBQUNESixNQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQmEsZUFBdEI7QUFDQSxTQUFPdkIsTUFBUDtBQUNBOztBQUVEO0FBQ0EsU0FBUzBCLDhCQUFULEdBQTBDO0FBQ3pDLE1BQUkxQixNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUkyQixjQUFjLEdBQUcvQixJQUFJLENBQUNNLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixnQkFBaEIsQ0FBckI7QUFDQSxNQUFJcUIsVUFBVSxHQUFHRyxjQUFjLENBQUNaLG1CQUFmLEVBQWpCO0FBQ0EsZUFBWSxnQkFBZ0JTLFVBQTVCO0FBQ0EsTUFBSUEsVUFBVSxJQUFJLENBQWxCLEVBQXFCO0FBQ3BCeEIsVUFBTSxHQUFHLElBQVQ7QUFDQSxpQkFBWSxVQUFaO0FBQ0EsR0FIRCxNQUdPO0FBQ04saUJBQVksVUFBWjtBQUNBO0FBQ0RKLE1BQUksQ0FBQ00sR0FBTCxDQUFTUSxZQUFULENBQXNCaUIsY0FBdEI7QUFDQSxTQUFPM0IsTUFBUDtBQUNBOztBQUVEO0FBQ0EsU0FBUzRCLHlCQUFULEdBQXFDO0FBQ3BDLE1BQUk1QixNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUk2QixjQUFjLEdBQUdqQyxJQUFJLENBQUNNLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixnQkFBaEIsQ0FBckI7QUFDQSxNQUFJMkIsWUFBWSxHQUFHRCxjQUFjLENBQUNFLGdDQUFmLENBQWdELENBQWhELENBQW5CO0FBQ0EsTUFBSUQsWUFBWSxJQUFJLENBQXBCLEVBQXVCO0FBQ3RCOUIsVUFBTSxHQUFHLElBQVQ7QUFDQSxpQkFBWSxXQUFaO0FBQ0EsR0FIRCxNQUdPO0FBQ04saUJBQVksV0FBWjtBQUNBO0FBQ0RKLE1BQUksQ0FBQ00sR0FBTCxDQUFTUSxZQUFULENBQXNCbUIsY0FBdEI7QUFDQSxTQUFPN0IsTUFBUDtBQUNBOztBQUVEO0FBQ0EsU0FBU2dDLDBCQUFULEdBQXNDO0FBQ3JDLE1BQUloQyxNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUlpQyxZQUFZLEdBQUdyQyxJQUFJLENBQUNNLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixjQUFoQixDQUFuQjtBQUNBLE1BQUkrQixZQUFZLEdBQUdELFlBQVksQ0FBQ0YsZ0NBQWIsQ0FBOEMsQ0FBOUMsQ0FBbkI7QUFDQSxNQUFJRyxZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDdEJsQyxVQUFNLEdBQUcsSUFBVDtBQUNBLGlCQUFZLFVBQVo7QUFDQSxHQUhELE1BR087QUFDTixpQkFBWSxVQUFaO0FBQ0E7QUFDREosTUFBSSxDQUFDTSxHQUFMLENBQVNRLFlBQVQsQ0FBc0J1QixZQUF0QjtBQUNBLFNBQU9qQyxNQUFQO0FBQ0E7O0FBRUQ7QUFDQSxTQUFTbUMsc0JBQVQsR0FBa0M7QUFDakMsTUFBSW5DLE1BQU0sR0FBRyxLQUFiO0FBQ0EsTUFBSWlDLFlBQVksR0FBR3JDLElBQUksQ0FBQ00sR0FBTCxDQUFTQyxNQUFULENBQWdCLGNBQWhCLENBQW5CO0FBQ0EsTUFBSStCLFlBQVksR0FBR0QsWUFBWSxDQUFDRixnQ0FBYixDQUE4QyxDQUE5QyxDQUFuQjtBQUNBLE1BQUlHLFlBQVksSUFBSSxDQUFwQixFQUF1QjtBQUN0QmxDLFVBQU0sR0FBRyxJQUFUO0FBQ0EsaUJBQVksV0FBWjtBQUNBLEdBSEQsTUFHTztBQUNOLGlCQUFZLFdBQVo7QUFDQTtBQUNESixNQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQnVCLFlBQXRCO0FBQ0EsU0FBT2pDLE1BQVA7QUFDQTs7QUFFRDtBQUNBLFNBQVNvQyx3QkFBVCxDQUFrQ0MsWUFBbEMsRUFBZ0Q7QUFDL0MsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDNUMsUUFBSSxDQUFDNkMsT0FBTCxDQUFhQyxrQkFBYjtBQUNDLEtBQUNMLFlBQUQsQ0FERCxFQUNpQjtBQUNoQixjQUFTTSxTQUFULEVBQW9CO0FBQ25CLFVBQUkzQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLFdBQUssSUFBSTRDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQkMsTUFBdEMsRUFBOENGLENBQUMsRUFBL0MsRUFBbUQ7QUFDbEQsWUFBSUcsaUJBQWlCLEdBQUdKLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQkQsQ0FBbEIsQ0FBeEI7QUFDQSxxQkFBWSxZQUFZRyxpQkFBeEI7QUFDQS9DLGNBQU0sR0FBRyxDQUFUO0FBQ0E7QUFDRCxXQUFLLElBQUk0QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxTQUFTLENBQUNLLGFBQVYsQ0FBd0JGLE1BQTVDLEVBQW9ERixDQUFDLEVBQXJELEVBQXlEO0FBQ3hELFlBQUlLLHVCQUF1QixHQUFHTixTQUFTLENBQUNLLGFBQVYsQ0FBd0JKLENBQXhCLENBQTlCO0FBQ0EscUJBQVksZUFBZUssdUJBQTNCO0FBQ0FqRCxjQUFNLEdBQUcsQ0FBVDtBQUNBO0FBQ0QsV0FBSyxJQUFJNEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsU0FBUyxDQUFDTyxZQUFWLENBQXVCSixNQUEzQyxFQUFtREYsQ0FBQyxFQUFwRCxFQUF3RDtBQUN2RCxZQUFJTyxzQkFBc0IsR0FBR1IsU0FBUyxDQUFDTyxZQUFWLENBQXVCTixDQUF2QixDQUE3QjtBQUNBLHFCQUFZLGVBQWVPLHNCQUEzQjtBQUNBbkQsY0FBTSxHQUFHLENBQUMsQ0FBVjtBQUNBO0FBQ0R1QyxhQUFPLENBQUN2QyxNQUFELENBQVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeEJGO0FBeUJDLGNBQVNvRCxLQUFULEVBQWdCO0FBQ2YsbUJBQVksWUFBWUEsS0FBSyxDQUFDQyxJQUFsQixHQUF5QixLQUF6QixHQUFpQ0QsS0FBSyxDQUFDRSxPQUFuRDtBQUNBZixhQUFPLENBQUM7QUFDUGMsWUFBSSxFQUFFRCxLQUFLLENBQUNDLElBREw7QUFFUEMsZUFBTyxFQUFFRixLQUFLLENBQUNFLE9BRlIsRUFBRCxDQUFQOztBQUlBLEtBL0JGOztBQWlDQSxHQWxDTSxDQUFQO0FBbUNBOztBQUVEO0FBQ0EsU0FBU0Msa0JBQVQsQ0FBNEJsQixZQUE1QixFQUEwQztBQUN6QyxNQUFJQSxZQUFZLElBQUksVUFBcEIsRUFBZ0M7QUFDL0IsV0FBT3pCLDBCQUEwQixFQUFqQztBQUNBLEdBRkQsTUFFTyxJQUFJeUIsWUFBWSxJQUFJLFFBQXBCLEVBQThCO0FBQ3BDLFdBQU9mLHdCQUF3QixFQUEvQjtBQUNBLEdBRk0sTUFFQSxJQUFJZSxZQUFZLElBQUksY0FBcEIsRUFBb0M7QUFDMUMsV0FBT1gsOEJBQThCLEVBQXJDO0FBQ0EsR0FGTSxNQUVBLElBQUlXLFlBQVksSUFBSSxRQUFwQixFQUE4QjtBQUNwQyxXQUFPckIsd0JBQXdCLEVBQS9CO0FBQ0EsR0FGTSxNQUVBLElBQUlxQixZQUFZLElBQUksTUFBcEIsRUFBNEI7QUFDbEMsV0FBT3RDLHNCQUFzQixFQUE3QjtBQUNBLEdBRk0sTUFFQSxJQUFJc0MsWUFBWSxJQUFJLFNBQXBCLEVBQStCO0FBQ3JDLFdBQU9ULHlCQUF5QixFQUFoQztBQUNBLEdBRk0sTUFFQSxJQUFJUyxZQUFZLElBQUksVUFBcEIsRUFBZ0M7QUFDdEMsV0FBT0wsMEJBQTBCLEVBQWpDO0FBQ0EsR0FGTSxNQUVBLElBQUlLLFlBQVksSUFBSSxNQUFwQixFQUE0QjtBQUNsQyxXQUFPRixzQkFBc0IsRUFBN0I7QUFDQTtBQUNELFNBQU8sS0FBUDtBQUNBOztBQUVEO0FBQ0EsU0FBU3FCLHdCQUFULEdBQW9DO0FBQ25DLE1BQUk3RCxLQUFKLEVBQVc7QUFDVixRQUFJTSxhQUFhLEdBQUdMLElBQUksQ0FBQ00sR0FBTCxDQUFTQyxNQUFULENBQWdCLGVBQWhCLENBQXBCO0FBQ0EsUUFBSXNELFlBQVksR0FBR3hELGFBQWEsQ0FBQ0ksaUJBQWQsRUFBbkI7QUFDQSxRQUFJcUQsTUFBTSxHQUFHOUQsSUFBSSxDQUFDTSxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsT0FBaEIsQ0FBYjtBQUNBO0FBQ0EsUUFBSXdELFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxhQUFQLENBQXFCLGVBQXJCLENBQWY7QUFDQUgsZ0JBQVksQ0FBQ0ksT0FBYixDQUFxQkYsUUFBckI7O0FBRUEvRCxRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQmlELFFBQXRCO0FBQ0EvRCxRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQmdELE1BQXRCO0FBQ0E5RCxRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQitDLFlBQXRCO0FBQ0EsR0FYRCxNQVdPO0FBQ047QUFDQSxRQUFJSyxNQUFNLEdBQUdsRSxJQUFJLENBQUM2QyxPQUFMLENBQWFzQixXQUFiLENBQXlCLHdCQUF6QixDQUFiO0FBQ0EsUUFBSUMsUUFBUSxHQUFHcEUsSUFBSSxDQUFDNkMsT0FBTCxDQUFhc0IsV0FBYixDQUF5QiwyQkFBekIsQ0FBZjtBQUNBLFFBQUlFLEdBQUcsR0FBR3JFLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsaUJBQXpCLENBQVY7QUFDQSxRQUFJRyxZQUFZLEdBQUd0RSxJQUFJLENBQUM2QyxPQUFMLENBQWEwQixtQkFBYixFQUFuQjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxJQUFJTixNQUFKLEVBQWI7QUFDQU0sVUFBTSxDQUFDQyxTQUFQLENBQWlCTCxRQUFRLENBQUNNLG1DQUExQjtBQUNBLFFBQUlDLEdBQUcsR0FBR04sR0FBRyxDQUFDTyxTQUFKLENBQWMsU0FBZCxFQUF5Qk4sWUFBWSxDQUFDTyxjQUFiLEVBQXpCLEVBQXdELElBQXhELENBQVY7QUFDQUwsVUFBTSxDQUFDTSxPQUFQLENBQWVILEdBQWY7QUFDQUwsZ0JBQVksQ0FBQ1MsYUFBYixDQUEyQlAsTUFBM0I7QUFDQTtBQUNEOztBQUVEO0FBQ0E7QUFDQSxTQUFTUSx5QkFBVCxHQUFxQztBQUNwQyxNQUFJakYsS0FBSixFQUFXO0FBQ1YsUUFBSUssTUFBTSxHQUFHLEtBQWI7QUFDQSxRQUFJYSxnQkFBZ0IsR0FBR2pCLElBQUksQ0FBQ00sR0FBTCxDQUFTQyxNQUFULENBQWdCLG1CQUFoQixDQUF2QjtBQUNBLFFBQUlILE1BQU0sR0FBR2EsZ0JBQWdCLENBQUNnRSx1QkFBakIsRUFBYjtBQUNBLGlCQUFZLFlBQVk3RSxNQUF4QjtBQUNBSixRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQkcsZ0JBQXRCO0FBQ0EsV0FBT2IsTUFBUDtBQUNBLEdBUEQsTUFPTztBQUNOLFFBQUk4RSxPQUFPLEdBQUdsRixJQUFJLENBQUM2QyxPQUFMLENBQWFzQixXQUFiLENBQXlCLHlCQUF6QixDQUFkO0FBQ0EsUUFBSWdCLGVBQWUsR0FBR25GLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsa0NBQXpCLENBQXRCO0FBQ0EsUUFBSWlCLElBQUksR0FBR3BGLElBQUksQ0FBQzZDLE9BQUwsQ0FBYTBCLG1CQUFiLEVBQVg7QUFDQSxRQUFJYyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0JKLE9BQU8sQ0FBQ0ssZ0JBQTlCLENBQWQ7QUFDQSxRQUFJbkYsTUFBTSxHQUFHaUYsT0FBTyxDQUFDRyxpQkFBUixDQUEwQkwsZUFBZSxDQUFDTSxZQUExQyxDQUFiO0FBQ0EsaUJBQVksWUFBWXJGLE1BQXhCO0FBQ0EsV0FBT0EsTUFBUDtBQUNBO0FBQ0Q7O0FBRURzRixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJoQyxvQkFBa0IsRUFBRUEsa0JBREo7QUFFaEJuQiwwQkFBd0IsRUFBRUEsd0JBRlY7QUFHaEJ3QywyQkFBeUIsRUFBRUEseUJBSFg7QUFJaEJwQiwwQkFBd0IsRUFBRUEsd0JBSlYsRUFBakIsQyIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmnKzmqKHlnZflsIHoo4XkuoZBbmRyb2lk44CBaU9T55qE5bqU55So5p2D6ZmQ5Yik5pat44CB5omT5byA5bqU55So5p2D6ZmQ6K6+572u55WM6Z2i44CB5Lul5Y+K5L2N572u57O757uf5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbiAqL1xyXG5cclxudmFyIGlzSW9zXHJcblxyXG5pc0lvcyA9IChwbHVzLm9zLm5hbWUgPT0gXCJpT1NcIilcclxuXHJcblxyXG4vLyDliKTmlq3mjqjpgIHmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xyXG5cdHZhciBhcHAgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0dmFyIGVuYWJsZWRUeXBlcyA9IDA7XHJcblx0aWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XHJcblx0XHR2YXIgc2V0dGluZ3MgPSBhcHAuY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygpO1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gc2V0dGluZ3MucGx1c0dldEF0dHJpYnV0ZShcInR5cGVzXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMxOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHRcdGlmIChlbmFibGVkVHlwZXMgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuaOqOmAgeadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmdzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gYXBwLmVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcygpO1xyXG5cdFx0aWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvIVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMyOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KGFwcCk7XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFVJQXBwbGljYXRpb24pO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWumuS9jeadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25Mb2NhdGlvbigpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0cmVzdWx0ID0gKHN0YXR1cyAhPSAyKVxyXG5cdGNvbnNvbGUubG9nKFwi5a6a5L2N5p2D6ZmQ5byA5ZCv77yaXCIgKyByZXN1bHQpO1xyXG5cdC8vIOS7peS4i+S7o+eggeWIpOaWreS6huaJi+acuuiuvuWkh+eahOWumuS9jeaYr+WQpuWFs+mXre+8jOaOqOiNkOWPpuihjOS9v+eUqOaWueazlSBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uXHJcblx0LyogdmFyIGVuYWJsZSA9IGNsbG9jYXRpb25NYW5nZXIubG9jYXRpb25TZXJ2aWNlc0VuYWJsZWQoKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJlbmFibGU6XCIgKyBlbmFibGUpO1xyXG5cdGNvbnNvbGUubG9nKFwic3RhdHVzOlwiICsgc3RhdHVzKTtcclxuXHRpZiAoZW5hYmxlICYmIHN0YXR1cyAhPSAyKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLmiYvmnLrlrprkvY3mnI3liqHlt7LlvIDlkK/kuJTlt7LmjojkuojlrprkvY3mnYPpmZBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5omL5py657O757uf55qE5a6a5L2N5rKh5pyJ5omT5byA5oiW5pyq57uZ5LqI5a6a5L2N5p2D6ZmQXCIpO1xyXG5cdH0gKi9cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat6bqm5YWL6aOO5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblJlY29yZCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGF2YXVkaW9zZXNzaW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZBdWRpb1Nlc3Npb25cIik7XHJcblx0dmFyIGF2YXVkaW8gPSBhdmF1ZGlvc2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xyXG5cdHZhciBwZXJtaXNzaW9uU3RhdHVzID0gYXZhdWRpby5yZWNvcmRQZXJtaXNzaW9uKCk7XHJcblx0Y29uc29sZS5sb2coXCJwZXJtaXNzaW9uU3RhdHVzOlwiICsgcGVybWlzc2lvblN0YXR1cyk7XHJcblx0aWYgKHBlcm1pc3Npb25TdGF0dXMgPT0gMTY4NDM2OTAxNyB8fCBwZXJtaXNzaW9uU3RhdHVzID09IDE5NzAxNjg5NDgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi6bqm5YWL6aOO5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLpuqblhYvpo47mnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhdmF1ZGlvc2Vzc2lvbik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45py65p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbkNhbWVyYSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIEFWQ2FwdHVyZURldmljZSA9IHBsdXMuaW9zLmltcG9ydChcIkFWQ2FwdHVyZURldmljZVwiKTtcclxuXHR2YXIgYXV0aFN0YXR1cyA9IEFWQ2FwdHVyZURldmljZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yTWVkaWFUeXBlKCd2aWRlJyk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45py65p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOacuuadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45YaM5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblBob3RvTGlicmFyeSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFBIUGhvdG9MaWJyYXJ5ID0gcGx1cy5pb3MuaW1wb3J0KFwiUEhQaG90b0xpYnJhcnlcIik7XHJcblx0dmFyIGF1dGhTdGF0dXMgPSBQSFBob3RvTGlicmFyeS5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45YaM5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOWGjOadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFBIUGhvdG9MaWJyYXJ5KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3pgJrorq/lvZXmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ29udGFjdCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIENOQ29udGFjdFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiQ05Db250YWN0U3RvcmVcIik7XHJcblx0dmFyIGNuQXV0aFN0YXR1cyA9IENOQ29udGFjdFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDApO1xyXG5cdGlmIChjbkF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6YCa6K6v5b2V5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIumAmuiur+W9leadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KENOQ29udGFjdFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3ml6XljobmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XHJcblx0dmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcclxuXHRpZiAoZWtBdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIuaXpeWOhuadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLml6XljobmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWkh+W/mOW9leadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKCkge1xyXG5cdHZhciByZXN1bHQgPSBmYWxzZTtcclxuXHR2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG5cdHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMSk7XHJcblx0aWYgKGVrQXV0aFN0YXR1cyA9PSAzKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5aSH5b+Y5b2V5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH1cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoRUtFdmVudFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBBbmRyb2lk5p2D6ZmQ5p+l6K+iXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNzaW9uSUQpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0cGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcclxuXHRcdFx0W3Blcm1pc3Npb25JRF0sIC8vIOeQhuiuuuS4iuaUr+aMgeWkmuS4quadg+mZkOWQjOaXtuafpeivou+8jOS9huWunumZheS4iuacrOWHveaVsOWwgeijheWPquWkhOeQhuS6huS4gOS4quadg+mZkOeahOaDheWGteOAguaciemcgOimgeeahOWPr+iHquihjOaJqeWxleWwgeijhVxyXG5cdFx0XHRmdW5jdGlvbihyZXN1bHRPYmopIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gMDtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5ncmFudGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZ3JhbnRlZFBlcm1pc3Npb24gPSByZXN1bHRPYmouZ3JhbnRlZFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRQcmVzZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkUHJlc2VudFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRBbHdheXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBkZW5pZWRBbHdheXNQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZEFsd2F5c1tpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSAtMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XHJcblx0XHRcdFx0Ly8g6Iul5omA6ZyA5p2D6ZmQ6KKr5ouS57udLOWImeaJk+W8gEFQUOiuvue9rueVjOmdoizlj6/ku6XlnKhBUFDorr7nva7nlYzpnaLmiZPlvIDnm7jlupTmnYPpmZBcclxuXHRcdFx0XHQvLyBpZiAocmVzdWx0ICE9IDEpIHtcclxuXHRcdFx0XHQvLyBnb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKVxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn55Sz6K+35p2D6ZmQ6ZSZ6K+v77yaJyArIGVycm9yLmNvZGUgKyBcIiA9IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdFx0cmVzb2x2ZSh7XHJcblx0XHRcdFx0XHRjb2RlOiBlcnJvci5jb2RlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDkvb/nlKjkuIDkuKrmlrnms5XvvIzmoLnmja7lj4LmlbDliKTmlq3mnYPpmZBcclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc3Npb25JRCkge1xyXG5cdGlmIChwZXJtaXNzaW9uSUQgPT0gXCJsb2NhdGlvblwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uTG9jYXRpb24oKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwiY2FtZXJhXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYW1lcmEoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicGhvdG9MaWJyYXJ5XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicmVjb3JkXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicHVzaFwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25Db250YWN0KClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcImNhbGVuZGFyXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYWxlbmRhcigpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJtZW1vXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKClcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyDot7PovazliLAqKuW6lOeUqCoq55qE5p2D6ZmQ6aG16Z2iXHJcbmZ1bmN0aW9uIGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpIHtcclxuXHRpZiAoaXNJb3MpIHtcclxuXHRcdHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcclxuXHRcdHZhciBhcHBsaWNhdGlvbjIgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0XHR2YXIgTlNVUkwyID0gcGx1cy5pb3MuaW1wb3J0KFwiTlNVUkxcIik7XHJcblx0XHQvLyB2YXIgc2V0dGluZzIgPSBOU1VSTDIuVVJMV2l0aFN0cmluZyhcInByZWZzOnJvb3Q9TE9DQVRJT05fU0VSVklDRVNcIik7XHRcdFxyXG5cdFx0dmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJhcHAtc2V0dGluZ3M6XCIpO1xyXG5cdFx0YXBwbGljYXRpb24yLm9wZW5VUkwoc2V0dGluZzIpO1xyXG5cclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoTlNVUkwyKTtcclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHBsaWNhdGlvbjIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhwbHVzLmRldmljZS52ZW5kb3IpO1xyXG5cdFx0dmFyIEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5JbnRlbnRcIik7XHJcblx0XHR2YXIgU2V0dGluZ3MgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnByb3ZpZGVyLlNldHRpbmdzXCIpO1xyXG5cdFx0dmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcclxuXHRcdHZhciBtYWluQWN0aXZpdHkgPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIGludGVudCA9IG5ldyBJbnRlbnQoKTtcclxuXHRcdGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xyXG5cdFx0dmFyIHVyaSA9IFVyaS5mcm9tUGFydHMoXCJwYWNrYWdlXCIsIG1haW5BY3Rpdml0eS5nZXRQYWNrYWdlTmFtZSgpLCBudWxsKTtcclxuXHRcdGludGVudC5zZXREYXRhKHVyaSk7XHJcblx0XHRtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuLy8g5qOA5p+l57O757uf55qE6K6+5aSH5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbi8vIHZhciBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5mdW5jdGlvbiBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uKCkge1xyXG5cdGlmIChpc0lvcykge1xyXG5cdFx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHRcdHZhciByZXN1bHQgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIuezu+e7n+WumuS9jeW8gOWQrzpcIiArIHJlc3VsdCk7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5Db250ZXh0XCIpO1xyXG5cdFx0dmFyIGxvY2F0aW9uTWFuYWdlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubG9jYXRpb24uTG9jYXRpb25NYW5hZ2VyXCIpO1xyXG5cdFx0dmFyIG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIG1haW5TdnIgPSBtYWluLmdldFN5c3RlbVNlcnZpY2UoY29udGV4dC5MT0NBVElPTl9TRVJWSUNFKTtcclxuXHRcdHZhciByZXN1bHQgPSBtYWluU3ZyLmlzUHJvdmlkZXJFbmFibGVkKGxvY2F0aW9uTWFuYWdlci5HUFNfUFJPVklERVIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLns7vnu5/lrprkvY3lvIDlkK86XCIgKyByZXN1bHQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0anVkZ2VJb3NQZXJtaXNzaW9uOiBqdWRnZUlvc1Blcm1pc3Npb24sXHJcblx0cmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uOiByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24sXHJcblx0Y2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbjogY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbixcclxuXHRnb3RvQXBwUGVybWlzc2lvblNldHRpbmc6IGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!***************************************************!*\
  !*** E:/pwl/pages/chat/redpacket.vue?mpType=page ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page */ 44);\n/* harmony import */ var _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redpacket.vue?vue&type=script&lang=js&mpType=page */ 46);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"b748ca2a\",\n  null,\n  false,\n  _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/redpacket.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkk7QUFDN0k7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwyR0FBTTtBQUNSLEVBQUUsb0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3JlZHBhY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjc0OGNhMmEmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlZHBhY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVkcGFja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjc0OGNhMmFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC9yZWRwYWNrZXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!*********************************************************************************************!*\
  !*** E:/pwl/pages/chat/redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page */ 45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 45 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/chat/redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "redpacketBox"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "rpTitle"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "borderLine"),
            style: _vm._$s(2, "s", { left: _vm.index * 25 + 2.5 + "%" }),
            attrs: { _i: 2 }
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "rpItem"),
            class: _vm._$s(3, "c", _vm.index == 0 ? "active" : ""),
            attrs: { _i: 3 },
            on: {
              click: function($event) {
                return _vm.changeType(0, "random")
              }
            }
          }),
          _c("view", {
            staticClass: _vm._$s(4, "sc", "rpItem"),
            class: _vm._$s(4, "c", _vm.index == 1 ? "active" : ""),
            attrs: { _i: 4 },
            on: {
              click: function($event) {
                return _vm.changeType(1, "average")
              }
            }
          }),
          _c("view", {
            staticClass: _vm._$s(5, "sc", "rpItem"),
            class: _vm._$s(5, "c", _vm.index == 2 ? "active" : ""),
            attrs: { _i: 5 },
            on: {
              click: function($event) {
                return _vm.changeType(2, "specify")
              }
            }
          }),
          _c("view", {
            staticClass: _vm._$s(6, "sc", "rpItem"),
            class: _vm._$s(6, "c", _vm.index == 3 ? "active" : ""),
            attrs: { _i: 6 },
            on: {
              click: function($event) {
                return _vm.changeType(3, "heartbeat")
              }
            }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(7, "sc", "rpForm"),
          style: _vm._$s(7, "s", { left: -_vm.index * 100 + "vw" }),
          attrs: { _i: 7 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(8, "sc", "rpFromItem"), attrs: { _i: 8 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(9, "sc", "formItem"), attrs: { _i: 9 } },
                [
                  _c("view", {
                    staticClass: _vm._$s(10, "sc", "rpLabel"),
                    attrs: { _i: 10 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.money,
                        expression: "redpacket.money"
                      }
                    ],
                    staticClass: _vm._$s(11, "sc", "rpInput"),
                    attrs: { _i: 11 },
                    domProps: {
                      value: _vm._$s(11, "v-model", _vm.redpacket.money)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "money", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(12, "sc", "formItem"),
                  attrs: { _i: 12 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(13, "sc", "rpLabel"),
                    attrs: { _i: 13 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.count,
                        expression: "redpacket.count"
                      }
                    ],
                    staticClass: _vm._$s(14, "sc", "rpInput"),
                    attrs: { _i: 14 },
                    domProps: {
                      value: _vm._$s(14, "v-model", _vm.redpacket.count)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "count", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "formItem"),
                  attrs: { _i: 15 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(16, "sc", "rpLabel"),
                    attrs: { _i: 16 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.msg,
                        expression: "redpacket.msg"
                      }
                    ],
                    staticClass: _vm._$s(17, "sc", "rpInput"),
                    attrs: {
                      placeholder: _vm._$s(
                        17,
                        "a-placeholder",
                        _vm.defaultRedpackWord["random"]
                      ),
                      _i: 17
                    },
                    domProps: {
                      value: _vm._$s(17, "v-model", _vm.redpacket.msg)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "msg", $event.target.value)
                      }
                    }
                  })
                ]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(18, "sc", "rpFromItem"), attrs: { _i: 18 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(19, "sc", "formItem"),
                  attrs: { _i: 19 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(20, "sc", "rpLabel"),
                    attrs: { _i: 20 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.money,
                        expression: "redpacket.money"
                      }
                    ],
                    staticClass: _vm._$s(21, "sc", "rpInput"),
                    attrs: { _i: 21 },
                    domProps: {
                      value: _vm._$s(21, "v-model", _vm.redpacket.money)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "money", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(22, "sc", "formItem"),
                  attrs: { _i: 22 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(23, "sc", "rpLabel"),
                    attrs: { _i: 23 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.count,
                        expression: "redpacket.count"
                      }
                    ],
                    staticClass: _vm._$s(24, "sc", "rpInput"),
                    attrs: { _i: 24 },
                    domProps: {
                      value: _vm._$s(24, "v-model", _vm.redpacket.count)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "count", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(25, "sc", "formItem"),
                  attrs: { _i: 25 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(26, "sc", "rpLabel"),
                    attrs: { _i: 26 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.msg,
                        expression: "redpacket.msg"
                      }
                    ],
                    staticClass: _vm._$s(27, "sc", "rpInput"),
                    attrs: {
                      placeholder: _vm._$s(
                        27,
                        "a-placeholder",
                        _vm.defaultRedpackWord["average"]
                      ),
                      _i: 27
                    },
                    domProps: {
                      value: _vm._$s(27, "v-model", _vm.redpacket.msg)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "msg", $event.target.value)
                      }
                    }
                  })
                ]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(28, "sc", "rpFromItem"), attrs: { _i: 28 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(29, "sc", "formItem"),
                  attrs: { _i: 29 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(30, "sc", "rpLabel"),
                    attrs: { _i: 30 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.money,
                        expression: "redpacket.money"
                      }
                    ],
                    staticClass: _vm._$s(31, "sc", "rpInput"),
                    attrs: { _i: 31 },
                    domProps: {
                      value: _vm._$s(31, "v-model", _vm.redpacket.money)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "money", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(32, "sc", "formItem no-flex"),
                  attrs: { _i: 32 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(33, "sc", "formItem"),
                      attrs: { _i: 33 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(34, "sc", "rpLabel"),
                        attrs: { _i: 34 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            35,
                            "sc",
                            "rpInput avatarItemBox"
                          ),
                          attrs: { _i: 35 }
                        },
                        _vm._l(
                          _vm._$s(36, "f", { forItems: _vm.checkedUserAvatar }),
                          function(item, index, $20, $30) {
                            return _c(
                              "view",
                              {
                                key: _vm._$s(36, "f", {
                                  forIndex: $20,
                                  key: index
                                }),
                                staticClass: _vm._$s(
                                  "36-" + $30,
                                  "sc",
                                  "avatarItem"
                                ),
                                attrs: { _i: "36-" + $30 }
                              },
                              [
                                _c("image", {
                                  staticClass: _vm._$s(
                                    "37-" + $30,
                                    "sc",
                                    "avatarItem"
                                  ),
                                  attrs: {
                                    src: _vm._$s("37-" + $30, "a-src", item),
                                    _i: "37-" + $30
                                  }
                                })
                              ]
                            )
                          }
                        ),
                        0
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(38, "sc", "userListBox"),
                      attrs: { _i: 38 }
                    },
                    [
                      _c(
                        "checkbox-group",
                        {
                          staticClass: _vm._$s(39, "sc", "userList"),
                          attrs: { _i: 39 },
                          on: { change: _vm.selectUser }
                        },
                        _vm._l(
                          _vm._$s(40, "f", { forItems: _vm.users }),
                          function(item, index, $21, $31) {
                            return _c(
                              "label",
                              {
                                key: _vm._$s(40, "f", {
                                  forIndex: $21,
                                  key: index
                                }),
                                staticClass: _vm._$s(
                                  "40-" + $31,
                                  "sc",
                                  "userItem"
                                ),
                                attrs: { _i: "40-" + $31 }
                              },
                              [
                                _c("view", [
                                  _c("checkbox", {
                                    attrs: {
                                      value: _vm._$s(
                                        "42-" + $31,
                                        "a-value",
                                        item.userName + "," + item.userAvatarURL
                                      ),
                                      checked: _vm._$s(
                                        "42-" + $31,
                                        "a-checked",
                                        item.checked
                                      ),
                                      _i: "42-" + $31
                                    }
                                  })
                                ]),
                                _c("view", [
                                  _vm._v(
                                    _vm._$s(
                                      "43-" + $31,
                                      "t0-0",
                                      _vm._s(item.userName)
                                    )
                                  )
                                ])
                              ]
                            )
                          }
                        ),
                        0
                      )
                    ]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(44, "sc", "formItem"),
                  attrs: { _i: 44 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(45, "sc", "rpLabel"),
                    attrs: { _i: 45 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.count,
                        expression: "redpacket.count"
                      }
                    ],
                    staticClass: _vm._$s(46, "sc", "rpInput"),
                    attrs: { _i: 46 },
                    domProps: {
                      value: _vm._$s(46, "v-model", _vm.redpacket.count)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "count", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(47, "sc", "formItem"),
                  attrs: { _i: 47 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(48, "sc", "rpLabel"),
                    attrs: { _i: 48 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.msg,
                        expression: "redpacket.msg"
                      }
                    ],
                    staticClass: _vm._$s(49, "sc", "rpInput"),
                    attrs: {
                      placeholder: _vm._$s(
                        49,
                        "a-placeholder",
                        _vm.defaultRedpackWord["specify"]
                      ),
                      _i: 49
                    },
                    domProps: {
                      value: _vm._$s(49, "v-model", _vm.redpacket.msg)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "msg", $event.target.value)
                      }
                    }
                  })
                ]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(50, "sc", "rpFromItem"), attrs: { _i: 50 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(51, "sc", "formItem"),
                  attrs: { _i: 51 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(52, "sc", "rpLabel"),
                    attrs: { _i: 52 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.money,
                        expression: "redpacket.money"
                      }
                    ],
                    staticClass: _vm._$s(53, "sc", "rpInput"),
                    attrs: { _i: 53 },
                    domProps: {
                      value: _vm._$s(53, "v-model", _vm.redpacket.money)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "money", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(54, "sc", "formItem"),
                  attrs: { _i: 54 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(55, "sc", "rpLabel"),
                    attrs: { _i: 55 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.count,
                        expression: "redpacket.count"
                      }
                    ],
                    staticClass: _vm._$s(56, "sc", "rpInput"),
                    attrs: { _i: 56 },
                    domProps: {
                      value: _vm._$s(56, "v-model", _vm.redpacket.count)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "count", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(57, "sc", "formItem"),
                  attrs: { _i: 57 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(58, "sc", "rpLabel"),
                    attrs: { _i: 58 }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redpacket.msg,
                        expression: "redpacket.msg"
                      }
                    ],
                    staticClass: _vm._$s(59, "sc", "rpInput"),
                    attrs: {
                      placeholder: _vm._$s(
                        59,
                        "a-placeholder",
                        _vm.defaultRedpackWord["heartbeat"]
                      ),
                      _i: 59
                    },
                    domProps: {
                      value: _vm._$s(59, "v-model", _vm.redpacket.msg)
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.redpacket, "msg", $event.target.value)
                      }
                    }
                  })
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(60, "sc", "btnGroup"), attrs: { _i: 60 } },
        [
          _c("view", {
            staticClass: _vm._$s(61, "sc", "btn warning"),
            attrs: { _i: 61 },
            on: {
              click: function($event) {
                return _vm.send(false)
              }
            }
          }),
          _c("view", {
            staticClass: _vm._$s(62, "sc", "btn success"),
            attrs: { _i: 62 },
            on: {
              click: function($event) {
                return _vm.send(true)
              }
            }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 46 */
/*!***************************************************************************!*\
  !*** E:/pwl/pages/chat/redpacket.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./redpacket.vue?vue&type=script&lang=js&mpType=page */ 47);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStpQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZHBhY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVkcGFja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/chat/redpacket.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { apiKey: \"\", index: 0, left: 25, redpacket: { type: \"\", money: 32, count: 2, msg: \"\", recivers: [] }, defaultRedpackWord: { random: '摸鱼者，事竟成！', average: '平分红包，人人有份！', specify: '试试看，这是给你的红包吗？', heartbeat: '玩的就是心跳！' }, users: [], checkedUserAvatar: [] };}, onLoad: function onLoad(option) {this.apiKey = option.apiKey;}, created: function created() {var users = uni.getStorageSync('users');if (users) {users = JSON.parse(users);users.forEach(function (item) {item.checked = false;});this.users = users;}__f__(\"log\", users, \" at pages/chat/redpacket.vue:139\");}, methods: { send: function send(isOne) {var data = this.redpacket;if (data.money < 32) {uni.showToast({ title: '太抠了！至少要发32积分', icon: \"none\", duration: 2000 });return;} else {if (data.money > 20000) {data.money = 2000;}}if (data.count < 1) {uni.showToast({ title: '太抠了！至少要发1个', icon: \"none\", duration: 2000 });return;}if (data.type == \"specify\" && data.recivers.length < 1) {uni.showToast({ title: '专属红包至少要选1人', icon: \"none\", duration: 2000 });return;}if (data.msg == \"\") {data.msg = this.defaultRedpackWord[data.type];}var msg = \"[redpacket]\".concat(JSON.stringify(data), \"[/redpacket]\");if (isOne) {this.sendMsg(msg);} else {for (var i = 0; i < 10; i++) {this.sendMsg(msg);}}uni.navigateBack({ delta: 1, animationType: 'pop-out', animationDuration: 200 });}, sendMsg: function sendMsg(msg) {(0, _api.send)({ content: msg, apiKey: this.apiKey });}, selectUser: function selectUser(e) {var list = e.detail.value;var recivers = [];var checkedUserAvatar = [];list.forEach(function (item) {\n        var items = item.split(\",\");\n        recivers.push(items[0]);\n        var avatar = encodeURI(items[1]);\n        avatar = btoa(avatar);\n        checkedUserAvatar.push(\"https://pwl.yuis.cc/GetImage?url=\".concat(avatar));\n      });\n      this.redpacket.recivers = recivers;\n      this.redpacket.count = recivers.length;\n      this.checkedUserAvatar = checkedUserAvatar;\n      // console.log(e.detail.value)\n    },\n    changeType: function changeType(value, type) {\n      this.index = value;\n      this.redpacket.type = type;\n      if (type == \"specify\") {\n        this.redpacket.count = this.redpacket.count.length;\n      } else {\n        this.redpacket.count = 2;\n      }\n      // this.redpacket.msg = this.defaultRedpackWord[type];\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9yZWRwYWNrZXQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvR0EsNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUdBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsVUFEQSxFQUVBLFFBRkEsRUFHQSxRQUhBLEVBSUEsYUFDQSxRQURBLEVBRUEsU0FGQSxFQUdBLFFBSEEsRUFJQSxPQUpBLEVBS0EsWUFMQSxFQUpBLEVBV0Esc0JBQ0Esa0JBREEsRUFFQSxxQkFGQSxFQUdBLHdCQUhBLEVBSUEsb0JBSkEsRUFYQSxFQWlCQSxTQWpCQSxFQWtCQSxxQkFsQkEsR0FvQkEsQ0F0QkEsRUF1QkEsTUF2QkEsa0JBdUJBLE1BdkJBLEVBdUJBLENBQ0EsNEJBQ0EsQ0F6QkEsRUEwQkEsT0ExQkEscUJBMEJBLENBQ0Esd0NBQ0EsWUFDQSwwQkFDQSwrQkFDQSxxQkFDQSxDQUZBLEVBR0EsbUJBQ0EsQ0FDQSx3REFDQSxDQXBDQSxFQXFDQSxXQUNBLElBREEsZ0JBQ0EsS0FEQSxFQUNBLENBQ0EsMEJBQ0Esc0JBQ0EsZ0JBQ0EscUJBREEsRUFFQSxZQUZBLEVBR0EsY0FIQSxJQUtBLE9BQ0EsQ0FQQSxNQU9BLENBQ0EseUJBQ0Esa0JBQ0EsQ0FDQSxDQUNBLHFCQUNBLGdCQUNBLG1CQURBLEVBRUEsWUFGQSxFQUdBLGNBSEEsSUFLQSxPQUNBLENBQ0EseURBQ0EsZ0JBQ0EsbUJBREEsRUFFQSxZQUZBLEVBR0EsY0FIQSxJQUtBLE9BQ0EsQ0FDQSxxQkFDQSw4Q0FDQSxDQUNBLHFFQUNBLFlBQ0Esa0JBQ0EsQ0FGQSxNQUVBLENBQ0EsOEJBQ0Esa0JBQ0EsQ0FDQSxDQUNBLG1CQUNBLFFBREEsRUFFQSx3QkFGQSxFQUdBLHNCQUhBLElBS0EsQ0EvQ0EsRUFnREEsT0FoREEsbUJBZ0RBLEdBaERBLEVBZ0RBLENBQ0EsaUJBQ0EsWUFEQSxFQUVBLG1CQUZBLElBSUEsQ0FyREEsRUFzREEsVUF0REEsc0JBc0RBLENBdERBLEVBc0RBLENBQ0EsMEJBQ0Esa0JBQ0EsMkJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0RUE7QUF1RUEsY0F2RUEsc0JBdUVBLEtBdkVBLEVBdUVBLElBdkVBLEVBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhGQSxFQXJDQSxFIiwiZmlsZSI6IjQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicmVkcGFja2V0Qm94XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInJwVGl0bGVcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3JkZXJMaW5lXCIgOnN0eWxlPVwie2xlZnQ6aW5kZXggKiAyNSArIDIuNSArICclJ31cIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBJdGVtXCIgQGNsaWNrPVwiY2hhbmdlVHlwZSgwLCdyYW5kb20nKVwiIDpjbGFzcz1cImluZGV4ID09IDAgPyAnYWN0aXZlJyA6ICcnXCI+5ou85omL5rCU57qi5YyFPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJwSXRlbVwiIEBjbGljaz1cImNoYW5nZVR5cGUoMSwnYXZlcmFnZScpXCIgOmNsYXNzPVwiaW5kZXggPT0gMSA/ICdhY3RpdmUnIDogJydcIj7mma7pgJrnuqLljIU8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBJdGVtXCIgQGNsaWNrPVwiY2hhbmdlVHlwZSgyLCdzcGVjaWZ5JylcIiA6Y2xhc3M9XCJpbmRleCA9PSAyID8gJ2FjdGl2ZScgOiAnJ1wiPuS4k+Wxnue6ouWMhTwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJycEl0ZW1cIiBAY2xpY2s9XCJjaGFuZ2VUeXBlKDMsJ2hlYXJ0YmVhdCcpXCIgOmNsYXNzPVwiaW5kZXggPT0gMyA/ICdhY3RpdmUnIDogJydcIj7lv4Pot7PnuqLljIU8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInJwRm9ybVwiIDpzdHlsZT1cIntsZWZ0OiAtaW5kZXggKiAxMDAgKyAndncnfVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJwRnJvbUl0ZW1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwTGFiZWxcIj7np6/liIY6PC92aWV3PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwicmVkcGFja2V0Lm1vbmV5XCIgY2xhc3M9XCJycElucHV0XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtSXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+5Liq5pWwOjwvdmlldz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInJlZHBhY2tldC5jb3VudFwiIGNsYXNzPVwicnBJbnB1dFwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBMYWJlbFwiPueVmeiogDo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwicmVkcGFja2V0Lm1zZ1wiIDpwbGFjZWhvbGRlcj1cImRlZmF1bHRSZWRwYWNrV29yZFsncmFuZG9tJ11cIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInJwSW5wdXRcIiBtYXhsZW5ndGg9XCIxMlwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBGcm9tSXRlbVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBMYWJlbFwiPuenr+WIhjo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubW9uZXlcIiBjbGFzcz1cInJwSW5wdXRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwTGFiZWxcIj7kuKrmlbA6PC92aWV3PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwicmVkcGFja2V0LmNvdW50XCIgY2xhc3M9XCJycElucHV0XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtSXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+55WZ6KiAOjwvdmlldz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubXNnXCIgOnBsYWNlaG9sZGVyPVwiZGVmYXVsdFJlZHBhY2tXb3JkWydhdmVyYWdlJ11cIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInJwSW5wdXRcIiBtYXhsZW5ndGg9XCIxMlwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBGcm9tSXRlbVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBMYWJlbFwiPuenr+WIhjo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubW9uZXlcIiBjbGFzcz1cInJwSW5wdXRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtIG5vLWZsZXhcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+5Y+R57uZ6LCBOjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycElucHV0IGF2YXRhckl0ZW1Cb3hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImF2YXRhckl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBjaGVja2VkVXNlckF2YXRhclwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBjbGFzcz1cImF2YXRhckl0ZW1cIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyTGlzdEJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8Y2hlY2tib3gtZ3JvdXAgQGNoYW5nZT1cInNlbGVjdFVzZXJcIiBjbGFzcz1cInVzZXJMaXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwidXNlckl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiB1c2Vyc1wiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxjaGVja2JveCA6dmFsdWU9XCJpdGVtLnVzZXJOYW1lICsgJywnICsgaXRlbS51c2VyQXZhdGFyVVJMXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6Y2hlY2tlZD1cIml0ZW0uY2hlY2tlZFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz57e2l0ZW0udXNlck5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L2NoZWNrYm94LWdyb3VwPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwTGFiZWxcIj7kuKrmlbA6PC92aWV3PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwicmVkcGFja2V0LmNvdW50XCIgZGlzYWJsZWQgY2xhc3M9XCJycElucHV0XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtSXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+55WZ6KiAOjwvdmlldz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubXNnXCIgOnBsYWNlaG9sZGVyPVwiZGVmYXVsdFJlZHBhY2tXb3JkWydzcGVjaWZ5J11cIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInJwSW5wdXRcIiBtYXhsZW5ndGg9XCIxMlwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBGcm9tSXRlbVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBMYWJlbFwiPuenr+WIhjo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubW9uZXlcIiBjbGFzcz1cInJwSW5wdXRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwTGFiZWxcIj7kuKrmlbA6PC92aWV3PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwicmVkcGFja2V0LmNvdW50XCIgY2xhc3M9XCJycElucHV0XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtSXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+55WZ6KiAOjwvdmlldz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubXNnXCIgOnBsYWNlaG9sZGVyPVwiZGVmYXVsdFJlZHBhY2tXb3JkWydoZWFydGJlYXQnXVwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwicnBJbnB1dFwiIG1heGxlbmd0aD1cIjEyXCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYnRuR3JvdXBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJidG4gd2FybmluZ1wiIEBjbGljaz1cInNlbmQoZmFsc2UpXCI+5Y2B6L+e5Y+RPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ0biBzdWNjZXNzXCIgQGNsaWNrPVwic2VuZCh0cnVlKVwiPuWPkemAgTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRzZW5kXHJcblx0fSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRhcGlLZXk6IFwiXCIsXHJcblx0XHRcdFx0aW5kZXg6IDAsXHJcblx0XHRcdFx0bGVmdDogMjUsXHJcblx0XHRcdFx0cmVkcGFja2V0OiB7XHJcblx0XHRcdFx0XHR0eXBlOiBcIlwiLFxyXG5cdFx0XHRcdFx0bW9uZXk6IDMyLFxyXG5cdFx0XHRcdFx0Y291bnQ6IDIsXHJcblx0XHRcdFx0XHRtc2c6IFwiXCIsXHJcblx0XHRcdFx0XHRyZWNpdmVyczogW11cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGRlZmF1bHRSZWRwYWNrV29yZDoge1xyXG5cdFx0XHRcdFx0cmFuZG9tOiAn5pG46bG86ICF77yM5LqL56uf5oiQ77yBJyxcclxuXHRcdFx0XHRcdGF2ZXJhZ2U6ICflubPliIbnuqLljIXvvIzkurrkurrmnInku73vvIEnLFxyXG5cdFx0XHRcdFx0c3BlY2lmeTogJ+ivleivleeci++8jOi/meaYr+e7meS9oOeahOe6ouWMheWQl++8nycsXHJcblx0XHRcdFx0XHRoZWFydGJlYXQ6ICfnjqnnmoTlsLHmmK/lv4Pot7PvvIEnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR1c2VyczogW10sXHJcblx0XHRcdFx0Y2hlY2tlZFVzZXJBdmF0YXI6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9uKSB7XHJcblx0XHRcdHRoaXMuYXBpS2V5ID0gb3B0aW9uLmFwaUtleTtcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRsZXQgdXNlcnMgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJzJylcclxuXHRcdFx0aWYgKHVzZXJzKSB7XHJcblx0XHRcdFx0dXNlcnMgPSBKU09OLnBhcnNlKHVzZXJzKVxyXG5cdFx0XHRcdHVzZXJzLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMudXNlcnMgPSB1c2VycztcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyh1c2VycylcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHNlbmQoaXNPbmUpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHRoaXMucmVkcGFja2V0O1xyXG5cdFx0XHRcdGlmIChkYXRhLm1vbmV5IDwgMzIpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+WkquaKoOS6hu+8geiHs+WwkeimgeWPkTMy56ev5YiGJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGRhdGEubW9uZXkgPiAyMDAwMCkge1xyXG5cdFx0XHRcdFx0XHRkYXRhLm1vbmV5ID0gMjAwMFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZGF0YS5jb3VudCA8IDEpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+WkquaKoOS6hu+8geiHs+WwkeimgeWPkTHkuKonLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZGF0YS50eXBlID09IFwic3BlY2lmeVwiICYmIGRhdGEucmVjaXZlcnMubGVuZ3RoIDwgMSkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5LiT5bGe57qi5YyF6Iez5bCR6KaB6YCJMeS6uicsXHJcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkYXRhLm1zZyA9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRkYXRhLm1zZyA9IHRoaXMuZGVmYXVsdFJlZHBhY2tXb3JkW2RhdGEudHlwZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBtc2cgPSBgW3JlZHBhY2tldF0ke0pTT04uc3RyaW5naWZ5KGRhdGEpfVsvcmVkcGFja2V0XWBcclxuXHRcdFx0XHRpZiAoaXNPbmUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VuZE1zZyhtc2cpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlbmRNc2cobXNnKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogJ3BvcC1vdXQnLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uRHVyYXRpb246IDIwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbmRNc2cobXNnKSB7XHJcblx0XHRcdFx0c2VuZCh7XHJcblx0XHRcdFx0XHRjb250ZW50OiBtc2csXHJcblx0XHRcdFx0XHRhcGlLZXk6IHRoaXMuYXBpS2V5XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VsZWN0VXNlcihlKSB7XHJcblx0XHRcdFx0bGV0IGxpc3QgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0XHRsZXQgcmVjaXZlcnMgPSBbXTtcclxuXHRcdFx0XHRsZXQgY2hlY2tlZFVzZXJBdmF0YXIgPSBbXTtcclxuXHJcblx0XHRcdFx0bGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGl0ZW1zID0gaXRlbS5zcGxpdChcIixcIilcclxuXHRcdFx0XHRcdHJlY2l2ZXJzLnB1c2goaXRlbXNbMF0pXHJcblx0XHRcdFx0XHRsZXQgYXZhdGFyID0gZW5jb2RlVVJJKGl0ZW1zWzFdKVxyXG5cdFx0XHRcdFx0YXZhdGFyID0gYnRvYShhdmF0YXIpO1xyXG5cdFx0XHRcdFx0Y2hlY2tlZFVzZXJBdmF0YXIucHVzaChgaHR0cHM6Ly9wd2wueXVpcy5jYy9HZXRJbWFnZT91cmw9JHthdmF0YXJ9YClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMucmVkcGFja2V0LnJlY2l2ZXJzID0gcmVjaXZlcnM7XHJcblx0XHRcdFx0dGhpcy5yZWRwYWNrZXQuY291bnQgPSByZWNpdmVycy5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5jaGVja2VkVXNlckF2YXRhciA9IGNoZWNrZWRVc2VyQXZhdGFyO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VUeXBlKHZhbHVlLCB0eXBlKSB7XHJcblx0XHRcdFx0dGhpcy5pbmRleCA9IHZhbHVlO1xyXG5cdFx0XHRcdHRoaXMucmVkcGFja2V0LnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdGlmICh0eXBlID09IFwic3BlY2lmeVwiKSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlZHBhY2tldC5jb3VudCA9IHRoaXMucmVkcGFja2V0LmNvdW50Lmxlbmd0aDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5yZWRwYWNrZXQuY291bnQgPSAyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyB0aGlzLnJlZHBhY2tldC5tc2cgPSB0aGlzLmRlZmF1bHRSZWRwYWNrV29yZFt0eXBlXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQucmVkcGFja2V0Qm94IHtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzZTQzO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQucnBUaXRsZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0fVxyXG5cclxuXHQucnBJdGVtIHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHR9XHJcblxyXG5cdC5ib3JkZXJMaW5lIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMzVweDtcclxuXHRcdHdpZHRoOiAyMCU7XHJcblx0XHRoZWlnaHQ6IDRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHR0cmFuc2l0aW9uOiAuMnM7XHJcblx0fVxyXG5cclxuXHQucnBGb3JtIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiA0MDB2dztcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0dHJhbnNpdGlvbjogLjJzO1xyXG5cdH1cclxuXHJcblx0LnJwRnJvbUl0ZW0ge1xyXG5cdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQuZm9ybUl0ZW0ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdG1hcmdpbjogMTBweCAwO1xyXG5cdH1cclxuXHJcblx0LnJwTGFiZWwge1xyXG5cdFx0d2lkdGg6IDYwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxuXHJcblx0LnJwSW5wdXQge1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG5cdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuXHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdC5uby1mbGV4IHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHJcblx0LmF2YXRhckl0ZW1Cb3gge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0fVxyXG5cclxuXHQuYXZhdGFySXRlbSB7XHJcblx0XHR3aWR0aDogMzBweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdG1hcmdpbjogMnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXJMaXN0Qm94IHtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0fVxyXG5cclxuXHQudXNlckxpc3Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHR9XHJcblxyXG5cdC51c2VySXRlbSB7XHJcblx0XHRtaW4td2lkdGg6IDUwJTtcclxuXHRcdG1heC13aWR0aDogNTAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYnRuR3JvdXAge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5idG4ge1xyXG5cdFx0d2lkdGg6IDMwdnc7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRtYXJnaW46IDAgMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LnN1Y2Nlc3Mge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzYwYjA0NDtcclxuXHR9XHJcblxyXG5cdC53YXJuaW5nIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNFNkEyM0M7XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!**************************************************!*\
  !*** E:/pwl/pages/chat/userInfo.vue?mpType=page ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page */ 49);\n/* harmony import */ var _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo.vue?vue&type=script&lang=js&mpType=page */ 51);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d81391d2\",\n  null,\n  false,\n  _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/userInfo.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VzZXJJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kODEzOTFkMiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXNlckluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXJJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDgxMzkxZDJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC91c2VySW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!********************************************************************************************!*\
  !*** E:/pwl/pages/chat/userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page */ 50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 50 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/chat/userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "userInfo-box"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "user-background"), attrs: { _i: 1 } },
        [
          _c("image", {
            staticClass: _vm._$s(2, "sc", "user-bg"),
            attrs: { src: _vm._$s(2, "a-src", _vm.userInfo.cardBg), _i: 2 }
          }),
          _c("image", {
            staticClass: _vm._$s(3, "sc", "user-avatar"),
            attrs: {
              src: _vm._$s(3, "a-src", _vm.userInfo.userAvatarURL),
              _i: 3
            }
          }),
          _vm._$s(4, "i", _vm.userInfo.userNickname)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(4, "sc", "user-name"),
                  attrs: { _i: 4 }
                },
                [
                  _vm._v(
                    _vm._$s(4, "t0-0", _vm._s(_vm.userInfo.userNickname)) +
                      _vm._$s(4, "t0-1", _vm._s(_vm.userInfo.userName))
                  )
                ]
              )
            : _c(
                "view",
                {
                  staticClass: _vm._$s(5, "sc", "user-name"),
                  attrs: { _i: 5 }
                },
                [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.userInfo.userName)))]
              )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "user-detail-box"), attrs: { _i: 6 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(7, "sc", "user-cell"), attrs: { _i: 7 } },
            [
              _c("view", {
                staticClass: _vm._$s(8, "sc", "user-cell-label"),
                attrs: { _i: 8 }
              }),
              _c("view", [
                _vm._v(_vm._$s(9, "t0-0", _vm._s(_vm.userInfo.userNo)))
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(10, "sc", "user-cell"), attrs: { _i: 10 } },
            [
              _c("view", {
                staticClass: _vm._$s(11, "sc", "user-cell-label"),
                attrs: { _i: 11 }
              }),
              _c("view", [
                _vm._v(_vm._$s(12, "t0-0", _vm._s(_vm.userInfo.userIntro)))
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(13, "sc", "user-cell"), attrs: { _i: 13 } },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "user-cell-label"),
                attrs: { _i: 14 }
              }),
              _c("view", [
                _vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.userInfo.userRole)))
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(16, "sc", "user-cell"), attrs: { _i: 16 } },
            [
              _c("view", {
                staticClass: _vm._$s(17, "sc", "user-cell-label"),
                attrs: { _i: 17 }
              }),
              _c("view", [
                _vm._v(_vm._$s(18, "t0-0", _vm._s(_vm.userInfo.userCity)))
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(19, "sc", "user-cell"), attrs: { _i: 19 } },
            [
              _c("view", {
                staticClass: _vm._$s(20, "sc", "user-cell-label"),
                attrs: { _i: 20 }
              }),
              _c("view", [
                _vm._v(
                  _vm._$s(
                    21,
                    "t0-0",
                    _vm._s(_vm.userInfo.userAppRole == 0 ? "黑客" : "画家")
                  )
                )
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(22, "sc", "user-cell"), attrs: { _i: 22 } },
            [
              _c("view", {
                staticClass: _vm._$s(23, "sc", "user-cell-label"),
                attrs: { _i: 23 }
              }),
              _c("view", [
                _vm._v(_vm._$s(24, "t0-0", _vm._s(_vm.userInfo.userPoint)))
              ])
            ]
          ),
          _vm._$s(25, "i", _vm.userInfo.sysMetal)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(25, "sc", "user-cell user-sysMetal"),
                  attrs: { _i: 25 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(26, "sc", "user-cell-label"),
                    attrs: { _i: 26 }
                  }),
                  _vm._l(
                    _vm._$s(27, "f", { forItems: _vm.userInfo.sysMetal.list }),
                    function(item, index, $20, $30) {
                      return [
                        _vm._$s("28-" + $30, "i", item.enabled)
                          ? _c("image", {
                              key: _vm._$s(27, "f", {
                                forIndex: $20,
                                keyIndex: 0,
                                key: 27 + "-0" + $30
                              }),
                              staticClass: _vm._$s(
                                "28-" + $30,
                                "sc",
                                "sysMetal"
                              ),
                              attrs: {
                                src: _vm._$s(
                                  "28-" + $30,
                                  "a-src",
                                  "https://unv-shield.librian.net/api/unv_shield?scale=0.79&txt=" +
                                    item.name +
                                    "&" +
                                    item.attr
                                ),
                                _i: "28-" + $30
                              }
                            })
                          : _vm._e()
                      ]
                    }
                  )
                ],
                2
              )
            : _vm._e()
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 51 */
/*!**************************************************************************!*\
  !*** E:/pwl/pages/chat/userInfo.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./userInfo.vue?vue&type=script&lang=js&mpType=page */ 52);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThpQixDQUFnQixpbEJBQUcsRUFBQyIsImZpbGUiOiI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXJJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/chat/userInfo.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { user: \"\", userInfo: {} };}, onLoad: function onLoad(option) {__f__(\"log\", option, \" at pages/chat/userInfo.vue:56\");this.user = option.user || \"Yui\";uni.setNavigationBarTitle({ title: this.user + \"的个人信息\" });this.getInfo();}, methods: { getInfo: function getInfo() {var _this = this;(0, _api.getUserInfo)(this.user).then(function (res) {if (res.cardBg == \"\") {res.cardBg = \"https://pwl.stackoverflow.wiki/2021/11/32ceecb7798ea1fa-82bd6ec7.jpg\";}if (res.sysMetal) {res.sysMetal = JSON.parse(res.sysMetal);} // url=https://pwl.stackoverflow.wiki/2021/12/metaldev-db507262.png&backcolor=483d8b&fontcolor=f8f8ff\n        // https://unv-shield.librian.net/api/unv_shield?scale=0.79&txt=开发&\n        _this.userInfo = res;__f__(\"log\", _this.userInfo, \" at pages/chat/userInfo.vue:83\");});} } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC91c2VySW5mby52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0EsNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFHQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLFFBREEsRUFFQSxZQUZBLEdBSUEsQ0FOQSxFQU9BLE1BUEEsa0JBT0EsTUFQQSxFQU9BLENBQ0EsdURBQ0EsaUNBQ0EsNEJBQ0EsMEJBREEsSUFHQSxlQUNBLENBZEEsRUFlQSxXQUNBLE9BREEscUJBQ0Esa0JBQ0Esc0RBQ0EsdUJBQ0Esb0ZBQ0EsQ0FTQSxtQkFDQSx3Q0FDQSxDQWRBLENBZUE7QUFDQTtBQUNBLDZCQUNBLCtEQUNBLENBbkJBLEVBb0JBLENBdEJBLEVBZkEsRSIsImZpbGUiOiI1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVzZXJJbmZvLWJveFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWJhY2tncm91bmRcIj5cclxuXHRcdFx0PGltYWdlIDpzcmM9XCJ1c2VySW5mby5jYXJkQmdcIiBjbGFzcz1cInVzZXItYmdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdDxpbWFnZSA6c3JjPVwidXNlckluZm8udXNlckF2YXRhclVSTFwiIGNsYXNzPVwidXNlci1hdmF0YXJcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1uYW1lXCIgdi1pZj1cInVzZXJJbmZvLnVzZXJOaWNrbmFtZVwiPnt7dXNlckluZm8udXNlck5pY2tuYW1lfX0oe3t1c2VySW5mby51c2VyTmFtZX19KTwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWVcIiB2LWVsc2U+e3t1c2VySW5mby51c2VyTmFtZX19PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWRldGFpbC1ib3hcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWNlbGxcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbC1sYWJlbFwiPuaRuOmxvOWPt++8mjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz57e3VzZXJJbmZvLnVzZXJOb319PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWNlbGwtbGFiZWxcIj7nrb7lkI3vvJo8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+e3t1c2VySW5mby51c2VySW50cm99fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+55So5oi357uE77yaPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7dXNlckluZm8udXNlclJvbGV9fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+5Z+O5biC77yaPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7dXNlckluZm8udXNlckNpdHl9fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+6KeS6Imy77yaPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7dXNlckluZm8udXNlckFwcFJvbGUgPT0gMCA/ICfpu5HlrqInIDogJ+eUu+Wutid9fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+56ev5YiG77yaPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7dXNlckluZm8udXNlclBvaW50fX08L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWNlbGwgdXNlci1zeXNNZXRhbFwiIHYtaWY9XCJ1c2VySW5mby5zeXNNZXRhbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+5YuL56ug77yaPC92aWV3PlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiB1c2VySW5mby5zeXNNZXRhbC5saXN0XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJzeXNNZXRhbFwiIDpzcmM9XCInaHR0cHM6Ly91bnYtc2hpZWxkLmxpYnJpYW4ubmV0L2FwaS91bnZfc2hpZWxkP3NjYWxlPTAuNzkmdHh0PScgKyBpdGVtLm5hbWUrJyYnICsgaXRlbS5hdHRyXCIgdi1pZj1cIml0ZW0uZW5hYmxlZFwiIG1vZGU9XCJoZWlnaHRGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRnZXRVc2VySW5mb1xyXG5cdH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dXNlcjpcIlwiLFxyXG5cdFx0XHRcdHVzZXJJbmZvOnt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9uKXtcclxuXHRcdFx0Y29uc29sZS5sb2cob3B0aW9uKVxyXG5cdFx0XHR0aGlzLnVzZXIgPSBvcHRpb24udXNlciB8fCBcIll1aVwiO1xyXG5cdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHR0aXRsZTogdGhpcy51c2VyICsgXCLnmoTkuKrkurrkv6Hmga9cIlxyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLmdldEluZm8oKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRnZXRJbmZvKCl7XHJcblx0XHRcdFx0Z2V0VXNlckluZm8odGhpcy51c2VyKS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0aWYocmVzLmNhcmRCZyA9PSBcIlwiKXtcclxuXHRcdFx0XHRcdFx0cmVzLmNhcmRCZyA9IFwiaHR0cHM6Ly9wd2wuc3RhY2tvdmVyZmxvdy53aWtpLzIwMjEvMTEvMzJjZWVjYjc3OThlYTFmYS04MmJkNmVjNy5qcGdcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0XHRsZXQgYmcgPSBlbmNvZGVVUkkocmVzLmNhcmRCZylcclxuXHRcdFx0XHRcdGJnID0gYnRvYShiZylcclxuXHRcdFx0XHRcdGxldCBhdmF0YXIgPSBlbmNvZGVVUkkocmVzLnVzZXJBdmF0YXJVUkwpXHJcblx0XHRcdFx0XHRhdmF0YXIgPSBidG9hKGF2YXRhcilcclxuXHRcdFx0XHRcdHJlcy5jYXJkQmcgPSBcImh0dHBzOi8vcHdsLnl1aXMuY2MvR2V0SW1hZ2U/dXJsPVwiICsgYmdcclxuXHRcdFx0XHRcdHJlcy51c2VyQXZhdGFyVVJMID0gXCJodHRwczovL3B3bC55dWlzLmNjL0dldEltYWdlP3VybD1cIiArIGF2YXRhclxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRpZihyZXMuc3lzTWV0YWwpe1xyXG5cdFx0XHRcdFx0XHRyZXMuc3lzTWV0YWwgPSBKU09OLnBhcnNlKHJlcy5zeXNNZXRhbClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIHVybD1odHRwczovL3B3bC5zdGFja292ZXJmbG93Lndpa2kvMjAyMS8xMi9tZXRhbGRldi1kYjUwNzI2Mi5wbmcmYmFja2NvbG9yPTQ4M2Q4YiZmb250Y29sb3I9ZjhmOGZmXHJcblx0XHRcdFx0XHQvLyBodHRwczovL3Vudi1zaGllbGQubGlicmlhbi5uZXQvYXBpL3Vudl9zaGllbGQ/c2NhbGU9MC43OSZ0eHQ95byA5Y+RJlxyXG5cdFx0XHRcdFx0dGhpcy51c2VySW5mbyA9IHJlcztcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC51c2VyLWJhY2tncm91bmR7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHQudXNlci1iYWNrZ3JvdW5kOjphZnRlcntcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR6LWluZGV4OiA4MDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBweDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMmRlZykgdHJhbnNsYXRlWSg0MHB4KTtcclxuXHR9XHJcblx0LnVzZXItYmFja2dyb3VuZDo6YmVmb3Jle1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHotaW5kZXg6IDkwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZykgdHJhbnNsYXRlWSg2MHB4KTtcclxuXHR9XHJcblx0LnVzZXItYmd7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMjUwcHg7XHJcblx0fVxyXG5cdC51c2VyLWF2YXRhcntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiA1dnc7XHJcblx0XHRib3R0b206IDV2dztcclxuXHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdHdpZHRoOiA4MHB4O1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdH1cclxuXHQudXNlci1uYW1le1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0cmlnaHQ6IGNhbGMoNXZ3ICsgOTBweCk7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Ym90dG9tOiA1dnc7XHJcblx0XHRwYWRkaW5nOiA1cHggOHB4O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMSk7XHJcblx0fVxyXG5cdC51c2VyLWRldGFpbC1ib3h7XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdH1cclxuXHQudXNlci1jZWxse1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRwYWRkaW5nOiA1cHggMTVweDtcclxuXHRcdGNvbG9yOiAjNjY2O1xyXG5cdH1cclxuXHQudXNlci1jZWxsLWxhYmVse1xyXG5cdFx0d2lkdGg6IDgwcHg7XHJcblx0fVxyXG5cdC51c2VyLWNlbGw6bm90KDpsYXN0LWNoaWxkKXtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xyXG5cdH1cclxuXHQuc3lzTWV0YWx7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!*************************************************!*\
  !*** E:/pwl/pages/chat/setting.vue?mpType=page ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=52952d3c&scoped=true&mpType=page */ 54);\n/* harmony import */ var _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js&mpType=page */ 56);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"52952d3c\",\n  null,\n  false,\n  _setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/setting.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NldHRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyOTUyZDNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTI5NTJkM2NcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC9zZXR0aW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!*******************************************************************************************!*\
  !*** E:/pwl/pages/chat/setting.vue?vue&type=template&id=52952d3c&scoped=true&mpType=page ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=52952d3c&scoped=true&mpType=page */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 55 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/chat/setting.vue?vue&type=template&id=52952d3c&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "cell-list"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "cell-item flex"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "cell-label"),
            attrs: { _i: 2 }
          }),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.setting.JoinChatTime,
                expression: "setting.JoinChatTime"
              }
            ],
            staticClass: _vm._$s(3, "sc", "cell-input"),
            attrs: { _i: 3 },
            domProps: {
              value: _vm._$s(3, "v-model", _vm.setting.JoinChatTime)
            },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.setting, "JoinChatTime", $event.target.value)
              }
            }
          })
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "cell-item"), attrs: { _i: 4 } },
        [
          _c("view", {
            staticClass: _vm._$s(5, "sc", "cell-label"),
            attrs: { _i: 5 }
          }),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.setting.ImageLoadHome,
                expression: "setting.ImageLoadHome"
              }
            ],
            staticClass: _vm._$s(6, "sc", "cell-input"),
            attrs: { _i: 6 },
            domProps: {
              value: _vm._$s(6, "v-model", _vm.setting.ImageLoadHome)
            },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.setting, "ImageLoadHome", $event.target.value)
              }
            }
          }),
          _c("view", { staticClass: _vm._$s(7, "sc", "msg"), attrs: { _i: 7 } })
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "cell-item flex"), attrs: { _i: 8 } },
        [
          _c("view", {
            staticClass: _vm._$s(9, "sc", "cell-label"),
            attrs: { _i: 9 }
          })
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(10, "sc", "cell-item flex"), attrs: { _i: 10 } },
        [
          _c("view", {
            staticClass: _vm._$s(11, "sc", "cell-label"),
            attrs: { _i: 11 }
          })
        ]
      ),
      _vm._$s(12, "i", _vm.canGetLiveness)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(12, "sc", "cell-item flex"),
              attrs: { _i: 12 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(13, "sc", "cell-btn btn-success"),
                attrs: { _i: 13 },
                on: {
                  click: function($event) {
                    return _vm.getLiveness()
                  }
                }
              })
            ]
          )
        : _vm._e(),
      _c(
        "view",
        { staticClass: _vm._$s(14, "sc", "cell-item flex"), attrs: { _i: 14 } },
        [
          _c("view", {
            staticClass: _vm._$s(15, "sc", "cell-btn"),
            attrs: { _i: 15 },
            on: {
              click: function($event) {
                return _vm.logout()
              }
            }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 56 */
/*!*************************************************************************!*\
  !*** E:/pwl/pages/chat/setting.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js&mpType=page */ 57);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZpQixDQUFnQixnbEJBQUcsRUFBQyIsImZpbGUiOiI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/pages/chat/setting.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { setting: { JoinChatTime: 30, ImageLoadHome: \"https://pwl.yuis.cc/GetImage?url=\" }, apiKey: null, canGetLiveness: false };}, onBackPress: function onBackPress(e) {uni.setStorageSync(\"setting\", JSON.stringify(this.setting));}, onLoad: function onLoad(option) {var _this = this;this.apiKey = option.apiKey;if (!this.apiKey) return;(0, _api.checkCollectedLiveness)({ apiKey: this.apiKey }).then(function (res) {if (!res.isCollectedYesterdayLivenessReward) {_this.canGetLiveness = true;}\n    });\n  },\n  methods: {\n    getLiveness: function getLiveness() {\n      (0, _api.getYesterdayLiveness)({\n        apiKey: this.apiKey }).\n      then(function (res) {\n        uni.showToast({\n          title: \"\\u9886\\u53D6\\u6210\\u529F\\uFF0C\\u79EF\\u5206:\" + res.sum,\n          icon: \"none\" });\n\n      });\n    },\n    logout: function logout() {\n      uni.clearStorageSync();\n      getApp().globalData.data = null;\n      getApp().globalData.apiKey = \"\";\n      uni.reLaunch({\n        url: '/pages/index/index' });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9zZXR0aW5nLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBSUEsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxXQUNBLGdCQURBLEVBRUEsa0RBRkEsRUFEQSxFQUtBLFlBTEEsRUFNQSxxQkFOQSxHQVFBLENBVkEsRUFXQSxXQVhBLHVCQVdBLENBWEEsRUFXQSxDQUNBLDREQUNBLENBYkEsRUFjQSxNQWRBLGtCQWNBLE1BZEEsRUFjQSxrQkFDQSw0QkFDQSx5QkFDQSxtQ0FDQSxtQkFEQSxJQUVBLElBRkEsQ0FFQSxnQkFDQSw4Q0FDQSw0QkFDQTtBQUNBLEtBTkE7QUFPQSxHQXhCQTtBQXlCQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsVUFGQSxDQUVBO0FBQ0E7QUFDQSx3RUFEQTtBQUVBLHNCQUZBOztBQUlBLE9BUEE7QUFRQSxLQVZBO0FBV0EsVUFYQSxvQkFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7O0FBR0EsS0FsQkEsRUF6QkEsRSIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNlbGwtbGlzdFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjZWxsLWl0ZW0gZmxleFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNlbGwtbGFiZWxcIj5XZWJTb2NrZXTph43ov57ml7bpl7Qo56eSKTo8L3ZpZXc+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImNlbGwtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgdi1tb2RlbD1cInNldHRpbmcuSm9pbkNoYXRUaW1lXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2VsbC1pdGVtXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2VsbC1sYWJlbFwiPuWbvueJh+ino+aekOaOpeWPozo8L3ZpZXc+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImNlbGwtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgdi1tb2RlbD1cInNldHRpbmcuSW1hZ2VMb2FkSG9tZVwiIC8+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibXNnXCI+UFM66K+35Y+C6ICD5paH5qGj77yM5YiH5Yu/5Lmx5pS544CCPC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjZWxsLWl0ZW0gZmxleFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNlbGwtbGFiZWxcIj7nuqLljIXnmq7ogqQ6KFZJUOS4k+WxnuWKn+iDveW8gOWPkeS4rSk8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNlbGwtaXRlbSBmbGV4XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2VsbC1sYWJlbFwiPuS4u+mimOagt+W8jzooVklQ5LiT5bGe5Yqf6IO95byA5Y+R5LitKTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2VsbC1pdGVtIGZsZXhcIiB2LWlmPVwiY2FuR2V0TGl2ZW5lc3NcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjZWxsLWJ0biBidG4tc3VjY2Vzc1wiIEBjbGljaz1cImdldExpdmVuZXNzKClcIj7pooblj5bmmKjml6XmtLvot4M8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNlbGwtaXRlbSBmbGV4XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2VsbC1idG5cIiBAY2xpY2s9XCJsb2dvdXQoKVwiPumAgOWHuueZu+W9lTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRnZXRZZXN0ZXJkYXlMaXZlbmVzcyxcclxuXHRcdGNoZWNrQ29sbGVjdGVkTGl2ZW5lc3NcclxuXHR9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNldHRpbmc6IHtcclxuXHRcdFx0XHRcdEpvaW5DaGF0VGltZTogMzAsXHJcblx0XHRcdFx0XHRJbWFnZUxvYWRIb21lOiBcImh0dHBzOi8vcHdsLnl1aXMuY2MvR2V0SW1hZ2U/dXJsPVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhcGlLZXk6IG51bGwsXHJcblx0XHRcdFx0Y2FuR2V0TGl2ZW5lc3M6IGZhbHNlLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25CYWNrUHJlc3MoZSkge1xyXG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJzZXR0aW5nXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZykpXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKG9wdGlvbikge1xyXG5cdFx0XHR0aGlzLmFwaUtleSA9IG9wdGlvbi5hcGlLZXk7XHJcblx0XHRcdGlmICghdGhpcy5hcGlLZXkpIHJldHVybjtcclxuXHRcdFx0Y2hlY2tDb2xsZWN0ZWRMaXZlbmVzcyh7XHJcblx0XHRcdFx0YXBpS2V5OiB0aGlzLmFwaUtleVxyXG5cdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0aWYgKCFyZXMuaXNDb2xsZWN0ZWRZZXN0ZXJkYXlMaXZlbmVzc1Jld2FyZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jYW5HZXRMaXZlbmVzcyA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0TGl2ZW5lc3MoKXtcclxuXHRcdFx0XHRnZXRZZXN0ZXJkYXlMaXZlbmVzcyh7XHJcblx0XHRcdFx0XHRhcGlLZXk6IHRoaXMuYXBpS2V5XHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBg6aKG5Y+W5oiQ5Yqf77yM56ev5YiGOmAgKyByZXMuc3VtLFxyXG5cdFx0XHRcdFx0XHRpY29uOlwibm9uZVwiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGxvZ291dCgpIHtcclxuXHRcdFx0XHR1bmkuY2xlYXJTdG9yYWdlU3luYygpO1xyXG5cdFx0XHRcdGdldEFwcCgpLmdsb2JhbERhdGEuZGF0YSA9IG51bGw7XHJcblx0XHRcdFx0Z2V0QXBwKCkuZ2xvYmFsRGF0YS5hcGlLZXkgPSBcIlwiO1xyXG5cdFx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LmNlbGwtbGlzdCB7XHJcblx0XHR3aWR0aDogMTAwdnc7XHJcblx0XHRoZWlnaHQ6IDEwMHZoO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzNiM2U0MztcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdFx0LmNlbGwtaXRlbSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0cGFkZGluZzogMTBweCAwO1xyXG5cclxuXHRcdFx0LmNlbGwtaW5wdXQge1xyXG5cdFx0XHRcdHdpZHRoOiAyMDBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmNlbGwtaW5wdXQge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRjb2xvcjogIzY2NjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjRjBGMEYwO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm1zZyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdFx0XHRjb2xvcjogI0ZGQUFBQTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmNlbGwtYnRuIHtcclxuXHRcdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y1NmM2YztcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMCAwIDJweCAjMjIyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYnRuLXN1Y2Nlc3Mge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICM1Q0E5NDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuY2VsbC1pdGVtLmZsZXgge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cdFx0XHQuY2VsbC1pbnB1dCB7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5jZWxsLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzk5OTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 59);function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;
var DIFF_TIME = 60 * 1000 * 60 * 24;

var statConfig = __webpack_require__(/*! uni-stat-config */ 60).default || __webpack_require__(/*! uni-stat-config */ 60);
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {var _platformList;
  var aliArr = ['y', 'a', 'p', 'mp-ali'];
  var platformList = (_platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx' }, _defineProperty(_platformList,
  aliArr.reverse().join(''), 'ali'), _defineProperty(_platformList,
  'mp-baidu', 'bd'), _defineProperty(_platformList,
  'mp-toutiao', 'tt'), _defineProperty(_platformList,
  'mp-qq', 'qq'), _defineProperty(_platformList,
  'quickapp-native', 'qn'), _defineProperty(_platformList,
  'mp-kuaishou', 'ks'), _platformList);

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  if (!page) return '';
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  if (!page) return '';
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var isReportData = function isReportData() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }

    if (report_status === '') {
      requestData(function (_ref)

      {var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }

    if (report_status === 1) {
      resolve();
    }

    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }

    if (end_time - start_time > diff_time) {
      requestData(function (_ref2)

      {var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }

  });
};

var requestData = function requestData(done) {
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: statConfig.appid }) };


  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {var

      data =
      res.data;
      if (data.ret === 0) {
        typeof done === 'function' && done({
          enable: data.enable });

      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      typeof done === 'function' && done({
        enable: report_status_code });

    } });

};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 61).default;
var statConfig$1 = __webpack_require__(/*! uni-stat-config */ 60).default || __webpack_require__(/*! uni-stat-config */ 60);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig$1.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "getIsReportData", value: function getIsReportData()

    {
      return isReportData();
    } }, { key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref3$key = _ref3.key,key = _ref3$key === void 0 ? '' : _ref3$key,_ref3$value = _ref3.value,value = _ref3$value === void 0 ? "" : _ref3$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig$1.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      this.getIsReportData().then(function () {
        uni.request({
          url: STAT_URL,
          method: 'POST',
          // header: {
          //   'content-type': 'application/json' // 默认值
          // },
          data: optionsData,
          success: function success() {
            // if (process.env.NODE_ENV === 'development') {
            //   console.log('stat request success');
            // }
          },
          fail: function fail(e) {
            if (++_this5._retry < 3) {
              setTimeout(function () {
                _this5._sendRequest(optionsData);
              }, 1000);
            }
          } });

      });
    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = getSgin(GetEncodeURIComponentOptions(data)).options;
        image.src = STAT_H5_URL + '?' + options;
      });
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),
/* 59 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@dcloudio/uni-stat@next\",\"_id\":\"@dcloudio/uni-stat@2.0.1-33420211228002\",\"_inBundle\":false,\"_integrity\":\"sha512-JamMcL9IiBoW+UA9gs7N6aGwat+q5Hq9sqAZlP53sp++QBjj+g8XAyTo7hLkZMiB+TxJxwJ3xOzBemtcJspL4w==\",\"_location\":\"/@dcloudio/uni-stat\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@dcloudio/uni-stat@next\",\"name\":\"@dcloudio/uni-stat\",\"escapedName\":\"@dcloudio%2funi-stat\",\"scope\":\"@dcloudio\",\"rawSpec\":\"next\",\"saveSpec\":null,\"fetchSpec\":\"next\"},\"_requiredBy\":[\"#USER\",\"/\",\"/@dcloudio/vue-cli-plugin-uni\"],\"_resolved\":\"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.1-33420211228002.tgz\",\"_shasum\":\"b2826e1afac29ced6ef9e7feecd194bc73dc0832\",\"_spec\":\"@dcloudio/uni-stat@next\",\"_where\":\"/Users/guoshengqiang/Documents/hbx-plugins/uniapp-cli\",\"author\":\"\",\"bugs\":{\"url\":\"https://github.com/dcloudio/uni-app/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"\",\"devDependencies\":{\"@babel/core\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"eslint\":\"^6.1.0\",\"rollup\":\"^1.19.3\",\"rollup-plugin-babel\":\"^4.3.3\",\"rollup-plugin-clear\":\"^2.0.7\",\"rollup-plugin-commonjs\":\"^10.0.2\",\"rollup-plugin-copy\":\"^3.1.0\",\"rollup-plugin-eslint\":\"^7.0.0\",\"rollup-plugin-json\":\"^4.0.0\",\"rollup-plugin-node-resolve\":\"^5.2.0\",\"rollup-plugin-replace\":\"^2.2.0\",\"rollup-plugin-uglify\":\"^6.0.2\"},\"files\":[\"dist\",\"package.json\",\"LICENSE\"],\"gitHead\":\"638b12e8f1886590d8f16562c14240c354a66bb2\",\"homepage\":\"https://github.com/dcloudio/uni-app#readme\",\"license\":\"Apache-2.0\",\"main\":\"dist/index.js\",\"name\":\"@dcloudio/uni-stat\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/dcloudio/uni-app.git\",\"directory\":\"packages/uni-stat\"},\"scripts\":{\"build\":\"NODE_ENV=production rollup -c rollup.config.js\",\"dev\":\"NODE_ENV=development rollup -w -c rollup.config.js\"},\"version\":\"2.0.1-33420211228002\"}");

/***/ }),
/* 60 */
/*!*****************************************!*\
  !*** E:/pwl/pages.json?{"type":"stat"} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__C1F4B2F" };exports.default = _default;

/***/ }),
/* 61 */
/*!******************************************!*\
  !*** E:/pwl/pages.json?{"type":"style"} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": {}, "globalStyle": {} };exports.default = _default;

/***/ }),
/* 62 */
/*!**********************!*\
  !*** E:/pwl/App.vue ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 63);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///62\n");

/***/ }),
/* 63 */
/*!***********************************************!*\
  !*** E:/pwl/App.vue?vue&type=script&lang=js& ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 64);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThoQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiI2My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///63\n");

/***/ }),
/* 64 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/pwl/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  globalData: {\n    apiKey: \"\" },\n\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:7\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:10\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:13\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwiYXBpS2V5Iiwib25MYXVuY2giLCJvblNob3ciLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7QUFDZTtBQUNkQSxZQUFVLEVBQUU7QUFDWEMsVUFBTSxFQUFFLEVBREcsRUFERTs7QUFJZEMsVUFBUSxFQUFFLG9CQUFXO0FBQ3BCLGlCQUFZLFlBQVo7QUFDQSxHQU5hO0FBT2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FUYTtBQVVkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBWmEsRSIsImZpbGUiOiI2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0YXBpS2V5OiBcIlwiXG5cdH0sXG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///64\n");

/***/ }),
/* 65 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);