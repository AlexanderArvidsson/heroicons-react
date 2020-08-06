import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const VariableOutline = (
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
        d="M5.767 4.445a1 1 0 10-1.791-.89l1.79.89zm-1.791 16a1 1 0 101.79-.89l-1.79.89zm14.129-.89a1 1 0 001.79.89l-1.79-.89zm1.79-16a1 1 0 00-1.79.89l1.79-.89zM9 8a1 1 0 000 2V8zm2.207 1.725l-.961.275.961-.275zm1.586 5.55l-.962.274.962-.274zM15 17a1 1 0 100-2v2zm1-7a1 1 0 100-2v2zm-1.599-.302l.76.651-.76-.65zM9.6 15.302l.759.65-.76-.65zM8 15a1 1 0 100 2v-2zm-4-3c0-2.716.636-5.28 1.767-7.555l-1.791-.89A18.926 18.926 0 002 12h2zm1.767 7.555A16.926 16.926 0 014 12H2c0 3.031.71 5.9 1.976 8.445l1.79-.89zM19.87 12c0 2.716-.636 5.28-1.766 7.555l1.79.89A18.926 18.926 0 0021.872 12h-2zm-1.766-7.555A16.925 16.925 0 0119.87 12h2c0-3.032-.71-5.9-1.975-8.445l-1.791.89zM9 10h1.246V8H9v2zm1.246 0l1.585 5.55 1.923-.55-1.585-5.55-1.923.55zm3.508 7H15v-2h-1.246v2zm-1.923-1.45A2 2 0 0013.754 17v-2l-1.923.55zM10.246 10l1.923-.55A2 2 0 0010.246 8v2zM16 8h-.08v2H16V8zm-2.358 1.048L8.84 14.65l1.519 1.301 4.803-5.603-1.519-1.301zM8.08 15H8v2h.08v-2zm.76-.35a1 1 0 01-.76.35v2a3 3 0 002.278-1.048l-1.519-1.301zM15.92 8a3 3 0 00-2.278 1.048l1.519 1.301A1 1 0 0115.92 10V8z"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(VariableOutline);
export default ForwardRef;
