(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);__webpack_require__(/*! @dcloudio/uni-stat */ 45);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 49));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUIsa0RBQTRCOzs7QUFHL0Msc0U7QUFDQUEsYUFBSUMsTUFBSixDQUFXQyxhQUFYLEdBQTJCLEtBQTNCO0FBQ0FDLGFBQUlDLE1BQUosR0FBYSxLQUFiO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDUkcsWUFEUSxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7aW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG5cdC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
__definePage('pages/chat/chat', function () {return Vue.extend(__webpack_require__(/*! pages/chat/chat.vue?mpType=page */ 12).default);});
__definePage('pages/chat/redpacket', function () {return Vue.extend(__webpack_require__(/*! pages/chat/redpacket.vue?mpType=page */ 35).default);});
__definePage('pages/chat/userInfo', function () {return Vue.extend(__webpack_require__(/*! pages/chat/userInfo.vue?mpType=page */ 40).default);});

/***/ }),
/* 2 */
/*!***************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/index/index.vue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8);\n\n\n\nvar _sparkMd = _interopRequireDefault(__webpack_require__(/*! spark-md5 */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { ShowLogin: false, nameOrEmail: \"\", userPassword: \"\" };}, onLoad: function onLoad() {this.init();},\n  methods: {\n    init: function init() {var _this = this;\n      var apiKey = uni.getStorageSync('apiKey');\n      var data = uni.getStorageSync('userData');\n\n      if (!apiKey) {\n        // 你丫的登录信息没了，快去登录\n        setTimeout(function () {\n          _this.ShowLogin = true;\n        }, 100);\n      } else {\n        // 看看登录信息过期没有\n        this.CheckUser(apiKey);\n      }\n\n    },\n    login: function login() {\n      var that = this;\n      (0, _api.getKey)({\n        nameOrEmail: this.nameOrEmail,\n        userPassword: _sparkMd.default.hash(this.userPassword) }).\n      then(function (res) {\n        if (res.code == 0) {\n          __f__(\"log\", res, \" at pages/index/index.vue:52\");\n          // 没问题，先验证下,再滚去聊天室\n          that.CheckUser(res.Key);\n        } else {\n          // 报错就是你的错\n          uni.showToast({\n            title: '账号密码错误!',\n            icon: 'error',\n            duration: 2000 });\n\n        }\n      });\n    },\n    CheckUser: function CheckUser(apiKey) {var _this2 = this;\n      (0, _api.checkUser)({\n        apiKey: apiKey }).\n      then(function (res) {\n        if (res.code == 0) {\n          // 没过期，继续用\n          uni.setStorageSync('userData', res.data);\n          uni.setStorageSync('apiKey', apiKey);\n          getApp().globalData.data = res.data;\n          getApp().globalData.apiKey = apiKey;\n          uni.reLaunch({\n            url: '/pages/chat/chat' });\n\n        } else {\n          // 你丫的登录信息过期了，快去登录\n          setTimeout(function () {\n            _this2.ShowLogin = true;\n          }, 100);\n        }\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBOzs7O0FBSUEsZ0Y7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxnQkFEQSxFQUVBLGVBRkEsRUFHQSxnQkFIQSxHQUtBLENBUEEsRUFRQSxNQVJBLG9CQVFBLENBQ0EsWUFDQSxDQVZBO0FBV0E7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxHQUZBO0FBR0EsT0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBZkE7QUFnQkEsU0FoQkEsbUJBZ0JBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsOERBRkE7QUFHQSxVQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLHlCQUZBO0FBR0EsMEJBSEE7O0FBS0E7QUFDQSxPQWhCQTtBQWlCQSxLQW5DQTtBQW9DQSxhQXBDQSxxQkFvQ0EsTUFwQ0EsRUFvQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsVUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTs7QUFHQSxTQVRBLE1BU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLEVBRUEsR0FGQTtBQUdBO0FBQ0EsT0FsQkE7QUFtQkEsS0F4REEsRUFYQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8aW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxvZ2luLWZvcm0tYm94XCIgOmNsYXNzPVwie3Nob3cgOiBTaG93TG9naW59XCI+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luLWlucHV0XCIgdi1tb2RlbD1cIm5hbWVPckVtYWlsXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuaRuOmxvOa0vui0puWPt1wiIC8+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImxvZ2luLWlucHV0XCIgdi1tb2RlbD1cInVzZXJQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi5pG46bG85rS+5a+G56CBXCIgLz5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIGNsYXNzPVwibG9naW4tYnRuXCIgQGNsaWNrPVwibG9naW5cIj7nmbvlvZU8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRnZXRLZXksXHJcblx0XHRjaGVja1VzZXJcclxuXHR9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcclxuXHRpbXBvcnQgU3BhcmtNRDUgZnJvbSAnc3BhcmstbWQ1J1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0U2hvd0xvZ2luOiBmYWxzZSxcclxuXHRcdFx0XHRuYW1lT3JFbWFpbDogXCJcIixcclxuXHRcdFx0XHR1c2VyUGFzc3dvcmQ6IFwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0KCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRpbml0KCkge1xyXG5cdFx0XHRcdGxldCBhcGlLZXkgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2FwaUtleScpO1xyXG5cdFx0XHRcdGxldCBkYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyRGF0YScpO1xyXG5cclxuXHRcdFx0XHRpZiAoIWFwaUtleSkge1xyXG5cdFx0XHRcdFx0Ly8g5L2g5Lir55qE55m75b2V5L+h5oGv5rKh5LqG77yM5b+r5Y6755m75b2VXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5TaG93TG9naW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSwgMTAwKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDnnIvnnIvnmbvlvZXkv6Hmga/ov4fmnJ/msqHmnIlcclxuXHRcdFx0XHRcdHRoaXMuQ2hlY2tVc2VyKGFwaUtleSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2dpbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Z2V0S2V5KHtcclxuXHRcdFx0XHRcdG5hbWVPckVtYWlsOiB0aGlzLm5hbWVPckVtYWlsLFxyXG5cdFx0XHRcdFx0dXNlclBhc3N3b3JkOiBTcGFya01ENS5oYXNoKHRoaXMudXNlclBhc3N3b3JkKVxyXG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0Ly8g5rKh6Zeu6aKY77yM5YWI6aqM6K+B5LiLLOWGjea7muWOu+iBiuWkqeWupFxyXG5cdFx0XHRcdFx0XHR0aGF0LkNoZWNrVXNlcihyZXMuS2V5KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g5oql6ZSZ5bCx5piv5L2g55qE6ZSZXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6LSm5Y+35a+G56CB6ZSZ6K+vIScsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRDaGVja1VzZXIoYXBpS2V5KSB7XHJcblx0XHRcdFx0Y2hlY2tVc2VyKHtcclxuXHRcdFx0XHRcdGFwaUtleTogYXBpS2V5XHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0Ly8g5rKh6L+H5pyf77yM57un57ut55SoXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlckRhdGEnLCByZXMuZGF0YSlcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdhcGlLZXknLCBhcGlLZXkpXHJcblx0XHRcdFx0XHRcdGdldEFwcCgpLmdsb2JhbERhdGEuZGF0YSA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLmFwaUtleSA9IGFwaUtleTtcclxuXHRcdFx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvY2hhdC9jaGF0J1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g5L2g5Lir55qE55m75b2V5L+h5oGv6L+H5pyf5LqG77yM5b+r5Y6755m75b2VXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuU2hvd0xvZ2luID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSwgMTAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHRwYWRkaW5nOiA1dnc7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzNiM2U0MztcclxuXHR9XHJcblxyXG5cdC5sb2dvIHtcclxuXHRcdHdpZHRoOiA2MHB4O1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0bWFyZ2luOiAxNXZoIDI1dncgMnZoO1xyXG5cdFx0YW5pbWF0aW9uOiBnbyA1cyBpbmZpbml0ZTtcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1mb3JtLWJveCB7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHRyYW5zaXRpb246IC41cztcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1mb3JtLWJveC5zaG93IHtcclxuXHRcdGhlaWdodDogMzAwcHg7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0LmxvZ2luLWlucHV0IHtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0bWFyZ2luOiA1dncgYXV0bztcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggMnB4ICMzMzM7XHJcblx0fVxyXG5cclxuXHQubG9naW4tYnRuIHtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0bWFyZ2luOiA1dncgYXV0bztcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzYwYjA0NDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgZ28ge1xyXG5cdFx0MzAlIHtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTB2dyk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZ3KTtcclxuXHRcdH1cclxuXHJcblx0XHQ1MCUge1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHZ3KTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwdncpO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

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
/*!******************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/utils/api.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.upload = exports.getUserInfo = exports.deleteMsg = exports.faceList = exports.send = exports.openRedPacket = exports.getMorePage = exports.checkUser = exports.getKey = exports.WS = void 0;var _util = _interopRequireDefault(__webpack_require__(/*! ./util.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar baseURL = \"https://pwl.icu\";\nvar baaseWS = \"wss://pwl.icu\";\nvar API = {\n  getKey: baseURL + \"/api/getKey\",\n  checkUser: baseURL + \"/api/user\",\n  getUserInfo: baseURL + \"/user/\",\n  emotions: baseURL + \"/users/emotions\",\n  liveness: baseURL + \"user/liveness\",\n  more: baseURL + \"/chat-room/more\",\n  send: baseURL + \"/chat-room/send\",\n  delete: baseURL + \"/chat-room/revoke/\", ///chat-room/revoke/{消息oId}\n  open: baseURL + \"/chat-room/red-packet/open\",\n  getface: baseURL + \"/api/cloud/get\",\n  upload: baseURL + \"/upload\" };\n\n\nvar WS = {\n  channel: baaseWS + \"/chat-room-channel\" };exports.WS = WS;\n\n\nvar getKey = function getKey(params) {\n  return _util.default.flirt({\n    url: API.getKey,\n    data: params,\n    method: \"POST\" });\n\n};exports.getKey = getKey;\n\nvar checkUser = function checkUser(params) {\n  return _util.default.flirt({\n    url: API.checkUser,\n    data: params });\n\n};exports.checkUser = checkUser;\n\nvar getMorePage = function getMorePage(params) {\n  return _util.default.flirt({\n    url: API.more,\n    data: params });\n\n};exports.getMorePage = getMorePage;\n\nvar openRedPacket = function openRedPacket(params) {\n  return _util.default.flirt({\n    url: API.open,\n    data: params,\n    method: \"POST\" });\n\n};exports.openRedPacket = openRedPacket;\n\nvar send = function send(params) {\n  return _util.default.flirt({\n    url: API.send,\n    data: params,\n    method: \"POST\" });\n\n};exports.send = send;\n\nvar faceList = function faceList(params) {\n  return _util.default.flirt({\n    url: API.getface,\n    data: params,\n    method: \"POST\" });\n\n};exports.faceList = faceList;\n\nvar deleteMsg = function deleteMsg(params) {\n  return _util.default.flirt({\n    url: API.delete + params.oId,\n    data: {\n      apiKey: params.apiKey },\n\n    method: \"DELETE\" });\n\n};exports.deleteMsg = deleteMsg;\n\nvar getUserInfo = function getUserInfo(params) {\n  return _util.default.flirt({\n    url: API.getUserInfo + params });\n\n};exports.getUserInfo = getUserInfo;\nvar upload = function upload(params) {\n  // let data = new FormData();\n  // params.forEach(f => data.append('file[]', f));\n  return new Promise(function (resolve, reject) {\n    uni.uploadFile({\n      url: API.upload, //仅为示例，非真实的接口地址\n      filePath: params,\n      name: 'file[]',\n      header: {\n        \"enctype\": \"multipart/form-data\" },\n\n      success: function success(res) {\n        resolve(res);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n\n};exports.upload = upload;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBpLmpzIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJiYWFzZVdTIiwiQVBJIiwiZ2V0S2V5IiwiY2hlY2tVc2VyIiwiZ2V0VXNlckluZm8iLCJlbW90aW9ucyIsImxpdmVuZXNzIiwibW9yZSIsInNlbmQiLCJkZWxldGUiLCJvcGVuIiwiZ2V0ZmFjZSIsInVwbG9hZCIsIldTIiwiY2hhbm5lbCIsInBhcmFtcyIsIlVUSUwiLCJmbGlydCIsInVybCIsImRhdGEiLCJtZXRob2QiLCJnZXRNb3JlUGFnZSIsIm9wZW5SZWRQYWNrZXQiLCJmYWNlTGlzdCIsImRlbGV0ZU1zZyIsIm9JZCIsImFwaUtleSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidW5pIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIl0sIm1hcHBpbmdzIjoia1FBQUEsNEU7QUFDQSxJQUFNQSxPQUFPLEdBQUcsaUJBQWhCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLGVBQWhCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHO0FBQ1hDLFFBQU0sRUFBRUgsT0FBTyxHQUFHLGFBRFA7QUFFWEksV0FBUyxFQUFFSixPQUFPLEdBQUcsV0FGVjtBQUdYSyxhQUFXLEVBQUVMLE9BQU8sR0FBRyxRQUhaO0FBSVhNLFVBQVEsRUFBRU4sT0FBTyxHQUFHLGlCQUpUO0FBS1hPLFVBQVEsRUFBRVAsT0FBTyxHQUFHLGVBTFQ7QUFNWFEsTUFBSSxFQUFFUixPQUFPLEdBQUcsaUJBTkw7QUFPWFMsTUFBSSxFQUFFVCxPQUFPLEdBQUcsaUJBUEw7QUFRWFUsUUFBTSxFQUFFVixPQUFPLEdBQUcsb0JBUlAsRUFRNkI7QUFDeENXLE1BQUksRUFBRVgsT0FBTyxHQUFHLDRCQVRMO0FBVVhZLFNBQU8sRUFBRVosT0FBTyxHQUFHLGdCQVZSO0FBV1hhLFFBQU0sRUFBRWIsT0FBTyxHQUFHLFNBWFAsRUFBWjs7O0FBY08sSUFBTWMsRUFBRSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUVkLE9BQU8sR0FBRyxvQkFERixFQUFYLEM7OztBQUlBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFhLE1BQU0sRUFBSTtBQUMvQixTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRWpCLEdBQUcsQ0FBQ0MsTUFEUTtBQUVqQmlCLFFBQUksRUFBRUosTUFGVztBQUdqQkssVUFBTSxFQUFFLE1BSFMsRUFBWCxDQUFQOztBQUtBLENBTk0sQzs7QUFRQSxJQUFNakIsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQVksTUFBTSxFQUFJO0FBQ2xDLFNBQU9DLGNBQUtDLEtBQUwsQ0FBVztBQUNqQkMsT0FBRyxFQUFFakIsR0FBRyxDQUFDRSxTQURRO0FBRWpCZ0IsUUFBSSxFQUFFSixNQUZXLEVBQVgsQ0FBUDs7QUFJQSxDQUxNLEM7O0FBT0EsSUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQU4sTUFBTSxFQUFJO0FBQ3BDLFNBQU9DLGNBQUtDLEtBQUwsQ0FBVztBQUNqQkMsT0FBRyxFQUFFakIsR0FBRyxDQUFDTSxJQURRO0FBRWpCWSxRQUFJLEVBQUVKLE1BRlcsRUFBWCxDQUFQOztBQUlBLENBTE0sQzs7QUFPQSxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFQLE1BQU0sRUFBSTtBQUN0QyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRWpCLEdBQUcsQ0FBQ1MsSUFEUTtBQUVqQlMsUUFBSSxFQUFFSixNQUZXO0FBR2pCSyxVQUFNLEVBQUUsTUFIUyxFQUFYLENBQVA7O0FBS0EsQ0FOTSxDOztBQVFBLElBQU1aLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFPLE1BQU0sRUFBSTtBQUM3QixTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRWpCLEdBQUcsQ0FBQ08sSUFEUTtBQUVqQlcsUUFBSSxFQUFFSixNQUZXO0FBR2pCSyxVQUFNLEVBQUUsTUFIUyxFQUFYLENBQVA7O0FBS0EsQ0FOTSxDOztBQVFBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFSLE1BQU0sRUFBSTtBQUNqQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRWpCLEdBQUcsQ0FBQ1UsT0FEUTtBQUVqQlEsUUFBSSxFQUFFSixNQUZXO0FBR2pCSyxVQUFNLEVBQUUsTUFIUyxFQUFYLENBQVA7O0FBS0EsQ0FOTSxDOztBQVFBLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFULE1BQU0sRUFBSTtBQUNsQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRWpCLEdBQUcsQ0FBQ1EsTUFBSixHQUFhTSxNQUFNLENBQUNVLEdBRFI7QUFFakJOLFFBQUksRUFBQztBQUNKTyxZQUFNLEVBQUNYLE1BQU0sQ0FBQ1csTUFEVixFQUZZOztBQUtqQk4sVUFBTSxFQUFFLFFBTFMsRUFBWCxDQUFQOztBQU9BLENBUk0sQzs7QUFVQSxJQUFNaEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQVcsTUFBTSxFQUFJO0FBQ3BDLFNBQU9DLGNBQUtDLEtBQUwsQ0FBVztBQUNqQkMsT0FBRyxFQUFFakIsR0FBRyxDQUFDRyxXQUFKLEdBQWtCVyxNQUROLEVBQVgsQ0FBUDs7QUFHQSxDQUpNLEM7QUFLQSxJQUFNSCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBRyxNQUFNLEVBQUk7QUFDL0I7QUFDQTtBQUNBLFNBQU8sSUFBSVksT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2Q0MsT0FBRyxDQUFDQyxVQUFKLENBQWU7QUFDZGIsU0FBRyxFQUFFakIsR0FBRyxDQUFDVyxNQURLLEVBQ0c7QUFDakJvQixjQUFRLEVBQUVqQixNQUZJO0FBR2RrQixVQUFJLEVBQUUsUUFIUTtBQUlkQyxZQUFNLEVBQUM7QUFDTixtQkFBVSxxQkFESixFQUpPOztBQU9kQyxhQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtBQUNmUixlQUFPLENBQUNRLEdBQUQsQ0FBUDtBQUNBLE9BVGE7QUFVZEMsVUFBSSxFQUFFLGNBQUFDLEdBQUcsRUFBSTtBQUNaVCxjQUFNLENBQUNTLEdBQUQsQ0FBTjtBQUNBLE9BWmEsRUFBZjs7QUFjQSxHQWZNLENBQVA7O0FBaUJBLENBcEJNLEMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVVElMIGZyb20gJy4vdXRpbC5qcydcclxuY29uc3QgYmFzZVVSTCA9IFwiaHR0cHM6Ly9wd2wuaWN1XCJcclxuY29uc3QgYmFhc2VXUyA9IFwid3NzOi8vcHdsLmljdVwiXHJcbmNvbnN0IEFQSSA9IHtcclxuXHRnZXRLZXk6IGJhc2VVUkwgKyBcIi9hcGkvZ2V0S2V5XCIsXHJcblx0Y2hlY2tVc2VyOiBiYXNlVVJMICsgXCIvYXBpL3VzZXJcIixcclxuXHRnZXRVc2VySW5mbzogYmFzZVVSTCArIFwiL3VzZXIvXCIsXHJcblx0ZW1vdGlvbnM6IGJhc2VVUkwgKyBcIi91c2Vycy9lbW90aW9uc1wiLFxyXG5cdGxpdmVuZXNzOiBiYXNlVVJMICsgXCJ1c2VyL2xpdmVuZXNzXCIsXHJcblx0bW9yZTogYmFzZVVSTCArIFwiL2NoYXQtcm9vbS9tb3JlXCIsXHJcblx0c2VuZDogYmFzZVVSTCArIFwiL2NoYXQtcm9vbS9zZW5kXCIsXHJcblx0ZGVsZXRlOiBiYXNlVVJMICsgXCIvY2hhdC1yb29tL3Jldm9rZS9cIiwgLy8vY2hhdC1yb29tL3Jldm9rZS975raI5oGvb0lkfVxyXG5cdG9wZW46IGJhc2VVUkwgKyBcIi9jaGF0LXJvb20vcmVkLXBhY2tldC9vcGVuXCIsXHJcblx0Z2V0ZmFjZTogYmFzZVVSTCArIFwiL2FwaS9jbG91ZC9nZXRcIixcclxuXHR1cGxvYWQ6IGJhc2VVUkwgKyBcIi91cGxvYWRcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV1MgPSB7XHJcblx0Y2hhbm5lbDogYmFhc2VXUyArIFwiL2NoYXQtcm9vbS1jaGFubmVsXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRLZXkgPSBwYXJhbXMgPT4ge1xyXG5cdHJldHVybiBVVElMLmZsaXJ0KHtcclxuXHRcdHVybDogQVBJLmdldEtleSxcclxuXHRcdGRhdGE6IHBhcmFtcyxcclxuXHRcdG1ldGhvZDogXCJQT1NUXCJcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tVc2VyID0gcGFyYW1zID0+IHtcclxuXHRyZXR1cm4gVVRJTC5mbGlydCh7XHJcblx0XHR1cmw6IEFQSS5jaGVja1VzZXIsXHJcblx0XHRkYXRhOiBwYXJhbXNcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW9yZVBhZ2UgPSBwYXJhbXMgPT4ge1xyXG5cdHJldHVybiBVVElMLmZsaXJ0KHtcclxuXHRcdHVybDogQVBJLm1vcmUsXHJcblx0XHRkYXRhOiBwYXJhbXNcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlblJlZFBhY2tldCA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkub3BlbixcclxuXHRcdGRhdGE6IHBhcmFtcyxcclxuXHRcdG1ldGhvZDogXCJQT1NUXCJcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZCA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkuc2VuZCxcclxuXHRcdGRhdGE6IHBhcmFtcyxcclxuXHRcdG1ldGhvZDogXCJQT1NUXCJcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmFjZUxpc3QgPSBwYXJhbXMgPT4ge1xyXG5cdHJldHVybiBVVElMLmZsaXJ0KHtcclxuXHRcdHVybDogQVBJLmdldGZhY2UsXHJcblx0XHRkYXRhOiBwYXJhbXMsXHJcblx0XHRtZXRob2Q6IFwiUE9TVFwiXHJcblx0fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1zZyA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkuZGVsZXRlICsgcGFyYW1zLm9JZCxcclxuXHRcdGRhdGE6e1xyXG5cdFx0XHRhcGlLZXk6cGFyYW1zLmFwaUtleVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZDogXCJERUxFVEVcIlxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkuZ2V0VXNlckluZm8gKyBwYXJhbXMsXHJcblx0fSlcclxufVxyXG5leHBvcnQgY29uc3QgdXBsb2FkID0gcGFyYW1zID0+IHtcclxuXHQvLyBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdC8vIHBhcmFtcy5mb3JFYWNoKGYgPT4gZGF0YS5hcHBlbmQoJ2ZpbGVbXScsIGYpKTtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0dW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHR1cmw6IEFQSS51cGxvYWQsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcblx0XHRcdGZpbGVQYXRoOiBwYXJhbXMsXHJcblx0XHRcdG5hbWU6ICdmaWxlW10nLFxyXG5cdFx0XHRoZWFkZXI6e1xyXG5cdFx0XHRcdFwiZW5jdHlwZVwiOlwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXMpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IGVyciA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSlcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/utils/util.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var flirt = function flirt(_ref)\n\n\n\n\n{var url = _ref.url,_ref$method = _ref.method,method = _ref$method === void 0 ? \"GET\" : _ref$method,data = _ref.data,header = _ref.header;\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: url,\n      method: method,\n      data: data,\n      header: header,\n      success: function success(res) {\n        resolve(res.data);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n};\n\nmodule.exports = {\n  flirt: flirt };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmbGlydCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVuaSIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFROzs7OztBQUtYLEtBSkZDLEdBSUUsUUFKRkEsR0FJRSxvQkFIRkMsTUFHRSxDQUhGQSxNQUdFLDRCQUhPLEtBR1AsZUFGRkMsSUFFRSxRQUZGQSxJQUVFLENBREZDLE1BQ0UsUUFERkEsTUFDRTtBQUNGLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2Q0MsT0FBRyxDQUFDQyxPQUFKLENBQVk7QUFDWFIsU0FBRyxFQUFFQSxHQURNO0FBRVhDLFlBQU0sRUFBRUEsTUFGRztBQUdYQyxVQUFJLEVBQUVBLElBSEs7QUFJWEMsWUFBTSxFQUFFQSxNQUpHO0FBS1hNLGFBQU8sRUFBRSxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2pCTCxlQUFPLENBQUNLLEdBQUcsQ0FBQ1IsSUFBTCxDQUFQO0FBQ0EsT0FQVTtBQVFYUyxVQUFJLEVBQUUsY0FBQ0MsR0FBRCxFQUFTO0FBQ2ROLGNBQU0sQ0FBQ00sR0FBRCxDQUFOO0FBQ0EsT0FWVSxFQUFaOztBQVlBLEdBYk0sQ0FBUDtBQWNBLENBcEJEOztBQXNCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCZixPQUFLLEVBQUxBLEtBRGdCLEVBQWpCIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmbGlydCA9IGZ1bmN0aW9uKHtcclxuXHR1cmwsXHJcblx0bWV0aG9kID0gXCJHRVRcIixcclxuXHRkYXRhLFxyXG5cdGhlYWRlclxyXG59KSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRoZWFkZXI6IGhlYWRlcixcclxuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRmbGlydFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
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
/*!*************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/chat.vue?mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page */ 13);\n/* harmony import */ var _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e057ff54\",\n  null,\n  false,\n  _chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/chat.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUwNTdmZjU0JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTA1N2ZmNTRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC9jaGF0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*******************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=template&id=e057ff54&scoped=true&mpType=page */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_e057ff54_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
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
                                "5-" + $30,
                                "sc",
                                "MsgDetailBox"
                              ),
                              attrs: {
                                "data-oid": _vm._$s(
                                  "5-" + $30,
                                  "a-data-oid",
                                  item.oId
                                ),
                                "data-msg": _vm._$s(
                                  "5-" + $30,
                                  "a-data-msg",
                                  item.content
                                ),
                                "data-username": _vm._$s(
                                  "5-" + $30,
                                  "a-data-username",
                                  item.userName
                                ),
                                _i: "5-" + $30
                              },
                              on: { longpress: _vm.longpress }
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
                                                      _c("view", [
                                                        _vm._v(
                                                          _vm._$s(
                                                            "16-" + $30,
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
                                                            "17-" + $30,
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
                                            "18-" + $30,
                                            "sc",
                                            "msgContent"
                                          ),
                                          attrs: { _i: "18-" + $30 }
                                        },
                                        [
                                          _c("mp-html", {
                                            attrs: {
                                              "container-style": "MessageBox",
                                              "copy-link": false,
                                              content: item.content,
                                              "show-img-menu": false,
                                              _i: "19-" + $30
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
                                "20-" + $30,
                                "i",
                                _vm.content.length > 2 &&
                                  _vm.firstMsg.content ==
                                    _vm.secondMsg.content &&
                                  _vm.firstMsg.oId == item.oId &&
                                  item.userName != _vm.data.userName
                              )
                                ? _c("view", {
                                    staticClass: _vm._$s(
                                      "20-" + $30,
                                      "sc",
                                      "humanNature"
                                    ),
                                    attrs: { _i: "20-" + $30 },
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
                            "21-" + $30,
                            "i",
                            _vm.data.userName == item.userName
                          )
                            ? _c("image", {
                                staticClass: _vm._$s(
                                  "21-" + $30,
                                  "sc",
                                  "userAvatar"
                                ),
                                attrs: {
                                  src: _vm._$s(
                                    "21-" + $30,
                                    "a-src",
                                    item.userAvatarURL
                                  ),
                                  _i: "21-" + $30
                                }
                              })
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._$s("22-" + $30, "i", item.type == "redPacketStatus")
                      ? [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "23-" + $30,
                                "sc",
                                "redPacketinfo"
                              ),
                              attrs: { _i: "23-" + $30 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "23-" + $30,
                                  "t0-0",
                                  _vm._s(item.whoGot)
                                ) +
                                  _vm._$s(
                                    "23-" + $30,
                                    "t0-1",
                                    _vm._s(item.whoGive)
                                  )
                              ),
                              _c("view", {
                                attrs: { _i: "24-" + $30 },
                                on: {
                                  click: function($event) {
                                    return _vm.getMoney(item.oId)
                                  }
                                }
                              }),
                              _vm._v(
                                _vm._$s("23-" + $30, "t2-0", _vm._s(item.got)) +
                                  _vm._$s(
                                    "23-" + $30,
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
              _c("view", { attrs: { id: "BottomView", _i: 25 } })
            ],
            2
          )
        : _vm._e(),
      _c(
        "view",
        { staticClass: _vm._$s(26, "sc", "sendBox"), attrs: { _i: 26 } },
        [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.msg,
                expression: "msg"
              }
            ],
            staticClass: _vm._$s(27, "sc", "chat-input"),
            attrs: { focus: _vm._$s(27, "a-focus", _vm.isSend), _i: 27 },
            domProps: { value: _vm._$s(27, "v-model", _vm.msg) },
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
            { staticClass: _vm._$s(28, "sc", "menuBox"), attrs: { _i: 28 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(29, "sc", "iconBtn"),
                  attrs: { _i: 29 },
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
                        30,
                        "a-src",
                        __webpack_require__(/*! ../../static/icon/hongbao.png */ 15)
                      ),
                      _i: 30
                    }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(31, "sc", "iconBtn"),
                  attrs: { _i: 31 },
                  on: {
                    click: function($event) {
                      return _vm.toggleFace()
                    }
                  }
                },
                [
                  _c("image", {
                    attrs: { src: _vm._$s(32, "a-src", _vm.emojeSrc), _i: 32 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(33, "sc", "iconBtn"),
                  attrs: { _i: 33 },
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
                        34,
                        "a-src",
                        __webpack_require__(/*! ../../static/icon/tupian.png */ 16)
                      ),
                      _i: 34
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
                  value: _vm._$s(35, "v-show", _vm.isShowFace),
                  expression: "_$s(35,'v-show',isShowFace)"
                }
              ],
              staticClass: _vm._$s(35, "sc", "faceBox"),
              attrs: { _i: 35 }
            },
            _vm._l(_vm._$s(36, "f", { forItems: _vm.face }), function(
              item,
              index,
              $21,
              $31
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(36, "f", { forIndex: $21, key: index }),
                  staticClass: _vm._$s("36-" + $31, "sc", "face-item"),
                  attrs: { _i: "36-" + $31 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s("37-" + $31, "sc", "face-item"),
                    attrs: {
                      src: _vm._$s("37-" + $31, "a-src", item.url),
                      _i: "37-" + $31
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
          _c("button", {
            staticClass: _vm._$s(38, "sc", "sendBtn"),
            attrs: { _i: 38 },
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
          staticClass: _vm._$s(39, "sc", "longTap-list"),
          style: _vm._$s(39, "s", {
            top: _vm.clientY + "px",
            left: _vm.clientX + "px"
          }),
          attrs: { _i: 39 }
        },
        [
          _c("view", {
            staticClass: _vm._$s(40, "sc", "longTap-item"),
            attrs: { _i: 40 },
            on: {
              click: function($event) {
                return _vm.longTapEvent(0)
              }
            }
          }),
          _vm._$s(
            41,
            "i",
            _vm.data.userRole == "协警" ||
              _vm.data.userRole == "OP" ||
              _vm.data.userRole == "管理员"
          )
            ? _c("view", {
                staticClass: _vm._$s(41, "sc", "longTap-item"),
                attrs: { _i: 41 },
                on: {
                  click: function($event) {
                    return _vm.longTapEvent(1)
                  }
                }
              })
            : _vm._$s(42, "e", _vm.data.userName == _vm.item.userName)
            ? _c("view", {
                staticClass: _vm._$s(42, "sc", "longTap-item"),
                attrs: { _i: 42 },
                on: {
                  click: function($event) {
                    return _vm.longTapEvent(1)
                  }
                }
              })
            : _vm._e(),
          _c("view", {
            staticClass: _vm._$s(43, "sc", "longTap-item"),
            attrs: { _i: 43 },
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
              value: _vm._$s(44, "v-show", _vm.showRedPacketData),
              expression: "_$s(44,'v-show',showRedPacketData)"
            }
          ],
          staticClass: _vm._$s(44, "sc", "redPacketBg"),
          attrs: { _i: 44 },
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
              staticClass: _vm._$s(45, "sc", "redPacketbox"),
              attrs: { _i: 45 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(46, "sc", "redPacketInfo"),
                  attrs: { _i: 46 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(47, "sc", "rpi-user"),
                      attrs: { _i: 47 }
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s(48, "sc", "rpi-user-img"),
                        attrs: {
                          src: _vm._$s(
                            48,
                            "a-src",
                            _vm.redpacketData.info.userAvatarURL
                          ),
                          _i: 48
                        }
                      }),
                      _vm._v(
                        _vm._$s(
                          47,
                          "t1-0",
                          _vm._s(_vm.redpacketData.info.userName)
                        )
                      )
                    ]
                  ),
                  _vm._$s(
                    49,
                    "i",
                    _vm.redpacketData.recivers &&
                      _vm.redpacketData.recivers.length > 0
                  )
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(49, "sc", "rpi-recivers"),
                          attrs: { _i: 49 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              49,
                              "t0-0",
                              _vm._s(_vm.redpacketData.recivers.join(","))
                            )
                          )
                        ]
                      )
                    : _c(
                        "view",
                        {
                          staticClass: _vm._$s(50, "sc", "rpi-recivers"),
                          attrs: { _i: 50 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              50,
                              "t0-0",
                              _vm._s(_vm.redpacketData.info.msg)
                            )
                          )
                        ]
                      ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(51, "sc", "rpi-msg"),
                      attrs: { _i: 51 }
                    },
                    [_vm._v(_vm._$s(51, "t0-0", _vm._s(_vm.redpacketData.msg)))]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(52, "sc", "rpi-count"),
                      attrs: { _i: 52 }
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          52,
                          "t0-0",
                          _vm._s(_vm.redpacketData.info.got)
                        ) +
                          _vm._$s(
                            52,
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
                  staticClass: _vm._$s(53, "sc", "redPacketList"),
                  attrs: { _i: 53 }
                },
                _vm._l(
                  _vm._$s(54, "f", { forItems: _vm.redpacketData.who }),
                  function(item, index, $22, $32) {
                    return _c(
                      "view",
                      {
                        key: _vm._$s(54, "f", { forIndex: $22, key: index }),
                        staticClass: _vm._$s("54-" + $32, "sc", "rpl-item"),
                        attrs: { _i: "54-" + $32 }
                      },
                      [
                        _c("image", {
                          staticClass: _vm._$s("55-" + $32, "sc", "rpl-img"),
                          attrs: {
                            src: _vm._$s("55-" + $32, "a-src", item.avatar),
                            _i: "55-" + $32
                          }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("56-" + $32, "sc", "rpl-info"),
                            attrs: { _i: "56-" + $32 }
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "57-" + $32,
                                  "sc",
                                  "rpl-name"
                                ),
                                attrs: { _i: "57-" + $32 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "57-" + $32,
                                    "t0-0",
                                    _vm._s(item.userName)
                                  )
                                )
                              ]
                            ),
                            _vm._$s("58-" + $32, "i", item.isMax)
                              ? _c("view", {
                                  staticClass: _vm._$s(
                                    "58-" + $32,
                                    "sc",
                                    "rpl-tag isMax"
                                  ),
                                  attrs: { _i: "58-" + $32 }
                                })
                              : _vm._e(),
                            _vm._$s("59-" + $32, "i", item.is0)
                              ? _c("view", {
                                  staticClass: _vm._$s(
                                    "59-" + $32,
                                    "sc",
                                    "rpl-tag is0"
                                  ),
                                  attrs: { _i: "59-" + $32 }
                                })
                              : _vm._e(),
                            _vm._$s("60-" + $32, "i", item.isNeg)
                              ? _c("view", {
                                  staticClass: _vm._$s(
                                    "60-" + $32,
                                    "sc",
                                    "rpl-tag isNeg"
                                  ),
                                  attrs: { _i: "60-" + $32 }
                                })
                              : _vm._e(),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "61-" + $32,
                                  "sc",
                                  "rpl-time"
                                ),
                                attrs: { _i: "61-" + $32 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "61-" + $32,
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
                              "62-" + $32,
                              "sc",
                              "rpl-money"
                            ),
                            attrs: { _i: "62-" + $32 }
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                "62-" + $32,
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
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!*****************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/static/icon/hongbao.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon/hongbao.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi9ob25nYmFvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!****************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/static/icon/tupian.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/icon/tupian.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvaWNvbi90dXBpYW4ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/chat.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBpQixDQUFnQiw2a0JBQUcsRUFBQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/chat.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, wx) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mpHtml = _interopRequireDefault(__webpack_require__(/*! mp-html/dist/uni-app/components/mp-html/mp-html */ 22));\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { mpHtml: _mpHtml.default }, data: function data() {return { content: [], apiKey: \"\", data: {}, msg: \"\", firstMsg: null, secondMsg: null, emojeSrc: '../../static/icon/huaji1.png', redpacketData: { \"recivers\": [\"Yui\"], \"who\": [], \"info\": { \"msg\": \"试试看，这是给你的红包吗？\", \"userAvatarURL\": \"\", \"count\": 1, \"userName\": \"Yui\", \"got\": 0 } }, redpacketTitle: \"\", showRedPacketData: false, JoinChat: null, scrollPower: true, isShowFace: false, face: [], isSend: false, defaultTitle: { random: \"拼手气红包\", average: \"普通红包\", specify: \"专属红包\", heartbeat: \"心跳红包\" }, clientY: -999, clientX: 0, longData: { msg: \"\", oId: \"\", userName: \"\" }, scrollTimeout: null };}, onPageScroll: function onPageScroll(e) {var _this = this; // 传入scrollTop值并触发所有easy-loadimage组件下的滚动监听事件\n    // this.scrollTop = e.scrollTop;\n    this.scrollPower = false;this.clientY = -999;if (e.scrollTop < 50) {__f__(\"log\", \"loadPage~~\", \" at pages/chat/chat.vue:179\");}this.isShowFace = false;clearTimeout(this.scrollTimeout);this.scrollTimeout = setTimeout(function () {_this.scrollPower = true;}, 1000);}, onLoad: function onLoad() {this.initChat();this.apiKey = getApp().globalData.apiKey;this.data = getApp().globalData.data || uni.getStorageSync('userData');__f__(\"log\", this.data, \" at pages/chat/chat.vue:191\");}, created: function created() {var _this2 = this;this.getPage(1);this.getFaceList(); // this.getUserEmotions();\n    var that = this;uni.onSocketClose(function (res) {__f__(\"log\", 'WebSocket 已关闭！', \" at pages/chat/chat.vue:199\");that.JoinChat = setInterval(function () {__f__(\"log\", \"尝试重连WebSocket\", \" at pages/chat/chat.vue:201\");that.initChat();}, 30000);});setInterval(function () {_this2.changeHuaji();}, 5000);}, methods: { deleteMessage: function deleteMessage(oId) {(0, _api.deleteMsg)({ oId: oId, apiKey: this.apiKey }).then(function (res) {__f__(\"log\", res, \" at pages/chat/chat.vue:215\");});}, longTapEvent: function longTapEvent(index) {this.clientY = -999;if (index == 0) {this.SendMsg(this.longData.msg);} else if (index == 1) {this.deleteMessage(this.longData.oId);} else {this.msg = \"##### \\u5F15\\u7528 @\".concat(this.longData.userName, \" \\n  > \").concat(this.longData.msg, \" \\n\\n\") + this.msg;this.isSend = true;}}, longpress: function longpress(e) {this.clientY = e.changedTouches[0].clientY - 50;this.clientX = e.changedTouches[0].clientX - 50;this.longData.msg = e.currentTarget.dataset.msg;\n      this.longData.oId = e.currentTarget.dataset.oid;\n      this.longData.userName = e.currentTarget.dataset.username;\n    },\n    atThis: function atThis(user) {var _this3 = this;\n      this.msg = \"@\".concat(user, \" :\") + this.msg;\n      setTimeout(function () {\n        _this3.isSend = true;\n      }, 100);\n    },\n    noSend: function noSend() {\n      this.isSend = false;\n      this.isShowFace = false;\n    },\n    onInputFocus: function onInputFocus() {\n      this.clientY = -999;\n    },\n    changeHuaji: function changeHuaji() {\n      this.emojeSrc = \"../../static/icon/huaji\".concat(Math.ceil(Math.random() * 6), \".png\");\n    },\n    toRedPacket: function toRedPacket() {\n      uni.navigateTo({\n        url: './redpacket?apiKey=' + this.apiKey,\n        animationType: 'pop-in',\n        animationDuration: 200 });\n\n    },\n    getImage: function getImage() {\n      var that = this;\n      uni.chooseImage({\n        count: 1, //默认9\n        sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有\n        success: function success(res) {\n          (0, _api.upload)(res.tempFilePaths[0]).then(function (result) {\n            if (result.statusCode == 200) {\n              var urlList = JSON.parse(result.data);\n              urlList = urlList.data.succMap;\n              // console.log(urlList)\n              for (var key in urlList) {\n                that.msg = that.msg + \" ![\\u56FE\\u7247\\u8868\\u60C5](\".concat(urlList[key], \")\");\n              }\n              that.isSend = true;\n            }\n          });\n        } });\n\n\n    },\n    getFaceList: function getFaceList() {var _this4 = this;\n      (0, _api.faceList)({\n        gameId: 'emojis',\n        apiKey: this.apiKey }).\n      then(function (res) {\n        if (res.code == 0) {\n          var list = JSON.parse(res.data);\n          list.forEach(function (item) {\n            var items = encodeURI(item);\n            items = btoa(items);\n\n\n\n\n\n\n\n            _this4.face.push({\n              url: \"https://pwl.yuis.cc/GetImage?url=\".concat(items),\n              preUrl: item });\n\n\n          });\n        } else {\n          __f__(\"log\", \"===:error:===\", \" at pages/chat/chat.vue:304\");\n          __f__(\"log\", res, \" at pages/chat/chat.vue:305\");\n        }\n      });\n    },\n    sendFace: function sendFace(url) {\n      this.msg = this.msg + \" ![\\u56FE\\u7247\\u8868\\u60C5](\".concat(url, \")\");\n      this.isShowFace = false;\n      this.isSend = true;\n    },\n    toggleFace: function toggleFace() {\n      this.isShowFace = !this.isShowFace;\n    },\n    showLink: function showLink(e) {\n      if (e.class && e.class == \"name-at\") {\n        this.toUser(e[\"aria-label\"]);\n      }\n    },\n    toUser: function toUser(userName) {\n      uni.navigateTo({\n        url: \"./userInfo?user=\" + userName,\n        animationType: 'pop-in',\n        animationDuration: 200 });\n\n    },\n    getPage: function getPage(page) {var _this5 = this;\n      var that = this;\n      if (page == 1) {\n        this.content = [];\n      }\n      (0, _api.getMorePage)({\n        page: page,\n        apiKey: this.apiKey }).\n      then(function (res) {\n        if (res.code == 0) {\n          var info = res.data;\n          info.reverse();\n          info.forEach(function (msg) {\n\n\n\n\n\n            _this5.filterMsg(msg);\n          });\n          _this5.scrollToBottom();\n        }\n      });\n    },\n    getMoney: function getMoney(oId) {var _this6 = this;\n      var that = this;\n      (0, _api.openRedPacket)({\n        oId: oId,\n        apiKey: that.apiKey }).\n      then(function (res) {\n        __f__(\"log\", res, \" at pages/chat/chat.vue:359\");\n        _this6.redpacketData = res;\n\n        var money = _this6.redpacketData.who.find(function (w) {return w.userName == _this6.data.userName;});\n\n        var specify = _this6.redpacketData.recivers && _this6.redpacketData.recivers.length && _this6.\n        redpacketData.recivers.indexOf(_this6.data.userName) >= 0;\n        var msg = \"\";\n        if (_this6.redpacketData.recivers && _this6.redpacketData.recivers.length && !specify) {\n          msg = \"会错意了\";\n        } else if (!money) {\n          msg = \"错过一个亿\";\n        } else {\n          msg =\n          money.userMoney == 0 ?\n          \"抢了个寂寞\" : \"\".concat(\n          money.userMoney, \" \\u79EF\\u5206\");\n        }\n        var moneyList = _this6.redpacketData.who;\n        var max = 0;\n        var maxIndex = 0;\n        moneyList.forEach(function (item, index) {\n          if (item.userMoney >= max) {\n            max = item.userMoney;\n            maxIndex = index;\n          }\n          if (item.userMoney == 0) {\n            moneyList[index].is0 = true;\n          }\n          if (item.userMoney < 0) {\n            moneyList[index].isNeg = true;\n          }\n        });\n        if (_this6.redpacketData.info.got == _this6.redpacketData.info.count) {\n          moneyList[maxIndex].isMax = true;\n        }\n        _this6.redpacketData.who = moneyList;\n        _this6.redpacketData.msg = msg;\n        _this6.showRedPacketData = true;\n      });\n    },\n    SendMsg: function SendMsg(msg) {\n      var that = this;\n      var content = that.msg || msg;\n      this.isShowFace = false;\n      if (content && content.trim() == \"\") {\n        return;\n      }\n\n      (0, _api.send)({\n        content: content,\n        apiKey: that.apiKey }).\n      then(function (res) {\n        that.msg = \"\";\n      });\n    },\n    initChat: function initChat() {\n      var that = this;\n      var socketTask = uni.connectSocket({\n        url: _api.WS.channel,\n        success: function success(res) {\n          __f__(\"log\", \"WebSocket 连接成功！\", \" at pages/chat/chat.vue:420\");\n          clearInterval(that.JoinChat);\n        },\n        fail: function fail(err) {\n          __f__(\"log\", \"WebSocket 连接失败！\", \" at pages/chat/chat.vue:424\");\n        } });\n\n      socketTask.onMessage(function (res) {\n        var msg = JSON.parse(res.data);\n        switch (msg.type) {\n          case \"online\": //在线人数\n            uni.setStorageSync('users', JSON.stringify(msg.users));\n            // uni.setNavigationBarTitle({\n            // \ttitle: `摸鱼派-聊天室(${msg.onlineChatCnt})`\n            // })\n            break;\n          case \"revoke\": //撤回\n            for (var i = 0; i < that.content.length; i++) {\n              var c = that.content[i];\n              if (c.oId != msg.oId) continue;\n              that.content.splice(i, 1);\n              break;\n            }\n            break;\n          case \"msg\": //消息\n\n\n\n\n\n            that.filterMsg(msg);\n            if (that.content.length > 500) {\n              that.getPage(1);\n            }\n            break;\n          case \"redPacketStatus\":\n            that.content.push(msg);\n            break;}\n\n      });\n    },\n    filterMsg: function filterMsg(msg) {\n      var that = this;\n      if (this.isJSON(msg.content)) {\n        msg.content = JSON.parse(msg.content);\n        msg.isMoney = true;\n        this.content.push(msg);\n        this.scrollToBottom();\n\n      } else if (/<img [^>]*src=['\"]([^'\"]+)[^>]*>/gi.test(msg.content)) {\n\n\n\n\n\n\n\n\n\n        this.content.push(msg);\n        this.scrollToBottom();\n      } else {\n        this.content.push(msg);\n        this.scrollToBottom();\n      }\n      if (!msg.isMoney) {\n        this.secondMsg = this.firstMsg;\n        this.firstMsg = msg;\n      }\n\n    },\n    isJSON: function isJSON(str) {\n      if (typeof str == 'string') {\n        try {\n          var obj = JSON.parse(str);\n          if (typeof obj == 'object' && obj) {\n            return true;\n          } else {\n            return false;\n          }\n\n        } catch (e) {\n          return false;\n        }\n      }\n    },\n    scrollToBottom: function scrollToBottom() {\n      if (this.scrollPower) {\n        var query = wx.createSelectorQuery();\n        query.select('.contentBox').boundingClientRect();\n        query.selectViewport().scrollOffset();\n        query.exec(function (res) {\n          if (res[0]) {\n            setTimeout(function () {\n              wx.pageScrollTo({\n                scrollTop: res[0].height,\n                duration: 100 });\n\n            }, 100);\n          }\n        });\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 19)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9jaGF0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrSEE7QUFDQSw0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFVQSxFQUNBLGNBQ0EsdUJBREEsRUFEQSxFQUlBLElBSkEsa0JBSUEsQ0FDQSxTQUNBLFdBREEsRUFFQSxVQUZBLEVBR0EsUUFIQSxFQUlBLE9BSkEsRUFLQSxjQUxBLEVBTUEsZUFOQSxFQU9BLHdDQVBBLEVBUUEsaUJBQ0EsbUJBREEsRUFFQSxTQUZBLEVBR0EsVUFDQSxzQkFEQSxFQUVBLG1CQUZBLEVBR0EsVUFIQSxFQUlBLGlCQUpBLEVBS0EsUUFMQSxFQUhBLEVBUkEsRUFtQkEsa0JBbkJBLEVBb0JBLHdCQXBCQSxFQXFCQSxjQXJCQSxFQXNCQSxpQkF0QkEsRUF1QkEsaUJBdkJBLEVBd0JBLFFBeEJBLEVBeUJBLGFBekJBLEVBMEJBLGdCQUNBLGVBREEsRUFFQSxlQUZBLEVBR0EsZUFIQSxFQUlBLGlCQUpBLEVBMUJBLEVBZ0NBLGFBaENBLEVBaUNBLFVBakNBLEVBa0NBLFlBQ0EsT0FEQSxFQUVBLE9BRkEsRUFHQSxZQUhBLEVBbENBLEVBdUNBLG1CQXZDQSxHQXlDQSxDQTlDQSxFQStDQSxZQS9DQSx3QkErQ0EsQ0EvQ0EsRUErQ0EsbUJBQ0E7QUFDQTtBQUNBLDZCQUNBLG9CQUNBLHVCQUNBLDBEQUNBLENBQ0Esd0JBQ0EsaUNBQ0EsNkNBQ0EseUJBQ0EsQ0FGQSxFQUVBLElBRkEsRUFHQSxDQTVEQSxFQTZEQSxNQTdEQSxvQkE2REEsQ0FDQSxnQkFDQSx5Q0FDQSx1RUFDQSx1REFDQSxDQWxFQSxFQW1FQSxPQW5FQSxxQkFtRUEsbUJBQ0EsZ0JBQ0EsbUJBRkEsQ0FHQTtBQUNBLG9CQUNBLGtDQUNBLDhEQUNBLHlDQUNBLDZEQUNBLGdCQUNBLENBSEEsRUFHQSxLQUhBLEVBSUEsQ0FOQSxFQU9BLHlCQUNBLHFCQUNBLENBRkEsRUFFQSxJQUZBLEVBR0EsQ0FsRkEsRUFtRkEsV0FDQSxhQURBLHlCQUNBLEdBREEsRUFDQSxDQUNBLHNCQUNBLFFBREEsRUFFQSxtQkFGQSxJQUdBLElBSEEsQ0FHQSxnQkFDQSxpREFDQSxDQUxBLEVBTUEsQ0FSQSxFQVNBLFlBVEEsd0JBU0EsS0FUQSxFQVNBLENBQ0Esb0JBQ0EsaUJBQ0EsZ0NBQ0EsQ0FGQSxNQUVBLGlCQUNBLHNDQUNBLENBRkEsTUFFQSxDQUNBLDBIQUNBLG1CQUNBLENBQ0EsQ0FuQkEsRUFvQkEsU0FwQkEscUJBb0JBLENBcEJBLEVBb0JBLENBQ0EsZ0RBQ0EsZ0RBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkEsVUEzQkEsa0JBMkJBLElBM0JBLEVBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQWhDQTtBQWlDQSxVQWpDQSxvQkFpQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwQ0E7QUFxQ0EsZ0JBckNBLDBCQXFDQTtBQUNBO0FBQ0EsS0F2Q0E7QUF3Q0EsZUF4Q0EseUJBd0NBO0FBQ0E7QUFDQSxLQTFDQTtBQTJDQSxlQTNDQSx5QkEyQ0E7QUFDQTtBQUNBLGdEQURBO0FBRUEsK0JBRkE7QUFHQSw4QkFIQTs7QUFLQSxLQWpEQTtBQWtEQSxZQWxEQSxzQkFrREE7QUFDQTtBQUNBO0FBQ0EsZ0JBREEsRUFDQTtBQUNBLGdDQUZBLEVBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FWQTtBQVdBLFNBZkE7OztBQWtCQSxLQXRFQTtBQXVFQSxlQXZFQSx5QkF1RUE7QUFDQTtBQUNBLHdCQURBO0FBRUEsMkJBRkE7QUFHQSxVQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0Esb0VBREE7QUFFQSwwQkFGQTs7O0FBS0EsV0FmQTtBQWdCQSxTQWxCQSxNQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BMUJBO0FBMkJBLEtBbkdBO0FBb0dBLFlBcEdBLG9CQW9HQSxHQXBHQSxFQW9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeEdBO0FBeUdBLGNBekdBLHdCQXlHQTtBQUNBO0FBQ0EsS0EzR0E7QUE0R0EsWUE1R0Esb0JBNEdBLENBNUdBLEVBNEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FoSEE7QUFpSEEsVUFqSEEsa0JBaUhBLFFBakhBLEVBaUhBO0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLCtCQUZBO0FBR0EsOEJBSEE7O0FBS0EsS0F2SEE7QUF3SEEsV0F4SEEsbUJBd0hBLElBeEhBLEVBd0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsMkJBRkE7QUFHQSxVQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQSxXQVBBO0FBUUE7QUFDQTtBQUNBLE9BakJBO0FBa0JBLEtBL0lBO0FBZ0pBLFlBaEpBLG9CQWdKQSxHQWhKQSxFQWdKQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLDJCQUZBO0FBR0EsVUFIQSxDQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQURBLENBQ0EsUUFEQSxDQUNBLE9BREEsQ0FDQSxvQkFEQSxLQUNBLENBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHlCQUZBLGtCQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BM0NBO0FBNENBLEtBOUxBO0FBK0xBLFdBL0xBLG1CQStMQSxHQS9MQSxFQStMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQURBO0FBRUEsMkJBRkE7QUFHQSxVQUhBLENBR0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQTdNQTtBQThNQSxZQTlNQSxzQkE4TUE7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUxBO0FBTUE7QUFDQTtBQUNBLFNBUkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQTVCQTs7QUE4QkEsT0FoQ0E7QUFpQ0EsS0EzUEE7QUE0UEEsYUE1UEEscUJBNFBBLEdBNVBBLEVBNFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BTkEsTUFNQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQSxPQVpBLE1BWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQXpSQTtBQTBSQSxVQTFSQSxrQkEwUkEsR0ExUkEsRUEwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQVJBLENBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXhTQTtBQXlTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FEQTtBQUVBLDZCQUZBOztBQUlBLGFBTEEsRUFLQSxHQUxBO0FBTUE7QUFDQSxTQVRBO0FBVUE7QUFDQSxLQXpUQSxFQW5GQSxFIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50Qm94XCIgdi1pZj1cImNvbnRlbnQubGVuZ3RoID4gMFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1zZ0luZm9cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBjb250ZW50XCIgOmtleT1cImluZGV4XCJcclxuXHRcdFx0XHQ6Y2xhc3M9XCJ7aXNZb3UgOiAoZGF0YS51c2VyTmFtZSA9PSBpdGVtLnVzZXJOYW1lID8gdHJ1ZSA6IGZhbHNlKX1cIj5cclxuXHRcdFx0XHQ8dGVtcGxhdGUgdi1pZj1cIml0ZW0udHlwZSAhPSAncmVkUGFja2V0U3RhdHVzJ1wiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJkYXRhLnVzZXJOYW1lICE9IGl0ZW0udXNlck5hbWVcIiA6c3JjPSdpdGVtLnVzZXJBdmF0YXJVUkwnIG1vZGU9XCJ3aWR0aEZpeFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwidXNlckF2YXRhclwiIEBsb25ncHJlc3M9XCJhdFRoaXMoaXRlbS51c2VyTmFtZSlcIiBAY2xpY2s9XCJ0b1VzZXIoaXRlbS51c2VyTmFtZSlcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJNc2dEZXRhaWxCb3hcIiBAbG9uZ3ByZXNzPVwibG9uZ3ByZXNzXCIgOmRhdGEtb2lkPVwiaXRlbS5vSWRcIiA6ZGF0YS1tc2c9XCJpdGVtLmNvbnRlbnRcIlxyXG5cdFx0XHRcdFx0XHQ6ZGF0YS11c2VybmFtZT1cIml0ZW0udXNlck5hbWVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtc2dCb3hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1pZj1cImRhdGEudXNlck5hbWUgIT0gaXRlbS51c2VyTmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyTmFtZVwiIHYtaWY9XCJpdGVtLnVzZXJOaWNrbmFtZVwiPnt7aXRlbS51c2VyTmlja25hbWV9fSh7e2l0ZW0udXNlck5hbWV9fSlcclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlck5hbWVcIiB2LWVsc2U+e3tpdGVtLnVzZXJOYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5pc01vbmV5XCIgQGNsaWNrPVwiZ2V0TW9uZXkoaXRlbS5vSWQpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZC1wYWNrZXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycC1oZWFkZXJcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnAtbWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlblwiPuW8gDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwLW1zZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXc+e3tpdGVtLmNvbnRlbnQubXNnfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiPnt7ZGVmYXVsdFRpdGxlW2l0ZW0uY29udGVudC50eXBlXX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1zZ0NvbnRlbnRcIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bXAtaHRtbCBAbG9hZD1cInNjcm9sbFRvQm90dG9tKClcIiBjb250YWluZXItc3R5bGU9XCJNZXNzYWdlQm94XCIgQHJlYWR5PVwic2Nyb2xsVG9Cb3R0b20oKVwiIDpjb3B5LWxpbms9XCJmYWxzZVwiIDpjb250ZW50PVwiaXRlbS5jb250ZW50XCIgOnNob3ctaW1nLW1lbnU9XCJmYWxzZVwiIEBsaW5rdGFwPVwic2hvd0xpbmtcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8IS0tIDx2aWV3IHYtaHRtbD1cIml0ZW0uY29udGVudFwiPjwvdmlldz4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImh1bWFuTmF0dXJlXCJcclxuXHRcdFx0XHRcdFx0XHR2LWlmPVwiY29udGVudC5sZW5ndGggPiAyICYmIGZpcnN0TXNnLmNvbnRlbnQgPT0gc2Vjb25kTXNnLmNvbnRlbnQgJiYgZmlyc3RNc2cub0lkID09IGl0ZW0ub0lkICYmIGl0ZW0udXNlck5hbWUgIT0gZGF0YS51c2VyTmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwiU2VuZE1zZyhpdGVtLmNvbnRlbnQpXCI+KzE8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImRhdGEudXNlck5hbWUgPT0gaXRlbS51c2VyTmFtZVwiIDpzcmM9J2l0ZW0udXNlckF2YXRhclVSTCcgbW9kZT1cIndpZHRoRml4XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ1c2VyQXZhdGFyXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS50eXBlID09ICdyZWRQYWNrZXRTdGF0dXMnXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZFBhY2tldGluZm9cIj57e2l0ZW0ud2hvR290fX0g5oqi5Yiw5LqGIHt7aXRlbS53aG9HaXZlfX0g55qEIDx2aWV3IEBjbGljaz1cImdldE1vbmV5KGl0ZW0ub0lkKVwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9XCJjb2xvcjojZjk0MTUxXCI+57qi5YyFPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQoe3tpdGVtLmdvdH19L3t7aXRlbS5jb3VudH19KTwvdmlldz5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGlkPVwiQm90dG9tVmlld1wiIHN0eWxlPVwiaGVpZ2h0OiA1MHB4O1wiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5Y+R6YCB5qCPIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzZW5kQm94XCI+XHJcblx0XHRcdDwhLS0g5L+d55WZ5Y+C5pWwIOetiXVuaWFwcOabtOaWsCAtLT5cclxuXHRcdFx0PCEtLSBjb25maXJtLXR5cGU9XCJzZW5kXCIgY29uZmlybS1ob2xkPVwidHJ1ZVwiIEBjb25maXJtPVwiU2VuZE1zZygpXCIgIC0tPlxyXG5cdFx0XHQ8dGV4dGFyZWEgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibXNnXCIgY2xhc3M9XCJjaGF0LWlucHV0XCIgOmZvY3VzPVwiaXNTZW5kXCIgQGZvY3VzPVwib25JbnB1dEZvY3VzKClcIlxyXG5cdFx0XHRcdEBibHVyPVwibm9TZW5kKClcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCIgLz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51Qm94XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uQnRuXCIgQGNsaWNrPVwidG9SZWRQYWNrZXQoKVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pY29uL2hvbmdiYW8ucG5nXCIgbW9kZT1cImhlaWdodEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbkJ0blwiIEBjbGljaz1cInRvZ2dsZUZhY2UoKVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJlbW9qZVNyY1wiIG1vZGU9XCJoZWlnaHRGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25CdG5cIiBAY2xpY2s9XCJnZXRJbWFnZSgpXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ljb24vdHVwaWFuLnBuZ1wiIG1vZGU9XCJoZWlnaHRGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZhY2VCb3hcIiB2LXNob3c9XCJpc1Nob3dGYWNlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmYWNlLWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBmYWNlXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJmYWNlLWl0ZW1cIiA6c3JjPVwiaXRlbS51cmxcIiBtb2RlPVwiYXNwZWN0Rml0XCIgQGNsaWNrPVwic2VuZEZhY2UoaXRlbS5wcmVVcmwpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIGNsYXNzPVwic2VuZEJ0blwiIEB0b3VjaGVuZC5wcmV2ZW50PVwiU2VuZE1zZygpXCI+5Y+R6YCBPC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOWPs+mUruiPnOWNlSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibG9uZ1RhcC1saXN0XCIgOnN0eWxlPVwie3RvcDpjbGllbnRZICsgJ3B4JyxsZWZ0OmNsaWVudFggKyAncHgnfVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxvbmdUYXAtaXRlbVwiIEBjbGljaz1cImxvbmdUYXBFdmVudCgwKVwiPuWkjeivu+acujwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb25nVGFwLWl0ZW1cIiBAY2xpY2s9XCJsb25nVGFwRXZlbnQoMSlcIlxyXG5cdFx0XHRcdHYtaWY9XCJkYXRhLnVzZXJSb2xlID09J+WNj+itpicgfHxkYXRhLnVzZXJSb2xlID09J09QJyB8fCBkYXRhLnVzZXJSb2xlID09J+euoeeQhuWRmCdcIj7mkqTlm548L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibG9uZ1RhcC1pdGVtXCIgQGNsaWNrPVwibG9uZ1RhcEV2ZW50KDEpXCIgdi1lbHNlLWlmPVwiZGF0YS51c2VyTmFtZSA9PSBpdGVtLnVzZXJOYW1lXCI+5pKk5ZuePC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxvbmdUYXAtaXRlbVwiIEBjbGljaz1cImxvbmdUYXBFdmVudCgyKVwiPuW8leeUqDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g57qi5YyFIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJyZWRQYWNrZXRCZ1wiIHYtc2hvdz1cInNob3dSZWRQYWNrZXREYXRhXCIgQGNsaWNrLnN0b3A9XCJzaG93UmVkUGFja2V0RGF0YSA9IGZhbHNlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicmVkUGFja2V0Ym94XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyZWRQYWNrZXRJbmZvXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwaS11c2VyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInJwaS11c2VyLWltZ1wiIDpzcmM9XCJyZWRwYWNrZXREYXRhLmluZm8udXNlckF2YXRhclVSTFwiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0e3tyZWRwYWNrZXREYXRhLmluZm8udXNlck5hbWV9fSdz55qE57qi5YyFXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwaS1yZWNpdmVyc1wiIHYtaWY9XCJyZWRwYWNrZXREYXRhLnJlY2l2ZXJzICYmIHJlZHBhY2tldERhdGEucmVjaXZlcnMubGVuZ3RoID4gMFwiPlxyXG5cdFx0XHRcdFx0XHTov5nkuKrnuqLljIXlsZ7kuo7vvJp7e3JlZHBhY2tldERhdGEucmVjaXZlcnMuam9pbihcIixcIil9fTwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBpLXJlY2l2ZXJzXCIgdi1lbHNlPnt7cmVkcGFja2V0RGF0YS5pbmZvLm1zZ319PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycGktbXNnXCI+e3tyZWRwYWNrZXREYXRhLm1zZ319PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycGktY291bnRcIj7mgLvorqHvvJp7e3JlZHBhY2tldERhdGEuaW5mby5nb3R9fS97e3JlZHBhY2tldERhdGEuaW5mby5jb3VudH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlZFBhY2tldExpc3RcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiByZWRwYWNrZXREYXRhLndob1wiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJycGwtaW1nXCIgOnNyYz1cIml0ZW0uYXZhdGFyXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwbC1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycGwtbmFtZVwiPnt7aXRlbS51c2VyTmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLXRhZyBpc01heFwiIHYtaWY9XCJpdGVtLmlzTWF4XCI+5p2l6Ieq6ICB546L55qE6K6k5Y+vPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLXRhZyBpczBcIiB2LWlmPVwiaXRlbS5pczBcIj4w5rqi5LqL5Lu2PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLXRhZyBpc05lZ1wiIHYtaWY9XCJpdGVtLmlzTmVnXCI+5oqi57qi5YyF5pyJ6aOO6ZmpPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLXRpbWVcIj57e2l0ZW0udGltZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBsLW1vbmV5XCI+e3tpdGVtLnVzZXJNb25leX19IOenr+WIhjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBtcEh0bWwgZnJvbSAnbXAtaHRtbC9kaXN0L3VuaS1hcHAvY29tcG9uZW50cy9tcC1odG1sL21wLWh0bWwnXHJcblx0aW1wb3J0IHtcclxuXHRcdHVwbG9hZCxcclxuXHRcdGdldE1vcmVQYWdlLFxyXG5cdFx0b3BlblJlZFBhY2tldCxcclxuXHRcdFdTLFxyXG5cdFx0c2VuZCxcclxuXHRcdGZhY2VMaXN0LFxyXG5cdFx0Z2V0VXNlckluZm8sXHJcblx0XHRkZWxldGVNc2dcclxuXHR9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdG1wSHRtbFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y29udGVudDogW10sXHJcblx0XHRcdFx0YXBpS2V5OiBcIlwiLFxyXG5cdFx0XHRcdGRhdGE6IHt9LFxyXG5cdFx0XHRcdG1zZzogXCJcIixcclxuXHRcdFx0XHRmaXJzdE1zZzogbnVsbCxcclxuXHRcdFx0XHRzZWNvbmRNc2c6IG51bGwsXHJcblx0XHRcdFx0ZW1vamVTcmM6ICcuLi8uLi9zdGF0aWMvaWNvbi9odWFqaTEucG5nJyxcclxuXHRcdFx0XHRyZWRwYWNrZXREYXRhOiB7XHJcblx0XHRcdFx0XHRcInJlY2l2ZXJzXCI6IFtcIll1aVwiXSxcclxuXHRcdFx0XHRcdFwid2hvXCI6IFtdLFxyXG5cdFx0XHRcdFx0XCJpbmZvXCI6IHtcclxuXHRcdFx0XHRcdFx0XCJtc2dcIjogXCLor5Xor5XnnIvvvIzov5nmmK/nu5nkvaDnmoTnuqLljIXlkJfvvJ9cIixcclxuXHRcdFx0XHRcdFx0XCJ1c2VyQXZhdGFyVVJMXCI6IFwiXCIsXHJcblx0XHRcdFx0XHRcdFwiY291bnRcIjogMSxcclxuXHRcdFx0XHRcdFx0XCJ1c2VyTmFtZVwiOiBcIll1aVwiLFxyXG5cdFx0XHRcdFx0XHRcImdvdFwiOiAwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRyZWRwYWNrZXRUaXRsZTogXCJcIixcclxuXHRcdFx0XHRzaG93UmVkUGFja2V0RGF0YTogZmFsc2UsXHJcblx0XHRcdFx0Sm9pbkNoYXQ6IG51bGwsXHJcblx0XHRcdFx0c2Nyb2xsUG93ZXI6IHRydWUsXHJcblx0XHRcdFx0aXNTaG93RmFjZTogZmFsc2UsXHJcblx0XHRcdFx0ZmFjZTogW10sXHJcblx0XHRcdFx0aXNTZW5kOiBmYWxzZSxcclxuXHRcdFx0XHRkZWZhdWx0VGl0bGU6IHtcclxuXHRcdFx0XHRcdHJhbmRvbTogXCLmi7zmiYvmsJTnuqLljIVcIixcclxuXHRcdFx0XHRcdGF2ZXJhZ2U6IFwi5pmu6YCa57qi5YyFXCIsXHJcblx0XHRcdFx0XHRzcGVjaWZ5OiBcIuS4k+Wxnue6ouWMhVwiLFxyXG5cdFx0XHRcdFx0aGVhcnRiZWF0OiBcIuW/g+i3s+e6ouWMhVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjbGllbnRZOiAtOTk5LFxyXG5cdFx0XHRcdGNsaWVudFg6IDAsXHJcblx0XHRcdFx0bG9uZ0RhdGE6IHtcclxuXHRcdFx0XHRcdG1zZzogXCJcIixcclxuXHRcdFx0XHRcdG9JZDogXCJcIixcclxuXHRcdFx0XHRcdHVzZXJOYW1lOiBcIlwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2Nyb2xsVGltZW91dDogbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25QYWdlU2Nyb2xsKGUpIHtcclxuXHRcdFx0Ly8g5Lyg5YWlc2Nyb2xsVG9w5YC85bm26Kem5Y+R5omA5pyJZWFzeS1sb2FkaW1hZ2Xnu4Tku7bkuIvnmoTmu5rliqjnm5HlkKzkuovku7ZcclxuXHRcdFx0Ly8gdGhpcy5zY3JvbGxUb3AgPSBlLnNjcm9sbFRvcDtcclxuXHRcdFx0dGhpcy5zY3JvbGxQb3dlciA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmNsaWVudFkgPSAtOTk5O1xyXG5cdFx0XHRpZihlLnNjcm9sbFRvcCA8IDUwKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImxvYWRQYWdlfn5cIilcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmlzU2hvd0ZhY2UgPSBmYWxzZTtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsVGltZW91dCk7XHJcblx0XHRcdHRoaXMuc2Nyb2xsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsUG93ZXIgPSB0cnVlO1xyXG5cdFx0XHR9LCAxMDAwKVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0Q2hhdCgpO1xyXG5cdFx0XHR0aGlzLmFwaUtleSA9IGdldEFwcCgpLmdsb2JhbERhdGEuYXBpS2V5O1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBnZXRBcHAoKS5nbG9iYWxEYXRhLmRhdGEgfHwgdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyRGF0YScpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLmRhdGEpXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5nZXRQYWdlKDEpO1xyXG5cdFx0XHR0aGlzLmdldEZhY2VMaXN0KCk7XHJcblx0XHRcdC8vIHRoaXMuZ2V0VXNlckVtb3Rpb25zKCk7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dW5pLm9uU29ja2V0Q2xvc2UoZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ1dlYlNvY2tldCDlt7LlhbPpl63vvIEnKTtcclxuXHRcdFx0XHR0aGF0LkpvaW5DaGF0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlsJ3or5Xph43ov55XZWJTb2NrZXRcIik7XHJcblx0XHRcdFx0XHR0aGF0LmluaXRDaGF0KClcclxuXHRcdFx0XHR9LCAzMDAwMClcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZUh1YWppKClcclxuXHRcdFx0fSwgNTAwMClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGRlbGV0ZU1lc3NhZ2Uob0lkKSB7XHJcblx0XHRcdFx0ZGVsZXRlTXNnKHtcclxuXHRcdFx0XHRcdG9JZDogb0lkLFxyXG5cdFx0XHRcdFx0YXBpS2V5OiB0aGlzLmFwaUtleVxyXG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb25nVGFwRXZlbnQoaW5kZXgpIHtcclxuXHRcdFx0XHR0aGlzLmNsaWVudFkgPSAtOTk5O1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLlNlbmRNc2codGhpcy5sb25nRGF0YS5tc2cpXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRlbGV0ZU1lc3NhZ2UodGhpcy5sb25nRGF0YS5vSWQpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubXNnID0gYCMjIyMjIOW8leeUqCBAJHt0aGlzLmxvbmdEYXRhLnVzZXJOYW1lfSBcXG4gID4gJHt0aGlzLmxvbmdEYXRhLm1zZ30gXFxuXFxuYCArIHRoaXMubXNnO1xyXG5cdFx0XHRcdFx0dGhpcy5pc1NlbmQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0bG9uZ3ByZXNzKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNsaWVudFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSA1MDtcclxuXHRcdFx0XHR0aGlzLmNsaWVudFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSA1MDtcclxuXHRcdFx0XHR0aGlzLmxvbmdEYXRhLm1zZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm1zZztcclxuXHRcdFx0XHR0aGlzLmxvbmdEYXRhLm9JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm9pZDtcclxuXHRcdFx0XHR0aGlzLmxvbmdEYXRhLnVzZXJOYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXNlcm5hbWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGF0VGhpcyh1c2VyKSB7XHJcblx0XHRcdFx0dGhpcy5tc2cgPSBgQCR7dXNlcn0gOmAgKyB0aGlzLm1zZztcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaXNTZW5kID0gdHJ1ZTtcclxuXHRcdFx0XHR9LCAxMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdG5vU2VuZCgpIHtcclxuXHRcdFx0XHR0aGlzLmlzU2VuZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuaXNTaG93RmFjZSA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbklucHV0Rm9jdXMoKSB7XHJcblx0XHRcdFx0dGhpcy5jbGllbnRZID0gLTk5OTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlSHVhamkoKSB7XHJcblx0XHRcdFx0dGhpcy5lbW9qZVNyYyA9IGAuLi8uLi9zdGF0aWMvaWNvbi9odWFqaSR7TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqNil9LnBuZ2BcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9SZWRQYWNrZXQoKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnLi9yZWRwYWNrZXQ/YXBpS2V5PScgKyB0aGlzLmFwaUtleSxcclxuXHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6ICdwb3AtaW4nLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uRHVyYXRpb246IDIwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEltYWdlKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1bmkuY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0Y291bnQ6IDEsIC8v6buY6K6kOVxyXG5cdFx0XHRcdFx0c2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLCAvL+WPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHVwbG9hZChyZXMudGVtcEZpbGVQYXRoc1swXSkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCB1cmxMaXN0ID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxMaXN0ID0gdXJsTGlzdC5kYXRhLnN1Y2NNYXA7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh1cmxMaXN0KVxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQga2V5IGluIHVybExpc3QpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5tc2cgPSB0aGF0Lm1zZyArIGAgIVvlm77niYfooajmg4VdKCR7dXJsTGlzdFtrZXldfSlgXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmlzU2VuZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0RmFjZUxpc3QoKSB7XHJcblx0XHRcdFx0ZmFjZUxpc3Qoe1xyXG5cdFx0XHRcdFx0Z2FtZUlkOiAnZW1vamlzJyxcclxuXHRcdFx0XHRcdGFwaUtleTogdGhpcy5hcGlLZXlcclxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgbGlzdCA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRsaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGl0ZW1zID0gZW5jb2RlVVJJKGl0ZW0pXHJcblx0XHRcdFx0XHRcdFx0aXRlbXMgPSBidG9hKGl0ZW1zKTtcclxuXHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZhY2UucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6IGBodHRwczovL3B3bC55dWlzLmNjL0dldEltYWdlP3VybD0ke2l0ZW1zfWAsXHJcblx0XHRcdFx0XHRcdFx0XHRwcmVVcmw6IGl0ZW1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZmFjZS5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogYGh0dHBzOi8vcHdsLnl1aXMuY2MvR2V0SW1hZ2U/dXJsPSR7aXRlbXN9YCxcclxuXHRcdFx0XHRcdFx0XHRcdHByZVVybDogaXRlbVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIj09PTplcnJvcjo9PT1cIilcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbmRGYWNlKHVybCkge1xyXG5cdFx0XHRcdHRoaXMubXNnID0gdGhpcy5tc2cgKyBgICFb5Zu+54mH6KGo5oOFXSgke3VybH0pYDtcclxuXHRcdFx0XHR0aGlzLmlzU2hvd0ZhY2UgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmlzU2VuZCA9IHRydWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvZ2dsZUZhY2UoKSB7XHJcblx0XHRcdFx0dGhpcy5pc1Nob3dGYWNlID0gIXRoaXMuaXNTaG93RmFjZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0xpbmsoZSkge1xyXG5cdFx0XHRcdGlmIChlLmNsYXNzICYmIGUuY2xhc3MgPT0gXCJuYW1lLWF0XCIpIHtcclxuXHRcdFx0XHRcdHRoaXMudG9Vc2VyKGVbXCJhcmlhLWxhYmVsXCJdKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9Vc2VyKHVzZXJOYW1lKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi4vdXNlckluZm8/dXNlcj1cIiArIHVzZXJOYW1lLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogJ3BvcC1pbicsXHJcblx0XHRcdFx0XHRhbmltYXRpb25EdXJhdGlvbjogMjAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0UGFnZShwYWdlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmIChwYWdlID09IDEpIHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudCA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnZXRNb3JlUGFnZSh7XHJcblx0XHRcdFx0XHRwYWdlOiBwYWdlLFxyXG5cdFx0XHRcdFx0YXBpS2V5OiB0aGlzLmFwaUtleVxyXG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdGxldCBpbmZvID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdGluZm8ucmV2ZXJzZSgpO1xyXG5cdFx0XHRcdFx0XHRpbmZvLmZvckVhY2gobXNnID0+IHtcclxuXHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHRcdFx0XHRsZXQgdXNlckF2YXRhciA9IGVuY29kZVVSSShtc2cudXNlckF2YXRhclVSTClcclxuXHRcdFx0XHRcdFx0XHR1c2VyQXZhdGFyID0gYnRvYSh1c2VyQXZhdGFyKTtcclxuXHRcdFx0XHRcdFx0XHRtc2cudXNlckF2YXRhclVSTCA9IGBodHRwczovL3B3bC55dWlzLmNjL0dldEltYWdlP3VybD0ke3VzZXJBdmF0YXJ9YFxyXG5cdFx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZmlsdGVyTXNnKG1zZylcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TW9uZXkob0lkKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdG9wZW5SZWRQYWNrZXQoe1xyXG5cdFx0XHRcdFx0b0lkOiBvSWQsXHJcblx0XHRcdFx0XHRhcGlLZXk6IHRoYXQuYXBpS2V5XHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0dGhpcy5yZWRwYWNrZXREYXRhID0gcmVzO1xyXG5cclxuXHRcdFx0XHRcdGxldCBtb25leSA9IHRoaXMucmVkcGFja2V0RGF0YS53aG8uZmluZCh3ID0+IHcudXNlck5hbWUgPT0gdGhpcy5kYXRhLnVzZXJOYW1lKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgc3BlY2lmeSA9ICh0aGlzLnJlZHBhY2tldERhdGEucmVjaXZlcnMgJiYgdGhpcy5yZWRwYWNrZXREYXRhLnJlY2l2ZXJzLmxlbmd0aCAmJiB0aGlzXHJcblx0XHRcdFx0XHRcdC5yZWRwYWNrZXREYXRhLnJlY2l2ZXJzLmluZGV4T2YodGhpcy5kYXRhLnVzZXJOYW1lKSA+PSAwKVxyXG5cdFx0XHRcdFx0bGV0IG1zZyA9IFwiXCI7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5yZWRwYWNrZXREYXRhLnJlY2l2ZXJzICYmIHRoaXMucmVkcGFja2V0RGF0YS5yZWNpdmVycy5sZW5ndGggJiYgIXNwZWNpZnkpIHtcclxuXHRcdFx0XHRcdFx0bXNnID0gXCLkvJrplJnmhI/kuoZcIlxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICghbW9uZXkpIHtcclxuXHRcdFx0XHRcdFx0bXNnID0gXCLplJnov4fkuIDkuKrkur9cIjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1zZyA9XHJcblx0XHRcdFx0XHRcdFx0bW9uZXkudXNlck1vbmV5ID09IDAgP1xyXG5cdFx0XHRcdFx0XHRcdFwi5oqi5LqG5Liq5a+C5a+eXCIgOlxyXG5cdFx0XHRcdFx0XHRcdGAke21vbmV5LnVzZXJNb25leX0g56ev5YiGYDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxldCBtb25leUxpc3QgPSB0aGlzLnJlZHBhY2tldERhdGEud2hvO1xyXG5cdFx0XHRcdFx0bGV0IG1heCA9IDA7XHJcblx0XHRcdFx0XHRsZXQgbWF4SW5kZXggPSAwO1xyXG5cdFx0XHRcdFx0bW9uZXlMaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtLnVzZXJNb25leSA+PSBtYXgpIHtcclxuXHRcdFx0XHRcdFx0XHRtYXggPSBpdGVtLnVzZXJNb25leTtcclxuXHRcdFx0XHRcdFx0XHRtYXhJbmRleCA9IGluZGV4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtLnVzZXJNb25leSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0bW9uZXlMaXN0W2luZGV4XS5pczAgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtLnVzZXJNb25leSA8IDApIHtcclxuXHRcdFx0XHRcdFx0XHRtb25leUxpc3RbaW5kZXhdLmlzTmVnID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdGlmICh0aGlzLnJlZHBhY2tldERhdGEuaW5mby5nb3QgPT0gdGhpcy5yZWRwYWNrZXREYXRhLmluZm8uY291bnQpIHtcclxuXHRcdFx0XHRcdFx0bW9uZXlMaXN0W21heEluZGV4XS5pc01heCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnJlZHBhY2tldERhdGEud2hvID0gbW9uZXlMaXN0O1xyXG5cdFx0XHRcdFx0dGhpcy5yZWRwYWNrZXREYXRhLm1zZyA9IG1zZztcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1JlZFBhY2tldERhdGEgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFNlbmRNc2cobXNnKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGxldCBjb250ZW50ID0gdGhhdC5tc2cgfHwgbXNnO1xyXG5cdFx0XHRcdHRoaXMuaXNTaG93RmFjZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmIChjb250ZW50ICYmIGNvbnRlbnQudHJpbSgpID09IFwiXCIpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNlbmQoe1xyXG5cdFx0XHRcdFx0Y29udGVudDogY29udGVudCxcclxuXHRcdFx0XHRcdGFwaUtleTogdGhhdC5hcGlLZXlcclxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHR0aGF0Lm1zZyA9IFwiXCI7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdENoYXQoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBzb2NrZXRUYXNrID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xyXG5cdFx0XHRcdFx0dXJsOiBXUy5jaGFubmVsLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIldlYlNvY2tldCDov57mjqXmiJDlip/vvIFcIilcclxuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGF0LkpvaW5DaGF0KTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiV2ViU29ja2V0IOi/nuaOpeWksei0pe+8gVwiKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNvY2tldFRhc2sub25NZXNzYWdlKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0bGV0IG1zZyA9IEpTT04ucGFyc2UocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRzd2l0Y2ggKG1zZy50eXBlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgXCJvbmxpbmVcIjogLy/lnKjnur/kurrmlbBcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJzJywgSlNPTi5zdHJpbmdpZnkobXNnLnVzZXJzKSlcclxuXHRcdFx0XHRcdFx0XHQvLyB1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdFx0XHQvLyBcdHRpdGxlOiBg5pG46bG85rS+LeiBiuWkqeWupCgke21zZy5vbmxpbmVDaGF0Q250fSlgXHJcblx0XHRcdFx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBcInJldm9rZVwiOiAvL+aSpOWbnlxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgYyA9IHRoYXQuY29udGVudFtpXTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChjLm9JZCAhPSBtc2cub0lkKSBjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuY29udGVudC5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgXCJtc2dcIjogLy/mtojmga9cclxuXHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHRcdFx0XHRsZXQgdXNlckF2YXRhciA9IGVuY29kZVVSSShtc2cudXNlckF2YXRhclVSTClcclxuXHRcdFx0XHRcdFx0XHR1c2VyQXZhdGFyID0gYnRvYSh1c2VyQXZhdGFyKTtcclxuXHRcdFx0XHRcdFx0XHRtc2cudXNlckF2YXRhclVSTCA9IGBodHRwczovL3B3bC55dWlzLmNjL0dldEltYWdlP3VybD0ke3VzZXJBdmF0YXJ9YFxyXG5cdFx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHRcdHRoYXQuZmlsdGVyTXNnKG1zZylcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhhdC5jb250ZW50Lmxlbmd0aCA+IDUwMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5nZXRQYWdlKDEpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIFwicmVkUGFja2V0U3RhdHVzXCI6XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jb250ZW50LnB1c2gobXNnKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmaWx0ZXJNc2cobXNnKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzSlNPTihtc2cuY29udGVudCkpIHtcclxuXHRcdFx0XHRcdG1zZy5jb250ZW50ID0gSlNPTi5wYXJzZShtc2cuY29udGVudClcclxuXHRcdFx0XHRcdG1zZy5pc01vbmV5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudC5wdXNoKG1zZylcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKC88aW1nIFtePl0qc3JjPVsnXCJdKFteJ1wiXSspW14+XSo+L2dpLnRlc3QobXNnLmNvbnRlbnQpKSB7XHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0XHRcdGxldCBuZXdTcmNMaXN0ID0gW107XHJcblx0XHRcdFx0XHRtc2cuY29udGVudCA9IG1zZy5jb250ZW50LnJlcGxhY2UoLzxpbWcgW14+XSpzcmM9WydcIl0oW14nXCJdKylbXj5dKj4vZ2ksIGZ1bmN0aW9uKG1hdGNoLCBjYXB0dXJlKSB7XHJcblx0XHRcdFx0XHRcdGxldCB1cmwgPSBlbmNvZGVVUkkoY2FwdHVyZSk7XHJcblx0XHRcdFx0XHRcdHVybCA9IGJ0b2EodXJsKTtcclxuXHRcdFx0XHRcdFx0bGV0IGltZ1VybCA9IGBodHRwczovL3B3bC55dWlzLmNjL0dldEltYWdlP3VybD0ke3VybH1gO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYDxpbWcgc3JjPVwiJHtpbWdVcmx9XCIgYWx0PVwi5Zu+54mH6KGo5oOFXCIgLz5gXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50LnB1c2gobXNnKVxyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudC5wdXNoKG1zZylcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIW1zZy5pc01vbmV5KSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlY29uZE1zZyA9IHRoaXMuZmlyc3RNc2c7XHJcblx0XHRcdFx0XHR0aGlzLmZpcnN0TXNnID0gbXNnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGlzSlNPTihzdHIpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHN0ciA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0dmFyIG9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgb2JqKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzY3JvbGxUb0JvdHRvbTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsUG93ZXIpIHtcclxuXHRcdFx0XHRcdGxldCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxyXG5cdFx0XHRcdFx0cXVlcnkuc2VsZWN0KCcuY29udGVudEJveCcpLmJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblx0XHRcdFx0XHRxdWVyeS5zZWxlY3RWaWV3cG9ydCgpLnNjcm9sbE9mZnNldCgpXHJcblx0XHRcdFx0XHRxdWVyeS5leGVjKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNbMF0pIHtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHd4LnBhZ2VTY3JvbGxUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNjcm9sbFRvcDogcmVzWzBdLmhlaWdodCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMFxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9LCAxMDApXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzNiM2U0MztcclxuXHR9XHJcblxyXG5cdC51c2VyQXZhdGFyIHtcclxuXHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0Lm1zZ0luZm8ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0Lm1zZ0luZm8uaXNZb3Uge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHR9XHJcblxyXG5cdC5Nc2dEZXRhaWxCb3gge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50Qm94IHtcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRwYWRkaW5nOiAxNXB4IDEwcHggODBweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQubXNnQm94IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblxyXG5cdC5pc1lvdSAubXNnQm94IHtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHR9XHJcblxyXG5cdC5pc1lvdSAudXNlckF2YXRhciB7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMDtcclxuXHR9XHJcblxyXG5cdC51c2VyTmFtZSB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC5tc2dDb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1pbi13aWR0aDogMTBweDtcclxuXHRcdG1heC13aWR0aDogNjB2dztcclxuXHRcdG1pbi1oZWlnaHQ6IDE1cHg7XHJcblx0XHRtYXJnaW46IDVweCAwO1xyXG5cdFx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Lyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuXHR9XHJcblxyXG5cdC5tc2dDb250ZW50OjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IC0xMHB4O1xyXG5cdFx0dG9wOiA1cHg7XHJcblx0XHR3aWR0aDogMDtcclxuXHRcdGhlaWdodDogMDtcclxuXHRcdGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNmZmY7XHJcblx0XHRib3JkZXItdG9wOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuXHRcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdH1cclxuXHJcblx0LmlzWW91IC5tc2dDb250ZW50IHtcclxuXHRcdGJhY2tncm91bmQ6ICM5ZWVhNmE7XHJcblx0fVxyXG5cclxuXHQuaXNZb3UgLm1zZ0NvbnRlbnQ6OmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IC0xMHB4O1xyXG5cdFx0bGVmdDogYXV0bztcclxuXHRcdHRvcDogNXB4O1xyXG5cdFx0d2lkdGg6IDA7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRib3JkZXItcmlnaHQ6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcblx0XHRib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuXHRcdGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzllZWE2YTtcclxuXHR9XHJcblxyXG5cdC5tc2dDb250ZW50IHAge1xyXG5cdFx0bWluLXdpZHRoOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnNlbmRCb3gge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQubWVudUJveCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0aGVpZ2h0OiA0MnB4O1xyXG5cdFx0cGFkZGluZzogNXB4IDA7XHJcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI0Y4RjhGODtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQuc2VuZEJ0biB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDogNXZ3O1xyXG5cdFx0dG9wOiAxMHB4O1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM2MGIwNDQ7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC5pY29uQnRuIHtcclxuXHRcdG1hcmdpbjogMCA1cHg7XHJcblx0fVxyXG5cclxuXHQuaWNvbkJ0biBpbWFnZSB7XHJcblx0XHRoZWlnaHQ6IDMycHg7XHJcblx0fVxyXG5cclxuXHQuY2hhdC1pbnB1dCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gNDJweCk7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LnJlZC1wYWNrZXQge1xyXG5cdFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0bWFyZ2luOiAxMHB4IGF1dG8gMDtcclxuXHRcdHdpZHRoOiAxNjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYzYxYTJmO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJveC1zaGFkb3c6IDAgMCAycHggMnB4ICMzMzM7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LnJwLWhlYWRlciB7XHJcblx0XHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcblx0XHR3aWR0aDogMTYwcHg7XHJcblx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTEyMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdGJhY2tncm91bmQ6ICNmOTQxNTE7XHJcblx0fVxyXG5cclxuXHQucnAtbWFpbiB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5ycC1tc2cge1xyXG5cdFx0cGFkZGluZzogMCAxMHB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG5cclxuXHQucmVkLXBhY2tldCAub3BlbiB7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRtYXJnaW46IC0yMHB4IGF1dG8gMjBweDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmIwM2E7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnJlZFBhY2tldGluZm8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0Lmh1bWFuTmF0dXJlIHtcclxuXHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XHJcblx0fVxyXG5cclxuXHQucmVkUGFja2V0Qmcge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogMjUwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0fVxyXG5cclxuXHQucmVkUGFja2V0Ym94IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogOHZoO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0d2lkdGg6IDgwdnc7XHJcblx0XHRoZWlnaHQ6IDcwdmg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdFx0YmFja2dyb3VuZDogI2ZkZjdlYjtcclxuXHR9XHJcblxyXG5cdC5yZWRQYWNrZXRJbmZvIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMzBweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQ6ICNmOTQxNTE7XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdC5ycGktdXNlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdH1cclxuXHJcblx0LnJwaS11c2VyLWltZyB7XHJcblx0XHR3aWR0aDogMjBweDtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdH1cclxuXHJcblx0LnJwaS1yZWNpdmVycyB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG5cclxuXHQucnBpLW1zZyB7XHJcblx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0fVxyXG5cclxuXHQucnBpLWNvdW50IHtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblxyXG5cdC5yZWRQYWNrZXRMaXN0IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzBweCk7XHJcblx0XHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0XHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdC5ycGwtaXRlbSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbjogNXB4IDA7XHJcblx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0LnJwbC1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjOTk5O1xyXG5cdH1cclxuXHJcblx0LnJwbC1pbWcge1xyXG5cdFx0d2lkdGg6IDM4cHg7XHJcblx0XHRoZWlnaHQ6IDM4cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0fVxyXG5cclxuXHQucnBsLXRpbWUge1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XHJcblx0fVxyXG5cclxuXHQucnBsLWluZm8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHR3aWR0aDogNjUlO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0fVxyXG5cclxuXHQucnBsLXRhZyB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRwYWRkaW5nOiAwIDVweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0bWF4LXdpZHRoOiA5NXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHR9XHJcblxyXG5cdC5pc01heCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjBiMDQ0O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjNWNhOTQxO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQuaXMwIHtcclxuXHRcdGJvcmRlci1jb2xvcjogI0Q1RDVENTtcclxuXHRcdGNvbG9yOiAjZmFhO1xyXG5cdH1cclxuXHJcblx0LmlzTmVnIHtcclxuXHRcdGJvcmRlci1jb2xvcjogI0Q1RDVENTtcclxuXHRcdGNvbG9yOiAjMDAwO1xyXG5cdH1cclxuXHJcblx0LnJwbC1tb25leSB7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0fVxyXG5cclxuXHQuZmFjZUJveCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAyMDBweDtcclxuXHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHR9XHJcblxyXG5cdC5mYWNlLWl0ZW0ge1xyXG5cdFx0bWluLXdpZHRoOiA1MHB4O1xyXG5cdFx0bWF4LXdpZHRoOiA1MHB4O1xyXG5cdFx0bWluLWhlaWdodDogNTBweDtcclxuXHRcdG1heC1oZWlnaHQ6IDUwcHg7XHJcblx0XHRtYXJnaW46IDVweDtcclxuXHR9XHJcblxyXG5cdC5sb25nVGFwLWxpc3Qge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0dG9wOiAtMjV2dztcclxuXHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRib3gtc2hhZG93OiAwIDJweCAycHggIzZjNmM2YztcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuXHR9XHJcblxyXG5cdC5sb25nVGFwLWl0ZW0ge1xyXG5cdFx0bWFyZ2luOiAwIDVweDtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdH1cclxuPC9zdHlsZT5cclxuPHN0eWxlPlxyXG5cdC5jb250ZW50Qm94Pj4+YSB7XHJcblx0XHRjb2xvcjogIzZhNzM3ZDtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNmE3MzdkO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnRCb3g+Pj5pbWcge1xyXG5cdFx0bWF4LXdpZHRoOiA1NXZ3O1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnRCb3g+Pj5ibG9ja3F1b3RlIHtcclxuXHRcdGNvbG9yOiAjNmE3MzdkO1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IC4yNWVtIHNvbGlkICNlYWVjZWY7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDFlbTtcclxuXHRcdG1hcmdpbjogNXB4IDA7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

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
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

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
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);
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
/*!******************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/redpacket.vue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page */ 36);\n/* harmony import */ var _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redpacket.vue?vue&type=script&lang=js&mpType=page */ 38);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"b748ca2a\",\n  null,\n  false,\n  _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/redpacket.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkk7QUFDN0k7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwyR0FBTTtBQUNSLEVBQUUsb0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3JlZHBhY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjc0OGNhMmEmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlZHBhY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVkcGFja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjc0OGNhMmFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC9yZWRwYWNrZXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page */ 37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 37 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* 38 */
/*!******************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/redpacket.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./redpacket.vue?vue&type=script&lang=js&mpType=page */ 39);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStpQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZHBhY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVkcGFja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/redpacket.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { apiKey: \"\", index: 0, left: 25, redpacket: { type: \"\", money: 32, count: 2, msg: \"\", recivers: [] }, defaultRedpackWord: { random: '摸鱼者，事竟成！', average: '平分红包，人人有份！', specify: '试试看，这是给你的红包吗？', heartbeat: '玩的就是心跳！' }, users: [], checkedUserAvatar: [] };}, onLoad: function onLoad(option) {this.apiKey = option.apiKey;}, created: function created() {var users = uni.getStorageSync('users');if (users) {users = JSON.parse(users);users.forEach(function (item) {item.checked = false;});this.users = users;}__f__(\"log\", users, \" at pages/chat/redpacket.vue:139\");}, methods: { send: function send(isOne) {var data = this.redpacket;if (data.money < 32) {uni.showToast({ title: '太抠了！至少要发32积分', icon: \"none\", duration: 2000 });return;} else {if (data.money > 20000) {data.money = 2000;}}if (data.count < 1) {uni.showToast({ title: '太抠了！至少要发1个', icon: \"none\", duration: 2000 });return;}if (data.type == \"specify\" && data.recivers.length < 1) {uni.showToast({ title: '专属红包至少要选1人', icon: \"none\", duration: 2000 });return;}if (data.msg == \"\") {data.msg = this.defaultRedpackWord[data.type];}var msg = \"[redpacket]\".concat(JSON.stringify(data), \"[/redpacket]\");if (isOne) {this.sendMsg(msg);} else {for (var i = 0; i < 10; i++) {this.sendMsg(msg);}}uni.navigateBack({ delta: 1, animationType: 'pop-out', animationDuration: 200 });}, sendMsg: function sendMsg(msg) {(0, _api.send)({ content: msg, apiKey: this.apiKey });}, selectUser: function selectUser(e) {var list = e.detail.value;var recivers = [];var checkedUserAvatar = [];list.forEach(function (item) {\n        var items = item.split(\",\");\n        recivers.push(items[0]);\n        var avatar = encodeURI(items[1]);\n        avatar = btoa(avatar);\n        checkedUserAvatar.push(\"https://pwl.yuis.cc/GetImage?url=\".concat(avatar));\n      });\n      this.redpacket.recivers = recivers;\n      this.redpacket.count = recivers.length;\n      this.checkedUserAvatar = checkedUserAvatar;\n      // console.log(e.detail.value)\n    },\n    changeType: function changeType(value, type) {\n      this.index = value;\n      this.redpacket.type = type;\n      if (type == \"specify\") {\n        this.redpacket.count = this.redpacket.count.length;\n      } else {\n        this.redpacket.count = 2;\n      }\n      // this.redpacket.msg = this.defaultRedpackWord[type];\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9yZWRwYWNrZXQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvR0EsNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUdBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsVUFEQSxFQUVBLFFBRkEsRUFHQSxRQUhBLEVBSUEsYUFDQSxRQURBLEVBRUEsU0FGQSxFQUdBLFFBSEEsRUFJQSxPQUpBLEVBS0EsWUFMQSxFQUpBLEVBV0Esc0JBQ0Esa0JBREEsRUFFQSxxQkFGQSxFQUdBLHdCQUhBLEVBSUEsb0JBSkEsRUFYQSxFQWlCQSxTQWpCQSxFQWtCQSxxQkFsQkEsR0FvQkEsQ0F0QkEsRUF1QkEsTUF2QkEsa0JBdUJBLE1BdkJBLEVBdUJBLENBQ0EsNEJBQ0EsQ0F6QkEsRUEwQkEsT0ExQkEscUJBMEJBLENBQ0Esd0NBQ0EsWUFDQSwwQkFDQSwrQkFDQSxxQkFDQSxDQUZBLEVBR0EsbUJBQ0EsQ0FDQSx3REFDQSxDQXBDQSxFQXFDQSxXQUNBLElBREEsZ0JBQ0EsS0FEQSxFQUNBLENBQ0EsMEJBQ0Esc0JBQ0EsZ0JBQ0EscUJBREEsRUFFQSxZQUZBLEVBR0EsY0FIQSxJQUtBLE9BQ0EsQ0FQQSxNQU9BLENBQ0EseUJBQ0Esa0JBQ0EsQ0FDQSxDQUNBLHFCQUNBLGdCQUNBLG1CQURBLEVBRUEsWUFGQSxFQUdBLGNBSEEsSUFLQSxPQUNBLENBQ0EseURBQ0EsZ0JBQ0EsbUJBREEsRUFFQSxZQUZBLEVBR0EsY0FIQSxJQUtBLE9BQ0EsQ0FDQSxxQkFDQSw4Q0FDQSxDQUNBLHFFQUNBLFlBQ0Esa0JBQ0EsQ0FGQSxNQUVBLENBQ0EsOEJBQ0Esa0JBQ0EsQ0FDQSxDQUNBLG1CQUNBLFFBREEsRUFFQSx3QkFGQSxFQUdBLHNCQUhBLElBS0EsQ0EvQ0EsRUFnREEsT0FoREEsbUJBZ0RBLEdBaERBLEVBZ0RBLENBQ0EsaUJBQ0EsWUFEQSxFQUVBLG1CQUZBLElBSUEsQ0FyREEsRUFzREEsVUF0REEsc0JBc0RBLENBdERBLEVBc0RBLENBQ0EsMEJBQ0Esa0JBQ0EsMkJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0RUE7QUF1RUEsY0F2RUEsc0JBdUVBLEtBdkVBLEVBdUVBLElBdkVBLEVBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhGQSxFQXJDQSxFIiwiZmlsZSI6IjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicmVkcGFja2V0Qm94XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInJwVGl0bGVcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3JkZXJMaW5lXCIgOnN0eWxlPVwie2xlZnQ6aW5kZXggKiAyNSArIDIuNSArICclJ31cIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBJdGVtXCIgQGNsaWNrPVwiY2hhbmdlVHlwZSgwLCdyYW5kb20nKVwiIDpjbGFzcz1cImluZGV4ID09IDAgPyAnYWN0aXZlJyA6ICcnXCI+5ou85omL5rCU57qi5YyFPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJwSXRlbVwiIEBjbGljaz1cImNoYW5nZVR5cGUoMSwnYXZlcmFnZScpXCIgOmNsYXNzPVwiaW5kZXggPT0gMSA/ICdhY3RpdmUnIDogJydcIj7mma7pgJrnuqLljIU8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBJdGVtXCIgQGNsaWNrPVwiY2hhbmdlVHlwZSgyLCdzcGVjaWZ5JylcIiA6Y2xhc3M9XCJpbmRleCA9PSAyID8gJ2FjdGl2ZScgOiAnJ1wiPuS4k+Wxnue6ouWMhTwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJycEl0ZW1cIiBAY2xpY2s9XCJjaGFuZ2VUeXBlKDMsJ2hlYXJ0YmVhdCcpXCIgOmNsYXNzPVwiaW5kZXggPT0gMyA/ICdhY3RpdmUnIDogJydcIj7lv4Pot7PnuqLljIU8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInJwRm9ybVwiIDpzdHlsZT1cIntsZWZ0OiAtaW5kZXggKiAxMDAgKyAndncnfVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJwRnJvbUl0ZW1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwTGFiZWxcIj7np6/liIY6PC92aWV3PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwicmVkcGFja2V0Lm1vbmV5XCIgY2xhc3M9XCJycElucHV0XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtSXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+5Liq5pWwOjwvdmlldz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInJlZHBhY2tldC5jb3VudFwiIGNsYXNzPVwicnBJbnB1dFwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBMYWJlbFwiPueVmeiogDo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwicmVkcGFja2V0Lm1zZ1wiIDpwbGFjZWhvbGRlcj1cImRlZmF1bHRSZWRwYWNrV29yZFsncmFuZG9tJ11cIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInJwSW5wdXRcIiBtYXhsZW5ndGg9XCIxMlwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBGcm9tSXRlbVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBMYWJlbFwiPuenr+WIhjo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubW9uZXlcIiBjbGFzcz1cInJwSW5wdXRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwTGFiZWxcIj7kuKrmlbA6PC92aWV3PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwicmVkcGFja2V0LmNvdW50XCIgY2xhc3M9XCJycElucHV0XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtSXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+55WZ6KiAOjwvdmlldz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubXNnXCIgOnBsYWNlaG9sZGVyPVwiZGVmYXVsdFJlZHBhY2tXb3JkWydhdmVyYWdlJ11cIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInJwSW5wdXRcIiBtYXhsZW5ndGg9XCIxMlwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBGcm9tSXRlbVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBMYWJlbFwiPuenr+WIhjo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubW9uZXlcIiBjbGFzcz1cInJwSW5wdXRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtIG5vLWZsZXhcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+5Y+R57uZ6LCBOjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycElucHV0IGF2YXRhckl0ZW1Cb3hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImF2YXRhckl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBjaGVja2VkVXNlckF2YXRhclwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBjbGFzcz1cImF2YXRhckl0ZW1cIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyTGlzdEJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8Y2hlY2tib3gtZ3JvdXAgQGNoYW5nZT1cInNlbGVjdFVzZXJcIiBjbGFzcz1cInVzZXJMaXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwidXNlckl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiB1c2Vyc1wiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxjaGVja2JveCA6dmFsdWU9XCJpdGVtLnVzZXJOYW1lICsgJywnICsgaXRlbS51c2VyQXZhdGFyVVJMXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6Y2hlY2tlZD1cIml0ZW0uY2hlY2tlZFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz57e2l0ZW0udXNlck5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L2NoZWNrYm94LWdyb3VwPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwTGFiZWxcIj7kuKrmlbA6PC92aWV3PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwicmVkcGFja2V0LmNvdW50XCIgZGlzYWJsZWQgY2xhc3M9XCJycElucHV0XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtSXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+55WZ6KiAOjwvdmlldz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubXNnXCIgOnBsYWNlaG9sZGVyPVwiZGVmYXVsdFJlZHBhY2tXb3JkWydzcGVjaWZ5J11cIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInJwSW5wdXRcIiBtYXhsZW5ndGg9XCIxMlwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicnBGcm9tSXRlbVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybUl0ZW1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicnBMYWJlbFwiPuenr+WIhjo8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubW9uZXlcIiBjbGFzcz1cInJwSW5wdXRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1JdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJwTGFiZWxcIj7kuKrmlbA6PC92aWV3PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwicmVkcGFja2V0LmNvdW50XCIgY2xhc3M9XCJycElucHV0XCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtSXRlbVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJycExhYmVsXCI+55WZ6KiAOjwvdmlldz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJyZWRwYWNrZXQubXNnXCIgOnBsYWNlaG9sZGVyPVwiZGVmYXVsdFJlZHBhY2tXb3JkWydoZWFydGJlYXQnXVwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwicnBJbnB1dFwiIG1heGxlbmd0aD1cIjEyXCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYnRuR3JvdXBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJidG4gd2FybmluZ1wiIEBjbGljaz1cInNlbmQoZmFsc2UpXCI+5Y2B6L+e5Y+RPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ0biBzdWNjZXNzXCIgQGNsaWNrPVwic2VuZCh0cnVlKVwiPuWPkemAgTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRzZW5kXHJcblx0fSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRhcGlLZXk6IFwiXCIsXHJcblx0XHRcdFx0aW5kZXg6IDAsXHJcblx0XHRcdFx0bGVmdDogMjUsXHJcblx0XHRcdFx0cmVkcGFja2V0OiB7XHJcblx0XHRcdFx0XHR0eXBlOiBcIlwiLFxyXG5cdFx0XHRcdFx0bW9uZXk6IDMyLFxyXG5cdFx0XHRcdFx0Y291bnQ6IDIsXHJcblx0XHRcdFx0XHRtc2c6IFwiXCIsXHJcblx0XHRcdFx0XHRyZWNpdmVyczogW11cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGRlZmF1bHRSZWRwYWNrV29yZDoge1xyXG5cdFx0XHRcdFx0cmFuZG9tOiAn5pG46bG86ICF77yM5LqL56uf5oiQ77yBJyxcclxuXHRcdFx0XHRcdGF2ZXJhZ2U6ICflubPliIbnuqLljIXvvIzkurrkurrmnInku73vvIEnLFxyXG5cdFx0XHRcdFx0c3BlY2lmeTogJ+ivleivleeci++8jOi/meaYr+e7meS9oOeahOe6ouWMheWQl++8nycsXHJcblx0XHRcdFx0XHRoZWFydGJlYXQ6ICfnjqnnmoTlsLHmmK/lv4Pot7PvvIEnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR1c2VyczogW10sXHJcblx0XHRcdFx0Y2hlY2tlZFVzZXJBdmF0YXI6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9uKSB7XHJcblx0XHRcdHRoaXMuYXBpS2V5ID0gb3B0aW9uLmFwaUtleTtcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRsZXQgdXNlcnMgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJzJylcclxuXHRcdFx0aWYgKHVzZXJzKSB7XHJcblx0XHRcdFx0dXNlcnMgPSBKU09OLnBhcnNlKHVzZXJzKVxyXG5cdFx0XHRcdHVzZXJzLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMudXNlcnMgPSB1c2VycztcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyh1c2VycylcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHNlbmQoaXNPbmUpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHRoaXMucmVkcGFja2V0O1xyXG5cdFx0XHRcdGlmIChkYXRhLm1vbmV5IDwgMzIpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+WkquaKoOS6hu+8geiHs+WwkeimgeWPkTMy56ev5YiGJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGRhdGEubW9uZXkgPiAyMDAwMCkge1xyXG5cdFx0XHRcdFx0XHRkYXRhLm1vbmV5ID0gMjAwMFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZGF0YS5jb3VudCA8IDEpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+WkquaKoOS6hu+8geiHs+WwkeimgeWPkTHkuKonLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZGF0YS50eXBlID09IFwic3BlY2lmeVwiICYmIGRhdGEucmVjaXZlcnMubGVuZ3RoIDwgMSkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5LiT5bGe57qi5YyF6Iez5bCR6KaB6YCJMeS6uicsXHJcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkYXRhLm1zZyA9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRkYXRhLm1zZyA9IHRoaXMuZGVmYXVsdFJlZHBhY2tXb3JkW2RhdGEudHlwZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBtc2cgPSBgW3JlZHBhY2tldF0ke0pTT04uc3RyaW5naWZ5KGRhdGEpfVsvcmVkcGFja2V0XWBcclxuXHRcdFx0XHRpZiAoaXNPbmUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VuZE1zZyhtc2cpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlbmRNc2cobXNnKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogJ3BvcC1vdXQnLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uRHVyYXRpb246IDIwMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbmRNc2cobXNnKSB7XHJcblx0XHRcdFx0c2VuZCh7XHJcblx0XHRcdFx0XHRjb250ZW50OiBtc2csXHJcblx0XHRcdFx0XHRhcGlLZXk6IHRoaXMuYXBpS2V5XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VsZWN0VXNlcihlKSB7XHJcblx0XHRcdFx0bGV0IGxpc3QgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0XHRsZXQgcmVjaXZlcnMgPSBbXTtcclxuXHRcdFx0XHRsZXQgY2hlY2tlZFVzZXJBdmF0YXIgPSBbXTtcclxuXHJcblx0XHRcdFx0bGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGl0ZW1zID0gaXRlbS5zcGxpdChcIixcIilcclxuXHRcdFx0XHRcdHJlY2l2ZXJzLnB1c2goaXRlbXNbMF0pXHJcblx0XHRcdFx0XHRsZXQgYXZhdGFyID0gZW5jb2RlVVJJKGl0ZW1zWzFdKVxyXG5cdFx0XHRcdFx0YXZhdGFyID0gYnRvYShhdmF0YXIpO1xyXG5cdFx0XHRcdFx0Y2hlY2tlZFVzZXJBdmF0YXIucHVzaChgaHR0cHM6Ly9wd2wueXVpcy5jYy9HZXRJbWFnZT91cmw9JHthdmF0YXJ9YClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMucmVkcGFja2V0LnJlY2l2ZXJzID0gcmVjaXZlcnM7XHJcblx0XHRcdFx0dGhpcy5yZWRwYWNrZXQuY291bnQgPSByZWNpdmVycy5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5jaGVja2VkVXNlckF2YXRhciA9IGNoZWNrZWRVc2VyQXZhdGFyO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VUeXBlKHZhbHVlLCB0eXBlKSB7XHJcblx0XHRcdFx0dGhpcy5pbmRleCA9IHZhbHVlO1xyXG5cdFx0XHRcdHRoaXMucmVkcGFja2V0LnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdGlmICh0eXBlID09IFwic3BlY2lmeVwiKSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlZHBhY2tldC5jb3VudCA9IHRoaXMucmVkcGFja2V0LmNvdW50Lmxlbmd0aDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5yZWRwYWNrZXQuY291bnQgPSAyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyB0aGlzLnJlZHBhY2tldC5tc2cgPSB0aGlzLmRlZmF1bHRSZWRwYWNrV29yZFt0eXBlXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQucmVkcGFja2V0Qm94IHtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzZTQzO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQucnBUaXRsZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0fVxyXG5cclxuXHQucnBJdGVtIHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHR9XHJcblxyXG5cdC5ib3JkZXJMaW5lIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMzVweDtcclxuXHRcdHdpZHRoOiAyMCU7XHJcblx0XHRoZWlnaHQ6IDRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHR0cmFuc2l0aW9uOiAuMnM7XHJcblx0fVxyXG5cclxuXHQucnBGb3JtIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiA0MDB2dztcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0dHJhbnNpdGlvbjogLjJzO1xyXG5cdH1cclxuXHJcblx0LnJwRnJvbUl0ZW0ge1xyXG5cdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQuZm9ybUl0ZW0ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdG1hcmdpbjogMTBweCAwO1xyXG5cdH1cclxuXHJcblx0LnJwTGFiZWwge1xyXG5cdFx0d2lkdGg6IDYwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxuXHJcblx0LnJwSW5wdXQge1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG5cdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuXHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdC5uby1mbGV4IHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHJcblx0LmF2YXRhckl0ZW1Cb3gge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0fVxyXG5cclxuXHQuYXZhdGFySXRlbSB7XHJcblx0XHR3aWR0aDogMzBweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdG1hcmdpbjogMnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXJMaXN0Qm94IHtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0fVxyXG5cclxuXHQudXNlckxpc3Qge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHR9XHJcblxyXG5cdC51c2VySXRlbSB7XHJcblx0XHRtaW4td2lkdGg6IDUwJTtcclxuXHRcdG1heC13aWR0aDogNTAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYnRuR3JvdXAge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5idG4ge1xyXG5cdFx0d2lkdGg6IDMwdnc7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRtYXJnaW46IDAgMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LnN1Y2Nlc3Mge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzYwYjA0NDtcclxuXHR9XHJcblxyXG5cdC53YXJuaW5nIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNFNkEyM0M7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!*****************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/userInfo.vue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page */ 41);\n/* harmony import */ var _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo.vue?vue&type=script&lang=js&mpType=page */ 43);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d81391d2\",\n  null,\n  false,\n  _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/userInfo.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VzZXJJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kODEzOTFkMiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXNlckluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXJJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDgxMzkxZDJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC91c2VySW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!***********************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page */ 42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 42 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* 43 */
/*!*****************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/userInfo.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./userInfo.vue?vue&type=script&lang=js&mpType=page */ 44);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThpQixDQUFnQixpbEJBQUcsRUFBQyIsImZpbGUiOiI0My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXJJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/userInfo.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { user: \"\", userInfo: {} };}, onLoad: function onLoad(option) {__f__(\"log\", option, \" at pages/chat/userInfo.vue:56\");this.user = option.user || \"Yui\";uni.setNavigationBarTitle({ title: this.user + \"的个人信息\" });this.getInfo();}, methods: { getInfo: function getInfo() {var _this = this;(0, _api.getUserInfo)(this.user).then(function (res) {if (res.cardBg == \"\") {res.cardBg = \"https://pwl.stackoverflow.wiki/2021/11/32ceecb7798ea1fa-82bd6ec7.jpg\";}if (res.sysMetal) {res.sysMetal = JSON.parse(res.sysMetal);} // url=https://pwl.stackoverflow.wiki/2021/12/metaldev-db507262.png&backcolor=483d8b&fontcolor=f8f8ff\n        // https://unv-shield.librian.net/api/unv_shield?scale=0.79&txt=开发&\n        _this.userInfo = res;__f__(\"log\", _this.userInfo, \" at pages/chat/userInfo.vue:83\");});} } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC91c2VySW5mby52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0EsNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFHQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLFFBREEsRUFFQSxZQUZBLEdBSUEsQ0FOQSxFQU9BLE1BUEEsa0JBT0EsTUFQQSxFQU9BLENBQ0EsdURBQ0EsaUNBQ0EsNEJBQ0EsMEJBREEsSUFHQSxlQUNBLENBZEEsRUFlQSxXQUNBLE9BREEscUJBQ0Esa0JBQ0Esc0RBQ0EsdUJBQ0Esb0ZBQ0EsQ0FTQSxtQkFDQSx3Q0FDQSxDQWRBLENBZUE7QUFDQTtBQUNBLDZCQUNBLCtEQUNBLENBbkJBLEVBb0JBLENBdEJBLEVBZkEsRSIsImZpbGUiOiI0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVzZXJJbmZvLWJveFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWJhY2tncm91bmRcIj5cclxuXHRcdFx0PGltYWdlIDpzcmM9XCJ1c2VySW5mby5jYXJkQmdcIiBjbGFzcz1cInVzZXItYmdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdDxpbWFnZSA6c3JjPVwidXNlckluZm8udXNlckF2YXRhclVSTFwiIGNsYXNzPVwidXNlci1hdmF0YXJcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1uYW1lXCIgdi1pZj1cInVzZXJJbmZvLnVzZXJOaWNrbmFtZVwiPnt7dXNlckluZm8udXNlck5pY2tuYW1lfX0oe3t1c2VySW5mby51c2VyTmFtZX19KTwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLW5hbWVcIiB2LWVsc2U+e3t1c2VySW5mby51c2VyTmFtZX19PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWRldGFpbC1ib3hcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWNlbGxcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbC1sYWJlbFwiPuaRuOmxvOWPt++8mjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz57e3VzZXJJbmZvLnVzZXJOb319PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWNlbGwtbGFiZWxcIj7nrb7lkI3vvJo8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+e3t1c2VySW5mby51c2VySW50cm99fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+55So5oi357uE77yaPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7dXNlckluZm8udXNlclJvbGV9fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+5Z+O5biC77yaPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7dXNlckluZm8udXNlckNpdHl9fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+6KeS6Imy77yaPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7dXNlckluZm8udXNlckFwcFJvbGUgPT0gMCA/ICfpu5HlrqInIDogJ+eUu+Wutid9fTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItY2VsbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+56ev5YiG77yaPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7dXNlckluZm8udXNlclBvaW50fX08L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWNlbGwgdXNlci1zeXNNZXRhbFwiIHYtaWY9XCJ1c2VySW5mby5zeXNNZXRhbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1jZWxsLWxhYmVsXCI+5YuL56ug77yaPC92aWV3PlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiB1c2VySW5mby5zeXNNZXRhbC5saXN0XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJzeXNNZXRhbFwiIDpzcmM9XCInaHR0cHM6Ly91bnYtc2hpZWxkLmxpYnJpYW4ubmV0L2FwaS91bnZfc2hpZWxkP3NjYWxlPTAuNzkmdHh0PScgKyBpdGVtLm5hbWUrJyYnICsgaXRlbS5hdHRyXCIgdi1pZj1cIml0ZW0uZW5hYmxlZFwiIG1vZGU9XCJoZWlnaHRGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRnZXRVc2VySW5mb1xyXG5cdH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dXNlcjpcIlwiLFxyXG5cdFx0XHRcdHVzZXJJbmZvOnt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9uKXtcclxuXHRcdFx0Y29uc29sZS5sb2cob3B0aW9uKVxyXG5cdFx0XHR0aGlzLnVzZXIgPSBvcHRpb24udXNlciB8fCBcIll1aVwiO1xyXG5cdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHR0aXRsZTogdGhpcy51c2VyICsgXCLnmoTkuKrkurrkv6Hmga9cIlxyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLmdldEluZm8oKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRnZXRJbmZvKCl7XHJcblx0XHRcdFx0Z2V0VXNlckluZm8odGhpcy51c2VyKS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0aWYocmVzLmNhcmRCZyA9PSBcIlwiKXtcclxuXHRcdFx0XHRcdFx0cmVzLmNhcmRCZyA9IFwiaHR0cHM6Ly9wd2wuc3RhY2tvdmVyZmxvdy53aWtpLzIwMjEvMTEvMzJjZWVjYjc3OThlYTFmYS04MmJkNmVjNy5qcGdcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0XHRsZXQgYmcgPSBlbmNvZGVVUkkocmVzLmNhcmRCZylcclxuXHRcdFx0XHRcdGJnID0gYnRvYShiZylcclxuXHRcdFx0XHRcdGxldCBhdmF0YXIgPSBlbmNvZGVVUkkocmVzLnVzZXJBdmF0YXJVUkwpXHJcblx0XHRcdFx0XHRhdmF0YXIgPSBidG9hKGF2YXRhcilcclxuXHRcdFx0XHRcdHJlcy5jYXJkQmcgPSBcImh0dHBzOi8vcHdsLnl1aXMuY2MvR2V0SW1hZ2U/dXJsPVwiICsgYmdcclxuXHRcdFx0XHRcdHJlcy51c2VyQXZhdGFyVVJMID0gXCJodHRwczovL3B3bC55dWlzLmNjL0dldEltYWdlP3VybD1cIiArIGF2YXRhclxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRpZihyZXMuc3lzTWV0YWwpe1xyXG5cdFx0XHRcdFx0XHRyZXMuc3lzTWV0YWwgPSBKU09OLnBhcnNlKHJlcy5zeXNNZXRhbClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIHVybD1odHRwczovL3B3bC5zdGFja292ZXJmbG93Lndpa2kvMjAyMS8xMi9tZXRhbGRldi1kYjUwNzI2Mi5wbmcmYmFja2NvbG9yPTQ4M2Q4YiZmb250Y29sb3I9ZjhmOGZmXHJcblx0XHRcdFx0XHQvLyBodHRwczovL3Vudi1zaGllbGQubGlicmlhbi5uZXQvYXBpL3Vudl9zaGllbGQ/c2NhbGU9MC43OSZ0eHQ95byA5Y+RJlxyXG5cdFx0XHRcdFx0dGhpcy51c2VySW5mbyA9IHJlcztcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC51c2VyLWJhY2tncm91bmR7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHQudXNlci1iYWNrZ3JvdW5kOjphZnRlcntcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR6LWluZGV4OiA4MDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBweDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMmRlZykgdHJhbnNsYXRlWSg0MHB4KTtcclxuXHR9XHJcblx0LnVzZXItYmFja2dyb3VuZDo6YmVmb3Jle1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHotaW5kZXg6IDkwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZykgdHJhbnNsYXRlWSg2MHB4KTtcclxuXHR9XHJcblx0LnVzZXItYmd7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMjUwcHg7XHJcblx0fVxyXG5cdC51c2VyLWF2YXRhcntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiA1dnc7XHJcblx0XHRib3R0b206IDV2dztcclxuXHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdHdpZHRoOiA4MHB4O1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdH1cclxuXHQudXNlci1uYW1le1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0cmlnaHQ6IGNhbGMoNXZ3ICsgOTBweCk7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Ym90dG9tOiA1dnc7XHJcblx0XHRwYWRkaW5nOiA1cHggOHB4O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMSk7XHJcblx0fVxyXG5cdC51c2VyLWRldGFpbC1ib3h7XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdH1cclxuXHQudXNlci1jZWxse1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRwYWRkaW5nOiA1cHggMTVweDtcclxuXHRcdGNvbG9yOiAjNjY2O1xyXG5cdH1cclxuXHQudXNlci1jZWxsLWxhYmVse1xyXG5cdFx0d2lkdGg6IDgwcHg7XHJcblx0fVxyXG5cdC51c2VyLWNlbGw6bm90KDpsYXN0LWNoaWxkKXtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xyXG5cdH1cclxuXHQuc3lzTWV0YWx7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 46);function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;
var DIFF_TIME = 60 * 1000 * 60 * 24;

var statConfig = __webpack_require__(/*! uni-stat-config */ 47).default || __webpack_require__(/*! uni-stat-config */ 47);
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

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 48).default;
var statConfig$1 = __webpack_require__(/*! uni-stat-config */ 47).default || __webpack_require__(/*! uni-stat-config */ 47);

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
/* 46 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@dcloudio/uni-stat@next\",\"_id\":\"@dcloudio/uni-stat@2.0.0-32920211119001\",\"_inBundle\":false,\"_integrity\":\"sha512-ZHsT433Njrg7gU6pQSyxf3NQCRAgFPqW6pC3Tym6aeKomAAuMofJIkes4vVv2HtYLwvphknU8NJK7dXwvEBtgA==\",\"_location\":\"/@dcloudio/uni-stat\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@dcloudio/uni-stat@next\",\"name\":\"@dcloudio/uni-stat\",\"escapedName\":\"@dcloudio%2funi-stat\",\"scope\":\"@dcloudio\",\"rawSpec\":\"next\",\"saveSpec\":null,\"fetchSpec\":\"next\"},\"_requiredBy\":[\"#USER\",\"/\",\"/@dcloudio/vue-cli-plugin-uni\"],\"_resolved\":\"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-32920211119001.tgz\",\"_shasum\":\"907715d9a9802a619f81d05b03c8a8665436c5dc\",\"_spec\":\"@dcloudio/uni-stat@next\",\"_where\":\"/Users/guoshengqiang/Documents/dcloud-plugins-new/release/uniapp-cli\",\"author\":\"\",\"bugs\":{\"url\":\"https://github.com/dcloudio/uni-app/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"\",\"devDependencies\":{\"@babel/core\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"eslint\":\"^6.1.0\",\"rollup\":\"^1.19.3\",\"rollup-plugin-babel\":\"^4.3.3\",\"rollup-plugin-clear\":\"^2.0.7\",\"rollup-plugin-commonjs\":\"^10.0.2\",\"rollup-plugin-copy\":\"^3.1.0\",\"rollup-plugin-eslint\":\"^7.0.0\",\"rollup-plugin-json\":\"^4.0.0\",\"rollup-plugin-node-resolve\":\"^5.2.0\",\"rollup-plugin-replace\":\"^2.2.0\",\"rollup-plugin-uglify\":\"^6.0.2\"},\"files\":[\"dist\",\"package.json\",\"LICENSE\"],\"gitHead\":\"330826b26bcda49d88f01d8da04ab470a0772d45\",\"homepage\":\"https://github.com/dcloudio/uni-app#readme\",\"license\":\"Apache-2.0\",\"main\":\"dist/index.js\",\"name\":\"@dcloudio/uni-stat\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/dcloudio/uni-app.git\",\"directory\":\"packages/uni-stat\"},\"scripts\":{\"build\":\"NODE_ENV=production rollup -c rollup.config.js\",\"dev\":\"NODE_ENV=development rollup -w -c rollup.config.js\"},\"version\":\"2.0.0-32920211119001\"}");

/***/ }),
/* 47 */
/*!********************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages.json?{"type":"stat"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__C1F4B2F" };exports.default = _default;

/***/ }),
/* 48 */
/*!*********************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages.json?{"type":"style"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": {}, "globalStyle": {} };exports.default = _default;

/***/ }),
/* 49 */
/*!*************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/App.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 50);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!**************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 51);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThoQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiI1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  globalData: {\n    apiKey: \"\" },\n\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:7\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:10\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:13\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwiYXBpS2V5Iiwib25MYXVuY2giLCJvblNob3ciLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7QUFDZTtBQUNkQSxZQUFVLEVBQUU7QUFDWEMsVUFBTSxFQUFFLEVBREcsRUFERTs7QUFJZEMsVUFBUSxFQUFFLG9CQUFXO0FBQ3BCLGlCQUFZLFlBQVo7QUFDQSxHQU5hO0FBT2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FUYTtBQVVkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBWmEsRSIsImZpbGUiOiI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0YXBpS2V5OiBcIlwiXG5cdH0sXG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///51\n");

/***/ })
],[[0,"app-config"]]]);