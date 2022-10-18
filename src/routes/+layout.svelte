<script>
  import "../theme.postcss";
  import '@brainandbones/skeleton/styles/all.css'; // <-- skeleton all.css
  import "../app.postcss";
  import { AppShell } from '@brainandbones/skeleton';
  import { AppBar } from '@brainandbones/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>NordicSkelly SvindKit</AppBar>
  </svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>