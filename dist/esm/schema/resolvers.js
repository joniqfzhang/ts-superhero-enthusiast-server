import _ from 'lodash';
import { books } from '../data/fake-data.js';
import { getSuperHeroByName, getSuperHeroById } from '../apis/super-heros-https.js';
export const resolvers = {
    Query: {
        books: () => books,
        authorNames: () => {
            let authorNames = [];
            books.forEach(book => {
                if (!authorNames.includes(book.author.name)) {
                    authorNames.push(book.author.name);
                }
            });
            return authorNames;
        },
        getAuthorByName: (parent, args) => {
            console.log(args.name);
            const book = books.find(book => book.author.name === args.name);
            if (book) {
                return {
                    name: book.author.name,
                    books: book.author.books
                };
            }
        },
        authors: () => {
            const map = new Map();
            books.forEach((book) => {
                const author = book.author;
                map.set(author.name, author);
            });
            return Array.from(map.values());
        },
        getSuperHeroByName: async (parent, args) => {
            let res = await getSuperHeroByName(args.input.token, args.input.name);
            const names = res.data?.results;
            let superHeros = [];
            if (typeof (names) != 'undefined') {
                names.forEach((hero) => {
                    const superHero = replaceKeyHyphenFrom(hero);
                    superHeros.push(superHero);
                });
            }
            if (superHeros.length == 0) {
                throw new Error('No search data available!');
            }
            return superHeros;
        },
        getSuperHeroById: async (parent, args) => {
            let res = await getSuperHeroById(args.input.token, args.input.id);
            let superHero = replaceKeyHyphenFrom(res.data);
            console.log(superHero);
            return superHero;
        },
        getHeroinfoByName: async (parent, { name }, { dataSources }) => {
            return dataSources.heroinfos.getHeroinfoByName(name);
        },
        getHeroinfos: async (parent, args, { dataSources }) => {
            return dataSources.heroinfos.getHeroinfos();
        },
        getHeroinfosByToken: async (parent, { token }, { dataSources: { heroinfos } }) => {
            return heroinfos.getHeroinfosByToken(token);
        },
        getHeroinfosByHeroId: async (parent, args, { dataSources }) => {
            return dataSources.heroinfos.getHeroinfosByHeroId(args.heroid);
        },
        getHeroinfoById: async (parent, { id }, { dataSources: { heroinfos } }) => {
            return heroinfos.getHeroinfoById(id);
        }
    },
    Mutation: {
        upsertHeroinfoByheroid: async (parent, args, { dataSources: { heroinfos } }) => {
            return heroinfos.upsertHeroinfoByheroid(args.input.heroid, args.input);
        },
        createHeroinfo: async (parent, args, { dataSources: { heroinfos } }) => {
            console.log('createHeroinfo:', args);
            return heroinfos.createHeroinfo(args.input);
        },
        updateHeroinfoById: async (parent, args, { dataSources: { heroinfos } }) => {
            console.log('updateHeroinfoById', args);
            return heroinfos.updateHeroinfoById(args.input.id, args.input.update);
        },
        updateHeroImage: (parent, args) => {
            console.log('UpdateHeroImage');
            return args.input.image;
        },
        deleteHeroinfoById: async (parent, args, { dataSources: { heroinfos } }) => {
            console.log('deleteHeroinfoById', args);
            return heroinfos.deleteHeroinfoById(args.input);
        },
        deleteHeroinfoByHeroid: async (parent, args, { dataSources: { heroinfos } }) => {
            return heroinfos.deleteHeroinfoByHeroid(args.heroid);
        },
        deleteHeroImage: (parent, args) => {
            console.log('deleteHeroImage', args.input);
            const image = {
                url: args.input.url
            };
            return image;
        },
    }
};
const replaceKeyHyphen = (obj) => {
    const pattern = /-/gi;
    let newObj = _.mapKeys(obj, (value, key) => {
        if (key.includes('-')) {
            return key.replace(pattern, '_');
        }
        return key;
    });
    return newObj;
};
const replaceKeyHyphenFrom = (obj) => {
    const newBiography = replaceKeyHyphen(obj.biography);
    const newAppearance = replaceKeyHyphen(obj.appearance);
    const newConnections = replaceKeyHyphen(obj.connections);
    const superHero = {
        ...obj,
        biography: newBiography,
        appearance: newAppearance,
        connections: newConnections
    };
    return superHero;
};
//# sourceMappingURL=resolvers.js.map