import Home from './views'

const routes = [{ path: '/', component: Home }]

export const CurrentPage = () => {
	const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)
	if (!canUseDOM) return null

	const route = window.location.pathname
	const Page = routes.find(({ path }) => path === route)?.component

	if (!Page) {
		return <h1>404 Not Found</h1>
	}
	return <Page />
}

export default function App({ children }: { children?: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<title>Bun, Elysia & React</title>
				<meta name='description' content='Bun, Elysia & React' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>
			<body>{children}</body>
		</html>
	)
}
