function ascendingOrder() {

    let arr1 = [11, 12, 23, 45, 'a', 'b'];
    let arr2 = ['c', 4, 'A', 35];
    let arr3 = [1, 'e', 69, 99, 3, 7, 'r', 'U', 'Y', 'X', 'z'];
    let mixed = arr1.concat(arr2, arr3);
    let numbers = [];
    let characters = [];

    mixed.forEach(Element => {
        if (typeof Element === "string") {
            characters.push(Element)
        }
        if (typeof Element === "number") {
            numbers.push(Element)
        }
    })
    numbers.sort((x, y) => x - y);
    characters.sort();
    const combined = numbers.concat(characters);
    // console.log(combined)
    let result = [combined.splice(0, arr1.length), combined.splice(0, arr2.length), combined.splice(0, arr3.length)];
    console.log(result);
}
ascendingOrder();







