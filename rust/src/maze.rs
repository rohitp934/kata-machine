#[cfg(test)]
mod tests {
    #[derive(Clone, Copy, Debug)]
    struct Point {
        x: usize,
        y: usize,
    }

    impl PartialEq for Point {
        fn eq(&self, other: &Self) -> bool {
            self.x == other.x && self.y == other.y
        }
    }

    const DIR: [[i32; 2]; 4] = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    fn maze_solver(maze: &Vec<Vec<char>>, wall: &char, start: Point, end: Point) -> Vec<Point> {
        let mut path: Vec<Point> = vec![];
        let mut seen: Vec<Vec<bool>> = vec![];

        for _i in 0..maze.len() {
            seen.push(vec![false; maze[0].len()]);
        }
        walk(maze, wall, start, end, &mut seen, &mut path);
        path
    }

    fn walk(
        maze: &Vec<Vec<char>>,
        wall: &char,
        curr: Point,
        end: Point,
        seen: &mut Vec<Vec<bool>>,
        path: &mut Vec<Point>,
    ) -> bool {
        // Base case.

        // Check if the current point is out of bounds.
        if (curr.x >= maze[0].len()) && (curr.y >= maze.len()) {
            return false;
        }
        // Check if current point is a wall.
        if maze[curr.y][curr.x] == *wall {
            return false;
        }
        // Check if current point is already seen.
        if seen[curr.y][curr.x] {
            return false;
        }

        // Check if we have reached the end.
        if curr.x == end.x && curr.y == end.y {
            path.push(curr);
            return true;
        }

        // Recursion Logic.
        // Do not consider base case here.
        // Pre
        // Setting point as visited.
        seen[curr.y][curr.x] = true;
        // Adding current point to the path traversed.
        path.push(curr);

        // Recurse
        for [x, y] in DIR.iter() {
            let new_x: usize = if x.is_negative() {
                curr.x - x.wrapping_abs() as usize
            } else {
                curr.x + *x as usize
            };

            let new_y: usize = if y.is_negative() {
                curr.y - y.wrapping_abs() as usize
            } else {
                curr.y + *y as usize
            };
            if walk(maze, wall, Point { x: new_x, y: new_y }, end, seen, path) {
                return true;
            }
        }

        path.pop();
        false
    }

    #[test]
    fn maze_test() {
        let maze: Vec<Vec<char>> = [
            "xxxxxxxxxx x",
            "x        x x",
            "x        x x",
            "x xxxxxxxx x",
            "x          x",
            "x xxxxxxxxxx",
        ]
        .to_vec()
        .iter()
        .map(|row| row.chars().collect())
        .collect();

        let maze_result = [
            Point { x: 10, y: 0 },
            Point { x: 10, y: 1 },
            Point { x: 10, y: 2 },
            Point { x: 10, y: 3 },
            Point { x: 10, y: 4 },
            Point { x: 9, y: 4 },
            Point { x: 8, y: 4 },
            Point { x: 7, y: 4 },
            Point { x: 6, y: 4 },
            Point { x: 5, y: 4 },
            Point { x: 4, y: 4 },
            Point { x: 3, y: 4 },
            Point { x: 2, y: 4 },
            Point { x: 1, y: 4 },
            Point { x: 1, y: 5 },
        ]
        .to_vec();

        let result = maze_solver(&maze, &'x', Point { x: 10, y: 0 }, Point { x: 1, y: 5 });

        println!("{:?}", result);
        let result_iterator = result.into_iter();
        let maze_result_iterator = maze_result.into_iter();
        assert!(Iterator::eq(result_iterator, maze_result_iterator));
    }
}
