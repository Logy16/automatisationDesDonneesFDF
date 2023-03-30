<template>
	<header>
		<router-link :to="'/'">
        	<h1>Feux d'espaces naturels combustibles</h1>
        </router-link>
        <hr>
	</header>
</template>

<script>

export default {
    name : 'HeaderComp',
    components: {

    },
    data: function () {
        return {

        }
    },
}
</script>

<style scoped>
header {
    padding-top: 30px;
    background: #76A5D8;
}
hr { display: block; height: 1px;
    border: 0; border-top: 1px solid #111;
    margin: 1em 0; padding: 0; }

h1 {
	font-weight: bold;
	color: #222;
}

a, router-link {
	text-decoration: none;
}
</style>