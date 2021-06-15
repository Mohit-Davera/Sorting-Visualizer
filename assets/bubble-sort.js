async function bubbleSort() {
    var i, j;
    var swapped;
    await sleep(delay);

    for (i = 0; i < size - 1; i++) {
        swapped = false;
        for(j = 0; j < size - i - 1; j++) {
            await sleep(delay);

            setColor(j, COMPARE);
            setColor(j + 1, COMPARE);
            await sleep(delay);

            if (arr[j] > arr[j + 1]) {
                swapped = true;
                swap(j, j + 1);
                await sleep(delay);
            }
            setColor(j, UNSORTED);
            setColor(j + 1, UNSORTED);
        }
        if (!swapped) {
            setColorRange(0, arr.length, SORTED);
            break
        }

        await sleep(delay);

        setColor(j, SORTED);
    }

    setColor(0, SORTED);
}
