const solution = require('./adjacentElementsProduct.js');

test('test 1', () => {
    expect(solution([3, 6, -2, -5, 7, 3])).toBe(21);
});

test('test 2', () => {
    expect(solution([-1, -2])).toBe(2);
});

test('test 3', () => {
    expect(solution([5, 1, 2, 3, 1, 4])).toBe(6);
});

test('test 4', () => {
    expect(solution([1, 2, 3, 0])).toBe(6);
});

test('test 5', () => {
    expect(solution([9, 5, 10, 2, 24, -1, -48])).toBe(50);
});

test('test 6', () => {
    expect(solution([5, 6, -4, 2, 3, 2, -23])).toBe(30);
});

test('test 7', () => {
    expect(solution([4, 1, 2, 3, 1, 5])).toBe(6);
});

test('test 8', () => {
    expect(solution([-23, 4, -3, 8, -12])).toBe(-12);
});

test('test 9', () => {
    expect(solution([1, 0, 1, 0, 1000])).toBe(0);
});
