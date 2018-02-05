<script>
	import Header from 'components/includes/Header';
	import Footer from 'components/includes/Footer';
	export default {
		components : {
			'header-component' : Header,
			'footer-component' : Footer
		}
	}
</script>

<template>
	<div id="app">
		<header-component></header-component>
		<router-view/>
		<footer-component></footer-component>
	</div>
</template>
