import { request } from './request.js';

const url = 'http://localhost:5501/assets/json/animales.json';

const getAnimales = async () => {
    try {
        const { animales } = await request(url);
        return animales;
    } catch (error) {
        console.log('animales request error: ', error);
    }
};

export { getAnimales };