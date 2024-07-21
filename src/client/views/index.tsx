import { Counter } from '../features/counter/ui/counter'
import { useRouter } from '../useRouter'

export default function Home() {
	const router = useRouter()

	return (
		<div>
			<h1>Hello World</h1>
			<Counter />
			<button type='button' onClick={() => router.push('/about')}>
				About
			</button>
		</div>
	)
}
