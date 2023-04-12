"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var apollo_datasource_mongodb_1 = require("apollo-datasource-mongodb");
var Heroinfos = (function (_super) {
    __extends(Heroinfos, _super);
    function Heroinfos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heroinfos.prototype.getHeroinfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.model.find()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Heroinfos.prototype.getHeroinfosByToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.model.find({ token: token })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Heroinfos.prototype.getHeroinfosByHeroId = function (heroid) {
        return __awaiter(this, void 0, void 0, function () {
            var matchHeroid, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.model.findOne({ heroid: heroid })];
                    case 1:
                        matchHeroid = _a.sent();
                        return [2, matchHeroid];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3, 3];
                    case 3: return [4, this.model.find({ heroid: heroid })];
                    case 4: return [2, _a.sent()];
                }
            });
        });
    };
    Heroinfos.prototype.getHeroinfoByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.model.find({ name: name })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Heroinfos.prototype.getHeroinfoById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.model.findById(id)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Heroinfos.prototype.updateHeroinfoById = function (id, update) {
        return __awaiter(this, void 0, void 0, function () {
            var updateHeroInfo, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('id', id, 'update', update);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.model.findByIdAndUpdate({ _id: id }, update, { "new": true })];
                    case 2:
                        updateHeroInfo = _a.sent();
                        return [2, updateHeroInfo];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    Heroinfos.prototype.upsertHeroinfoByheroid = function (heroid, input) {
        return __awaiter(this, void 0, void 0, function () {
            var upsertHeroInfo, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.model.findOneAndUpdate({ heroid: heroid }, {
                                name: input.name,
                                token: input.token,
                                powerstats: input.powerstats,
                                image: input.image
                            }, {
                                "new": true,
                                upsert: true
                            })];
                    case 1:
                        upsertHeroInfo = _a.sent();
                        return [2, upsertHeroInfo];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Heroinfos.prototype.createHeroinfo = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var newHeroInfo, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('input', input);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.model.create({
                                heroid: input.heroid,
                                name: input.name,
                                token: input.token,
                                powerstats: input.powerstats,
                                image: input.image
                            })];
                    case 2:
                        newHeroInfo = _a.sent();
                        console.log(newHeroInfo);
                        return [2, newHeroInfo];
                    case 3:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    Heroinfos.prototype.deleteHeroinfoById = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteHeroInfo, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('input', input);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.model.findByIdAndDelete({ _id: input })];
                    case 2:
                        deleteHeroInfo = _a.sent();
                        console.log(deleteHeroInfo);
                        return [2, deleteHeroInfo];
                    case 3:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    Heroinfos.prototype.deleteHeroinfoByHeroid = function (heroid) {
        return __awaiter(this, void 0, void 0, function () {
            var matchHeroid, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.model.findOneAndDelete({ heroid: heroid })];
                    case 1:
                        matchHeroid = _a.sent();
                        return [2, matchHeroid];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    return Heroinfos;
}(apollo_datasource_mongodb_1.MongoDataSource));
exports["default"] = Heroinfos;
//# sourceMappingURL=heroinfos.js.map