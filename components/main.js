import {defineAsyncComponent} from 'vue'
export default {
	install(app) {
		app.component('Hello', defineAsyncComponent(() => import('./Hello')))
	}
}