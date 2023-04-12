
import _ from 'lodash';
import { books } from '../data/fake-data.js'
import { getSuperHeroByName, getSuperHeroById } from '../apis/super-heros-https.js'

export const resolvers = {

    Query: {
        books: () => books,
        authorNames: () => {
            let authorNames: String[] = [];
            books.forEach(book => {
                if (!authorNames.includes(book.author.name)) {
                    authorNames.push(book.author.name);
                }
            })
            return authorNames;
            //     //The indexOf() method returns the first index 
            //     // at which a given element can be found in the array, or -1 if it is not present.
            //     books.forEach(book => authorNames.push(book.author))
            //     return authorNames.filter((value, index) => authorNames.indexOf(value) === index);

            //     //Map offers key-value object. If it receives the same key name it updates the value.
            //     const map = new Map();
            //     for (const book of books) {
            //         map.set(book, book);
            //     }
            //     return Array.from(map.values());
        },

        // query getAuthor($name: String!){
        //     getAuthorByName(name: $name) {
        //       name
        //       books{
        //         title
        //       }
        //     }
        //   }
        // {"name": "Kate Chopin" } //query parms
        getAuthorByName: (parent, args: { name: string; }) => {
            console.log(args.name)
            const book = books.find(book => book.author.name === args.name);
            if (book) {
                return {
                    name: book.author.name,
                    books: book.author.books
                }
            }
        },
        authors: () => {
            const map = new Map();
            books.forEach((book) => {
                const author = book.author;
                // remove duplicates
                map.set(author.name, author)
            });
            return Array.from(map.values());
        },

        // SuperHero API acces
        getSuperHeroByName: async (parent: any, args: { input: { token: string; name: string; } }) => {
            let res = await getSuperHeroByName(args.input.token, args.input.name);
            const names = res.data?.results;

            let superHeros: any[] = [];
            if (typeof (names) != 'undefined') {
                names.forEach((hero: any) => {
                    const superHero = replaceKeyHyphenFrom(hero)
                    // console.log(hero)
                    // console.log(superHero)
                    superHeros.push(superHero)
                });
            }

            if (superHeros.length == 0) {
                throw new Error('No search data available!');
            }

            return superHeros
        },
        getSuperHeroById: async (parent: any, args: { input: { token: string; id: string; }; }) => {
            let res = await getSuperHeroById(args.input.token, args.input.id);

            let superHero = replaceKeyHyphenFrom(res.data);
            // console.log(res.data)
            console.log(superHero)
            return superHero
        },

        // mongodb access
        getHeroinfoByName: async (parent: any, { name }, { dataSources }) => {
            return dataSources.heroinfos.getHeroinfoByName(name)
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
            return heroinfos.getHeroinfoById(id)
        }
        // searchHeroname: async (parent: any, {token, name}, {dataSources}) => {//not working
        //     return dataSources.superherosAPI.getSuperHeroByName();
        // },
        // heroById: async (parent:any, {token, id}, {dataSources}) => {//not working
        //     return dataSources.superherosAPI.getSuperHeroById()
        // }
    },

    Mutation: {
        upsertHeroinfoByheroid: async (parent, args, { dataSources: { heroinfos } }) => {
            // console.log('upsertHeroinfoByheroid:', args)
            return heroinfos.upsertHeroinfoByheroid(args.input.heroid, args.input);
        },

        createHeroinfo: async (parent, args, { dataSources: { heroinfos } }) => {
            console.log('createHeroinfo:', args)
            return heroinfos.createHeroinfo(args.input);
        },

        updateHeroinfoById: async (parent, args, { dataSources: { heroinfos } }) => {
            console.log('updateHeroinfoById', args)
            return heroinfos.updateHeroinfoById(args.input.id, args.input.update);
        },
        
        updateHeroImage: (parent: any, args: { input: { image: any; }; }) => {
            console.log('UpdateHeroImage')
            return args.input.image;
        },

        deleteHeroinfoById: async (parent, args, { dataSources: { heroinfos } }) => {
            console.log('deleteHeroinfoById', args)
            return heroinfos.deleteHeroinfoById(args.input);
        },

        deleteHeroinfoByHeroid: async (parent, args, { dataSources: { heroinfos } }) => {
            // console.log('deleteHeroinfoByHeroid', args)
            return heroinfos.deleteHeroinfoByHeroid(args.heroid);
        },
        
        deleteHeroImage: (parent: any, args: { input: { url: any; }; }) => {
            console.log('deleteHeroImage', args.input)
            const image = {
                url: args.input.url
            }
            return image
        },
    }

};


const replaceKeyHyphen = (obj: any) => {
    const pattern = /-/gi;

    let newObj = _.mapKeys(obj, (value, key) => {
        if (key.includes('-')) {
            return key.replace(pattern, '_');
        }
        return key;
    });
    // console.log('newObj', newObj);
    return newObj;
}

const replaceKeyHyphenFrom = (obj: { biography: any; appearance: any; connections: any; }) => {
    const newBiography = replaceKeyHyphen(obj.biography)
    const newAppearance = replaceKeyHyphen(obj.appearance)
    const newConnections = replaceKeyHyphen(obj.connections)

    const superHero = {
        ...obj,
        biography: newBiography,
        appearance: newAppearance,
        connections: newConnections
    }

    return superHero
}
