Array.prototype.mySlice = function () {
    const sliced = [];

    for (let i = 0; i < this.length; i++) {
        sliced.push(this[i]);
    }

    return sliced;
}

function doSomething() {
    debugger
    const args = Array.prototype.mySlice.call(arguments);
    args.forEach((arg) => console.log(arg));
}

// doSomething('banana', 2, ['hello', 'goodbye']);


function doSomethingElse(...args) {
    // pause at this debugger and show that `args` is an Array.
    debugger
    // using spread operator here to spread args back out. Pass null as first arg
    // since this method doesn't care about context
    doSomething.call(null, ...args)
}

doSomethingElse('banana', 2, ['hello', 'goodbye']);