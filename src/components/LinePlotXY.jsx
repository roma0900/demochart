import * as d3 from "d3";
import { useRef, useEffect } from "react";

export default function LinePlotXY({
  data,
  width = 640,
  height = 1000,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40
}) {
  const gx = useRef();
  const gy = useRef();
  const x = d3.scaleLinear(
    d3.extent(data.map(function (item) {
      return (item.x);
    })),
    [marginLeft, width - marginRight]
  );
  const y = d3.scaleLinear(
    d3.extent(data.map(function (item) {
      return (item.y);
 })),
    [height - marginBottom, marginTop]);
  const line = d3.line(d => x(d.x), d => y(d.y));
  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);
  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
      <g ref={gy} transform={`translate(${marginLeft},0)`} />
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        d={line(data)}
      />
      <g fill="white" stroke="currentColor" stroke-width="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(d.x)} cy={y(d.y)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}