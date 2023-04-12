import { MongoDataSource } from 'apollo-datasource-mongodb';

export default class Heroinfos extends MongoDataSource {

    async getHeroinfos() {
        return await this.model.find();
    }

    async getHeroinfosByToken(token) {
        return await this.model.find({ token: token });
    }

    async getHeroinfosByHeroId(heroid) {
        // console.log('heroid', heroid);
        try {
            const matchHeroid = await this.model.findOne({ heroid: heroid });
            return matchHeroid;
        } catch (error) {
            console.log(error);
        }
        return await this.model.find({ heroid });
    }
    async getHeroinfoByName(name) {
        return await this.model.find({ name: name });
    }
    async getHeroinfoById(id) {
        return await this.model.findById(id);
    }

    async updateHeroinfoById(id, update) {
        console.log('id', id, 'update',update)
        try {
            const updateHeroInfo = await this.model.findByIdAndUpdate(
                { _id: id },
                update, // { $set: { name: 'jason bourne12' } },
                { new: true },
            );
            // console.log(updateHeroInfo);
            return updateHeroInfo;
        } catch (error) {
            console.log(error);
        }
    }

    async upsertHeroinfoByheroid(heroid, input) {
        // console.log('input', input.powerstats);
        try {
            const upsertHeroInfo = await this.model.findOneAndUpdate(
                {heroid: heroid},
                {
                    // heroid: input.heroid,
                    name: input.name,
                    token: input.token,
                    powerstats: input.powerstats,
                    image: input.image
                },
                {
                    new: true,
                    upsert: true,
                    // rawResult: true
                }
            );
            // console.log(upsertHeroInfo);
            return upsertHeroInfo;
        } catch (error) {
            console.log(error);
        }
    }

    async createHeroinfo(input) {
        console.log('input', input);
        try {
            const newHeroInfo = await this.model.create(
                {
                    heroid: input.heroid,
                    name: input.name,
                    token: input.token,
                    powerstats: input.powerstats,
                    image: input.image
                }
            );
            console.log(newHeroInfo);
            return newHeroInfo;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteHeroinfoById(input) {
        console.log('input', input);
        try {
            const deleteHeroInfo = await this.model.findByIdAndDelete(
                { _id: input },
            );
            console.log(deleteHeroInfo);
            return deleteHeroInfo;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteHeroinfoByHeroid(heroid) {
        // console.log('heroid', heroid);
        try {
            const matchHeroid = await this.model.findOneAndDelete({ heroid: heroid});
            // console.log('matchHeroid', matchHeroid);
            return matchHeroid;
        } catch (error) {
            console.log(error);
        }
    }
}