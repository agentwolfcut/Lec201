// Sample array of numbers
const numbers = [2, 4, 6, 8, 10];

// Target sum 
const targetSum = 12;

// Function to check if there is at least one pair of numbers that add up to the target sum
function hasPairWithSum(arr, target) {
  const seenNumbers = new Set();

  return arr.some((number) => {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true; // Found a pair
    }
    seenNumbers.add(number);
    return false;
  });
}

if (hasPairWithSum(numbers, targetSum)) {
  console.log(`There is at least one pair of numbers that add up to ${targetSum}.`);
} else {
  console.log(`No pair of numbers add up to ${targetSum}.`);
}

console.log(hasPairWithSum(numbers,6))

/* Certainly! Let's break down the code step by step in a simpler way.
1. We have an array of numbers called `numbers`: `[2, 4, 6, 8, 10]`.
2. We want to find out if there is at least one pair of numbers in the array that, when added together, equals a specific target sum. In our case, the target sum is `12`.
3. We create a function called `hasPairWithSum` to help us with this task.
4. Inside `hasPairWithSum`, we use a special "memory" called a Set to keep track of the numbers we've seen so far. Think of it like a list where we can remember which numbers we've looked at.
5. We go through each number in the `numbers` array one by one.
6. For each number, we calculate its "complement." The complement is the number we need to add to the current number to get to our target sum (`12`). 
For example, if the current number is `4`, then the complement is `12 - 4`, which is `8`.
7. We check if this complement number is in our memory (the Set). If it is, that means we've found a pair of numbers that add up to `12`, so we say "yes" and stop looking.
8. If we haven't seen the complement number before, we add the current number to our memory (the Set) and continue looking.
9. If we finish going through all the numbers in the array and still haven't found a pair that adds up to `12`, we say "no."
10. Finally, we use the `hasPairWithSum` function to check if there's at least one pair of numbers in our `numbers` array that adds up to `12`. 
If there is, we say "There is at least one pair of numbers that add up to 12." If not, we say "No pair of numbers add up to 12."

So, the code is checking if there are two numbers in the array that, when added together, give us the target sum of `12`. It uses a memory system (the Set) to keep track of numbers it has seen to find this pair. */