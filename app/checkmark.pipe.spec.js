"use strict";
var testing_1 = require('@angular/core/testing');
var checkmark_pipe_1 = require('./checkmark.pipe');
testing_1.describe('Checkmark Pipe', function () {
    testing_1.beforeEachProviders(function () { return [checkmark_pipe_1.CheckmarkPipe]; });
    testing_1.it('should transform the input', testing_1.inject([checkmark_pipe_1.CheckmarkPipe], function (pipe) {
        testing_1.expect(pipe.transform(true, 'true')).toBe('\u2713');
    }));
});
//# sourceMappingURL=checkmark.pipe.spec.js.map