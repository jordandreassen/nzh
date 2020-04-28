$(document).ready(function () {

	/************************
	 * Custom Code
	 ************************/

	$('#article-content').removeClass();
	$('#article-content>p').removeClass();
	$('#article-content>p').attr('style', function(i, style)
	{
		return style && style.replace(/display[^;]+;?/g, '');
	});
	$('#article-content>p>span').removeClass();
	$('#article-content>p>span').attr('style', function(i, style)
	{
		return style && style.replace(/display[^;]+;?/g, '');
	});
	$('#article-content>div.element').attr('class', 'element element-image');
});