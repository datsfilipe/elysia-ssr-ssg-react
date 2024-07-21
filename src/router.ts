import fs from 'node:fs'
import path from 'node:path'
import { pages } from './client/shared/lib/pages'

export type Route = {
	path: string
	static: boolean
	page: React.ComponentType<unknown>
}

const getRoutes = (viewsDir: string) => {
	const routes: Route[] = []

	for (const file of fs.readdirSync(viewsDir)) {
		const filePath = path.join(viewsDir, file)
		const fileContent = fs.readFileSync(filePath, 'utf-8')

		const firstLine = fileContent.split('\n')[0]
		const staticExport = firstLine.includes('use static')
		const routePath = path.parse(file).name
		const route = routePath === 'index' ? '/' : routePath === '404' ? '*' : `/${routePath}`

		let page: React.ComponentType<unknown> | undefined
		for (const key in pages) {
			const typedKey = key as keyof typeof pages
			if (pages[typedKey].path === route) {
				page = pages[typedKey].component
				break
			}
		}

		if (!page) continue

		routes.push({
			path: route,
			static: !!staticExport,
			page: page as React.ComponentType<unknown>
		})
	}

	return routes
}

const viewsDir = path.join(__dirname, 'client', 'views')
export const routes = getRoutes(viewsDir)
