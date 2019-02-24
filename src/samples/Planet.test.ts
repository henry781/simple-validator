import * as chai from 'chai';
import {Validator} from '../core/Validator';
import {Planet} from './Planet';

describe('Planet', () => {

    describe('when everything is invalid', () => {

        it('should return validation results', () => {

            const planet = new Planet({});

            const result = Validator.validate(planet);

            chai.expect(result).length(10);

        });
    });
});
