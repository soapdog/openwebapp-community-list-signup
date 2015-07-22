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
	var wantedLists = $('.mailing-list:checked').map(function () {
		return this.value;
	}).get();

	return wantedLists;
}

function doSubscribe() {
	var wantedLists = getWantedLists();
	var data = { email: $("#email").val() };

	console.log("Subscribing to: ");
	console.log(wantedLists);

	$.ajaxSetup({
		xhrFields: {
			mozSystem: true
		}
	});

	async.eachSeries(wantedLists, function (item, callback) {

		var url = "https://lists.mozilla.org/subscribe/" + item;

		console.log("url", url);
		console.log("data", data);

		$.ajax({
			type: "POST",
			url: url,
			data: data,
			success: function (data, msg) {
				console.log("msg", msg);
				callback();
			},
			error: function (xhr, msg) {
				callback(msg);
			}

		});
	});

}

// Start app
goSignUpScreen();