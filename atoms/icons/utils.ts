import { CSSProperties } from "react";
import theme from "@theme";
import { TColors } from "@theme/colors";

export const getStyles = (color: TColors) => ({
  color: theme.colors[color],
  fill: 'currentcolor'
}) as CSSProperties;