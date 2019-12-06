function mergeSort(list) {
  if (list.length === 1) {
    return list;
  }
  var listA = mergeSort(list.slice(0, list.length / 2));
  var listB = mergeSort(list.slice(list.length / 2));

  var i = 0;
  var j = 0;

  var newList = [];

  while (i < listA.length || j < listB.length) {
    if (i !== listA.length && (listA[i] < listB[j] || j === listB.length)) {
      newList.push(listA[i]);
      i++;
    } else {
      newList.push(listB[j]);
      j++;
    }
  }

  return newList;
}



for (var i = 1; i < 1000; i++) {
  var ary = []
  var maxNum = 0 + (1000 * i)

  //generates random array
  for (var j = 0; j < maxNum; j++) {

    ary.push(Math.floor(Math.random() * 100))
  }

  //prints execution time
  console.time('For ' + maxNum + ' number it takes')
  mergeSort(ary)
  console.timeEnd('For ' + maxNum + ' number it takes')
}