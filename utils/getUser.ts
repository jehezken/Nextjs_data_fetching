export default async function getUser(userId: string) {
	const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
	if (!result.ok) throw new Error(`failed to fetch ${result.statusText}`)
	return result.json()
}