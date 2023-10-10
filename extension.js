import SwitcherPopup from "resource:///org/gnome/shell/ui/switcherPopup.js"

const init = () => {
}

const enable = () => {
    SwitcherPopup.POPUP_DELAY_TIMEOUT = 0;
}

const disable = () => {
    SwitcherPopup.POPUP_DELAY_TIMEOUT = 150;
}