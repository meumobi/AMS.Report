# Release Notes

## Update Release Notes
### Get Resume of changes commits
Update these notes using: git log --pretty=format:'* %s' --no-merges v1.0.0..HEAD

#### Commit Release Notes
Use Resume of Changes from previous command on commit message

1. $ git add RELEASENOTES.md 
2. $ git commit 

### Tag and Push Release

1. $ git tag v1.0.0
2. $ git push origin v1.0.0

## Push ionic:build --prod
Run `ionic:build --prod` before firebase deploy to ensure you're pushing a prod enabled version.

```
$ npm run ionic:build --prod
$ firebase deploy
```

Run `gulp` to test it on local


<a name="v1.1.0"></a>
# [v.1.1.0](https://github.com/meumobi/infomobi/compare/v1.0.1...v1.1.0)
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