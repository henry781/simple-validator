import * as chai from 'chai';
import {Validator} from '../core/Validator';
import {Planet} from './Planet';
import {Satellite} from './Satellite';

describe('Planet', () => {

    describe('when everything is invalid', () => {

        it('should return validation results', () => {

            const satellite = new Satellite({});
            const planet = new Planet({satellites: [satellite]});

            const result = Validator.validate(planet);

            chai.expect(result).length(5);
            chai.expect(result).members([
                '_index : should be an integer',
                '_name : should not be empty',
                '_aliases : should not be empty',
                '_color : should be one of <RED,BLUE>',
                '_satellites : 0 : _name : should not be empty']);
        });
    });

    describe('when everything is valid', () => {

        it('should return validation results', () => {

            const satellite = new Satellite({name: 'moon'});
            const planet = new Planet({
                aliases: ['home', 'blue-planet'],
                color: 'BLUE',
                index: 3,
                name: 'earth',
                satellites: [satellite],
            });

            const result = Validator.validate(planet);

            chai.expect(result).length(0);
        });
    });
});
