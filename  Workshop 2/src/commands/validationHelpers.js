export function validateParamsCount(params, count) {
    if (params.length !== count) {
        throw new Error(`Invalid number of arguments. Expected: ${count}; received: ${params.length}.`);
    }
}

/**
* @param {string} str
* @returns {number}
*/
export function try_parse_float(str) {
    const floatValue = parseFloat(str);
    if (isNaN(floatValue)) {
        throw new Error(`Cannot convert ${str} to a floating point number.`);
    }
    return floatValue;
}

/**
* @param {string} str
* @returns {number}
*/
export function try_parse_int(str) {
    const intValue = parseInt(str);
    if (isNaN(intValue)) {
        throw new Error(`Cannot convert ${str} to an integer number.`);
    }
    return intValue;
}
