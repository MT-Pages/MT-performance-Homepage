declare global {
  namespace JSX {
    interface IntrinsicElements {
      "privacybee-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "website-id"?: string;
        type?: string;
        lang?: string;
      };
    }
  }
}

export {};
