export function sortList(list) {
    let isRepeat = true
    do {
        isRepeat = false
        list.reduce((prev, current, idx) => {
            if (prev > current) {
                [list[idx - 1], list[idx]] = [list[idx], list[idx - 1]]
                isRepeat = true
                return prev
            } else {
                return current
            }
        })
    } while (isRepeat)
    return list
}