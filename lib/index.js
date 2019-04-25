const debug = /(^|debugger|\/\/|console\.log)(.*)\n/g;
module.exports = function(source) {
    const value = source.replace(debug, '');
    return value;
}