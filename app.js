// Screen change routines

function goScreen(id) {
	var source = $(id).html();
	var template = Handlebars.compile(source);

	$("#app").html(template(config));
}

function goSignUpScreen() {
	goScreen("#signup-screen");
}

function goSuccessScreen() {
	goScreen("#success-screen");
}

function goErrorScreen() {
	goScreen("#error-screen");
}

// Subscribing routines

function getWantedLists() {
	var checkedValues = $('.mailing-list:checked').map(function () {
		return this.value;
	}).get();
	
	return checkedValues;
}

function doSubscribe() {
	var wantedLists = getWantedLists();
	
	console.log("Subscribing to: ");
	console.log(wantedLists);
	
	async.eachSeries(wantedLists, function(item, callback) {
		
	});

}

// Start app
goSignUpScreen();