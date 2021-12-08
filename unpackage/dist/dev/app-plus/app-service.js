(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 35));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQixzRTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNSRyxZQURRLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuXHQuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages.json ***!
  \****************************************************************/
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
__definePage('pages/chat/chat', function () {return Vue.extend(__webpack_require__(/*! pages/chat/chat.vue?mpType=page */ 11).default);});

/***/ }),
/* 2 */
/*!***************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/index/index.vue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!***************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! ../../utils/api.js */ 7));\nvar _util = _interopRequireDefault(__webpack_require__(/*! ../../utils/util.js */ 8));\nvar _sparkMd = _interopRequireDefault(__webpack_require__(/*! spark-md5 */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { ShowLogin: false, nameOrEmail: \"\", userPassword: \"\" };}, onLoad: function onLoad() {this.init();},\n  methods: {\n    init: function init() {var _this = this;\n      var apiKey = uni.getStorageSync('apiKey');\n      var data = uni.getStorageSync('userData');\n      // let apiKey = \"dsajdlksjd==\";\n\n      if (!apiKey) {\n        // 你丫的登录信息没了，快去登录\n        setTimeout(function () {\n          _this.ShowLogin = true;\n        }, 100);\n      } else {\n        // 看看登录信息过期没有\n        this.CheckUser(apiKey);\n      }\n\n    },\n    login: function login() {\n      var that = this;\n      _util.default.flirt({\n        url: _api.default.API.getKey,\n        data: {\n          nameOrEmail: this.nameOrEmail,\n          userPassword: _sparkMd.default.hash(this.userPassword) },\n\n        method: \"POST\" }).\n      then(function (res) {\n        if (res.code == 0) {\n          // 没问题，先验证下,再滚去聊天室\n          that.CheckUser(res.Key);\n        } else {\n          // 报错就是你的错\n          uni.showToast({\n            title: '你丫的填错了！',\n            icon: 'error',\n            duration: 2000 });\n\n        }\n      });\n    },\n    CheckUser: function CheckUser(apiKey) {var _this2 = this;\n      _util.default.flirt({\n        url: _api.default.API.checkUser,\n        data: {\n          apiKey: apiKey } }).\n\n      then(function (res) {\n        if (res.code == 0) {\n          // 没过期，继续用\n          uni.setStorageSync('userData', res.data);\n          uni.setStorageSync('apiKey', apiKey);\n          getApp().globalData.data = res.data;\n          getApp().globalData.apiKey = apiKey;\n          uni.reLaunch({\n            url: '/pages/chat/chat' });\n\n        } else {\n          // 你丫的登录信息过期了，快去登录\n          setTimeout(function () {\n            _this2.ShowLogin = true;\n          }, 100);\n        }\n      });\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQSwrRTs7Ozs7Ozs7Ozs7ZUFDQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLGdCQURBLEVBRUEsZUFGQSxFQUdBLGdCQUhBLEdBS0EsQ0FQQSxFQVFBLE1BUkEsb0JBUUEsQ0FDQSxZQUNBLENBVkE7QUFXQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsR0FGQTtBQUdBLE9BTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQWhCQTtBQWlCQSxTQWpCQSxtQkFpQkE7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQTtBQUNBLHVDQURBO0FBRUEsZ0VBRkEsRUFGQTs7QUFNQSxzQkFOQTtBQU9BLFVBUEEsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLHlCQUZBO0FBR0EsMEJBSEE7O0FBS0E7QUFDQSxPQW5CQTtBQW9CQSxLQXZDQTtBQXdDQSxhQXhDQSxxQkF3Q0EsTUF4Q0EsRUF3Q0E7QUFDQTtBQUNBLHVDQURBO0FBRUE7QUFDQSx3QkFEQSxFQUZBOztBQUtBLFVBTEEsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBREE7O0FBR0EsU0FUQSxNQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBLE9BckJBO0FBc0JBLEtBL0RBLEVBWEEsRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PGltYWdlIGNsYXNzPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIj48L2ltYWdlPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJsb2dpbi1mb3JtLWJveFwiIDpjbGFzcz1cIntzaG93IDogU2hvd0xvZ2lufVwiPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJsb2dpbi1pbnB1dFwiIHYtbW9kZWw9XCJuYW1lT3JFbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLmkbjpsbzmtL7otKblj7dcIiAvPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJsb2dpbi1pbnB1dFwiIHYtbW9kZWw9XCJ1c2VyUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuaRuOmxvOa0vuWvhueggVwiIC8+XHJcblx0XHRcdDxidXR0b24gdHlwZT1cImRlZmF1bHRcIiBjbGFzcz1cImxvZ2luLWJ0blwiIEBjbGljaz1cImxvZ2luXCI+55m75b2VPC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgQVBJTElTVCBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXHJcblx0aW1wb3J0IFVUSUwgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbC5qcydcclxuXHRpbXBvcnQgU3BhcmtNRDUgZnJvbSAnc3BhcmstbWQ1J1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0U2hvd0xvZ2luOiBmYWxzZSxcclxuXHRcdFx0XHRuYW1lT3JFbWFpbDogXCJcIixcclxuXHRcdFx0XHR1c2VyUGFzc3dvcmQ6IFwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0KCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRpbml0KCkge1xyXG5cdFx0XHRcdGxldCBhcGlLZXkgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2FwaUtleScpO1xyXG5cdFx0XHRcdGxldCBkYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyRGF0YScpO1xyXG5cdFx0XHRcdC8vIGxldCBhcGlLZXkgPSBcImRzYWpkbGtzamQ9PVwiO1xyXG5cclxuXHRcdFx0XHRpZiAoIWFwaUtleSkge1xyXG5cdFx0XHRcdFx0Ly8g5L2g5Lir55qE55m75b2V5L+h5oGv5rKh5LqG77yM5b+r5Y6755m75b2VXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5TaG93TG9naW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSwgMTAwKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDnnIvnnIvnmbvlvZXkv6Hmga/ov4fmnJ/msqHmnIlcclxuXHRcdFx0XHRcdHRoaXMuQ2hlY2tVc2VyKGFwaUtleSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2dpbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0VVRJTC5mbGlydCh7XHJcblx0XHRcdFx0XHR1cmw6IEFQSUxJU1QuQVBJLmdldEtleSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0bmFtZU9yRW1haWw6IHRoaXMubmFtZU9yRW1haWwsXHJcblx0XHRcdFx0XHRcdHVzZXJQYXNzd29yZDogU3BhcmtNRDUuaGFzaCh0aGlzLnVzZXJQYXNzd29yZClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiXHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYocmVzLmNvZGUgPT0gMCl7XHJcblx0XHRcdFx0XHRcdC8vIOayoemXrumimO+8jOWFiOmqjOivgeS4iyzlho3mu5rljrvogYrlpKnlrqRcclxuXHRcdFx0XHRcdFx0dGhhdC5DaGVja1VzZXIocmVzLktleSlcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHQvLyDmiqXplJnlsLHmmK/kvaDnmoTplJlcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdCAgICB0aXRsZTogJ+S9oOS4q+eahOWhq+mUmeS6hu+8gScsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjonZXJyb3InLFxyXG5cdFx0XHRcdFx0XHQgICAgZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Q2hlY2tVc2VyKGFwaUtleSl7XHJcblx0XHRcdFx0VVRJTC5mbGlydCh7XHJcblx0XHRcdFx0XHR1cmw6IEFQSUxJU1QuQVBJLmNoZWNrVXNlcixcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0YXBpS2V5OiBhcGlLZXlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHQvLyDmsqHov4fmnJ/vvIznu6fnu63nlKhcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VyRGF0YScscmVzLmRhdGEpXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYXBpS2V5JyxhcGlLZXkpXHJcblx0XHRcdFx0XHRcdGdldEFwcCgpLmdsb2JhbERhdGEuZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLmFwaUtleSA9IGFwaUtleTtcclxuXHRcdFx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9jaGF0L2NoYXQnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDkvaDkuKvnmoTnmbvlvZXkv6Hmga/ov4fmnJ/kuobvvIzlv6vljrvnmbvlvZVcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5TaG93TG9naW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9LCAxMDApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0aGVpZ2h0OiAxMDB2aDtcclxuXHRcdHBhZGRpbmc6IDV2dztcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzZTQzO1xyXG5cdH1cclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0d2lkdGg6IDYwcHg7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW46IDE1dmggMjV2dyAydmg7XHJcblx0XHRhbmltYXRpb246IGdvIDVzIGluZmluaXRlO1xyXG5cdH1cclxuXHJcblx0LmxvZ2luLWZvcm0tYm94IHtcclxuXHRcdGhlaWdodDogMDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0dHJhbnNpdGlvbjogLjVzO1xyXG5cdH1cclxuXHJcblx0LmxvZ2luLWZvcm0tYm94LnNob3cge1xyXG5cdFx0aGVpZ2h0OiAzMDBweDtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQubG9naW4taW5wdXQge1xyXG5cdFx0d2lkdGg6IDgwdnc7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRtYXJnaW46IDV2dyBhdXRvO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggIzMzMztcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1idG4ge1xyXG5cdFx0d2lkdGg6IDgwdnc7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRtYXJnaW46IDV2dyBhdXRvO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjBiMDQ0O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0QGtleWZyYW1lcyBnbyB7XHJcblx0XHQzMCUge1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZ3KTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwdncpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDUwJSB7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwdncpO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjB2dyk7XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!******************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/utils/api.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var baseURL = \"https://pwl.icu\";\nvar baaseWS = \"wss://pwl.icu\";\nvar API = {\n  getKey: baseURL + \"/api/getKey\",\n  checkUser: baseURL + \"/api/user\",\n  emotions: baseURL + \"/users/emotions\",\n  liveness: baseURL + \"user/liveness\",\n  more: baseURL + \"/chat-room/more\",\n  send: baseURL + \"/chat-room/send\",\n  delete: baseURL + \"/chat-room/revoke/\", ///chat-room/revoke/{消息oId}\n  open: baseURL + \"/chat-room/red-packet/open\" };\n\n\nvar WS = {\n  channel: baaseWS + \"/chat-room-channel\" };\n\n\nmodule.exports = {\n  API: API,\n  WS: WS };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBpLmpzIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJiYWFzZVdTIiwiQVBJIiwiZ2V0S2V5IiwiY2hlY2tVc2VyIiwiZW1vdGlvbnMiLCJsaXZlbmVzcyIsIm1vcmUiLCJzZW5kIiwiZGVsZXRlIiwib3BlbiIsIldTIiwiY2hhbm5lbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLE9BQU8sR0FBSSxpQkFBakI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsZUFBaEI7QUFDQSxJQUFNQyxHQUFHLEdBQUc7QUFDWEMsUUFBTSxFQUFFSCxPQUFPLEdBQUcsYUFEUDtBQUVYSSxXQUFTLEVBQUVKLE9BQU8sR0FBRyxXQUZWO0FBR1hLLFVBQVEsRUFBQ0wsT0FBTyxHQUFHLGlCQUhSO0FBSVhNLFVBQVEsRUFBQ04sT0FBTyxHQUFHLGVBSlI7QUFLWE8sTUFBSSxFQUFFUCxPQUFPLEdBQUcsaUJBTEw7QUFNWFEsTUFBSSxFQUFDUixPQUFPLEdBQUcsaUJBTko7QUFPWFMsUUFBTSxFQUFDVCxPQUFPLEdBQUcsb0JBUE4sRUFPNEI7QUFDdkNVLE1BQUksRUFBR1YsT0FBTyxHQUFHLDRCQVJOLEVBQVo7OztBQVdBLElBQU1XLEVBQUUsR0FBRztBQUNWQyxTQUFPLEVBQUVYLE9BQU8sR0FBRyxvQkFEVCxFQUFYOzs7QUFJQVksTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCWixLQUFHLEVBQUhBLEdBRGdCO0FBRWhCUyxJQUFFLEVBQUZBLEVBRmdCLEVBQWpCIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlVVJMID0gIFwiaHR0cHM6Ly9wd2wuaWN1XCJcclxuY29uc3QgYmFhc2VXUyA9IFwid3NzOi8vcHdsLmljdVwiXHJcbmNvbnN0IEFQSSA9IHtcclxuXHRnZXRLZXk6IGJhc2VVUkwgKyBcIi9hcGkvZ2V0S2V5XCIsXHJcblx0Y2hlY2tVc2VyOiBiYXNlVVJMICsgXCIvYXBpL3VzZXJcIixcclxuXHRlbW90aW9uczpiYXNlVVJMICsgXCIvdXNlcnMvZW1vdGlvbnNcIixcclxuXHRsaXZlbmVzczpiYXNlVVJMICsgXCJ1c2VyL2xpdmVuZXNzXCIsXHJcblx0bW9yZTogYmFzZVVSTCArIFwiL2NoYXQtcm9vbS9tb3JlXCIsXHJcblx0c2VuZDpiYXNlVVJMICsgXCIvY2hhdC1yb29tL3NlbmRcIixcclxuXHRkZWxldGU6YmFzZVVSTCArIFwiL2NoYXQtcm9vbS9yZXZva2UvXCIsIC8vL2NoYXQtcm9vbS9yZXZva2Uve+a2iOaBr29JZH1cclxuXHRvcGVuIDogYmFzZVVSTCArIFwiL2NoYXQtcm9vbS9yZWQtcGFja2V0L29wZW5cIixcclxuXHRcclxufVxyXG5jb25zdCBXUyA9IHtcclxuXHRjaGFubmVsOiBiYWFzZVdTICsgXCIvY2hhdC1yb29tLWNoYW5uZWxcIixcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0QVBJLFxyXG5cdFdTXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*******************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/utils/util.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var flirt = function flirt(_ref)\n\n\n\n\n{var url = _ref.url,_ref$method = _ref.method,method = _ref$method === void 0 ? \"GET\" : _ref$method,data = _ref.data,header = _ref.header;\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: url,\n      method: method,\n      data: data,\n      header: header,\n      success: function success(res) {\n        resolve(res.data);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n};\n\nmodule.exports = {\n  flirt: flirt };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmbGlydCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVuaSIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFROzs7OztBQUtYLEtBSkZDLEdBSUUsUUFKRkEsR0FJRSxvQkFIRkMsTUFHRSxDQUhGQSxNQUdFLDRCQUhPLEtBR1AsZUFGRkMsSUFFRSxRQUZGQSxJQUVFLENBREZDLE1BQ0UsUUFERkEsTUFDRTtBQUNGLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2Q0MsT0FBRyxDQUFDQyxPQUFKLENBQVk7QUFDWFIsU0FBRyxFQUFFQSxHQURNO0FBRVhDLFlBQU0sRUFBRUEsTUFGRztBQUdYQyxVQUFJLEVBQUVBLElBSEs7QUFJWEMsWUFBTSxFQUFFQSxNQUpHO0FBS1hNLGFBQU8sRUFBRSxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2pCTCxlQUFPLENBQUNLLEdBQUcsQ0FBQ1IsSUFBTCxDQUFQO0FBQ0EsT0FQVTtBQVFYUyxVQUFJLEVBQUUsY0FBQ0MsR0FBRCxFQUFTO0FBQ2ROLGNBQU0sQ0FBQ00sR0FBRCxDQUFOO0FBQ0EsT0FWVSxFQUFaOztBQVlBLEdBYk0sQ0FBUDtBQWNBLENBcEJEOztBQXNCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCZixPQUFLLEVBQUxBLEtBRGdCLEVBQWpCIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmbGlydCA9IGZ1bmN0aW9uKHtcclxuXHR1cmwsXHJcblx0bWV0aG9kID0gXCJHRVRcIixcclxuXHRkYXRhLFxyXG5cdGhlYWRlclxyXG59KSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRoZWFkZXI6IGhlYWRlcixcclxuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRmbGlydFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*****************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/spark-md5/spark-md5.js ***!
  \*****************************************************************************************/
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
/* 10 */
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
/* 11 */
/*!*************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/chat.vue?mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page */ 12);\n/* harmony import */ var _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e057ff54\",\n  null,\n  false,\n  _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/chat.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUwNTdmZjU0JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTA1N2ZmNTRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC9jaGF0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*******************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _vm._$s(1, "i", _vm.content.length > 0)
        ? _c(
            "view",
            { staticClass: _vm._$s(1, "sc", "contentBox"), attrs: { _i: 1 } },
            [
              _vm._l(_vm._$s(2, "f", { forItems: _vm.content }), function(
                item,
                index,
                $20,
                $30
              ) {
                return _c(
                  "view",
                  {
                    key: _vm._$s(2, "f", { forIndex: $20, key: index }),
                    staticClass: _vm._$s("2-" + $30, "sc", "msgInfo"),
                    class: _vm._$s("2-" + $30, "c", {
                      isYou: _vm.data.userName == item.userName ? true : false
                    }),
                    attrs: { _i: "2-" + $30 }
                  },
                  [
                    _vm._$s("3-" + $30, "i", item.type != "redPacketStatus")
                      ? [
                          _vm._$s(
                            "4-" + $30,
                            "i",
                            _vm.data.userName != item.userName
                          )
                            ? _c("image", {
                                staticClass: _vm._$s(
                                  "4-" + $30,
                                  "sc",
                                  "userAvatar"
                                ),
                                attrs: {
                                  src: _vm._$s(
                                    "4-" + $30,
                                    "a-src",
                                    item.userAvatarURL
                                  ),
                                  _i: "4-" + $30
                                }
                              })
                            : _vm._e(),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "5-" + $30,
                                "sc",
                                "MsgDetailBox"
                              ),
                              attrs: { _i: "5-" + $30 }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "6-" + $30,
                                    "sc",
                                    "msgBox"
                                  ),
                                  attrs: { _i: "6-" + $30 }
                                },
                                [
                                  _vm._$s(
                                    "7-" + $30,
                                    "i",
                                    _vm.data.userName != item.userName
                                  )
                                    ? [
                                        _vm._$s(
                                          "8-" + $30,
                                          "i",
                                          item.userNickname
                                        )
                                          ? _c(
                                              "view",
                                              {
                                                staticClass: _vm._$s(
                                                  "8-" + $30,
                                                  "sc",
                                                  "userName"
                                                ),
                                                attrs: { _i: "8-" + $30 }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._$s(
                                                    "8-" + $30,
                                                    "t0-0",
                                                    _vm._s(item.userNickname)
                                                  ) +
                                                    _vm._$s(
                                                      "8-" + $30,
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
                                                  "9-" + $30,
                                                  "sc",
                                                  "userName"
                                                ),
                                                attrs: { _i: "9-" + $30 }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._$s(
                                                    "9-" + $30,
                                                    "t0-0",
                                                    _vm._s(item.userName)
                                                  )
                                                )
                                              ]
                                            )
                                      ]
                                    : _vm._e(),
                                  _vm._$s("10-" + $30, "i", item.isMoney)
                                    ? _c(
                                        "view",
                                        {
                                          attrs: { _i: "10-" + $30 },
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
                                                "11-" + $30,
                                                "sc",
                                                "red-packet"
                                              ),
                                              attrs: { _i: "11-" + $30 }
                                            },
                                            [
                                              _c("view", {
                                                staticClass: _vm._$s(
                                                  "12-" + $30,
                                                  "sc",
                                                  "rp-header"
                                                ),
                                                attrs: { _i: "12-" + $30 }
                                              }),
                                              _c(
                                                "view",
                                                {
                                                  staticClass: _vm._$s(
                                                    "13-" + $30,
                                                    "sc",
                                                    "rp-main"
                                                  ),
                                                  attrs: { _i: "13-" + $30 }
                                                },
                                                [
                                                  _c("view", {
                                                    staticClass: _vm._$s(
                                                      "14-" + $30,
                                                      "sc",
                                                      "open"
                                                    ),
                                                    attrs: { _i: "14-" + $30 }
                                                  }),
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "15-" + $30,
                                                        "sc",
                                                        "rp-msg"
                                                      ),
                                                      attrs: { _i: "15-" + $30 }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._$s(
                                                          "15-" + $30,
                                                          "t0-0",
                                                          _vm._s(
                                                            item.content.msg
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._$s(
                                        "16-" + $30,
                                        "e",
                                        item.userName == "taozhiyu"
                                      )
                                    ? _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "16-" + $30,
                                            "sc",
                                            "msgContent"
                                          ),
                                          attrs: { _i: "16-" + $30 },
                                          on: {
                                            click: function($event) {
                                              _vm.hideTaotao = false
                                            }
                                          }
                                        },
                                        [
                                          _vm._$s(
                                            "17-" + $30,
                                            "i",
                                            _vm.hideTaotao
                                          )
                                            ? _c("view")
                                            : _c(
                                                "view",
                                                [
                                                  _c("mp-html", {
                                                    attrs: {
                                                      content: item.content,
                                                      _i: "19-" + $30
                                                    },
                                                    on: {
                                                      load: function($event) {
                                                        return _vm.scrollToBottom()
                                                      }
                                                    }
                                                  })
                                                ],
                                                1
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
                                              "copy-link": false,
                                              selectable: true,
                                              content: item.content,
                                              _i: "21-" + $30
                                            },
                                            on: {
                                              load: function($event) {
                                                return _vm.scrollToBottom()
                                              },
                                              ready: function($event) {
                                                return _vm.scrollToBottom()
                                              }
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
          _c(
            "view",
            { staticClass: _vm._$s(29, "sc", "menuBox"), attrs: { _i: 29 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(30, "sc", "iconBtn"),
                  attrs: { _i: 30 }
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        31,
                        "a-src",
                        __webpack_require__(/*! ../../static/icon/hongbao.png */ 14)
                      ),
                      _i: 31
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(32, "sc", "iconBtn"),
                  attrs: { _i: 32 }
                },
                [
                  _c("image", {
                    attrs: { src: _vm._$s(33, "a-src", _vm.emojeSrc), _i: 33 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(34, "sc", "iconBtn"),
                  attrs: { _i: 34 }
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        35,
                        "a-src",
                        __webpack_require__(/*! ../../static/icon/tupian.png */ 15)
                      ),
                      _i: 35
                    }
                  })
                ]
              )
            ]
          ),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.msg,
                expression: "msg"
              }
            ],
            staticClass: _vm._$s(36, "sc", "chat-input"),
            attrs: { _i: 36 },
            domProps: { value: _vm._$s(36, "v-model", _vm.msg) },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.msg = $event.target.value
              }
            }
          }),
          _c("button", {
            staticClass: _vm._$s(37, "sc", "sendBtn"),
            attrs: { _i: 37 },
            on: {
              touchend: function($event) {
                $event.preventDefault()
                return _vm.SendMsg()
              }
            }
          })
        ]
      ),
      _vm._$s(38, "i", _vm.showRedPacketData)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(38, "sc", "redPacketBg"),
              attrs: { _i: 38 },
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
                  staticClass: _vm._$s(39, "sc", "redPacketbox"),
                  attrs: { _i: 39 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(40, "sc", "redPacketInfo"),
                    attrs: { _i: 40 }
                  }),
                  _c("view", {
                    staticClass: _vm._$s(41, "sc", "redPacketList"),
                    attrs: { _i: 41 }
                  })
                ]
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!*****************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/static/icon/hongbao.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon/hongbao.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi9ob25nYmFvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!****************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/static/icon/tupian.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon/tupian.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi90dXBpYW4ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/chat.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBpQixDQUFnQiw2a0JBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/chat.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, wx) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mpHtml = _interopRequireDefault(__webpack_require__(/*! mp-html/dist/uni-app/components/mp-html/mp-html */ 22));\nvar _api = _interopRequireDefault(__webpack_require__(/*! ../../utils/api.js */ 7));\nvar _util = _interopRequireDefault(__webpack_require__(/*! ../../utils/util.js */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { mpHtml: _mpHtml.default }, data: function data() {return { content: [], apiKey: \"\", data: {}, msg: \"\", hideTaotao: true, redpacket: { money: 32, count: 2, msg: '摸鱼者，事竟成！' }, firstMsg: null, secondMsg: null, emojeSrc: '../../static/icon/huaji1.png', redpacketData: {}, redpacketTitle: \"\", showRedPacketData: true, JoinChat: null };}, onLoad: function onLoad() {this.initChat();this.apiKey = getApp().globalData.apiKey;this.data = getApp().globalData.data || uni.getStorageSync('userData');}, created: function created() {var _this = this;this.getPage(1); // this.getUserEmotions();\n    var that = this; // uni.onSocketClose(function (res) {\n    //   console.log('WebSocket 已关闭！');\n    //   that.JoinChat = setInterval(()=>{\n    // \t  console.log(\"尝试重连WebSocket\");\n    // \t  that.initChat()\n    //   },3000)\n    // });\n    setInterval(function () {_this.changeHuaji();}, 5000);}, methods: { changeHuaji: function changeHuaji() {this.emojeSrc = \"../../static/icon/huaji\".concat(Math.ceil(Math.random() * 6), \".png\");}, getPage: function getPage(page) {var that = this;if (page = 1) {this.content = [];}_util.default.flirt({ url: _api.default.API.more, method: \"GET\", data: { page: page, apiKey: that.apiKey } }).then(function (res) {if (res.code == 0) {var info = res.data;var info2 = [];info.forEach(function (msg) {info2.unshift(msg);});info2.forEach(function (msg) {var userAvatar = encodeURI(msg.userAvatarURL);userAvatar = btoa(userAvatar);msg.userAvatarURL = \"https://pwl.yuis.cc/GetImage?url=\".concat(userAvatar); // msg.userAvatarURL = `http://127.0.0.1:3002/GetImage?url=${userAvatar}`\n            that.filterMsg(msg);});that.scrollToBottom();}});}, getMoney: function getMoney(oId) {var _this2 = this;var that = this;_util.default.flirt({ url: _api.default.API.open, method: \"POST\", data: { oId: oId,\n          apiKey: that.apiKey } }).\n\n      then(function (res) {\n        _this2.redpacketData = res;\n        var money = _this2.redpacketData.who.find(function (w) {return w.userName == _this2.data.userName;});\n        if (!money) {\n          _this2.redpacketTitle = '错过一个亿';\n        } else {\n          _this2.redpacketTitle = money.userMoney == 0 ? '抢了个寂寞' : '抢到' + money.userMoney + '积分';\n        }\n        _this2.showRedPacketData = true;\n      });\n    },\n    SendMsg: function SendMsg(msg) {\n      var that = this;\n      var content = that.msg || msg;\n      if (content && content.trim() == \"\") {\n        return;\n      }\n      _util.default.flirt({\n        url: _api.default.API.send,\n        method: \"POST\",\n        data: {\n          content: content,\n          apiKey: that.apiKey } }).\n\n      then(function (res) {\n        that.msg = \"\";\n      });\n    },\n    initChat: function initChat() {\n      var that = this;\n      var socketTask = uni.connectSocket({\n        url: _api.default.WS.channel,\n        success: function success(res) {\n          __f__(\"log\", \"WebSocket 连接成功！\", \" at pages/chat/chat.vue:205\");\n          clearInterval(that.JoinChat);\n        },\n        fail: function fail(err) {\n          __f__(\"log\", \"WebSocket 连接失败！\", \" at pages/chat/chat.vue:209\");\n        } });\n\n      socketTask.onMessage(function (res) {\n        var msg = JSON.parse(res.data);\n        switch (msg.type) {\n          case \"online\": //在线人数\n            uni.setNavigationBarTitle({\n              title: \"\\u6478\\u9C7C\\u6D3E-\\u804A\\u5929\\u5BA4(\".concat(msg.onlineChatCnt, \")\") });\n\n            break;\n          case \"revoke\": //撤回\n            for (var i = 0; i < that.content.length; i++) {\n              var c = that.content[i];\n              if (c.oId != msg.oId) continue;\n              that.content.splice(i, 1);\n              break;\n            }\n            break;\n          case \"msg\": //消息\n            // let userAvatar = uni.getStorageSync(msg.userName);\n            var userAvatar = encodeURI(msg.userAvatarURL);\n            userAvatar = btoa(userAvatar);\n            msg.userAvatarURL = \"https://pwl.yuis.cc/GetImage?url=\".concat(userAvatar);\n            that.filterMsg(msg);\n            break;\n          case \"redPacketStatus\":\n            that.content.push(msg);\n            if (msg.got == 2) {\n              that.getMoney(msg.oId);\n            }\n            break;}\n\n      });\n    },\n    filterMsg: function filterMsg(msg) {\n      var that = this;\n      if (this.isJSON(msg.content)) {\n        msg.content = JSON.parse(msg.content);\n        msg.isMoney = true;\n        this.content.push(msg);\n        this.scrollToBottom();\n      } else if (/<img [^>]*src=['\"]([^'\"]+)[^>]*>/gi.test(msg.content)) {\n        var newSrcList = [];\n        msg.content = msg.content.replace(/<img [^>]*src=['\"]([^'\"]+)[^>]*>/gi, function (match, capture) {\n          var url = encodeURI(capture);\n          url = btoa(url);\n          var imgUrl = \"https://pwl.yuis.cc/GetImage?url=\".concat(url);\n          // let imgUrl = `http://127.0.0.1:3002/GetImage?url=${imgurl}`;\n          return \"<img src=\\\"\".concat(imgUrl, \"\\\" alt=\\\"\\u56FE\\u7247\\u8868\\u60C5\\\" />\");\n        });\n        this.content.push(msg);\n      } else {\n        this.content.push(msg);\n        if (/@hxg/gi.test(msg.md)) {\n          __f__(\"log\", 1111, \" at pages/chat/chat.vue:264\");\n          // console.log(\"收到消息：\" + )\n          var md = msg.md;\n          var message = md.replace(/@hxg/gi, \"\");\n          if (/并说/gi.test(message)) {\n            message = md.split(\":\");\n            message = message[message.length - 1];\n          }\n          var askUser = msg.userName;\n          __f__(\"log\", message, \" at pages/chat/chat.vue:273\");\n          if (message) {\n            uni.request({\n              url: \"http://192.168.3.204:827/?text=\" + message,\n              success: function success(res) {\n                if (res.data.code == 200) {\n                  __f__(\"log\", res.data.data.text, \" at pages/chat/chat.vue:279\");\n                  that.SendMsg(\"@\".concat(askUser, \" \") + res.data.data.text);\n                }\n              } });\n\n          }\n        }\n\n      }\n      if (!msg.isMoney) {\n        this.secondMsg = this.firstMsg;\n        this.firstMsg = msg;\n      }\n\n    },\n    isJSON: function isJSON(str) {\n      if (typeof str == 'string') {\n        try {\n          var obj = JSON.parse(str);\n          if (typeof obj == 'object' && obj) {\n            return true;\n          } else {\n            return false;\n          }\n\n        } catch (e) {\n          return false;\n        }\n      }\n    },\n    scrollToBottom: function scrollToBottom() {\n      var query = wx.createSelectorQuery();\n      // 通过节点获取位置信息\n      query.select('.contentBox').boundingClientRect();\n      query.selectViewport().scrollOffset();\n      query.exec(function (res) {\n        if (res[0]) {\n          setTimeout(function () {\n            wx.pageScrollTo({\n              scrollTop: res[0].height + 0,\n              duration: 100 });\n\n          }, 100);\n        }\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 19)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9jaGF0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0E7QUFDQSxzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxjQUNBLHVCQURBLEVBREEsRUFJQSxJQUpBLGtCQUlBLENBQ0EsU0FDQSxXQURBLEVBRUEsVUFGQSxFQUdBLFFBSEEsRUFJQSxPQUpBLEVBS0EsZ0JBTEEsRUFNQSxhQUNBLFNBREEsRUFFQSxRQUZBLEVBR0EsZUFIQSxFQU5BLEVBV0EsY0FYQSxFQVlBLGVBWkEsRUFhQSx3Q0FiQSxFQWNBLGlCQWRBLEVBZUEsa0JBZkEsRUFnQkEsdUJBaEJBLEVBaUJBLGNBakJBLEdBbUJBLENBeEJBLEVBeUJBLE1BekJBLG9CQXlCQSxDQUNBLGdCQUNBLHlDQUNBLHVFQUNBLENBN0JBLEVBOEJBLE9BOUJBLHFCQThCQSxrQkFDQSxnQkFEQSxDQUVBO0FBQ0Esb0JBSEEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLDZCQUNBLG9CQUNBLENBRkEsRUFFQSxJQUZBLEVBR0EsQ0E3Q0EsRUE4Q0EsV0FDQSxXQURBLHlCQUNBLENBQ0EsdUZBQ0EsQ0FIQSxFQUlBLE9BSkEsbUJBSUEsSUFKQSxFQUlBLENBQ0EsZ0JBQ0EsZUFDQSxrQkFDQSxDQUNBLHNCQUNBLDBCQURBLEVBRUEsYUFGQSxFQUdBLFFBQ0EsVUFEQSxFQUVBLG1CQUZBLEVBSEEsSUFPQSxJQVBBLENBT0EsZ0JBQ0Esb0JBQ0Esb0JBQ0EsZUFDQSw2QkFDQSxtQkFDQSxDQUZBLEVBR0EsOEJBQ0EsOENBQ0EsOEJBQ0EsMkVBSEEsQ0FJQTtBQUNBLGdDQUNBLENBTkEsRUFPQSxzQkFDQSxDQUNBLENBdkJBLEVBd0JBLENBakNBLEVBa0NBLFFBbENBLG9CQWtDQSxHQWxDQSxFQWtDQSxtQkFDQSxnQkFDQSxzQkFDQSwwQkFEQSxFQUVBLGNBRkEsRUFHQSxRQUNBLFFBREE7QUFFQSw2QkFGQSxFQUhBOztBQU9BLFVBUEEsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FoQkE7QUFpQkEsS0FyREE7QUFzREEsV0F0REEsbUJBc0RBLEdBdERBLEVBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSxzQkFGQTtBQUdBO0FBQ0EsMEJBREE7QUFFQSw2QkFGQSxFQUhBOztBQU9BLFVBUEEsQ0FPQTtBQUNBO0FBQ0EsT0FUQTtBQVVBLEtBdEVBO0FBdUVBLFlBdkVBLHNCQXVFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBTEE7QUFNQTtBQUNBO0FBQ0EsU0FSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBMUJBOztBQTRCQSxPQTlCQTtBQStCQSxLQWxIQTtBQW1IQSxhQW5IQSxxQkFtSEEsR0FuSEEsRUFtSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7QUFPQTtBQUNBLE9BVkEsTUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQVBBOztBQVNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQXBLQTtBQXFLQSxVQXJLQSxrQkFxS0EsR0FyS0EsRUFxS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQVJBLENBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5MQTtBQW9MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLDJCQUZBOztBQUlBLFdBTEEsRUFLQSxHQUxBO0FBTUE7QUFDQSxPQVRBO0FBVUEsS0FuTUEsRUE5Q0EsRSIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGVudEJveFwiIHYtaWY9XCJjb250ZW50Lmxlbmd0aCA+IDBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtc2dJbmZvXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gY29udGVudFwiIDprZXk9XCJpbmRleFwiXHJcblx0XHRcdFx0OmNsYXNzPVwie2lzWW91IDogKGRhdGEudXNlck5hbWUgPT0gaXRlbS51c2VyTmFtZSA/IHRydWUgOiBmYWxzZSl9XCI+XHJcblx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJpdGVtLnR5cGUgIT0gJ3JlZFBhY2tldFN0YXR1cydcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiZGF0YS51c2VyTmFtZSAhPSBpdGVtLnVzZXJOYW1lXCIgOnNyYz0naXRlbS51c2VyQXZhdGFyVVJMJyBtb2RlPVwid2lkdGhGaXhcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInVzZXJBdmF0YXJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJNc2dEZXRhaWxCb3hcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtc2dCb3hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1pZj1cImRhdGEudXNlck5hbWUgIT0gaXRlbS51c2VyTmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyTmFtZVwiIHYtaWY9XCJpdGVtLnVzZXJOaWNrbmFtZVwiPnt7aXRlbS51c2VyTmlja25hbWV9fSh7e2l0ZW0udXNlck5hbWV9fSlcclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlck5hbWVcIiB2LWVsc2U+e3tpdGVtLnVzZXJOYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5pc01vbmV5XCIgQGNsaWNrPVwiZ2V0TW9uZXkoaXRlbS5vSWQpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZC1wYWNrZXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycC1oZWFkZXJcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnAtbWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlblwiPuW8gDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwLW1zZ1wiPnt7aXRlbS5jb250ZW50Lm1zZ319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibXNnQ29udGVudFwiIHYtZWxzZS1pZj1cIml0ZW0udXNlck5hbWUgPT0gJ3Rhb3poaXl1J1wiIEBjbGljaz1cImhpZGVUYW90YW8gPSBmYWxzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cImhpZGVUYW90YW9cIj7mtpvmtpvlj5HoqIDvvIzoh6rliqjlsY/olL1b54K55Ye76Kej6ZmkXTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG1wLWh0bWwgQGxvYWQ9XCJzY3JvbGxUb0JvdHRvbSgpXCIgOmNvbnRlbnQ9XCJpdGVtLmNvbnRlbnRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1zZ0NvbnRlbnRcIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bXAtaHRtbCBAbG9hZD1cInNjcm9sbFRvQm90dG9tKClcIiBAcmVhZHk9XCJzY3JvbGxUb0JvdHRvbSgpXCIgOmNvcHktbGluaz1cImZhbHNlXCIgOnNlbGVjdGFibGU9XCJ0cnVlXCIgOmNvbnRlbnQ9XCJpdGVtLmNvbnRlbnRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImh1bWFuTmF0dXJlXCIgdi1pZj1cImNvbnRlbnQubGVuZ3RoID4gMiAmJiBmaXJzdE1zZy5jb250ZW50ID09IHNlY29uZE1zZy5jb250ZW50ICYmIGZpcnN0TXNnLm9JZCA9PSBpdGVtLm9JZCAmJiBpdGVtLnVzZXJOYW1lICE9IGRhdGEudXNlck5hbWVcIiAgQGNsaWNrPVwiU2VuZE1zZyhpdGVtLmNvbnRlbnQpXCI+KzE8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImRhdGEudXNlck5hbWUgPT0gaXRlbS51c2VyTmFtZVwiIDpzcmM9J2l0ZW0udXNlckF2YXRhclVSTCcgbW9kZT1cIndpZHRoRml4XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ1c2VyQXZhdGFyXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS50eXBlID09ICdyZWRQYWNrZXRTdGF0dXMnXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZFBhY2tldGluZm9cIj57e2l0ZW0ud2hvR290fX0g5oqi5Yiw5LqGIHt7aXRlbS53aG9HaXZlfX0g55qEIDx2aWV3IEBjbGljaz1cImdldE1vbmV5KGl0ZW0ub0lkKVwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9XCJjb2xvcjojZjk0MTUxXCI+57qi5YyFPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQoe3tpdGVtLmdvdH19L3t7aXRlbS5jb3VudH19KTwvdmlldz5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGlkPVwiQm90dG9tVmlld1wiIHN0eWxlPVwiaGVpZ2h0OiA1MHB4O1wiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5Y+R6YCB5qCPIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzZW5kQm94XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUJveFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbkJ0blwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pY29uL2hvbmdiYW8ucG5nXCIgbW9kZT1cImhlaWdodEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbkJ0blwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJlbW9qZVNyY1wiIG1vZGU9XCJoZWlnaHRGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25CdG5cIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbi90dXBpYW4ucG5nXCIgbW9kZT1cImhlaWdodEZpeFwiPjwvaW1hZ2U+XHRcdFx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJtc2dcIiBjbGFzcz1cImNoYXQtaW5wdXRcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCIgLz5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIGNsYXNzPVwic2VuZEJ0blwiIEB0b3VjaGVuZC5wcmV2ZW50PVwiU2VuZE1zZygpXCI+5Y+R6YCBPC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOe6ouWMhSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwicmVkUGFja2V0QmdcIiB2LWlmPVwic2hvd1JlZFBhY2tldERhdGFcIiBAY2xpY2suc3RvcD1cInNob3dSZWRQYWNrZXREYXRhID0gZmFsc2VcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZWRQYWNrZXRib3hcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZFBhY2tldEluZm9cIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZFBhY2tldExpc3RcIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IG1wSHRtbCBmcm9tICdtcC1odG1sL2Rpc3QvdW5pLWFwcC9jb21wb25lbnRzL21wLWh0bWwvbXAtaHRtbCdcclxuXHRpbXBvcnQgQVBJTElTVCBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXHJcblx0aW1wb3J0IFVUSUwgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbC5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHQgbXBIdG1sXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjb250ZW50OiBbXSxcclxuXHRcdFx0XHRhcGlLZXk6IFwiXCIsXHJcblx0XHRcdFx0ZGF0YToge30sXHJcblx0XHRcdFx0bXNnOiBcIlwiLFxyXG5cdFx0XHRcdGhpZGVUYW90YW86IHRydWUsXHJcblx0XHRcdFx0cmVkcGFja2V0OiB7XHJcblx0XHRcdFx0XHRtb25leTogMzIsXHJcblx0XHRcdFx0XHRjb3VudDogMixcclxuXHRcdFx0XHRcdG1zZzogJ+aRuOmxvOiAhe+8jOS6i+ern+aIkO+8gSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZpcnN0TXNnOm51bGwsXHJcblx0XHRcdFx0c2Vjb25kTXNnOm51bGwsXHJcblx0XHRcdFx0ZW1vamVTcmM6Jy4uLy4uL3N0YXRpYy9pY29uL2h1YWppMS5wbmcnLFxyXG5cdFx0XHRcdHJlZHBhY2tldERhdGE6e30sXHJcblx0XHRcdFx0cmVkcGFja2V0VGl0bGU6XCJcIixcclxuXHRcdFx0XHRzaG93UmVkUGFja2V0RGF0YTp0cnVlLFxyXG5cdFx0XHRcdEpvaW5DaGF0Om51bGxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0Q2hhdCgpO1xyXG5cdFx0XHR0aGlzLmFwaUtleSA9IGdldEFwcCgpLmdsb2JhbERhdGEuYXBpS2V5O1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBnZXRBcHAoKS5nbG9iYWxEYXRhLmRhdGEgfHwgdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyRGF0YScpO1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0UGFnZSgxKTtcclxuXHRcdFx0Ly8gdGhpcy5nZXRVc2VyRW1vdGlvbnMoKTtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyB1bmkub25Tb2NrZXRDbG9zZShmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdC8vICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCDlt7LlhbPpl63vvIEnKTtcclxuXHRcdFx0Ly8gICB0aGF0LkpvaW5DaGF0ID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuXHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKFwi5bCd6K+V6YeN6L+eV2ViU29ja2V0XCIpO1xyXG5cdFx0XHQvLyBcdCAgdGhhdC5pbml0Q2hhdCgpXHJcblx0XHRcdC8vICAgfSwzMDAwKVxyXG5cdFx0XHQgIFxyXG5cdFx0XHQvLyB9KTtcclxuXHRcdFx0c2V0SW50ZXJ2YWwoKCk9PntcclxuXHRcdFx0XHR0aGlzLmNoYW5nZUh1YWppKClcclxuXHRcdFx0fSw1MDAwKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2hhbmdlSHVhamkoKXtcclxuXHRcdFx0XHR0aGlzLmVtb2plU3JjID0gYC4uLy4uL3N0YXRpYy9pY29uL2h1YWppJHtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSo2KX0ucG5nYFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRQYWdlKHBhZ2UpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKHBhZ2UgPSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0VVRJTC5mbGlydCh7XHJcblx0XHRcdFx0XHR1cmw6IEFQSUxJU1QuQVBJLm1vcmUsXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHBhZ2U6IHBhZ2UsXHJcblx0XHRcdFx0XHRcdGFwaUtleTogdGhhdC5hcGlLZXlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgaW5mbyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRsZXQgaW5mbzIgPSBbXTtcclxuXHRcdFx0XHRcdFx0aW5mby5mb3JFYWNoKG1zZyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aW5mbzIudW5zaGlmdChtc2cpXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdGluZm8yLmZvckVhY2gobXNnID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgdXNlckF2YXRhciA9IGVuY29kZVVSSShtc2cudXNlckF2YXRhclVSTClcclxuXHRcdFx0XHRcdFx0XHR1c2VyQXZhdGFyID0gYnRvYSh1c2VyQXZhdGFyKTtcclxuXHRcdFx0XHRcdFx0XHRtc2cudXNlckF2YXRhclVSTCA9IGBodHRwczovL3B3bC55dWlzLmNjL0dldEltYWdlP3VybD0ke3VzZXJBdmF0YXJ9YFxyXG5cdFx0XHRcdFx0XHRcdC8vIG1zZy51c2VyQXZhdGFyVVJMID0gYGh0dHA6Ly8xMjcuMC4wLjE6MzAwMi9HZXRJbWFnZT91cmw9JHt1c2VyQXZhdGFyfWBcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmZpbHRlck1zZyhtc2cpXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoYXQuc2Nyb2xsVG9Cb3R0b20oKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE1vbmV5KG9JZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRVVElMLmZsaXJ0KHtcclxuXHRcdFx0XHRcdHVybDogQVBJTElTVC5BUEkub3BlbixcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdG9JZDogb0lkLFxyXG5cdFx0XHRcdFx0XHRhcGlLZXk6IHRoYXQuYXBpS2V5XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZWRwYWNrZXREYXRhID0gcmVzO1xyXG5cdFx0XHRcdFx0bGV0IG1vbmV5ID0gdGhpcy5yZWRwYWNrZXREYXRhLndoby5maW5kKHcgPT4gdy51c2VyTmFtZSA9PSB0aGlzLmRhdGEudXNlck5hbWUpO1xyXG5cdFx0XHRcdFx0aWYgKCFtb25leSl7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVkcGFja2V0VGl0bGUgPSAgJ+mUmei/h+S4gOS4quS6vydcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlZHBhY2tldFRpdGxlID0gIG1vbmV5LnVzZXJNb25leSA9PSAwID8gJ+aKouS6huS4quWvguWvnicgOiAn5oqi5YiwJyArIG1vbmV5LnVzZXJNb25leSArICfnp6/liIYnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnNob3dSZWRQYWNrZXREYXRhID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRTZW5kTXNnKG1zZykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRsZXQgY29udGVudCA9IHRoYXQubXNnIHx8IG1zZztcclxuXHRcdFx0XHRpZihjb250ZW50ICYmIGNvbnRlbnQudHJpbSgpID09IFwiXCIpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0VVRJTC5mbGlydCh7XHJcblx0XHRcdFx0XHR1cmw6IEFQSUxJU1QuQVBJLnNlbmQsXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBjb250ZW50LFxyXG5cdFx0XHRcdFx0XHRhcGlLZXk6IHRoYXQuYXBpS2V5XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhhdC5tc2cgPSBcIlwiO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGluaXRDaGF0KCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgc29ja2V0VGFzayA9IHVuaS5jb25uZWN0U29ja2V0KHtcclxuXHRcdFx0XHRcdHVybDogQVBJTElTVC5XUy5jaGFubmVsLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIldlYlNvY2tldCDov57mjqXmiJDlip/vvIFcIilcclxuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGF0LkpvaW5DaGF0KTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOihlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJXZWJTb2NrZXQg6L+e5o6l5aSx6LSl77yBXCIpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c29ja2V0VGFzay5vbk1lc3NhZ2UoZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRsZXQgbXNnID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcclxuXHRcdFx0XHRcdHN3aXRjaCAobXNnLnR5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSBcIm9ubGluZVwiOiAvL+WcqOe6v+S6uuaVsFxyXG5cdFx0XHRcdFx0XHRcdHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGDmkbjpsbzmtL4t6IGK5aSp5a6kKCR7bXNnLm9ubGluZUNoYXRDbnR9KWBcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIFwicmV2b2tlXCI6IC8v5pKk5ZueXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBjID0gdGhhdC5jb250ZW50W2ldO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGMub0lkICE9IG1zZy5vSWQpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50LnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBcIm1zZ1wiOiAvL+a2iOaBr1xyXG5cdFx0XHRcdFx0XHRcdC8vIGxldCB1c2VyQXZhdGFyID0gdW5pLmdldFN0b3JhZ2VTeW5jKG1zZy51c2VyTmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHVzZXJBdmF0YXIgPSBlbmNvZGVVUkkobXNnLnVzZXJBdmF0YXJVUkwpXHJcblx0XHRcdFx0XHRcdFx0dXNlckF2YXRhciA9IGJ0b2EodXNlckF2YXRhcik7XHJcblx0XHRcdFx0XHRcdFx0bXNnLnVzZXJBdmF0YXJVUkwgPSBgaHR0cHM6Ly9wd2wueXVpcy5jYy9HZXRJbWFnZT91cmw9JHt1c2VyQXZhdGFyfWBcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmZpbHRlck1zZyhtc2cpXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgXCJyZWRQYWNrZXRTdGF0dXNcIjpcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNvbnRlbnQucHVzaChtc2cpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKG1zZy5nb3QgPT0gMil7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmdldE1vbmV5KG1zZy5vSWQpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGZpbHRlck1zZyhtc2cpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNKU09OKG1zZy5jb250ZW50KSkge1xyXG5cdFx0XHRcdFx0bXNnLmNvbnRlbnQgPSBKU09OLnBhcnNlKG1zZy5jb250ZW50KVxyXG5cdFx0XHRcdFx0bXNnLmlzTW9uZXkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50LnB1c2gobXNnKVxyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpXHJcblx0XHRcdFx0fSBlbHNlIGlmICgvPGltZyBbXj5dKnNyYz1bJ1wiXShbXidcIl0rKVtePl0qPi9naS50ZXN0KG1zZy5jb250ZW50KSkge1xyXG5cdFx0XHRcdFx0bGV0IG5ld1NyY0xpc3QgPSBbXTtcclxuXHRcdFx0XHRcdG1zZy5jb250ZW50ID0gbXNnLmNvbnRlbnQucmVwbGFjZSgvPGltZyBbXj5dKnNyYz1bJ1wiXShbXidcIl0rKVtePl0qPi9naSwgZnVuY3Rpb24obWF0Y2gsIGNhcHR1cmUpIHtcclxuXHRcdFx0XHRcdFx0bGV0IHVybCA9IGVuY29kZVVSSShjYXB0dXJlKTtcclxuXHRcdFx0XHRcdFx0dXJsID0gYnRvYSh1cmwpO1xyXG5cdFx0XHRcdFx0XHRsZXQgaW1nVXJsID0gYGh0dHBzOi8vcHdsLnl1aXMuY2MvR2V0SW1hZ2U/dXJsPSR7dXJsfWA7XHJcblx0XHRcdFx0XHRcdC8vIGxldCBpbWdVcmwgPSBgaHR0cDovLzEyNy4wLjAuMTozMDAyL0dldEltYWdlP3VybD0ke2ltZ3VybH1gO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYDxpbWcgc3JjPVwiJHtpbWdVcmx9XCIgYWx0PVwi5Zu+54mH6KGo5oOFXCIgLz5gXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudC5wdXNoKG1zZylcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50LnB1c2gobXNnKVxyXG5cdFx0XHRcdFx0aWYoL0BoeGcvZ2kudGVzdChtc2cubWQpKXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coMTExMSlcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLmlLbliLDmtojmga/vvJpcIiArIClcclxuXHRcdFx0XHRcdFx0bGV0IG1kID0gbXNnLm1kO1xyXG5cdFx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IG1kLnJlcGxhY2UoL0BoeGcvZ2ksXCJcIik7XHJcblx0XHRcdFx0XHRcdGlmKC/lubbor7QvZ2kudGVzdChtZXNzYWdlKSl7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZSA9IG1kLnNwbGl0KFwiOlwiKTtcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZVttZXNzYWdlLmxlbmd0aCAtIDFdXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGV0IGFza1VzZXIgPSBtc2cudXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcblx0XHRcdFx0XHRcdGlmKG1lc3NhZ2Upe1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDpcImh0dHA6Ly8xOTIuMTY4LjMuMjA0OjgyNy8/dGV4dD1cIiArIG1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmNvZGUgPT0gMjAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhLnRleHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5TZW5kTXNnKGBAJHthc2tVc2VyfSBgICsgcmVzLmRhdGEuZGF0YS50ZXh0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKCFtc2cuaXNNb25leSl7XHJcblx0XHRcdFx0XHR0aGlzLnNlY29uZE1zZyA9IHRoaXMuZmlyc3RNc2c7XHJcblx0XHRcdFx0XHR0aGlzLmZpcnN0TXNnID0gbXNnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0aXNKU09OKHN0cikge1xyXG5cdFx0XHRcdGlmICh0eXBlb2Ygc3RyID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHR2YXIgb2JqID0gSlNPTi5wYXJzZShzdHIpO1xyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiBvYmopIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNjcm9sbFRvQm90dG9tOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcclxuXHRcdFx0XHQvLyDpgJrov4foioLngrnojrflj5bkvY3nva7kv6Hmga9cclxuXHRcdFx0XHRxdWVyeS5zZWxlY3QoJy5jb250ZW50Qm94JykuYm91bmRpbmdDbGllbnRSZWN0KClcclxuXHRcdFx0XHRxdWVyeS5zZWxlY3RWaWV3cG9ydCgpLnNjcm9sbE9mZnNldCgpXHJcblx0XHRcdFx0cXVlcnkuZXhlYyhyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlc1swXSkge1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdFx0d3gucGFnZVNjcm9sbFRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFRvcDogcmVzWzBdLmhlaWdodCArIDAsXHJcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTAwXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSwxMDApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzYjNlNDM7XHJcblx0fVxyXG5cclxuXHQudXNlckF2YXRhciB7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5tc2dJbmZvIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5tc2dJbmZvLmlzWW91IHtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0fVxyXG5cdC5Nc2dEZXRhaWxCb3h7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdH1cclxuXHQuY29udGVudEJveCB7XHJcblx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG5cdFx0cGFkZGluZzogMTVweCAxMHB4IDgwcHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0Lm1zZ0JveCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuaXNZb3UgLm1zZ0JveCB7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0fVxyXG5cclxuXHQuaXNZb3UgLnVzZXJBdmF0YXIge1xyXG5cdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0fVxyXG5cclxuXHQudXNlck5hbWUge1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cdFxyXG5cdC5tc2dDb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1pbi13aWR0aDogMTBweDtcclxuXHRcdG1heC13aWR0aDogNjB2dztcclxuXHRcdG1pbi1oZWlnaHQ6IDE1cHg7XHJcblx0XHRtYXJnaW46IDVweCAwO1xyXG5cdFx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Lyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuXHR9XHJcblxyXG5cdC5tc2dDb250ZW50OjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IC0xMHB4O1xyXG5cdFx0dG9wOiA1cHg7XHJcblx0XHR3aWR0aDogMDtcclxuXHRcdGhlaWdodDogMDtcclxuXHRcdGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNmZmY7XHJcblx0XHRib3JkZXItdG9wOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuXHRcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdH1cclxuXHJcblx0LmlzWW91IC5tc2dDb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQ6ICM5ZWVhNmE7XHJcblx0fVxyXG5cclxuXHQuaXNZb3UgLm1zZ0NvbnRlbnQ6OmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IC0xMHB4O1xyXG5cdFx0bGVmdDogYXV0bztcclxuXHRcdHRvcDogNXB4O1xyXG5cdFx0d2lkdGg6IDA7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRib3JkZXItcmlnaHQ6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcblx0XHRib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuXHRcdGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzllZWE2YTtcclxuXHR9XHJcblxyXG5cdC5tc2dDb250ZW50IHAge1xyXG5cdFx0bWluLXdpZHRoOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnNlbmRCb3gge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdH1cclxuXHQubWVudUJveHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRoZWlnaHQ6IDQycHg7XHJcblx0XHRwYWRkaW5nOiA1cHggMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjhGOEY4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblx0Lmljb25CdG57XHJcblx0XHRtYXJnaW46IDAgNXB4O1xyXG5cdH1cclxuXHQuaWNvbkJ0biBpbWFnZXtcclxuXHRcdGhlaWdodDogMzJweDtcclxuXHR9XHJcblx0LnNlbmRCdG4ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IDV2dztcclxuXHRcdHRvcDogY2FsYyg1MCUgKyAyMHB4KTtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjBiMDQ0O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQuY2hhdC1pbnB1dCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LnJlZC1wYWNrZXQge1xyXG5cdFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0bWFyZ2luOiAxMHB4IGF1dG8gMDtcclxuXHRcdHdpZHRoOiAxNjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYzYxYTJmO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJveC1zaGFkb3c6IDAgMCAycHggMnB4ICMzMzM7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LnJwLWhlYWRlciB7XHJcblx0XHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcblx0XHR3aWR0aDogMTYwcHg7XHJcblx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTEyMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdGJhY2tncm91bmQ6ICNmOTQxNTE7XHJcblx0fVxyXG5cclxuXHQucnAtbWFpbiB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5ycC1tc2cge1xyXG5cdFx0cGFkZGluZzogMCAxMHB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG5cclxuXHQucmVkLXBhY2tldCAub3BlbiB7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRtYXJnaW46IC0yMHB4IGF1dG8gMjBweDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmIwM2E7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnJlZFBhY2tldGluZm8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHQuaHVtYW5OYXR1cmV7XHJcblx0XHR3aWR0aDogMzVweDtcclxuXHRcdGhlaWdodDogMzVweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMzVweDtcclxuXHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHR9XHJcblx0LnJlZFBhY2tldEJne1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogMjUwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0fVxyXG5cdC5yZWRQYWNrZXRib3h7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDh2aDtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdFx0aGVpZ2h0OiA3MHZoO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdFx0YmFja2dyb3VuZDogI2ZkZjdlYjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbjxzdHlsZT5cclxuXHQuY29udGVudEJveD4+PmEge1xyXG5cdFx0Y29sb3I6ICM2YTczN2Q7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzZhNzM3ZDtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50Qm94Pj4+aW1nIHtcclxuXHRcdG1heC13aWR0aDogNTV2dztcclxuXHR9XHJcblxyXG5cdC5jb250ZW50Qm94Pj4+YmxvY2txdW90ZSB7XHJcblx0XHRjb2xvcjogIzZhNzM3ZDtcclxuXHRcdGJvcmRlci1sZWZ0OiAuMjVlbSBzb2xpZCAjZWFlY2VmO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxZW07XHJcblx0XHRtYXJnaW46IDVweCAwO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
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
/* 19 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 20)))

/***/ }),
/* 20 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 22 */
/*!**********************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mp-html.vue?vue&type=template&id=55c049b6& */ 23);
/* harmony import */ var _mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mp-html.vue?vue&type=script&lang=js& */ 25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/*!*****************************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue?vue&type=template&id=55c049b6& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mp-html.vue?vue&type=template&id=55c049b6& */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue?vue&type=template&id=55c049b6& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* 25 */
/*!***********************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mp-html.vue?vue&type=script&lang=js& */ 26);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






































var _node2 = _interopRequireDefault(__webpack_require__(/*! ./node/node */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
/**
 * mp-html v2.2.0
 * @description 富文本组件
 * @tutorial https://github.com/jin-yufeng/mp-html
 * @property {String} container-style 容器的样式
 * @property {String} content 用于渲染的 html 字符串
 * @property {Boolean} copy-link 是否允许外部链接被点击时自动复制
 * @property {String} domain 主域名，用于拼接链接
 * @property {String} error-img 图片出错时的占位图链接
 * @property {Boolean} lazy-load 是否开启图片懒加载
 * @property {string} loading-img 图片加载过程中的占位图链接
 * @property {Boolean} pause-video 是否在播放一个视频时自动暂停其他视频
 * @property {Boolean} preview-img 是否允许图片被点击时自动预览
 * @property {Boolean} scroll-table 是否给每个表格添加一个滚动层使其能单独横向滚动
 * @property {Boolean | String} selectable 是否开启长按复制
 * @property {Boolean} set-title 是否将 title 标签的内容设置到页面标题
 * @property {Boolean} show-img-menu 是否允许图片被长按时显示菜单
 * @property {Object} tag-style 标签的默认样式
 * @property {Boolean | Number} use-anchor 是否使用锚点链接
 * @event {Function} load dom 结构加载完毕时触发
 * @event {Function} ready 所有图片加载完毕时触发
 * @event {Function} imgTap 图片被点击时触发
 * @event {Function} linkTap 链接被点击时触发
 * @event {Function} error 媒体加载出错时触发
 */var plugins = [];var Parser = __webpack_require__(/*! ./parser */ 34);var _default = { name: 'mp-html', data: function data() {return { nodes: [] };}, props: { containerStyle: { type: String, default: '' }, content: String, copyLink: { type: [Boolean, String], default: true }, domain: String, errorImg: { type: String, default: '' }, lazyLoad: { type: [Boolean, String], default: false }, loadingImg: {
      type: String,
      default: '' },

    pauseVideo: {
      type: [Boolean, String],
      default: true },

    previewImg: {
      type: [Boolean, String],
      default: true },

    scrollTable: [Boolean, String],
    selectable: [Boolean, String],
    setTitle: {
      type: [Boolean, String],
      default: true },

    showImgMenu: {
      type: [Boolean, String],
      default: true },

    tagStyle: Object,
    useAnchor: [Boolean, Number] },


  components: {
    node: _node2.default },


  watch: {
    content: function content(_content) {
      this.setContent(_content);
    } },

  created: function created() {
    this.plugins = [];
    for (var i = plugins.length; i--;) {
      this.plugins.push(new plugins[i](this));
    }
  },
  mounted: function mounted() {
    if (this.content && !this.nodes.length) {
      this.setContent(this.content);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this._hook('onDetached');
    clearInterval(this._timer);
  },
  methods: {
    /**
              * @description 将锚点跳转的范围限定在一个 scroll-view 内
              * @param {Object} page scroll-view 所在页面的示例
              * @param {String} selector scroll-view 的选择器
              * @param {String} scrollTop scroll-view scroll-top 属性绑定的变量名
              */
    in: function _in(page, selector, scrollTop) {

      if (page && selector && scrollTop) {
        this._in = {
          page: page,
          selector: selector,
          scrollTop: scrollTop };

      }

    },

    /**
        * @description 锚点跳转
        * @param {String} id 要跳转的锚点 id
        * @param {Number} offset 跳转位置的偏移量
        * @returns {Promise}
        */
    navigateTo: function navigateTo(id, offset) {var _this = this;
      return new Promise(function (resolve, reject) {
        if (!_this.useAnchor) {
          reject(Error('Anchor is disabled'));
          return;
        }
        offset = offset || parseInt(_this.useAnchor) || 0;
















        var deep = ' ';



        var selector = uni.createSelectorQuery().

        in(_this._in ? _this._in.page : _this).

        select((_this._in ? _this._in.selector : '._root') + (id ? "".concat(deep, "#").concat(id) : '')).boundingClientRect();
        if (_this._in) {
          selector.select(_this._in.selector).scrollOffset().
          select(_this._in.selector).boundingClientRect();
        } else {
          // 获取 scroll-view 的位置和滚动距离
          selector.selectViewport().scrollOffset(); // 获取窗口的滚动距离
        }
        selector.exec(function (res) {
          if (!res[0]) {
            reject(Error('Label not found'));
            return;
          }
          var scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + offset;
          if (_this._in) {
            // scroll-view 跳转
            _this._in.page[_this._in.scrollTop] = scrollTop;
          } else {
            // 页面跳转
            uni.pageScrollTo({
              scrollTop: scrollTop,
              duration: 300 });

          }
          resolve();
        });

      });
    },

    /**
        * @description 获取文本内容
        * @return {String}
        */
    getText: function getText(nodes) {
      var text = '';
      (function traversal(nodes) {
        for (var i = 0; i < nodes.length; i++) {
          var _node = nodes[i];
          if (_node.type === 'text') {
            text += _node.text.replace(/&amp;/g, '&');
          } else if (_node.name === 'br') {
            text += '\n';
          } else {
            // 块级标签前后加换行
            var isBlock = _node.name === 'p' || _node.name === 'div' || _node.name === 'tr' || _node.name === 'li' || _node.name[0] === 'h' && _node.name[1] > '0' && _node.name[1] < '7';
            if (isBlock && text && text[text.length - 1] !== '\n') {
              text += '\n';
            }
            // 递归获取子节点的文本
            if (_node.children) {
              traversal(_node.children);
            }
            if (isBlock && text[text.length - 1] !== '\n') {
              text += '\n';
            } else if (_node.name === 'td' || _node.name === 'th') {
              text += '\t';
            }
          }
        }
      })(nodes || this.nodes);
      return text;
    },

    /**
        * @description 获取内容大小和位置
        * @return {Promise}
        */
    getRect: function getRect() {var _this2 = this;
      return new Promise(function (resolve, reject) {
        uni.createSelectorQuery().

        in(_this2).

        select('#_root').boundingClientRect().exec(function (res) {return res[0] ? resolve(res[0]) : reject(Error('Root label not found'));});
      });
    },

    /**
        * @description 设置内容
        * @param {String} content html 内容
        * @param {Boolean} append 是否在尾部追加
        */
    setContent: function setContent(content, append) {var _this3 = this;
      if (!append || !this.imgList) {
        this.imgList = [];
      }
      var nodes = new Parser(this).parse(content);





      this.$set(this, 'nodes', append ? (this.nodes || []).concat(nodes) : nodes);


      this._videos = [];
      this.$nextTick(function () {
        _this3._hook('onLoad');
        _this3.$emit('load');
      });

      // 等待图片加载完毕
      var height;
      clearInterval(this._timer);
      this._timer = setInterval(function () {
        _this3.getRect().then(function (rect) {
          // 350ms 总高度无变化就触发 ready 事件
          if (rect.height === height) {
            _this3.$emit('ready', rect);
            clearInterval(_this3._timer);
          }
          height = rect.height;
        }).catch(function () {});
      }, 350);

    },

    /**
        * @description 调用插件钩子函数
        */
    _hook: function _hook(name) {
      for (var i = plugins.length; i--;) {
        if (this.plugins[i][name]) {
          this.plugins[i][name]();
        }
      }
    } } };exports.default = _default;

/***/ }),
/* 27 */
/*!************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.vue?vue&type=template&id=7ee5387f&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK%2FlkKbkvb%2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ%3D%3D& */ 28);
/* harmony import */ var _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.vue?vue&type=script&lang=js& */ 30);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);
/* harmony import */ var _node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs */ 32);

var renderjs




/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* custom blocks */

if (typeof _node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_3__["default"] === 'function') Object(_node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_3__["default"])(component)

component.options.__file = "node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=template&id=7ee5387f&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK%2FlkKbkvb%2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ%3D%3D& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=template&id=7ee5387f&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK%2FlkKbkvb%2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ%3D%3D& */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 29 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=template&id=7ee5387f&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK%2FlkKbkvb%2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ%3D%3D& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            ? _c("audio", {
                key: _vm._$s(1, "f", {
                  forIndex: $20,
                  keyIndex: -1,
                  key: 1 + "--1" + $30
                }),
                class: _vm._$s("11-" + $30, "c", n.attrs.class),
                style: _vm._$s("11-" + $30, "s", n.attrs.style),
                attrs: {
                  id: _vm._$s("11-" + $30, "a-id", n.attrs.id),
                  author: _vm._$s("11-" + $30, "a-author", n.attrs.author),
                  controls: _vm._$s(
                    "11-" + $30,
                    "a-controls",
                    n.attrs.controls
                  ),
                  loop: _vm._$s("11-" + $30, "a-loop", n.attrs.loop),
                  name: _vm._$s("11-" + $30, "a-name", n.attrs.name),
                  poster: _vm._$s("11-" + $30, "a-poster", n.attrs.poster),
                  src: _vm._$s("11-" + $30, "a-src", n.src[_vm.ctrl[i] || 0]),
                  "data-i": _vm._$s("11-" + $30, "a-data-i", i),
                  _i: "11-" + $30
                },
                on: { play: _vm.play, error: _vm.mediaError }
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
/* 30 */
/*!*************************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=script&lang=js& */ 31);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




































































































var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 = { name: 'node', options: {}, data: function data() {return { ctrl: {} };}, props: { name: String, attrs: { type: Object, default: function _default() {return {};} }, childs: Array, opts: Array }, components: { node: _node.default }, mounted: function mounted() {var _this = this;this.$nextTick(function () {for (_this.root = _this.$parent; _this.root.$options.name !== 'mp-html'; _this.root = _this.root.$parent) {;}});if (this.opts[0]) {var i;for (i = this.childs.length; i--;) {if (this.childs[i].name === 'img') break;}if (i !== -1) {this.observer = uni.createIntersectionObserver(this).relativeToViewport({ top: 500, bottom: 500 });this.observer.observe('._img', function (res) {if (res.intersectionRatio) {_this.$set(_this.ctrl, 'load', 1);_this.observer.disconnect();}});}}}, beforeDestroy: function beforeDestroy() {if (this.observer) {this.observer.disconnect();}}, methods: { /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description 播放视频事件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {Event} e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */play: function play(e) {}, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @description 图片点击事件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @param {Event} e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */imgTap: function imgTap(e) {var node = this.childs[e.currentTarget.dataset.i];if (node.a) {this.linkTap(node.a);return;}
      if (node.attrs.ignore) return;

      node.attrs.src = node.attrs.src || node.attrs['data-src'];

      this.root.$emit('imgtap', node.attrs);
      // 自动预览图片
      if (this.root.previewImg) {
        uni.previewImage({
          current: parseInt(node.attrs.i),
          urls: this.root.imgList });

      }
    },

    /**
        * @description 图片长按
        */
    imgLongTap: function imgLongTap(e) {var _this2 = this;

      var attrs = this.childs[e.currentTarget.dataset.i].attrs;
      if (this.opts[3] && !attrs.ignore) {
        uni.showActionSheet({
          itemList: ['保存图片'],
          success: function success() {
            var save = function save(path) {
              uni.saveImageToPhotosAlbum({
                filePath: path,
                success: function success() {
                  uni.showToast({
                    title: '保存成功' });

                } });

            };
            if (_this2.root.imgList[attrs.i].startsWith('http')) {
              uni.downloadFile({
                url: _this2.root.imgList[attrs.i],
                success: function success(res) {return save(res.tempFilePath);} });

            } else {
              save(_this2.root.imgList[attrs.i]);
            }
          } });

      }

    },

    /**
        * @description 图片加载完成事件
        * @param {Event} e
        */
    imgLoad: function imgLoad(e) {
      var i = e.currentTarget.dataset.i;




      if (this.opts[1] && !this.ctrl[i] || this.ctrl[i] === -1) {
        // 加载完毕，取消加载中占位图
        this.$set(this.ctrl, i, 1);
      }
    },

    /**
        * @description 链接点击事件
        * @param {Event} e
        */
    linkTap: function linkTap(e) {
      var node = e.currentTarget ? this.childs[e.currentTarget.dataset.i] : {};
      var attrs = node.attrs || e;
      var href = attrs.href;
      this.root.$emit('linktap', Object.assign({
        innerText: this.root.getText(node.children || []) // 链接内的文本内容
      }, attrs));
      if (href) {
        if (href[0] === '#') {
          // 跳转锚点
          this.root.navigateTo(href.substring(1)).catch(function () {});
        } else if (href.split('?')[0].includes('://')) {
          // 复制外部链接
          if (this.root.copyLink) {













            plus.runtime.openWeb(href);

          }
        } else {
          // 跳转页面
          uni.navigateTo({
            url: href,
            fail: function fail() {
              uni.switchTab({
                url: href,
                fail: function fail() {} });

            } });

        }
      }
    },

    /**
        * @description 错误事件
        * @param {Event} e
        */
    mediaError: function mediaError(e) {
      var i = e.currentTarget.dataset.i;
      var node = this.childs[i];
      // 加载其他源
      if (node.name === 'video' || node.name === 'audio') {
        var index = (this.ctrl[i] || 0) + 1;
        if (index > node.src.length) {
          index = 0;
        }
        if (index < node.src.length) {
          this.$set(this.ctrl, i, index);
          return;
        }
      } else if (node.name === 'img' && this.opts[2]) {
        // 显示错误占位图
        this.$set(this.ctrl, i, -1);
      }
      if (this.root) {
        this.root.$emit('error', {
          source: node.name,
          attrs: node.attrs,
          errMsg: e.detail.errMsg });

      }
    } } };exports.default = _default2;

/***/ }),
/* 32 */
/*!*****************************************************************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs */ 33);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 33 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (Component) {
       (Component.options.wxs||(Component.options.wxs={}))['handler'] = (function(module){
       // 行内标签列表
var inlineTags = {
  abbr: true,
  b: true,
  big: true,
  code: true,
  del: true,
  em: true,
  i: true,
  ins: true,
  label: true,
  q: true,
  small: true,
  span: true,
  strong: true,
  sub: true,
  sup: true
}
/**
 * @description 是否使用 rich-text 显示剩余内容
 */
module.exports = {
  use: function (item) {
    if (item.c) return false
    // 微信和 QQ 的 rich-text inline 布局无效
    return !inlineTags[item.name] && (item.attrs.style || '').indexOf('display:inline') == -1
  }
}
       return module.exports
       })({exports:{}});
     });

/***/ }),
/* 34 */
/*!********************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/parser.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileoverview html 解析器
 */

// 配置
var config = {
  // 信任的标签（保持标签名不变）
  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),

  // 块级标签（转为 div，其他的非信任标签转为 span）
  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),

  // 要移除的标签
  ignoreTags: makeMap('area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr'),

  // 自闭合的标签
  voidTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),

  // html 实体
  entities: {
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    ensp: "\u2002",
    emsp: "\u2003",
    nbsp: '\xA0',
    semi: ';',
    ndash: '–',
    mdash: '—',
    middot: '·',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    bull: '•',
    hellip: '…' },


  // 默认的标签样式
  tagStyle: {

    address: 'font-style:italic',
    big: 'display:inline;font-size:1.2em',
    caption: 'display:table-caption;text-align:center',
    center: 'text-align:center',
    cite: 'font-style:italic',
    dd: 'margin-left:40px',
    mark: 'background-color:yellow',
    pre: 'font-family:monospace;white-space:pre',
    s: 'text-decoration:line-through',
    small: 'display:inline;font-size:0.8em',
    strike: 'text-decoration:line-through',
    u: 'text-decoration:underline' },



  // svg 大小写对照表
  svgDict: {
    animatetransform: 'animateTransform',
    lineargradient: 'linearGradient',
    viewbox: 'viewBox',
    attributename: 'attributeName',
    repeatcount: 'repeatCount',
    repeatdur: 'repeatDur' } };


var tagSelector = {};var _uni$getSystemInfoSyn =





uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth;
var blankChar = makeMap(' ,\r,\n,\t,\f');
var idIndex = 0;


config.ignoreTags.iframe = undefined;
config.trustTags.iframe = true;
config.ignoreTags.embed = undefined;
config.trustTags.embed = true;






/**
                                * @description 创建 map
                                * @param {String} str 逗号分隔
                                */
function makeMap(str) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = list.length; i--;) {
    map[list[i]] = true;
  }
  return map;
}

/**
   * @description 解码 html 实体
   * @param {String} str 要解码的字符串
   * @param {Boolean} amp 要不要解码 &amp;
   * @returns {String} 解码后的字符串
   */
function decodeEntity(str, amp) {
  var i = str.indexOf('&');
  while (i !== -1) {
    var j = str.indexOf(';', i + 3);
    var code = void 0;
    if (j === -1) break;
    if (str[i + 1] === '#') {
      // &#123; 形式的实体
      code = parseInt((str[i + 2] === 'x' ? '0' : '') + str.substring(i + 2, j));
      if (!isNaN(code)) {
        str = str.substr(0, i) + String.fromCharCode(code) + str.substr(j + 1);
      }
    } else {
      // &nbsp; 形式的实体
      code = str.substring(i + 1, j);
      if (config.entities[code] || code === 'amp' && amp) {
        str = str.substr(0, i) + (config.entities[code] || '&') + str.substr(j + 1);
      }
    }
    i = str.indexOf('&', i + 1);
  }
  return str;
}

/**
   * @description html 解析器
   * @param {Object} vm 组件实例
   */
function Parser(vm) {
  this.options = vm || {};
  this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
  this.imgList = vm.imgList || [];
  this.plugins = vm.plugins || [];
  this.attrs = Object.create(null);
  this.stack = [];
  this.nodes = [];
  this.pre = (this.options.containerStyle || '').includes('white-space') && this.options.containerStyle.includes('pre') ? 2 : 0;
}

/**
   * @description 执行解析
   * @param {String} content 要解析的文本
   */
Parser.prototype.parse = function (content) {
  // 插件处理
  for (var i = this.plugins.length; i--;) {
    if (this.plugins[i].onUpdate) {
      content = this.plugins[i].onUpdate(content, config) || content;
    }
  }

  new Lexer(this).parse(content);
  // 出栈未闭合的标签
  while (this.stack.length) {
    this.popNode();
  }
  return this.nodes;
};

/**
    * @description 将标签暴露出来（不被 rich-text 包含）
    */
Parser.prototype.expose = function () {

  for (var i = this.stack.length; i--;) {
    var item = this.stack[i];
    if (item.c || item.name === 'a' || item.name === 'video' || item.name === 'audio') return;
    item.c = 1;
  }

};

/**
    * @description 处理插件
    * @param {Object} node 要处理的标签
    * @returns {Boolean} 是否要移除此标签
    */
Parser.prototype.hook = function (node) {
  for (var i = this.plugins.length; i--;) {
    if (this.plugins[i].onParse && this.plugins[i].onParse(node, this) === false) {
      return false;
    }
  }
  return true;
};

/**
    * @description 将链接拼接上主域名
    * @param {String} url 需要拼接的链接
    * @returns {String} 拼接后的链接
    */
Parser.prototype.getUrl = function (url) {
  var domain = this.options.domain;
  if (url[0] === '/') {
    if (url[1] === '/') {
      // // 开头的补充协议名
      url = (domain ? domain.split('://')[0] : 'http') + ':' + url;
    } else if (domain) {
      // 否则补充整个域名
      url = domain + url;
    }
  } else if (domain && !url.includes('data:') && !url.includes('://')) {
    url = domain + '/' + url;
  }
  return url;
};

/**
    * @description 解析样式表
    * @param {Object} node 标签
    * @returns {Object}
    */
Parser.prototype.parseStyle = function (node) {
  var attrs = node.attrs;
  var list = (this.tagStyle[node.name] || '').split(';').concat((attrs.style || '').split(';'));
  var styleObj = {};
  var tmp = '';

  if (attrs.id && !this.xml) {
    // 暴露锚点
    if (this.options.useAnchor) {
      this.expose();
    } else if (node.name !== 'img' && node.name !== 'a' && node.name !== 'video' && node.name !== 'audio') {
      attrs.id = undefined;
    }
  }

  // 转换 width 和 height 属性
  if (attrs.width) {
    styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
    attrs.width = undefined;
  }
  if (attrs.height) {
    styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
    attrs.height = undefined;
  }

  for (var i = 0, len = list.length; i < len; i++) {
    var info = list[i].split(':');
    if (info.length < 2) continue;
    var key = info.shift().trim().toLowerCase();
    var value = info.join(':').trim();
    if (value[0] === '-' && value.lastIndexOf('-') > 0 || value.includes('safe')) {
      // 兼容性的 css 不压缩
      tmp += ";".concat(key, ":").concat(value);
    } else if (!styleObj[key] || value.includes('import') || !styleObj[key].includes('import')) {
      // 重复的样式进行覆盖
      if (value.includes('url')) {
        // 填充链接
        var j = value.indexOf('(') + 1;
        if (j) {
          while (value[j] === '"' || value[j] === "'" || blankChar[value[j]]) {
            j++;
          }
          value = value.substr(0, j) + this.getUrl(value.substr(j));
        }
      } else if (value.includes('rpx')) {
        // 转换 rpx（rich-text 内部不支持 rpx）
        value = value.replace(/[0-9.]+\s*rpx/g, function ($) {return parseFloat($) * windowWidth / 750 + 'px';});
      }
      styleObj[key] = value;
    }
  }

  node.attrs.style = tmp;
  return styleObj;
};

/**
    * @description 解析到标签名
    * @param {String} name 标签名
    * @private
    */
Parser.prototype.onTagName = function (name) {
  this.tagName = this.xml ? name : name.toLowerCase();
  if (this.tagName === 'svg') {
    this.xml = (this.xml || 0) + 1; // svg 标签内大小写敏感
  }
};

/**
    * @description 解析到属性名
    * @param {String} name 属性名
    * @private
    */
Parser.prototype.onAttrName = function (name) {
  name = this.xml ? name : name.toLowerCase();
  if (name.substr(0, 5) === 'data-') {
    if (name === 'data-src' && !this.attrs.src) {
      // data-src 自动转为 src
      this.attrName = 'src';
    } else if (this.tagName === 'img' || this.tagName === 'a') {
      // a 和 img 标签保留 data- 的属性，可以在 imgtap 和 linktap 事件中使用
      this.attrName = name;
    } else {
      // 剩余的移除以减小大小
      this.attrName = undefined;
    }
  } else {
    this.attrName = name;
    this.attrs[name] = 'T'; // boolean 型属性缺省设置
  }
};

/**
    * @description 解析到属性值
    * @param {String} val 属性值
    * @private
    */
Parser.prototype.onAttrVal = function (val) {
  var name = this.attrName || '';
  if (name === 'style' || name === 'href') {
    // 部分属性进行实体解码
    this.attrs[name] = decodeEntity(val, true);
  } else if (name.includes('src')) {
    // 拼接主域名
    this.attrs[name] = this.getUrl(decodeEntity(val, true));
  } else if (name) {
    this.attrs[name] = val;
  }
};

/**
    * @description 解析到标签开始
    * @param {Boolean} selfClose 是否有自闭合标识 />
    * @private
    */
Parser.prototype.onOpenTag = function (selfClose) {
  // 拼装 node
  var node = Object.create(null);
  node.name = this.tagName;
  node.attrs = this.attrs;
  // 避免因为自动 diff 使得 type 被设置为 null 导致部分内容不显示
  if (this.options.nodes.length) {
    node.type = 'node';
  }
  this.attrs = Object.create(null);

  var attrs = node.attrs;
  var parent = this.stack[this.stack.length - 1];
  var siblings = parent ? parent.children : this.nodes;
  var close = this.xml ? selfClose : config.voidTags[node.name];

  // 替换标签名选择器
  if (tagSelector[node.name]) {
    attrs.class = tagSelector[node.name] + (attrs.class ? ' ' + attrs.class : '');
  }

  // 转换 embed 标签
  if (node.name === 'embed') {














    this.expose();

  }


  // 处理音视频
  if (node.name === 'video' || node.name === 'audio') {
    // 设置 id 以便获取 context
    if (node.name === 'video' && !attrs.id) {
      attrs.id = 'v' + idIndex++;
    }
    // 没有设置 controls 也没有设置 autoplay 的自动设置 controls
    if (!attrs.controls && !attrs.autoplay) {
      attrs.controls = 'T';
    }
    // 用数组存储所有可用的 source
    node.src = [];
    if (attrs.src) {
      node.src.push(attrs.src);
      attrs.src = undefined;
    }
    this.expose();
  }


  // 处理自闭合标签
  if (close) {
    if (!this.hook(node) || config.ignoreTags[node.name]) {
      // 通过 base 标签设置主域名
      if (node.name === 'base' && !this.options.domain) {
        this.options.domain = attrs.href;
      } else if (node.name === 'source' && parent && (parent.name === 'video' || parent.name === 'audio') && attrs.src) {
        // 设置 source 标签（仅父节点为 video 或 audio 时有效）
        parent.src.push(attrs.src);
      }
      return;
    }

    // 解析 style
    var styleObj = this.parseStyle(node);

    // 处理图片
    if (node.name === 'img') {
      if (attrs.src) {
        // 标记 webp
        if (attrs.src.includes('webp')) {
          node.webp = 'T';
        }
        // data url 图片如果没有设置 original-src 默认为不可预览的小图片
        if (attrs.src.includes('data:') && !attrs['original-src']) {
          attrs.ignore = 'T';
        }
        if (!attrs.ignore || node.webp || attrs.src.includes('cloud://')) {
          for (var i = this.stack.length; i--;) {
            var item = this.stack[i];
            if (item.name === 'a') {
              node.a = item.attrs;
              break;
            }

























            item.c = 1;
          }
          attrs.i = this.imgList.length.toString();
          var src = attrs['original-src'] || attrs.src;
















          this.imgList.push(src);

          if (this.options.lazyLoad) {
            attrs['data-src'] = attrs.src;
            attrs.src = undefined;
          }

        }
      }
      if (styleObj.display === 'inline') {
        styleObj.display = '';
      }

      if (attrs.ignore) {
        styleObj['max-width'] = styleObj['max-width'] || '100%';
        attrs.style += ';-webkit-touch-callout:none';
      }

      // 设置的宽度超出屏幕，为避免变形，高度转为自动
      if (parseInt(styleObj.width) > windowWidth) {
        styleObj.height = undefined;
      }
      // 记录是否设置了宽高
      if (styleObj.width) {
        if (styleObj.width.includes('auto')) {
          styleObj.width = '';
        } else {
          node.w = 'T';
          if (styleObj.height && !styleObj.height.includes('auto')) {
            node.h = 'T';
          }
        }
      }
    } else if (node.name === 'svg') {
      siblings.push(node);
      this.stack.push(node);
      this.popNode();
      return;
    }
    for (var key in styleObj) {
      if (styleObj[key]) {
        attrs.style += ";".concat(key, ":").concat(styleObj[key].replace(' !important', ''));
      }
    }
    attrs.style = attrs.style.substr(1) || undefined;
  } else {
    if ((node.name === 'pre' || (attrs.style || '').includes('white-space') && attrs.style.includes('pre')) && this.pre !== 2) {
      this.pre = node.pre = 1;
    }
    node.children = [];
    this.stack.push(node);
  }

  // 加入节点树
  siblings.push(node);
};

/**
    * @description 解析到标签结束
    * @param {String} name 标签名
    * @private
    */
Parser.prototype.onCloseTag = function (name) {
  // 依次出栈到匹配为止
  name = this.xml ? name : name.toLowerCase();
  var i;
  for (i = this.stack.length; i--;) {
    if (this.stack[i].name === name) break;
  }
  if (i !== -1) {
    while (this.stack.length > i) {
      this.popNode();
    }
  } else if (name === 'p' || name === 'br') {
    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push({
      name: name,
      attrs: {
        class: tagSelector[name],
        style: this.tagStyle[name] } });


  }
};

/**
    * @description 处理标签出栈
    * @private
    */
Parser.prototype.popNode = function () {
  var node = this.stack.pop();
  var attrs = node.attrs;
  var children = node.children;
  var parent = this.stack[this.stack.length - 1];
  var siblings = parent ? parent.children : this.nodes;

  if (!this.hook(node) || config.ignoreTags[node.name]) {
    // 获取标题
    if (node.name === 'title' && children.length && children[0].type === 'text' && this.options.setTitle) {
      uni.setNavigationBarTitle({
        title: children[0].text });

    }
    siblings.pop();
    return;
  }

  if (node.pre && this.pre !== 2) {
    // 是否合并空白符标识
    this.pre = node.pre = undefined;
    for (var i = this.stack.length; i--;) {
      if (this.stack[i].pre) {
        this.pre = 1;
      }
    }
  }

  var styleObj = {};

  // 转换 svg
  if (node.name === 'svg') {
    if (this.xml > 1) {
      // 多层 svg 嵌套
      this.xml--;
      return;
    }


















    var src = '';
    var style = attrs.style;
    attrs.style = '';
    attrs.xmlns = 'http://www.w3.org/2000/svg';
    (function traversal(node) {
      if (node.type === 'text') {
        src += node.text;
        return;
      }
      var name = config.svgDict[node.name] || node.name;
      src += '<' + name;
      for (var item in node.attrs) {
        var val = node.attrs[item];
        if (val) {
          src += " ".concat(config.svgDict[item] || item, "=\"").concat(val, "\"");
        }
      }
      if (!node.children) {
        src += '/>';
      } else {
        src += '>';
        for (var _i = 0; _i < node.children.length; _i++) {
          traversal(node.children[_i]);
        }
        src += '</' + name + '>';
      }
    })(node);
    node.name = 'img';
    node.attrs = {
      src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
      style: style,
      ignore: 'T' };

    node.children = undefined;

    this.xml = false;
    return;
  }


  // 转换 align 属性
  if (attrs.align) {
    if (node.name === 'table') {
      if (attrs.align === 'center') {
        styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';
      } else {
        styleObj.float = attrs.align;
      }
    } else {
      styleObj['text-align'] = attrs.align;
    }
    attrs.align = undefined;
  }

  // 转换 dir 属性
  if (attrs.dir) {
    styleObj.direction = attrs.dir;
    attrs.dir = undefined;
  }

  // 转换 font 标签的属性
  if (node.name === 'font') {
    if (attrs.color) {
      styleObj.color = attrs.color;
      attrs.color = undefined;
    }
    if (attrs.face) {
      styleObj['font-family'] = attrs.face;
      attrs.face = undefined;
    }
    if (attrs.size) {
      var size = parseInt(attrs.size);
      if (!isNaN(size)) {
        if (size < 1) {
          size = 1;
        } else if (size > 7) {
          size = 7;
        }
        styleObj['font-size'] = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'][size - 1];
      }
      attrs.size = undefined;
    }
  }


  // 一些编辑器的自带 class
  if ((attrs.class || '').includes('align-center')) {
    styleObj['text-align'] = 'center';
  }

  Object.assign(styleObj, this.parseStyle(node));

  if (node.name !== 'table' && parseInt(styleObj.width) > windowWidth) {
    styleObj['max-width'] = '100%';
    styleObj['box-sizing'] = 'border-box';
  }


  if (config.blockTags[node.name]) {
    node.name = 'div';
  } else if (!config.trustTags[node.name] && !this.xml) {
    // 未知标签转为 span，避免无法显示
    node.name = 'span';
  }

  if (node.name === 'a' || node.name === 'ad' ||

  node.name === 'iframe' // eslint-disable-line
  )
    {
      this.expose();
    } else if (node.name === 'video') {
    var str = '<video style="width:100%;height:100%"';
    for (var item in attrs) {
      if (attrs[item]) {
        str += ' ' + item + '="' + attrs[item] + '"';
      }
    }
    if (this.options.pauseVideo) {
      str += ' onplay="for(var e=document.getElementsByTagName(\'video\'),t=0;t<e.length;t++)e[t]!=this&&e[t].pause()"';
    }
    str += '>';
    for (var _i2 = 0; _i2 < node.src.length; _i2++) {
      str += '<source src="' + node.src[_i2] + '">';
    }
    str += '</video>';
    node.html = str;
  } else if ((node.name === 'ul' || node.name === 'ol') && node.c) {
    // 列表处理
    var types = {
      a: 'lower-alpha',
      A: 'upper-alpha',
      i: 'lower-roman',
      I: 'upper-roman' };

    if (types[attrs.type]) {
      attrs.style += ';list-style-type:' + types[attrs.type];
      attrs.type = undefined;
    }
    for (var _i3 = children.length; _i3--;) {
      if (children[_i3].name === 'li') {
        children[_i3].c = 1;
      }
    }
  } else if (node.name === 'table') {
    // 表格处理
    // cellpadding、cellspacing、border 这几个常用表格属性需要通过转换实现
    var padding = parseFloat(attrs.cellpadding);
    var spacing = parseFloat(attrs.cellspacing);
    var border = parseFloat(attrs.border);
    if (node.c) {
      // padding 和 spacing 默认 2
      if (isNaN(padding)) {
        padding = 2;
      }
      if (isNaN(spacing)) {
        spacing = 2;
      }
    }
    if (border) {
      attrs.style += ';border:' + border + 'px solid gray';
    }
    if (node.flag && node.c) {
      // 有 colspan 或 rowspan 且含有链接的表格通过 grid 布局实现
      styleObj.display = 'grid';
      if (spacing) {
        styleObj['grid-gap'] = spacing + 'px';
        styleObj.padding = spacing + 'px';
      } else if (border) {
        // 无间隔的情况下避免边框重叠
        attrs.style += ';border-left:0;border-top:0';
      }

      var width = []; // 表格的列宽
      var trList = []; // tr 列表
      var cells = []; // 保存新的单元格
      var map = {}; // 被合并单元格占用的格子

      (function traversal(nodes) {
        for (var _i4 = 0; _i4 < nodes.length; _i4++) {
          if (nodes[_i4].name === 'tr') {
            trList.push(nodes[_i4]);
          } else {
            traversal(nodes[_i4].children || []);
          }
        }
      })(children);

      for (var row = 1; row <= trList.length; row++) {
        var col = 1;
        for (var j = 0; j < trList[row - 1].children.length; j++, col++) {
          var td = trList[row - 1].children[j];
          if (td.name === 'td' || td.name === 'th') {
            // 这个格子被上面的单元格占用，则列号++
            while (map[row + '.' + col]) {
              col++;
            }
            var _style = td.attrs.style || '';
            var start = _style.indexOf('width') ? _style.indexOf(';width') : 0;
            // 提取出 td 的宽度
            if (start !== -1) {
              var end = _style.indexOf(';', start + 6);
              if (end === -1) {
                end = _style.length;
              }
              if (!td.attrs.colspan) {
                width[col] = _style.substring(start ? start + 7 : 6, end);
              }
              _style = _style.substr(0, start) + _style.substr(end);
            }
            _style += (border ? ";border:".concat(border, "px solid gray") + (spacing ? '' : ';border-right:0;border-bottom:0') : '') + (padding ? ";padding:".concat(padding, "px") : '');
            // 处理列合并
            if (td.attrs.colspan) {
              _style += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + parseInt(td.attrs.colspan));
              if (!td.attrs.rowspan) {
                _style += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + 1);
              }
              col += parseInt(td.attrs.colspan) - 1;
            }
            // 处理行合并
            if (td.attrs.rowspan) {
              _style += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + parseInt(td.attrs.rowspan));
              if (!td.attrs.colspan) {
                _style += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + 1);
              }
              // 记录下方单元格被占用
              for (var rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                for (var colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                  map[row + rowspan + '.' + (col - colspan)] = 1;
                }
              }
            }
            if (_style) {
              td.attrs.style = _style;
            }
            cells.push(td);
          }
        }
        if (row === 1) {
          var temp = '';
          for (var _i5 = 1; _i5 < col; _i5++) {
            temp += (width[_i5] ? width[_i5] : 'auto') + ' ';
          }
          styleObj['grid-template-columns'] = temp;
        }
      }
      node.children = cells;
    } else {
      // 没有使用合并单元格的表格通过 table 布局实现
      if (node.c) {
        styleObj.display = 'table';
      }
      if (!isNaN(spacing)) {
        styleObj['border-spacing'] = spacing + 'px';
      }
      if (border || padding) {
        // 遍历
        (function traversal(nodes) {
          for (var _i6 = 0; _i6 < nodes.length; _i6++) {
            var _td = nodes[_i6];
            if (_td.name === 'th' || _td.name === 'td') {
              if (border) {
                _td.attrs.style = "border:".concat(border, "px solid gray;").concat(_td.attrs.style || '');
              }
              if (padding) {
                _td.attrs.style = "padding:".concat(padding, "px;").concat(_td.attrs.style || '');
              }
            } else if (_td.children) {
              traversal(_td.children);
            }
          }
        })(children);
      }
    }
    // 给表格添加一个单独的横向滚动层
    if (this.options.scrollTable && !(attrs.style || '').includes('inline')) {
      var table = Object.assign({}, node);
      node.name = 'div';
      node.attrs = {
        style: 'overflow:auto' };

      node.children = [table];
      attrs = table.attrs;
    }
  } else if ((node.name === 'td' || node.name === 'th') && (attrs.colspan || attrs.rowspan)) {
    for (var _i7 = this.stack.length; _i7--;) {
      if (this.stack[_i7].name === 'table') {
        this.stack[_i7].flag = 1; // 指示含有合并单元格
        break;
      }
    }
  } else if (node.name === 'ruby') {
    // 转换 ruby
    node.name = 'span';
    for (var _i8 = 0; _i8 < children.length - 1; _i8++) {
      if (children[_i8].type === 'text' && children[_i8 + 1].name === 'rt') {
        children[_i8] = {
          name: 'div',
          attrs: {
            style: 'display:inline-block;text-align:center' },

          children: [{
            name: 'div',
            attrs: {
              style: 'font-size:50%;' + (children[_i8 + 1].attrs.style || '') },

            children: children[_i8 + 1].children },
          children[_i8]] };

        children.splice(_i8 + 1, 1);
      }
    }
  } else if (node.c) {
    node.c = 2;
    for (var _i9 = node.children.length; _i9--;) {
      if (!node.children[_i9].c || node.children[_i9].name === 'table') {
        node.c = 1;
      }
    }
  }

  if ((styleObj.display || '').includes('flex') && !node.c) {
    for (var _i10 = children.length; _i10--;) {
      var _item = children[_i10];
      if (_item.f) {
        _item.attrs.style = (_item.attrs.style || '') + _item.f;
        _item.f = undefined;
      }
    }
  }
  // flex 布局时部分样式需要提取到 rich-text 外层
  var flex = parent && (parent.attrs.style || '').includes('flex') &&





  !node.c; // eslint-disable-line

  if (flex) {
    node.f = ';max-width:100%';
  }


  for (var key in styleObj) {
    if (styleObj[key]) {
      var val = ";".concat(key, ":").concat(styleObj[key].replace(' !important', ''));

      if (flex && (key.includes('flex') && key !== 'flex-direction' || key === 'align-self' || styleObj[key][0] === '-' || key === 'width' && val.includes('%'))) {
        node.f += val;
        if (key === 'width') {
          attrs.style += ';width:100%';
        }
      } else {
        attrs.style += val;
      }
    }
  }
  attrs.style = attrs.style.substr(1) || undefined;
};

/**
    * @description 解析到文本
    * @param {String} text 文本内容
    */
Parser.prototype.onText = function (text) {
  if (!this.pre) {
    // 合并空白符
    var trim = '';
    var flag;
    for (var i = 0, len = text.length; i < len; i++) {
      if (!blankChar[text[i]]) {
        trim += text[i];
      } else {
        if (trim[trim.length - 1] !== ' ') {
          trim += ' ';
        }
        if (text[i] === '\n' && !flag) {
          flag = true;
        }
      }
    }
    // 去除含有换行符的空串
    if (trim === ' ' && flag) return;
    text = trim;
  }
  var node = Object.create(null);
  node.type = 'text';
  node.text = decodeEntity(text);
  if (this.hook(node)) {






    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push(node);
  }
};

/**
    * @description html 词法分析器
    * @param {Object} handler 高层处理器
    */
function Lexer(handler) {
  this.handler = handler;
}

/**
   * @description 执行解析
   * @param {String} content 要解析的文本
   */
Lexer.prototype.parse = function (content) {
  this.content = content || '';
  this.i = 0; // 标记解析位置
  this.start = 0; // 标记一个单词的开始位置
  this.state = this.text; // 当前状态
  for (var len = this.content.length; this.i !== -1 && this.i < len;) {
    this.state();
  }
};

/**
    * @description 检查标签是否闭合
    * @param {String} method 如果闭合要进行的操作
    * @returns {Boolean} 是否闭合
    * @private
    */
Lexer.prototype.checkClose = function (method) {
  var selfClose = this.content[this.i] === '/';
  if (this.content[this.i] === '>' || selfClose && this.content[this.i + 1] === '>') {
    if (method) {
      this.handler[method](this.content.substring(this.start, this.i));
    }
    this.i += selfClose ? 2 : 1;
    this.start = this.i;
    this.handler.onOpenTag(selfClose);
    if (this.handler.tagName === 'script') {
      this.i = this.content.indexOf('</', this.i);
      if (this.i !== -1) {
        this.i += 2;
        this.start = this.i;
      }
      this.state = this.endTag;
    } else {
      this.state = this.text;
    }
    return true;
  }
  return false;
};

/**
    * @description 文本状态
    * @private
    */
Lexer.prototype.text = function () {
  this.i = this.content.indexOf('<', this.i); // 查找最近的标签
  if (this.i === -1) {
    // 没有标签了
    if (this.start < this.content.length) {
      this.handler.onText(this.content.substring(this.start, this.content.length));
    }
    return;
  }
  var c = this.content[this.i + 1];
  if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
    // 标签开头
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    this.start = ++this.i;
    this.state = this.tagName;
  } else if (c === '/' || c === '!' || c === '?') {
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    var next = this.content[this.i + 2];
    if (c === '/' && (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z')) {
      // 标签结尾
      this.i += 2;
      this.start = this.i;
      this.state = this.endTag;
      return;
    }
    // 处理注释
    var end = '-->';
    if (c !== '!' || this.content[this.i + 2] !== '-' || this.content[this.i + 3] !== '-') {
      end = '>';
    }
    this.i = this.content.indexOf(end, this.i);
    if (this.i !== -1) {
      this.i += end.length;
      this.start = this.i;
    }
  } else {
    this.i++;
  }
};

/**
    * @description 标签名状态
    * @private
    */
Lexer.prototype.tagName = function () {
  if (blankChar[this.content[this.i]]) {
    // 解析到标签名
    this.handler.onTagName(this.content.substring(this.start, this.i));
    while (blankChar[this.content[++this.i]]) {;}
    if (this.i < this.content.length && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  } else if (!this.checkClose('onTagName')) {
    this.i++;
  }
};

/**
    * @description 属性名状态
    * @private
    */
Lexer.prototype.attrName = function () {
  var c = this.content[this.i];
  if (blankChar[c] || c === '=') {
    // 解析到属性名
    this.handler.onAttrName(this.content.substring(this.start, this.i));
    var needVal = c === '=';
    var len = this.content.length;
    while (++this.i < len) {
      c = this.content[this.i];
      if (!blankChar[c]) {
        if (this.checkClose()) return;
        if (needVal) {
          // 等号后遇到第一个非空字符
          this.start = this.i;
          this.state = this.attrVal;
          return;
        }
        if (this.content[this.i] === '=') {
          needVal = true;
        } else {
          this.start = this.i;
          this.state = this.attrName;
          return;
        }
      }
    }
  } else if (!this.checkClose('onAttrName')) {
    this.i++;
  }
};

/**
    * @description 属性值状态
    * @private
    */
Lexer.prototype.attrVal = function () {
  var c = this.content[this.i];
  var len = this.content.length;
  if (c === '"' || c === "'") {
    // 有冒号的属性
    this.start = ++this.i;
    this.i = this.content.indexOf(c, this.i);
    if (this.i === -1) return;
    this.handler.onAttrVal(this.content.substring(this.start, this.i));
  } else {
    // 没有冒号的属性
    for (; this.i < len; this.i++) {
      if (blankChar[this.content[this.i]]) {
        this.handler.onAttrVal(this.content.substring(this.start, this.i));
        break;
      } else if (this.checkClose('onAttrVal')) return;
    }
  }
  while (blankChar[this.content[++this.i]]) {;}
  if (this.i < len && !this.checkClose()) {
    this.start = this.i;
    this.state = this.attrName;
  }
};

/**
    * @description 结束标签状态
    * @returns {String} 结束的标签名
    * @private
    */
Lexer.prototype.endTag = function () {
  var c = this.content[this.i];
  if (blankChar[c] || c === '>' || c === '/') {
    this.handler.onCloseTag(this.content.substring(this.start, this.i));
    if (c !== '>') {
      this.i = this.content.indexOf('>', this.i);
      if (this.i === -1) return;
    }
    this.start = ++this.i;
    this.state = this.text;
  } else {
    this.i++;
  }
};

module.exports = Parser;

/***/ }),
/* 35 */
/*!*************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/App.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!**************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 37);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThoQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  globalData: {\n    apiKey: \"\" },\n\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:7\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:10\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:13\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwiYXBpS2V5Iiwib25MYXVuY2giLCJvblNob3ciLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7QUFDZTtBQUNkQSxZQUFVLEVBQUU7QUFDWEMsVUFBTSxFQUFFLEVBREcsRUFERTs7QUFJZEMsVUFBUSxFQUFFLG9CQUFXO0FBQ3BCLGlCQUFZLFlBQVo7QUFDQSxHQU5hO0FBT2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FUYTtBQVVkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBWmEsRSIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0YXBpS2V5OiBcIlwiXG5cdH0sXG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ })
],[[0,"app-config"]]]);