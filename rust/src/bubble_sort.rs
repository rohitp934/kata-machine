#[cfg(test)]
mod tests {
    // fn swap(arr: &mut [i32], i: usize, j: usize) {
    //     let temp = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = temp;
    // }
    //? Wow. Rust has .swap(), JS doesn't ew.
    fn bubble_sort(arr: &mut [i32]) {
        let n = arr.len();
        for i in 0..n {
            for j in 0..n-i-1 {
                if arr[j] > arr[j+1] {
                    arr.swap(j, j+1);
                }
            }
        }
    }

    #[test]
    fn test() {
        const N: usize = 1000;
        // Create an array of length n, with random whole numbers.
        let mut arr: [i32; N] = [0; N];
        for item in arr.iter_mut().take(N) {
            *item = rand::random::<i32>() % 1000;
        }
        let mut sorted = arr;
        sorted.sort();
        bubble_sort(&mut arr);
        assert_eq!(arr, sorted);
    }
}
