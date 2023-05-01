import bubble_sort from "@code/BubbleSort";

test("bubble-sort", function () {
    const n = 100000;
    // Create an array filled with random integers.
    const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 50000));

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([...arr].sort((a, b) => a - b));
});

