import axios from "axios";
export const getSuperHeroByName = async (token, name) => {
    const superHeros = await axios
        .get(`https://www.superheroapi.com/api.php/${token}/search/${name}`);
    if (superHeros.data?.results) {
        for (const hero of superHeros.data.results) {
            try {
                const akababHero = await axios
                    .get(`https://akabab.github.io/superhero-api/api/id/${hero.id}.json`);
                hero.image.url = akababHero.data.images.md;
            }
            catch (error) {
                console.log(`No Akabab image found for hero ${hero.id}`);
            }
        }
    }
    return superHeros;
};
export const getSuperHeroById = async (token, id) => {
    const superHero = await axios
        .get(`https://www.superheroapi.com/api.php/${token}/${id}`);
    const akababHero = await axios
        .get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
    superHero.data.image.url = akababHero.data.images.md;
    return superHero;
};
//# sourceMappingURL=super-heros-https.js.map