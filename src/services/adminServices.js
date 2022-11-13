import api from "./api";

export const adminServices = {

    // METODOS DO ADMINISTRADOR (buscar e criar trilhas, temas, tipos)
    getAllRoadsName: async() => {
        let response = api.get(`adminServices/roads/names`);
        return response;
    },

    getAllThemesName: async() => {
 Feat/api-services
        let response = api.get(`adminServices/themes/names`);
=======
        let reponse = api.get(`adminServices/themes/names`);
 develop
        return response;
    },

    getAllTypesName: async() => {
 Feat/api-services
        let response = api.get(`adminServices/types/names`);
=======
        let response = api.get(`/adminServices/types/names`);
 develop
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