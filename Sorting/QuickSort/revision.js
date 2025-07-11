function main(){
    let arr = [78,43,54,23,76,21,3];
    console.log(quickSort(arr));
}

function quickSort(arr,start=0,end=arr.length - 1){
   if(start >= end) return;
   let low = start;
   let high = end;
   let pivot = arr[Math.floor((start+end)/2)];

   while(low <= high){

    while(arr[low] < pivot){
        low++;
    }
    while(arr[high] > pivot){
        high--;
    }
    if(low <= high){
        [arr[low],arr[high]] = [arr[high],arr[low]];
        low++;
        high--;
    }


   }

   quickSort(arr,start,high);
   quickSort(arr,low,end);
   return arr;
}



main();


//  ai explanation +++++++++++++++++++++++++++++++++
function main(){
    let arr = [78, 43, 54, 23, 76, 21, 3];
    console.log(quickSort(arr)); // Start sorting and print the sorted array
}

function quickSort(arr, start = 0, end = arr.length - 1){
    // 🛑 Base case: when subarray has 0 or 1 element, it's already sorted
    if(start >= end) return;

    // 🧭 Initialize pointers
    let low = start;
    let high = end;

    // 🎯 Choose a pivot value (middle element) – not its position!
    // This value is used for comparison, not moved explicitly
    let pivot = arr[Math.floor((start + end) / 2)];

    // 🔁 Main partition loop: rearrange elements around the pivot
    while(low <= high){

        // ⬅️ Move `low` rightward until we find something >= pivot
        while(arr[low] < pivot){
            low++;
        }

        // ➡️ Move `high` leftward until we find something <= pivot
        while(arr[high] > pivot){
            high--;
        }

        // 🔄 Swap if `low` hasn't passed `high`
        // ⚠️ Edge case: We must check `low <= high` again before swap
        // Otherwise, we might swap elements that have already crossed
        if(low <= high){
            // Swap elements at low and high
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;  // move forward after swap
            high--; // move backward after swap
        }
    }

    // 🔂 Recurse on left and right subarrays

    // ⚠️ Edge case: if pivot duplicates exist, they might be on both sides.
    // We include the pivot in recursion to ensure all values are checked.
    quickSort(arr, start, high); // Left side (elements < pivot or equal)
    quickSort(arr, low, end);    // Right side (elements > pivot or equal)

    // Return the array after it's sorted
    return arr;
}
