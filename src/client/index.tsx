/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { hydrateRoot } from 'react-dom/client'
import { Router } from './shared/lib/router'
import App from './App.js'

const Root = () => {
	return (
		<>
			<App>
				<Router />
			</App>
		</>
	)
}

hydrateRoot(document, <Root />)
