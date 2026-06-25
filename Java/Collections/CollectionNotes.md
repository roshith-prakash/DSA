# Collections

## List

### ArrayList

- #### ArrayList is a child class of List interface.
- #### Allows Duplicates.
- #### Follows insertion order.
- #### Allows Heterogeneous 
- #### Allows null values.
- #### Non-synchronized methods.
- #### Non-Thread Safe.
- #### FASTER.
- #### Best choice when frequent operation is retrieval / access.

---

### LinkedList

- #### Linkedlist is a child class of List interface.
- #### Allows Duplicates.
- #### Follows insertion order.
- #### Allows Heterogeneous 
- #### Allows null values.
- #### LL is the best choice when frequent operation is insertion/deletion in the middle of the list.

---

### Vector

- #### Resizable / Growable.
- #### Allows Duplicates.
- #### Follows insertion order.
- #### Allows Heterogeneous 
- #### Allows null values.
- #### Implements Serializable, Cloneable, RandomAccess Interfaces.
- #### Synchronized (IMPORTANT). 
- #### Thread safe. (IMPORTANT).
- #### SLOWER.
- #### Best choice when frequent operation is retrieval / access.

---

### Stack

- #### Stack is a child class of Vector class.
- #### LIFO

---

## Set

- No Duplicates.
- Insertion order does not matter.

### HashSet

- #### Uses HashTable
- #### Heterogeneous objects allowed.
- #### Null insertion is possible.
- #### Serializable and Clonable interfaces implemented.
- #### Best for Search operation.

### LinkedHashSet

- #### Child of HashSet
- #### LinkedList + HashTable used
- #### Insertion order is PRESERVED.
- #### Introduced in 1.4 version

### TreeSet

- #### Uses Balanced Tree.
- #### Elements inserted according to sorted order.
- #### Heterogeneous objects NOT allowed.