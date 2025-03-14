function majorityElement(arr) {
    let counts = {};
    let majority = arr.length / 2;
    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > majority) return num;
    }
    return null;
}

console.log(majorityElement([3, 3, 4, 2, 3, 3, 3])); // 3
