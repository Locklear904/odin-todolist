/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: sans-serif;\n    font-size: 100%;\n    width: 100vw;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 4fr;\n}\n\nheader {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    text-align: center;\n    border-bottom: 2px solid black;\n}\n\nh1 {\n    font-size: 3rem;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\nmain {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.projectDiv, .todoDiv {\n    width: 75%;\n}\n\n.projectHeader, .todoHeader, .todoInfoDiv {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#todoForm {\n    padding-bottom: 10px;\n}\n\n.todoDiv {\n    border-top: 1px solid black;\n}\n\n#sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border-right: 2px solid black;\n    padding: 10px;\n    min-height: 90vh;\n}\n\n#projectsHeader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n #projectsHeader h2 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n }\n\n#projectForm, #todoForm {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#createProjectButtonDiv {\n    display: flex;\n    justify-content: space-between;\n}\n\n#projectsList {\n    display: flex;\n    flex-direction: column;\n}\n\n.sideProjectDiv {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid black;\n}\n\n.sideProjectTitle {\n    align-self: center;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/appLogic.js":
/*!*********************************!*\
  !*** ./src/scripts/appLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject),\n/* harmony export */   createNewTodo: () => (/* binding */ createNewTodo),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   selectProject: () => (/* binding */ selectProject),\n/* harmony export */   setupDefaults: () => (/* binding */ setupDefaults)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/scripts/display.js\");\n\n\nclass Project {\n    constructor(title = \"Default\", description = \"\") {\n        this.title = title;\n        this.description = description;\n        this.todos = [];\n    }\n}\n\nclass Todo extends Project {\n    constructor(title, description = \"\", dueDate, priority = \"Low\") {\n        super(title, description);\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n}\n\nconst projects = [];\n\nfunction createNewProject() {\n    const projectTitle = document.querySelector('#createProjectTitle').value;\n    const projectDesc = document.querySelector('#createProjectDescription').value;\n    const newProject = new Project(projectTitle, projectDesc);\n    projects.push(newProject);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearNewProjectForm)();\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearSidebar)();\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displaySidebarContent)(projects);\n}\n\nfunction createNewTodo() {\n    const projectDiv = document.querySelector('.projectDiv');\n    const projectIndex = projectDiv.getAttribute('data-index');\n    const currentProject = projects[projectIndex];\n    const todoTitle = document.querySelector('#createTodoTitle').value;\n    const todoDesc = document.querySelector('#createTodoDesc').value;\n    const todoPriority = document.querySelector('#createTodoPrio').value;\n    const todoDate = document.querySelector('#createTodoDate').value;\n    const newTodo = new Todo(todoTitle, todoDesc, todoDate,todoPriority);\n    currentProject.todos.push(newTodo);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearNewTodoForm)();\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearTodos)();\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(currentProject);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearSidebar)();\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displaySidebarContent)(projects);\n}\n\nfunction deleteTodo() {\n    const projectDiv = document.querySelector('.projectDiv');\n    const projectIndex = projectDiv.getAttribute('data-index');\n    const currentProject = projects[projectIndex];\n    const todoDiv = document.querySelector('.todoDiv');\n    const todoIndex = todoDiv.getAttribute('data-index');\n    const currentTodo = currentProject.todos[todoIndex];\n    currentProject.todos.splice(todoIndex, 1);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearTodos)();\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(currentProject);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearSidebar)();\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displaySidebarContent)(projects);\n}\n\nfunction selectProject() {\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.clearMain)();\n    let projectIndex = this.parentElement.getAttribute('data-index');\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayProject)(projects[projectIndex], projects);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(projects[projectIndex]);\n}\n\nfunction setupDefaults() {\n    const defaultProject = new Project(\"Default\", \"This is the default project\");\n    const defaultTodo = new Todo(\"Test Todo\", \"Test Description\", \"2023-11-30\", \"Low\");\n    projects.push(defaultProject);\n    defaultProject.todos.push(defaultTodo);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displaySidebarContent)(projects);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayProject)(projects[0], projects);\n    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(projects[0]);\n}\n\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/scripts/appLogic.js?");

/***/ }),

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearMain: () => (/* binding */ clearMain),\n/* harmony export */   clearNewProjectForm: () => (/* binding */ clearNewProjectForm),\n/* harmony export */   clearNewTodoForm: () => (/* binding */ clearNewTodoForm),\n/* harmony export */   clearSidebar: () => (/* binding */ clearSidebar),\n/* harmony export */   clearTodos: () => (/* binding */ clearTodos),\n/* harmony export */   createNewProjectForm: () => (/* binding */ createNewProjectForm),\n/* harmony export */   createNewTodoForm: () => (/* binding */ createNewTodoForm),\n/* harmony export */   displayProject: () => (/* binding */ displayProject),\n/* harmony export */   displaySidebarContent: () => (/* binding */ displaySidebarContent),\n/* harmony export */   displayTodos: () => (/* binding */ displayTodos)\n/* harmony export */ });\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/scripts/appLogic.js\");\nconst projectsList = document.querySelector('#projectsList');\nconst main = document.querySelector('main');\n\n\nfunction displaySidebarTodos(project, projectTodos) {\n    project.todos.forEach((todo) => {\n        let sideTodoDiv = document.createElement('div');\n        sideTodoDiv.setAttribute('class', 'sideTodoDiv');\n        projectTodos.appendChild(sideTodoDiv);\n        let sideTodoTitle = document.createElement('li');\n        sideTodoTitle.textContent = todo.title;\n        sideTodoTitle.setAttribute('class', 'sideTodoTitle');\n        sideTodoDiv.appendChild(sideTodoTitle);\n    });\n}\n\nfunction displaySidebarContent(projects) {\n    projects.forEach((project) => {\n        //Populates projects\n        let projectDiv = document.createElement('div');\n        projectDiv.setAttribute('class', 'sideProjectDiv');\n        projectDiv.setAttribute('data-index', projects.indexOf(project));\n        projectsList.appendChild(projectDiv);\n        let projectTitle = document.createElement('button');\n        projectTitle.textContent = project.title;\n        projectTitle.addEventListener('click', _appLogic__WEBPACK_IMPORTED_MODULE_0__.selectProject);\n        projectTitle.setAttribute('class', 'sideProjectTitle');\n        projectDiv.appendChild(projectTitle);\n        let projectTodos = document.createElement('ul');\n        projectTodos.setAttribute('class', 'sideTodoList');\n        projectDiv.appendChild(projectTodos);\n        //Populates todos\n        displaySidebarTodos(project, projectTodos);\n    });\n}\n\nfunction displayTodos(project) {\n    project.todos.forEach(todo => {\n        let todoDiv = document.createElement('div');\n        todoDiv.setAttribute('class', 'todoDiv');\n        todoDiv.setAttribute('data-index', project.todos.indexOf(todo));\n        main.appendChild(todoDiv);\n        let todoHeader = document.createElement('div');\n        todoHeader.setAttribute('class', 'todoHeader');\n        todoDiv.appendChild(todoHeader);\n        let todoTitle = document.createElement('h3');\n        todoTitle.setAttribute('class', 'mainTodoTitle');\n        todoTitle.textContent = todo.title;\n        todoHeader.appendChild(todoTitle);\n        let todoBtnDiv = document.createElement('div');\n        todoBtnDiv.setAttribute('class', 'todoBtnDiv');\n        todoHeader.appendChild(todoBtnDiv);\n        let todoEditBtn = document.createElement('button');\n        todoEditBtn.setAttribute('class', 'todoEditBtn');\n        todoEditBtn.textContent = \"Edit\";\n        todoBtnDiv.appendChild(todoEditBtn);\n        let todoDeleteBtn = document.createElement('button');\n        todoDeleteBtn.setAttribute('class', 'todoDeleteBtn');\n        todoDeleteBtn.setAttribute('title', 'Delete Todo')\n        todoDeleteBtn.addEventListener('click', _appLogic__WEBPACK_IMPORTED_MODULE_0__.deleteTodo);\n        todoDeleteBtn.textContent = \"x\";\n        todoBtnDiv.appendChild(todoDeleteBtn);\n        let todoInfoDiv = document.createElement('div');\n        todoInfoDiv.setAttribute('class', 'todoInfoDiv');\n        todoDiv.appendChild(todoInfoDiv);\n        let todoDueDate = document.createElement('time');\n        todoDueDate.setAttribute('class', 'todoDueDate');\n        todoDueDate.setAttribute('datetime', todo.dueDate);\n        todoDueDate.textContent = `Due Date: ${todo.dueDate}`;\n        todoInfoDiv.appendChild(todoDueDate);\n        let todoPriority = document.createElement('p');\n        todoPriority.setAttribute('class', 'todoPriority');\n        todoPriority.textContent = `Priority: ${todo.priority}`;\n        todoInfoDiv.appendChild(todoPriority);\n        let todoDescription = document.createElement('p');\n        todoDescription.setAttribute('class', 'todoDescription');\n        todoDescription.textContent = todo.description;\n        todoDiv.appendChild(todoDescription);\n    });\n}\n\nfunction displayProject(project, projects) {\n    const projectDiv = document.querySelector('.projectDiv');\n    projectDiv.setAttribute('data-index', projects.indexOf(project));\n    const projectTitle = document.querySelector('.projectTitle');\n    projectTitle.textContent = project.title;\n    const projectDescription = document.querySelector('.projectDescription');\n    projectDescription.textContent = project.description;\n}\n\nfunction clearMain() {\n    const projectDiv = document.querySelector('.projectDiv');\n    while (projectDiv.nextElementSibling) {\n        projectDiv.nextElementSibling.remove();\n    }\n}\n\nfunction clearSidebar() {\n    const projectsList = document.querySelector('#projectsList');\n    while (projectsList.firstChild) {\n        projectsList.removeChild(projectsList.firstChild);\n    }\n}\n\nfunction clearNewProjectForm() {\n    const projectForm = document.querySelector('#projectForm');\n    while (projectForm.firstChild) {\n        projectForm.removeChild(projectForm.firstChild);\n    }\n}\n\nfunction clearNewTodoForm() {\n    const todoForm = document.querySelector('#todoForm');\n    while (todoForm.firstChild) {\n        todoForm.removeChild(todoForm.firstChild);\n    }\n}\n\nfunction clearTodos() {\n    const main = document.querySelector('main');\n    while (main.children[1]) {\n        main.removeChild(main.children[1]);\n    }\n}\n\nfunction createNewProjectForm() {\n    const projectForm = document.querySelector('#projectForm');\n    if (projectForm.firstChild) {\n        return;\n    }\n    const projectFormHeader = document.createElement('h3');\n    projectFormHeader.textContent = \"Create a Project\"\n    projectFormHeader.setAttribute('id', 'projectFormHeader');\n    projectForm.appendChild(projectFormHeader);\n    const createProjectTitleLabel = document.createElement('label');\n    createProjectTitleLabel.textContent = \"Project Title: \";\n    createProjectTitleLabel.setAttribute('for', 'createProjectTitle');\n    projectForm.appendChild(createProjectTitleLabel);\n    const createProjectTitle = document.createElement('input');\n    createProjectTitle.setAttribute('type', 'text');\n    createProjectTitle.setAttribute('id', 'createProjectTitle');\n    createProjectTitle.setAttribute('required', '');\n    projectForm.appendChild(createProjectTitle);\n    const createProjectDescLabel = document.createElement('label');\n    createProjectDescLabel.textContent = \"Project Description: \";\n    createProjectDescLabel.setAttribute('for', 'createProjectDescription');\n    projectForm.appendChild(createProjectDescLabel);\n    const createProjectDescription = document.createElement('textarea');\n    createProjectDescription.setAttribute('id', 'createProjectDescription');\n    projectForm.appendChild(createProjectDescription);\n    const createProjectButtonDiv = document.createElement('div');\n    createProjectButtonDiv.setAttribute('id', 'createProjectButtonDiv');\n    projectForm.appendChild(createProjectButtonDiv);\n    const createProjectSubmitButton = document.createElement('button');\n    createProjectSubmitButton.textContent = \"Submit\";\n    createProjectSubmitButton.setAttribute('type', 'button');\n    createProjectSubmitButton.addEventListener('click', _appLogic__WEBPACK_IMPORTED_MODULE_0__.createNewProject);\n    createProjectButtonDiv.appendChild(createProjectSubmitButton);\n    const createProjectCancelButton = document.createElement('button');\n    createProjectCancelButton.textContent = \"Cancel\";\n    createProjectCancelButton.addEventListener('click', clearNewProjectForm);\n    createProjectButtonDiv.appendChild(createProjectCancelButton);\n}\n\nfunction createNewTodoForm() {\n    const projectDiv = document.querySelector('.projectDiv');\n    const todoForm = document.createElement('form');\n    todoForm.setAttribute('id', 'todoForm');\n    projectDiv.after(todoForm);\n    if (todoForm.firstChild) {\n        return;\n    }\n    const todoFormHeader = document.createElement('h3');\n    todoFormHeader.textContent = \"Create a New Todo\";\n    todoForm.appendChild(todoFormHeader);\n    const createTodoTitleLabel = document.createElement('label');\n    createTodoTitleLabel.textContent = \"Todo Title: \";\n    createTodoTitleLabel.setAttribute('for', 'createTodoTitle');\n    todoForm.appendChild(createTodoTitleLabel);\n    const createTodoTitle = document.createElement('input');\n    createTodoTitle.setAttribute('type', 'text');\n    createTodoTitle.setAttribute('id', 'createTodoTitle');\n    todoForm.appendChild(createTodoTitle);\n    const createTodoDescLabel = document.createElement('label');\n    createTodoDescLabel.textContent = \"Todo Description: \";\n    createTodoDescLabel.setAttribute('for', 'createTodoDesc');\n    todoForm.appendChild(createTodoDescLabel);\n    const createTodoDesc = document.createElement('textarea');\n    createTodoDesc.setAttribute('id', 'createTodoDesc');\n    todoForm.appendChild(createTodoDesc);\n    const createTodoPrioLabel = document.createElement('label');\n    createTodoPrioLabel.textContent = \"Todo Priority: \";\n    createTodoPrioLabel.setAttribute('for', 'createTodoPrio');\n    todoForm.appendChild(createTodoPrioLabel);\n    const createTodoPrio = document.createElement('select');\n    createTodoPrio.setAttribute('id', 'createTodoPrio');\n    todoForm.appendChild(createTodoPrio);\n    const prioOptionOne = document.createElement('option');\n    prioOptionOne.setAttribute('value', 'High');\n    prioOptionOne.textContent = \"High\";\n    createTodoPrio.appendChild(prioOptionOne);\n    const prioOptionTwo = document.createElement('option');\n    prioOptionTwo.setAttribute('value', 'Medium');\n    prioOptionTwo.textContent = \"Medium\";\n    createTodoPrio.appendChild(prioOptionTwo);\n    const prioOptionThree = document.createElement('option');\n    prioOptionThree.setAttribute('value', 'Low');\n    prioOptionThree.textContent = \"Low\";\n    createTodoPrio.appendChild(prioOptionThree);\n    const createTodoDateLabel = document.createElement('label');\n    createTodoDateLabel.setAttribute('for', 'createTodoDate');\n    createTodoDateLabel.textContent = \"Due Date: \";\n    todoForm.appendChild(createTodoDateLabel);\n    const createTodoDate = document.createElement('input');\n    createTodoDate.setAttribute('type', 'date');\n    createTodoDate.setAttribute('id', 'createTodoDate');\n    todoForm.appendChild(createTodoDate);\n    const createTodoButtonDiv = document.createElement('div');\n    createTodoButtonDiv.setAttribute('id', 'createTodoButtonDiv');\n    todoForm.appendChild(createTodoButtonDiv);\n    const createTodoSubmitButton = document.createElement('button');\n    createTodoSubmitButton.textContent = \"Submit\";\n    createTodoSubmitButton.addEventListener('click', _appLogic__WEBPACK_IMPORTED_MODULE_0__.createNewTodo);\n    createTodoButtonDiv.appendChild(createTodoSubmitButton);\n    const createTodoCancelButton = document.createElement('button');\n    createTodoCancelButton.textContent = \"Cancel\";\n    createTodoCancelButton.addEventListener('click', clearNewTodoForm);\n    createTodoButtonDiv.appendChild(createTodoCancelButton);\n}\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/scripts/display.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/scripts/display.js\");\n/* harmony import */ var _appLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appLogic.js */ \"./src/scripts/appLogic.js\");\n\n\n\n\nconst createProjectButton = document.querySelector('#addProjectButton');\ncreateProjectButton.addEventListener('click', _display_js__WEBPACK_IMPORTED_MODULE_1__.createNewProjectForm);\n\nconst createTodoBtn = document.querySelector('#createTodoBtn');\ncreateTodoBtn.addEventListener('click', _display_js__WEBPACK_IMPORTED_MODULE_1__.createNewTodoForm);\n\n(0,_appLogic_js__WEBPACK_IMPORTED_MODULE_2__.setupDefaults)();\n\n//# sourceURL=webpack://odin-todolist/./src/scripts/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;