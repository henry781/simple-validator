import {isNotEmpty} from '../core/decorators';

export class Satellite {

    @isNotEmpty()
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    constructor(options?: SatelliteOptions) {
        if (options) {
            this._name = options.name;
        }
    }

}

export interface SatelliteOptions {
    name?: string;
}
