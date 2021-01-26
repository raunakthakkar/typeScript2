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
var node = /** @class */ (function () {
    function node(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return node;
}());
var Linklist = /** @class */ (function (_super) {
    __extends(Linklist, _super);
    function Linklist(head, leng) {
        if (head === void 0) { head = null; }
        if (leng === void 0) { leng = 0; }
        var _this = _super.call(this) || this;
        _this.head = head;
        _this.leng = leng;
        return _this;
    }
    Object.defineProperty(Linklist.prototype, "length", {
        get: function () {
            return this.leng;
        },
        enumerable: false,
        configurable: true
    });
    Linklist.prototype.add = function (data) {
        if (!this.head) {
            this.head = new node(data);
            this.leng += 1;
        }
        else {
            var temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new node(data);
            this.leng += 1;
        }
    };
    Linklist.prototype.at = function (postion) {
        if (!this.head || postion > this.leng) {
            throw new Error("index out of bounds");
        }
        var temp = this.head;
        var countr = 0;
        while (temp !== null) {
            if (countr == postion) {
                break;
            }
            countr += 1;
            temp = temp.next;
        }
        if (temp == null) {
            throw new Error("index out of bounds");
        }
        return temp;
    };
    Linklist.prototype.compare = function (leftInd, rightInd) {
        return this.at(leftInd).data > this.at(rightInd).data;
    };
    Linklist.prototype.swap = function (leftInd, rightInd) {
        var left = this.at(leftInd).data;
        this.at(leftInd).data = this.at(rightInd).data;
        this.at(rightInd).data = left;
    };
    return Linklist;
}(sorting_class_1.Sorter));
exports.default = Linklist;
