/*
Static arrays - are of fixed size, the next memory slot may not be empty.
Dynamic arrays - allow O(1) insertion at the end, alocated almost twice as much memory needed.


at the beginning:
T = O(n)
-the arrays are pushed to the left to provide space for the new value, is thus dependent on the 
number of values in the array.

at the end:
T = O(1)
-simply adding at the end, for dynamic.
-for static, O(n)


somewhere in between:
T = O(n)

 */