(function () {
// Screen change routines

    function goScreen(id) {

        var template = this["SignUpApp"]["templates"][id];

        $("#app").html(template(config));

        bindSpecialClasses();
    }

    function bindSpecialClasses() {
        $(".go-sign-up").click(goSignUpScreen);
        $(".go-subscribe-action").click(doSubscribe);
    }

    function goSignUpScreen() {
        goScreen("signup-screen");
    }

    function goProgressScreen() {
        goScreen("progress-screen");
    }

    function goSuccessScreen() {
        goScreen("success-screen");
    }

    function goErrorScreen() {
        goScreen("error-screen");
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

        goProgressScreen();

        async.eachSeries(
            wantedLists,

            function (item, callback) {

                var url = "https://lists.mozilla.org/subscribe/" + item;

                console.log("Subscribing...");
                console.log("url", url);
                console.log("data", data);

                $("#currentList").html(item);

                $.ajax({
                    type: "POST",
                    url: url,
                    data: data,
                    xhrFields: {
                        mozSystem: true
                    },
                    success: function (data, msg) {
                        console.log("!success!");
                        console.log("msg", msg);
                        callback(null, msg);
                        return true;
                    },
                    error: function (xhr, msg) {

                        /*
                        Be aware that due to some funkyness by mailman, jQuery is triggering the error callback even
                        when the response was 200 OK with the correct information.

                        The application works and the user is subscribed but jQuery Ajax call thinks things went sour.

                        TODO: Find out why.
                         */

                        console.log("xhr", xhr);
                        console.log("error", msg);
                        callback(null, msg);
                        return true;
                    }

                });
            },

            function finalCallback(error) {
                console.log("final error", error);

                if (error) {
                    goErrorScreen();
                } else {
                    goSuccessScreen();
                }
            }
        );

    }

// Start app
    console.log("Starting app...");
    goSignUpScreen();

}());
