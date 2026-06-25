# Map

- #### Not child interface of Collection.
- #### Used to represent key-value pairs.
- #### Duplicate keys not allowed.

---

### HashMap

- #### Implementation of Map interface.
- #### Implements Cloneable and Serializable.
- #### Uses HashTable.
- #### Key-value pair is called ENTRY. 
- #### Entry is a predefined interface  - can be used to get key value pair.
- #### One maximum null value in key.
- #### Can store heterogeneous data.
- #### No sorting or insertion order.
- #### NON synchronized.


### LinkedHashMap

- #### Implementation of Map interface.
- #### Extends HashMap class.
- #### Implements Cloneable and Serializable.
- #### Uses HashTable + Doubly Linked List.
- #### Key-value pair is called ENTRY.
- #### Entry is a predefined interface - can be used to get key value pair.
- #### One maximum null key allowed.
- #### Multiple null values allowed.
- #### Can store heterogeneous data.
- #### Maintains insertion order.
- #### No sorting.
- #### NON synchronized.
- #### Slightly slower than HashMap due to linked list maintenance.
- #### Used when insertion order must be preserved.
