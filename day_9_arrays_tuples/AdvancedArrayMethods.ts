/**
 * File: day_9_arrays_tuples/AdvancedArrayMethods.ts
 * Description: Implementations and examples for common array methods (forEach, map, filter, reduce, some, every).
 * Date: 2025-12-16
 */

// A small helpers collection implementing common array methods in a typesafe way.

declare const require: any;
declare const module: any;

// Custom implementation of Array.prototype.forEach — iterates defined elements and skips holes
export function myForEach<T>(arr: T[], cb: (value: T, index: number, array: T[]) => void): void {
	for (let i = 0; i < arr.length; i++) {
		// skip holes in sparse arrays to match native behavior
		if (!(i in arr)) continue;
		cb(arr[i], i, arr);
	}
}

// Custom implementation of Array.prototype.map — preserves sparse holes and maps values
export function myMap<T, U>(arr: T[], cb: (value: T, index: number, array: T[]) => U): U[] {
	const out: U[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (!(i in arr)) {
			// create hole if input had hole
			(out as any)[i] = undefined;
			continue;
		}
		out[i] = cb(arr[i], i, arr);
	}
	return out;
}

// Custom implementation of Array.prototype.filter — returns an array of elements that pass the predicate
export function myFilter<T>(arr: T[], cb: (value: T, index: number, array: T[]) => boolean): T[] {
	const out: T[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (!(i in arr)) continue;
		const v = arr[i];
		if (cb(v, i, arr)) out.push(v);
	}
	return out;
}

// Custom implementation of Array.prototype.reduce — handles optional initial value and sparse arrays
export function myReduce<T, U = T>(arr: T[], cb: (accumulator: U, current: T, index: number, array: T[]) => U, initial?: U): U {
	let acc: any = initial;
	let start = 0;
	if (acc === undefined) {
		// find first defined element as initial when initial not provided
		while (start < arr.length && !(start in arr)) start++;
		if (start >= arr.length) throw new TypeError('Reduce of empty array with no initial value');
		acc = arr[start++] as any;
	}
	for (let i = start; i < arr.length; i++) {
		if (!(i in arr)) continue;
		acc = cb(acc, arr[i], i, arr);
	}
	return acc;
}

// Custom implementation of Array.prototype.some — returns true if any defined element passes the predicate
export function mySome<T>(arr: T[], cb: (value: T, index: number, array: T[]) => boolean): boolean {
	for (let i = 0; i < arr.length; i++) {
		if (!(i in arr)) continue;
		if (cb(arr[i], i, arr)) return true;
	}
	return false;
}

/**
 * Tests whether all defined elements in `arr` pass the test implemented by `cb`.
 *
 * Skips holes in sparse arrays. If there are no defined elements, returns `true`.
 *
 * @template T
 * @param {T[]} arr - Input array.
 * @param {(value: T, index: number, array: T[]) => boolean} cb - Predicate function.
 * @returns {boolean} `true` if every defined element passes the test, otherwise `false`.
 * @example
 * myEvery([2,4,6], n => n % 2 === 0); // true
 */
// Custom implementation of Array.prototype.every — all defined elements must pass predicate
export function myEvery<T>(arr: T[], cb: (value: T, index: number, array: T[]) => boolean): boolean {
	for (let i = 0; i < arr.length; i++) {
		if (!(i in arr)) continue;
		if (!cb(arr[i], i, arr)) return false;
	}
	return true;
}

// Example usage and quick smoke tests
if (require.main === module) {
	const nums = [1, 2, 3, , 5]; // include a hole to demonstrate sparse handling

	console.log('myForEach:');
	myForEach(nums, (n, i) => console.log('index', i, 'value', n));

	console.log('myMap -> *2');
	console.log(myMap(nums, n => (n === undefined ? n : n * 2)));

	console.log('myFilter -> odd');
	console.log(myFilter(nums as number[], n => n % 2 === 1));

	console.log('myReduce -> sum');
	console.log(myReduce([1, 2, 3], (acc, cur) => acc + cur, 0));

	console.log('mySome > 4', mySome(nums as number[], n => (n ?? 0) > 4));
	console.log('myEvery > 0', myEvery(nums as number[], n => (n ?? 0) > 0));
}
