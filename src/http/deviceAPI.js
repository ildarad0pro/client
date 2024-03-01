import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";



export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}
export const deleteDevice = async (deviceId) => {
    const { data } = await $authHost.delete(`api/device/${deviceId}`);
    return data;
};

export const updateDevice = async (deviceId, updatedDeviceData) => {
    const { data } = await $authHost.put(`api/device/${deviceId}`, updatedDeviceData);
    return data;
};

export const fetchDevices = async (typeId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}