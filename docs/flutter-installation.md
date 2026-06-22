---
sidebar_position: 2
---

# Flutter Installation A-Z

This comprehensive guide walks you through setting up the Flutter development environment from scratch to compile and run the **Hana Go** mobile application on Android and iOS.

---

## 1. System Requirements

Before starting, ensure your development machine meets the minimum requirements:

* **Windows**: Windows 10 or later (64-bit), x86-64 based.
* **macOS**: macOS 10.15 (Catalina) or later, Apple Silicon (M1/M2/M3) or Intel.
* **Linux**: Ubuntu 20.04 LTS or later (64-bit).
* **Disk Space**: At least 10 GB of free space (excluding IDE/Android Studio).

---

## 2. Install Flutter SDK

### Step 1: Download the SDK
1. Go to the [Official Flutter website](https://docs.flutter.dev/get-started/install).
2. Download the latest stable release package for your operating system.

### Step 2: Extract the Files
Extract the zip file and place the `flutter` folder in a desired installation path (e.g., `C:\src\flutter` on Windows, or `~/development/flutter` on macOS/Linux).

> [!WARNING]
> Do **not** install Flutter in directories like `C:\Program Files\`, which require elevated admin privileges.

### Step 3: Update PATH Variable
You need to add Flutter to your system's PATH variable to run flutter commands in the terminal:

#### For Windows:
1. Search for "Edit the system environment variables" in Windows Search.
2. Click **Environment Variables**.
3. Under **User variables**, select `Path` and click **Edit**.
4. Click **New** and add the full path to the `flutter/bin` directory (e.g., `C:\src\flutter\bin`).
5. Click **OK** to save.

#### For macOS & Linux:
Add the following line to your terminal configuration file (usually `~/.zshrc` or `~/.bashrc`):
```bash
export PATH="$PATH:$HOME/development/flutter/bin"
```
Run `source ~/.zshrc` (or restart the terminal) to apply the changes.

---

## 3. Configure Android Setup

To build and run the Hana Go app on Android devices or emulators, follow these steps:

### Step 1: Install Android Studio
1. Download and install [Android Studio](https://developer.android.com/studio).
2. Follow the setup wizard to install the **Android SDK**, **Android SDK Platform-Tools**, and **Android SDK Build-Tools**.

### Step 2: Set up SDK Command-line Tools
1. Open Android Studio.
2. Go to **Settings** (or **Preferences** on Mac) -> **Languages & Frameworks** -> **Android SDK**.
3. Select the **SDK Tools** tab.
4. Check **Android SDK Command-line Tools (latest)** and click **Apply**.

### Step 3: Accept SDK Licenses
Run the following command in your terminal and accept all licenses by typing `y`:
```bash
flutter doctor --android-licenses
```

---

## 4. Configure iOS Setup (macOS only)

To compile the app for iOS, you must use a Mac:

### Step 1: Install Xcode
1. Install [Xcode](https://developer.apple.com/xcode/) from the Mac App Store.
2. Open Xcode to accept the license agreement and let it download necessary components.
3. Configure the command line tools in Xcode by running:
   ```bash
   sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
   sudo xcodebuild -runFirstLaunch
   ```

### Step 2: Install CocoaPods
CocoaPods is required to manage iOS native dependencies:
```bash
sudo gem install cocoapods
```
*(If you are on Apple Silicon, you might need to run `arch -x86_64 sudo gem install cocoapods`).*

---

## 5. Verify Setup using Flutter Doctor

Open a new terminal window and run:
```bash
flutter doctor
```
This tool checks your environment and displays a report of the status of your installation. Ensure all checkmarks are green (or solve any highlighted warnings).

---

## 6. Run the Hana Go Project

Once your environment is set up:

1. Clone or navigate to the project directory:
   ```bash
   cd /path/to/hana_go_mobile
   ```
2. Fetch the packages and dependencies:
   ```bash
   flutter pub get
   ```
3. Run the application:
   * **Android Emulator/Simulator**: Open the simulator.
   * Launch the app using:
     ```bash
     flutter run
     ```
