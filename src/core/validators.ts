import {Validator} from './Validator';

export type ValidatorFn = (obj: object, propertyKey: string, options: ValidatorOptions) => string[] | string;

/**
 * validators
 */
export const validators: { [name: string]: ValidatorFn } = {

    /**
     * Not empty
     * @param obj
     * @param propertyKey
     */
    notEmpty: (obj: object, propertyKey: string) => {

        const value = obj[propertyKey];

        if (value === undefined || value === null || value === '') {
            return 'should not be empty';
        }

        if (Array.isArray(value) && !value.length) {
            return 'should not be an empty array';
        }
    },

    /**
     * In
     * @param obj
     * @param propertyKey
     * @param options
     */
    in: (obj: object, propertyKey: string, options: InValidatorOptions) => {

        const value = obj[propertyKey];

        if (options.arr.indexOf(value) === -1) {
            return `should be one of <${options.arr}>`;
        }
    },

    /**
     * Integer
     * @param obj
     * @param propertyKey
     */
    integer: (obj: object, propertyKey: string) => {

        const value = obj[propertyKey];

        if (!Number.isInteger(value)) {
            return 'should be an integer';
        }
    },

    /**
     * Not defined
     * @param {object} obj
     * @param {string} propertyKey
     * @returns {string}
     */
    notDefined: (obj: object, propertyKey: string) => {

        const value = obj[propertyKey];

        if (value !== undefined && value !== null) {
            return 'should not be defined';
        }
    },

    /**
     * Valid
     * @param obj
     * @param propertyKey
     */
    valid: (obj: object, propertyKey: string) => {
        const value = obj[propertyKey];
        return Validator.validate(value);
    },

    /**
     * Has min length
     * @param {object} obj
     * @param {string} propertyKey
     * @param {HasLengthValidatorOptions} options
     * @returns {string}
     */
    minLength: (obj: object, propertyKey: string, options: HasLengthValidatorOptions) => {

        const value = obj[propertyKey];

        if (value === undefined || value === null || value === '') {
            return `should have minimum length <${options.length}>`;
        }

        if (value.length < options.length) {
            return `should have minimum length <${options.length}>`;
        }
    },

    /**
     * Max length
     * @param {object} obj
     * @param {string} propertyKey
     * @param {HasLengthValidatorOptions} options
     * @returns {string}
     */
    maxLength: (obj: object, propertyKey: string, options: HasLengthValidatorOptions) => {

        const value = obj[propertyKey];

        if (value === undefined || value === null || value === '') {
            return;
        }

        if (value.length > options.length) {
            return `should have maximum length <${options.length}>`;
        }
    },

    /**
     * Match pattern
     * @param {object} obj
     * @param {string} propertyKey
     * @param {MatchPatternValidatorOptions} options
     * @returns {string}
     */
    matchPattern: (obj: object, propertyKey: string, options: MatchPatternValidatorOptions) => {

        const value = obj[propertyKey];

        if (!value || typeof value !== 'string') {
            return `should match pattern <${options.pattern}>`;
        }

    },
};

export interface ValidatorOptions {
}

export interface InValidatorOptions extends ValidatorOptions {
    arr: any[];
}

export interface HasLengthValidatorOptions extends ValidatorOptions {
    length: number;
}

export interface MatchPatternValidatorOptions extends ValidatorOptions {
    pattern: RegExp;
}
