import 'reflect-metadata';
import {InValidatorOptions, ValidatorFn, ValidatorOptions, validators} from './validators';

/**
 * Is
 * @param validatorFn
 * @param options
 */
export function is(validatorFn: ValidatorFn, options?: ValidatorOptions) {

    return (cls: any, propertyKey: string) => {

        const rules: ValidatorRule[] = Reflect.getOwnMetadata('validator:rules', cls) || [];

        rules.push({
            options,
            propertyKey,
            validatorFn,
        });

        Reflect.defineMetadata('validator:rules', rules, cls);
    };
}

export function isNotEmpty() {
    return is(validators.notEmpty);
}

export function isInteger() {
    return is(validators.integer);
}

export function isIn(options: InValidatorOptions) {
    return is(validators.in, options);
}

export function isValid() {
    return is(null, null);
}

export interface ValidatorRule {
    validatorFn: ValidatorFn;
    propertyKey: string;
    options: ValidatorOptions;
}
