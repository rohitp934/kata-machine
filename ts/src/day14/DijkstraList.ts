// Running time:
// O(V^2 + E) in this implementation.
// O(V^2) in Adj matrix
// O((V+E)logV) in priority q (min heap).
export default function dijkstra_list(
  source: number,
  sink: number,
  arr: WeightedAdjacencyList,
): number[] {
  const seen: boolean[] = new Array(arr.length).fill(false);
  const prev: number[] = new Array(arr.length).fill(-1);
  const dists: number[] = new Array(arr.length).fill(Number.POSITIVE_INFINITY);
  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    // O(V^2) in this as we do O(V) V times in the while loop.
    const lo = getLowestUnvisited(seen, dists);
    seen[lo] = true;

    // O(E) in this but NOT O(V*E) because at most we visit each edge only TWICE.
    // O(E*log(V)) in priority q (min heap)
    for (let i = 0; i < arr[lo].length; i++) {
      const edge = arr[lo][i];
      if (seen[edge.to]) continue;
      let dist = dists[lo] + edge.weight;
      if (dist < dists[edge.to]) {
        prev[edge.to] = lo;
        dists[edge.to] = dist;
      }
    }
  }

  if (prev[sink] === -1) return [];

  const path: number[] = [sink];
  let i = prev[sink];
  while (i !== -1) {
    path.unshift(i);
    i = prev[i];
  }
  console.log(path);
  return path;
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((s, i) => !s && dists[i] < Number.POSITIVE_INFINITY);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let idx = -1;
  let lowestDistance = Number.POSITIVE_INFINITY;

  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) continue;

    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      idx = i;
    }
  }

  return idx;
}
