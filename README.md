
# Mobile App for [Figma Food Delivery App](https://www.templatefreebies.com/resources/figma-food-delivery-app-ui).

## Before Doing Magic 
To start creating, you must first understand how it works.

### Dependencies
- [Node JS](https://nodejs.org/es/download/) ^ v14.x.x (It is recommended to use [NVM](https://github.com/nvm-sh/nvm#install--update-script) for Node Installation)
- Yarn
- [Android Studio and SDK Tools](https://developer.android.com/studio) ^ 4.x.x
- For iOS development Xcode ^ 12.x.x
- Cocoapods ^ 1.10

 **The instructions below are for iOS development, for Android only run** `yarn install`
```bash
$ yarn install
$ cd ios && pod install
```
#
### Run application
Open a new Terminal window and run the next command to start the [Metro Server](https://facebook.github.io/metro/docs/concepts/)
```bash
$ npx react-native start
```
**No! not an error**, `npx` is a `script executor/ package runner` that prevents [global installation](https://nodejs.org/pt-br/blog/npm/npm-1-0-global-vs-local-installation/) of packages.
#
Once your start Metro Server, run in a new Terminal window the next command (choose according to the platform).

**iOS**
```bash
$ yarn ios
```

**Android**
```bash
$ yarn android
```

### It's all, happy coding! :rocket:

