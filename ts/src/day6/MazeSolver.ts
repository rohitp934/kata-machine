export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const pathfinder = new Maze(maze, wall, end);

    pathfinder.walk(start);

    return pathfinder.path;
}

class Maze {
    private visited: boolean[][];
    public path: Point[];
    private end: Point;
    private maze: string[];
    private wall: string;
    private dir = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    constructor(maze: string[], wall: string, end: Point) {
        this.maze = maze;
        this.wall = wall;
        this.end = end;
        this.visited = [];
        this.path = [];
        for (let i = 0; i < maze.length; i++) {
            this.visited.push(new Array(maze[0].length).fill(false));
        }
    }

    walk(curr: Point): boolean {
        // Base case
        if (
            curr.y >= this.maze.length ||
            curr.y < 0 ||
            curr.x >= this.maze[0].length ||
            curr.x < 0
        ) {
            return false;
        }

        if (this.maze[curr.y][curr.x] === this.wall) {
            return false;
        }

        if (this.visited[curr.y][curr.x]) {
            return false;
        }

        if (this.end.x === curr.x && this.end.y === curr.y) {
            this.path.push(curr);
            return true;
        }

        this.path.push(curr);
        this.visited[curr.y][curr.x] = true;

        for (let i = 0; i < this.dir.length; i++) {
            const [x, y] = this.dir[i];
            if (
                this.walk({
                    x: curr.x + x,
                    y: curr.y + y,
                })
            )
                return true;
        }
        this.path.pop();
        return false;
    }
}
