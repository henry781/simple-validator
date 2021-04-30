import {expect} from 'chai';
import {validators} from './validators';

describe('validators', () => {

    /**
     * Not empty
     */
    describe('notEmpty', () => {

    });

    /**
     * In
     */
    describe('in', () => {

    });

    /**
     * Integer
     */
    describe('integer', () => {

    });

    /**
     * Valid
     */
    describe('valid', () => {

    });

    /**
     * Match pattern
     */
    describe('matchPattern', () => {

        it('should return error when pattern doesn\'t match', () => {
            const obj = {property: '"abc'};
            const result = validators.matchPattern(obj, 'property', {pattern: /^[a-z]+$/});
            expect(result).to.equal('should match pattern </^[a-z]+$/>');
        });

        it('should return undefined when pattern match', () => {
            const obj = {property: 'abc'};
            const result = validators.matchPattern(obj, 'property', {pattern: /^[a-z]+$/});
            expect(result).to.be.undefined;
        });
    });
});
