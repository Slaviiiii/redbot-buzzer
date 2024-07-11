import { layout } from "tscircuit"
  import manual_edits from "./MyCircuit.manual-edits"

  export const MyCircuit = () => (
    <group layout={layout().manualEdits(manual_edits)}>
      <resistor
        resistance="10kohm"
        name="R1"
        footprint="0805"
      />
    </group>
  )