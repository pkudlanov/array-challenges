Array Challenges
===

Create your own repo. Use a branch so you can open a PR against master. Use one module file and one test file per problem.
Setup can be minimal, but make sure to have `eslint` plus testing utilities
and npm scripts.

## Multiples of `n`

Write a function that takes a positive integer `n`, and returns an array that contains, all of the numbers from `1` to `100` that are multiples of `n`.

In | Out
---|---
`5` | `[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]`
`15` | `[15, 30, 45, 60, 75, 90]`
`113` | `[]`

## Largest Product Yielded

Write a function that given an array of integers, finds the largest product yielded from three of the integers. Note that the input array is **not** sorted (though to optimize your solution, it may be helpful to do so!). Also keep in mind the a negative number times a negative number yields a positive product!

In | Out
---|---
`[-10, 7, 29, 30, 5, -10, -70]` | `21000` (because `-70 * -10 * 30 = 21000`)

## Find the Missing Number

Write a function that takes an unsorted array containing `n - 1` of `n` consecutive numbers, plus the upper and lower bounds, find the missing number. Optimize to be in `O(n)` time.

In | Out
---|---
`[2, 5, 1, 4, 9, 6, 3, 7], 9, 1` | `8`


```js
findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8
```

## Unique Values

Write a function that takes an array and returns a _new_ array with only unique elements. This is a variation on `hasDuplicates` with a different return value
of unique elements.

In | Out 
---|---
`[3, 3, 5, 3, 12, 7]` | `[3, 5, 12, 17]`

## Largest Difference in Order

Write a function that takes an array of integers and returns the largest difference between two elements such that the element of lesser value must come before the greater element.

In | Out
---|---
`[7, 8, 4, 9, 9, 15, 3, 1, 10]` | `11`

Would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because `15` comes before `1`.

## Intersection Between Two Arrays

Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!

In | Out
---|---
`[2, 2, 4, 1], [1, 2, 0, 2]` | `[2, 1]`

```js
intersection(firstArray, secondArray); // [2, 1]
```