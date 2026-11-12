// Every item the user can hide, grouped as they appear in the preferences window.
// key:       the setting name in the schema
// className: the item's class name in Quick Settings (found with Looking Glass)
// title:     the label shown in the preferences window
export const GROUPS = [
    {
        title: 'Top Bar Icons',
        items: [
            {key: 'hide-icon-network', indicator: '_network', title: 'Network'},
            {key: 'hide-icon-bluetooth', indicator: '_bluetooth', title: 'Bluetooth'},
            {key: 'hide-icon-volume', indicator: '_volumeOutput', title: 'Volume'},
            {key: 'hide-icon-power', indicator: '_system', title: 'Power'},
            {key: 'hide-icon-power-mode', indicator: '_powerProfiles', title: 'Power Mode'},
            {key: 'hide-icon-do-not-disturb', indicator: '_doNotDisturb', title: 'Do Not Disturb'},
            {key: 'hide-icon-night-light', indicator: '_nightLight', title: 'Night Light'},
            {key: 'hide-icon-airplane-mode', indicator: '_rfkill', title: 'Airplane Mode'},
            {key: 'hide-icon-auto-rotate', indicator: '_autoRotate', title: 'Rotation Lock'},
            {key: 'hide-icon-thunderbolt', indicator: '_thunderbolt', title: 'Thunderbolt'},
            {key: 'hide-icon-unsafe-mode', indicator: '_unsafeMode', title: 'Unsafe Mode'},
        ],
    },
    {
        title: 'Privacy Indicators',
        description: 'These show when an app is using your microphone, camera, location or screen. Hiding them means you won\'t see that.',
        items: [
            {key: 'hide-icon-microphone', indicator: '_volumeInput', title: 'Microphone'},
            {key: 'hide-icon-camera', indicator: '_camera', title: 'Camera'},
            {key: 'hide-icon-location', indicator: '_location', title: 'Location'},
            {key: 'hide-icon-screen-sharing', indicator: '_remoteAccess', title: 'Screen Sharing'},
        ],
    },
    {
        title: 'Top Row Buttons',
        items: [
            {key: 'hide-screenshot', className: 'ScreenshotItem', title: 'Screenshot'},
            {key: 'hide-settings', className: 'SettingsItem', title: 'Settings'},
            {key: 'hide-lock', className: 'LockItem', title: 'Lock'},
            {key: 'hide-shutdown', className: 'ShutdownItem', title: 'Power Menu'},
        ],
    },
    {
        title: 'Sliders',
        items: [
            {key: 'hide-volume', className: 'OutputStreamSlider', title: 'Volume'},
            {key: 'hide-microphone', className: 'InputStreamSlider', title: 'Microphone'},
            {key: 'hide-brightness', className: 'BrightnessItem', title: 'Brightness'},
        ],
    },
    {
        title: 'Toggles',
        items: [
            {key: 'hide-wired', className: 'NMWiredToggle', title: 'Wired'},
            {key: 'hide-wifi', className: 'NMWirelessToggle', title: 'Wi-Fi'},
            {key: 'hide-mobile-broadband', className: 'NMModemToggle', title: 'Mobile Broadband'},
            {key: 'hide-bluetooth-tethering', className: 'NMBluetoothToggle', title: 'Bluetooth Tethering'},
            {key: 'hide-vpn', className: 'NMVpnToggle', title: 'VPN'},
            {key: 'hide-bluetooth', className: 'BluetoothToggle', title: 'Bluetooth'},
            {key: 'hide-power-mode', className: 'PowerProfilesToggle', title: 'Power Mode'},
            {key: 'hide-night-light', className: 'NightLightToggle', title: 'Night Light'},
            {key: 'hide-dark-style', className: 'DarkModeToggle', title: 'Dark Style'},
            {key: 'hide-do-not-disturb', className: 'DoNotDisturbToggle', title: 'Do Not Disturb'},
            {key: 'hide-keyboard-brightness', className: 'KeyboardBrightnessToggle', title: 'Keyboard Brightness'},
            {key: 'hide-airplane-mode', className: 'RfkillToggle', title: 'Airplane Mode'},
            {key: 'hide-auto-rotate', className: 'RotationToggle', title: 'Auto Rotate'},
            {key: 'hide-background-apps', className: 'BackgroundAppsToggle', title: 'Background Apps'},
        ],
    },
];

// All items in one flat list, like LINQ's SelectMany.
export const ALL_ITEMS = GROUPS.flatMap(group => group.items);