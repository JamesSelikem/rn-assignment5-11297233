# rn-assignment5-11297233

# My React Native Mobile Application
## Overview
This mobile application is built using React Native and provides auser experience with features such as transaction tracking, quick actions (Sent, Receive, Loan, Topup), and a settings screen. It also supports theme switching between light and dark modes.

## Features
Home Screen: Displays a welcome message, user profile, recent transactions, and quick action buttons.
Settings Screen: Allows users to customize their preferences and switch between light and dark themes.
Theme Switching: Users can toggle between light and dark themes for better readability and comfort.
Navigation: Smooth navigation between home and settings screens using React Navigation

## Structure
App.js: Sets up the navigation container and stack navigator.
screens/HomeScreen.js: Defines the layout and style for the home screen.
screens/SettingsScreen.js: Defines the layout and style for the settings screen.
context/ThemeContext.js: Provides context for managing the light and dark themes.
assets/: Contains image assets used in the application.

## Home Screen
The home screen displays user profile information, recent transactions, and quick action buttons.

## HomeScreen Component (HomeScreen.js)
The HomeScreen component is created using a functional component in React. It uses the useState hook to manage the list of transactions and the FlatList component to render the list of transactions. The layout is styled using the StyleSheet API provided by React Native.

## Settings Screen
The settings screen allows users to toggle between light and dark themes.

## SettingsScreen Component (SettingsScreen.js)
The SettingsScreen component is also created as a functional component. It uses the useContext hook to access the theme context and provides buttons for navigation and theme switching.

## Theme Switching
The theme switching feature is implemented using React's Context API and the useState hook. The ThemeContext provides a way to toggle between light and dark themes and is accessed in components using the useContext hook.

## Applying Themes in Screens
Components use the useContext hook to access the current theme and apply styles conditionally.
