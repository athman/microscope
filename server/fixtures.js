if (Posts.find().count() == 0) {
	Posts.insert({
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope/',
		author: 'System'
	});

	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com',
		author: 'System'
	});

	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com',
		author: 'System'
	});

	Posts.insert({
		title: 'Github',
		url: 'https://github.com',
		author: 'System'
	});
}
