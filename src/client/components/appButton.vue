<template>
	<button>{{ $config.DOMAIN_NAME }}</button>
</template>

<script>
export default {
	data() {
		return {
			axios: this.$axios,
			backend: this.$backend,
      		config: this.$config,
      		env: this.env
    	};
  	}
};
</script>
