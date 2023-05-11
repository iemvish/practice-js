let minMax = (array) => {
    minValue = Infinity;
    maxValue = -Infinity;

    for(let i=0;i<array.length;i++) {
        // find minimum value
        if (array[i] < minValue)
            minValue = array[i];

        // find maximum value
        if (array[i] > maxValue)
            maxValue = array[i];
    }
    return minValue;
}

console.log(minMax([1,2,3,4,5,1,2,3,88,111,11]));
