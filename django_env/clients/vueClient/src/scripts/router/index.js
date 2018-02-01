import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home';

Vue.use( VueRouter );

export default new VueRouter( {

	routes : [

		{
			path : '/',
			name : 'Home',
			component : Home
		}

	]

} );
