module.exports = function reverse (n) {
    const str = String(Math.abs(n)).split('');
    str.reverse();
    return str.join('');
}

