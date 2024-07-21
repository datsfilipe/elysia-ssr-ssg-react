/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { hydrateRoot } from 'react-dom/client'
import App, { CurrentPage } from './App.js'

hydrateRoot(
	document,
	<App>
		<CurrentPage />
	</App>
)
