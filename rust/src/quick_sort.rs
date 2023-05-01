#[cfg(test)]
mod tests {

    fn qs(arr: &mut [i8], lo: isize, hi: isize) {
        if lo >= hi {
            return;
        }

        let pivot_index = partition(arr, lo, hi);

        qs(arr, lo, pivot_index - 1);
        qs(arr, pivot_index + 1, hi);
    }

    fn partition(arr: &mut [i8], lo: isize, hi: isize) -> isize {
        let pivot = arr[hi as usize];
        let mut idx = lo - 1;

        for i in lo..hi {
            if arr[i as usize] <= pivot {
                idx += 1;
                arr.swap(i as usize, idx as usize);
            }
        }

        idx += 1;
        arr.swap(idx as usize, hi as usize);
        idx
    }
    // fn qs(arr: &mut [i32]) {
    //     let hi = arr.len();
    //     if arr.is_empty() {
    //         return;
    //     }

    //     let pivot_index = partition(arr);

    //     qs(&mut arr[0..pivot_index]);
    //     qs(&mut arr[pivot_index + 1..hi]);
    // }

    // fn partition(arr: &mut [i32]) -> usize {
    //     let hi = arr.len();
    //     let pivot = arr[hi - 1];
    //     let mut idx: usize = 0;

    //     for i in 0..hi - 1 {
    //         if arr[i] <= pivot {
    //             arr.swap(i, idx);
    //             idx += 1;
    //         }
    //     }

    //     // idx += 1;
    //     arr.swap(idx, hi - 1);
    //     idx
    // }

    fn quick_sort(arr: &mut [i8], lo: isize, hi: isize) {
        qs(arr, lo, hi);
    }

    #[test]
    fn test_quick_sort() {
        const N: isize = 5;
        // Create an array of length n, with random whole numbers.
        let mut arr: Vec<i8> = Vec::new();
        for _ in 0..N {
            arr.push(rand::random::<i8>());
        }
        let mut sorted = arr.clone();
        sorted.sort();
        quick_sort(&mut arr, 0, N - 1);
        assert_eq!(arr, sorted);
    }
}
