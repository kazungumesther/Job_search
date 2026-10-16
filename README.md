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

I spent most of my time working with **Flutter and Dart**, transitioning into this codebase brought a few interesting paradigm shifts. Here is a quick look at what feels different:

### 1. Embracing Hooks over Stateful Widgets
In Flutter, managing UI states usually means relying on `setState()`, `Providers`, or complex state blocks. In React Native, everything is component-driven via **React Hooks**. Take a look at `useTheme.ts` in this project—it naturally hooks right into the system's `useColorScheme` to switch styles seamlessly behind the scenes without heavy boilerplate code.

### 2. Styling with StyleSheets vs. Widget Trees
Instead of wrapping deep nested widget structures like `Padding -> Container -> Center -> Text` with direct constructor properties, React Native splits the layout structure from the design rules. You write clean UI structures (`View`, `Text`) and style them using **JavaScript objects that mirror CSS styling rules**. It relies fully on **Flexbox**, which handles layouts similarly to Flutter's `Row` and `Column` layouts but uses universal web terminology.

### 3. File-Based Routing (No More Router Config Graphs)
Setting up navigation in Flutter typically requires configuring a central router configuration or managing explicit page transitions. This project uses **Expo Router**, which turns routing into a completely **file-system based process** (just like Next.js for the web). Any file structure you drop inside the `app/` folder—like `app/(tabs)/job`—instantly becomes a live route in your app navigation without manual setup.

### 4. JavaScript Engine vs. Compiled Machine Code
While Flutter compiles your Dart source code straight down to raw, native ARM machine code before running, React Native utilizes an embedded **JavaScript engine (Hermes)**. This engine dynamically translates your components, letting you build flexible, data-driven interfaces that scale efficiently.
