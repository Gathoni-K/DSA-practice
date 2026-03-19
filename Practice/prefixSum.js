/**
 * @param {number[]} A - Input array of integers
 * @returns {number[]} - The prefix sum array
 */
function getPrefixSums(A) {
    const n = A.length;
    // Initialize array with n + 1 elements, all set to 0
    const P = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        // P[i+1] is the sum of A[0] through A[i]
        P[i + 1] = P[i] + A[i];
    }

    return P;
}

/**
 * Utility to get sum in range [x, y] inclusive
 */
function getRangeSum(P, x, y) {
    return P[y + 1] - P[x];
}