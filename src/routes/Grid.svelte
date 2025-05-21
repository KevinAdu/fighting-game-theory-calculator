<script lang="ts">
    import { onMount } from 'svelte';
    import {
        createGrid,
        ModuleRegistry,
        ClientSideRowModelModule,
        type GridOptions,
        themeQuartz,
        colorSchemeDarkBlue
    } from 'ag-grid-community';

    // Register AG Grid Modules
    ModuleRegistry.registerModules([ClientSideRowModelModule]);

    let {
        columnDefs = [],
        rowData = [],
    }: {
        columnDefs: Array<any>;
        rowData: Array<any>;
    } = $props();

    // Create a custom dark theme using Theming API
    const darkTheme = themeQuartz.withPart(colorSchemeDarkBlue).withParams({
        backgroundColor: '#212121',
        foregroundColor: '#ffffff',
        headerBackgroundColor: '#37474f',
        headerTextColor: '#cfd8dc',
        oddRowBackgroundColor: '#263238'
    });

    let gridDiv: HTMLDivElement;

    onMount(() => {
        const gridOptions: GridOptions<any> = {
            theme: darkTheme, // Apply custom dark theme
            columnDefs,
            rowData,
            defaultColDef: {
                sortable: true,
                filter: true
            }
        };

        if (gridDiv) {
            createGrid(gridDiv, gridOptions); // Create the grid with custom options
        }
    });
</script>

<!-- Grid Container -->
<div bind:this={gridDiv} style="height: 400px; width: 100%;"></div>