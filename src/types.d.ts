declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default ReactComponent;
}

