// Write a program to count the frequency of each word in a string using a dictionary. 
//     Input: "this is a test this is only a test"
//     Output: {'this': 2, 'is': 2, 'a': 2, 'test': 2, 'only': 1}
function count(a) {
    var frequency = {};
    var data = a.split(' ');
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var words = data_1[_i];
        if (frequency[words]) {
            frequency[words] += 1;
        }
        else {
            frequency[words] = 1;
        }
    }
    return frequency;
}
console.log(count("this is a test this is a test only"));
