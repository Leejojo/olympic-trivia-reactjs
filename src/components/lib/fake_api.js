//my fake api :)
export function getQuestions(callback) {
	var questions = [
		{id: 1, c: "a", q: "what is catagory a1?" },
		{id: 2, c: "b", q: "what is catagory b1?" },
		{id: 3, c: "c", q: "what is catagory c1?" },
		{id: 4, c: "d", q: "what is catagory d1?" },
		{id: 5, c: "a", q: "what is catagory a2?" },
		{id: 6, c: "b", q: "what is catagory b2?" },
		{id: 7, c: "c", q: "what is catagory c2?" },
		{id: 8, c: "d", q: "what is catagory d2?" },
		{id: 9, c: "a", q: "what is catagory a3?" },
		{id: 10, c: "b", q: "what is catagory b3?" }
	]
	setTimeout(() =>{callback(questions)}, 300);
}