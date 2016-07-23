"use strict";
var testing_1 = require('@angular/core/testing');
var angular2_phonecat_component_1 = require('../app/angular2-phonecat.component');
testing_1.beforeEachProviders(function () { return [angular2_phonecat_component_1.Angular2PhonecatAppComponent]; });
testing_1.describe('App: Angular2Phonecat', function () {
    testing_1.it('should create the app', testing_1.inject([angular2_phonecat_component_1.Angular2PhonecatAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'angular2-phonecat works!\'', testing_1.inject([angular2_phonecat_component_1.Angular2PhonecatAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('angular2-phonecat works!');
    }));
});
//# sourceMappingURL=angular2-phonecat.component.spec.js.map