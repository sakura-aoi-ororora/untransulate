<script lang="ts">
	import { transulateResponse } from "$lib";

    let input = ""
    let output = ""
    const mockLang: string[] = ["ja","eu","en","gn","ja"]
    
    async function onTransulate() {
        transulateResponse(input, mockLang).then(res => output = res)
    }
</script>

<h1>This page is Home!</h1>

<textarea class="textarea textarea-bordered textarea-primary" bind:value={input} placeholder="source"/>
<button class="btn btn-accent" on:click={onTransulate}>transulate</button>
<textarea class="textarea textarea-bordered textarea-secondary" bind:value={output} placeholder="target"/>