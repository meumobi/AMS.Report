# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.3.0"></a>
# [1.3.0](https://github.com/meumobi/ion-ams-report/compare/v1.2.0...v1.3.0) (2018-12-19)


### Bug Fixes

* Hide premium results if empty ([44ba80d](https://github.com/meumobi/ion-ams-report/commit/44ba80d)), closes [#101](https://github.com/meumobi/ion-ams-report/issues/101)
* update cf do work properly ([89471a8](https://github.com/meumobi/ion-ams-report/commit/89471a8)), closes [#98](https://github.com/meumobi/ion-ams-report/issues/98)


### Features

* Add site.type property ([442a1c1](https://github.com/meumobi/ion-ams-report/commit/442a1c1)), closes [#100](https://github.com/meumobi/ion-ams-report/issues/100)
* add standard-version ([1025160](https://github.com/meumobi/ion-ams-report/commit/1025160)), closes [#104](https://github.com/meumobi/ion-ams-report/issues/104)
* mix premium and marketplace results ([6244fa0](https://github.com/meumobi/ion-ams-report/commit/6244fa0)), closes [#102](https://github.com/meumobi/ion-ams-report/issues/102)


<a name="v1.2.0"></a>
# [v1.2.0](https://github.com/meumobi/infomobi/compare/v1.1.0...v1.2.0)
* ENHANCE: Closes #81, Set campaign as default dimension on premium table
* ENHANCE: Closes #76, Export Plain data on CSV
* ENHANCE: Closes #80, Add dimension campaign on Premium, visible for admin and editor
* ENHANCE: Closes #82, Highlight revenues on report-header
* ENHANCE: Prevent export csv if plain data are empty
* ENHANCE: Add github issue template
* FEAT: Part of #67, Set Language According User Preference
* FIX: Add menu icon on header of sites-report
* FIX: Closes #78, Error Undefined.json 404
* FIX: remove default Ionic service-worker

<a name="v1.1.0"></a>
# [v1.1.0](https://github.com/meumobi/infomobi/compare/v1.0.1...v1.1.0)
* ENHANCE: setup INT ( Integration ) Enviromnent;
* ENHANCE: split cloud functions for one file per function 
* ENHANCE: add enabled config field for sendWelcomeEmail cloud function
* ENHANCE: transform App on PWA, enabling service workers (pre-cache) and adding manifest
* UPGRADE: upgrade to Ionic 3.7.1
* FIX: #63, can't open ion2-calendar in prod mode
* FIX: #65, login form disappear on top when focus on input on mobile
* FIX: #71, hide sidemenu on small screens
* FIX: #68, update npm package files to be consistent and compliant with Ionic 3.7.1

<a name="v1.0.1"></a>
# [v.1.0.1](https://github.com/meumobi/infomobi/compare/v1.0.0...v1.0.1)
* ENHANCE: set searchbar-ios-toolbar-input-background color to #fff
* ENHANCE: update default document title to Ad.MySports
* improve performance by enabling prod mode and removing cordova references
* ENHANCE: hide statusBar and splashScreen actions , useless on browser
* ENHANCE: add gulp command to test --prod build on local, vs 'ionic serve'
* ENHANCE: hide cordova.js call, useless for browser platform
* FIX: Closes #58, ReportHeaderComponent and ReportTableComponent are part of the declarations of 2 modules
* add release note

<a name="v1.0.0"></a>
# v1.0.0
ENHANCE: on user create prevent logout/login
FEATURE: add date param on setLatestUnpluggedImport
