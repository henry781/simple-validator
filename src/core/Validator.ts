import 'reflect-metadata';
import {ValidatorRule} from './decorators';

export class Validator {

    /**
     * Validate an object
     * @param obj
     */
    public static validate(obj: any): string[] {

        if (!obj) {
            return [];
        }

        // when obj is an array
        if (Array.isArray(obj)) {
            const result = [];
            obj.forEach((value, index) => {
                result.push(...Validator.validate(value).map((v) => `${index} : ${v}`));
            });
            return result;
        }

        // when obj is an object
        if (obj === Object(obj)) {
            const result = [];

            const rules: ValidatorRule[] = Reflect.getOwnMetadata('validator:rules', obj.constructor.prototype) || [];

            for (const rule of rules) {
                const validation = rule.validatorFn(obj, rule.propertyKey, rule.options);

                if (!validation) {
                    continue;
                }

                if (Array.isArray(validation)) {
                    result.push(...validation.map((v) => `${rule.propertyKey} : ${v}`));

                } else {
                    result.push(`${rule.propertyKey} : ${validation}`);
                }
            }

            return result;
        }

        return [];
    }
}
