jQuery(function ($) {
	$('#id_descripcion').before('<div id="wysihtml5-toolbar" style="display: none;"><div>'+
		'<a data-wysihtml5-command="bold"></a>'+
		'<a data-wysihtml5-command="italic"></a>'+
		'<a data-wysihtml5-command="insertOrderedList"></a>'+
		'<a data-wysihtml5-command="insertUnorderedList"></a>'+
		'<a data-wysihtml5-command="createLink"></a>'+
		'<div data-wysihtml5-dialog="createLink" style="display: none;">'+
			'<label>Link:<input data-wysihtml5-dialog-field="href" value="http://" class="text"></label><a data-wysihtml5-dialog-action="save">OK</a> <a data-wysihtml5-dialog-action="cancel">Cancel</a></div><a data-wysihtml5-command="insertImage"></a><div data-wysihtml5-dialog="insertImage" style="display: none;"><label>Image:<input data-wysihtml5-dialog-field="src" value="http://"></label><a data-wysihtml5-dialog-action="save">OK</a><a data-wysihtml5-dialog-action="cancel">Cancel</a></div><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1"></a><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2"></a><a data-wysihtml5-action="change_view" unselectable="on"></a></div></div>');

	var editor = new wysihtml5.Editor("id_descripcion", { // id of textarea element
	  toolbar:      "wysihtml5-toolbar", // id of toolbar element
	  parserRules:  wysihtml5ParserRules // defined in parser rules set 
	});
})