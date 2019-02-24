import 'reflect-metadata';
import {ValidatorRule} from './decorators';

export class Validator {

    public static validate(obj: any): string[] {

        if (!obj) {
            return [];
        }

        if (Array.isArray(obj)) {
            const result = [];
            obj.forEach((value, index) => {
                result.push(...Validator.validate(value)
                    .map((r) => `${index}.${r}`));
            });
            return result;
        }

        if (obj === Object(obj)) {
            const result = [];

            const rules: ValidatorRule[] = Reflect.getOwnMetadata('validator:rules', obj.constructor.prototype) || [];
            for (const rule of rules) {
                result.push(rule.validatorFn(obj, rule.propertyKey, rule.options));
            }

            return result;
        }

        throw new Error('');
    }
}
