// Write a function that takes an array of strings as argument. Group those strings by their first letter.
//  Return an object that contains properties with keys representing first letters.
//   The values should be arrays of strings containing only the corresponding strings.
//    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//    { a: ['Alf', 'Alice'], b: ['Ben']}
function groupAlphabets(string) {
    var group = {};
    for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
        var str = string_1[_i];
        var first = str.charAt(0).toLowerCase();
        if (!group[first]) {
            group[first] = [];
        }
        group[first].push(str);
    }
    return group;
}
var res = groupAlphabets(['Nithya', 'nithu', 'pandi', 'kavi', 'kavya']);
console.log(res);
