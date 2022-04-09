import { 
  FunctionComponent, 
  CSSProperties,
} from "react";
import { BaseIconProps } from "../interfaces";


interface LogoProps extends BaseIconProps {
  style?: CSSProperties,
}

const Logo: FunctionComponent<LogoProps> = ({
  color = 'white',
  size = 24,
  style = {},
}) => {
  return (
    <svg
      style={{
        color,
        fill: 'currentcolor',
        ...style,
      }}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      width={size}
      height={size}
    >
      <ellipse
        cx={464}
        cy={2007}
        rx={1008}
        ry={1070}
        fill="url(#prefix___Radial1)"
        stroke="#a25702"
        strokeWidth={19.59}
        transform="matrix(.12397 0 0 .11678 70.108 -106.758)"
      />
      <g transform="matrix(.1204 0 0 .1204 -21.51 -76.313)">
        <path
          d="M697.012 2063.39c-.461.17-.901.33-1.341.5-133.496-286.11-79.536-711.03 249.025-1339.281-31.162 341.071.091 750.551 293.954 750.551 302.81 0 325.11-409.48 293.95-750.551 328.56 628.251 382.52 1053.171 249.03 1339.281-.45-.17-.88-.33-1.32-.49l.21.14c.71.49-1.61 8.44-2.87 10.76-5.41 10-10.9 19.96-16.48 29.86-23.61 41.85-48.99 82.71-76.53 122.09-32.7 46.76-68.41 91.36-106.51 133.82-34.38 38.31-70.64 74.91-108.12 110.19-35.2 33.13-71.48 65.1-108.46 96.23-28.91 24.33-58.24 48.15-87.89 71.58-8.2 6.48-16.42 12.92-24.66 19.34-.01.01-7.18 5.59-7.19 5.59-1.51.02-2.43-1.81-3.64-2.71-2.4-1.8-4.81-3.6-7.22-5.41-8.3-6.23-16.57-12.49-24.82-18.79-32.32-24.66-64.25-49.84-95.66-75.66-61.33-50.42-120.775-103.28-176.518-159.85-54.274-55.09-105.088-113.82-149.277-177.35-26.746-38.45-50.997-78.65-72.071-120.49a928.752 928.752 0 01-17.956-37.74c.467-.72 1.417-.97 2.125-1.45l.239-.16z"
          fill="url(#prefix___Radial2)"
        />
        <clipPath id="prefix__a">
          <path d="M697.012 2063.39c-.461.17-.901.33-1.341.5-133.496-286.11-79.536-711.03 249.025-1339.281-31.162 341.071.091 750.551 293.954 750.551 302.81 0 325.11-409.48 293.95-750.551 328.56 628.251 382.52 1053.171 249.03 1339.281-.45-.17-.88-.33-1.32-.49l.21.14c.71.49-1.61 8.44-2.87 10.76-5.41 10-10.9 19.96-16.48 29.86-23.61 41.85-48.99 82.71-76.53 122.09-32.7 46.76-68.41 91.36-106.51 133.82-34.38 38.31-70.64 74.91-108.12 110.19-35.2 33.13-71.48 65.1-108.46 96.23-28.91 24.33-58.24 48.15-87.89 71.58-8.2 6.48-16.42 12.92-24.66 19.34-.01.01-7.18 5.59-7.19 5.59-1.51.02-2.43-1.81-3.64-2.71-2.4-1.8-4.81-3.6-7.22-5.41-8.3-6.23-16.57-12.49-24.82-18.79-32.32-24.66-64.25-49.84-95.66-75.66-61.33-50.42-120.775-103.28-176.518-159.85-54.274-55.09-105.088-113.82-149.277-177.35-26.746-38.45-50.997-78.65-72.071-120.49a928.752 928.752 0 01-17.956-37.74c.467-.72 1.417-.97 2.125-1.45l.239-.16z" />
        </clipPath>
        <g clipPath="url(#prefix__a)">
          <path
            d="M1240.494 2592.357c17.463 42.021 53.582 47.926 104.5 70.64h-209c62.28-28.637 90.866-29.09 104.5-70.64z"
            fill="#2d0000"
          />
          <g transform="matrix(1 0 0 .98733 0 152.218)">
            <path
              d="M1238.65 2996.71c-20.37-507.39-287.974-1046.51-636.362-1243l23.093 1243H1876.52V1753.94c-325.65 178.31-621.48 733.84-637.87 1242.77z"
              fill="url(#prefix___Linear4)"
            />
            <clipPath id="prefix__b">
              <path d="M1238.65 2996.71c-20.37-507.39-287.974-1046.51-636.362-1243l23.093 1243H1876.52V1753.94c-325.65 178.31-621.48 733.84-637.87 1242.77z" />
            </clipPath>
            <g clipPath="url(#prefix__b)">
              <g transform="matrix(1 0 0 1.01283 -74.352 -226.757)">
                <circle
                  cx={1313}
                  cy={2142}
                  r={427}
                  fill="url(#prefix___Linear6)"
                />
                <clipPath id="prefix__c">
                  <circle cx={1313} cy={2142} r={427} />
                </clipPath>
                <g clipPath="url(#prefix__c)">
                  <g transform="matrix(1.50638 -.00763 .0062 1.14094 -789.774 -325.243)">
                    <clipPath id="prefix__d">
                      <path d="M1388 2546c49.48-233.43 168.35-296.7 255.34-319.55-3.1 121.4-72.6 266.48-255.34 319.55z" />
                    </clipPath>
                    <g clipPath="url(#prefix__d)">
                      <use
                        xlinkHref="#prefix___Image9"
                        x={148.668}
                        y={183.785}
                        width={28.428}
                        height={41.191}
                        transform="matrix(5.40457 .03614 -.02934 7.13894 688.507 907.992)"
                      />
                    </g>
                  </g>
                  <g transform="matrix(-1.50638 -.00763 -.0062 1.14094 3421.46 -325.243)">
                    <clipPath id="prefix__e">
                      <path d="M1388 2546c49.48-233.43 168.35-296.7 255.34-319.55-3.1 121.4-72.6 266.48-255.34 319.55z" />
                    </clipPath>
                    <g clipPath="url(#prefix__e)">
                      <use
                        xlinkHref="#prefix___Image11"
                        x={83.424}
                        y={183.785}
                        width={28.428}
                        height={41.191}
                        transform="matrix(-5.40457 -.03614 -.02934 7.13894 2099.6 917.429)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <path
          d="M1225.92 2508.65l14.58-484.09v1.11l14.58 482.98c-9.19 13.14-14.58 29.12-14.58 46.35 0 2.14.08 4.26.25 6.36l-.42-1.08c.11-1.74.17-3.5.17-5.28 0-17.23-5.39-33.22-14.58-46.35z"
          fill="url(#prefix___Linear12)"
          transform="matrix(1.55757 0 0 .9325 -691.664 181.895)"
        />
        <path
          d="M1110.068 2175.98c-2.377 12.872 10.113 33.293 24.37 43.266 14.263 9.978 30.524 5.313 37.296-.545 9.968-8.626 6.193-19.86-4.782-29.523-17.584-15.488-56.08-17.537-56.884-13.198zM1367.228 2175.98c2.377 12.872-10.113 33.293-24.37 43.266-14.263 9.978-30.524 5.313-37.296-.545-9.968-8.626-6.193-19.86 4.782-29.523 17.584-15.488 56.08-17.537 56.884-13.198z"
          fillOpacity={0.23}
        />
        <path
          d="M1539.41 1619.29c-4.43-55.83-2.41-114.43 7.38-170.54 49.99-188.37 39.54-399.4 11.55-617.005C1817.03 1345 1901.83 1715.42 1751.56 1892.75c-14.09 9.04-27.81 14.36-41.07 16.35-20.35-116.43-82.81-218.47-171.08-289.81zM766.896 1908.6c-12.328-2.29-25.076-7.47-38.141-15.85C578.487 1715.42 663.286 1345 921.977 831.745c-27.992 217.605-38.445 428.635 11.547 617.005 9.642 55.23 11.748 112.87 7.583 167.96-89.842 71.34-153.528 174.26-174.211 291.89z"
          fill="url(#prefix___Linear13)"
        />
        <g>
          <path
            d="M1240.16 1715c93.55 0 169.5 75.95 169.5 169.5s-75.95 169.5-169.5 169.5-169.5-75.95-169.5-169.5 75.95-169.5 169.5-169.5zm0 38.94c47.19 0 85.5 38.31 85.5 85.5s-38.31 85.51-85.5 85.51-85.51-38.32-85.51-85.51c0-47.19 38.32-85.5 85.51-85.5z"
            fill="url(#prefix___Linear14)"
            transform="translate(-492.919 -851.314) scale(1.39774)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="prefix___Linear4"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 1286.25 -1212.94 0 1239.4 1630.1)"
        >
          <stop offset={0} stopColor="#360037" />
          <stop offset={0.42} stopColor="#d34700" />
          <stop offset={0.74} stopColor="#f27d00" />
          <stop offset={1} stopColor="#ff9400" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear6"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 883.71 -812.925 0 1313 1630.08)"
        >
          <stop offset={0} />
          <stop offset={1} stopColor="#370b00" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear12"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 555.477 -27.7579 0 1240.5 1971.18)"
        >
          <stop offset={0} stopColor="#360037" />
          <stop offset={0.42} stopColor="#d34700" />
          <stop offset={0.74} stopColor="#f27d00" />
          <stop offset={1} stopColor="#ff9400" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear13"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 257.775 982.385) scale(1114.83)"
        >
          <stop offset={0} stopColor="#ff9400" />
          <stop offset={0.26} stopColor="#f27d00" />
          <stop offset={0.58} stopColor="#d34700" />
          <stop offset={1} stopColor="#360037" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear14"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 350.794 -322.695 0 1240.16 1681.29)"
        >
          <stop offset={0} stopColor="#ff9400" stopOpacity={0.5} />
          <stop offset={0.26} stopColor="#f27d00" stopOpacity={0.5} />
          <stop offset={0.58} stopColor="#d34700" stopOpacity={0.5} />
          <stop offset={1} stopColor="#360037" stopOpacity={0.5} />
        </linearGradient>
        <radialGradient
          id="prefix___Radial1"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1008 0 0 1070 464 2007)"
        >
          <stop offset={0} stopColor="#630029" />
          <stop offset={0.32} stopColor="#390f19" />
          <stop offset={0.65} stopColor="#2b1414" />
          <stop offset={0.84} stopColor="#361919" />
          <stop offset={1} stopColor="#5e2b2b" />
        </radialGradient>
        <radialGradient
          id="prefix___Radial2"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-90 1938.575 699.925) scale(884.563)"
        >
          <stop offset={0} stopColor="#cb690d" />
          <stop offset={0.09} stopColor="#731b03" />
          <stop offset={0.17} stopColor="#500" />
          <stop offset={0.3} stopColor="#6f1e19" />
          <stop offset={0.42} stopColor="#782822" />
          <stop offset={0.68} stopColor="#9f4718" />
          <stop offset={1} stopColor="#ff9400" />
        </radialGradient>
        <image
          id="prefix___Image9"
          width={29}
          height={42}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAqCAYAAABP7FAaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACFElEQVRYhWNkoAOIE9L8j8xnpLWFaWJq/9HFaGppnqQy3EJGJJtoZmm5rAKGD2GAhVaWcrD8wylHE5+2q0jj9CVNLO3XkMBrIdUtna4jStBCBgYqxykHy1+i1FHNp8uN+YnyJSMjlSxdb86L00JGBkwpqgQvBzMiWBkZCXuYYp8esGMnKlipZukJJxaSLIRZRlHwEkqtuHxEtk+v+zH8J6QblzTZPmXjxmIokV4gy6ePk7HkAwImw7gycxgYSfbpixwiLCTgDpItZWHHbRhemxgYGIR7IDySLP1QSb4vcbgDP/hUS5mFfM0Iu4j26V9WTuJtYET1i2DtNxQBoix90yH6H1YM/GckJ8F/Q+ERZekfdh4iDcd0kEThPdKz89OpOv8ZGBgIFz9YgEz2ZayaCPqUsC+xO0Y+5ThOV+J1/t1FLmSlWOW4PXjNxevTv2y4fYkrQamHrycYDzgtvbY+5v8fQrrJBDgt/cvGjVUcX5bR85pBVGrDquj8nmKS4tLQpZekpI3Vp3/wxCU6MLVrJDkvYWg4caKbaF9aWJSSVR9j+PQPO3Jc4jbTxjCT7KYOisYDVxcR5UsH7TiKWpEoPoWnWBwp1FkliCo9ArghOx/twutLdzk3qvV74D79y8aN1Yde4lZU78MyMjAwMGx6fxHDl36C+jQbj2BhYEDNl0HcyjQf5mFY/fvF/9W/X1ClwUUsAACw7mxAS3cTDwAAAABJRU5ErkJggg=="
        />
        <image
          id="prefix___Image11"
          width={29}
          height={42}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAqCAYAAABP7FAaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACN0lEQVRYhWOME9L8z4AEFr27zshAY8DEwfKXARmnian9J6yNQks5Wf4ywDAHMwTnSSrT1GIWDua/tDQfK2DiYPnHgA3XK8rRzLdMsCDFhttVpGliMUZCQsf9GhJUt5iFg2VA4hS/TzlY/jLMNxCiqm+ZkLMKPrzcmJ9qFmPNMv8ZaFsoMe6w5iTog///EY7wPPaNYhcxHrBjJznYHA79pMhiFk5o6qV5gYsEGC+6MWK1j5AjDHb9J9u3jDf8sZtPOKIZGDQ3kZfiWNi4iVT5Hy+XJMD4JAWhH8MgIkyWnUu6bxkZGBgYXuYw/KfE5RJTSLOYhYGBgYGFA00UjwuokcrhLvxQSZl5Au3E+5YFxmBiwaeMugDFde+buTB9S0JsC9Z9J8q3GIped4qRHMyMUIeJVLwmz1IGBgaGF/1KWCwmzi0ShfcJWoxVwZOpumQlKkaow6Szr+C1GGvykcm+zPhwjiXNMg5eF91d5EK26cpxe3CajTejKMftYby5MhCnxYxklmNEpbZr62PIMl0rcAlW84kqErQClzBe2pZBNR+TVFCf31NMso8NXXox7CCp8DN06WU8faie4jKfrJr/xIlukiy2sChFsYfsds6R89MJWIyQtjHMoo6lMHDg6iKifO2gHQe3iypN+b131uG2GJqynVWDqWspDOx8tAuvr93l3BipbikMbHt5DGu97CVhTTtLGRgYGDa9v4jV136C+ow0HzNa9/UuiuVB3Mq0txQGVv9+AbccAA5wzW7DL5YmAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default Logo;