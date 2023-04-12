"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.resolvers = void 0;
var lodash_1 = require("lodash");
var fake_data_js_1 = require("../data/fake-data.js");
var super_heros_https_js_1 = require("../apis/super-heros-https.js");
exports.resolvers = {
    Query: {
        books: function () { return fake_data_js_1.books; },
        authorNames: function () {
            var authorNames = [];
            fake_data_js_1.books.forEach(function (book) {
                if (!authorNames.includes(book.author.name)) {
                    authorNames.push(book.author.name);
                }
            });
            return authorNames;
        },
        getAuthorByName: function (parent, args) {
            console.log(args.name);
            var book = fake_data_js_1.books.find(function (book) { return book.author.name === args.name; });
            if (book) {
                return {
                    name: book.author.name,
                    books: book.author.books
                };
            }
        },
        authors: function () {
            var map = new Map();
            fake_data_js_1.books.forEach(function (book) {
                var author = book.author;
                map.set(author.name, author);
            });
            return Array.from(map.values());
        },
        getSuperHeroByName: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
            var res, names, superHeros;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, (0, super_heros_https_js_1.getSuperHeroByName)(args.input.token, args.input.name)];
                    case 1:
                        res = _b.sent();
                        names = (_a = res.data) === null || _a === void 0 ? void 0 : _a.results;
                        superHeros = [];
                        if (typeof (names) != 'undefined') {
                            names.forEach(function (hero) {
                                var superHero = replaceKeyHyphenFrom(hero);
                                superHeros.push(superHero);
                            });
                        }
                        if (superHeros.length == 0) {
                            throw new Error('No search data available!');
                        }
                        return [2, superHeros];
                }
            });
        }); },
        getSuperHeroById: function (parent, args) { return __awaiter(void 0, void 0, void 0, function () {
            var res, superHero;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, (0, super_heros_https_js_1.getSuperHeroById)(args.input.token, args.input.id)];
                    case 1:
                        res = _a.sent();
                        superHero = replaceKeyHyphenFrom(res.data);
                        console.log(superHero);
                        return [2, superHero];
                }
            });
        }); },
        getHeroinfoByName: function (parent, _a, _b) {
            var name = _a.name;
            var dataSources = _b.dataSources;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    return [2, dataSources.heroinfos.getHeroinfoByName(name)];
                });
            });
        },
        getHeroinfos: function (parent, args, _a) {
            var dataSources = _a.dataSources;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2, dataSources.heroinfos.getHeroinfos()];
                });
            });
        },
        getHeroinfosByToken: function (parent, _a, _b) {
            var token = _a.token;
            var heroinfos = _b.dataSources.heroinfos;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    return [2, heroinfos.getHeroinfosByToken(token)];
                });
            });
        },
        getHeroinfosByHeroId: function (parent, args, _a) {
            var dataSources = _a.dataSources;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2, dataSources.heroinfos.getHeroinfosByHeroId(args.heroid)];
                });
            });
        },
        getHeroinfoById: function (parent, _a, _b) {
            var id = _a.id;
            var heroinfos = _b.dataSources.heroinfos;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    return [2, heroinfos.getHeroinfoById(id)];
                });
            });
        }
    },
    Mutation: {
        upsertHeroinfoByheroid: function (parent, args, _a) {
            var heroinfos = _a.dataSources.heroinfos;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2, heroinfos.upsertHeroinfoByheroid(args.input.heroid, args.input)];
                });
            });
        },
        createHeroinfo: function (parent, args, _a) {
            var heroinfos = _a.dataSources.heroinfos;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    console.log('createHeroinfo:', args);
                    return [2, heroinfos.createHeroinfo(args.input)];
                });
            });
        },
        updateHeroinfoById: function (parent, args, _a) {
            var heroinfos = _a.dataSources.heroinfos;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    console.log('updateHeroinfoById', args);
                    return [2, heroinfos.updateHeroinfoById(args.input.id, args.input.update)];
                });
            });
        },
        updateHeroImage: function (parent, args) {
            console.log('UpdateHeroImage');
            return args.input.image;
        },
        deleteHeroinfoById: function (parent, args, _a) {
            var heroinfos = _a.dataSources.heroinfos;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    console.log('deleteHeroinfoById', args);
                    return [2, heroinfos.deleteHeroinfoById(args.input)];
                });
            });
        },
        deleteHeroinfoByHeroid: function (parent, args, _a) {
            var heroinfos = _a.dataSources.heroinfos;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2, heroinfos.deleteHeroinfoByHeroid(args.heroid)];
                });
            });
        },
        deleteHeroImage: function (parent, args) {
            console.log('deleteHeroImage', args.input);
            var image = {
                url: args.input.url
            };
            return image;
        }
    }
};
var replaceKeyHyphen = function (obj) {
    var pattern = /-/gi;
    var newObj = lodash_1["default"].mapKeys(obj, function (value, key) {
        if (key.includes('-')) {
            return key.replace(pattern, '_');
        }
        return key;
    });
    return newObj;
};
var replaceKeyHyphenFrom = function (obj) {
    var newBiography = replaceKeyHyphen(obj.biography);
    var newAppearance = replaceKeyHyphen(obj.appearance);
    var newConnections = replaceKeyHyphen(obj.connections);
    var superHero = __assign(__assign({}, obj), { biography: newBiography, appearance: newAppearance, connections: newConnections });
    return superHero;
};
//# sourceMappingURL=resolvers.js.map