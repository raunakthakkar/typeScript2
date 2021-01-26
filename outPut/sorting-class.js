"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// creating a sorting class that contains function irrespective of type given to that function
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.bubbleSort = function () {
        var leng = this.length;
        for (var i = 0; i < leng; i++) {
            for (var j = 0; j < leng - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
