
/**
 * This is api access to https://www.superheroapi.com/
 * used for the ts-suerhero-enthusiast applicaiton
 */
import axios from "axios";

// powershell terminal, bash does not work?
// node C:\...\super-heros-https.js
export const getSuperHeroByName = async (token: string, name: string) => axios
    .get(`https://www.superheroapi.com/api.php/${token}/search/${name}`);

export const getSuperHeroById = async (token: string, id: string) => axios
    .get(`https://www.superheroapi.com/api.php/${token}/${id}`);

