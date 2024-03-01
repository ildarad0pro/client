import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createControl = async (control) => {
    const {data} = await $authHost.post('api/control', control)
    return data
}

export const deleteControl = async (controlId) => {
    const { data } = await $authHost.delete(`api/control/${controlId}`);
    return data;
};

// Получение списка управлений
export const fetchControls = async () => {
    const { data } = await $host.get('api/control');
    return data;
};

export const updateControl = async (controlId, updatedControlData) => {
    const { data } = await $authHost.put(`api/control/${controlId}`, updatedControlData);
    return data;
};



