import Adw from 'gi://Adw';
import Gio from 'gi://Gio';
import {ExtensionPreferences} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import {GROUPS} from './items.js';

export default class TidyQuickSettingsPrefs extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        window._settings = this.getSettings();

        const page = new Adw.PreferencesPage();
        window.add(page);

        for (const {title, description, items} of GROUPS) {
            const group = new Adw.PreferencesGroup({title, description: description ?? 'Switch on to hide'});
            page.add(group);

            for (const item of items) {
                const row = new Adw.SwitchRow({title: item.title});
                group.add(row);
                window._settings.bind(item.key, row, 'active', Gio.SettingsBindFlags.DEFAULT);
            }
        }
    }
}