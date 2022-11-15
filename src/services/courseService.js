import api from "./api";

export const courseService = {

    // MÉTODOS DE CURSO (buscar curso por id, autor, trilha, tag, tema, duração, título, tipo de conteúdo, criar e deletar curso)
    getAllCourses: async () => {
        let response = await api.get('courses');
        return response;
    },

    getCourseById: async (id) => {
        let response = await api.get(`courses/${id}`);
        return response;
    },

    getCoursesByAuthor: async (author) => {
        let response = await api.get(`courses/authors/${author}`);
        return response;
    },

    getCoursesByRoad: async (road) => {
        let response = await api.get(`courses/roads/${road}`);
        return response;
    },

    getCoursesByTag: async (tag) => {
        let response = await api.get(`courses/tags/${tag}`);
        return response
    },

    getCoursesByTheme: async (theme) => {
        let response = await api.get(`courses/themes/${theme}`);
        return response
    },

    getCourseByTime: async (time) => {
        let response = await api.get(`courses/times/${time}`);
        return response
    },

    getCourseByTitle: async (title) => {
        let response = await api.get(`courses/titles/${title}`);
        return response
    },

    getCoursesByType: async (type) => {
        let response = await api.get(`courses/types/${type}`);
        return response
    },

    createCourse: async(title, author, idRoad, idTheme, idType, link, tags, time, description) => {
        let response = await api.post(`/courses`, {title, author, idRoad, idTheme, idType, link, tags, time, description});
        return response;
    },

    deleteCourseById: async (id) => {
        let response = await api.delete(`courses/${id}`);
        return response;
    }

}