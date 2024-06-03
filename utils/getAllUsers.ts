export default async function () {
	const result = await fetch("https://jsonplaceholder.typicode.com/users")
	if (!result.ok) throw new Error(`failed to fetch ${result.statusText}`)
	return result.json()
}