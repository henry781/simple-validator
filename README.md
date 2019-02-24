# simple-validator

simple-validator is a basic typescript class validator, it works with decorators and produce an array of validation errors.

WIP : not for production

## Usage
Add the field decorators, see below for a list of available decorators.
```
export class Planet {

    @isInteger()
    private _index: number;
    
    @isNotEmpty()
    private _name: string;

    @isNotEmpty()
    private _aliases: string[];

    @isIn({arr: ['RED', 'BLUE']})
    private _color: string;

    @isValid()
    @isNotEmpty()
    private _satellites: Satellite[];

    constructor(options?: PlanetOptions) {
        if (options) {
            this._index = options.index;
            this._name = options.name;
            this._aliases = options.aliases;
            this._color = options.color;
            this._satellites = options.satellites;
        }
    }
```

### Case invalid

```
const satellite = new Satellite({});
const planet = new Planet({satellites: [satellite]});

const result = Validator.validate(planet);

// result is an array :
// _index : should be an integer
// _name : should not be empty
// _aliases : should not be empty
// _color : should be one of <RED,BLUE>
// _satellites : 0 : _name : should not be empty
```

### Case valid

```
const satellite = new Satellite({name: 'moon'});
const planet = new Planet({
    aliases: ['home', 'blue-planet'],
    color: 'BLUE',
    index: 3,
    name: 'earth',
    satellites: [satellite],
});

const result = Validator.validate(planet);

// result is an empty array
```
