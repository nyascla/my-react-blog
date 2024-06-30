
# Iterables
``.find()``
`.sort()` or `sorted()` Timesort O(n log n)
`[start:end:step]` 
-   `start` es la posición inicial desde donde comenzar el corte (inclusivo). Si no se especifica, se asume que es 0.
-   `end` es la posición final hasta donde llegar el corte (exclusivo). Si no se especifica, se asume que es el final de la secuencia.
-   `step` es el número de saltos que se deben realizar para obtener el siguiente elemento. Si no se especifica, se asume que es 1.
## Dictionary
### General
a\["James"\] = 100
key in a.keys()
dict(sorted(a.items(), key=lambda x:x\[1\]))
words_len_dict = {i:len(i) for i in words}
### Merge Dictionaries
a = {"James": 95, "Jane": 98}  
b = {"Matt": 85, "Ashely": 90}  
c = a | b
c = {\*\*a, \*\*b}

---
### Remove a key
a = {"James": 95, "Jane": 98, "Matt": 85, "Ashely": 90}  
del a\["James"\]
a.pop("James", None)  

---
### Make Dictionaty from list of keys and list of values
names = \["James", "Jane", "Matt", "Ashley"\]  
grades = \[95, 98, 85, 90\]  
  
grades_dict = dict(zip(names, grades))

---
from collections import defaultdict

# Inmutables
>`ord(char)`  Char to int  
>`chr( int)`  Int to Char