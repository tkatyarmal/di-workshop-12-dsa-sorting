function bubbleSort(a) {
    var swapped;
    do {    // similar to a while loop but checks the condition at the end of one iteration
        // while loops check the condition at the start of one iteration
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];    //temp is just a placeholder for a[i]
                a[i] = a[i + 1];    //a[i] gets the value of a[i+1]
                a[i + 1] = temp;    //a[i+1] gets the value of temp
                swapped = true;     //swapped remains true even if only one swap occurs
            }
        }
    } while (swapped);
    //if even a single swap has occured, the loop runs again
    // stops running when no swaps hav occured
}


var ary = []

for (var i = 0; i < 8; i++) {
    var maxNum = Math.pow(10, i)

    for (var j = 0; j < maxNum; j++) {
        ary[j] = Math.floor(Math.random() * 10000000)
    }

    console.time('For ' + maxNum + ' number it takes')
    bubbleSort(ary)
    console.timeEnd('For ' + maxNum + ' number it takes')s
}