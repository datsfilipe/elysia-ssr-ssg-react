import { createBrowserHistory } from 'history'
import { useEffect, useState } from 'react'

export type Router = ReturnType<typeof useRouter>

export const useRouter = () => {
	const canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement)
	if (!canUseDom) return { location: null, push: null }

	const history = createBrowserHistory()
	const [location, setLocation] = useState(history.location)

	useEffect(() => {
		const unlisten = history.listen(({ location }) => {
			setLocation(location)
		})

		return () => {
			unlisten()
		}
	}, [history])

	const push = (path: string) => {
		history?.push(path)
	}

	return {
		location,
		push
	}
}
