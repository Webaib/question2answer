/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights
 *          reserved. For licensing, see LICENSE.md or
 *          http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function(config) {
	// Define changes to default configuration here. For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// NOTE: if you make changes to this file, make sure that you do not
	// overwrite it when upgrading Q2A!

	// The toolbar arrangement, two rows of buttons
	config.toolbar = [ {
		name : 'insert',
		items : [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar', 'Smiley' ]
	}, {
		name : 'links',
		items : [ 'Link', 'Unlink' ]
	} ];

	// Set the most common block elements
	config.format_tags = 'p;h1;h2;h3;pre';
	config.entities = false;

	// Make dialogs simpler
	config.removeDialogTabs = 'image:advanced;link:advanced;table:advanced';

	// Use native spell checking (note: Ctrl+right-click is required for native
	// context menu)
	config.disableNativeSpellChecker = false;

	// Prevent blank paragraphs
	config.fillEmptyBlocks = false;

	config.image_previewText = '';
};

CKEDITOR.on('dialogDefinition', function(ev) {
	// Take the dialog window name and its definition from the event data.
	var dialogName = ev.data.name;
	var dialogDefinition = ev.data.definition;

	if (dialogName == 'image') {
		dialogDefinition.width = 340;
		// var infoTab = dialogDefinition.getContents('info');
		// // infoTab.remove('htmlPreview');
		// infoTab.remove('txtBorder');
		// infoTab.remove('txtHSpace');
		// infoTab.remove('txtVSpace');
		//
		// dialogDefinition.onShow = function() {
		// this.selectPage('Upload');
		// };
	}
});
