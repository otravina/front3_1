// ---------------------------------------- 2
let myPromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve(Math.floor(Math.random() * 10))
	}, 3000)
})

const task2 = () => {
	myPromise.then(value => {
		console.log(value)
	})
}
// task2()

// ---------------------------------------- 3
function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(Math.floor(Math.random() * 10))
		}, ms);
	});
}

const task3 = () => {
	Promise.all([delay(1000), delay(2000), delay(3000)]).then(values => {
		console.log(values)
	})
}
// task3()

// ---------------------------------------- 4


const task4 = () => {
	let pr = new Promise((res,rej) => {
		rej('ku')
	})
	pr
		.then(() => console.log(1)) // пропускается, так как состояние промиса 'rejected'
		.catch(() => console.log(2)) // обрабатывается, выводит 2, возвращает новый промис после выполнения со статусом 'fulfilled'
		.catch(() => console.log(3)) // пропускается, т.к. 2 обработчик вернул 'fulfilled'
		.then(() => console.log(4)) // выводит 4, из-за статуса 'fulfilled'
		.then(() => console.log(5)) // также выводит 5, т.к. 4 then вернул промис со статусом 'fulfilled'
}
// Вывод в консоль:
// 2
// 4
// 5
// Методы then и catch возвращают новый промис. Если в ходе его выполнения возникнет ошибка, они вернут статус 'rejected', если же все выполнится без ошибок, промис выполнится со статусом 'fulfilled'

// task4()

// ---------------------------------------- 5
let task5Promise = new Promise((resolve) => {
	resolve(21);
});

const task5 = () => {
	task5Promise
		.then(result => {
			console.log(result);
			return result;
		})
		.then(result => {
			console.log(result * 2);
		});
}
// task5()

// ---------------------------------------- 6
function createPromise() {
	return Promise.resolve(21);
}

async function task6() {
	const result = await createPromise();

	console.log(result);

	console.log(result * 2);
}

// task6();

// ---------------------------------------- 7
const task7 = () => {
	let promise = new Promise((res, rej) => {
		res('Resolved promise - 1');
	});

	promise
		.then((res) => {
			console.log("Resolved promise - 2");
			return "OK";
		})
		.then((res) => {
			console.log(res);
		});
}
// task7()

// Результат выполнения:
// Resolved promise - 2
// OK
	// Т.к. первый then выводит "Resolved promise - 2" и возвращает OK, который выводит второй then

// ---------------------------------------- 8
// код и результат идентичен 7 заданию

// ---------------------------------------- 9
const task9 = () => {
	let promise = new Promise((res, rej) => {
		res('Resolved promise - 1');
	});

	promise
		.then((res) => {
			console.log(res);
			return "OK";
		})
		.then((res1) => {
			console.log(res1);
		});

}
// task9()

// Результат выполненея:
// Resolved promise - 1
// OK
	// первый then выводит результат выполнения промиса 'Resolved promise - 1' и возвращает значение OK, которое выводит второй then

// ---------------------------------------- 10
const task10 = () => {
	let promise = new Promise((res, rej) => {
		res('Resolved promise - 1');
	});

	promise
		.then((res) => {
			console.log(res);
			return res;
		})
		.then((res1) => {
			console.log('Resolved promise - 2', res1);
		});

}
// task10()
// Resolved promise - 1
// Resolved promise - 2 Resolved promise - 1
	// первый then выводит результат выполнения промиса 'Resolved promise - 1' и возвращает это же значение, которое выводит второй then и добавляет в начале Resolved promise - 1

// ---------------------------------------- 11
const task11 = () => {
	let promise = new Promise((res, rej) => {
		res('Resolved promise - 1');
	});

	promise
		.then((res) => {
			console.log(res);
			return res;
		})
		.then((res1) => {
			console.log(res1);
		});
}
// task11()
// Resolved promise - 1
// Resolved promise - 1
	// первый then выводит результат выполнения промиса, а после передаёт ему второму then, котрый также выводит его

// ---------------------------------------- 12
const task12 = () => {
	let promise = new Promise((res, rej) => {
		res('Resolved promise - 1');
	});

	promise
		.then((res) => {
			console.log(res);
		})
		.then((res1) => {
			console.log(res1);
		});
}
// task12()
// Resolved promise - 1
// undefined
	// первый then выводит результат выполнения промиса, но не возвращает никакого значения, из-за чего второй then возвращает undefined

// ---------------------------------------- 13
const task13 = () => {
	let pr = new Promise((res, rej) => {
		rej('ku');
	});

	pr
		.then(() => console.log(1)) // пропускается, так как состояние промиса 'rejected'
		.catch(() => console.log(2))  // обрабатывается, выводит 2, возвращает новый промис после выполнения со статусом 'fulfilled'
		.catch(() => console.log(3))  // пропускается, т.к. 2 обработчик вернул 'fulfilled'
		.then(() => console.log(4)) // выводит 4, из-за статуса 'fulfilled'
		.then(() => console.log(5)); // также выводит 5, т.к. 4 then вернул промис со статусом 'fulfilled'

}
task13()
// 2
// 4
// 5