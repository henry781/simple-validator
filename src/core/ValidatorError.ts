export function ValidatorError(errors: string[]) {

    this.status = 400;
    this.message = errors.toString();

    this.toString = function(): string {
        return this.message;
    };
}

ValidatorError.prototype = Object.create(Error.prototype, {
    constructor: {
        configurable: true,
        value: ValidatorError,
        writable: true,
    },
});
