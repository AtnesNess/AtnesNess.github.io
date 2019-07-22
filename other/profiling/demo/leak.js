require('console.table')

const memory = [];
let step = 0;

function bytesToMb(bytes) {
    return bytes / 1024 / 1024;
}

let res;

function outer() {
	let largeData = new Array(100000).fill('*');	
    let oldRes = res;

	function inner() {
		if (oldRes) return largeData;
	}

	return function(){};
}

function logMemory() {
    const usage = process.memoryUsage();

    step += 1;

    const row = Object.keys(usage).reduce((acc, key) => ({
        ...acc, [key]: bytesToMb(usage[key])
    }), {step});

    memory.push(row);


    console.clear();
    console.table(memory);
}

setTimeout(() => {
    const timer = setInterval(() => {
        res = outer();
    }, 1000);
    
    setInterval(logMemory, 1000);
    
    setTimeout(() => clearInterval(timer), 10000);
    setTimeout(() => gc(), 15000);
}, 5000)
