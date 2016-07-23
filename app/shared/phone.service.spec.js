"use strict";
var testing_1 = require('@angular/core/testing');
var phone_service_1 = require('./phone.service');
testing_1.describe('Phone Service', function () {
    testing_1.beforeEachProviders(function () { return [phone_service_1.PhoneService]; });
    testing_1.it('should ...', testing_1.inject([phone_service_1.PhoneService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=phone.service.spec.js.map