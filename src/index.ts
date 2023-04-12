import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv-safe'
import { resolvers } from './schema/resolvers.js';
import { typeDefs } from './schema/type-defs.js'
import { connectDB } from './data/db-connection.js'
import { Heroinfo } from './models/Heroinfo.js'
import Heroinfos from './data/heroinfos.js'

dotenv.config();
const heroInfoDBConnection = connectDB();
console.log('heroInfoDBConnection', heroInfoDBConnection)

interface ContextValue {
  dataSources: {
    // superherosAPI: SuperherosAPI;
    // heroInfoDB: HeroinfosDataSource;
    heroinfos: Heroinfos;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const urlPromise = async () => {
  const { url } = await startStandaloneServer(server,
    {
      context: async () => {
        const { cache } = server;
        return {
          // We create new instances of our data sources with each request,
          // passing in our server's cache.
          dataSources: {
            // heroinfoDB: new HeroinfosDataSource(heroInfoDBConnection),
            heroinfos: new Heroinfos(Heroinfo),
            // superherosAPI: new SuperherosAPI({ cache }),
            // personalizationAPI: new PersonalizationAPI({ cache }),
          },
        };
      },

      listen: { port: 4000 },
      // listen: { port: +process.env.PORT | 4000 },
    })
  console.log(`🚀  Server ready at: ${url} `)
};

urlPromise();
