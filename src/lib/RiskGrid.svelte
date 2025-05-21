<script lang="ts">
	import Grid from '../routes/Grid.svelte';
	import { riskMatrix } from './constants';
	import { flattenRiskMatrix, generateColumnDefs, transformToRowData } from './helpers';
	import type { ActionRiskRow } from './types';

	const flatRiskMatrix: ActionRiskRow[] = flattenRiskMatrix(riskMatrix);
	const rowData = transformToRowData(flatRiskMatrix);
	const columnDefs = generateColumnDefs(flatRiskMatrix);

</script>

<Grid {columnDefs} {rowData} />
