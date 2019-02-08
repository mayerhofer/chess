const brain = require('./external/brain.js');

const network = new brain.NeuralNetwork();

network.train([
	{input: [], output: [0]},
	{}
]);

const output = network.run([]);

console.log(output);

