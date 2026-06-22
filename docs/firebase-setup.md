---
sidebar_position: 5
---

# Firebase & Push Notifications Setup

This guide details how to integrate **Firebase** into the **Hana Go** mobile application to enable cloud features, push notifications, and device messaging.

---

## 1. Firebase Project Creation

1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add Project** (or **Create a project**).
3. Enter your project name (e.g., `Hana Go Mobile App`) and click **Continue**.
4. Configure Google Analytics preferences according to your requirements and click **Create Project**.

---

## 2. Registering Platform Clients

### Registering the Android Client
1. On the Firebase Project Overview page, click the **Android** icon.
2. Enter your Android Package Name (e.g., `com.company.hanago`) in the **Android package name** field.
3. *(Optional)* Enter an App Nickname.
4. Click **Register App**.
5. Download the `google-services.json` file.
6. Move the downloaded file into your Flutter project at the following path:
   📁 Path: [android/app/google-services.json](file:///d:/App_project/hanaGo/android/app/google-services.json)

---

### Registering the iOS Client
1. On the Firebase Project Overview page, click **Add App** and select **iOS**.
2. Enter your iOS Bundle Identifier (e.g., `com.company.hanago`) in the **iOS Bundle ID** field.
3. Click **Register App**.
4. Download the `GoogleService-Info.plist` file.
5. Open the iOS folder in Xcode (`ios/Runner.xcworkspace`).
6. Right-click the `Runner` folder in the Xcode project navigator, select **Add Files to "Runner"**, select the downloaded `GoogleService-Info.plist` file, check **Copy items if needed**, and click **Add**.

:::warning iOS File Setup Warning
Do **not** simply drag-and-drop the `GoogleService-Info.plist` file into the folder using VS Code or Finder. If the plist file is not added through the Xcode interface, the build configuration reference will not be compiled, causing the iOS app to crash instantly at runtime.
:::

---

## 3. Configuring Apple Push Notification service (APNs)

To receive push notifications on iOS devices:

### Step 1: Request APNs Keys
1. Go to your [Apple Developer Account](https://developer.apple.com/account/).
2. Navigate to **Certificates, Identifiers & Profiles** -> **Keys**.
3. Create a new key, check **Apple Push Notifications service (APNs)**, and download the `.p8` key file.
4. Note your **Key ID** and **Team ID**.

### Step 2: Upload APNs Key to Firebase
1. In the Firebase Console, click the gear icon next to Project Overview and select **Project Settings**.
2. Select the **Cloud Messaging** tab.
3. Under **Apple app share configuration**, upload your APNs auth key (`.p8` file).
4. Input your **Key ID** and **Team ID**.

### Step 3: Enable Capabilities in Xcode
1. Open the project in Xcode.
2. Select the root **Runner** project, and select the **Signing & Capabilities** tab.
3. Click **+ Capability** and add the following:
   *   **Push Notifications**
   *   **Background Modes** (Ensure **Background Fetch** and **Remote notifications** checkboxes are checked).

---

## 4. Subscriptions & Notification Topics

Notification logic is handled by the Notification Service:

📁 File path: [lib/services/notification_service.dart](file:///d:/App_project/hanaGo/lib/services/notification_service.dart)

When initialized, the service automatically requests notification permissions and synchronizes topic subscriptions based on the user's settings. The app subscribes or unsubscribes to these Firebase Cloud Messaging (FCM) topics:

| Topic Name | Settings Key | Description |
| :--- | :--- | :--- |
| `orders` | `order_status` | Updates on checkout orders processing and delivery milestones. |
| `promotions` | `promotions` | Marketing notification newsletters, deals, and discounts. |
| `vouchers` | `expiring_vouchers` | Reminders for saved coupon codes reaching expiration. |
| `payments` | `payment_confirmations` | Receipts and credit card wallet payment transaction logs. |

For custom campaigns, you can target specific topics directly through the Firebase Cloud Messaging console under the **Campaigns** tab.
