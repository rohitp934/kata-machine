#[cfg(test)]
mod tests {
    use rand::Rng;

    fn two_crystal_balls(check: Vec<bool>) -> usize {
        let n: usize = check.len();
        let squirt: usize = (n as f32).sqrt().floor() as usize;
        let mut found: i32 = -1;

        for i in (squirt..n).step_by(squirt) {
            if check[i] {
                found = i as i32;
                break;
            }
        }

        if found > -1 {
            for (i, val) in check
                .iter()
                .enumerate()
                .skip(found as usize - squirt)
                .take(found as usize)
            {
                if *val {
                    return i;
                }
            }
        }

        return 0;
    }

    #[test]
    fn test() {
        let idx: usize = rand::thread_rng().gen_range(0..10000);
        let mut arr: Vec<bool> = [false; 10000].to_vec();

        for i in idx..10000 {
            arr[i] = true;
        }

        assert_eq!(two_crystal_balls(arr), idx);
        assert_eq!(two_crystal_balls([false; 821].to_vec()), 0);
    }
}
