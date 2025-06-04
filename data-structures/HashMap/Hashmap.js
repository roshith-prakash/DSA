class HashMap {
  constructor(size = 53) {
    this.buckets = new Array(size); // Array of buckets to store key-value pairs
    this.size = size; // Prime number size helps reduce collisions
  }

  // Hash function to convert keys to array indices
  _hash(key) {
    let total = 0;
    const PRIME = 31; // Prime multiplier to spread out the hash
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96; // 'a' becomes 1, 'b' becomes 2, etc.
      total = (total * PRIME + value) % this.size;
    }
    return total;
  }

  // Set or update a key-value pair
  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) this.buckets[index] = []; // Create a new bucket if none

    // Check if key already exists; if so, update
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    // Key doesn't exist, insert new pair
    this.buckets[index].push([key, value]);
  }

  // Get the value associated with a key
  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      for (let pair of bucket) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined; // Key not found
  }

  // Check if the key exists in the map
  has(key) {
    return this.get(key) !== undefined;
  }

  // Delete a key-value pair
  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1); // Remove the key-value pair
          return true;
        }
      }
    }
    return false; // Key not found
  }

  // Return all keys stored in the map
  keys() {
    const allKeys = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          allKeys.push(pair[0]);
        }
      }
    }
    return allKeys;
  }
}

// Example usage:
const map = new HashMap();
map.set("name", "Roshith");
map.set("age", 30);
map.set("location", "Mumbai");

console.log(map.get("name")); // "Roshith"
console.log(map.has("age")); // true
console.log(map.delete("age")); // true
console.log(map.get("age")); // undefined
console.log(map.keys()); // ["name", "location"]
