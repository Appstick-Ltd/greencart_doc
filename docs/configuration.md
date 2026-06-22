---
sidebar_position: 3
---

# App Customization & Branding

This guide describes how to customize the **Hana Go** application to match your business brand. You will learn how to rename the application, update the package/bundle identifier, generate new launcher icons, and change the app's color palette.

---

## 1. Changing the App Name

### For Android:
1. Open the file `android/app/src/main/AndroidManifest.xml`.
2. Locate the `<application>` tag and look for the `android:label` property:
   ```xml
   <application
       android:label="HanaGo"
       android:icon="@mipmap/launcher_icon"
       ... >
   ```
3. Change `android:label="HanaGo"` to your preferred application name (e.g., `android:label="MyStore"`).

### For iOS:
1. Open the file `ios/Runner/Info.plist`.
2. Find the key `<key>CFBundleDisplayName</key>` and `<key>CFBundleName</key>`:
   ```xml
   <key>CFBundleDisplayName</key>
   <string>HanaGo</string>
   <key>CFBundleName</key>
   <string>hana_go</string>
   ```
3. Change the `<string>` values below them to your preferred application name.

---

## 2. Changing the Package Name (Bundle Identifier)

The package name (Android) and bundle identifier (iOS) uniquely identify your app on the Google Play Store and Apple App Store.

### Recommended Method (Using a script)
The fastest and safest way to rename the package identifier is by using the `change_app_package_name` package.

1. Add `change_app_package_name` temporarily under `dev_dependencies` in your `pubspec.yaml`:
   ```yaml
   dev_dependencies:
     change_app_package_name: ^1.1.0
   ```
2. Run the package get command:
   ```bash
   flutter pub get
   ```
3. Execute the renaming command in your terminal, replacing `com.mycompany.myapp` with your target package name:
   ```bash
   dart run change_app_package_name:main com.mycompany.myapp
   ```

### Manual Method

#### For Android:
1. Open `android/app/build.gradle`.
2. Locate `applicationId` inside the `defaultConfig` block and change it:
   ```groovy
   defaultConfig {
       applicationId "com.example.hana_go" // Change this
       ...
   }
   ```
3. Rename the directory structure inside `android/app/src/main/kotlin/` to match your package. For example, if your new package is `com.mycompany.myapp`, move your Kotlin files from `com/example/hana_go/` to `com/mycompany/myapp/`.
4. Update the package declaration at the top of your Kotlin files (e.g., `MainActivity.kt`).

#### For iOS:
1. Open the project in Xcode (`ios/Runner.xcworkspace`).
2. Select the **Runner** project in the left sidebar, then select the **Runner** target.
3. Under the **General** tab, look for **Identity** -> **Bundle Identifier**.
4. Change the value to your new bundle identifier.

---

## 3. Customizing the Launcher Icon

Hana Go is pre-configured with the `flutter_launcher_icons` tool. This compiles and resizes your raw icon asset for Android, iOS, Web, macOS, and Windows.

1. Replace the existing logo image at `assets/icons/logo.png` with your new 512x512 or 1024x1024 pixel PNG icon.
2. Open `pubspec.yaml` and verify the `flutter_launcher_icons` configuration block:
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

This command will automatically replace the icons inside the native folders (e.g., `android/app/src/main/res/` and `ios/Runner/Assets.xcassets/`).

---

## 4. Theme & Color Palettes Customization

All primary color styles, background fills, border styles, and settings colors are managed centrally in the constants class:

📁 File path: [lib/constants/ui.dart](file:///d:/App_project/hanaGo/lib/constants/ui.dart)

### Editing Colors
Open `lib/constants/ui.dart` and modify the hex values inside the `Constants` class to change colors globally across the app:

```dart
class Constants {
  static const String title = 'HanaGo';
  static const Color backgroundColor = Color(0xFFFFFFFF);
  
  // Custom Green Palette (Change these to match your branding)
  static const Color primaryColor = Color(0xFF004B30); // Main color of buttons & active state
  static const Color brandGreen = Color(0xFF004B30);
  static const Color mintGreen = Color(0xFFD2F6D2);   // Light accent background
  static const Color lightMintGreen = Color(0xFFEDFDF0);
  static const Color yellowColor = Color(0xFFEAB308); // Used for rating stars & highlights
  
  // App Typography Font Sizes and Border Radius configs
  static const double borderRadiusValue = 10;
  ...
}
```

### Font Swap Configuration
The typography is configured to use the **Manrope** font family from Google Fonts, pre-bundled under `assets/font/Manrope/`.
*   To use a custom font, place your `.ttf` font files in `assets/font/your_font/`.
*   Register the font families under the `fonts` section in your `pubspec.yaml` file.
*   Update the `fontFamily` configurations inside the theme helper: [lib/theme/app.dart](file:///d:/App_project/hanaGo/lib/theme/app.dart).
