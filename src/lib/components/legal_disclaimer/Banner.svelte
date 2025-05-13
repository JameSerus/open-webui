<script>
	import { getContext } from 'svelte';

	const i18n = getContext('i18n');
</script>

<div class="px-3">
	<div class="text-center font-semibold z-50">
	    {$i18n.t('Disclaimer')}
	</div>
</div>
