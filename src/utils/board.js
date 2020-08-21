export function createBoard() {
    const array = Array(16);
    return array.fill(0);
}

export function fillOneCell(arr) {
    const num = Math.floor(Math.random() * 16);
    if (arr[num]) {
        return fillOneCell(arr)
    }

    arr[num] = 2;
    return arr;
}

export function initBoard() {
    let arr = createBoard()
    arr = fillOneCell(arr)
    return fillOneCell(arr)
}

function row(arr, direction) {
    let score = 0;
    let newArr = (direction === 'end' ? arr.reverse() : arr).filter(el => el)
    newArr = newArr.reduce((acc, curr, index) => {
        if (curr === acc[index+1]) {
            acc[index] += curr;
            acc[index+1] = 0;
            score += curr*2;
            return acc;
        }
        return acc;
    }, [...newArr]).filter(el => el)

    if (direction === 'end') {
        return {score, row: Array(4-newArr.length).fill(0).concat(newArr.reverse())}
    }
    return {score, row: newArr.concat(Array(4-newArr.length).fill(0))};
}

export function horizontal(arr, direction) {
    const first = row(arr.slice(0, 4), direction);
    const second = row(arr.slice(4, 8), direction);
    const third = row(arr.slice(8, 12), direction);
    const fourth = row(arr.slice(12, 16), direction);

    return {
        score: first.score + second.score + third.score + fourth.score,
        row: first.row
            .concat(second.row)
            .concat(third.row)
            .concat(fourth.row)
    }
}

export function vertical(arr, direction) {
    const first = row([arr[0], arr[4], arr[8], arr[12]], direction);
    const second = row([arr[1], arr[5], arr[9], arr[13]], direction);
    const third = row([arr[2], arr[6], arr[10], arr[14]], direction);
    const fourth = row([arr[3], arr[7], arr[11], arr[15]], direction);

    return {
        score: first.score + second.score + third.score + fourth.score,
        row: [first.row[0], second.row[0], third.row[0], fourth.row[0]]
            .concat([first.row[1], second.row[1], third.row[1], fourth.row[1]])
            .concat([first.row[2], second.row[2], third.row[2], fourth.row[2]])
            .concat([first.row[3], second.row[3], third.row[3], fourth.row[3]])
    }
}
