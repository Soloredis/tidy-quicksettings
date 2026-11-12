# Tidy Quick Settings

A GNOME Shell extension that lets you choose which Quick Settings items and top bar icons to hide.

Hidden items are removed from the layout instead of being shrunk or made invisible, so they leave no gaps and GNOME can't make them reappear.

## Features

- Hide top bar icons: network, Bluetooth, volume, power, power mode, Do Not Disturb, Night Light and more
- Hide privacy indicators (microphone, camera, location, screen sharing), with a warning in settings
- Hide the top row buttons: Screenshot, Settings, Lock and the Power menu
- Hide sliders and toggles: volume, brightness, Wi-Fi, Bluetooth, Night Light, Dark Style and more
- Changes apply instantly, with no logout needed
- Turning the extension off restores everything

## Requirements

GNOME Shell 51

## Installation from source

```bash
git clone https://github.com/Soloredis/tidy-quicksettings.git ~/.local/share/gnome-shell/extensions/tidy-quicksettings@soloredis.github.io
glib-compile-schemas ~/.local/share/gnome-shell/extensions/tidy-quicksettings@soloredis.github.io/schemas/
```

Log out and back in, then enable it:

```bash
gnome-extensions enable tidy-quicksettings@soloredis.github.io
```

Open the settings from Extension Manager, or with:

```bash
gnome-extensions prefs tidy-quicksettings@soloredis.github.io
```

## Known limitations

- Toggles added by other extensions can't be hidden yet.
- The extension relies on GNOME Shell internals, so a new GNOME release may need an update.

## Status

This is a personal project. I couldn't find a single extension that hides both top bar icons and Quick Settings items cleanly on GNOME 51.

AI assistance was used for this extension, as I knew nothing about GNOME Shell development when I started.

I code as a hobby, mostly mods for video games and Unity projects. My skill is mostly in C# and Unity Engine.

## License

GPL-2.0-or-later
