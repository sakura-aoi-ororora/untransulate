<!-- Tailwindcss -->
<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
</script>

<!-- navbar -->
<div class="navbar glass bg-base-200">
	<div class="navbar-start gap-1">
		<a href="{base}/" class="btn btn-ghost text-xl normal-case"> UnTransulater </a>
		<a href="{base}/lang" class="btn btn-primary text-xl normal-case"> Language </a>
	</div>
	<div class="navbar-end gap-1">
		<a href="{base}/setting" class="btn btn-accent text-xl normal-case">Setting</a>
		<a href="{base}/about" class="btn btn-info text-xl normal-case">About</a>
	</div>
</div>

<slot />
