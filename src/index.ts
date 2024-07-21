import { Elysia } from 'elysia'
import staticPlugin from '@elysiajs/static'
import serverTiming from '@elysiajs/server-timing'

import { routes } from './router'
import { createElement } from 'react'
import { type ReactDOMServerReadableStream, renderToReadableStream, renderToStaticMarkup } from 'react-dom/server'
import App from './client/App'

const app = new Elysia()
	.use(serverTiming())
	.use(staticPlugin())
	.use((app: Elysia) => {
		for (const route of routes) {
			app.get(route.path, async () => {
				let html: string | ReactDOMServerReadableStream
				const props = { children: createElement(route.page) }
				const app = createElement(App, props)

				if (route.static) {
					html = renderToStaticMarkup(app)
				} else {
					html = await renderToReadableStream(app, {
						bootstrapScripts: ['/public/index.js']
					})
				}

				return new Response(html, {
					headers: { 'content-type': 'text/html' }
				})
			})
		}
		return app
	})
	.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
