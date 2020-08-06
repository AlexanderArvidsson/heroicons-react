import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const DocumentSearchOutline = (
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
        d="M13.293 3.293L12.586 4l.707-.707zm5.414 5.414L19.414 8l-.707.707zM10 20a1 1 0 100 2v-2zm-6-4a1 1 0 102 0H4zm.293 4.293a1 1 0 101.414 1.414l-1.414-1.414zM7 4h5.586V2H7v2zm11 5.414V19h2V9.414h-2zM12.586 4L18 9.414 19.414 8 14 2.586 12.586 4zM20 9.414A2 2 0 0019.414 8L18 9.414h2zM12.586 4L14 2.586A2 2 0 0012.586 2v2zM17 22a3 3 0 003-3h-2a1 1 0 01-1 1v2zM6 5a1 1 0 011-1V2a3 3 0 00-3 3h2zm11 15h-7v2h7v-2zM6 16V5H4v11h2zm8-2a2 2 0 01-2 2v2a4 4 0 004-4h-2zm-4 0a2 2 0 012-2v-2a4 4 0 00-4 4h2zm2-2a2 2 0 012 2h2a4 4 0 00-4-4v2zm-2.828 3.414l-4.88 4.879 1.415 1.414 4.879-4.879-1.414-1.414zM12 16a1.99 1.99 0 01-1.414-.586l-1.414 1.414A3.99 3.99 0 0012 18v-2zm-1.414-.586A1.99 1.99 0 0110 14H8a3.99 3.99 0 001.172 2.828l1.414-1.414z"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(DocumentSearchOutline);
export default ForwardRef;
