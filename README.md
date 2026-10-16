# React Native Job Search App

A mobile application built with **React Native**, **Expo Router**, and **TypeScript** for searching and managing job applications.

---

## How to Run the Project

### Prerequisites
Make sure you have the following installed on your machine:
* **Node.js** (v18 or higher recommended)
* **npm** or **yarn**
* **Expo Go** app installed on your physical device (iOS/Android), or an Android Emulator / iOS Simulator set up on your computer.

### Setup Steps

1. **Install Dependencies**
   Navigate to the root directory of the project and install the required npm packages:
   ```bash
   npm install
   ```

2. **Start the Development Server**
   Start the Expo bundler:
   ```bash
   npx expo start
   ```
   *Alternative command used in this repo:*
   ```bash
   npm run start
   ```

3. **Launch the Application**
   Once the Metro Bundler starts in your terminal, press one of the following keys to open the app:
   * Press `a` for **Android** Emulator.
   * Press `i` for **iOS** Simulator (Mac only).
   * Scan the **QR code** printed in the terminal using your phone's camera (iOS) or the Expo Go app (Android) to run it on a physical device.

---

##  Paradigm Shift: React Native vs. Flutter

If your primary background is in **Flutter (Dart)**, working in this React Native codebase introduces a few distinct architectural and workflow differences:

### 1. State Management & Hooks
* **From Flutter:** You might be used to `setState()`, `BloC`, `Provider`, or `Riverpod`.
* **In React Native:** State is heavily component-driven using **React Hooks**. For example, the `useTheme.ts` hook in this project utilizes standard React hooks (`useColorScheme`) to dynamically switch structural styles based on system dark/light preferences.

### 2. Styling UI (StyleSheets vs. Declarative Widgets)
* **From Flutter:** Everything is a Widget (e.g., `Container`, `Padding`, `ThemeData`). You style components directly through constructor parameters.
* **In React Native:** UI uses basic structural layout components (`View`, `Text`) combined with **JavaScript objects mimicking CSS** layout properties (`StyleSheet.create`). Layouts rely entirely on **Flexbox**, which functions similarly to Flutter’s `Flex`, `Column`, and `Row` but follows web-standard naming conventions.

### 3. File-Based Routing (Expo Router)
* **From Flutter:** Routing is typically explicit, handled via a central router configuration utility (like `GoRouter` or manual material page routes).
* **In React Native (Expo):** This project utilizes **Expo Router** inside the `app/` directory. Routing is entirely **file-system based** (similar to Next.js on the web). Creating a folder path like `app/(tabs)/job` automatically maps to a tab navigation route without needing manual route configuration graphs.

### 4. Compilation & The Runtime Environment
* **From Flutter:** Your Dart code compiles down directly to native ARM machine code ahead-of-time (AOT). 
* **In React Native:** The application runs a **JavaScript engine (like Hermes)** embedded inside a native binary wrapper. The layout engine communicates with underlying native view hierarchies across an asynchronous layer.
