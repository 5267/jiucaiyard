/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.image_previewText = '';  //清空预览区域的显示内容
	config.filebrowserImageUploadUrl = "../UploadweixinImgHandler.ashx"; //设置提交上传图片按钮处理URL
	
	config.extraPlugins = 'codesnippet';
};
