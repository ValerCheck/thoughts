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
			var articlesView = new ArticlesView({collection: articles});
			articlesView.render();
			$('.main-container').html(articlesView.el);
		},
		error: function(articles,error){
			console.log(error);
		}
	});

	var ArticlesView = Parse.View.extend({
		template : Handlebars.compile($('#articles-tpl').html()),
		render : function(){
			var collection = {article : this.collection.toJSON()};
			this.$el.html(this.template(collection));
		}
	})

})