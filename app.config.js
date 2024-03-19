import "dotenv/config";
export default {
  expo: {
    name: "my-app",
    slug: "my-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./src/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.ie22.my-app",
      "infoPlist": {
        "NSFaceIDUsageDescription": "This app uses Face ID to secure your personal information."
      },
    },
    android: {
      package: "com.ie22.myapp",

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
    plugins: [
      [
        "expo-local-authentication",
        {
          faceIDPermission: "Allow $(PRODUCT_NAME) to use Face ID.",
        },
      ],
    ],
  },
};
