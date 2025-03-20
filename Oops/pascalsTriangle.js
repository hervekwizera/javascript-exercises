function pascalsTriangle(n) {
    let triangle = [[1]];
    
    for (let i = 1; i < n; i++) {
        let prevRow = triangle[i - 1];
        let newRow = [1];
        
        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        
        newRow.push(1);
        triangle.push(newRow);
    }
    
    return triangle;
}

console.log(pascalsTriangle(5));
/*
[
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1]
]
*/
