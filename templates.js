this["SignUpApp"] = this["SignUpApp"] || {};
this["SignUpApp"]["templates"] = this["SignUpApp"]["templates"] || {};
this["SignUpApp"]["templates"]["error-screen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<header class=\"fixed\">\n    <h1>"
    + alias3(((helper = (helper = helpers.communityName || (depth0 != null ? depth0.communityName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"communityName","hash":{},"data":data}) : helper)))
    + "</h1>\n</header>\n<article class=\"content scrollable header\">\n    <p>"
    + alias3(((helper = (helper = helpers.errorMsg || (depth0 != null ? depth0.errorMsg : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"errorMsg","hash":{},"data":data}) : helper)))
    + "</p>\n    <button class=\"recommend go-sign-up\">"
    + alias3(((helper = (helper = helpers.goBackButtonLabel || (depth0 != null ? depth0.goBackButtonLabel : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"goBackButtonLabel","hash":{},"data":data}) : helper)))
    + "</button>\n</article>\n";
},"useData":true});
this["SignUpApp"]["templates"]["progress-screen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<header class=\"fixed\">\n    <h1>"
    + alias3(((helper = (helper = helpers.communityName || (depth0 != null ? depth0.communityName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"communityName","hash":{},"data":data}) : helper)))
    + "</h1>\n</header>\n<article class=\"content scrollable header\">\n    <div class=\"center\">\n        <i class=\"fa fa-hourglass-half fa-5x fa-spin\"></i>\n        <br>\n        <p>"
    + alias3(((helper = (helper = helpers.progressLabel || (depth0 != null ? depth0.progressLabel : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"progressLabel","hash":{},"data":data}) : helper)))
    + " <span id=\"currentList\"></span>...</p>\n    </div>\n</article>\n";
},"useData":true});
this["SignUpApp"]["templates"]["signup-screen"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <li>\n                    <label class=\"pack-checkbox\">\n                        <input type=\"checkbox\" class=\"mailing-list\" name=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-list\" value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></input>\n                        <span></span>\n                    </label>\n                    <a href=\"#\">\n                        <p>"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "</p>\n                        <p>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " </p>\n                    </a>\n                </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <header class=\"fixed\">\n        <h1>"
    + alias3(((helper = (helper = helpers.communityName || (depth0 != null ? depth0.communityName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"communityName","hash":{},"data":data}) : helper)))
    + "</h1>\n    </header>\n    <article class=\"content scrollable header\">\n        <p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n        <form>\n        <p><input id=\"email\" type=\"email\" name=\"email\" placeholder=\""
    + alias3(((helper = (helper = helpers.emailLabel || (depth0 != null ? depth0.emailLabel : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"emailLabel","hash":{},"data":data}) : helper)))
    + " \"></input></p>\n        <section data-type=\"list\">\n        <ul data-type=\"edit\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n        </section>\n        </form>\n        <br>\n        <button class=\"recommend go-subscribe-action\">"
    + alias3(((helper = (helper = helpers.subscribeButtonLabel || (depth0 != null ? depth0.subscribeButtonLabel : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"subscribeButtonLabel","hash":{},"data":data}) : helper)))
    + "</button>\n    </article>\n";
},"useData":true});
this["SignUpApp"]["templates"]["success-screen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<header class=\"fixed\">\n    <h1>"
    + alias3(((helper = (helper = helpers.communityName || (depth0 != null ? depth0.communityName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"communityName","hash":{},"data":data}) : helper)))
    + "</h1>\n</header>\n<article class=\"content scrollable header\">\n    <div class=\"center\">\n        <img src=\"images/smiley.svg\">\n    </div>\n    <p>"
    + alias3(((helper = (helper = helpers.successMsg || (depth0 != null ? depth0.successMsg : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"successMsg","hash":{},"data":data}) : helper)))
    + "</p>\n    <button class=\"recommend go-sign-up\">"
    + alias3(((helper = (helper = helpers.goBackButtonLabel || (depth0 != null ? depth0.goBackButtonLabel : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"goBackButtonLabel","hash":{},"data":data}) : helper)))
    + "</button>\n</article>\n";
},"useData":true});