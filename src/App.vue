<template>
	<div id="app">
		<router-view />
		<!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
	name: 'app',
	components: {
		HelloWorld
	}
};
</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	display: block;
	overflow: auto;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin: 0;
	width: 100%;
	height: 100%;
	background-image: url('./assets/bg.png');
	/* display: flex;
    flex-direction: column;
	justify-content: center; */
}
</style>
    
