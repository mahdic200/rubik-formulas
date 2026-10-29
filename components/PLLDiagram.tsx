import { Vector } from "@/lib/types";

interface Props {
  className?: string;
  squareClassName?: string;
  edgeSize: number;
  gapSize: number;
  vectors: Vector[];
  arrowScale?: number;
}

function PLLDiagram({
  edgeSize,
  gapSize,
  vectors,
  className = "",
  squareClassName = "",
  arrowScale = 100,
}: Props) {
  const edge_half = edgeSize / 2;
  return (
    <div
      className={`${className} relative grid grid-cols-3 grid-cols-3 bg-cyan-800`}
      style={{ gap: `${gapSize}px` }}>
      {vectors.map(({ from, to }, index) => {
        const [x1, y1] = from;
        const [x2, y2] = to;
        const ml = edge_half;
        const mt = edge_half;
        const xdiff = Math.abs(x2 - x1);
        const ydiff = Math.abs(y2 - y1);
        const edge_x = xdiff * (edgeSize + gapSize);
        const edge_y = ydiff * (edgeSize + gapSize);
        let arrow_length = Math.sqrt(edge_x ** 2 + edge_y ** 2) * (arrowScale / 100);

        const top = (y1 - 1) * gapSize + mt + (y1 - 1) * edgeSize;
        const left = (x1 - 1) * gapSize + ml + (x1 - 1) * edgeSize;

        let rotate_z = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

        return (
          <div
            key={index}
            className="absolute flex justify-end items-center bg-cyan-800 origin-left"
            style={{
              width: arrow_length + "px",
              height: "4px",
              top: top + "px",
              left: left + "px",
              transform: `rotateZ(${rotate_z}deg)`,
            }}>
            <div
              className="absolute bg-cyan-800 -right-0.5"
              style={{
                width: "24px",
                height: "24px",
                overflow: "hidden",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%)",
              }}></div>
          </div>
        );
      })}
      {Array.from({ length: 9 }, (_, i) => i + 1).map((i) => {
        return (
          <div
            key={i}
            className={`${squareClassName} col-span-1 row-span-1 flex justify-center items-center bg-yellow-300 text-blue-500`}
            style={{ width: `${edgeSize}px`, height: `${edgeSize}px` }}>
            {/* {i} */}
          </div>
        );
      })}
    </div>
  );
}

export default PLLDiagram;
