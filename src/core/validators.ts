export type ValidatorFn = (obj: object, propertyKey: string, options: ValidatorOptions) => string;

export const validators: { [name: string]: ValidatorFn } = {

    /**
     * Not empty
     * @param obj
     * @param propertyKey
     */
    notEmpty: (obj: object, propertyKey: string) => {

        const value = obj[propertyKey];

        if (value === undefined || value === null || value === '') {
            return `property <${propertyKey}> should not be empty`;
        }

        if (Array.isArray(value) && !value.length) {
            return `property <${propertyKey}> should not be an empty array`;
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
            return `property <${propertyKey}> should be one of <${options.arr}>`;
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
            return `property <${propertyKey}> should be an integer>`;
        }
    },

};

export interface ValidatorOptions {
}

export interface InValidatorOptions extends ValidatorOptions {
    arr: any[];
}
