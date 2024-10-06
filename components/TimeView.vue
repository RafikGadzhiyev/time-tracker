<template>
	<span>
		{{getTimeFromSeconds(rawValue)}}
	</span>
</template>

<script
	setup
	lang="ts"
>
	import {
		defineProps
	} from 'vue'

	import {
		getTimeFromSeconds
	} from '@/utils/time.util'

	defineProps(
		{
			rawValue: {
				type: Number,
				required: true,
			},
		}
	)

</script>

<style scoped>

</style>
