import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createKit = async (kit) => {
    const {data} = await $authHost.post('api/kit', kit)
    return data
}

export const deleteKit = async (kitId) => {
    const { data } = await $authHost.delete(`api/kit/${kitId}`);
    return data;
};

export const updateKit = async (kitId, updatedKitData) => {
    const { data } = await $authHost.put(`api/kit/${kitId}`, updatedKitData);
    return data;
};

