// TODO(kara): Revisit why error messages are not being properly set.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Wrapper around Error that sets the error message.
 */
var MdError = (function (_super) {
    __extends(MdError, _super);
    function MdError(value) {
        _super.call(this);
        _super.prototype.message = value;
    }
    return MdError;
}(Error));
exports.MdError = MdError;
//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/errors/error.js.map