<script>
	export default {
		
		name : 'About',

		data(){
			return {
				members : []
			}
		},

		mounted(){
			fetch( '/about/api/members' )
			.then( response => response.json() )
			.then( ( data ) => {
				this.members = data;
			} );
		}
	}
</script>

<template>
	<div>
		About page
		<div>
			<div v-for="member, i in members">
				{{ member.firstName }} {{ member.lastName }}
			</div>
		</div>
	</div>
</template>
