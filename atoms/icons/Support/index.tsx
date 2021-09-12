import { FunctionComponent } from "react"
import { BaseIconProps } from "../../interfaces"


const Support: FunctionComponent<BaseIconProps> = ({
  color,
  size = 24,  
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color,
      fill: 'currentcolor',
    }}
  >
    <path d="M24.099 19.41L24 19.5l-.099-.09C19.303 15.229 15 11.316 15 7.95 15 5.175 17.175 3 19.95 3c1.56 0 3.06.735 4.05 1.875C24.975 3.735 26.49 3 28.05 3 30.825 3 33 5.175 33 7.95c0 3.366-4.303 7.279-8.901 11.46zM28.5 24h-3c0-1.8-1.125-3.42-2.805-4.05l-9.24-3.45H1.5V33h9v-2.16L21 33.75 33 30v-1.5c0-2.49-2.01-4.5-4.5-4.5zm-7.545 6.615L10.5 27.72V19.5h2.415l8.73 3.255c.51.195.855.69.855 1.245 0 0-2.985-.075-3.45-.225l-3.57-1.185-.945 2.85 3.57 1.185c.765.255 1.56.39 2.37.39H28.5c.585 0 1.11.345 1.35.84l-8.895 2.76z" />
  </svg>
);


export default Support;