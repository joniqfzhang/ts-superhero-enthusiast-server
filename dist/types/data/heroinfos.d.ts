/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export default class Heroinfos extends MongoDataSource<any, any> {
    constructor(modelOrCollection: import("mongodb").Collection<any> | import("mongoose").Model<any, {}, {}, {}, any, any> | import("mongoose").Collection<import("mongodb").Document>);
    getHeroinfos(): Promise<any[]>;
    getHeroinfosByToken(token: any): Promise<any[]>;
    getHeroinfosByHeroId(heroid: any): Promise<any>;
    getHeroinfoByName(name: any): Promise<any[]>;
    getHeroinfoById(id: any): Promise<any>;
    updateHeroinfoById(id: any, update: any): Promise<any>;
    upsertHeroinfoByheroid(heroid: any, input: any): Promise<any>;
    createHeroinfo(input: any): Promise<any>;
    deleteHeroinfoById(input: any): Promise<any>;
    deleteHeroinfoByHeroid(heroid: any): Promise<any>;
}
import { MongoDataSource } from "apollo-datasource-mongodb";
