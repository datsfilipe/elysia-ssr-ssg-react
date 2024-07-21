import { lazy } from 'react'

export const pages = {
	home: {
		path: '/',
		component: lazy(() => import('../../views'))
	},
	about: {
		path: '/about',
		component: lazy(() => import('../../views/about'))
	},
	404: {
		path: '*',
		component: lazy(() => import('../../views/404'))
	}
}
