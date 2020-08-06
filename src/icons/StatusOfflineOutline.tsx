import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const StatusOfflineOutline = (
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
        d="M19.071 4.929a1 1 0 10-1.414 1.414L19.07 4.93zm-.707 13.435l-.707.707.707-.707zM16.243 7.757a1 1 0 10-1.415 1.415l1.415-1.415zm-.707 7.779l-.708.707.708-.707zm-7.779.707a1 1 0 001.415-1.415l-1.415 1.415zm.283-3.677a1 1 0 00-1.98.281l1.98-.28zm-3.111 6.505a1 1 0 001.414-1.414L4.93 19.07zm-.512-9.626a1 1 0 00-1.896-.638l1.896.638zm-.71-7.152a1 1 0 00-1.414 1.414l1.414-1.414zm16.586 19.414a1 1 0 001.414-1.414l-1.414 1.414zM17.657 6.343a8 8 0 010 11.314l1.414 1.414c3.905-3.905 3.905-10.237 0-14.142l-1.414 1.414zm-2.829 2.829a4 4 0 010 5.656l1.415 1.415a6 6 0 000-8.486l-1.415 1.415zM12 12h2a2 2 0 00-2-2v2zm-2.828 2.828a3.978 3.978 0 01-1.132-2.262l-1.98.281a5.978 5.978 0 001.697 3.396l1.415-1.415zm-2.829 2.829a8 8 0 01-1.926-8.212l-1.896-.638A10 10 0 004.93 19.071l1.414-1.414zM12 12v-2c-.552 0-1.053.225-1.414.586L12 12zM2.293 3.707L10.586 12 12 10.586 3.707 2.293 2.293 3.707zM10.586 12L12 13.414 13.414 12 12 10.586 10.586 12zM12 13.414l2.828 2.829 1.415-1.415L13.414 12 12 13.414zm2.828 2.829l2.829 2.828 1.414-1.414-2.828-2.829-1.415 1.415zm2.829 2.828l2.636 2.636 1.414-1.414-2.636-2.636-1.414 1.414zM12 12l1.414 1.414c.361-.36.586-.862.586-1.414h-2z"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(StatusOfflineOutline);
export default ForwardRef;
