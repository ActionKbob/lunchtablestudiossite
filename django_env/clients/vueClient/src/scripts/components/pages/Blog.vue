<template>
	<div>
		Blog page
		<div>
			<div v-for="post, i in posts">
				{{ post.title }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {

		name : 'Blog',

		data(){
			return {
				posts : []
			}
		},

		mounted(){
			fetch( '/blog/api' )
			.then( response => response.json() )
			.then( ( data ) => {
				this.posts = data;
			} );
		}

	}
</script>
