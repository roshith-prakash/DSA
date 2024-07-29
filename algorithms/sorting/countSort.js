// Count sort algorithm adds the count of the element into an object and then maps through the object.

const countSort = ({ array }) => {
    // Create an object to add the counts
    let obj = {}
    // Array for sorting
    let arr = []

    // Looping through the array
    for (let i = 0; i < array.length; i++) {

        // If key already present, increment the count
        if (obj[array[i]]) {
            obj[array[i]] = obj[array[i]] + 1
        }
        // If key not present, iniialize the count
        else {
            obj[array[i]] = 1
        }
    }

    // Map the object
    Object.entries(obj).forEach((item) => {
        // Count the number of times the value is present
        for (let j = 0; j < item[1]; j++) {
            arr.push(Number(item[0]))
        }
    })

    return arr
}

const arr = [3, 4, 8, 4, 9, 7, 5, 7, 6, 1, 2]

console.log(countSort({ array: arr }))
