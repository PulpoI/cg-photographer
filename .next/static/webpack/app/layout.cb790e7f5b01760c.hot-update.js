"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f35947a7522c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2Q4NWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJmMzU5NDdhNzUyMmNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/shared/navbar.tsx":
/*!**************************************!*\
  !*** ./components/shared/navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/sheet */ \"(app-pages-browser)/./components/ui/sheet.tsx\");\n/* harmony import */ var _barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _components_cart_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/cart/cart */ \"(app-pages-browser)/./components/cart/cart.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst services = [\n    {\n        name: \"Bodas\",\n        href: \"/servicios/bodas\"\n    },\n    {\n        name: \"15 A\\xf1os\",\n        href: \"/servicios/fiestas-de-15\"\n    },\n    {\n        name: \"Infantiles\",\n        href: \"/servicios/infantiles\"\n    },\n    {\n        name: \"Eventos\",\n        href: \"/servicios/eventos\"\n    },\n    {\n        name: \"Cumplea\\xf1os\",\n        href: \"/servicios/cumpleanos\"\n    },\n    {\n        name: \"Corporativo\",\n        href: \"/servicios/corporativo\"\n    }\n];\nfunction Navbar() {\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setIsScrolled(window.scrollY > 0);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsOpen(false);\n        window.scrollTo(0, 0);\n    }, [\n        pathname\n    ]);\n    const NavItems = (param)=>{\n        let { mobile = false } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"text-zinc-400 hover:text-white\", mobile ? \"text-2xl\" : \"text-sm\"),\n                    children: \"Inicio\"\n                }, void 0, false, {\n                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/sobre-mi\",\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"text-zinc-400 hover:text-white\", mobile ? \"text-2xl\" : \"text-sm\"),\n                    children: \"Sobre M\\xed\"\n                }, void 0, false, {\n                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/servicios\",\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"text-zinc-400 hover:text-white\", mobile ? \"text-2xl\" : \"text-sm\"),\n                            children: \"Servicios\"\n                        }, void 0, false, {\n                            fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5\", \"transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible\", mobile ? \"static mt-2 opacity-100 visible\" : \"\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-1\",\n                                role: \"menu\",\n                                \"aria-orientation\": \"vertical\",\n                                \"aria-labelledby\": \"options-menu\",\n                                children: services.map((service)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: service.href,\n                                        className: \"block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white\",\n                                        role: \"menuitem\",\n                                        children: service.name\n                                    }, service.href, false, {\n                                        fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/portfolio\",\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"text-zinc-400 hover:text-white\", mobile ? \"text-2xl\" : \"text-sm\"),\n                    children: \"Portafolio\"\n                }, void 0, false, {\n                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/contacto\",\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"text-zinc-400 hover:text-white\", mobile ? \"text-2xl\" : \"text-sm\"),\n                    children: \"Contacto\"\n                }, void 0, false, {\n                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"fixed top-0 left-0 right-0 z-50 transition-all duration-300\", isScrolled ? \"bg-black/70 backdrop-blur-md\" : \"bg-transparent\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex h-16 items-center justify-between px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    className: \"text-xl font-bold text-white\",\n                    children: \"LOGO\"\n                }, void 0, false, {\n                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden md:flex items-center gap-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItems, {}, void 0, false, {\n                        fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.Sheet, {\n                        open: isOpen,\n                        onOpenChange: setIsOpen,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetTrigger, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"ghost\",\n                                    size: \"icon\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetContent, {\n                                side: \"right\",\n                                className: \"w-full bg-black p-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                    className: \"flex flex-col items-center gap-8 p-6 pt-20\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItems, {\n                                        mobile: true\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cart_cart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            variant: \"outline\",\n                            className: \"hidden md:inline-flex border-zinc-700 text-zinc-400 hover:text-white\",\n                            children: \"Empezar\"\n                        }, void 0, false, {\n                            fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"I:\\\\DW FRONTEND\\\\Proyectos\\\\25 - CGF\\\\cg-photographer\\\\components\\\\shared\\\\navbar.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"QWUcWVPZEZPHsut+4Mwn3tGLu/U=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNmO0FBQ2lCO0FBQ0U7QUFDMEI7QUFDekI7QUFDaEI7QUFDUztBQUV6QyxNQUFNVyxXQUFXO0lBQ2Y7UUFBRUMsTUFBTTtRQUFTQyxNQUFNO0lBQW1CO0lBQzFDO1FBQUVELE1BQU07UUFBV0MsTUFBTTtJQUEyQjtJQUNwRDtRQUFFRCxNQUFNO1FBQWNDLE1BQU07SUFBd0I7SUFDcEQ7UUFBRUQsTUFBTTtRQUFXQyxNQUFNO0lBQXFCO0lBQzlDO1FBQUVELE1BQU07UUFBY0MsTUFBTTtJQUF3QjtJQUNwRDtRQUFFRCxNQUFNO1FBQWVDLE1BQU07SUFBeUI7Q0FDdkQ7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNpQixRQUFRQyxVQUFVLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNbUIsV0FBV2hCLDREQUFXQTtJQUU1QkYsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsZUFBZTtZQUNuQkosY0FBY0ssT0FBT0MsT0FBTyxHQUFHO1FBQ2pDO1FBQ0FELE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDcEQsR0FBRyxFQUFFO0lBRUxuQixnREFBU0EsQ0FBQztRQUNSaUIsVUFBVTtRQUNWRyxPQUFPSSxRQUFRLENBQUMsR0FBRztJQUNyQixHQUFHO1FBQUNOO0tBQVM7SUFFYixNQUFNTyxXQUFXO1lBQUMsRUFBRUMsU0FBUyxLQUFLLEVBQUU7NkJBQ2xDOzs4QkFDRSw4REFBQ3pCLGlEQUFJQTtvQkFBQ1csTUFBSztvQkFBSWUsV0FBV25CLDhDQUFFQSxDQUFDLGtDQUFrQ2tCLFNBQVMsYUFBYTs4QkFBWTs7Ozs7OzhCQUdqRyw4REFBQ3pCLGlEQUFJQTtvQkFBQ1csTUFBSztvQkFBWWUsV0FBV25CLDhDQUFFQSxDQUFDLGtDQUFrQ2tCLFNBQVMsYUFBYTs4QkFBWTs7Ozs7OzhCQUd6Ryw4REFBQ0U7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDMUIsaURBQUlBOzRCQUFDVyxNQUFLOzRCQUFhZSxXQUFXbkIsOENBQUVBLENBQUMsa0NBQWtDa0IsU0FBUyxhQUFhO3NDQUFZOzs7Ozs7c0NBRzFHLDhEQUFDRTs0QkFBSUQsV0FBV25CLDhDQUFFQSxDQUNoQiwrRkFDQSwrRkFDQWtCLFNBQVMsb0NBQW9DO3NDQUU3Qyw0RUFBQ0U7Z0NBQUlELFdBQVU7Z0NBQU9FLE1BQUs7Z0NBQU9DLG9CQUFpQjtnQ0FBV0MsbUJBQWdCOzBDQUMzRXJCLFNBQVNzQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNoQyxpREFBSUE7d0NBRUhXLE1BQU1xQixRQUFRckIsSUFBSTt3Q0FDbEJlLFdBQVU7d0NBQ1ZFLE1BQUs7a0RBRUpJLFFBQVF0QixJQUFJO3VDQUxSc0IsUUFBUXJCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFXM0IsOERBQUNYLGlEQUFJQTtvQkFBQ1csTUFBSztvQkFBYWUsV0FBV25CLDhDQUFFQSxDQUFDLGtDQUFrQ2tCLFNBQVMsYUFBYTs4QkFBWTs7Ozs7OzhCQUcxRyw4REFBQ3pCLGlEQUFJQTtvQkFBQ1csTUFBSztvQkFBWWUsV0FBV25CLDhDQUFFQSxDQUFDLGtDQUFrQ2tCLFNBQVMsYUFBYTs4QkFBWTs7Ozs7Ozs7O0lBTTdHLHFCQUNFLDhEQUFDUTtRQUNDUCxXQUFXbkIsOENBQUVBLENBQ1gsK0RBQ0FNLGFBQWEsaUNBQWlDO2tCQUdoRCw0RUFBQ2M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUMxQixpREFBSUE7b0JBQUNXLE1BQUs7b0JBQUllLFdBQVU7OEJBQStCOzs7Ozs7OEJBS3hELDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0Y7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNHO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDdkIsdURBQUtBO3dCQUFDK0IsTUFBTW5CO3dCQUFRb0IsY0FBY25COzswQ0FDakMsOERBQUNYLDhEQUFZQTtnQ0FBQytCLE9BQU87MENBQ25CLDRFQUFDbEMseURBQU1BO29DQUFDbUMsU0FBUTtvQ0FBUUMsTUFBSzs4Q0FDM0IsNEVBQUNoQyxnRkFBSUE7d0NBQUNvQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwQiw4REFBQ3RCLDhEQUFZQTtnQ0FBQ21DLE1BQUs7Z0NBQVFiLFdBQVU7MENBQ25DLDRFQUFDTztvQ0FBSVAsV0FBVTs4Q0FDYiw0RUFBQ0Y7d0NBQVNDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNeEIsOERBQUNFO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ2xCLDZEQUFJQTs7Ozs7c0NBQ0wsOERBQUNOLHlEQUFNQTs0QkFBQ21DLFNBQVE7NEJBQVVYLFdBQVU7c0NBQXVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9ySDtHQXBHd0JkOztRQUdMWCx3REFBV0E7OztLQUhOVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIudHN4P2E4NTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbidcbmltcG9ydCB7IFNoZWV0LCBTaGVldENvbnRlbnQsIFNoZWV0VHJpZ2dlciB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9zaGVldCdcbmltcG9ydCB7IE1lbnUsIENoZXZyb25Eb3duIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscydcbmltcG9ydCBDYXJ0IGZyb20gJ0AvY29tcG9uZW50cy9jYXJ0L2NhcnQnXG5cbmNvbnN0IHNlcnZpY2VzID0gW1xuICB7IG5hbWU6ICdCb2RhcycsIGhyZWY6ICcvc2VydmljaW9zL2JvZGFzJyB9LFxuICB7IG5hbWU6ICcxNSBBw7FvcycsIGhyZWY6ICcvc2VydmljaW9zL2ZpZXN0YXMtZGUtMTUnIH0sXG4gIHsgbmFtZTogJ0luZmFudGlsZXMnLCBocmVmOiAnL3NlcnZpY2lvcy9pbmZhbnRpbGVzJyB9LFxuICB7IG5hbWU6ICdFdmVudG9zJywgaHJlZjogJy9zZXJ2aWNpb3MvZXZlbnRvcycgfSxcbiAgeyBuYW1lOiAnQ3VtcGxlYcOxb3MnLCBocmVmOiAnL3NlcnZpY2lvcy9jdW1wbGVhbm9zJyB9LFxuICB7IG5hbWU6ICdDb3Jwb3JhdGl2bycsIGhyZWY6ICcvc2VydmljaW9zL2NvcnBvcmF0aXZvJyB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0SXNTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDApXG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKVxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICB9LCBbcGF0aG5hbWVdKVxuXG4gIGNvbnN0IE5hdkl0ZW1zID0gKHsgbW9iaWxlID0gZmFsc2UgfSkgPT4gKFxuICAgIDw+XG4gICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LXppbmMtNDAwIGhvdmVyOnRleHQtd2hpdGVcIiwgbW9iaWxlID8gXCJ0ZXh0LTJ4bFwiIDogXCJ0ZXh0LXNtXCIpfT5cbiAgICAgICAgSW5pY2lvXG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3NvYnJlLW1pXCIgY2xhc3NOYW1lPXtjbihcInRleHQtemluYy00MDAgaG92ZXI6dGV4dC13aGl0ZVwiLCBtb2JpbGUgPyBcInRleHQtMnhsXCIgOiBcInRleHQtc21cIil9PlxuICAgICAgICBTb2JyZSBNw61cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXBcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNpb3NcIiBjbGFzc05hbWU9e2NuKFwidGV4dC16aW5jLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCIsIG1vYmlsZSA/IFwidGV4dC0yeGxcIiA6IFwidGV4dC1zbVwiKX0+XG4gICAgICAgICAgU2VydmljaW9zXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiYWJzb2x1dGUgbGVmdC0wIG10LTIgdy00OCByb3VuZGVkLW1kIHNoYWRvdy1sZyBiZy16aW5jLTkwMCByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNVwiLFxuICAgICAgICAgIFwidHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIG9wYWNpdHktMCBpbnZpc2libGUgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgZ3JvdXAtaG92ZXI6dmlzaWJsZVwiLFxuICAgICAgICAgIG1vYmlsZSA/IFwic3RhdGljIG10LTIgb3BhY2l0eS0xMDAgdmlzaWJsZVwiIDogXCJcIlxuICAgICAgICApfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTFcIiByb2xlPVwibWVudVwiIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGFyaWEtbGFiZWxsZWRieT1cIm9wdGlvbnMtbWVudVwiPlxuICAgICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17c2VydmljZS5ocmVmfVxuICAgICAgICAgICAgICAgIGhyZWY9e3NlcnZpY2UuaHJlZn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LXppbmMtNDAwIGhvdmVyOmJnLXppbmMtODAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2VydmljZS5uYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCIgY2xhc3NOYW1lPXtjbihcInRleHQtemluYy00MDAgaG92ZXI6dGV4dC13aGl0ZVwiLCBtb2JpbGUgPyBcInRleHQtMnhsXCIgOiBcInRleHQtc21cIil9PlxuICAgICAgICBQb3J0YWZvbGlvXG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RvXCIgY2xhc3NOYW1lPXtjbihcInRleHQtemluYy00MDAgaG92ZXI6dGV4dC13aGl0ZVwiLCBtb2JpbGUgPyBcInRleHQtMnhsXCIgOiBcInRleHQtc21cIil9PlxuICAgICAgICBDb250YWN0b1xuICAgICAgPC9MaW5rPlxuICAgIDwvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8bmF2XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIsXG4gICAgICAgIGlzU2Nyb2xsZWQgPyBcImJnLWJsYWNrLzcwIGJhY2tkcm9wLWJsdXItbWRcIiA6IFwiYmctdHJhbnNwYXJlbnRcIlxuICAgICAgKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggaC0xNiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTRcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgTE9HT1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIFxuICAgICAgICB7LyogRGVza3RvcCBNZW51ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNlwiPlxuICAgICAgICAgIDxOYXZJdGVtcyAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTW9iaWxlIE1lbnUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICAgICAgPFNoZWV0IG9wZW49e2lzT3Blbn0gb25PcGVuQ2hhbmdlPXtzZXRJc09wZW59PlxuICAgICAgICAgICAgPFNoZWV0VHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TaGVldFRyaWdnZXI+XG4gICAgICAgICAgICA8U2hlZXRDb250ZW50IHNpZGU9XCJyaWdodFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayBwLTBcIj5cbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtOCBwLTYgcHQtMjBcIj5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbXMgbW9iaWxlIC8+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9TaGVldENvbnRlbnQ+XG4gICAgICAgICAgPC9TaGVldD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxDYXJ0IC8+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImhpZGRlbiBtZDppbmxpbmUtZmxleCBib3JkZXItemluYy03MDAgdGV4dC16aW5jLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBFbXBlemFyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVzZVBhdGhuYW1lIiwiQnV0dG9uIiwiU2hlZXQiLCJTaGVldENvbnRlbnQiLCJTaGVldFRyaWdnZXIiLCJNZW51IiwiY24iLCJDYXJ0Iiwic2VydmljZXMiLCJuYW1lIiwiaHJlZiIsIk5hdmJhciIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicGF0aG5hbWUiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUbyIsIk5hdkl0ZW1zIiwibW9iaWxlIiwiY2xhc3NOYW1lIiwiZGl2Iiwicm9sZSIsImFyaWEtb3JpZW50YXRpb24iLCJhcmlhLWxhYmVsbGVkYnkiLCJtYXAiLCJzZXJ2aWNlIiwibmF2Iiwib3BlbiIsIm9uT3BlbkNoYW5nZSIsImFzQ2hpbGQiLCJ2YXJpYW50Iiwic2l6ZSIsInNpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/navbar.tsx\n"));

/***/ })

});