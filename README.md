# Pop Off
A browser extension to make popups open as tabs instead of separate, feature-reduced windows.

## Description
Do popup windows annoy you?
Are they too small?
Do you want those windows to let you edit the URL or click your bookmarks?
Would you prefer a regular browser window?
Here is your solution!
Open all those popups as regular tabs.
Make them behave like any other tab, just like you always wanted!

![Screenshot of a popup window with arrows pointing out the minimal URL bar](images/screenshot-1-1280x800.png)

## Install
### Chrome
[Install](https://chrome.google.com/webstore/detail/pop-off/jecpgjkijfbpjecjnlgojaohghgccmfd) from the Chrome Web Store.
Alternatively, install from source:
- Download this repository.
- Navigate to [`chrome://extensions`](chrome://extensions).
- Click "Load unpacked".
- Select the directory containing this code.

### Firefox
[Install](https://addons.mozilla.org/en-US/firefox/addon/pop-off/) from AMO.
Alternatively, install from source (only in Firefox Developer Edition):
- Enable unsigned extensions:
	- Navigate to [`about:config`](about:config).
	- Click "Accept the Risk and Continue".
	- Search for `xpinstall.signatures.required`.
	- Set its value to `false`.
- Install
	- Download the [latest release](https://github.com/linusbrogan/popoff/releases/latest).
	- Navigate to [`about:addons`](about:addons).
	- Click the gear icon.
	- Click "Install Add-on From File...".
	- Select the downloaded extension file.

#### Permissions
Firefox requires your consent to run Pop Off on all pages.
To grant permissions:
- Navigate to [`about:addons`](about:addons).
- Click "Pop Off".
- Click "Permissions".
- Enable "Access your data for all websites".

## Demo
Check that the extension works at the [demo page](https://www.linusbrogan.com/popoff/demo/).

## Privacy
Read the [privacy policy](https://github.com/linusbrogan/popoff/blob/main/privacy.md).
