import { lazy } from 'react'
import fs from 'node:fs'
import path from 'node:path'

export type Route = {
	path: string
	static: boolean
	page: React.ComponentType<unknown>
}

export const pages = {
	home: {
		path: '/',
		component: lazy(() => import('./client/views'))
	}
}

const getRoutes = (viewsDir: string) => {
	const routes: Route[] = []

	for (const file of fs.readdirSync(viewsDir)) {
		const filePath = path.join(viewsDir, file)
		const fileContent = fs.readFileSync(filePath, 'utf-8')

		const staticExport = fileContent.includes('export const static = false')
		const routePath = path.parse(file).name
		const route = routePath === 'index' ? '/' : routePath

		let page: React.ComponentType<unknown> | undefined
		for (const key in pages) {
			const typedKey = key as keyof typeof pages
			if (pages[typedKey].path === route) {
				page = pages[typedKey].component
				break
			}
		}

		if (!page) {
			throw new Error(`No component found for route ${route}`)
		}

		routes.push({
			path: route,
			static: !!staticExport,
			page: page as React.ComponentType<unknown>
		})
	}

	return routes
}

const viewsDir = path.join(__dirname, 'views')
export const routes = getRoutes(viewsDir)
