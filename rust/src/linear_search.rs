// Write a test module for the linear search function

#[cfg(test)]
mod tests {
  fn linear_search(haystack: &[i32], needle: i32) -> bool {
    for val in haystack {
      if *val == needle {
        return true;
      }
    }
    false
  }

  #[test]
  fn test_linear_search() {
    let foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    assert!(linear_search(&foo, 69));
    assert!(!linear_search(&foo, 1336));
    assert!(linear_search(&foo, 69420));
    assert!(!linear_search(&foo, 69421));
    assert!(linear_search(&foo, 1));
    assert!(!linear_search(&foo, 0));
  }
}
