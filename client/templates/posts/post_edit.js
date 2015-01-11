Template.postEdit.events({
	"submit form": function(e){
		e.preventDefault();

		var currentPostId = this._id;

		var postProperties = {
			url: e.target.url.value,
			title: e.target.title.value
		}


		// =!>
		// Use a server method to make sure edited posts are not
		// updated to already existing URLs

		Posts.update(currentPostId, {$set: postProperties}, function(error){
			if (error) {
				alert(error.reason);
			}else{
				Router.go('postPage', {_id: currentPostId});
			}
		});
	},

	"click .delete": function(e){
		e.preventDefault();

		if (confirm("Delete this post?")) {
			var currentPostId = this._id;
			Posts.remove(currentPostId);
			Router.go('postsList');
		}
	}
});
