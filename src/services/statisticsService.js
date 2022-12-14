import api from "./api";

export const statisticsService = {

    // MÉTODOS DE INTERAÇÃO COM CURSO (ADICIONAR, DELETAR E BUSCAR 'curso favorito','curso em andamento' e 'curso concluído')
    addDoingCourse: async(userId, courseId) => {
        let response = await api.get(`statistics/doing/${userId}/${courseId}`);
        return response;
    },

    getDoingCoursesByUser: async(userId) => {
        let response = await api.get(`statistics/doing/courses/${userId}`);
        return response;
    },

    addDoneCourse: async(userId, courseId) => {
        let response = await api.get(`statistics/done/${userId}/${courseId}`);
        return response;
    },

    getDoneCoursesByUser: async(userId) => {
        let response = await api.get(`statistics/done/courses/${userId}`);
        return response;
    },

    addAFavoriteCourse: async(userId, courseId) => {
        let response = await api.get(`statistics/favorites/${userId}/${courseId}`);
        return response;
    },

    getFavoriteCoursesByUser: async(userId) => {
        let response = await api.get(`statistics/favorites/courses/${userId}`);
        return response;
    },

    deleteAllFavoriteCoursesByUser: async(userId) => {
        let response = await api.delete(`statistics/delete/${userId}`);
        return response;
    },

    deleteFavoriteCourse: async(userId, courseId) => {
        let response = await api.delete(`statistics/delete/favortes/${userId}/${courseId}`);
        return response;
    },

    deleteUserDoingCourse: async(userId, courseId) => {
        let response = await api.get(`statistics/delete/doing/${userId}/${courseId}`);
        return response;
    },

    deleteUserDoneCourse: async(userId, courseId) => {
        let response = await api.get(`statistics/delete/done/${userId}/${courseId}`);
        return response;
    }

}