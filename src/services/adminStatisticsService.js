import api from "./api";

export const adminStatistic = {

    //ESTATÍSTICAS DO ADMINISTRADOR (número de cursos, usuários, cursos em andamento, cursos concluídos e cursos não-feitos)
    getNumberOfCourses: async () => {
        let response = api.get(`statisticAdmin/counterCourses`);
        return response;
    },

    getNumberOfUsers: async () => {
        let response = api.get(`statisticAdmin/counterUser`);
        return response;
    },

    usersNotDoingACourse: async(courseId) => {
        let response = api.get(`statisticAdmin/coursesDidnt/${courseId}`);
        return response;
    },

    usersDoingACourse: async(courseId) => {
        let response = api.get(`statisticAdmin/coursesDoing/${courseId}`);
        return response;
    },

    userDoneACourse: async(courseId) => {
        let response = api.get(`statisticAdmin/coursesDone/${courseId}`);
        return response;
    }

}