function selectionSort(a) {
    for (var i = 0; i < a.length; i++) {
        var mi = i

        for (var j = i + 1; j < a.length; j++) {
            if (a[j] < a[mi])   //finds the index of the smallest number
                mi = j          //assigns the index value to mi
        }

        var temp = a[i]
        a[i] = a[mi]        //smallest number now assigned to 0th index
        a[mi] = temp        //number previously indexed at 0 gets indexed at smallest number's previous index
    }
    //continues for the next smallest number etc.
}

var ary = []

for (var i = 0; i < 168; i++) {

    //increments of 1000 till 150000 then incrmeents of 50000 till 1000000
    var maxNum = 0 + (1000 * i)
    if (maxNum > 150000) {
        var temp = i - 150
        maxNum = 150000 + (50000 * temp)
    }

    //generates random array
    for (var j = 0; j < maxNum; j++) {
        ary[j] = Math.floor(Math.random() * 10000000)
    }

    console.time('For ' + maxNum + ' number it takes')
    selectionSort(ary);
    console.timeEnd('For ' + maxNum + ' number it takes')
}