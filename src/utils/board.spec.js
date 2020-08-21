const { vertical, horizontal } = require('./board')

test('vertical start', () => {
    const res = vertical([0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0], 'start')

    expect(res).toEqual({
        row: [0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0],
        score: 0
    })
})

test('vertical end', () => {
    const res = vertical([
        0,0,0,0,
        0,0,0,0,
        0,2,0,0,
        0,0,2,0
    ], 'end')

    expect(res).toEqual({
        row: [0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0],
        score: 0
    })
})

test('horizontal start', () => {
    const res = horizontal([0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0], 'start')

    expect(res).toEqual({
        row: [0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0],
        score: 0
    })
})

test('horizontal end', () => {
    const res = horizontal([0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0], 'end')

    expect(res).toEqual({
        row: [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2],
        score: 0
    })
})
