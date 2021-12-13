function insert(arr, ...items) {
    let data = [];
    data.push(arr, ...items);
    // console.log(data);
    let sumArr = data.reduce(function(a, b) { return a + b; }, 0);

    let first = 0;
    let second = 1;
    let third = first + second;

    if (third <= sumArr) {
		first = second;
		second = third;
		third = first + second;
	}

    let fib = (Math.abs(third - sumArr)
    >= Math.abs(second - sumArr))
       ? second
       : third;
    
    console.log(fib)
}

insert(15,1,3);