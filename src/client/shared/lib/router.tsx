import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import { pages } from './pages'
import { createElement } from 'react'

type RouteType = {
	path: string
	element: React.ReactNode
}

const routes: RouteType[] = []
for (const key in pages) {
	const typedKey = key as keyof typeof pages
	routes.push({
		path: pages[typedKey].path,
		element: createElement(pages[typedKey].component)
	})
}

const Root = () => {
	return (
		<Routes>
			{routes.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	)
}

export const router = createBrowserRouter([{ path: '*', element: <Root /> }])

export const Router = () => {
	return <RouterProvider router={router} />
}
