/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

type ObjectKeys<T> = T extends object
    ? (keyof T)[]
    : T extends number
        ? []
        : T extends Array<any> | string
            ? string[]
            : never;

interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
}
