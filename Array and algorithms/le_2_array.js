/*
[Array]

Static arrays:
- Fixed size
- Next memory slot may not be empty

Dynamic arrays:
- Allows O(1) insertion and removal at end
- OS allocates almost 2 times as much memory as needed

- Worst case:
Access -> O(1)
Search -> O(n)
Copy -> O(n) (space complexity is O(n))
Insert: (space complexity is O(n))
  at the beginning -> O(n), because we need to shift all elements to the right
  at the end -> O(1) at average
  somewhere in between -> O(n)
Remove -> O(n): (space complexity is O(n))
  at the beginning -> O(n), shift all elements to the left
  at the end -> O(1)
  somewhere in between -> O(n)

*/