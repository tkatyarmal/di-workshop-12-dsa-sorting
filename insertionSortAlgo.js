function insertionSort(a) {

    for (var i = 1; i < a.length; i++) {
        var inserted = false

        for (var j = 0; j < i && inserted == false; j++) {

            if (a[i] <= a[j]) {
                a.splice(0, 0, a.splice(i, 1)[0])
                inserted = true
            }
            else if (a[j] <= a[i] && a[i] <= a[j + 1]) {
                a.splice(j + 1, 0, a.splice(i, 1)[0])
                inserted = true
            }
        }
    }
}

//22

// var ary = [34, 203, 3, 746, 200, 984, 198, 764, 9];

var ary = []
var maxNum = 100000

for (var j = 0; j < maxNum; j++) {
    ary[j] = Math.floor(Math.random() * 10000000)
}


console.time('For ' + maxNum + ' number it takes')
insertionSort(ary)
console.timeEnd('For ' + maxNum + ' number it takes')
// console.log(ary)

// for (var i = 0; i < 168; i++) {

//     //increments of 1000 till 150000 then incrmeents of 50000 till 1000000
//     var maxNum = 0 + (1000 * i)
//     if (maxNum > 150000) {
//         var temp = i - 150
//         maxNum = 150000 + (50000 * temp)
//     }

//     //generates random array
//     for (var j = 0; j < maxNum; j++) {
//         ary[j] = Math.floor(Math.random() * 10000000)
//     }

//     //prints execution time
//     console.time('For ' + maxNum + ' number it takes')
//     bubbleSort(ary)
//     console.timeEnd('For ' + maxNum + ' number it takes')
// }