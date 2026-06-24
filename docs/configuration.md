---
sidebar_position: 3
title: App Customization and Branding
description: How to customize the Hana Go app name, package ID, launcher icon, and color theme for your business.
---

# App Customization and Branding

This guide shows how to customize the Hana Go app for your business. You will learn how to rename the app, update the package ID, generate new launcher icons, and change the color theme.

---

## 1. Changing the App Name

### Android:
1. Open `android/app/src/main/AndroidManifest.xml`.
2. Find the `android:label` property inside the `<application>` tag:
   ```xml
   <application
       android:label="HanaGo"
       android:icon="@mipmap/launcher_icon"
       ... >
   ```
3. Change `android:label="HanaGo"` to your app name (for example, `android:label="MyStore"`).

### iOS:
1. Open `ios/Runner/Info.plist`.
2. Find the `CFBundleDisplayName` and `CFBundleName` keys:
   ```xml
   <key>CFBundleDisplayName</key>
   <string>HanaGo</string>
   <key>CFBundleName</key>
   <string>hana_go</string>
   ```
3. Change the `<string>` values to your app name.

---

## 2. Changing the Package Name (Bundle Identifier)

The package name (Android) and bundle identifier (iOS) uniquely identify your app on the Google Play Store and Apple App Store.

### Recommended Method (Using a Script)

The fastest way to rename the package ID is using the `change_app_package_name` package.

1. Add `change_app_package_name` temporarily under `dev_dependencies` in `pubspec.yaml`:
   ```yaml
   dev_dependencies:
     change_app_package_name: ^1.1.0
   ```
2. Run the package get command:
   ```bash
   flutter pub get
   ```
3. Run the renaming command in your terminal. Replace `com.mycompany.myapp` with your package name:
   ```bash
   dart run change_app_package_name:main com.mycompany.myapp
   ```

### Manual Method

#### Android:
1. Open `android/app/build.gradle`.
2. Find `applicationId` inside the `defaultConfig` block and change it:
   ```groovy
   defaultConfig {
       applicationId "com.example.hana_go" // Change this
       ...
   }
   ```
3. Rename the directory structure inside `android/app/src/main/kotlin/` to match your package. For example, if your new package is `com.mycompany.myapp`, move files from `com/example/hana_go/` to `com/mycompany/myapp/`.
4. Update the package declaration at the top of your Kotlin files (for example, `MainActivity.kt`).

#### iOS:
1. Open the project in Xcode (`ios/Runner.xcworkspace`).
2. Select the **Runner** project in the left sidebar, then select the **Runner** target.
3. Under the **General** tab, find **Identity** then **Bundle Identifier**.
4. Change the value to your new bundle identifier.

---

## 3. Customizing the Launcher Icon

Hana Go uses the `flutter_launcher_icons` tool. This compiles and resizes your icon for Android, iOS, Web, macOS, and Windows.

1. Replace the logo at `assets/icons/logo.png` with your new 512x512 or 1024x1024 pixel PNG icon.
2. Open `pubspec.yaml` and check the `flutter_launcher_icons` section:
   ```yaml
   flutter_launcher_icons:
     android: "launcher_icon"
     ios: true
     image_path: "assets/icons/logo.png"
     min_sdk_android: 21
     remove_alpha_ios: true
     adaptive_icon_background: "#0D3D31"
     adaptive_icon_foreground: "assets/icons/logo.png"
     ...
   ```
3. Run the icon generation command in your terminal:
   ```bash
   dart run flutter_launcher_icons
   ```

This command automatically replaces icons in the native folders (`android/app/src/main/res/` and `ios/Runner/Assets.xcassets/`).

---

## 4. Theme and Color Customization

All color styles, backgrounds, borders, and settings colors are managed in one file:

`lib/constants/ui.dart`

### Editing Colors

Open `lib/constants/ui.dart` and change the hex values in the `Constants` class to update colors across the app:

```dart
class Constants {
  static const String title = 'HanaGo';
  static const Color backgroundColor = Color(0xFFFFFFFF);
  
  // Change these to match your brand
  static const Color primaryColor = Color(0xFF004B30); // Main button and active state color
  static const Color brandGreen = Color(0xFF004B30);
  static const Color mintGreen = Color(0xFFD2F6D2);   // Light accent background
  static const Color lightMintGreen = Color(0xFFEDFDF0);
  static const Color yellowColor = Color(0xFFEAB308); // Rating stars and highlights
  
  // Font sizes and border radius
  static const double borderRadiusValue = 10;
  ...
}
```

### Font Configuration

The app uses the **Manrope** font family from Google Fonts, stored in `assets/font/Manrope/`.

- To use a custom font, place your `.ttf` files in `assets/font/your_font/`.
- Register the font families in the `fonts` section of `pubspec.yaml`.
- Update the `fontFamily` settings in `lib/theme/app.dart`.
