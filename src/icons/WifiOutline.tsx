import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const WifiOutline = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      ref={svgRef}
      {...props}
    >
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        fill="#374151"
        d="M7.404 15.697a1 1 0 101.414 1.414l-1.414-1.414zm7.778 1.414a1 1 0 001.414-1.414l-1.414 1.414zM12 19a1 1 0 100 2v-2zm.01 2a1 1 0 000-2v2zm-7.788-8.778a1 1 0 001.414 1.414l-1.414-1.414zm14.142 1.414a1 1 0 001.414-1.414l-1.414 1.414zM.686 8.686a1 1 0 101.415 1.415L.686 8.686zM21.9 10.101a1 1 0 001.414-1.415L21.9 10.101zM8.818 17.11a4.5 4.5 0 016.364 0l1.414-1.414a6.5 6.5 0 00-9.192 0l1.414 1.414zM12 21h.01v-2H12v2zm-6.364-7.364a9 9 0 0112.728 0l1.414-1.414c-4.295-4.296-11.26-4.296-15.556 0l1.414 1.414zm-3.535-3.535c5.467-5.468 14.331-5.468 19.799 0l1.414-1.415c-6.248-6.248-16.38-6.248-22.628 0l1.415 1.415z"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(WifiOutline);
export default ForwardRef;
