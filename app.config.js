export default {
    "expo": {
      "name": "semi-app",
      "slug": "semi-app",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "splash": {
        "image": "./assets/new-splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#ffffff"
        },
        "package": "com.juansev.semiapp"
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
      "extra": {
        "eas": {
          "projectId": "a6567ab5-bddc-4c61-ba72-ba438f66b7af"
        }
      }
    }
  }
  