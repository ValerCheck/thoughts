$(function(){
	Parse.$ = jQuery;

	Parse.initialize("XWxp7IZCJsA0iFwSRdKVB3ngiixCDpAbA0Ae0tQy", "RAnIN8O7zAeBV9rqnMLmjVVtiUSxTeDgduNgwazC");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo:"bar"}).then(function(object){
		alert("yay! it worked");
	})
})