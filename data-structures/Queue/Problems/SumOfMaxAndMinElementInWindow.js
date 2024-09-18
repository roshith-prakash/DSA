const sumOfMinMaxElementInWindow = (arr, n, k) => {
    let max = [];
    let min = [];
    let ans = 0;

    // Addition of first k size window
    for (let i = 0; i < k; i++) {
        // Maintain the max queue
        while (max.length > 0 && arr[max[max.length - 1]] <= arr[i]) {
            max.pop();
        }

        // Maintain the min queue
        while (min.length > 0 && arr[min[min.length - 1]] >= arr[i]) {
            min.pop();
        }

        max.push(i);
        min.push(i);
    }

    // Add the sum of max and min elements for the first window
    ans += arr[max[0]] + arr[min[0]];

    // Process the remaining windows
    for (let i = k; i < n; i++) {
        // Remove elements out of the current window for max queue
        while (max.length > 0 && max[0] <= i - k) {
            max.shift();
        }

        // Remove elements out of the current window for min queue
        while (min.length > 0 && min[0] <= i - k) {
            min.shift();
        }

        // Maintain the max queue
        while (max.length > 0 && arr[max[max.length - 1]] <= arr[i]) {
            max.pop();
        }

        // Maintain the min queue
        while (min.length > 0 && arr[min[min.length - 1]] >= arr[i]) {
            min.pop();
        }

        max.push(i);
        min.push(i);

        // Add the sum of max and min elements for the current window
        ans += arr[max[0]] + arr[min[0]];
    }

    return ans;
};

const arr = [2, 5, -1, 7, -3, -1, -2];
const k = 4;
console.log(sumOfMinMaxElementInWindow(arr, arr.length, k)); // Output the result
