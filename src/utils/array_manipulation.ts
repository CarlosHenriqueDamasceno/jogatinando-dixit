export const shuffleArray = (array: Array<any>) : Array<any> => {
    let remaininItemsQuantity = array.length;
    let randomIndex;

    while (remaininItemsQuantity > 0) {
        randomIndex = random(remaininItemsQuantity);

        swapArrayItemsByIndex(array, randomIndex, --remaininItemsQuantity);
    }

    return array;
};

export const swapArrayItemsByIndex = (array: Array<any>, i:number, j:number) => {
    [array[j], array[i]] = [array[i], array[j]];
};

export const random = (n: number) => {
    return Math.floor(Math.random() * n);
};