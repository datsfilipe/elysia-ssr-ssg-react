import { Counter } from './features/counter/ui/counter'

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<title>Bun, Elysia & React</title>
				<meta name='description' content='Bun, Elysia & React' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>
			<body>
				<h1>Bun, Elysia & React</h1>
				<Counter />
			</body>
		</html>
	)
}
