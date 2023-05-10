export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null {
  const q: number[] = [];
  // Seen array used to know if this node is visited.
  const seen: boolean[] = new Array(graph.length).fill(false);
  // Prev array used to know if we have visited this node or not.
  // Also used to walk back from needle (if it was walkable) to the source.
  const prev: number[] = new Array(graph.length).fill(-1);
  if (!graph.length) return null;
  
  q.push(source);
  seen[source] = true;
  
  while (q.length) {
    const curr = q.shift() as number;
    if (curr === needle) break;

    // Just use for loops instead, would cause problems in recursion otherwise.
    for (let i = 0; i < graph[curr].length; i++) {
      const child = graph[curr][i];
      if (child) {
        if (seen[i]) continue;
        seen[i] = true;
        prev[i] = curr;
        q.push(i);
      }
    }
  }

  if (prev[needle] === -1) return null;
  // Walk back from needle
  const path: number[] = [needle];
  let i = prev[needle];
  while (i !== -1) {
    path.unshift(i);
    i = prev[i];
  }
  return path;
}
