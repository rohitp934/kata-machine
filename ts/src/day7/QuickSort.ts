function quick(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    // Get the pivot index.
    const pivotIndex = partition(arr, low, high);
    quick(arr, low, pivotIndex - 1);
    quick(arr, pivotIndex + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];

    let idx = low - 1;
    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const temp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = temp;
        }
    }

    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    quick(arr, 0, arr.length - 1);
}