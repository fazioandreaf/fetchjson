"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    // 10/08/2018
    const datePart = dateString.split('/').map((value) => parseInt(value));
    //gen == 0 and not 1
    return new Date(datePart[2], datePart[1] - 1, datePart[0]);
};
exports.dateStringToDate = dateStringToDate;
