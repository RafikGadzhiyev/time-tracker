<template>
	<button
		@click="$emit('onClick')"
		class="flex items-center justify-center flew-wrap transition disabled:cursor-not-allowed disabled:opacity-25"
		:class="[
			'button',
			`button_color__${color}`,
			`button_variant__${variant}`,
		]"
	>
		<Icon
			v-if="icon"
			:name="icon"
			:size="ICON_SIZE"
		/>

		<span
			v-if="label"
		>
			{{ label }}
		</span>
	</button>
</template>

<script
	lang="ts"
	setup
>
import {
	withDefaults,
	defineProps,
	defineEmits,
} from 'vue'

const ICON_SIZE = 25

const COLORS = [
	'primary',
	'secondary',
	'negative',
	'positive',
	'warning',
	'info'
] as const;

const VARIANTS = [
	'squared',
	'rounded',
] as const;

interface IButtonProps {
	label?: string
	icon?: string
	color?: (typeof COLORS)[number]
	variant?: (typeof VARIANTS)[number]
}



withDefaults(
	defineProps<IButtonProps>(),
	{
		variant: 'squared',
		color: 'primary',
	}
)

defineEmits(
	[
		"onClick"
	]
)

</script>

<style
	lang="sass"
	scoped
>
$colors: primary, secondary, negative, positive, warning, info

.button
	&_variant__rounded
		@apply rounded-full

	&_variant__squared
		@apply rounded-md

	@each $color in $colors
		&_color__#{$color}
			@apply bg-#{$color}-400

			&:hover
				@apply bg-#{$color}-500

			&:active
				@apply bg-#{$color}-600
</style>
