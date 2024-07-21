import { useState } from 'react'

export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button type='button' onClick={() => setCount(count + 1)}>
				Increment + 1
			</button>
		</div>
	)
}
