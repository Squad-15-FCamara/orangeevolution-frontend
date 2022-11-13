import api from "./api";

export const statisticsService = {

    // MÉTODOS DE INTERAÇÃO COM CURSO (ADICIONAR E DELETAR 'curso favorito','curso em andamento' e 'curso concluído')
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

    getFavoritesCoursesByUser: async(userId) => {
        let response = await api.get(`statistics/favorites/courses/${userId}`);
        return response;
    },

    deleteAllFavoritesCoursesByUser: async(userId) => {
        let response = await api.delete(`statistics/delete/${userId}`);
        return response;
    },

    deleteFavoriteCourse: async(userId, courseId) => {
        let response = await api.delete(`statistics/delete/${userId}/${courseId}`);
        return response;
    }

}