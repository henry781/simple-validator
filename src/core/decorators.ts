import 'reflect-metadata';
import {
    HasLengthValidatorOptions,
    InValidatorOptions,
    MatchPatternValidatorOptions,
    ValidatorFn,
    ValidatorOptions,
    validators,
} from './validators';

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

/**
 * Is not empty
 */
export function isNotEmpty() {
    return is(validators.notEmpty);
}

/**
 * Is integer
 */
export function isInteger() {
    return is(validators.integer);
}

/**
 * Is not defined
 */
export function isNotDefined() {
    return is(validators.notDefined);
}

/**
 * Is in
 * @param options
 */
export function isIn(options: InValidatorOptions) {
    return is(validators.in, options);
}

/**
 * Is valid
 */
export function isValid() {
    return is(validators.valid);
}

/**
 * Has min length
 * @param {HasLengthValidatorOptions} options
 */
export function hasMinLength(options: HasLengthValidatorOptions) {
    return is(validators.minLength, options);
}

/**
 * Has max length
 * @param {HasLengthValidatorOptions} options
 */
export function hasMaxLength(options: HasLengthValidatorOptions) {
    return is(validators.maxLength, options);
}

/**
 * Match pattern
 * @param {MatchPatternValidatorOptions} options
 */
export function matchPattern(options: MatchPatternValidatorOptions) {
    return is(validators.matchPattern, options);
}

/**
 * Validator rule
 */
export interface ValidatorRule {
    validatorFn: ValidatorFn;
    propertyKey: string;
    options: ValidatorOptions;
}
