$(function(){
	Parse.$ = jQuery;

	Parse.initialize("XWxp7IZCJsA0iFwSRdKVB3ngiixCDpAbA0Ae0tQy", "RAnIN8O7zAeBV9rqnMLmjVVtiUSxTeDgduNgwazC");
	
	var Article = Parse.Object.extend("Article");
	var Articles = Parse.Collection.extend({
		model : Article
	});

	var articles = new Articles();
	articles.fetch({
		success: function(articles){
			console.log(articles);
		},
		error: function(articles,error){
			console.log(error);
		}
	});

})