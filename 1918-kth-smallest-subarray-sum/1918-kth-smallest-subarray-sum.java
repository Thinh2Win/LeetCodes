class Solution {
    public int kthSmallestSubarraySum(int[] nums, int k) {
    int l = 1, r = 20000 * 50000, n = nums.length;
    while (l < r) {
        int m = (l + r) / 2, floor = 0;
        for (int i = 0, j = 0, sum = 0; i < n; )
            if (sum + nums[i] <= m) {
                sum += nums[i++];
                floor += i - j;
            }
            else
                sum -= nums[j++];
        if (floor < k)
            l = m + 1;
        else
            r = m;
    }
    return l;
}
    }