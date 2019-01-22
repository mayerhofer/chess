var util = {};

util.nextChar = (c) => {
    return String.fromCharCode(c.charCodeAt(0) - 1);
}

module.exports = util;
