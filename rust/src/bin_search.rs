#[cfg(test)]
mod tests {
    pub fn binary_search(nums: Vec<i32>, target: i32) -> i32 {
        let mut low: i32 = 0;
        let mut high = nums.len() as i32;
        while low < high {
            let middle = (low + (high - low) / 2);
            if let Some(middle_val) = nums.get(middle as usize) {
                if target == *middle_val {
                    return middle;
                } else if target > *middle_val {
                    low = middle + 1;
                } else {
                    high = middle;
                }
            }
        }
        return -1;
    }

    #[test]
    fn test() {
        let foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420].to_vec();
        assert_eq!(binary_search(foo, 69), 3);
    }
}
