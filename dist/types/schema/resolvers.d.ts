import _ from 'lodash';
export declare const resolvers: {
    Query: {
        books: () => {
            title: string;
            author: {
                name: string;
                books: {
                    title: string;
                }[];
            };
        }[];
        authorNames: () => String[];
        getAuthorByName: (parent: any, args: {
            name: string;
        }) => {
            name: string;
            books: {
                title: string;
            }[];
        };
        authors: () => any[];
        getSuperHeroByName: (parent: any, args: {
            input: {
                token: string;
                name: string;
            };
        }) => Promise<any[]>;
        getSuperHeroById: (parent: any, args: {
            input: {
                token: string;
                id: string;
            };
        }) => Promise<{
            biography: _.Dictionary<any>;
            appearance: _.Dictionary<any>;
            connections: _.Dictionary<any>;
        }>;
        getHeroinfoByName: (parent: any, { name }: {
            name: any;
        }, { dataSources }: {
            dataSources: any;
        }) => Promise<any>;
        getHeroinfos: (parent: any, args: any, { dataSources }: {
            dataSources: any;
        }) => Promise<any>;
        getHeroinfosByToken: (parent: any, { token }: {
            token: any;
        }, { dataSources: { heroinfos } }: {
            dataSources: {
                heroinfos: any;
            };
        }) => Promise<any>;
        getHeroinfosByHeroId: (parent: any, args: any, { dataSources }: {
            dataSources: any;
        }) => Promise<any>;
        getHeroinfoById: (parent: any, { id }: {
            id: any;
        }, { dataSources: { heroinfos } }: {
            dataSources: {
                heroinfos: any;
            };
        }) => Promise<any>;
    };
    Mutation: {
        upsertHeroinfoByheroid: (parent: any, args: any, { dataSources: { heroinfos } }: {
            dataSources: {
                heroinfos: any;
            };
        }) => Promise<any>;
        createHeroinfo: (parent: any, args: any, { dataSources: { heroinfos } }: {
            dataSources: {
                heroinfos: any;
            };
        }) => Promise<any>;
        updateHeroinfoById: (parent: any, args: any, { dataSources: { heroinfos } }: {
            dataSources: {
                heroinfos: any;
            };
        }) => Promise<any>;
        updateHeroImage: (parent: any, args: {
            input: {
                image: any;
            };
        }) => any;
        deleteHeroinfoById: (parent: any, args: any, { dataSources: { heroinfos } }: {
            dataSources: {
                heroinfos: any;
            };
        }) => Promise<any>;
        deleteHeroinfoByHeroid: (parent: any, args: any, { dataSources: { heroinfos } }: {
            dataSources: {
                heroinfos: any;
            };
        }) => Promise<any>;
        deleteHeroImage: (parent: any, args: {
            input: {
                url: any;
            };
        }) => {
            url: any;
        };
    };
};
