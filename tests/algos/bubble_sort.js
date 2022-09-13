import { sortList } from "../../algos/bubble_sort.js"

function generateArray(length, max) {
    return [...new Array(length)].map(() => Math.round(Math.random() * max))
}

function testBubbleSort(list) {
    const oldList = list.slice()
    sortList(list)
    const isCorrect = list.every((el, idx) => {
        return el === oldList[idx]
    })
    console.log((isCorrect) ? 'Correct' : 'Incorrect')
}

testBubbleSort([1, 2, 3, 4, 5])
testBubbleSort([0, 89, 0, 567, 1111, 2654654])
testBubbleSort(generateArray(10, 100))
testBubbleSort(generateArray(100, 1000))
testBubbleSort(generateArray(111, 1111111))