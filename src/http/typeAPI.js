import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const deleteType = async (typeId) => {
    const { data } = await $authHost.delete(`api/type/${typeId}`);
    return data;
};

export const updateType = async (typeId, updatedTypeData) => {
    const { data } = await $authHost.put(`api/type/${typeId}`, updatedTypeData);
    return data;
};
