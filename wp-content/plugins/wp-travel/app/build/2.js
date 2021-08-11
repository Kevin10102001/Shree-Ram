(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/src/frontend/booking-widget/sub-components/DatesListing.js":
/*!************************************************************************!*\
  !*** ./app/src/frontend/booking-widget/sub-components/DatesListing.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var rrule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rrule */ \"./node_modules/rrule/dist/esm/src/index.js\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ErrorBoundry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ErrorBoundry */ \"./app/src/frontend/booking-widget/ErrorBoundry.js\");\n/* harmony import */ var _PaxSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PaxSelector */ \"./app/src/frontend/booking-widget/sub-components/PaxSelector.js\");\n/* harmony import */ var _TripTimesListing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TripTimesListing */ \"./app/src/frontend/booking-widget/sub-components/TripTimesListing.js\");\n/* harmony import */ var _TripExtrasListing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TripExtrasListing */ \"./app/src/frontend/booking-widget/sub-components/TripExtrasListing.js\");\n/* harmony import */ var _GlobalComponents_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../GlobalComponents/Loader */ \"./app/src/GlobalComponents/Loader.js\");\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar _ = lodash;\n\n\n\n // const PaxSelector       = lazy(() => import(\"./PaxSelector\"));\n// const TripTimesListing  = lazy(() => import(\"./TripTimesListing\"));\n// const TripExtrasListing = lazy(() => import(\"./TripExtrasListing\"));\n\n\n\nvar __i18n = _objectSpread({}, _wp_travel.strings);\n\nvar datePerPage = 5;\n\nvar generateRRule = function generateRRule(rruleArgs) {\n  var rruleSet = new rrule__WEBPACK_IMPORTED_MODULE_5__[\"RRuleSet\"]();\n  rruleSet.rrule(new rrule__WEBPACK_IMPORTED_MODULE_5__[\"RRule\"](rruleArgs));\n  var rule = new rrule__WEBPACK_IMPORTED_MODULE_5__[\"RRule\"](rruleArgs);\n  return rule.all();\n};\n\nvar generateRRUleArgs = function generateRRUleArgs(data) {\n  var startDate = data.start_date && new Date(data.start_date) || new Date();\n  var currentDate = new Date();\n  var rruleStartDate = currentDate < startDate ? startDate : currentDate;\n  var ruleArgs = {\n    freq: rrule__WEBPACK_IMPORTED_MODULE_5__[\"RRule\"].DAILY,\n    count: datePerPage,\n    dtstart: new Date(Date.UTC(rruleStartDate.getFullYear(), rruleStartDate.getMonth(), rruleStartDate.getDate(), 0, 0, 0))\n  };\n\n  if (data.end_date && '0000-00-00' != data.end_date) {\n    // if has end date.\n    var endDate = new Date(data.end_date);\n    ruleArgs.until = endDate;\n  }\n\n  rruleStartDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(rruleStartDate).utc();\n  var selectedYears = data.years ? data.years.split(\",\").filter(function (year) {\n    return year != 'every_year';\n  }).map(function (year) {\n    return parseInt(year);\n  }) : [];\n\n  if (selectedYears.length > 0 && !selectedYears.includes(rruleStartDate.year())) {\n    return [];\n  }\n\n  var selectedMonths = data.months ? data.months.split(\",\").filter(function (month) {\n    return month != 'every_month';\n  }) : [];\n  var selectedDates = data.date_days ? data.date_days.split(\",\").filter(function (date) {\n    return date !== 'every_weekdays' && date !== '';\n  }) : [];\n  var selectedDays = data.days ? data.days.split(\",\").filter(function (day) {\n    return day !== 'every_date_days' && day !== '';\n  }) : [];\n\n  if (selectedMonths.length > 0) {\n    ruleArgs.bymonth = selectedMonths.map(function (m) {\n      return parseInt(m);\n    });\n  }\n\n  if (selectedDays.length > 0) {\n    ruleArgs.byweekday = selectedDays.map(function (sd) {\n      return rrule__WEBPACK_IMPORTED_MODULE_5__[\"RRule\"][sd];\n    });\n  } else if (selectedDates.length > 0) {\n    ruleArgs.bymonthday = selectedDates.map(function (md) {\n      return parseInt(md);\n    });\n  }\n\n  return ruleArgs;\n};\n\nvar RecurringDates = function RecurringDates(_ref) {\n  var data = _ref.data,\n      isTourDate = _ref.isTourDate,\n      getPricingsByDate = _ref.getPricingsByDate,\n      onFixedDeparturePricingSelect = _ref.onFixedDeparturePricingSelect,\n      allData = _ref.allData,\n      componentData = _ref.componentData;\n\n  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      dates = _useState2[0],\n      setRecurringDates = _useState2[1];\n\n  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      activeRecurringDates = _useState4[0],\n      setActiveRecurringDates = _useState4[1];\n\n  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      rruleArgs = _useState6[0],\n      setRRuleArgs = _useState6[1];\n\n  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),\n      showRecurringDates = _useState8[0],\n      showRecurringDatesToggle = _useState8[1];\n\n  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),\n      selectedDate = _useState10[0],\n      setSelectedDate = _useState10[1];\n\n  var _useState11 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    activePage: 0,\n    datesPerPage: datePerPage,\n    pagesCount: 0\n  }),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),\n      _useState12$ = _useState12[0],\n      activePage = _useState12$.activePage,\n      datesPerPage = _useState12$.datesPerPage,\n      pagesCount = _useState12$.pagesCount,\n      setPagination = _useState12[1];\n\n  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!rruleArgs) {\n      var aaa = generateRRUleArgs(data);\n\n      if (Object.keys(aaa).length > 0) {\n        setRRuleArgs(aaa);\n      }\n    }\n  }, [data]);\n  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (rruleArgs) {\n      var _dates = generateRRule(rruleArgs);\n\n      setRecurringDates(_dates);\n      setActiveRecurringDates(_dates);\n      setPagination(function (state) {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          activePage: 1,\n          pagesCount: 1\n        });\n      });\n    }\n  }, [rruleArgs]);\n  var nextStartDate = dates.length > 0 && moment__WEBPACK_IMPORTED_MODULE_4___default()(dates[dates.length - 1]).add(1, 'days').toDate();\n\n  var pricings = allData.tripData && allData.tripData.pricings && _.keyBy(allData.tripData.pricings, function (p) {\n    return p.id;\n  }); // All Pricings.\n\n\n  var handleFixedDeparturePricingClick = function handleFixedDeparturePricingClick(date, date_id, pricingId) {\n    return function (e) {\n      if (typeof onFixedDeparturePricingSelect === 'function') {\n        onFixedDeparturePricingSelect(moment__WEBPACK_IMPORTED_MODULE_4___default()(date).toDate(), date_id, pricingId)();\n      }\n    };\n  };\n\n  var loadMoreDates = function loadMoreDates(page) {\n    return function () {\n      var start = page < 0 ? (activePage - 2) * datesPerPage : activePage * datesPerPage;\n      var end = start + datesPerPage;\n      var _dates = [];\n      var pagination = {};\n\n      if (dates.slice(start, end).length > 0) {\n        _dates = dates.slice(start, end);\n      } else {\n        var _rruleArgs = _objectSpread(_objectSpread({}, rruleArgs), {}, {\n          dtstart: nextStartDate\n        });\n\n        _dates = generateRRule(_rruleArgs);\n        setRecurringDates([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(dates), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_dates)));\n        pagination.pagesCount = pagesCount + 1;\n      }\n\n      if (_dates.length > 0) {\n        setActiveRecurringDates(_dates);\n        pagination.activePage = activePage + page;\n        setPagination(function (state) {\n          return _objectSpread(_objectSpread({}, state), pagination);\n        });\n      }\n    };\n  };\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"tbody\", {\n    className: \"tbody-table\"\n  }, activeRecurringDates.map(function (date, dateIndex) {\n    var _date = moment__WEBPACK_IMPORTED_MODULE_4___default()(moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format(\"YYYY-MM-DD\")); // looped date.\n\n\n    var _selectedDateTime = null;\n\n    if (componentData.selectedDateTime) {\n      _selectedDateTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(moment__WEBPACK_IMPORTED_MODULE_4___default()(componentData.selectedDateTime).format(\"YYYY-MM-DD\"));\n    }\n\n    var _pricingIds = getPricingsByDate(moment__WEBPACK_IMPORTED_MODULE_4___default()(data.start_date).toDate(), data.id);\n\n    var firstPricingId = _pricingIds[0];\n    var firstPricing = pricings[firstPricingId];\n    var firstCounts = {};\n    var pricingOptions = [];\n\n    if ('undefined' != typeof _pricingIds.length && _pricingIds.length) {\n      var firstCategories = firstPricing.categories;\n      firstCategories.forEach(function (c) {\n        firstCounts = _objectSpread(_objectSpread({}, firstCounts), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, c.id, parseInt(c.default_pax) || 0));\n      });\n      pricingOptions = _pricingIds.map(function (pricingId, pricingIndex) {\n        return {\n          label: pricings[pricingId].title,\n          value: pricingId\n        };\n      });\n    }\n\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, isTourDate(new Date(_date)) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"tr\", {\n      key: dateIndex,\n      className: (_date.isSame(_selectedDateTime) ? 'selected' : '', componentData.isLoading && componentData.selectedDateIds.includes(data.id) && componentData.selectedPricingId == componentData.pricing.id && _date.isSame(_selectedDateTime) && 'wptravel-loading')\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", {\n      \"data-label\": \"pricings\"\n    }, componentData.isLoading && componentData.selectedDateIds.includes(data.id) && componentData.selectedPricingId == componentData.pricing.id && _date.isSame(_selectedDateTime) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_GlobalComponents_Loader__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), 'undefined' != typeof _pricingIds.length && _pricingIds.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, _pricingIds.map(function (pricingId, pricingIndex) {\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"CheckboxControl\"], {\n        key: pricingIndex,\n        label: pricings[pricingId].title,\n        checked: componentData.selectedPricingId == pricingId && componentData.selectedPricingId == componentData.pricing.id && componentData.selectedDateIds.includes(data.id) && _date.isSame(_selectedDateTime),\n        onChange: handleFixedDeparturePricingClick(_date, date.id, pricingId)\n      });\n    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", {\n      \"data-label\": \"person\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"div\", {\n      className: \"person-box\"\n    }, !componentData.pricingUnavailable && componentData.pricing && componentData.inventory.find(function (i) {\n      return i.pax_available > 0 && componentData.selectedPricingId == componentData.pricing.id && componentData.selectedDateIds.includes(data.id) && _date.isSame(_selectedDateTime);\n    }) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_PaxSelector__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      pricing: componentData.pricing ? componentData.pricing : firstPricing,\n      onPaxChange: componentData.onPaxChange,\n      counts: componentData.counts ? componentData.counts : firstCounts,\n      inventory: componentData.inventory\n    }), componentData.totalPax > 0 && _.size(componentData.pricing.trip_extras) > 0 && // <Suspense fallback={<Loader />}>\n    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_ErrorBoundry__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_TripExtrasListing__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      options: componentData.pricing.trip_extras,\n      onChange: function onChange(id, value) {\n        return function () {\n          return componentData.updateState({\n            tripExtras: _objectSpread(_objectSpread({}, componentData.tripExtras), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, id, parseInt(value)))\n          });\n        };\n      },\n      counts: componentData.tripExtras\n    })) // </Suspense>\n    ) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"Disabled\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_PaxSelector__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      pricing: firstPricing,\n      onPaxChange: componentData.onPaxChange,\n      counts: firstCounts,\n      inventory: componentData.inventory\n    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", {\n      \"data-label\": \"date\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"div\", {\n      className: \"date-time-wrapper\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"span\", {\n      className: \"start-date\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"span\", null, __i18n.bookings.start_date, \": \"), _date.format(_wp_travel.date_format_moment))), !componentData.pricingUnavailable && componentData.nomineeTimes.length > 0 && componentData.inventory.find(function (i) {\n      return i.pax_available > 0 && componentData.selectedPricingId == componentData.pricing.id && componentData.selectedDateIds.includes(data.id) && _date.isSame(_selectedDateTime);\n    }) && // <Suspense fallback={<Loader />}>\n    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_TripTimesListing__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      selected: componentData.selectedDateTime,\n      onTimeSelect: componentData.onTimeSelect,\n      options: componentData.nomineeTimes\n    }) // </Suspense>\n    )) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"tr\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"Disabled\"], null, 'undefined' != typeof _pricingIds.length && _pricingIds.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, _pricingIds.map(function (pricingId, pricingIndex) {\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"CheckboxControl\"], {\n        key: pricingIndex,\n        label: pricings[pricingId].title,\n        checked: componentData.selectedPricingId == pricingId && componentData.selectedPricingId == componentData.pricing.id && componentData.selectedDateIds.includes(data.id) && _date.isSame(_selectedDateTime),\n        onChange: handleFixedDeparturePricingClick(_date, date.id, pricingId)\n      });\n    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"Disabled\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_PaxSelector__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      pricing: firstPricing,\n      onPaxChange: componentData.onPaxChange,\n      counts: firstCounts,\n      inventory: componentData.inventory\n    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", {\n      \"data-label\": \"date\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"Disabled\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"div\", {\n      className: \"date-time-wrapper\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"span\", {\n      className: \"start-date\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"span\", null, __i18n.bookings.start_date, \": \"), _date.format(_wp_travel.date_format_moment)))))));\n  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"tfoot\", {\n    className: \"wp-travel-recurring-dates-nav-btns\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"tr\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", {\n    colSpan: \"3\"\n  }, activePage > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"button\", {\n    onClick: loadMoreDates(-1),\n    className: \"prev\"\n  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__[\"__\"])('Previous')), activePage < pagesCount && activePage >= 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"button\", {\n    className: \"next\",\n    onClick: loadMoreDates(1)\n  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__[\"__\"])('Next')), activePage >= pagesCount && activeRecurringDates.length >= datePerPage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"button\", {\n    onClick: loadMoreDates(1),\n    className: \"show-more\"\n  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__[\"__\"])('Load More...'))))));\n};\n\nvar DatesListing = function DatesListing(_ref2) {\n  var dates = _ref2.dates,\n      isTourDate = _ref2.isTourDate,\n      getPricingsByDate = _ref2.getPricingsByDate,\n      allData = _ref2.allData,\n      onFixedDeparturePricingSelect = _ref2.onFixedDeparturePricingSelect,\n      componentData = _ref2.componentData,\n      getPricingTripTimes = _ref2.getPricingTripTimes;\n\n  var handlePricingClick = function handlePricingClick(date, date_id, pricingId) {\n    return function () {\n      if (typeof onFixedDeparturePricingSelect === 'function') {\n        onFixedDeparturePricingSelect(moment__WEBPACK_IMPORTED_MODULE_4___default()(date).toDate(), date_id, pricingId);\n      }\n    };\n  };\n\n  var _dates = Object.values(dates);\n\n  var nonRecurringDates = _dates.filter(function (d) {\n    return !d.is_recurring && d.start_date && '0000-00-00' != d.start_date && new Date(d.start_date) > new Date();\n  });\n\n  var pricings = allData.tripData && allData.tripData.pricings && _.keyBy(allData.tripData.pricings, function (p) {\n    return p.id;\n  }); // All Pricings.\n\n\n  var times = getPricingTripTimes(componentData.selectedPricingId, []);\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, _dates.length > 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"div\", {\n    className: \"wptravel-recurring-dates\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"div\", {\n    className: \"wptravel-recurring-table-wrapper\"\n  }, nonRecurringDates.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"table\", {\n    className: \"wptravel-recurring-table\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"thead\", {\n    className: \"thead-table\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"tr\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"th\", {\n    \"data-label\": __i18n.bookings.pricings_list_label\n  }, __i18n.bookings.pricings_list_label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"th\", {\n    \"data-label\": __i18n.bookings.person\n  }, __i18n.bookings.person), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"th\", {\n    \"data-label\": __i18n.bookings.date\n  }, __i18n.bookings.date))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"tbody\", {\n    className: \"tbody-table\"\n  }, nonRecurringDates.map(function (date, index) {\n    var _pricingIds = getPricingsByDate(moment__WEBPACK_IMPORTED_MODULE_4___default()(date.start_date).toDate(), date.id);\n\n    var firstPricingId = _pricingIds[0];\n    var firstPricing = pricings[firstPricingId];\n    var firstCategories = firstPricing.categories;\n    var firstCounts = {};\n    firstCategories.forEach(function (c) {\n      firstCounts = _objectSpread(_objectSpread({}, firstCounts), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, c.id, parseInt(c.default_pax) || 0));\n    });\n    var pricingOptions = [];\n\n    if ('undefined' != typeof _pricingIds.length && _pricingIds.length) {\n      pricingOptions = _pricingIds.map(function (pricingId, pricingIndex) {\n        return {\n          label: pricings[pricingId].title,\n          value: pricingId\n        };\n      });\n    }\n\n    var _selectedDateTime = null;\n\n    if ('undefined' != typeof componentData.selectedDateTime) {\n      _selectedDateTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(moment__WEBPACK_IMPORTED_MODULE_4___default()(componentData.selectedDateTime).format(\"YYYY-MM-DD\"));\n    }\n\n    var _start_date = null;\n\n    if (!date.is_recurring && date.start_date) {\n      _start_date = moment__WEBPACK_IMPORTED_MODULE_4___default()(moment__WEBPACK_IMPORTED_MODULE_4___default()(date.start_date).format(\"YYYY-MM-DD\"));\n    }\n\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, !date.is_recurring && isTourDate(new Date(_start_date)) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"tr\", {\n      key: index,\n      className: (_start_date.isSame(_selectedDateTime) ? 'selected' : '', componentData.isLoading && componentData.selectedDateIds.includes(date.id) && 'wptravel-loading')\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", {\n      \"data-label\": \"pricings\"\n    }, componentData.isLoading && componentData.selectedDateIds.includes(date.id) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_GlobalComponents_Loader__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), 'undefined' != typeof _pricingIds.length && _pricingIds.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, _pricingIds.map(function (pricingId, pricingIndex) {\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"CheckboxControl\"], {\n        key: pricingIndex,\n        label: pricings[pricingId].title,\n        checked: componentData.selectedPricingId == pricingId && componentData.selectedDateIds.includes(date.id),\n        onChange: handlePricingClick(date.start_date, date.id, pricingId)\n      });\n    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", {\n      \"data-label\": \"person\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"div\", {\n      className: \"person-box\"\n    }, !componentData.pricingUnavailable && componentData.pricing && componentData.inventory.find(function (i) {\n      return i.pax_available > 0 && componentData.selectedPricingId == componentData.pricing.id && componentData.selectedDateIds.includes(date.id);\n    }) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_PaxSelector__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      pricing: componentData.pricing ? componentData.pricing : firstPricing,\n      onPaxChange: componentData.onPaxChange,\n      counts: componentData.counts ? componentData.counts : firstCounts,\n      inventory: componentData.inventory\n    }), componentData.totalPax > 0 && _.size(componentData.pricing.trip_extras) > 0 && // <Suspense fallback={<Loader />}>\n    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_ErrorBoundry__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_TripExtrasListing__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      options: componentData.pricing.trip_extras,\n      onChange: function onChange(id, value) {\n        return function () {\n          return componentData.updateState({\n            tripExtras: _objectSpread(_objectSpread({}, componentData.tripExtras), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, id, parseInt(value)))\n          });\n        };\n      },\n      counts: componentData.tripExtras\n    })) // </Suspense>\n    ) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"Disabled\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_PaxSelector__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      pricing: firstPricing,\n      onPaxChange: componentData.onPaxChange,\n      counts: firstCounts,\n      inventory: componentData.inventory\n    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"td\", {\n      \"data-label\": \"date\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"div\", {\n      className: \"date-box\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"div\", {\n      className: \"date-time-wrapper\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"span\", {\n      className: \"start-date\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"span\", null, __i18n.bookings.start_date, \": \"), moment__WEBPACK_IMPORTED_MODULE_4___default()(date.start_date).format(_wp_travel.date_format_moment)), date.end_date && '0000-00-00' != date.end_date && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"span\", {\n      className: \"end-date\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"span\", null, __i18n.bookings.end_date, \": \"), moment__WEBPACK_IMPORTED_MODULE_4___default()(date.end_date).format(_wp_travel.date_format_moment))), !componentData.pricingUnavailable && componentData.nomineeTimes.length > 0 && componentData.selectedPricingId == componentData.pricing.id && componentData.selectedDateIds.includes(date.id) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_TripTimesListing__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      selected: componentData.selectedDateTime,\n      onTimeSelect: componentData.onTimeSelect,\n      options: componentData.nomineeTimes\n    })))))));\n  }))))), _dates.map(function (date, index) {\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, date.is_recurring && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"PanelBody\"], {\n      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__[\"__\"])(\"\".concat(__i18n.bookings.recurring, \" \").concat(date.title), 'wp-travel'),\n      initialOpen: true,\n      key: index\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__[\"PanelRow\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"table\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"thead\", {\n      className: \"thead-table\"\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"tr\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"th\", {\n      \"data-label\": c\n    }, __i18n.bookings.pricings_list_label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"th\", {\n      \"data-label\": __i18n.bookings.person\n    }, __i18n.bookings.person), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"th\", {\n      \"data-label\": __i18n.bookings.date\n    }, __i18n.bookings.date))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(RecurringDates, {\n      data: date,\n      onFixedDeparturePricingSelect: handlePricingClick,\n      getPricingsByDate: getPricingsByDate,\n      isTourDate: isTourDate,\n      allData: allData,\n      componentData: componentData,\n      key: index\n    })))));\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(\"div\", {\n    id: \"wp-travel-booking-recurring-dates\"\n  }), \" \")) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, \" \", __i18n.add_date));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DatesListing);\n\n//# sourceURL=webpack:///./app/src/frontend/booking-widget/sub-components/DatesListing.js?");

/***/ })

}]);