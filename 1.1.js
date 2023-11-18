function declarative(nums, func) {
  return nums.map(func);
}
function imperative(nums, func) {
  const result = [];
  for (const num of nums) {
    result.push(func(num));
  }
  return result;
}
