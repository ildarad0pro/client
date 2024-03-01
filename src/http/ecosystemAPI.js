import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createEcosystem = async (ecosystem) => {
    const {data} = await $authHost.post('api/ecosystem', ecosystem)
    return data
}

export const deleteEcosystem = async (ecosystemId) => {
    const { data } = await $authHost.delete(`api/ecosystem/${ecosystemId}`);
    return data;
};

// Получение списка экосистем
export const fetchEcosystems = async () => {
    const { data } = await $host.get('api/ecosystem');
    return data;
};


export const updateEcosystem = async (ecosystemId, updatedEcosystemData) => {
    const { data } = await $authHost.put(`api/ecosystem/${ecosystemId}`, updatedEcosystemData);
    return data;
};


