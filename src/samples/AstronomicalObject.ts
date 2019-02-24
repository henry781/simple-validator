import {isNotEmpty} from '../core/decorators';

export abstract class AstronomicalObject {

    @isNotEmpty()
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    constructor(options?: AstronomicalObjectOptions) {
        if (options) {
            this._name = options.name;
        }
    }
}

export interface AstronomicalObjectOptions {
    name?: string;
}
