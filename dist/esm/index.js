import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv-safe';
import { resolvers } from './schema/resolvers.js';
import { typeDefs } from './schema/type-defs.js';
import { connectDB } from './data/db-connection.js';
import { Heroinfo } from './models/Heroinfo.js';
import Heroinfos from './data/heroinfos.js';
dotenv.config();
const heroInfoDBConnection = connectDB();
console.log('heroInfoDBConnection', heroInfoDBConnection);
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const urlPromise = async () => {
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    heroinfos: new Heroinfos(Heroinfo),
                },
            };
        },
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url} `);
};
urlPromise();
//# sourceMappingURL=index.js.map