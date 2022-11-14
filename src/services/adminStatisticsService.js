import api from "./api";

export const adminStatistic = {

    //ESTATÍSTICAS DO ADMINISTRADOR (número de cursos, usuários, cursos em andamento, cursos concluídos e cursos não-feitos)
    getNumberOfUsers: async () => {
        let response = api.get(`statisticAdmin/counterUser`);
        return response;
    },

    getNumberOfCourses: async () => {
        let response = api.get(`statisticAdmin/counterCourses`);
        return response;
    },

    usersDoingACourse: async(courseId) => {
        let response = api.get(`statisticAdmin/coursesDoing/${courseId}`);
        return response;
    },

    usersNotDoingACourse: async(courseId) => {
        let response = api.get(`statisticAdmin/coursesDidnt/${courseId}`);
        return response;
    },

    userDoneACourse: async(courseId) => {
        let response = api.get(`statisticAdmin/coursesDone/${courseId}`);
        return response;
    },

    usersDoingARoad: async(roadName) => {
        let response = api.get(`statisticAdmin/counter/user/doing/road/${roadName}`);
        return response;
    },

    usersDidntARoad: async(roadName) => {
        let response = api.get(`statisticAdmin/counter/user/didnt/road/${roadName}`);
        return response;
    },

    userDoneARoad: async(roadName) => {
        let response = api.get(`/statisticAdmin/counter/user/done/road/${roadName}`);
        return response;
    },

    usersDoingATheme: async(themeName) => {
        let response = api.get(`/statisticAdmin/counter/user/doing/theme/${themeName}`);
        return response;
    },

    usersDidntATheme: async(themeName) => {
        let response = api.get(`statisticAdmin/counter/user/didnt/theme/${themeName}`);
        return response;
    },

    usersDoneATheme: async(themeName) => {
        let response = api.get(`/statisticAdmin/counter/user/done/theme/${themeName}`);
        return response;
    }

}