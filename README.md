This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/driftyco/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/driftyco/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

# Firebase PaaS Pricing
[Free Plan](https://firebase.google.com/pricing/) includes:
- Realtime Database
  - 1GB Stored
  - 10GB/month downloaded
- Hosting
  - 1GB stored
  - 10GB/month transferred
  - Custom domain & SSL

https://medium.com/google-cloud/google-firebase-can-host-your-website-and-single-page-application-4e9c9e0c6a95

# Tools
## Convert csv on json
http://www.csvjson.com/csv2json

# create new pages

```
$ ionic g page login
[OK] Generated a page named Login!
$ ionic g page users-list
```