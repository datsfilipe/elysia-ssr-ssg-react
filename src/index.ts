import { Elysia } from 'elysia'
import staticPlugin from '@elysiajs/static'
import serverTiming from '@elysiajs/server-timing'

import { renderToReadableStream } from 'react-dom/server'
import App from './client/App'
import { createElement } from 'react'

const app = new Elysia()
	.use(serverTiming())
	.use(staticPlugin())
	.get('/', async () => {
		const app = createElement(App)
		const stream = await renderToReadableStream(app, {
			bootstrapScripts: ['/public/index.js']
		})
		// const html = renderToString(app)

		return new Response(stream, {
			headers: { 'content-type': 'text/html' }
		})
	})
	.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
