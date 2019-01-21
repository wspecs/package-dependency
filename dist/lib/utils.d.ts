export declare function findNodeModules(folder: string): Promise<string[]>;
export declare function findRequireModule(text: string): string[];
export declare function findImportModule(text: string): string[];
export declare function findModule(text: string, regex: RegExp): string[];
