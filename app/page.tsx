import PLLDiagram from "@/components/PLLDiagram";
import PLLFormula from "@/components/PLLFormula";
import { PLLs } from "@/lib/PLLs";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-3xl grid grid-cols-1 container">
        {PLLs.map((pll, index) => {
          return (
            <Fragment key={index}>
              <PLLFormula {...pll} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
