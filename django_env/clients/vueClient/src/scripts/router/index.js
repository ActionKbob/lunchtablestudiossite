import Vue from 'vue';
import VueRouter from 'vue-router';

import FOUROHFOUR from 'components/pages/404';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Blog from 'components/pages/Blog';

Vue.use( VueRouter );

export default new VueRouter( {

	mode : 'history',

	routes : [

		{
			path : '*',
			name : '404',
			component : FOUROHFOUR
		},

		{
			path : '/',
			name : 'Home',
			component : Home
		},

		{
			path : '/about',
			name : 'About',
			component : About
		},

		{
			path : '/blog',
			name : 'Blog',
			component : Blog
		}

	]

} );
