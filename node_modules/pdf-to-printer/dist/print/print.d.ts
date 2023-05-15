export interface PrintOptions {
    printer?: string;
    pages?: string;
    subset?: string;
    orientation?: string;
    scale?: string;
    monochrome?: boolean;
    side?: string;
    bin?: string;
    paperSize?: string;
    silent?: boolean;
    printDialog?: boolean;
    sumatraPdfPath?: string;
    copies?: number;
}
export default function print(pdf: string, options?: PrintOptions): Promise<void>;
