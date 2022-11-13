import api from "./api";

export const adminServices = {

    // METODOS DO ADMINISTRADOR (buscar e criar trilhas, temas, tipos)
    getAllRoadsName: async() => {
        let response = api.get(`adminServices/roads/names`);
        return response;
    },

    getAllThemesName: async() => {
        let reponse = api.get(`adminServices/themes/names`);
        return response;
    },

    getAllTypesName: async() => {
        let response = api.get(`adminServices/types/names`);
        return response;
    },

    createANewRoad: async(road) => {
        let response = api.post(`adminServices/roads`, road);
        return response;
    },

    createANewTheme: async(theme) => {
        let response = api.post(`adminServices/themes`, theme);
        return response;
    },

    createANewType: async(type) => {
        let response = api.post(`adminServices/types`, type);
        return response;
    }

}