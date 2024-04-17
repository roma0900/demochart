import type { CSSProperties } from "react";

import type { ECharts, ComposeOption, SetOptionOpts } from "echarts/core";

import type {
  BarSeriesOption,
  LineSeriesOption,
  ScatterSeriesOption,
} from "echarts/charts";
import type { TitleComponentOption, GridComponentOption } from "echarts/components";

export type EChartsOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | ScatterSeriesOption
>;

export interface ReactEChartsProps {
    option: any;
    style?: CSSProperties;
    settings?: SetOptionOpts;
    loading?: boolean;
    theme?: "light" | "dark";
  }