# FrontlinesFaith - iOS App Store Guide (No Coding Required!)

Everything is already built and configured. You just need to open it in Xcode on a Mac and submit.

---

## What You Need

1. **A Mac computer** (required for Xcode)
2. **Xcode** - Free from the Mac App Store
3. **Apple Developer Account** - $99/year at [developer.apple.com/programs](https://developer.apple.com/programs/enroll/)

---

## Step 1: Download the Project

Click the **three dots menu** (top right of v0) and select **"Download ZIP"**

Unzip the file on your Mac.

---

## Step 2: Open in Xcode

1. Open Finder and navigate to your unzipped folder
2. Go into the `ios` folder, then the `App` folder
3. Double-click **App.xcodeproj** to open in Xcode

---

## Step 3: Sign Your App

1. In Xcode, click on **"App"** in the left sidebar (the blue icon at the top)
2. Click on **"Signing & Capabilities"** tab
3. Check the box **"Automatically manage signing"**
4. Click on **"Team"** dropdown and select your Apple Developer account
   - If you don't see your account, go to Xcode menu > Settings > Accounts and add it

---

## Step 4: Test on Your iPhone (Optional but Recommended)

1. Plug your iPhone into your Mac with a USB cable
2. In Xcode, click on the device selector (top of screen, says "Any iOS Device")
3. Select your iPhone from the list
4. Click the **Play button** (triangle) to build and run
5. On your iPhone, go to Settings > General > VPN & Device Management and trust the developer

---

## Step 5: Create Your App in App Store Connect

1. Go to [appstoreconnect.apple.com](https://appstoreconnect.apple.com)
2. Click the **+** button > **New App**
3. Fill in:
   - **Platforms**: iOS
   - **Name**: FrontlinesFaith
   - **Primary Language**: English (U.S.)
   - **Bundle ID**: Select `com.frontlinesfaith.app`
   - **SKU**: `frontlinesfaith-2024` (any unique text)
4. Click **Create**

---

## Step 6: Fill in App Details

### App Information
- **Subtitle**: Armed with Truth, Rooted in Christ
- **Category**: Reference (or Education > Educational)

### Description (copy this):
```
FrontlinesFaith equips Christians for respectful, scholarly dialogue with Muslims.

FEATURES:

• DEFEND - Responses to common challenges about Christianity including Trinity, Jesus' Divinity, Biblical Reliability, and more

• ADVANCE - Thoughtful questions about Islamic teachings for respectful conversations

• SCRIPTURE LIBRARY - Key Bible passages organized by topic

• KNOW ISLAM - Understand the Five Pillars, Six Articles of Faith, and Islamic terminology

• QUICK DRAW - Conversation starters and one-liners

Built on 1 Peter 3:15: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect."
```

### Keywords:
```
Christian,apologetics,Islam,dialogue,faith,Bible,Scripture,Trinity,Jesus,theology
```

### Privacy
- For "Data Collection" - select **"No, we do not collect data"** (the app works entirely offline)

---

## Step 7: Take Screenshots

You need screenshots in specific sizes. The easiest way:

1. In Xcode, go to **Window > Devices and Simulators**
2. Or use the **Simulator** app (comes with Xcode)
3. Run the app on these simulators and take screenshots:
   - iPhone 15 Pro Max (6.7-inch)
   - iPhone 8 Plus (5.5-inch)
   - iPad Pro 12.9-inch (if you want iPad too)

To screenshot: Press **Cmd + S** in the simulator

Upload these to App Store Connect under **App Store > Screenshots**

---

## Step 8: Upload Your App to Apple

1. In Xcode, go to **Product** menu > **Archive**
2. Wait for it to build (may take a few minutes)
3. When done, the **Organizer** window opens
4. Click **Distribute App**
5. Choose **App Store Connect** > **Upload**
6. Click **Next** through the options (defaults are fine)
7. Click **Upload**

---

## Step 9: Submit for Review

1. Back in App Store Connect, your build will appear in a few minutes
2. Click on it to select it
3. Fill in any remaining required fields (marked with red)
4. Click **Submit for Review**

Apple typically reviews within 24-48 hours.

---

## You're Done!

Once approved, your app will be live on the App Store for your brothers and sisters in Christ to download.

---

## Troubleshooting

**"No accounts with signing" error**
- Go to Xcode > Settings > Accounts and sign in with your Apple ID

**"Provisioning profile" error**
- Make sure "Automatically manage signing" is checked
- Select your Team

**App crashes on device**
- Make sure you're using iOS 14 or newer

**Build takes forever**
- First build is slow - be patient (10-15 minutes)

---

*"Go therefore and make disciples of all nations..."* - Matthew 28:19

May God bless your ministry!
