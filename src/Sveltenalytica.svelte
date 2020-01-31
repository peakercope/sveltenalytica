<script>
    import { onMount } from 'svelte';
    import { getPath } from './helpers';
    export let version = '1';

    onMount(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = getPath(version);

        document.body.appendChild(script)
    });
</script>
