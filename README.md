**Screenshots**
<img width="720" height="1600" alt="Screenshot_20261019_084756_Expo Go" src="https://github.com/user-attachments/assets/7820fe70-9896-45c1-af7d-f54b1f94087d" />
<img width="720" height="1600" alt="Screenshot_20261019_084738_Expo Go" src="https://github.com/user-attachments/assets/825d45e7-7f2c-4e74-9d6e-fbafe8951b0e" />
<img width="720" height="1600" alt="Screenshot_20261019_083406_Expo Go" src="https://github.com/user-attachments/assets/fabba31d-2c6c-47a4-aaf7-84d7a4a000ee" />
<img width="720" height="1452" alt="Screenshot_20261019_084204_Expo Go" src="https://github.com/user-attachments/assets/740aeb3c-be0b-4b05-9e2b-2dbd2903a4db" />

**Screen record**
[Screencast from 2026-10-19 08-53-41.webm](https://github.com/user-attachments/assets/eca22bad-96a4-40b5-bf9e-6b5dc17c4895)


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
  
4. **Test the App Live (Expo Go)**
   Click the link below or scan the QR code on the landing page to open and interact with the application on your physical device:
[ https://expo.dev/preview/update?message=Initial+commit%0A%0AGenerated+by+create-expo+5.1.5.&updateRuntimeVersion=1.0.0&createdAt=2026-10-19T05%3A03%3A54.053Z&slug=exp&projectId=ca2c9157-b631-44b0-a5ab-bf14d198a014&group=a126e063-caf2-45a9-bd52-bb06cb895c97]

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
