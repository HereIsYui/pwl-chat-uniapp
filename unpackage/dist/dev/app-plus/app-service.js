(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);__webpack_require__(/*! @dcloudio/uni-stat */ 47);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 51));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 54));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUIsa0RBQTRCOzs7QUFHL0Msc0U7QUFDQUEsYUFBSUMsTUFBSixDQUFXQyxhQUFYLEdBQTJCLEtBQTNCO0FBQ0FDLGFBQUlDLE1BQUosR0FBYSxLQUFiO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDUkcsWUFEUSxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7aW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG5cdC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
__definePage('pages/chat/redpacket', function () {return Vue.extend(__webpack_require__(/*! pages/chat/redpacket.vue?mpType=page */ 32).default);});
__definePage('pages/chat/userInfo', function () {return Vue.extend(__webpack_require__(/*! pages/chat/userInfo.vue?mpType=page */ 37).default);});
__definePage('pages/chat/setting', function () {return Vue.extend(__webpack_require__(/*! pages/chat/setting.vue?mpType=page */ 42).default);});

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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8);\n\n\n\nvar _sparkMd = _interopRequireDefault(__webpack_require__(/*! spark-md5 */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { ShowLogin: false, nameOrEmail: \"\", userPassword: \"\" };}, onLoad: function onLoad() {this.init();},\n  methods: {\n    init: function init() {var _this = this;\n      var apiKey = uni.getStorageSync('apiKey');\n      var data = uni.getStorageSync('userData');\n\n      if (!apiKey) {\n        // 你丫的登录信息没了，快去登录\n        setTimeout(function () {\n          _this.ShowLogin = true;\n        }, 100);\n      } else {\n        // 看看登录信息过期没有\n        this.CheckUser(apiKey);\n      }\n\n    },\n    login: function login() {\n      var that = this;\n      (0, _api.getKey)({\n        nameOrEmail: this.nameOrEmail,\n        userPassword: _sparkMd.default.hash(this.userPassword) }).\n      then(function (res) {\n        if (res.code == 0) {\n          __f__(\"log\", res, \" at pages/index/index.vue:52\");\n          // 没问题，先验证下,再滚去聊天室\n          that.CheckUser(res.Key);\n        } else {\n          // 报错就是你的错\n          uni.showToast({\n            title: '账号密码错误!',\n            icon: 'error',\n            duration: 2000 });\n\n        }\n      });\n    },\n    CheckUser: function CheckUser(apiKey) {var _this2 = this;\n      (0, _api.checkUser)({\n        apiKey: apiKey }).\n      then(function (res) {\n        if (res.code == 0) {\n          // 没过期，继续用\n          uni.setStorageSync('userData', res.data);\n          uni.setStorageSync('apiKey', apiKey);\n          getApp().globalData.data = res.data;\n          getApp().globalData.apiKey = apiKey;\n          uni.reLaunch({\n            url: '/pages/chat/chat' });\n\n        } else {\n          // 你丫的登录信息过期了，快去登录\n          setTimeout(function () {\n            _this2.ShowLogin = true;\n          }, 100);\n        }\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJTaG93TG9naW4iLCJuYW1lT3JFbWFpbCIsInVzZXJQYXNzd29yZCIsIm9uTG9hZCIsImluaXQiLCJtZXRob2RzIiwiYXBpS2V5IiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRUaW1lb3V0IiwiQ2hlY2tVc2VyIiwibG9naW4iLCJ0aGF0IiwiU3BhcmtNRDUiLCJoYXNoIiwidGhlbiIsInJlcyIsImNvZGUiLCJLZXkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsInJlTGF1bmNoIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUlBLGdGLDhGQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBT2UsRUFDZEEsSUFEYyxrQkFDUCxDQUNOLE9BQU8sRUFDTkMsU0FBUyxFQUFFLEtBREwsRUFFTkMsV0FBVyxFQUFFLEVBRlAsRUFHTkMsWUFBWSxFQUFFLEVBSFIsRUFBUCxDQUtBLENBUGEsRUFRZEMsTUFSYyxvQkFRTCxDQUNSLEtBQUtDLElBQUwsR0FDQSxDQVZhO0FBV2RDLFNBQU8sRUFBRTtBQUNSRCxRQURRLGtCQUNEO0FBQ04sVUFBSUUsTUFBTSxHQUFHQyxHQUFHLENBQUNDLGNBQUosQ0FBbUIsUUFBbkIsQ0FBYjtBQUNBLFVBQUlULElBQUksR0FBR1EsR0FBRyxDQUFDQyxjQUFKLENBQW1CLFVBQW5CLENBQVg7O0FBRUEsVUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWjtBQUNBRyxrQkFBVSxDQUFDLFlBQU07QUFDaEIsZUFBSSxDQUFDVCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdBLE9BTEQsTUFLTztBQUNOO0FBQ0EsYUFBS1UsU0FBTCxDQUFlSixNQUFmO0FBQ0E7O0FBRUQsS0FmTztBQWdCUkssU0FoQlEsbUJBZ0JBO0FBQ1AsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSx1QkFBTztBQUNOWCxtQkFBVyxFQUFFLEtBQUtBLFdBRFo7QUFFTkMsb0JBQVksRUFBRVcsaUJBQVNDLElBQVQsQ0FBYyxLQUFLWixZQUFuQixDQUZSLEVBQVA7QUFHR2EsVUFISCxDQUdRLFVBQUFDLEdBQUcsRUFBSTtBQUNkLFlBQUlBLEdBQUcsQ0FBQ0MsSUFBSixJQUFZLENBQWhCLEVBQW1CO0FBQ2xCLHVCQUFZRCxHQUFaO0FBQ0E7QUFDQUosY0FBSSxDQUFDRixTQUFMLENBQWVNLEdBQUcsQ0FBQ0UsR0FBbkI7QUFDQSxTQUpELE1BSU87QUFDTjtBQUNBWCxhQUFHLENBQUNZLFNBQUosQ0FBYztBQUNiQyxpQkFBSyxFQUFFLFNBRE07QUFFYkMsZ0JBQUksRUFBRSxPQUZPO0FBR2JDLG9CQUFRLEVBQUUsSUFIRyxFQUFkOztBQUtBO0FBQ0QsT0FoQkQ7QUFpQkEsS0FuQ087QUFvQ1JaLGFBcENRLHFCQW9DRUosTUFwQ0YsRUFvQ1U7QUFDakIsMEJBQVU7QUFDVEEsY0FBTSxFQUFFQSxNQURDLEVBQVY7QUFFR1MsVUFGSCxDQUVRLFVBQUFDLEdBQUcsRUFBSTtBQUNkLFlBQUlBLEdBQUcsQ0FBQ0MsSUFBSixJQUFZLENBQWhCLEVBQW1CO0FBQ2xCO0FBQ0FWLGFBQUcsQ0FBQ2dCLGNBQUosQ0FBbUIsVUFBbkIsRUFBK0JQLEdBQUcsQ0FBQ2pCLElBQW5DO0FBQ0FRLGFBQUcsQ0FBQ2dCLGNBQUosQ0FBbUIsUUFBbkIsRUFBNkJqQixNQUE3QjtBQUNBa0IsZ0JBQU0sR0FBR0MsVUFBVCxDQUFvQjFCLElBQXBCLEdBQTJCaUIsR0FBRyxDQUFDakIsSUFBL0I7QUFDQXlCLGdCQUFNLEdBQUdDLFVBQVQsQ0FBb0JuQixNQUFwQixHQUE2QkEsTUFBN0I7QUFDQUMsYUFBRyxDQUFDbUIsUUFBSixDQUFhO0FBQ1pDLGVBQUcsRUFBRSxrQkFETyxFQUFiOztBQUdBLFNBVEQsTUFTTztBQUNOO0FBQ0FsQixvQkFBVSxDQUFDLFlBQU07QUFDaEIsa0JBQUksQ0FBQ1QsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFdBRlMsRUFFUCxHQUZPLENBQVY7QUFHQTtBQUNELE9BbEJEO0FBbUJBLEtBeERPLEVBWEssRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB7XG5cdGdldEtleSxcblx0Y2hlY2tVc2VyXG59IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCBTcGFya01ENSBmcm9tICdzcGFyay1tZDUnXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFNob3dMb2dpbjogZmFsc2UsXG5cdFx0XHRuYW1lT3JFbWFpbDogXCJcIixcblx0XHRcdHVzZXJQYXNzd29yZDogXCJcIlxuXHRcdH1cblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0aW5pdCgpIHtcblx0XHRcdGxldCBhcGlLZXkgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2FwaUtleScpO1xuXHRcdFx0bGV0IGRhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJEYXRhJyk7XG5cblx0XHRcdGlmICghYXBpS2V5KSB7XG5cdFx0XHRcdC8vIOS9oOS4q+eahOeZu+W9leS/oeaBr+ayoeS6hu+8jOW/q+WOu+eZu+W9lVxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLlNob3dMb2dpbiA9IHRydWU7XG5cdFx0XHRcdH0sIDEwMClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIOeci+eci+eZu+W9leS/oeaBr+i/h+acn+ayoeaciVxuXHRcdFx0XHR0aGlzLkNoZWNrVXNlcihhcGlLZXkpXG5cdFx0XHR9XG5cblx0XHR9LFxuXHRcdGxvZ2luKCkge1xuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xuXHRcdFx0Z2V0S2V5KHtcblx0XHRcdFx0bmFtZU9yRW1haWw6IHRoaXMubmFtZU9yRW1haWwsXG5cdFx0XHRcdHVzZXJQYXNzd29yZDogU3BhcmtNRDUuaGFzaCh0aGlzLnVzZXJQYXNzd29yZClcblx0XHRcdH0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDApIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdFx0Ly8g5rKh6Zeu6aKY77yM5YWI6aqM6K+B5LiLLOWGjea7muWOu+iBiuWkqeWupFxuXHRcdFx0XHRcdHRoYXQuQ2hlY2tVc2VyKHJlcy5LZXkpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8g5oql6ZSZ5bCx5piv5L2g55qE6ZSZXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+i0puWPt+WvhueggemUmeivryEnLFxuXHRcdFx0XHRcdFx0aWNvbjogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRDaGVja1VzZXIoYXBpS2V5KSB7XG5cdFx0XHRjaGVja1VzZXIoe1xuXHRcdFx0XHRhcGlLZXk6IGFwaUtleVxuXHRcdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xuXHRcdFx0XHRcdC8vIOayoei/h+acn++8jOe7p+e7reeUqFxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlckRhdGEnLCByZXMuZGF0YSlcblx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2FwaUtleScsIGFwaUtleSlcblx0XHRcdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLmRhdGEgPSByZXMuZGF0YTtcblx0XHRcdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLmFwaUtleSA9IGFwaUtleTtcblx0XHRcdFx0XHR1bmkucmVMYXVuY2goe1xuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2NoYXQvY2hhdCdcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIOS9oOS4q+eahOeZu+W9leS/oeaBr+i/h+acn+S6hu+8jOW/q+WOu+eZu+W9lVxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5TaG93TG9naW4gPSB0cnVlO1xuXHRcdFx0XHRcdH0sIDEwMClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.upload = exports.checkCollectedLiveness = exports.getYesterdayLiveness = exports.getLiveness = exports.getUserInfo = exports.deleteMsg = exports.faceList = exports.send = exports.openRedPacket = exports.getMorePage = exports.checkUser = exports.getKey = exports.WS = void 0;var _util = _interopRequireDefault(__webpack_require__(/*! ./util.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar baseURL = \"https://pwl.icu\";\nvar baaseWS = \"wss://pwl.icu\";\nvar API = {\n  getKey: baseURL + \"/api/getKey\",\n  checkUser: baseURL + \"/api/user\",\n  getUserInfo: baseURL + \"/user/\",\n  emotions: baseURL + \"/users/emotions\",\n  liveness: baseURL + \"/user/liveness\",\n  more: baseURL + \"/chat-room/more\",\n  send: baseURL + \"/chat-room/send\",\n  delete: baseURL + \"/chat-room/revoke/\", ///chat-room/revoke/{消息oId}\n  ylra: baseURL + \"/activity/yesterday-liveness-reward-api\",\n  icl: baseURL + \"/api/activity/is-collected-liveness\",\n  open: baseURL + \"/chat-room/red-packet/open\",\n  getface: baseURL + \"/api/cloud/get\",\n  upload: baseURL + \"/upload\" };\n\n\nvar WS = {\n  channel: baaseWS + \"/chat-room-channel\" };exports.WS = WS;\n\n\nvar getKey = function getKey(params) {\n  return _util.default.flirt({\n    url: API.getKey,\n    data: params,\n    method: \"POST\" });\n\n};exports.getKey = getKey;\n\nvar checkUser = function checkUser(params) {\n  return _util.default.flirt({\n    url: API.checkUser,\n    data: params });\n\n};exports.checkUser = checkUser;\n\nvar getMorePage = function getMorePage(params) {\n  return _util.default.flirt({\n    url: API.more,\n    data: params });\n\n};exports.getMorePage = getMorePage;\n\nvar openRedPacket = function openRedPacket(params) {\n  return _util.default.flirt({\n    url: API.open,\n    data: params,\n    method: \"POST\" });\n\n};exports.openRedPacket = openRedPacket;\n\nvar send = function send(params) {\n  return _util.default.flirt({\n    url: API.send,\n    data: params,\n    method: \"POST\" });\n\n};exports.send = send;\n\nvar faceList = function faceList(params) {\n  return _util.default.flirt({\n    url: API.getface,\n    data: params,\n    method: \"POST\" });\n\n};exports.faceList = faceList;\n\nvar deleteMsg = function deleteMsg(params) {\n  return _util.default.flirt({\n    url: API.delete + params.oId,\n    data: {\n      apiKey: params.apiKey },\n\n    method: \"DELETE\" });\n\n};exports.deleteMsg = deleteMsg;\n\nvar getUserInfo = function getUserInfo(params) {\n  return _util.default.flirt({\n    url: API.getUserInfo + params });\n\n};exports.getUserInfo = getUserInfo;\n\nvar getLiveness = function getLiveness(params) {\n  return _util.default.flirt({\n    url: API.liveness,\n    data: params });\n\n};exports.getLiveness = getLiveness;\n\nvar getYesterdayLiveness = function getYesterdayLiveness(params) {\n  return _util.default.flirt({\n    url: API.ylra,\n    data: params });\n\n};exports.getYesterdayLiveness = getYesterdayLiveness;\n\nvar checkCollectedLiveness = function checkCollectedLiveness(params) {\n  return _util.default.flirt({\n    url: API.icl,\n    data: params });\n\n};exports.checkCollectedLiveness = checkCollectedLiveness;\n\nvar upload = function upload(params) {\n  return new Promise(function (resolve, reject) {\n    uni.uploadFile({\n      url: API.upload,\n      filePath: params,\n      name: 'file[]',\n      header: {\n        \"enctype\": \"multipart/form-data\" },\n\n      success: function success(res) {\n        resolve(res);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n\n};exports.upload = upload;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBpLmpzIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJiYWFzZVdTIiwiQVBJIiwiZ2V0S2V5IiwiY2hlY2tVc2VyIiwiZ2V0VXNlckluZm8iLCJlbW90aW9ucyIsImxpdmVuZXNzIiwibW9yZSIsInNlbmQiLCJkZWxldGUiLCJ5bHJhIiwiaWNsIiwib3BlbiIsImdldGZhY2UiLCJ1cGxvYWQiLCJXUyIsImNoYW5uZWwiLCJwYXJhbXMiLCJVVElMIiwiZmxpcnQiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiZ2V0TW9yZVBhZ2UiLCJvcGVuUmVkUGFja2V0IiwiZmFjZUxpc3QiLCJkZWxldGVNc2ciLCJvSWQiLCJhcGlLZXkiLCJnZXRMaXZlbmVzcyIsImdldFllc3RlcmRheUxpdmVuZXNzIiwiY2hlY2tDb2xsZWN0ZWRMaXZlbmVzcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidW5pIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIl0sIm1hcHBpbmdzIjoid1ZBQUEsNEU7QUFDQSxJQUFNQSxPQUFPLEdBQUcsaUJBQWhCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLGVBQWhCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHO0FBQ1hDLFFBQU0sRUFBRUgsT0FBTyxHQUFHLGFBRFA7QUFFWEksV0FBUyxFQUFFSixPQUFPLEdBQUcsV0FGVjtBQUdYSyxhQUFXLEVBQUVMLE9BQU8sR0FBRyxRQUhaO0FBSVhNLFVBQVEsRUFBRU4sT0FBTyxHQUFHLGlCQUpUO0FBS1hPLFVBQVEsRUFBRVAsT0FBTyxHQUFHLGdCQUxUO0FBTVhRLE1BQUksRUFBRVIsT0FBTyxHQUFHLGlCQU5MO0FBT1hTLE1BQUksRUFBRVQsT0FBTyxHQUFHLGlCQVBMO0FBUVhVLFFBQU0sRUFBRVYsT0FBTyxHQUFHLG9CQVJQLEVBUTZCO0FBQ3hDVyxNQUFJLEVBQUVYLE9BQU8sR0FBRyx5Q0FUTDtBQVVYWSxLQUFHLEVBQUVaLE9BQU8sR0FBRyxxQ0FWSjtBQVdYYSxNQUFJLEVBQUViLE9BQU8sR0FBRyw0QkFYTDtBQVlYYyxTQUFPLEVBQUVkLE9BQU8sR0FBRyxnQkFaUjtBQWFYZSxRQUFNLEVBQUVmLE9BQU8sR0FBRyxTQWJQLEVBQVo7OztBQWdCTyxJQUFNZ0IsRUFBRSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUVoQixPQUFPLEdBQUcsb0JBREYsRUFBWCxDOzs7QUFJQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBZSxNQUFNLEVBQUk7QUFDL0IsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNDLE1BRFE7QUFFakJtQixRQUFJLEVBQUVKLE1BRlc7QUFHakJLLFVBQU0sRUFBRSxNQUhTLEVBQVgsQ0FBUDs7QUFLQSxDQU5NLEM7O0FBUUEsSUFBTW5CLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFjLE1BQU0sRUFBSTtBQUNsQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRW5CLEdBQUcsQ0FBQ0UsU0FEUTtBQUVqQmtCLFFBQUksRUFBRUosTUFGVyxFQUFYLENBQVA7O0FBSUEsQ0FMTSxDOztBQU9BLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFOLE1BQU0sRUFBSTtBQUNwQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRW5CLEdBQUcsQ0FBQ00sSUFEUTtBQUVqQmMsUUFBSSxFQUFFSixNQUZXLEVBQVgsQ0FBUDs7QUFJQSxDQUxNLEM7O0FBT0EsSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBUCxNQUFNLEVBQUk7QUFDdEMsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNXLElBRFE7QUFFakJTLFFBQUksRUFBRUosTUFGVztBQUdqQkssVUFBTSxFQUFFLE1BSFMsRUFBWCxDQUFQOztBQUtBLENBTk0sQzs7QUFRQSxJQUFNZCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBUyxNQUFNLEVBQUk7QUFDN0IsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNPLElBRFE7QUFFakJhLFFBQUksRUFBRUosTUFGVztBQUdqQkssVUFBTSxFQUFFLE1BSFMsRUFBWCxDQUFQOztBQUtBLENBTk0sQzs7QUFRQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBUixNQUFNLEVBQUk7QUFDakMsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNZLE9BRFE7QUFFakJRLFFBQUksRUFBRUosTUFGVztBQUdqQkssVUFBTSxFQUFFLE1BSFMsRUFBWCxDQUFQOztBQUtBLENBTk0sQzs7QUFRQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBVCxNQUFNLEVBQUk7QUFDbEMsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNRLE1BQUosR0FBYVEsTUFBTSxDQUFDVSxHQURSO0FBRWpCTixRQUFJLEVBQUM7QUFDSk8sWUFBTSxFQUFDWCxNQUFNLENBQUNXLE1BRFYsRUFGWTs7QUFLakJOLFVBQU0sRUFBRSxRQUxTLEVBQVgsQ0FBUDs7QUFPQSxDQVJNLEM7O0FBVUEsSUFBTWxCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFhLE1BQU0sRUFBSTtBQUNwQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRW5CLEdBQUcsQ0FBQ0csV0FBSixHQUFrQmEsTUFETixFQUFYLENBQVA7O0FBR0EsQ0FKTSxDOztBQU1BLElBQU1ZLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFaLE1BQU0sRUFBRztBQUNuQyxTQUFPQyxjQUFLQyxLQUFMLENBQVc7QUFDakJDLE9BQUcsRUFBRW5CLEdBQUcsQ0FBQ0ssUUFEUTtBQUVqQmUsUUFBSSxFQUFFSixNQUZXLEVBQVgsQ0FBUDs7QUFJQSxDQUxNLEM7O0FBT0EsSUFBTWEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBYixNQUFNLEVBQUc7QUFDNUMsU0FBT0MsY0FBS0MsS0FBTCxDQUFXO0FBQ2pCQyxPQUFHLEVBQUVuQixHQUFHLENBQUNTLElBRFE7QUFFakJXLFFBQUksRUFBRUosTUFGVyxFQUFYLENBQVA7O0FBSUEsQ0FMTSxDOztBQU9BLElBQU1jLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQWQsTUFBTSxFQUFHO0FBQzlDLFNBQU9DLGNBQUtDLEtBQUwsQ0FBVztBQUNqQkMsT0FBRyxFQUFFbkIsR0FBRyxDQUFDVSxHQURRO0FBRWpCVSxRQUFJLEVBQUVKLE1BRlcsRUFBWCxDQUFQOztBQUlBLENBTE0sQzs7QUFPQSxJQUFNSCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBRyxNQUFNLEVBQUk7QUFDL0IsU0FBTyxJQUFJZSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDQyxPQUFHLENBQUNDLFVBQUosQ0FBZTtBQUNkaEIsU0FBRyxFQUFFbkIsR0FBRyxDQUFDYSxNQURLO0FBRWR1QixjQUFRLEVBQUVwQixNQUZJO0FBR2RxQixVQUFJLEVBQUUsUUFIUTtBQUlkQyxZQUFNLEVBQUM7QUFDTixtQkFBVSxxQkFESixFQUpPOztBQU9kQyxhQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtBQUNmUixlQUFPLENBQUNRLEdBQUQsQ0FBUDtBQUNBLE9BVGE7QUFVZEMsVUFBSSxFQUFFLGNBQUFDLEdBQUcsRUFBSTtBQUNaVCxjQUFNLENBQUNTLEdBQUQsQ0FBTjtBQUNBLE9BWmEsRUFBZjs7QUFjQSxHQWZNLENBQVA7O0FBaUJBLENBbEJNLEMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVVElMIGZyb20gJy4vdXRpbC5qcydcclxuY29uc3QgYmFzZVVSTCA9IFwiaHR0cHM6Ly9wd2wuaWN1XCJcclxuY29uc3QgYmFhc2VXUyA9IFwid3NzOi8vcHdsLmljdVwiXHJcbmNvbnN0IEFQSSA9IHtcclxuXHRnZXRLZXk6IGJhc2VVUkwgKyBcIi9hcGkvZ2V0S2V5XCIsXHJcblx0Y2hlY2tVc2VyOiBiYXNlVVJMICsgXCIvYXBpL3VzZXJcIixcclxuXHRnZXRVc2VySW5mbzogYmFzZVVSTCArIFwiL3VzZXIvXCIsXHJcblx0ZW1vdGlvbnM6IGJhc2VVUkwgKyBcIi91c2Vycy9lbW90aW9uc1wiLFxyXG5cdGxpdmVuZXNzOiBiYXNlVVJMICsgXCIvdXNlci9saXZlbmVzc1wiLFxyXG5cdG1vcmU6IGJhc2VVUkwgKyBcIi9jaGF0LXJvb20vbW9yZVwiLFxyXG5cdHNlbmQ6IGJhc2VVUkwgKyBcIi9jaGF0LXJvb20vc2VuZFwiLFxyXG5cdGRlbGV0ZTogYmFzZVVSTCArIFwiL2NoYXQtcm9vbS9yZXZva2UvXCIsIC8vL2NoYXQtcm9vbS9yZXZva2Uve+a2iOaBr29JZH1cclxuXHR5bHJhOiBiYXNlVVJMICsgXCIvYWN0aXZpdHkveWVzdGVyZGF5LWxpdmVuZXNzLXJld2FyZC1hcGlcIixcclxuXHRpY2w6IGJhc2VVUkwgKyBcIi9hcGkvYWN0aXZpdHkvaXMtY29sbGVjdGVkLWxpdmVuZXNzXCIsXHJcblx0b3BlbjogYmFzZVVSTCArIFwiL2NoYXQtcm9vbS9yZWQtcGFja2V0L29wZW5cIixcclxuXHRnZXRmYWNlOiBiYXNlVVJMICsgXCIvYXBpL2Nsb3VkL2dldFwiLFxyXG5cdHVwbG9hZDogYmFzZVVSTCArIFwiL3VwbG9hZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXUyA9IHtcclxuXHRjaGFubmVsOiBiYWFzZVdTICsgXCIvY2hhdC1yb29tLWNoYW5uZWxcIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEtleSA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkuZ2V0S2V5LFxyXG5cdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIlxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1VzZXIgPSBwYXJhbXMgPT4ge1xyXG5cdHJldHVybiBVVElMLmZsaXJ0KHtcclxuXHRcdHVybDogQVBJLmNoZWNrVXNlcixcclxuXHRcdGRhdGE6IHBhcmFtc1xyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb3JlUGFnZSA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkubW9yZSxcclxuXHRcdGRhdGE6IHBhcmFtc1xyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuUmVkUGFja2V0ID0gcGFyYW1zID0+IHtcclxuXHRyZXR1cm4gVVRJTC5mbGlydCh7XHJcblx0XHR1cmw6IEFQSS5vcGVuLFxyXG5cdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIlxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kID0gcGFyYW1zID0+IHtcclxuXHRyZXR1cm4gVVRJTC5mbGlydCh7XHJcblx0XHR1cmw6IEFQSS5zZW5kLFxyXG5cdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIlxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmYWNlTGlzdCA9IHBhcmFtcyA9PiB7XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkuZ2V0ZmFjZSxcclxuXHRcdGRhdGE6IHBhcmFtcyxcclxuXHRcdG1ldGhvZDogXCJQT1NUXCJcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTXNnID0gcGFyYW1zID0+IHtcclxuXHRyZXR1cm4gVVRJTC5mbGlydCh7XHJcblx0XHR1cmw6IEFQSS5kZWxldGUgKyBwYXJhbXMub0lkLFxyXG5cdFx0ZGF0YTp7XHJcblx0XHRcdGFwaUtleTpwYXJhbXMuYXBpS2V5XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kOiBcIkRFTEVURVwiXHJcblx0fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gcGFyYW1zID0+IHtcclxuXHRyZXR1cm4gVVRJTC5mbGlydCh7XHJcblx0XHR1cmw6IEFQSS5nZXRVc2VySW5mbyArIHBhcmFtcyxcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGl2ZW5lc3MgPSBwYXJhbXMgPT57XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkubGl2ZW5lc3MsXHJcblx0XHRkYXRhOiBwYXJhbXNcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0WWVzdGVyZGF5TGl2ZW5lc3MgPSBwYXJhbXMgPT57XHJcblx0cmV0dXJuIFVUSUwuZmxpcnQoe1xyXG5cdFx0dXJsOiBBUEkueWxyYSxcclxuXHRcdGRhdGE6IHBhcmFtc1xyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvbGxlY3RlZExpdmVuZXNzID0gcGFyYW1zID0+e1xyXG5cdHJldHVybiBVVElMLmZsaXJ0KHtcclxuXHRcdHVybDogQVBJLmljbCxcclxuXHRcdGRhdGE6IHBhcmFtc1xyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWQgPSBwYXJhbXMgPT4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdHVybDogQVBJLnVwbG9hZCwgXHJcblx0XHRcdGZpbGVQYXRoOiBwYXJhbXMsXHJcblx0XHRcdG5hbWU6ICdmaWxlW10nLFxyXG5cdFx0XHRoZWFkZXI6e1xyXG5cdFx0XHRcdFwiZW5jdHlwZVwiOlwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXMpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IGVyciA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSlcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

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
                    key: _vm._$s(4, "f", { forIndex: $20, key: index }),
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
                        __webpack_require__(/*! ../../static/icon/hongbao.png */ 15)
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
                        __webpack_require__(/*! ../../static/icon/tupian.png */ 16)
                      ),
                      _i: 37
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
                  value: _vm._$s(38, "v-show", _vm.isShowFace),
                  expression: "_$s(38,'v-show',isShowFace)"
                }
              ],
              staticClass: _vm._$s(38, "sc", "faceBox"),
              attrs: { _i: 38 }
            },
            _vm._l(_vm._$s(39, "f", { forItems: _vm.face }), function(
              item,
              index,
              $21,
              $31
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(39, "f", { forIndex: $21, key: index }),
                  staticClass: _vm._$s("39-" + $31, "sc", "face-item"),
                  attrs: { _i: "39-" + $31 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s("40-" + $31, "sc", "face-item"),
                    attrs: {
                      src: _vm._$s("40-" + $31, "a-src", item.url),
                      _i: "40-" + $31
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
            staticClass: _vm._$s(41, "sc", "sendBtn"),
            attrs: { _i: 41 },
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
          staticClass: _vm._$s(42, "sc", "longTap-list"),
          style: _vm._$s(42, "s", {
            top: _vm.clientY + "px",
            left: _vm.clientX + "px"
          }),
          attrs: { _i: 42 }
        },
        [
          _c("view", {
            staticClass: _vm._$s(43, "sc", "longTap-item"),
            attrs: { _i: 43 },
            on: {
              click: function($event) {
                return _vm.longTapEvent(0)
              }
            }
          }),
          _vm._$s(
            44,
            "i",
            _vm.data.userRole == "纪律委员" ||
              _vm.data.userRole == "OP" ||
              _vm.data.userRole == "管理员"
          )
            ? _c("view", {
                staticClass: _vm._$s(44, "sc", "longTap-item"),
                attrs: { _i: 44 },
                on: {
                  click: function($event) {
                    return _vm.longTapEvent(1)
                  }
                }
              })
            : _vm._$s(45, "e", _vm.data.userName == _vm.longData.userName)
            ? _c("view", {
                staticClass: _vm._$s(45, "sc", "longTap-item"),
                attrs: { _i: 45 },
                on: {
                  click: function($event) {
                    return _vm.longTapEvent(1)
                  }
                }
              })
            : _vm._e(),
          _c("view", {
            staticClass: _vm._$s(46, "sc", "longTap-item"),
            attrs: { _i: 46 },
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
              value: _vm._$s(47, "v-show", _vm.showRedPacketData),
              expression: "_$s(47,'v-show',showRedPacketData)"
            }
          ],
          staticClass: _vm._$s(47, "sc", "redPacketBg"),
          attrs: { _i: 47 },
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
              staticClass: _vm._$s(48, "sc", "redPacketbox"),
              attrs: { _i: 48 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(49, "sc", "redPacketInfo"),
                  attrs: { _i: 49 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(50, "sc", "rpi-user"),
                      attrs: { _i: 50 }
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s(51, "sc", "rpi-user-img"),
                        attrs: {
                          src: _vm._$s(
                            51,
                            "a-src",
                            _vm.redpacketData.info.userAvatarURL
                          ),
                          _i: 51
                        }
                      }),
                      _vm._v(
                        _vm._$s(
                          50,
                          "t1-0",
                          _vm._s(_vm.redpacketData.info.userName)
                        )
                      )
                    ]
                  ),
                  _vm._$s(
                    52,
                    "i",
                    _vm.redpacketData.recivers &&
                      _vm.redpacketData.recivers.length > 0
                  )
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(52, "sc", "rpi-recivers"),
                          attrs: { _i: 52 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              52,
                              "t0-0",
                              _vm._s(_vm.redpacketData.recivers.join(","))
                            )
                          )
                        ]
                      )
                    : _c(
                        "view",
                        {
                          staticClass: _vm._$s(53, "sc", "rpi-recivers"),
                          attrs: { _i: 53 }
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              53,
                              "t0-0",
                              _vm._s(_vm.redpacketData.info.msg)
                            )
                          )
                        ]
                      ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(54, "sc", "rpi-msg"),
                      attrs: { _i: 54 }
                    },
                    [_vm._v(_vm._$s(54, "t0-0", _vm._s(_vm.redpacketData.msg)))]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(55, "sc", "rpi-count"),
                      attrs: { _i: 55 }
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          55,
                          "t0-0",
                          _vm._s(_vm.redpacketData.info.got)
                        ) +
                          _vm._$s(
                            55,
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
                  staticClass: _vm._$s(56, "sc", "redPacketList"),
                  attrs: { _i: 56 }
                },
                _vm._l(
                  _vm._$s(57, "f", { forItems: _vm.redpacketData.who }),
                  function(item, index, $22, $32) {
                    return _c(
                      "view",
                      {
                        key: _vm._$s(57, "f", { forIndex: $22, key: index }),
                        staticClass: _vm._$s("57-" + $32, "sc", "rpl-item"),
                        attrs: { _i: "57-" + $32 }
                      },
                      [
                        _c("image", {
                          staticClass: _vm._$s("58-" + $32, "sc", "rpl-img"),
                          attrs: {
                            src: _vm._$s("58-" + $32, "a-src", item.avatar),
                            _i: "58-" + $32
                          }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("59-" + $32, "sc", "rpl-info"),
                            attrs: { _i: "59-" + $32 }
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "60-" + $32,
                                  "sc",
                                  "rpl-name"
                                ),
                                attrs: { _i: "60-" + $32 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "60-" + $32,
                                    "t0-0",
                                    _vm._s(item.userName)
                                  )
                                )
                              ]
                            ),
                            _vm._$s("61-" + $32, "i", item.isMax)
                              ? _c("view", {
                                  staticClass: _vm._$s(
                                    "61-" + $32,
                                    "sc",
                                    "rpl-tag isMax"
                                  ),
                                  attrs: { _i: "61-" + $32 }
                                })
                              : _vm._e(),
                            _vm._$s("62-" + $32, "i", item.is0)
                              ? _c("view", {
                                  staticClass: _vm._$s(
                                    "62-" + $32,
                                    "sc",
                                    "rpl-tag is0"
                                  ),
                                  attrs: { _i: "62-" + $32 }
                                })
                              : _vm._e(),
                            _vm._$s("63-" + $32, "i", item.isNeg)
                              ? _c("view", {
                                  staticClass: _vm._$s(
                                    "63-" + $32,
                                    "sc",
                                    "rpl-tag isNeg"
                                  ),
                                  attrs: { _i: "63-" + $32 }
                                })
                              : _vm._e(),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "64-" + $32,
                                  "sc",
                                  "rpl-time"
                                ),
                                attrs: { _i: "64-" + $32 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "64-" + $32,
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
                              "65-" + $32,
                              "sc",
                              "rpl-money"
                            ),
                            attrs: { _i: "65-" + $32 }
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                "65-" + $32,
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
      _vm._$s(66, "i", _vm.isShowToBottom)
        ? _c("view", {
            staticClass: _vm._$s(66, "sc", "backTobottom"),
            style: _vm._$s(66, "s", {
              bottom: _vm.isShowFace ? "300px" : "100px"
            }),
            attrs: { _i: 66 },
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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mpHtml = _interopRequireDefault(__webpack_require__(/*! mp-html/dist/uni-app/components/mp-html/mp-html */ 19));\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { mpHtml: _mpHtml.default }, data: function data() {return { content: [], apiKey: \"\", data: {}, msg: \"\", firstMsg: null, secondMsg: null, emojeSrc: '../../static/icon/huaji1.png', redpacketData: { \"who\": [], \"info\": { \"msg\": \"试试看，这是给你的红包吗？\", \"userAvatarURL\": \"\", \"count\": 1, \"userName\": \"Yui\", \"got\": 0 } }, redpacketTitle: \"\", showRedPacketData: false, JoinChat: null, JoinChatTime: 30, scrollPower: true, isShowFace: false, face: [], isSend: false, defaultTitle: { random: \"拼手气红包\", average: \"普通红包\", specify: \"专属红包\", heartbeat: \"心跳红包\" }, clientY: -999, clientX: 0, longData: { msg: \"\", oId: \"\", userName: \"\" }, nowPage: 1, isSending: false, isHistory: false, isShowToBottom: false, isSocketClose: false, scrollTimeout: null, setting: { JoinChatTime: 30, ImageLoadHome: \"https://pwl.yuis.cc/GetImage?url=\" }, scrollInfo: { oldTop: 99999 }, liveness: 0 };}, onPullDownRefresh: function onPullDownRefresh() {__f__(\"log\", \"loadPage~~\", \" at pages/chat/chat.vue:201\");clearTimeout(this.scrollTimeout);this.scrollPower = false;this.getHistoryMsg();}, onReachBottom: function onReachBottom() {this.scrollPower = true;this.isShowToBottom = false;}, onNavigationBarButtonTap: function onNavigationBarButtonTap(obj) {if (obj.type == \"menu\") {// 去设置页\n      uni.navigateTo({ url: './setting?apiKey=' + this.apiKey, animationType: 'pop-in', animationDuration: 200 });}}, onPageScroll: function onPageScroll(e) {this.clientY = -999;this.isSend = false;if (e.scrollTop < this.scrollInfo.oldTop) {this.scrollPower = false;}this.scrollInfo.oldTop = e.scrollTop;}, onLoad: function onLoad() {var _this = this;this.apiKey = getApp().globalData.apiKey || uni.getStorageSync('apiKey');this.data = getApp().globalData.data || uni.getStorageSync('userData');this.setting = uni.getStorageSync('setting') || { JoinChatTime: 30, ImageLoadHome: \"https://pwl.yuis.cc/GetImage?url=\" };if (!this.apiKey || !this.data) {uni.reLaunch({ url: '/pages/index/index' });return;}this.getPage(1);this.getFaceList();this.initChat(); // this.getUserEmotions();\n    var that = this;uni.onSocketClose(function (res) {__f__(\"log\", 'WebSocket 已关闭！', \" at pages/chat/chat.vue:247\");that.isSocketClose = true;that.JoinChat = setInterval(function () {that.JoinChatTime--;__f__(\"log\", \"\".concat(that.JoinChatTime, \"s\\u540E\\u5C1D\\u8BD5\\u91CD\\u8FDEWebSocket\"), \" at pages/chat/chat.vue:251\");if (that.JoinChatTime == 0) {that.initChat();that.JoinChatTime = that.setting.JoinChatTime || 30;}}, 1000);});\n    setInterval(function () {\n      _this.changeHuaji();\n    }, 5000);\n    uni.onKeyboardHeightChange(function (res) {\n      if (res.height == 0) {\n        _this.isShowFace = false;\n        _this.isSend = false;\n      }\n    });\n    // this.getUserLiveness();\n    // setTimeout(()=>{\n    // \tthis.getUserLiveness();\n    // },Math.random() * 30000 + 30000)\n  },\n  methods: {\n    getUserLiveness: function getUserLiveness() {var _this2 = this;\n      (0, _api.getLiveness)({\n        apiKey: this.apiKey }).\n      then(function (res) {\n        _this2.liveness = res.liveness;\n      });\n    },\n    deleteMessage: function deleteMessage(oId) {\n      (0, _api.deleteMsg)({\n        oId: oId,\n        apiKey: this.apiKey }).\n      then(function (res) {\n        __f__(\"log\", res, \" at pages/chat/chat.vue:285\");\n      });\n    },\n    getHistoryMsg: function getHistoryMsg() {var _this3 = this;\n      if (this.isHistory) {\n        return;\n      }\n      this.isHistory = true;\n      this.nowPage = this.nowPage + 1;\n      (0, _api.getMorePage)({\n        page: this.nowPage,\n        apiKey: this.apiKey }).\n      then(function (res) {\n        _this3.isHistory = false;\n        uni.stopPullDownRefresh();\n        if (res.code == 0) {\n          var info = res.data;\n          info.reverse();\n          info.forEach(function (msg) {\n\n\n\n\n\n            if (_this3.isJSON(msg.content)) {\n              msg.content = JSON.parse(msg.content);\n              msg.isMoney = true;\n            }\n            _this3.content.forEach(function (items) {\n              if (items.oId == msg.oId) {\n                msg.hide = true;\n              }\n            });\n          });\n          _this3.content = info.concat(_this3.content);\n        }\n      });\n    },\n    longTapEvent: function longTapEvent(index) {\n      this.clientY = -999;\n      if (index == 0) {\n        this.SendMsg(this.longData.msg);\n      } else if (index == 1) {\n        this.deleteMessage(this.longData.oId);\n      } else {\n        this.msg = \"##### \\u5F15\\u7528 @\".concat(this.longData.userName, \" \\n  > \").concat(this.longData.msg, \" \\n\\n\") + this.msg;\n        this.isSend = true;\n      }\n    },\n    longpress: function longpress(e) {\n      this.clientY = e.changedTouches[0].clientY - 50;\n      this.clientX = e.changedTouches[0].clientX - 50;\n      this.longData.msg = e.currentTarget.dataset.msg;\n      this.longData.oId = e.currentTarget.dataset.oid;\n      this.longData.userName = e.currentTarget.dataset.username;\n    },\n    atThis: function atThis(user) {var _this4 = this;\n      this.msg = \"@\".concat(user, \" :\") + this.msg;\n      setTimeout(function () {\n        _this4.isSend = true;\n      }, 100);\n    },\n    noSend: function noSend() {\n      this.isSend = false;\n      this.isShowFace = false;\n    },\n    onInputFocus: function onInputFocus() {\n      this.clientY = -999;\n      this.scrollPower = true;\n      this.scrollToBottom();\n    },\n    keyboardChange: function keyboardChange(e) {\n      if (e.detail.detail == 0) {\n        this.isSend = false;\n        this.isShowFace = false;\n      }\n    },\n    changeHuaji: function changeHuaji() {\n      this.emojeSrc = \"../../static/icon/huaji\".concat(Math.ceil(Math.random() * 6), \".png\");\n    },\n    toRedPacket: function toRedPacket() {\n      uni.navigateTo({\n        url: './redpacket?apiKey=' + this.apiKey,\n        animationType: 'pop-in',\n        animationDuration: 200 });\n\n    },\n    getImage: function getImage() {\n      var that = this;\n      uni.chooseImage({\n        count: 1, //默认9\n        sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有\n        success: function success(res) {\n          uni.showLoading({\n            title: '上传中...' });\n\n          (0, _api.upload)(res.tempFilePaths[0]).then(function (result) {\n            uni.hideLoading();\n            if (result.statusCode == 200) {\n              var urlList = JSON.parse(result.data);\n              urlList = urlList.data.succMap;\n              // console.log(urlList)\n              for (var key in urlList) {\n                that.msg = that.msg + \" ![\\u56FE\\u7247\\u8868\\u60C5](\".concat(urlList[key], \")\");\n              }\n              that.isSend = true;\n            } else {\n              uni.showToast({\n                title: \"图片上传失败！\",\n                icon: \"none\" });\n\n            }\n          });\n        } });\n\n\n    },\n    getFaceList: function getFaceList() {var _this5 = this;\n      (0, _api.faceList)({\n        gameId: 'emojis',\n        apiKey: this.apiKey }).\n      then(function (res) {\n        if (res.code == 0) {\n          var list = JSON.parse(res.data);\n          list.forEach(function (item) {\n            var items = encodeURI(item);\n            items = btoa(items);\n\n\n\n\n\n\n\n            _this5.face.push({\n              url: \"\".concat(_this5.setting.ImageLoadHome + items),\n              preUrl: item });\n\n\n          });\n        } else {\n          __f__(\"log\", \"===:error:===\", \" at pages/chat/chat.vue:426\");\n          __f__(\"log\", res, \" at pages/chat/chat.vue:427\");\n        }\n      });\n    },\n    sendFace: function sendFace(url) {\n      this.msg = this.msg + \" ![\\u56FE\\u7247\\u8868\\u60C5](\".concat(url, \")\");\n      this.isShowFace = false;\n      this.isSend = true;\n    },\n    toggleFace: function toggleFace() {\n      this.isShowFace = !this.isShowFace;\n    },\n    showLink: function showLink(e) {\n      var linkInfo = e;\n      // console.log(linkInfo)\n      if (linkInfo.class && linkInfo.class == \"name-at\") {\n        this.toUser(e[\"aria-label\"]);\n      }\n      if (linkInfo.target && linkInfo.target == \"_blank\") {\n\n        plus.runtime.openURL(linkInfo.href);\n\n\n\n\n      }\n    },\n    toUser: function toUser(userName) {\n      uni.navigateTo({\n        url: \"./userInfo?user=\" + userName,\n        animationType: 'pop-in',\n        animationDuration: 200 });\n\n    },\n    getPage: function getPage(page) {var _this6 = this;\n      var that = this;\n      if (page == 1) {\n        this.content = [];\n      }\n      this.scrollPower = false;\n      (0, _api.getMorePage)({\n        page: page,\n        apiKey: this.apiKey }).\n      then(function (res) {\n        if (res.code == 0) {\n          var info = res.data;\n          info.reverse();\n          info.forEach(function (msg) {\n\n\n\n\n\n            _this6.filterMsg(msg);\n          });\n          _this6.scrollPower = true;\n          _this6.scrollToBottom();\n        }\n      });\n    },\n    getMoney: function getMoney(oId) {var _this7 = this;\n      var that = this;\n      (0, _api.openRedPacket)({\n        oId: oId,\n        apiKey: that.apiKey }).\n      then(function (res) {\n        // console.log(res)\n        _this7.redpacketData = res;\n\n        var money = _this7.redpacketData.who.find(function (w) {return w.userName == _this7.data.userName;});\n\n        var specify = _this7.redpacketData.recivers && _this7.redpacketData.recivers.length && _this7.\n        redpacketData.recivers.indexOf(_this7.data.userName) >= 0;\n        var msg = \"\";\n        if (_this7.redpacketData.recivers && _this7.redpacketData.recivers.length && !specify) {\n          msg = \"会错意了\";\n        } else if (!money) {\n          msg = \"错过一个亿\";\n        } else {\n          msg =\n          money.userMoney == 0 ?\n          \"抢了个寂寞\" : \"\".concat(\n          money.userMoney, \" \\u79EF\\u5206\");\n        }\n        var moneyList = _this7.redpacketData.who;\n        var max = 0;\n        var maxIndex = 0;\n        moneyList.forEach(function (item, index) {\n          if (item.userMoney >= max) {\n            max = item.userMoney;\n            maxIndex = index;\n          }\n          if (item.userMoney == 0) {\n            moneyList[index].is0 = true;\n          }\n          if (item.userMoney < 0) {\n            moneyList[index].isNeg = true;\n          }\n        });\n        if (_this7.redpacketData.info.got == _this7.redpacketData.info.count) {\n          moneyList[maxIndex].isMax = true;\n        }\n        _this7.redpacketData.who = moneyList;\n        _this7.redpacketData.msg = msg;\n        _this7.showRedPacketData = true;\n      });\n    },\n    SendMsg: function SendMsg(msg) {\n      if (this.isSending) {\n        return;\n      }\n      var that = this;\n      var content = that.msg || msg;\n      this.isShowFace = false;\n      this.isSending = true;\n      if (content && content.trim() == \"\") {\n        return;\n      }\n      (0, _api.send)({\n        content: content,\n        apiKey: that.apiKey }).\n      then(function (res) {\n        that.msg = \"\";\n        that.isSending = false;\n        that.scrollPower = true;\n      });\n    },\n    initChat: function initChat() {\n      var that = this;\n      var socketTask = uni.connectSocket({\n        url: _api.WS.channel,\n        success: function success(res) {\n          that.isSocketClose = false;\n          __f__(\"log\", \"WebSocket 连接成功！\", \" at pages/chat/chat.vue:560\");\n          clearInterval(that.JoinChat);\n        },\n        fail: function fail(err) {\n          __f__(\"log\", \"WebSocket 连接失败！\", \" at pages/chat/chat.vue:564\");\n        } });\n\n      socketTask.onMessage(function (res) {\n        that.wsMessage(res);\n      });\n    },\n    wsMessage: function wsMessage(res) {\n      var msg = JSON.parse(res.data);\n      switch (msg.type) {\n        case \"online\": //在线人数\n          uni.setStorageSync('users', JSON.stringify(msg.users));\n          // uni.setNavigationBarTitle({\n          // \ttitle: `摸鱼派-聊天室(${msg.onlineChatCnt})`\n          // })\n          break;\n        case \"revoke\": //撤回\n          for (var i = 0; i < this.content.length; i++) {\n            var c = this.content[i];\n            if (c.oId != msg.oId) continue;\n            this.content.splice(i, 1);\n            break;\n          }\n          break;\n        case \"msg\": //消息\n          if (!this.scrollPower && !this.isShowToBottom) {\n            this.isShowToBottom = true;\n          }\n\n\n\n\n\n          this.filterMsg(msg);\n          if (this.content.length > 500) {\n            this.getPage(1);\n          }\n          break;\n        case \"redPacketStatus\":\n          this.content.push(msg);\n          break;}\n\n    },\n    filterMsg: function filterMsg(msg) {\n      var that = this;\n      if (this.isJSON(msg.content)) {\n        msg.content = JSON.parse(msg.content);\n        msg.isMoney = true;\n        this.content.push(msg);\n        this.scrollToBottom();\n\n      } else if (/<img [^>]*src=['\"]([^'\"]+)[^>]*>/gi.test(msg.content)) {\n\n\n\n\n\n\n\n\n\n        this.content.push(msg);\n      } else {\n        this.content.push(msg);\n      }\n      if (!msg.isMoney) {\n        this.secondMsg = this.firstMsg;\n        this.firstMsg = msg;\n      }\n\n    },\n    isJSON: function isJSON(str) {\n      if (typeof str == 'string') {\n        try {\n          var obj = JSON.parse(str);\n          if (typeof obj == 'object' && obj) {\n            return true;\n          } else {\n            return false;\n          }\n\n        } catch (e) {\n          return false;\n        }\n      }\n    },\n    toBottom: function toBottom() {\n      this.scrollPower = true;\n      this.isShowToBottom = false;\n      this.scrollToBottom();\n    },\n    scrollToBottom: function scrollToBottom() {\n      if (this.scrollPower) {\n        var query = uni.createSelectorQuery();\n        query.select('.contentBox').boundingClientRect();\n        query.selectViewport().scrollOffset();\n        query.exec(function (res) {\n          if (res[0]) {\n            setTimeout(function () {\n              uni.pageScrollTo({\n                scrollTop: res[0].height,\n                duration: 100 });\n\n            }, 100);\n          }\n        });\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9jaGF0LnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwibXBIdG1sIiwiZGF0YSIsImNvbnRlbnQiLCJhcGlLZXkiLCJtc2ciLCJmaXJzdE1zZyIsInNlY29uZE1zZyIsImVtb2plU3JjIiwicmVkcGFja2V0RGF0YSIsInJlZHBhY2tldFRpdGxlIiwic2hvd1JlZFBhY2tldERhdGEiLCJKb2luQ2hhdCIsIkpvaW5DaGF0VGltZSIsInNjcm9sbFBvd2VyIiwiaXNTaG93RmFjZSIsImZhY2UiLCJpc1NlbmQiLCJkZWZhdWx0VGl0bGUiLCJyYW5kb20iLCJhdmVyYWdlIiwic3BlY2lmeSIsImhlYXJ0YmVhdCIsImNsaWVudFkiLCJjbGllbnRYIiwibG9uZ0RhdGEiLCJvSWQiLCJ1c2VyTmFtZSIsIm5vd1BhZ2UiLCJpc1NlbmRpbmciLCJpc0hpc3RvcnkiLCJpc1Nob3dUb0JvdHRvbSIsImlzU29ja2V0Q2xvc2UiLCJzY3JvbGxUaW1lb3V0Iiwic2V0dGluZyIsIkltYWdlTG9hZEhvbWUiLCJzY3JvbGxJbmZvIiwib2xkVG9wIiwibGl2ZW5lc3MiLCJvblB1bGxEb3duUmVmcmVzaCIsImNsZWFyVGltZW91dCIsImdldEhpc3RvcnlNc2ciLCJvblJlYWNoQm90dG9tIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwIiwib2JqIiwidHlwZSIsInVuaSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhbmltYXRpb25UeXBlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJvblBhZ2VTY3JvbGwiLCJlIiwic2Nyb2xsVG9wIiwib25Mb2FkIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsImdldFN0b3JhZ2VTeW5jIiwicmVMYXVuY2giLCJnZXRQYWdlIiwiZ2V0RmFjZUxpc3QiLCJpbml0Q2hhdCIsInRoYXQiLCJvblNvY2tldENsb3NlIiwicmVzIiwic2V0SW50ZXJ2YWwiLCJjaGFuZ2VIdWFqaSIsIm9uS2V5Ym9hcmRIZWlnaHRDaGFuZ2UiLCJoZWlnaHQiLCJtZXRob2RzIiwiZ2V0VXNlckxpdmVuZXNzIiwidGhlbiIsImRlbGV0ZU1lc3NhZ2UiLCJwYWdlIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImNvZGUiLCJpbmZvIiwicmV2ZXJzZSIsImZvckVhY2giLCJpc0pTT04iLCJKU09OIiwicGFyc2UiLCJpc01vbmV5IiwiaXRlbXMiLCJoaWRlIiwiY29uY2F0IiwibG9uZ1RhcEV2ZW50IiwiaW5kZXgiLCJTZW5kTXNnIiwibG9uZ3ByZXNzIiwiY2hhbmdlZFRvdWNoZXMiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm9pZCIsInVzZXJuYW1lIiwiYXRUaGlzIiwidXNlciIsInNldFRpbWVvdXQiLCJub1NlbmQiLCJvbklucHV0Rm9jdXMiLCJzY3JvbGxUb0JvdHRvbSIsImtleWJvYXJkQ2hhbmdlIiwiZGV0YWlsIiwiTWF0aCIsImNlaWwiLCJ0b1JlZFBhY2tldCIsImdldEltYWdlIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic3VjY2VzcyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJ0ZW1wRmlsZVBhdGhzIiwicmVzdWx0IiwiaGlkZUxvYWRpbmciLCJzdGF0dXNDb2RlIiwidXJsTGlzdCIsInN1Y2NNYXAiLCJrZXkiLCJzaG93VG9hc3QiLCJpY29uIiwiZ2FtZUlkIiwibGlzdCIsIml0ZW0iLCJlbmNvZGVVUkkiLCJidG9hIiwicHVzaCIsInByZVVybCIsInNlbmRGYWNlIiwidG9nZ2xlRmFjZSIsInNob3dMaW5rIiwibGlua0luZm8iLCJjbGFzcyIsInRvVXNlciIsInRhcmdldCIsInBsdXMiLCJydW50aW1lIiwib3BlblVSTCIsImhyZWYiLCJmaWx0ZXJNc2ciLCJnZXRNb25leSIsIm1vbmV5Iiwid2hvIiwiZmluZCIsInciLCJyZWNpdmVycyIsImxlbmd0aCIsImluZGV4T2YiLCJ1c2VyTW9uZXkiLCJtb25leUxpc3QiLCJtYXgiLCJtYXhJbmRleCIsImlzMCIsImlzTmVnIiwiZ290IiwiaXNNYXgiLCJ0cmltIiwic29ja2V0VGFzayIsImNvbm5lY3RTb2NrZXQiLCJXUyIsImNoYW5uZWwiLCJjbGVhckludGVydmFsIiwiZmFpbCIsImVyciIsIm9uTWVzc2FnZSIsIndzTWVzc2FnZSIsInNldFN0b3JhZ2VTeW5jIiwic3RyaW5naWZ5IiwidXNlcnMiLCJpIiwiYyIsInNwbGljZSIsInRlc3QiLCJzdHIiLCJ0b0JvdHRvbSIsInF1ZXJ5IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInNlbGVjdFZpZXdwb3J0Iiwic2Nyb2xsT2Zmc2V0IiwiZXhlYyIsInBhZ2VTY3JvbGxUbyIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0hBO0FBQ0EsNEQsOEZBaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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YUFBSyxDQUFDTSxJQUFOLENBQVcsVUFBQXRILEdBQUcsRUFBSTtBQUNqQixjQUFJQSxHQUFHLENBQUMsQ0FBRCxDQUFQLEVBQVk7QUFDWGlDLHNCQUFVLENBQUMsWUFBTTtBQUNoQm5ELGlCQUFHLENBQUN5SSxZQUFKLENBQWlCO0FBQ2hCbEkseUJBQVMsRUFBRVcsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPSSxNQURGO0FBRWhCb0gsd0JBQVEsRUFBRSxHQUZNLEVBQWpCOztBQUlBLGFBTFMsRUFLUCxHQUxPLENBQVY7QUFNQTtBQUNELFNBVEQ7QUFVQTtBQUNELEtBL1lPLEVBcElLLEUiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBtcEh0bWwgZnJvbSAnbXAtaHRtbC9kaXN0L3VuaS1hcHAvY29tcG9uZW50cy9tcC1odG1sL21wLWh0bWwnXG5pbXBvcnQge1xuXHR1cGxvYWQsXG5cdGdldE1vcmVQYWdlLFxuXHRvcGVuUmVkUGFja2V0LFxuXHRXUyxcblx0c2VuZCxcblx0ZmFjZUxpc3QsXG5cdGdldFVzZXJJbmZvLFxuXHRkZWxldGVNc2csXG5cdGdldExpdmVuZXNzXG59IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29tcG9uZW50czoge1xuXHRcdG1wSHRtbFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb250ZW50OiBbXSxcblx0XHRcdGFwaUtleTogXCJcIixcblx0XHRcdGRhdGE6IHt9LFxuXHRcdFx0bXNnOiBcIlwiLFxuXHRcdFx0Zmlyc3RNc2c6IG51bGwsXG5cdFx0XHRzZWNvbmRNc2c6IG51bGwsXG5cdFx0XHRlbW9qZVNyYzogJy4uLy4uL3N0YXRpYy9pY29uL2h1YWppMS5wbmcnLFxuXHRcdFx0cmVkcGFja2V0RGF0YToge1xuXHRcdFx0XHRcIndob1wiOiBbXSxcblx0XHRcdFx0XCJpbmZvXCI6IHtcblx0XHRcdFx0XHRcIm1zZ1wiOiBcIuivleivleeci++8jOi/meaYr+e7meS9oOeahOe6ouWMheWQl++8n1wiLFxuXHRcdFx0XHRcdFwidXNlckF2YXRhclVSTFwiOiBcIlwiLFxuXHRcdFx0XHRcdFwiY291bnRcIjogMSxcblx0XHRcdFx0XHRcInVzZXJOYW1lXCI6IFwiWXVpXCIsXG5cdFx0XHRcdFx0XCJnb3RcIjogMFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVkcGFja2V0VGl0bGU6IFwiXCIsXG5cdFx0XHRzaG93UmVkUGFja2V0RGF0YTogZmFsc2UsXG5cdFx0XHRKb2luQ2hhdDogbnVsbCxcblx0XHRcdEpvaW5DaGF0VGltZTogMzAsXG5cdFx0XHRzY3JvbGxQb3dlcjogdHJ1ZSxcblx0XHRcdGlzU2hvd0ZhY2U6IGZhbHNlLFxuXHRcdFx0ZmFjZTogW10sXG5cdFx0XHRpc1NlbmQ6IGZhbHNlLFxuXHRcdFx0ZGVmYXVsdFRpdGxlOiB7XG5cdFx0XHRcdHJhbmRvbTogXCLmi7zmiYvmsJTnuqLljIVcIixcblx0XHRcdFx0YXZlcmFnZTogXCLmma7pgJrnuqLljIVcIixcblx0XHRcdFx0c3BlY2lmeTogXCLkuJPlsZ7nuqLljIVcIixcblx0XHRcdFx0aGVhcnRiZWF0OiBcIuW/g+i3s+e6ouWMhVwiXG5cdFx0XHR9LFxuXHRcdFx0Y2xpZW50WTogLTk5OSxcblx0XHRcdGNsaWVudFg6IDAsXG5cdFx0XHRsb25nRGF0YToge1xuXHRcdFx0XHRtc2c6IFwiXCIsXG5cdFx0XHRcdG9JZDogXCJcIixcblx0XHRcdFx0dXNlck5hbWU6IFwiXCIsXG5cdFx0XHR9LFxuXHRcdFx0bm93UGFnZTogMSxcblx0XHRcdGlzU2VuZGluZzogZmFsc2UsXG5cdFx0XHRpc0hpc3Rvcnk6IGZhbHNlLFxuXHRcdFx0aXNTaG93VG9Cb3R0b206IGZhbHNlLFxuXHRcdFx0aXNTb2NrZXRDbG9zZTogZmFsc2UsXG5cdFx0XHRzY3JvbGxUaW1lb3V0OiBudWxsLFxuXHRcdFx0c2V0dGluZzoge1xuXHRcdFx0XHRKb2luQ2hhdFRpbWU6IDMwLFxuXHRcdFx0XHRJbWFnZUxvYWRIb21lOiBcImh0dHBzOi8vcHdsLnl1aXMuY2MvR2V0SW1hZ2U/dXJsPVwiXG5cdFx0XHR9LFxuXHRcdFx0c2Nyb2xsSW5mbzoge1xuXHRcdFx0XHRvbGRUb3A6IDk5OTk5XG5cdFx0XHR9LFxuXHRcdFx0bGl2ZW5lc3M6IDBcblx0XHR9XG5cdH0sXG5cdG9uUHVsbERvd25SZWZyZXNoKCkge1xuXHRcdGNvbnNvbGUubG9nKFwibG9hZFBhZ2V+flwiKVxuXHRcdGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVvdXQpO1xuXHRcdHRoaXMuc2Nyb2xsUG93ZXIgPSBmYWxzZTtcblx0XHR0aGlzLmdldEhpc3RvcnlNc2coKVxuXHR9LFxuXHRvblJlYWNoQm90dG9tKCkge1xuXHRcdHRoaXMuc2Nyb2xsUG93ZXIgPSB0cnVlO1xuXHRcdHRoaXMuaXNTaG93VG9Cb3R0b20gPSBmYWxzZTtcblx0fSxcblx0b25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKG9iaikge1xuXHRcdGlmIChvYmoudHlwZSA9PSBcIm1lbnVcIikge1xuXHRcdFx0Ly8g5Y676K6+572u6aG1XG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDogJy4vc2V0dGluZz9hcGlLZXk9JyArIHRoaXMuYXBpS2V5LFxuXHRcdFx0XHRhbmltYXRpb25UeXBlOiAncG9wLWluJyxcblx0XHRcdFx0YW5pbWF0aW9uRHVyYXRpb246IDIwMFxuXHRcdFx0fSlcblx0XHR9XG5cdH0sXG5cdG9uUGFnZVNjcm9sbChlKSB7XG5cdFx0dGhpcy5jbGllbnRZID0gLTk5OTtcblx0XHR0aGlzLmlzU2VuZCA9IGZhbHNlO1xuXHRcdGlmIChlLnNjcm9sbFRvcCA8IHRoaXMuc2Nyb2xsSW5mby5vbGRUb3ApIHtcblx0XHRcdHRoaXMuc2Nyb2xsUG93ZXIgPSBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zY3JvbGxJbmZvLm9sZFRvcCA9IGUuc2Nyb2xsVG9wO1xuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0dGhpcy5hcGlLZXkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhLmFwaUtleSB8fCB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2FwaUtleScpO1xuXHRcdHRoaXMuZGF0YSA9IGdldEFwcCgpLmdsb2JhbERhdGEuZGF0YSB8fCB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJEYXRhJyk7XG5cdFx0dGhpcy5zZXR0aW5nID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdzZXR0aW5nJykgfHwge1xuXHRcdFx0Sm9pbkNoYXRUaW1lOiAzMCxcblx0XHRcdEltYWdlTG9hZEhvbWU6IFwiaHR0cHM6Ly9wd2wueXVpcy5jYy9HZXRJbWFnZT91cmw9XCJcblx0XHR9O1xuXHRcdGlmICghdGhpcy5hcGlLZXkgfHwgIXRoaXMuZGF0YSkge1xuXHRcdFx0dW5pLnJlTGF1bmNoKHtcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuXHRcdFx0fSlcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5nZXRQYWdlKDEpO1xuXHRcdHRoaXMuZ2V0RmFjZUxpc3QoKTtcblx0XHR0aGlzLmluaXRDaGF0KCk7XG5cdFx0Ly8gdGhpcy5nZXRVc2VyRW1vdGlvbnMoKTtcblx0XHRsZXQgdGhhdCA9IHRoaXM7XG5cdFx0dW5pLm9uU29ja2V0Q2xvc2UoZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnV2ViU29ja2V0IOW3suWFs+mXre+8gScpO1xuXHRcdFx0dGhhdC5pc1NvY2tldENsb3NlID0gdHJ1ZTtcblx0XHRcdHRoYXQuSm9pbkNoYXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoYXQuSm9pbkNoYXRUaW1lLS07XG5cdFx0XHRcdGNvbnNvbGUubG9nKGAke3RoYXQuSm9pbkNoYXRUaW1lfXPlkI7lsJ3or5Xph43ov55XZWJTb2NrZXRgKTtcblx0XHRcdFx0aWYgKHRoYXQuSm9pbkNoYXRUaW1lID09IDApIHtcblx0XHRcdFx0XHR0aGF0LmluaXRDaGF0KClcblx0XHRcdFx0XHR0aGF0LkpvaW5DaGF0VGltZSA9IHRoYXQuc2V0dGluZy5Kb2luQ2hhdFRpbWUgfHwgMzA7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwMDApXG5cdFx0fSk7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0dGhpcy5jaGFuZ2VIdWFqaSgpXG5cdFx0fSwgNTAwMClcblx0XHR1bmkub25LZXlib2FyZEhlaWdodENoYW5nZShyZXMgPT4ge1xuXHRcdFx0aWYgKHJlcy5oZWlnaHQgPT0gMCkge1xuXHRcdFx0XHR0aGlzLmlzU2hvd0ZhY2UgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5pc1NlbmQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC8vIHRoaXMuZ2V0VXNlckxpdmVuZXNzKCk7XG5cdFx0Ly8gc2V0VGltZW91dCgoKT0+e1xuXHRcdC8vIFx0dGhpcy5nZXRVc2VyTGl2ZW5lc3MoKTtcblx0XHQvLyB9LE1hdGgucmFuZG9tKCkgKiAzMDAwMCArIDMwMDAwKVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0VXNlckxpdmVuZXNzKCl7XG5cdFx0XHRnZXRMaXZlbmVzcyh7XG5cdFx0XHRcdGFwaUtleTogdGhpcy5hcGlLZXlcblx0XHRcdH0pLnRoZW4ocmVzPT57XG5cdFx0XHRcdHRoaXMubGl2ZW5lc3MgPSByZXMubGl2ZW5lc3M7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0ZGVsZXRlTWVzc2FnZShvSWQpIHtcblx0XHRcdGRlbGV0ZU1zZyh7XG5cdFx0XHRcdG9JZDogb0lkLFxuXHRcdFx0XHRhcGlLZXk6IHRoaXMuYXBpS2V5XG5cdFx0XHR9KS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRnZXRIaXN0b3J5TXNnKCkge1xuXHRcdFx0aWYgKHRoaXMuaXNIaXN0b3J5KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuaXNIaXN0b3J5ID0gdHJ1ZTtcblx0XHRcdHRoaXMubm93UGFnZSA9IHRoaXMubm93UGFnZSArIDE7XG5cdFx0XHRnZXRNb3JlUGFnZSh7XG5cdFx0XHRcdHBhZ2U6IHRoaXMubm93UGFnZSxcblx0XHRcdFx0YXBpS2V5OiB0aGlzLmFwaUtleVxuXHRcdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHR0aGlzLmlzSGlzdG9yeSA9IGZhbHNlO1xuXHRcdFx0XHR1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XG5cdFx0XHRcdFx0bGV0IGluZm8gPSByZXMuZGF0YTtcblx0XHRcdFx0XHRpbmZvLnJldmVyc2UoKTtcblx0XHRcdFx0XHRpbmZvLmZvckVhY2gobXNnID0+IHtcblxuXG5cblxuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5pc0pTT04obXNnLmNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0XHRcdG1zZy5jb250ZW50ID0gSlNPTi5wYXJzZShtc2cuY29udGVudClcblx0XHRcdFx0XHRcdFx0bXNnLmlzTW9uZXkgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5jb250ZW50LmZvckVhY2goaXRlbXMgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbXMub0lkID09IG1zZy5vSWQpIHtcblx0XHRcdFx0XHRcdFx0XHRtc2cuaGlkZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHRoaXMuY29udGVudCA9IGluZm8uY29uY2F0KHRoaXMuY29udGVudClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGxvbmdUYXBFdmVudChpbmRleCkge1xuXHRcdFx0dGhpcy5jbGllbnRZID0gLTk5OTtcblx0XHRcdGlmIChpbmRleCA9PSAwKSB7XG5cdFx0XHRcdHRoaXMuU2VuZE1zZyh0aGlzLmxvbmdEYXRhLm1zZylcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gMSkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZU1lc3NhZ2UodGhpcy5sb25nRGF0YS5vSWQpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1zZyA9IGAjIyMjIyDlvJXnlKggQCR7dGhpcy5sb25nRGF0YS51c2VyTmFtZX0gXFxuICA+ICR7dGhpcy5sb25nRGF0YS5tc2d9IFxcblxcbmAgKyB0aGlzLm1zZztcblx0XHRcdFx0dGhpcy5pc1NlbmQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bG9uZ3ByZXNzKGUpIHtcblx0XHRcdHRoaXMuY2xpZW50WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIDUwO1xuXHRcdFx0dGhpcy5jbGllbnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gNTA7XG5cdFx0XHR0aGlzLmxvbmdEYXRhLm1zZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm1zZztcblx0XHRcdHRoaXMubG9uZ0RhdGEub0lkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQub2lkO1xuXHRcdFx0dGhpcy5sb25nRGF0YS51c2VyTmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnVzZXJuYW1lO1xuXHRcdH0sXG5cdFx0YXRUaGlzKHVzZXIpIHtcblx0XHRcdHRoaXMubXNnID0gYEAke3VzZXJ9IDpgICsgdGhpcy5tc2c7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5pc1NlbmQgPSB0cnVlO1xuXHRcdFx0fSwgMTAwKVxuXHRcdH0sXG5cdFx0bm9TZW5kKCkge1xuXHRcdFx0dGhpcy5pc1NlbmQgPSBmYWxzZTtcblx0XHRcdHRoaXMuaXNTaG93RmFjZSA9IGZhbHNlO1xuXHRcdH0sXG5cdFx0b25JbnB1dEZvY3VzKCkge1xuXHRcdFx0dGhpcy5jbGllbnRZID0gLTk5OTtcblx0XHRcdHRoaXMuc2Nyb2xsUG93ZXIgPSB0cnVlO1xuXHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpXG5cdFx0fSxcblx0XHRrZXlib2FyZENoYW5nZShlKSB7XG5cdFx0XHRpZiAoZS5kZXRhaWwuZGV0YWlsID09IDApIHtcblx0XHRcdFx0dGhpcy5pc1NlbmQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5pc1Nob3dGYWNlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjaGFuZ2VIdWFqaSgpIHtcblx0XHRcdHRoaXMuZW1vamVTcmMgPSBgLi4vLi4vc3RhdGljL2ljb24vaHVhamkke01hdGguY2VpbChNYXRoLnJhbmRvbSgpKjYpfS5wbmdgXG5cdFx0fSxcblx0XHR0b1JlZFBhY2tldCgpIHtcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiAnLi9yZWRwYWNrZXQ/YXBpS2V5PScgKyB0aGlzLmFwaUtleSxcblx0XHRcdFx0YW5pbWF0aW9uVHlwZTogJ3BvcC1pbicsXG5cdFx0XHRcdGFuaW1hdGlvbkR1cmF0aW9uOiAyMDBcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRnZXRJbWFnZSgpIHtcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcblx0XHRcdHVuaS5jaG9vc2VJbWFnZSh7XG5cdFx0XHRcdGNvdW50OiAxLCAvL+m7mOiupDlcblx0XHRcdFx0c2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLCAvL+WPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfkuIrkvKDkuK0uLi4nXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR1cGxvYWQocmVzLnRlbXBGaWxlUGF0aHNbMF0pLnRoZW4ocmVzdWx0ID0+IHtcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LnN0YXR1c0NvZGUgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdGxldCB1cmxMaXN0ID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG5cdFx0XHRcdFx0XHRcdHVybExpc3QgPSB1cmxMaXN0LmRhdGEuc3VjY01hcDtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codXJsTGlzdClcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQga2V5IGluIHVybExpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lm1zZyA9IHRoYXQubXNnICsgYCAhW+WbvueJh+ihqOaDhV0oJHt1cmxMaXN0W2tleV19KWBcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0aGF0LmlzU2VuZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLlm77niYfkuIrkvKDlpLHotKXvvIFcIixcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fSxcblx0XHRnZXRGYWNlTGlzdCgpIHtcblx0XHRcdGZhY2VMaXN0KHtcblx0XHRcdFx0Z2FtZUlkOiAnZW1vamlzJyxcblx0XHRcdFx0YXBpS2V5OiB0aGlzLmFwaUtleVxuXHRcdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xuXHRcdFx0XHRcdGxldCBsaXN0ID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG5cdFx0XHRcdFx0bGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0bGV0IGl0ZW1zID0gZW5jb2RlVVJJKGl0ZW0pXG5cdFx0XHRcdFx0XHRpdGVtcyA9IGJ0b2EoaXRlbXMpO1xuXG5cblxuXG5cblxuXG5cdFx0XHRcdFx0XHR0aGlzLmZhY2UucHVzaCh7XG5cdFx0XHRcdFx0XHRcdHVybDogYCR7dGhpcy5zZXR0aW5nLkltYWdlTG9hZEhvbWUraXRlbXN9YCxcblx0XHRcdFx0XHRcdFx0cHJlVXJsOiBpdGVtXG5cdFx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIj09PTplcnJvcjo9PT1cIilcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRzZW5kRmFjZSh1cmwpIHtcblx0XHRcdHRoaXMubXNnID0gdGhpcy5tc2cgKyBgICFb5Zu+54mH6KGo5oOFXSgke3VybH0pYDtcblx0XHRcdHRoaXMuaXNTaG93RmFjZSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5pc1NlbmQgPSB0cnVlO1xuXHRcdH0sXG5cdFx0dG9nZ2xlRmFjZSgpIHtcblx0XHRcdHRoaXMuaXNTaG93RmFjZSA9ICF0aGlzLmlzU2hvd0ZhY2U7XG5cdFx0fSxcblx0XHRzaG93TGluayhlKSB7XG5cdFx0XHRsZXQgbGlua0luZm8gPSBlO1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobGlua0luZm8pXG5cdFx0XHRpZiAobGlua0luZm8uY2xhc3MgJiYgbGlua0luZm8uY2xhc3MgPT0gXCJuYW1lLWF0XCIpIHtcblx0XHRcdFx0dGhpcy50b1VzZXIoZVtcImFyaWEtbGFiZWxcIl0pXG5cdFx0XHR9XG5cdFx0XHRpZiAobGlua0luZm8udGFyZ2V0ICYmIGxpbmtJbmZvLnRhcmdldCA9PSBcIl9ibGFua1wiKSB7XG5cblx0XHRcdFx0cGx1cy5ydW50aW1lLm9wZW5VUkwobGlua0luZm8uaHJlZik7XG5cblxuXG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdHRvVXNlcih1c2VyTmFtZSkge1xuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHR1cmw6IFwiLi91c2VySW5mbz91c2VyPVwiICsgdXNlck5hbWUsXG5cdFx0XHRcdGFuaW1hdGlvblR5cGU6ICdwb3AtaW4nLFxuXHRcdFx0XHRhbmltYXRpb25EdXJhdGlvbjogMjAwXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Z2V0UGFnZShwYWdlKSB7XG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XG5cdFx0XHRpZiAocGFnZSA9PSAxKSB7XG5cdFx0XHRcdHRoaXMuY29udGVudCA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zY3JvbGxQb3dlciA9IGZhbHNlO1xuXHRcdFx0Z2V0TW9yZVBhZ2Uoe1xuXHRcdFx0XHRwYWdlOiBwYWdlLFxuXHRcdFx0XHRhcGlLZXk6IHRoaXMuYXBpS2V5XG5cdFx0XHR9KS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XG5cdFx0XHRcdFx0bGV0IGluZm8gPSByZXMuZGF0YTtcblx0XHRcdFx0XHRpbmZvLnJldmVyc2UoKTtcblx0XHRcdFx0XHRpbmZvLmZvckVhY2gobXNnID0+IHtcblxuXG5cblxuXG5cdFx0XHRcdFx0XHR0aGlzLmZpbHRlck1zZyhtc2cpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR0aGlzLnNjcm9sbFBvd2VyID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGdldE1vbmV5KG9JZCkge1xuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xuXHRcdFx0b3BlblJlZFBhY2tldCh7XG5cdFx0XHRcdG9JZDogb0lkLFxuXHRcdFx0XHRhcGlLZXk6IHRoYXQuYXBpS2V5XG5cdFx0XHR9KS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcylcblx0XHRcdFx0dGhpcy5yZWRwYWNrZXREYXRhID0gcmVzO1xuXG5cdFx0XHRcdGxldCBtb25leSA9IHRoaXMucmVkcGFja2V0RGF0YS53aG8uZmluZCh3ID0+IHcudXNlck5hbWUgPT0gdGhpcy5kYXRhLnVzZXJOYW1lKTtcblxuXHRcdFx0XHRsZXQgc3BlY2lmeSA9ICh0aGlzLnJlZHBhY2tldERhdGEucmVjaXZlcnMgJiYgdGhpcy5yZWRwYWNrZXREYXRhLnJlY2l2ZXJzLmxlbmd0aCAmJiB0aGlzXG5cdFx0XHRcdFx0LnJlZHBhY2tldERhdGEucmVjaXZlcnMuaW5kZXhPZih0aGlzLmRhdGEudXNlck5hbWUpID49IDApXG5cdFx0XHRcdGxldCBtc2cgPSBcIlwiO1xuXHRcdFx0XHRpZiAodGhpcy5yZWRwYWNrZXREYXRhLnJlY2l2ZXJzICYmIHRoaXMucmVkcGFja2V0RGF0YS5yZWNpdmVycy5sZW5ndGggJiYgIXNwZWNpZnkpIHtcblx0XHRcdFx0XHRtc2cgPSBcIuS8mumUmeaEj+S6hlwiXG5cdFx0XHRcdH0gZWxzZSBpZiAoIW1vbmV5KSB7XG5cdFx0XHRcdFx0bXNnID0gXCLplJnov4fkuIDkuKrkur9cIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtc2cgPVxuXHRcdFx0XHRcdFx0bW9uZXkudXNlck1vbmV5ID09IDAgP1xuXHRcdFx0XHRcdFx0XCLmiqLkuobkuKrlr4Llr55cIiA6XG5cdFx0XHRcdFx0XHRgJHttb25leS51c2VyTW9uZXl9IOenr+WIhmA7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IG1vbmV5TGlzdCA9IHRoaXMucmVkcGFja2V0RGF0YS53aG87XG5cdFx0XHRcdGxldCBtYXggPSAwO1xuXHRcdFx0XHRsZXQgbWF4SW5kZXggPSAwO1xuXHRcdFx0XHRtb25leUxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRpZiAoaXRlbS51c2VyTW9uZXkgPj0gbWF4KSB7XG5cdFx0XHRcdFx0XHRtYXggPSBpdGVtLnVzZXJNb25leTtcblx0XHRcdFx0XHRcdG1heEluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChpdGVtLnVzZXJNb25leSA9PSAwKSB7XG5cdFx0XHRcdFx0XHRtb25leUxpc3RbaW5kZXhdLmlzMCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChpdGVtLnVzZXJNb25leSA8IDApIHtcblx0XHRcdFx0XHRcdG1vbmV5TGlzdFtpbmRleF0uaXNOZWcgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0aWYgKHRoaXMucmVkcGFja2V0RGF0YS5pbmZvLmdvdCA9PSB0aGlzLnJlZHBhY2tldERhdGEuaW5mby5jb3VudCkge1xuXHRcdFx0XHRcdG1vbmV5TGlzdFttYXhJbmRleF0uaXNNYXggPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucmVkcGFja2V0RGF0YS53aG8gPSBtb25leUxpc3Q7XG5cdFx0XHRcdHRoaXMucmVkcGFja2V0RGF0YS5tc2cgPSBtc2c7XG5cdFx0XHRcdHRoaXMuc2hvd1JlZFBhY2tldERhdGEgPSB0cnVlO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdFNlbmRNc2cobXNnKSB7XG5cdFx0XHRpZiAodGhpcy5pc1NlbmRpbmcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xuXHRcdFx0bGV0IGNvbnRlbnQgPSB0aGF0Lm1zZyB8fCBtc2c7XG5cdFx0XHR0aGlzLmlzU2hvd0ZhY2UgPSBmYWxzZTtcblx0XHRcdHRoaXMuaXNTZW5kaW5nID0gdHJ1ZTtcblx0XHRcdGlmIChjb250ZW50ICYmIGNvbnRlbnQudHJpbSgpID09IFwiXCIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2VuZCh7XG5cdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnQsXG5cdFx0XHRcdGFwaUtleTogdGhhdC5hcGlLZXlcblx0XHRcdH0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0dGhhdC5tc2cgPSBcIlwiO1xuXHRcdFx0XHR0aGF0LmlzU2VuZGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGF0LnNjcm9sbFBvd2VyID0gdHJ1ZTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRpbml0Q2hhdCgpIHtcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcblx0XHRcdHZhciBzb2NrZXRUYXNrID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xuXHRcdFx0XHR1cmw6IFdTLmNoYW5uZWwsXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHR0aGF0LmlzU29ja2V0Q2xvc2UgPSBmYWxzZTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIldlYlNvY2tldCDov57mjqXmiJDlip/vvIFcIilcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoYXQuSm9pbkNoYXQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJXZWJTb2NrZXQg6L+e5o6l5aSx6LSl77yBXCIpXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0c29ja2V0VGFzay5vbk1lc3NhZ2UoZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHRoYXQud3NNZXNzYWdlKHJlcylcblx0XHRcdH0pXG5cdFx0fSxcblx0XHR3c01lc3NhZ2UocmVzKSB7XG5cdFx0XHRsZXQgbXNnID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcblx0XHRcdHN3aXRjaCAobXNnLnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcIm9ubGluZVwiOiAvL+WcqOe6v+S6uuaVsFxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlcnMnLCBKU09OLnN0cmluZ2lmeShtc2cudXNlcnMpKVxuXHRcdFx0XHRcdC8vIHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuXHRcdFx0XHRcdC8vIFx0dGl0bGU6IGDmkbjpsbzmtL4t6IGK5aSp5a6kKCR7bXNnLm9ubGluZUNoYXRDbnR9KWBcblx0XHRcdFx0XHQvLyB9KVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmV2b2tlXCI6IC8v5pKk5ZueXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGxldCBjID0gdGhpcy5jb250ZW50W2ldO1xuXHRcdFx0XHRcdFx0aWYgKGMub0lkICE9IG1zZy5vSWQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0dGhpcy5jb250ZW50LnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIm1zZ1wiOiAvL+a2iOaBr1xuXHRcdFx0XHRcdGlmICghdGhpcy5zY3JvbGxQb3dlciAmJiAhdGhpcy5pc1Nob3dUb0JvdHRvbSkge1xuXHRcdFx0XHRcdFx0dGhpcy5pc1Nob3dUb0JvdHRvbSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cblxuXG5cblx0XHRcdFx0XHR0aGlzLmZpbHRlck1zZyhtc2cpXG5cdFx0XHRcdFx0aWYgKHRoaXMuY29udGVudC5sZW5ndGggPiA1MDApIHtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0UGFnZSgxKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlZFBhY2tldFN0YXR1c1wiOlxuXHRcdFx0XHRcdHRoaXMuY29udGVudC5wdXNoKG1zZyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRmaWx0ZXJNc2cobXNnKSB7XG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XG5cdFx0XHRpZiAodGhpcy5pc0pTT04obXNnLmNvbnRlbnQpKSB7XG5cdFx0XHRcdG1zZy5jb250ZW50ID0gSlNPTi5wYXJzZShtc2cuY29udGVudClcblx0XHRcdFx0bXNnLmlzTW9uZXkgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQucHVzaChtc2cpXG5cdFx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKVxuXG5cdFx0XHR9IGVsc2UgaWYgKC88aW1nIFtePl0qc3JjPVsnXCJdKFteJ1wiXSspW14+XSo+L2dpLnRlc3QobXNnLmNvbnRlbnQpKSB7XG5cblxuXG5cblxuXG5cblxuXG5cdFx0XHRcdHRoaXMuY29udGVudC5wdXNoKG1zZylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY29udGVudC5wdXNoKG1zZylcblx0XHRcdH1cblx0XHRcdGlmICghbXNnLmlzTW9uZXkpIHtcblx0XHRcdFx0dGhpcy5zZWNvbmRNc2cgPSB0aGlzLmZpcnN0TXNnO1xuXHRcdFx0XHR0aGlzLmZpcnN0TXNnID0gbXNnO1xuXHRcdFx0fVxuXG5cdFx0fSxcblx0XHRpc0pTT04oc3RyKSB7XG5cdFx0XHRpZiAodHlwZW9mIHN0ciA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBvYmogPSBKU09OLnBhcnNlKHN0cik7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgb2JqKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0b0JvdHRvbSgpIHtcblx0XHRcdHRoaXMuc2Nyb2xsUG93ZXIgPSB0cnVlO1xuXHRcdFx0dGhpcy5pc1Nob3dUb0JvdHRvbSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuXHRcdH0sXG5cdFx0c2Nyb2xsVG9Cb3R0b20oKSB7XG5cdFx0XHRpZiAodGhpcy5zY3JvbGxQb3dlcikge1xuXHRcdFx0XHRsZXQgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnLmNvbnRlbnRCb3gnKS5ib3VuZGluZ0NsaWVudFJlY3QoKVxuXHRcdFx0XHRxdWVyeS5zZWxlY3RWaWV3cG9ydCgpLnNjcm9sbE9mZnNldCgpXG5cdFx0XHRcdHF1ZXJ5LmV4ZWMocmVzID0+IHtcblx0XHRcdFx0XHRpZiAocmVzWzBdKSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dW5pLnBhZ2VTY3JvbGxUbyh7XG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsVG9wOiByZXNbMF0uaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDBcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0sIDEwMClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mp-html.vue?vue&type=template&id=55c049b6& */ 20);
/* harmony import */ var _mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mp-html.vue?vue&type=script&lang=js& */ 22);
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
/* 20 */
/*!*****************************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue?vue&type=template&id=55c049b6& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mp-html.vue?vue&type=template&id=55c049b6& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_template_id_55c049b6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 21 */
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
/* 22 */
/*!***********************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mp-html.vue?vue&type=script&lang=js& */ 23);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mp_html_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/mp-html.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






































var _node2 = _interopRequireDefault(__webpack_require__(/*! ./node/node */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
 */var plugins = [];var Parser = __webpack_require__(/*! ./parser */ 31);var _default = { name: 'mp-html', data: function data() {return { nodes: [] };}, props: { containerStyle: { type: String, default: '' }, content: String, copyLink: { type: [Boolean, String], default: true }, domain: String, errorImg: { type: String, default: '' }, lazyLoad: { type: [Boolean, String], default: false }, loadingImg: {
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
/* 24 */
/*!************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.vue?vue&type=template&id=7ee5387f&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK%2FlkKbkvb%2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ%3D%3D& */ 25);
/* harmony import */ var _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.vue?vue&type=script&lang=js& */ 27);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);
/* harmony import */ var _node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs */ 29);

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
/* 25 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=template&id=7ee5387f&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK%2FlkKbkvb%2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ%3D%3D& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=template&id=7ee5387f&filter-modules=eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562%2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK%2FlkKbkvb%2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ%3D%3D& */ 26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_7ee5387f_filter_modules_eyJoYW5kbGVyIjp7InR5cGUiOiJzY3JpcHQiLCJjb250ZW50IjoiLy8g6KGM5YaF5qCH562_2B5YiX6KGoXHJcbnZhciBpbmxpbmVUYWdzID0ge1xyXG4gIGFiYnI6IHRydWUsXHJcbiAgYjogdHJ1ZSxcclxuICBiaWc6IHRydWUsXHJcbiAgY29kZTogdHJ1ZSxcclxuICBkZWw6IHRydWUsXHJcbiAgZW06IHRydWUsXHJcbiAgaTogdHJ1ZSxcclxuICBpbnM6IHRydWUsXHJcbiAgbGFiZWw6IHRydWUsXHJcbiAgcTogdHJ1ZSxcclxuICBzbWFsbDogdHJ1ZSxcclxuICBzcGFuOiB0cnVlLFxyXG4gIHN0cm9uZzogdHJ1ZSxcclxuICBzdWI6IHRydWUsXHJcbiAgc3VwOiB0cnVlXHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmmK_2FlkKbkvb_2FnlKggcmljaC10ZXh0IOaYvuekuuWJqeS9meWGheWuuVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXNlOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uYykgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyDlvq7kv6HlkowgUVEg55qEIHJpY2gtdGV4dCBpbmxpbmUg5biD5bGA5peg5pWIXHJcbiAgICByZXR1cm4gIWlubGluZVRhZ3NbaXRlbS5uYW1lXSAmJiAoaXRlbS5hdHRycy5zdHlsZSB8fCAnJykuaW5kZXhPZignZGlzcGxheTppbmxpbmUnKSA9PSAtMVxyXG4gIH1cclxufSIsInN0YXJ0Ijo1MDYwLCJhdHRycyI6eyJtb2R1bGUiOiJoYW5kbGVyIiwibGFuZyI6Ind4cyJ9LCJlbmQiOjU1NzV9fQ_3D_3D___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 26 */
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
/* 27 */
/*!*************************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=script&lang=js& */ 28);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




































































































var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
/* 29 */
/*!*****************************************************************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/node_modules/mp-html/dist/uni-app/components/mp-html/node/node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node.vue?vue&type=custom&index=0&blockType=script&module=handler&lang=wxs */ 30);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_custom_index_0_blockType_script_module_handler_lang_wxs__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
/*!******************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/redpacket.vue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page */ 33);\n/* harmony import */ var _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redpacket.vue?vue&type=script&lang=js&mpType=page */ 35);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"b748ca2a\",\n  null,\n  false,\n  _redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/redpacket.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkk7QUFDN0k7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwyR0FBTTtBQUNSLEVBQUUsb0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3JlZHBhY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjc0OGNhMmEmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlZHBhY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVkcGFja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjc0OGNhMmFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC9yZWRwYWNrZXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!************************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./redpacket.vue?vue&type=template&id=b748ca2a&scoped=true&mpType=page */ 34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_template_id_b748ca2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 34 */
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
/* 35 */
/*!******************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/redpacket.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./redpacket.vue?vue&type=script&lang=js&mpType=page */ 36);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_redpacket_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStpQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZHBhY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVkcGFja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/redpacket.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { apiKey: \"\", index: 0, left: 25, redpacket: { type: \"\", money: 32, count: 2, msg: \"\", recivers: [] }, defaultRedpackWord: { random: '摸鱼者，事竟成！', average: '平分红包，人人有份！', specify: '试试看，这是给你的红包吗？', heartbeat: '玩的就是心跳！' }, users: [], checkedUserAvatar: [] };}, onLoad: function onLoad(option) {this.apiKey = option.apiKey;}, created: function created() {var users = uni.getStorageSync('users');if (users) {users = JSON.parse(users);users.forEach(function (item) {item.checked = false;});this.users = users;}__f__(\"log\", users, \" at pages/chat/redpacket.vue:139\");}, methods: { send: function send(isOne) {var data = this.redpacket;if (data.money < 32) {uni.showToast({ title: '太抠了！至少要发32积分', icon: \"none\", duration: 2000 });return;} else {if (data.money > 20000) {data.money = 2000;}}if (data.count < 1) {uni.showToast({ title: '太抠了！至少要发1个', icon: \"none\", duration: 2000 });return;}if (data.type == \"specify\" && data.recivers.length < 1) {uni.showToast({ title: '专属红包至少要选1人', icon: \"none\", duration: 2000 });return;}if (data.msg == \"\") {data.msg = this.defaultRedpackWord[data.type];}var msg = \"[redpacket]\".concat(JSON.stringify(data), \"[/redpacket]\");if (isOne) {this.sendMsg(msg);} else {for (var i = 0; i < 10; i++) {this.sendMsg(msg);}}uni.navigateBack({ delta: 1, animationType: 'pop-out', animationDuration: 200 });}, sendMsg: function sendMsg(msg) {(0, _api.send)({ content: msg, apiKey: this.apiKey });}, selectUser: function selectUser(e) {var list = e.detail.value;var recivers = [];var checkedUserAvatar = [];list.forEach(function (item) {\n        var items = item.split(\",\");\n        recivers.push(items[0]);\n        var avatar = encodeURI(items[1]);\n        avatar = btoa(avatar);\n        checkedUserAvatar.push(\"https://pwl.yuis.cc/GetImage?url=\".concat(avatar));\n      });\n      this.redpacket.recivers = recivers;\n      this.redpacket.count = recivers.length;\n      this.checkedUserAvatar = checkedUserAvatar;\n      // console.log(e.detail.value)\n    },\n    changeType: function changeType(value, type) {\n      this.index = value;\n      this.redpacket.type = type;\n      if (type == \"specify\") {\n        this.redpacket.count = this.redpacket.count.length;\n      } else {\n        this.redpacket.count = 2;\n      }\n      // this.redpacket.msg = this.defaultRedpackWord[type];\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9yZWRwYWNrZXQudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJhcGlLZXkiLCJpbmRleCIsImxlZnQiLCJyZWRwYWNrZXQiLCJ0eXBlIiwibW9uZXkiLCJjb3VudCIsIm1zZyIsInJlY2l2ZXJzIiwiZGVmYXVsdFJlZHBhY2tXb3JkIiwicmFuZG9tIiwiYXZlcmFnZSIsInNwZWNpZnkiLCJoZWFydGJlYXQiLCJ1c2VycyIsImNoZWNrZWRVc2VyQXZhdGFyIiwib25Mb2FkIiwib3B0aW9uIiwiY3JlYXRlZCIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiSlNPTiIsInBhcnNlIiwiZm9yRWFjaCIsIml0ZW0iLCJjaGVja2VkIiwibWV0aG9kcyIsInNlbmQiLCJpc09uZSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibGVuZ3RoIiwic3RyaW5naWZ5Iiwic2VuZE1zZyIsImkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImFuaW1hdGlvblR5cGUiLCJhbmltYXRpb25EdXJhdGlvbiIsImNvbnRlbnQiLCJzZWxlY3RVc2VyIiwiZSIsImxpc3QiLCJkZXRhaWwiLCJ2YWx1ZSIsIml0ZW1zIiwic3BsaXQiLCJwdXNoIiwiYXZhdGFyIiwiZW5jb2RlVVJJIiwiYnRvYSIsImNoYW5nZVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvR0EsNEQsQ0FwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBQyxDQUFELENBQU4sQ0FBdEI7QUFDQUcsY0FBTSxHQUFHRSxJQUFJLENBQUNGLE1BQUQsQ0FBYjtBQUNBbkMseUJBQWlCLENBQUNrQyxJQUFsQiw0Q0FBMkRDLE1BQTNEO0FBQ0EsT0FORDtBQU9BLFdBQUsvQyxTQUFMLENBQWVLLFFBQWYsR0FBMEJBLFFBQTFCO0FBQ0EsV0FBS0wsU0FBTCxDQUFlRyxLQUFmLEdBQXVCRSxRQUFRLENBQUN5QixNQUFoQztBQUNBLFdBQUtsQixpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0E7QUFDQSxLQXRFTztBQXVFUnNDLGNBdkVRLHNCQXVFR1AsS0F2RUgsRUF1RVUxQyxJQXZFVixFQXVFZ0I7QUFDdkIsV0FBS0gsS0FBTCxHQUFhNkMsS0FBYjtBQUNBLFdBQUszQyxTQUFMLENBQWVDLElBQWYsR0FBc0JBLElBQXRCO0FBQ0EsVUFBSUEsSUFBSSxJQUFJLFNBQVosRUFBdUI7QUFDdEIsYUFBS0QsU0FBTCxDQUFlRyxLQUFmLEdBQXVCLEtBQUtILFNBQUwsQ0FBZUcsS0FBZixDQUFxQjJCLE1BQTVDO0FBQ0EsT0FGRCxNQUVPO0FBQ04sYUFBSzlCLFNBQUwsQ0FBZUcsS0FBZixHQUF1QixDQUF2QjtBQUNBO0FBQ0Q7QUFDQSxLQWhGTyxFQXJDSyxFIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQge1xuXHRzZW5kXG59IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXBpS2V5OiBcIlwiLFxuXHRcdFx0aW5kZXg6IDAsXG5cdFx0XHRsZWZ0OiAyNSxcblx0XHRcdHJlZHBhY2tldDoge1xuXHRcdFx0XHR0eXBlOiBcIlwiLFxuXHRcdFx0XHRtb25leTogMzIsXG5cdFx0XHRcdGNvdW50OiAyLFxuXHRcdFx0XHRtc2c6IFwiXCIsXG5cdFx0XHRcdHJlY2l2ZXJzOiBbXVxuXHRcdFx0fSxcblx0XHRcdGRlZmF1bHRSZWRwYWNrV29yZDoge1xuXHRcdFx0XHRyYW5kb206ICfmkbjpsbzogIXvvIzkuovnq5/miJDvvIEnLFxuXHRcdFx0XHRhdmVyYWdlOiAn5bmz5YiG57qi5YyF77yM5Lq65Lq65pyJ5Lu977yBJyxcblx0XHRcdFx0c3BlY2lmeTogJ+ivleivleeci++8jOi/meaYr+e7meS9oOeahOe6ouWMheWQl++8nycsXG5cdFx0XHRcdGhlYXJ0YmVhdDogJ+eOqeeahOWwseaYr+W/g+i3s++8gSdcblx0XHRcdH0sXG5cdFx0XHR1c2VyczogW10sXG5cdFx0XHRjaGVja2VkVXNlckF2YXRhcjogW11cblx0XHR9XG5cdH0sXG5cdG9uTG9hZChvcHRpb24pIHtcblx0XHR0aGlzLmFwaUtleSA9IG9wdGlvbi5hcGlLZXk7XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0bGV0IHVzZXJzID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VycycpXG5cdFx0aWYgKHVzZXJzKSB7XG5cdFx0XHR1c2VycyA9IEpTT04ucGFyc2UodXNlcnMpXG5cdFx0XHR1c2Vycy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRpdGVtLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdH0pXG5cdFx0XHR0aGlzLnVzZXJzID0gdXNlcnM7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHVzZXJzKVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0c2VuZChpc09uZSkge1xuXHRcdFx0bGV0IGRhdGEgPSB0aGlzLnJlZHBhY2tldDtcblx0XHRcdGlmIChkYXRhLm1vbmV5IDwgMzIpIHtcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICflpKrmiqDkuobvvIHoh7PlsJHopoHlj5EzMuenr+WIhicsXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChkYXRhLm1vbmV5ID4gMjAwMDApIHtcblx0XHRcdFx0XHRkYXRhLm1vbmV5ID0gMjAwMFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YS5jb3VudCA8IDEpIHtcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICflpKrmiqDkuobvvIHoh7PlsJHopoHlj5Ex5LiqJyxcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGEudHlwZSA9PSBcInNwZWNpZnlcIiAmJiBkYXRhLnJlY2l2ZXJzLmxlbmd0aCA8IDEpIHtcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfkuJPlsZ7nuqLljIXoh7PlsJHopoHpgIkx5Lq6Jyxcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGEubXNnID09IFwiXCIpIHtcblx0XHRcdFx0ZGF0YS5tc2cgPSB0aGlzLmRlZmF1bHRSZWRwYWNrV29yZFtkYXRhLnR5cGVdO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG1zZyA9IGBbcmVkcGFja2V0XSR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9Wy9yZWRwYWNrZXRdYFxuXHRcdFx0aWYgKGlzT25lKSB7XG5cdFx0XHRcdHRoaXMuc2VuZE1zZyhtc2cpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdFx0XHR0aGlzLnNlbmRNc2cobXNnKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0ZGVsdGE6IDEsXG5cdFx0XHRcdGFuaW1hdGlvblR5cGU6ICdwb3Atb3V0Jyxcblx0XHRcdFx0YW5pbWF0aW9uRHVyYXRpb246IDIwMFxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdHNlbmRNc2cobXNnKSB7XG5cdFx0XHRzZW5kKHtcblx0XHRcdFx0Y29udGVudDogbXNnLFxuXHRcdFx0XHRhcGlLZXk6IHRoaXMuYXBpS2V5XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0c2VsZWN0VXNlcihlKSB7XG5cdFx0XHRsZXQgbGlzdCA9IGUuZGV0YWlsLnZhbHVlO1xuXHRcdFx0bGV0IHJlY2l2ZXJzID0gW107XG5cdFx0XHRsZXQgY2hlY2tlZFVzZXJBdmF0YXIgPSBbXTtcblxuXHRcdFx0bGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgaXRlbXMgPSBpdGVtLnNwbGl0KFwiLFwiKVxuXHRcdFx0XHRyZWNpdmVycy5wdXNoKGl0ZW1zWzBdKVxuXHRcdFx0XHRsZXQgYXZhdGFyID0gZW5jb2RlVVJJKGl0ZW1zWzFdKVxuXHRcdFx0XHRhdmF0YXIgPSBidG9hKGF2YXRhcik7XG5cdFx0XHRcdGNoZWNrZWRVc2VyQXZhdGFyLnB1c2goYGh0dHBzOi8vcHdsLnl1aXMuY2MvR2V0SW1hZ2U/dXJsPSR7YXZhdGFyfWApXG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5yZWRwYWNrZXQucmVjaXZlcnMgPSByZWNpdmVycztcblx0XHRcdHRoaXMucmVkcGFja2V0LmNvdW50ID0gcmVjaXZlcnMubGVuZ3RoO1xuXHRcdFx0dGhpcy5jaGVja2VkVXNlckF2YXRhciA9IGNoZWNrZWRVc2VyQXZhdGFyO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG5cdFx0fSxcblx0XHRjaGFuZ2VUeXBlKHZhbHVlLCB0eXBlKSB7XG5cdFx0XHR0aGlzLmluZGV4ID0gdmFsdWU7XG5cdFx0XHR0aGlzLnJlZHBhY2tldC50eXBlID0gdHlwZTtcblx0XHRcdGlmICh0eXBlID09IFwic3BlY2lmeVwiKSB7XG5cdFx0XHRcdHRoaXMucmVkcGFja2V0LmNvdW50ID0gdGhpcy5yZWRwYWNrZXQuY291bnQubGVuZ3RoO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZWRwYWNrZXQuY291bnQgPSAyO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcy5yZWRwYWNrZXQubXNnID0gdGhpcy5kZWZhdWx0UmVkcGFja1dvcmRbdHlwZV07XG5cdFx0fVxuXHR9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*****************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/userInfo.vue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page */ 38);\n/* harmony import */ var _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo.vue?vue&type=script&lang=js&mpType=page */ 40);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d81391d2\",\n  null,\n  false,\n  _userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/userInfo.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VzZXJJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kODEzOTFkMiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXNlckluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXJJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDgxMzkxZDJcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC91c2VySW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!***********************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./userInfo.vue?vue&type=template&id=d81391d2&scoped=true&mpType=page */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_template_id_d81391d2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 39 */
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
/* 40 */
/*!*****************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/userInfo.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./userInfo.vue?vue&type=script&lang=js&mpType=page */ 41);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThpQixDQUFnQixpbEJBQUcsRUFBQyIsImZpbGUiOiI0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXJJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/userInfo.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { user: \"\", userInfo: {} };}, onLoad: function onLoad(option) {__f__(\"log\", option, \" at pages/chat/userInfo.vue:56\");this.user = option.user || \"Yui\";uni.setNavigationBarTitle({ title: this.user + \"的个人信息\" });this.getInfo();}, methods: { getInfo: function getInfo() {var _this = this;(0, _api.getUserInfo)(this.user).then(function (res) {if (res.cardBg == \"\") {res.cardBg = \"https://pwl.stackoverflow.wiki/2021/11/32ceecb7798ea1fa-82bd6ec7.jpg\";}if (res.sysMetal) {res.sysMetal = JSON.parse(res.sysMetal);} // url=https://pwl.stackoverflow.wiki/2021/12/metaldev-db507262.png&backcolor=483d8b&fontcolor=f8f8ff\n        // https://unv-shield.librian.net/api/unv_shield?scale=0.79&txt=开发&\n        _this.userInfo = res;__f__(\"log\", _this.userInfo, \" at pages/chat/userInfo.vue:83\");});} } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC91c2VySW5mby52dWUiXSwibmFtZXMiOlsiZGF0YSIsInVzZXIiLCJ1c2VySW5mbyIsIm9uTG9hZCIsIm9wdGlvbiIsInVuaSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwiZ2V0SW5mbyIsIm1ldGhvZHMiLCJ0aGVuIiwicmVzIiwiY2FyZEJnIiwic3lzTWV0YWwiLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBLDRELENBNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBS2UsRUFDZEEsSUFEYyxrQkFDUCxDQUNOLE9BQU8sRUFDTkMsSUFBSSxFQUFDLEVBREMsRUFFTkMsUUFBUSxFQUFDLEVBRkgsRUFBUCxDQUlBLENBTmEsRUFPZEMsTUFQYyxrQkFPUEMsTUFQTyxFQU9BLENBQ2IsYUFBWUEsTUFBWixvQ0FDQSxLQUFLSCxJQUFMLEdBQVlHLE1BQU0sQ0FBQ0gsSUFBUCxJQUFlLEtBQTNCLENBQ0FJLEdBQUcsQ0FBQ0MscUJBQUosQ0FBMEIsRUFDekJDLEtBQUssRUFBRSxLQUFLTixJQUFMLEdBQVksT0FETSxFQUExQixFQUdBLEtBQUtPLE9BQUwsR0FDQSxDQWRhLEVBZWRDLE9BQU8sRUFBQyxFQUNQRCxPQURPLHFCQUNFLGtCQUNSLHNCQUFZLEtBQUtQLElBQWpCLEVBQXVCUyxJQUF2QixDQUE0QixVQUFBQyxHQUFHLEVBQUUsQ0FDaEMsSUFBR0EsR0FBRyxDQUFDQyxNQUFKLElBQWMsRUFBakIsRUFBb0IsQ0FDbkJELEdBQUcsQ0FBQ0MsTUFBSixHQUFhLHNFQUFiLENBQ0EsQ0FTRCxJQUFHRCxHQUFHLENBQUNFLFFBQVAsRUFBZ0IsQ0FDZkYsR0FBRyxDQUFDRSxRQUFKLEdBQWVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixHQUFHLENBQUNFLFFBQWYsQ0FBZixDQUNBLENBZCtCLENBZWhDO0FBQ0E7QUFDQSxhQUFJLENBQUNYLFFBQUwsR0FBZ0JTLEdBQWhCLENBQ0EsYUFBWSxLQUFJLENBQUNULFFBQWpCLG9DQUNBLENBbkJELEVBb0JBLENBdEJNLEVBZk0sRSIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB7XG5cdGdldFVzZXJJbmZvXG59IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dXNlcjpcIlwiLFxuXHRcdFx0dXNlckluZm86e31cblx0XHR9XG5cdH0sXG5cdG9uTG9hZChvcHRpb24pe1xuXHRcdGNvbnNvbGUubG9nKG9wdGlvbilcblx0XHR0aGlzLnVzZXIgPSBvcHRpb24udXNlciB8fCBcIll1aVwiO1xuXHRcdHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuXHRcdFx0dGl0bGU6IHRoaXMudXNlciArIFwi55qE5Liq5Lq65L+h5oGvXCJcblx0XHR9KVxuXHRcdHRoaXMuZ2V0SW5mbygpXG5cdH0sXG5cdG1ldGhvZHM6e1xuXHRcdGdldEluZm8oKXtcblx0XHRcdGdldFVzZXJJbmZvKHRoaXMudXNlcikudGhlbihyZXM9Pntcblx0XHRcdFx0aWYocmVzLmNhcmRCZyA9PSBcIlwiKXtcblx0XHRcdFx0XHRyZXMuY2FyZEJnID0gXCJodHRwczovL3B3bC5zdGFja292ZXJmbG93Lndpa2kvMjAyMS8xMS8zMmNlZWNiNzc5OGVhMWZhLTgyYmQ2ZWM3LmpwZ1wiXG5cdFx0XHRcdH1cblxuXG5cblxuXG5cblxuXG5cdFx0XHRcdGlmKHJlcy5zeXNNZXRhbCl7XG5cdFx0XHRcdFx0cmVzLnN5c01ldGFsID0gSlNPTi5wYXJzZShyZXMuc3lzTWV0YWwpXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gdXJsPWh0dHBzOi8vcHdsLnN0YWNrb3ZlcmZsb3cud2lraS8yMDIxLzEyL21ldGFsZGV2LWRiNTA3MjYyLnBuZyZiYWNrY29sb3I9NDgzZDhiJmZvbnRjb2xvcj1mOGY4ZmZcblx0XHRcdFx0Ly8gaHR0cHM6Ly91bnYtc2hpZWxkLmxpYnJpYW4ubmV0L2FwaS91bnZfc2hpZWxkP3NjYWxlPTAuNzkmdHh0PeW8gOWPkSZcblx0XHRcdFx0dGhpcy51c2VySW5mbyA9IHJlcztcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy51c2VySW5mbylcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!****************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/setting.vue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=52952d3c&scoped=true&mpType=page */ 43);\n/* harmony import */ var _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js&mpType=page */ 45);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"52952d3c\",\n  null,\n  false,\n  _setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chat/setting.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NldHRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyOTUyZDNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTI5NTJkM2NcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2hhdC9zZXR0aW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!**********************************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/setting.vue?vue&type=template&id=52952d3c&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=52952d3c&scoped=true&mpType=page */ 44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_52952d3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 44 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/setting.vue?vue&type=template&id=52952d3c&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* 45 */
/*!****************************************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/setting.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js&mpType=page */ 46);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZpQixDQUFnQixnbEJBQUcsRUFBQyIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/pages/chat/setting.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! ../../utils/api.js */ 8); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { setting: { JoinChatTime: 30, ImageLoadHome: \"https://pwl.yuis.cc/GetImage?url=\" }, apiKey: null, canGetLiveness: false };}, onBackPress: function onBackPress(e) {uni.setStorageSync(\"setting\", JSON.stringify(this.setting));}, onLoad: function onLoad(option) {var _this = this;this.apiKey = option.apiKey;if (!this.apiKey) return;(0, _api.checkCollectedLiveness)({ apiKey: this.apiKey }).then(function (res) {if (!res.isCollectedYesterdayLivenessReward) {_this.canGetLiveness = true;}\n    });\n  },\n  methods: {\n    getLiveness: function getLiveness() {\n      (0, _api.getYesterdayLiveness)({\n        apiKey: this.apiKey }).\n      then(function (res) {\n        uni.showToast({\n          title: \"\\u9886\\u53D6\\u6210\\u529F\\uFF0C\\u79EF\\u5206:\" + res.sum });\n\n      });\n    },\n    logout: function logout() {\n      uni.clearStorageSync();\n      getApp().globalData.data = null;\n      getApp().globalData.apiKey = \"\";\n      uni.reLaunch({\n        url: '/pages/index/index' });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9zZXR0aW5nLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwic2V0dGluZyIsIkpvaW5DaGF0VGltZSIsIkltYWdlTG9hZEhvbWUiLCJhcGlLZXkiLCJjYW5HZXRMaXZlbmVzcyIsIm9uQmFja1ByZXNzIiwiZSIsInVuaSIsInNldFN0b3JhZ2VTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uTG9hZCIsIm9wdGlvbiIsInRoZW4iLCJyZXMiLCJpc0NvbGxlY3RlZFllc3RlcmRheUxpdmVuZXNzUmV3YXJkIiwibWV0aG9kcyIsImdldExpdmVuZXNzIiwic2hvd1RvYXN0IiwidGl0bGUiLCJzdW0iLCJsb2dvdXQiLCJjbGVhclN0b3JhZ2VTeW5jIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsInJlTGF1bmNoIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsNEQsQ0EzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQU1lLEVBQ2RBLElBRGMsa0JBQ1AsQ0FDTixPQUFPLEVBQ05DLE9BQU8sRUFBRSxFQUNSQyxZQUFZLEVBQUUsRUFETixFQUVSQyxhQUFhLEVBQUUsbUNBRlAsRUFESCxFQUtOQyxNQUFNLEVBQUUsSUFMRixFQU1OQyxjQUFjLEVBQUUsS0FOVixFQUFQLENBUUEsQ0FWYSxFQVdkQyxXQVhjLHVCQVdGQyxDQVhFLEVBV0MsQ0FDZEMsR0FBRyxDQUFDQyxjQUFKLENBQW1CLFNBQW5CLEVBQThCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLVixPQUFwQixDQUE5QixFQUNBLENBYmEsRUFjZFcsTUFkYyxrQkFjUEMsTUFkTyxFQWNDLGtCQUNkLEtBQUtULE1BQUwsR0FBY1MsTUFBTSxDQUFDVCxNQUFyQixDQUNBLElBQUksQ0FBQyxLQUFLQSxNQUFWLEVBQWtCLE9BQ2xCLGlDQUF1QixFQUN0QkEsTUFBTSxFQUFFLEtBQUtBLE1BRFMsRUFBdkIsRUFFR1UsSUFGSCxDQUVRLFVBQUFDLEdBQUcsRUFBSSxDQUNkLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxrQ0FBVCxFQUE2QyxDQUM1QyxLQUFJLENBQUNYLGNBQUwsR0FBc0IsSUFBdEIsQ0FDQTtBQUNELEtBTkQ7QUFPQSxHQXhCYTtBQXlCZFksU0FBTyxFQUFFO0FBQ1JDLGVBRFEseUJBQ0s7QUFDWixxQ0FBcUI7QUFDcEJkLGNBQU0sRUFBRSxLQUFLQSxNQURPLEVBQXJCO0FBRUdVLFVBRkgsQ0FFUSxVQUFBQyxHQUFHLEVBQUk7QUFDZFAsV0FBRyxDQUFDVyxTQUFKLENBQWM7QUFDYkMsZUFBSyxFQUFFLGdEQUFhTCxHQUFHLENBQUNNLEdBRFgsRUFBZDs7QUFHQSxPQU5EO0FBT0EsS0FUTztBQVVSQyxVQVZRLG9CQVVDO0FBQ1JkLFNBQUcsQ0FBQ2UsZ0JBQUo7QUFDQUMsWUFBTSxHQUFHQyxVQUFULENBQW9CekIsSUFBcEIsR0FBMkIsSUFBM0I7QUFDQXdCLFlBQU0sR0FBR0MsVUFBVCxDQUFvQnJCLE1BQXBCLEdBQTZCLEVBQTdCO0FBQ0FJLFNBQUcsQ0FBQ2tCLFFBQUosQ0FBYTtBQUNaQyxXQUFHLEVBQUUsb0JBRE8sRUFBYjs7QUFHQSxLQWpCTyxFQXpCSyxFIiwiZmlsZSI6IjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB7XG5cdGdldFllc3RlcmRheUxpdmVuZXNzLFxuXHRjaGVja0NvbGxlY3RlZExpdmVuZXNzXG59IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0dGluZzoge1xuXHRcdFx0XHRKb2luQ2hhdFRpbWU6IDMwLFxuXHRcdFx0XHRJbWFnZUxvYWRIb21lOiBcImh0dHBzOi8vcHdsLnl1aXMuY2MvR2V0SW1hZ2U/dXJsPVwiXG5cdFx0XHR9LFxuXHRcdFx0YXBpS2V5OiBudWxsLFxuXHRcdFx0Y2FuR2V0TGl2ZW5lc3M6IGZhbHNlLFxuXHRcdH1cblx0fSxcblx0b25CYWNrUHJlc3MoZSkge1xuXHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInNldHRpbmdcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5zZXR0aW5nKSlcblx0fSxcblx0b25Mb2FkKG9wdGlvbikge1xuXHRcdHRoaXMuYXBpS2V5ID0gb3B0aW9uLmFwaUtleTtcblx0XHRpZiAoIXRoaXMuYXBpS2V5KSByZXR1cm47XG5cdFx0Y2hlY2tDb2xsZWN0ZWRMaXZlbmVzcyh7XG5cdFx0XHRhcGlLZXk6IHRoaXMuYXBpS2V5XG5cdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0aWYgKCFyZXMuaXNDb2xsZWN0ZWRZZXN0ZXJkYXlMaXZlbmVzc1Jld2FyZCkge1xuXHRcdFx0XHR0aGlzLmNhbkdldExpdmVuZXNzID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0TGl2ZW5lc3MoKXtcblx0XHRcdGdldFllc3RlcmRheUxpdmVuZXNzKHtcblx0XHRcdFx0YXBpS2V5OiB0aGlzLmFwaUtleVxuXHRcdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogYOmihuWPluaIkOWKn++8jOenr+WIhjpgICsgcmVzLnN1bVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGxvZ291dCgpIHtcblx0XHRcdHVuaS5jbGVhclN0b3JhZ2VTeW5jKCk7XG5cdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLmRhdGEgPSBudWxsO1xuXHRcdFx0Z2V0QXBwKCkuZ2xvYmFsRGF0YS5hcGlLZXkgPSBcIlwiO1xuXHRcdFx0dW5pLnJlTGF1bmNoKHtcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 48);function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;
var DIFF_TIME = 60 * 1000 * 60 * 24;

var statConfig = __webpack_require__(/*! uni-stat-config */ 49).default || __webpack_require__(/*! uni-stat-config */ 49);
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

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 50).default;
var statConfig$1 = __webpack_require__(/*! uni-stat-config */ 49).default || __webpack_require__(/*! uni-stat-config */ 49);

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
/* 48 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@dcloudio/uni-stat@next\",\"_id\":\"@dcloudio/uni-stat@2.0.1-33320211224001\",\"_inBundle\":false,\"_integrity\":\"sha512-Vhx6GDXG5wqvPoE+mOKFgI9Cg8tylfWwF5Z/SwTbgKeW+pVCnrc6JMsFRIn9+o2Fg9AAXzCFVm17WK8q6oHcKQ==\",\"_location\":\"/@dcloudio/uni-stat\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@dcloudio/uni-stat@next\",\"name\":\"@dcloudio/uni-stat\",\"escapedName\":\"@dcloudio%2funi-stat\",\"scope\":\"@dcloudio\",\"rawSpec\":\"next\",\"saveSpec\":null,\"fetchSpec\":\"next\"},\"_requiredBy\":[\"#USER\",\"/\",\"/@dcloudio/vue-cli-plugin-uni\"],\"_resolved\":\"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.1-33320211224001.tgz\",\"_shasum\":\"f113225ccd28b4452b19ca6865ee39787936e9d1\",\"_spec\":\"@dcloudio/uni-stat@next\",\"_where\":\"/Users/guoshengqiang/Documents/hbx-plugins/uniapp-cli\",\"author\":\"\",\"bugs\":{\"url\":\"https://github.com/dcloudio/uni-app/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"\",\"devDependencies\":{\"@babel/core\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"eslint\":\"^6.1.0\",\"rollup\":\"^1.19.3\",\"rollup-plugin-babel\":\"^4.3.3\",\"rollup-plugin-clear\":\"^2.0.7\",\"rollup-plugin-commonjs\":\"^10.0.2\",\"rollup-plugin-copy\":\"^3.1.0\",\"rollup-plugin-eslint\":\"^7.0.0\",\"rollup-plugin-json\":\"^4.0.0\",\"rollup-plugin-node-resolve\":\"^5.2.0\",\"rollup-plugin-replace\":\"^2.2.0\",\"rollup-plugin-uglify\":\"^6.0.2\"},\"files\":[\"dist\",\"package.json\",\"LICENSE\"],\"gitHead\":\"30f3c9d6642904e10fa2ea878ad02a348ecb137d\",\"homepage\":\"https://github.com/dcloudio/uni-app#readme\",\"license\":\"Apache-2.0\",\"main\":\"dist/index.js\",\"name\":\"@dcloudio/uni-stat\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/dcloudio/uni-app.git\",\"directory\":\"packages/uni-stat\"},\"scripts\":{\"build\":\"NODE_ENV=production rollup -c rollup.config.js\",\"dev\":\"NODE_ENV=development rollup -w -c rollup.config.js\"},\"version\":\"2.0.1-33320211224001\"}");

/***/ }),
/* 49 */
/*!********************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages.json?{"type":"stat"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__C1F4B2F" };exports.default = _default;

/***/ }),
/* 50 */
/*!*********************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/pages.json?{"type":"style"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": {}, "globalStyle": {} };exports.default = _default;

/***/ }),
/* 51 */
/*!*************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/App.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 52);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!**************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/pwl_for_android/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 53);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThoQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiI1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Documents/HBuilderProjects/pwl_for_android/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  globalData: {\n    apiKey: \"\" },\n\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:7\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:10\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:13\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwiYXBpS2V5Iiwib25MYXVuY2giLCJvblNob3ciLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7QUFDZTtBQUNkQSxZQUFVLEVBQUU7QUFDWEMsVUFBTSxFQUFFLEVBREcsRUFERTs7QUFJZEMsVUFBUSxFQUFFLG9CQUFXO0FBQ3BCLGlCQUFZLFlBQVo7QUFDQSxHQU5hO0FBT2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FUYTtBQVVkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBWmEsRSIsImZpbGUiOiI1My5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0YXBpS2V5OiBcIlwiXG5cdH0sXG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);