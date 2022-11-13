export declare const Languages: {
    'en-CA': string;
    'fr-CA': string;
};
export declare type Locale = keyof typeof Languages;
export declare const toIsoGmtDateString: (date?: Date | null) => string;
export declare function iterateObject<T>(obj: T, iteratorFunction: (fieldName: keyof T, fieldValue: T[keyof T], obj: T) => void): void;
export declare const getTypeMap: (obj: any) => any;
export declare function getUnique<T>(items: Array<T>): Array<T>;
export declare const Config: {
    DeploymentDirectory: string | undefined;
};
export declare const BYTES_PER_KILOBYTE = 1024;
export declare const convertBytesToKB: (bytes: number) => number;
