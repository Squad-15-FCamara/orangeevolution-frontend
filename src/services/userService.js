import api from "./api";

export const userService = {

 Feat/api-services
    // METODOS DE USUÁRIO (buscar todos os usuários, buscar por id, criar usuário, atualizar usuário e deletar usuário)
=======
    // METODOS DE USUÁRIO
 develop
    getAllUsers: async() => {
        let response = await api.get(`users`);
        return response;
    },

    getUserById: async(id) => {
        let response = await api.get(`users/${id}`);
        return response;
    },

    createUser: async(name, email, actualJob, isAdmin) => {
        let response = await api.post(`users`, {name, email, actualJob, isAdmin});
        return response;
    },

    updateUser: async(name, email, actualJob, isAdmin) => {
        let response = await api.put(`users`, {name, email, actualJob, isAdmin});
        return response;
    },

    deleteUserById: async(id) => {
        let response = await api.delete(`users/${id}`);
        return response;
    }

}