declare namespace JSX {
    interface IntrinsicElements {
      'box-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: string;
        name?: string;
        color?: string;
        size?: string;
      };
    }
  }
  