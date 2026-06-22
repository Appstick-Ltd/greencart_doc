---
sidebar_position: 6
---

# Google Cloud Places & Maps Setup

This guide walks you through setting up the **Google Cloud Console**, enabling the **Google Places API** and **Maps SDKs**, and restricting API keys for Android and iOS platforms.

---

## 1. Setting up Google Cloud Console

To use address autocompletion and mapping features:
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click the project dropdown and select **New Project**.
3. Enter a project name (e.g., `Hana Go Grocery App`) and click **Create**.
4. Go to **Billing** -> **Billing Accounts** and link an active billing account. Google requires an active billing account to use maps, though you get a free $200 monthly credit.

---

## 2. Enabling APIs and Services

In the left navigation sidebar, navigate to **APIs & Services** -> **Library** and search for and enable the following services:

1.  **Places API** (Required for address search/autocompletion)
2.  **Maps SDK for Android** (For rendering maps on Android)
3.  **Maps SDK for iOS** (For rendering maps on iOS)
4.  **Geocoding API** (Required for converting coordinates to addresses)

---

## 3. Generating API Keys

1. Navigate to **APIs & Services** -> **Credentials**.
2. Click **+ Create Credentials** at the top of the screen and select **API Key**.
3. A new API Key will be generated. Copy this key, as you will need it in your project config.

:::important API Key Security
To prevent unauthorized usage of your API keys (which could lead to unexpected billing charges), you must restrict your keys to only run inside your specific mobile applications.
:::

---

## 4. Restricting API Keys

We highly recommend creating two separate API keys: one restricted for Android and one for iOS.

### Android API Key Restrictions:
1. Under **Credentials**, edit your Android API Key.
2. Under **Application restrictions**, select **Android apps**.
3. Under **Website and app restrictions**, click **+ Add an item**.
4. Input your Package Name (e.g. `com.company.hanago`) and your SHA-1 certificate fingerprint.
5. Under **API restrictions**, select **Restrict key**, check **Places API**, **Maps SDK for Android**, and **Geocoding API**.
6. Save the changes.

### iOS API Key Restrictions:
1. Under **Credentials**, edit your iOS API Key.
2. Under **Application restrictions**, select **iOS apps**.
3. Under **Website and app restrictions**, click **+ Add an item** and input your iOS Bundle ID (e.g. `com.company.hanago`).
4. Under **API restrictions**, select **Restrict key**, check **Places API**, **Maps SDK for iOS**, and **Geocoding API**.
5. Save the changes.

---

## 5. Integrating Keys in the Project

Add the respective restricted keys to the native build config folders:

### For Android:
1. Open the file `android/app/src/main/AndroidManifest.xml`.
2. Locate the `<application>` tag and insert the following `<meta-data>` entry with your restricted Android key:
   ```xml
   <application ...>
       <!-- Google Maps API Key -->
       <meta-data 
           android:name="com.google.android.geo.API_KEY"
           android:value="YOUR_RESTRICTED_ANDROID_API_KEY"/>
   </application>
   ```

### For iOS:
1. Open `ios/Runner/AppDelegate.swift`.
2. Import the Google Maps SDK and initialize it with your iOS API key:
   ```swift
   import UIKit
   import Flutter
   import GoogleMaps // Add this import

   @main
   @objc class AppDelegate: FlutterAppDelegate {
     override func application(
       _ application: UIApplication,
       didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
     ) -> Bool {
       GMSServices.provideAPIKey("YOUR_RESTRICTED_IOS_API_KEY") // Add this line
       GeneratedPluginRegistrant.register(with: self)
       return super.application(application, didFinishLaunchingWithOptions: launchOptions)
     }
   }
   ```

---

## 6. Using Google Places Autocomplete in the App

Hana Go includes the `google_places_flutter` package. To add an autocomplete address input text field in any page, instantiate the `GooglePlaceAutoCompleteTextField` widget:

```dart
import 'package:google_places_flutter/google_places_flutter.dart';

GooglePlaceAutoCompleteTextField(
    textEditingController: addressController,
    googleAPIKey: "YOUR_API_KEY",
    inputDecoration: InputDecoration(
        hintText: "Search your shipping address...",
        border: OutlineInputBorder(),
    ),
    debounceTime: 800,
    countries: ["us", "ca", "bd"], // Filter search to specific countries
    isReady: true,
    itemClick: (Prediction prediction) {
        addressController.text = prediction.description ?? "";
        // Extract latitude, longitude or other address fields
    },
)
```
