<script lang="ts">
type GridCell = {
    myOption: string;
    opponentOption: string;
    risk: number;
};

export const riskMatrix: GridCell[][] = [
    [
      { myOption: "Block", opponentOption: "Throw", risk: 1200 },
    ],
    [
        { myOption: "Delay Throw", opponentOption: "Throw", risk: 0 },
    ],
  ];

</script>

<p>{riskMatrix[0][0].myOption}</p>