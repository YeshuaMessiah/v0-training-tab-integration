'use client';

import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Keyboard } from '@capacitor/keyboard';
import { SplashScreen } from '@capacitor/splash-screen';
import { App } from '@capacitor/app';

// Check if running in native app
export const isNative = Capacitor.isNativePlatform();
export const isIOS = Capacitor.getPlatform() === 'ios';
export const isAndroid = Capacitor.getPlatform() === 'android';

// Haptic feedback
export const hapticLight = async () => {
  if (isNative) {
    await Haptics.impact({ style: ImpactStyle.Light });
  }
};

export const hapticMedium = async () => {
  if (isNative) {
    await Haptics.impact({ style: ImpactStyle.Medium });
  }
};

export const hapticHeavy = async () => {
  if (isNative) {
    await Haptics.impact({ style: ImpactStyle.Heavy });
  }
};

// Status bar configuration
export const configureStatusBar = async () => {
  if (isNative) {
    await StatusBar.setStyle({ style: Style.Dark });
    if (isAndroid) {
      await StatusBar.setBackgroundColor({ color: '#0A1628' });
    }
  }
};

// Hide splash screen
export const hideSplashScreen = async () => {
  if (isNative) {
    await SplashScreen.hide();
  }
};

// Keyboard listeners
export const setupKeyboardListeners = () => {
  if (isNative) {
    Keyboard.addListener('keyboardWillShow', (info) => {
      document.body.style.setProperty('--keyboard-height', `${info.keyboardHeight}px`);
    });

    Keyboard.addListener('keyboardWillHide', () => {
      document.body.style.setProperty('--keyboard-height', '0px');
    });
  }
};

// Back button handler for Android
export const setupBackButtonHandler = (onBack: () => void) => {
  if (isNative) {
    App.addListener('backButton', ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        onBack();
      }
    });
  }
};

// App state change listener
export const setupAppStateListener = (
  onResume: () => void,
  onPause: () => void
) => {
  if (isNative) {
    App.addListener('appStateChange', ({ isActive }) => {
      if (isActive) {
        onResume();
      } else {
        onPause();
      }
    });
  }
};

// Initialize all Capacitor features
export const initializeCapacitor = async () => {
  if (isNative) {
    await configureStatusBar();
    await hideSplashScreen();
    setupKeyboardListeners();
  }
};
