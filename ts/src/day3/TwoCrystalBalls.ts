export default function two_crystal_balls(breaks: boolean[]): number {
    const n: number = breaks.length;
    const squirt: number = Math.floor(Math.sqrt(n));
    let found: number = -1;
    for (let i = squirt; i < n; i += squirt) {
        if (breaks[i]) {
            found = i;
            break;
        }
    }

    if (found != -1) {
        for (let i = found - squirt; i < found && i < n; i++) {
            if (breaks[i]) {
                return i;
            }
        }
    }
    return -1;
}
