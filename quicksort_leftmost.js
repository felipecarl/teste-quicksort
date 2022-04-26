const unsorted = [44, 88, 77, 22, 66, 11, 99, 55, 00, 33];

const quicksort = (arr, start, end) => {
  start = start !== undefined ? start : 0;
  end = end !== undefined ? end : arr.length;

  // check if there is more than one element in the arr
  if((end - start) <= 1) return;

  let pivot = arr[start];
  let swap = start;

  for(i = start; i < end; i++) {

    // check if item is smaller than pivot
    if(arr[i] < pivot) {

      let smaller = arr[i];

      arr[i] = arr[++swap];
      arr[swap] = smaller;

    }

    if(i === end - 1 && arr[start] !== arr[swap]) {
      // swaps pivot with biggest smaller
      arr[start] = arr[swap];
      arr[swap] = pivot;
    }

  }

  // recursion upper
  quicksort(arr, (swap + 1), end);

  // recursion lower
  quicksort(arr, start, (swap));

  return arr;
}


console.log(quicksort(unsorted));