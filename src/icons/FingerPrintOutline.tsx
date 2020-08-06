import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const FingerPrintOutline = (
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
      <path
        fill="#374151"
        d="M13 11a1 1 0 10-2 0h2zm-4.6 9.039a1 1 0 001.694 1.065L8.4 20.039zM5.862 18.44l-.846-.532.846.532zm-.914-.421a1 1 0 001.72 1.021l-1.72-1.021zm7.838 2.376a1 1 0 001.788.895l-1.788-.895zm3.348-3.124a1 1 0 00-1.924-.544l1.924.544zm-1.327-3.407a1 1 0 001.981.27l-1.981-.27zm3.242 3.993a1 1 0 101.924.548l-1.924-.548zM2.1 14.928a1 1 0 101.798.873L2.1 14.927zM7.499 3.204a1 1 0 001.002 1.73l-1.002-1.73zM5.936 7.5a1 1 0 00-1.731-1.002L5.935 7.5zM11 11c0 3.323-.953 6.421-2.6 9.039l1.694 1.065A18.916 18.916 0 0013 11h-2zm6 0a5 5 0 00-5-5v2a3 3 0 013 3h2zM7 11c0 2.548-.728 4.91-1.985 6.909l1.693 1.065A14.916 14.916 0 009 11H7zm5-5a5 5 0 00-5 5h2a3 3 0 013-3V6zM5.015 17.909a5.053 5.053 0 00-.068.11l1.72 1.022a3.06 3.06 0 01.04-.067l-1.692-1.065zm9.558 3.383a22.876 22.876 0 001.56-4.02l-1.924-.544a20.882 20.882 0 01-1.424 3.668l1.788.895zm2.214-7.157C16.927 13.11 17 12.063 17 11h-2c0 .972-.066 1.928-.194 2.865l1.981.27zM21 11a9 9 0 00-9-9v2a7 7 0 017 7h2zm-1.029 7.406A27.018 27.018 0 0021 11h-2c0 2.38-.332 4.68-.952 6.858l1.924.548zM3 11a8.96 8.96 0 01-.9 3.927l1.8.874A10.96 10.96 0 005 11H3zm9-9a8.963 8.963 0 00-4.5 1.205l1 1.73A6.963 6.963 0 0112 4V2zM4.205 6.5A8.963 8.963 0 003 11h2c0-1.277.34-2.47.936-3.5l-1.731-1z"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(FingerPrintOutline);
export default ForwardRef;
