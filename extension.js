import GLib from 'gi://GLib';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import {ALL_ITEMS} from './items.js';

// Buttons in the top row of the Quick Settings menu to remove.
// Add 'ScreenshotItem' here if you also want the screenshot button gone.
const REMOVE_MENU_BUTTONS = ['LockItem', 'ShutdownItem', 'SettingsItem'];

// Remove the power/battery icon from the top bar.
const REMOVE_POWER_INDICATOR = true;

export default class TidyQuickSettings extends Extension {
    enable() {
        this._settings = this.getSettings();
        this._removed = [];
        this._qs = Main.panel.statusArea.quickSettings;

        // Quick Settings builds its contents asynchronously at startup,
        // so wait until it exists (giving up after 10 seconds).
        let tries = 0;
        this._pollId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, () => {
            if (this._qs._system) {
                this._pollId = 0;
                this._apply();
                this._settingsId = this._settings.connect('changed', () => {
                    this._restore();
                    this._apply();
                });
                return GLib.SOURCE_REMOVE;
            }
            if (++tries >= 100) {
                console.warn(`${this.uuid}: Quick Settings not found, giving up`);
                this._pollId = 0;
                return GLib.SOURCE_REMOVE;
            }
            return GLib.SOURCE_CONTINUE;
        });
    }

    // Unparent the actor instead of hiding or shrinking it, so it takes up
    // no layout space and GNOME's visibility bindings can't bring it back.
    _detach(actor) {
        const parent = actor?.get_parent();
        if (!parent)
            return;
        const index = parent.get_children().indexOf(actor);
        parent.remove_child(actor);
        this._removed.push({actor, parent, index});
    }

    // Look up an item by class name and check whether its setting says to hide it.
    _shouldHide(className) {
        const item = ALL_ITEMS.find(i => i.className === className);
        return item !== undefined && this._settings.get_boolean(item.key);
    }

    _apply() {
        const system = this._qs._system;

        for (const item of ALL_ITEMS) {
            if (item.indicator && this._settings.get_boolean(item.key))
                this._detach(this._qs[item.indicator]);
        }

        const row = system._systemItem?.child;
        for (const child of row?.get_children() ?? []) {
            if (this._shouldHide(child.constructor.name))
                this._detach(child);
        }

        const grid = this._qs.menu?._grid;
        for (const child of grid?.get_children() ?? []) {
            if (this._shouldHide(child.constructor.name))
                this._detach(child);
        }
    }

    _restore() {
        // Restore in reverse order so original positions line up.
        for (const {actor, parent, index} of this._removed.reverse())
            parent.insert_child_at_index(actor, index);
        this._removed = [];
    }

    disable() {
        if (this._settingsId) {
            this._settings.disconnect(this._settingsId);
            this._settingsId = 0;
        }
        this._settings = null;
        if (this._pollId) {
            GLib.source_remove(this._pollId);
            this._pollId = 0;
        }
        this._restore();
        this._qs = null;
    }
}
