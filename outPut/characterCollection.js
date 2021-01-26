"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sorting_class_1 = require("./sorting-class");
var stringSorter = /** @class */ (function (_super) {
    __extends(stringSorter, _super);
    function stringSorter(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(stringSorter.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    stringSorter.prototype.compare = function (leftInd, rightInd) {
        return this.data[leftInd].toLowerCase() > this.data[rightInd].toLowerCase();
    };
    stringSorter.prototype.swap = function (leftInd, rightInd) {
        var temp = this.data.split('');
        var leftChar = temp[leftInd];
        temp[leftInd] = temp[rightInd];
        temp[rightInd] = leftChar;
        this.data = temp.join('');
    };
    return stringSorter;
}(sorting_class_1.Sorter));
exports.default = stringSorter;
