var p1 = new Promise();
p1.then(console.log);
p1.resolve(42);

var p2 = new Promise();
p2.resolve(2013);
p2.then(console.log);

