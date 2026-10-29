import { PLLFormula as PLLFormulaType } from "@/lib/types";
import PLLDiagram from "./PLLDiagram";

function PLLFormula({ vectors, alg, ...rest }: PLLFormulaType) {
  return (
    <div className="col-span-1 w-full flex justify-start items-start p-4 gap-x-4">
      <PLLDiagram edgeSize={58} gapSize={4} vectors={vectors} {...rest} className="min-w-fit" />
      <code className="text-3xl text-justify">{alg}</code>
    </div>
  );
}

export default PLLFormula;
