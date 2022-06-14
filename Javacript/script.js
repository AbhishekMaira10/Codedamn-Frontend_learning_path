//Promises practice

function getMeAPromise() {
	return fetch('/data.json')
}

console.log(getMeAPromise())

const promise = getMeAPromise()

promise.then(result => console.log(result))
