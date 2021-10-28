export const isMatch = function(arr1, arr2) {
    console.log(arr1)
    console.log(arr2)
    return arr1.filter(function(n) {
        return arr2.indexOf(n) !== -1;
    });
};