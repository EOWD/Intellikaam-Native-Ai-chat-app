import "dotenv/config";
export default {
  expo: {
    name: "my-app",
    slug: "my-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.ie22.my-app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
        package: "com.ie22.myapp",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apikey: process.env.API_KEY,
      authDomain: process.env.AUTHDOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appID: process.env.API_ID,
    },
  },
};
