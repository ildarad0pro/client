import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [];
        this._devices = [];
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;
        this._ecosystems = [];
        this._controls = []; // Добавляем массив для хранения способов управления
        makeAutoObservable(this);
    }

    setEcosystems(ecosystems) {
        this._ecosystems = ecosystems;
    }

    setControls(controls) { // Метод для установки данных о способах управления
        this._controls = controls;
    }

    setTypes(types) {
        this._types = types;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this.setPage(1);
        this._selectedType = type;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(count) {
        this._totalCount = count;
    }

    get types() {
        return this._types;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get ecosystems() {
        return this._ecosystems;
    }

    get controls() { // Геттер для доступа к списку способов управления
        return this._controls;
    }

    get totalCount() {
        return this._totalCount;
    }

    get page() {
        return this._page;
    }

    get limit() {
        return this._limit;
    }
}
