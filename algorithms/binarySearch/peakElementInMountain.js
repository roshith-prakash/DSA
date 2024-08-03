// Find the element which is the peak of the array which is a mountain (left to index rises, right to index falls)
const peakElementInMountain = ({ arr }) => {
    // Find middle of array
    let s = 0
    let e = arr.length - 1
    let mid = Math.floor((s + e) / 2)
    let peak = false


    while (s <= e) {
        // Replace peak value
        peak = arr[mid]

        // If element after mid is larger, move to the right
        if (arr[mid + 1] > arr[mid]) {
            s = mid + 1
        }
        // If element before mid is larger, move to the left
        else if (arr[mid - 1] > arr[mid]) {
            e = mid - 1
        }
        else {
            break
        }

        // Calculate mid
        mid = Math.floor((s + e) / 2)
    }

    // Return the index or false
    return peak
}


let arr = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19]
console.log(peakElementInMountain({ arr }))