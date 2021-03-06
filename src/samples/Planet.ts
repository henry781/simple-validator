import {isIn, isInteger, isNotEmpty, isValid} from '../core/decorators';
import {AstronomicalObject, AstronomicalObjectOptions} from './AstronomicalObject';
import {Satellite} from './Satellite';

export class Planet extends AstronomicalObject {

    @isInteger()
    private _index: number;

    get index(): number {
        return this._index;
    }

    set index(value: number) {
        this._index = value;
    }

    @isNotEmpty()
    private _aliases: string[];

    get aliases(): string[] {
        return this._aliases;
    }

    set aliases(value: string[]) {
        this._aliases = value;
    }

    @isIn({arr: ['RED', 'BLUE']})
    private _color: string;

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    @isValid()
    @isNotEmpty()
    private _satellites: Satellite[];

    get satellites(): Satellite[] {
        return this._satellites;
    }

    set satellites(value: Satellite[]) {
        this._satellites = value;
    }

    constructor(options?: PlanetOptions) {
        super(options);
        if (options) {
            this._index = options.index;
            this._aliases = options.aliases;
            this._color = options.color;
            this._satellites = options.satellites;
        }
    }
}

export interface PlanetOptions extends AstronomicalObjectOptions {
    index?: number;
    aliases?: string[];
    color?: string;
    satellites?: Satellite[];
}
