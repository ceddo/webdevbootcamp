
function average(arr) {
    var total = 0;
    arr.forEach(function(score) {
        total += score;
    })
    var average = total/arr.length;
    console.log(Math.round(average));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);
