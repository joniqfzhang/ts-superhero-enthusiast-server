import axios from "axios";
export const getSuperHeroByName = async (token, name) => axios
    .get(`https://www.superheroapi.com/api.php/${token}/search/${name}`);
export const getSuperHeroById = async (token, id) => axios
    .get(`https://www.superheroapi.com/api.php/${token}/${id}`);
//# sourceMappingURL=super-heros-https.js.map