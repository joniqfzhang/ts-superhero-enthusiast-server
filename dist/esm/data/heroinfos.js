import { MongoDataSource } from 'apollo-datasource-mongodb';
export default class Heroinfos extends MongoDataSource {
    async getHeroinfos() {
        return await this.model.find();
    }
    async getHeroinfosByToken(token) {
        return await this.model.find({ token: token });
    }
    async getHeroinfosByHeroId(heroid) {
        try {
            const matchHeroid = await this.model.findOne({ heroid: heroid });
            return matchHeroid;
        }
        catch (error) {
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
        console.log('id', id, 'update', update);
        try {
            const updateHeroInfo = await this.model.findByIdAndUpdate({ _id: id }, update, { new: true });
            return updateHeroInfo;
        }
        catch (error) {
            console.log(error);
        }
    }
    async upsertHeroinfoByheroid(heroid, input) {
        try {
            const upsertHeroInfo = await this.model.findOneAndUpdate({ heroid: heroid }, {
                name: input.name,
                token: input.token,
                powerstats: input.powerstats,
                image: input.image
            }, {
                new: true,
                upsert: true,
            });
            return upsertHeroInfo;
        }
        catch (error) {
            console.log(error);
        }
    }
    async createHeroinfo(input) {
        console.log('input', input);
        try {
            const newHeroInfo = await this.model.create({
                heroid: input.heroid,
                name: input.name,
                token: input.token,
                powerstats: input.powerstats,
                image: input.image
            });
            console.log(newHeroInfo);
            return newHeroInfo;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteHeroinfoById(input) {
        console.log('input', input);
        try {
            const deleteHeroInfo = await this.model.findByIdAndDelete({ _id: input });
            console.log(deleteHeroInfo);
            return deleteHeroInfo;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteHeroinfoByHeroid(heroid) {
        try {
            const matchHeroid = await this.model.findOneAndDelete({ heroid: heroid });
            return matchHeroid;
        }
        catch (error) {
            console.log(error);
        }
    }
}
//# sourceMappingURL=heroinfos.js.map