# FrontlinesFaith - iOS App Store Submission Guide

This guide walks you through building and submitting FrontlinesFaith to the Apple App Store.

## Prerequisites

1. **Mac computer** with macOS Monterey or later
2. **Xcode 15+** installed from the Mac App Store
3. **Apple Developer Account** ($99/year) - [developer.apple.com](https://developer.apple.com)
4. **Node.js 18+** and **pnpm** installed
5. **CocoaPods** installed (`sudo gem install cocoapods`)

## Step 1: Clone and Setup

```bash
# Clone your project from GitHub or download from v0
git clone <your-repo-url>
cd frontlinesfaith

# Install dependencies
pnpm install
```

## Step 2: Build the Web App

```bash
# Build the static export
pnpm build
```

This creates the `out/` directory with your static site.

## Step 3: Initialize Capacitor iOS

```bash
# Add iOS platform
pnpm cap:add:ios

# Sync web assets to native project
pnpm cap:sync
```

## Step 4: Configure iOS Project

```bash
# Open in Xcode
pnpm cap:open:ios
```

In Xcode:

### 4.1 Set Bundle Identifier
1. Select the **App** target in the sidebar
2. Go to **Signing & Capabilities** tab
3. Set **Bundle Identifier** to: `com.frontlinesfaith.app`
4. Select your **Team** (your Apple Developer account)

### 4.2 Set App Version
1. Go to **General** tab
2. Set **Version** to: `1.0.0`
3. Set **Build** to: `1`

### 4.3 Configure App Icons
1. In Xcode, go to **Assets.xcassets** > **AppIcon**
2. Drag your app icons into the appropriate slots
3. Required sizes: 20x20, 29x29, 40x40, 60x60, 76x76, 83.5x83.5, 1024x1024

### 4.4 Configure Launch Screen
1. Open **LaunchScreen.storyboard**
2. Set background color to #0A1628 (navy)
3. Add your splash image centered

### 4.5 Set Deployment Target
1. Select the project in sidebar
2. Set **iOS Deployment Target** to: `14.0` (or higher)

## Step 5: Configure Privacy Settings

In Xcode, open **Info.plist** and add if needed:

```xml
<key>ITSAppUsesNonExemptEncryption</key>
<false/>
```

This declares you don't use non-exempt encryption.

## Step 6: Test on Device

1. Connect your iPhone via USB
2. Select your device in Xcode's device picker
3. Click **Run** (⌘R)
4. Trust the developer certificate on your device if prompted:
   - Settings > General > VPN & Device Management

## Step 7: Archive for App Store

1. In Xcode, select **Product** > **Archive**
2. Wait for the archive to complete
3. In the **Organizer** window, click **Distribute App**
4. Select **App Store Connect** > **Upload**
5. Follow the prompts to upload

## Step 8: App Store Connect Setup

Go to [appstoreconnect.apple.com](https://appstoreconnect.apple.com):

### 8.1 Create New App
1. Click **+** > **New App**
2. Fill in:
   - **Platform**: iOS
   - **Name**: FrontlinesFaith
   - **Primary Language**: English (US)
   - **Bundle ID**: com.frontlinesfaith.app
   - **SKU**: frontlinesfaith-001

### 8.2 App Information
- **Category**: Reference or Education
- **Content Rights**: Yes, I own or have rights to all content

### 8.3 Pricing and Availability
- **Price**: Free
- **Availability**: All countries (or select specific ones)

### 8.4 App Privacy
Complete the privacy questionnaire:
- **Data Collection**: No data collected (this app works offline)

### 8.5 Screenshots
Required sizes:
- **6.7" Display** (iPhone 15 Pro Max): 1290 x 2796 pixels
- **6.5" Display** (iPhone 11 Pro Max): 1284 x 2778 pixels
- **5.5" Display** (iPhone 8 Plus): 1242 x 2208 pixels

Take screenshots in the iOS Simulator for each size.

### 8.6 App Description

**Subtitle** (30 chars):
```
Armed with Truth, Rooted in Christ
```

**Description**:
```
FrontlinesFaith equips Christians for respectful, scholarly dialogue with Muslims. Whether you're answering tough questions about your faith or seeking to understand Islamic beliefs, this app provides the tools you need.

FEATURES:

DEFEND - Responses to common challenges about Christianity:
• Trinity & Monotheism
• Jesus' Divinity
• Biblical Reliability
• Crucifixion & Salvation
• Original Sin

ADVANCE - Thoughtful questions about Islamic teachings:
• Quran Preservation
• Muhammad's Prophethood
• Islamic Theology
• Historical Questions

SCRIPTURE LIBRARY - Key Bible passages organized by topic:
• Trinity
• Jesus is God
• Salvation by Grace
• The Cross
• Prophecy Fulfilled

KNOW ISLAM - Understand Islamic beliefs:
• Five Pillars
• Six Articles of Faith
• Glossary of Terms

QUICK DRAW - Conversation starters and one-liners for respectful dialogue

Built on 1 Peter 3:15: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect."
```

**Keywords**:
```
Christian,apologetics,Islam,dialogue,faith,Bible,Scripture,Trinity,Jesus,theology
```

### 8.7 Review Information
- **Contact Information**: Your email and phone
- **Notes**: "This app provides educational content for interfaith dialogue. All content is respectful and scholarly in nature."

## Step 9: Submit for Review

1. Select your uploaded build
2. Click **Submit for Review**
3. Answer the export compliance questions
4. Submit!

Review typically takes 24-48 hours.

## Updating Your App

For future updates:

```bash
# Make changes to your code
# Then rebuild and sync
pnpm build
pnpm cap:sync

# Open Xcode, increment build number, archive and upload
pnpm cap:open:ios
```

## Troubleshooting

### Build Errors
```bash
# Clean and rebuild
cd ios/App
pod deintegrate
pod install
```

### Code Signing Issues
- Ensure your Apple Developer account is active
- Check that bundle ID matches your App Store Connect app
- Revoke and regenerate certificates if needed

### White Screen on Launch
- Verify `out/` directory exists after build
- Run `pnpm cap:sync` again
- Check capacitor.config.ts webDir setting

## Support

For issues with:
- **Capacitor**: [capacitorjs.com/docs](https://capacitorjs.com/docs)
- **App Store**: [developer.apple.com/support](https://developer.apple.com/support)
- **This App**: Create an issue in your GitHub repository

---

May God bless your ministry and use this app to further His kingdom!

*"Go therefore and make disciples of all nations..."* - Matthew 28:19
