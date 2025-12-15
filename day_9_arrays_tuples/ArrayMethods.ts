// Comprehensive examples of Array methods in TypeScript

const sep = (title: string) => console.log('\n--- ' + title + ' ---');

function examples() {
	sep('Creation: Array.of / Array.from / literal');
	const a = [1, 2, 3];
	const b = Array.of(4, 5, 6);
	const c = Array.from('abc');
	console.log('a', a, 'b', b, "c (from 'abc')", c);

	sep('Mutating: push / pop / shift / unshift');
	const pushPop = [10, 20];
	pushPop.push(30); // [10,20,30]
	console.log('after push(30)', pushPop);
	const popped = pushPop.pop(); // 30
	console.log('popped', popped, 'array', pushPop);
	pushPop.unshift(5); // [5,10,20]
	console.log('after unshift(5)', pushPop);
	const shifted = pushPop.shift(); // 5
	console.log('shifted', shifted, 'array', pushPop);

	sep('Non-mutating: concat / slice');
	const cats = ['a', 'b'];
	const more = cats.concat(['c']);
	console.log('cats', cats, 'more (concat)', more);
	const sliced = more.slice(1, 3);
	console.log('sliced (1,3)', sliced);

	sep('Splice (mutates)');
	const sp = [1, 2, 3, 4];
	const removed = sp.splice(1, 2, 8, 9); // remove 2 elements at index 1, insert 8,9
	console.log('after splice', sp, 'removed', removed);

	sep('Search: indexOf / lastIndexOf / includes');
	const nums = [1, 2, 3, 2];
	console.log('indexOf 2', nums.indexOf(2));
	console.log('lastIndexOf 2', nums.lastIndexOf(2));
	console.log('includes 4?', nums.includes(4));

	sep('Find / findIndex');
	const people = [{ name: 'A', age: 10 }, { name: 'B', age: 20 }];
	console.log('find age>15', people.find(p => p.age > 15));
	console.log('findIndex age>15', people.findIndex(p => p.age > 15));

	sep('Filter / Map / ForEach');
	const evens = nums.filter(n => n % 2 === 0);
	const doubled = nums.map(n => n * 2);
	console.log('nums', nums, 'evens', evens, 'doubled', doubled);
	console.log('forEach:');
	nums.forEach((n, i) => console.log('index', i, 'value', n));

	sep('Reduce / reduceRight');
	const sum = nums.reduce((acc, n) => acc + n, 0);
	console.log('sum', sum);
	const concatRight = ['x', 'y', 'z'].reduceRight((acc, s) => acc + s, '');
	console.log('reduceRight concat', concatRight);

	sep('Every / Some');
	console.log('every >0', nums.every(n => n > 0));
	console.log('some >2', nums.some(n => n > 2));

	sep('Flat / FlatMap');
	const nested = [1, [2, [3]], 4];
	console.log('flat depth 1', nested.flat(1));
	console.log('flat depth 2', nested.flat(2));
	const flatMap = [1, 2, 3].flatMap(n => [n, n * 10]);
	console.log('flatMap', flatMap);

	sep('Sort / Reverse');
	const letters = ['b', 'a', 'c'];
	console.log('sorted', [...letters].sort());
	const numsToSort = [10, 2, 33];
	console.log('numeric sort ascending', [...numsToSort].sort((x, y) => x - y));
	console.log('reverse', [...letters].reverse());

	sep('Join / toString / toLocaleString');
	console.log('join', nums.join(' - '));
	console.log('toString', nums.toString());
	console.log('toLocaleString', nums.toLocaleString());

	sep('Iterators: entries / keys / values');
	for (const [i, v] of nums.entries()) console.log('entry', i, v);
	for (const k of nums.keys()) console.log('key', k);
	for (const v of nums.values()) console.log('value', v);

	sep('copyWithin / fill (mutate)');
	const cw = [1, 2, 3, 4, 5];
	cw.copyWithin(0, 3, 5); // copy elements at [3,5) to start
	console.log('copyWithin', cw);
	const f = new Array(5).fill(7);
	console.log('fill', f);

	sep('Array.from / Array.of');
	console.log('Array.from("123")', Array.from('123'));
	console.log('Array.of(1,2,3)', Array.of(1, 2, 3));

	sep('at / isArray / length');
	const arrAt = [10, 20, 30];
	console.log('at(-1)', arrAt.at(-1));
	console.log('isArray', Array.isArray(arrAt));
	console.log('length', arrAt.length);

	sep('Misc: keys + destructuring, spread copy');
	const copy = [...arrAt];
	console.log('copy (spread)', copy);
}

examples()