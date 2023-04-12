"use strict";
exports.__esModule = true;
exports.Heroinfo = void 0;
var mongoose_1 = require("mongoose");
exports.Heroinfo = mongoose_1["default"].model('Heroinfo', {
    id: String,
    heroid: Number,
    name: String,
    token: String,
    powerstats: {
        intelligence: Number,
        strength: Number,
        speed: Number,
        durability: Number,
        power: Number,
        combat: Number
    },
    image: {
        url: String
    }
});
//# sourceMappingURL=Heroinfo.js.map