import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Convert a base64 string to a File object
 * @param base64 - The base64 string to convert
 * @param filename - The desired filename
 * @param mimeType - The MIME type of the file (default: 'image/png')
 * @returns File object
 */
export const base64ToFile = (
	base64: string,
	filename: string,
	mimeType: string = "image/png",
): File => {
	const byteString = atob(base64.split(",")[1]);
	const arrayBuffer = new ArrayBuffer(byteString.length);
	const uint8Array = new Uint8Array(arrayBuffer);

	for (let i = 0; i < byteString.length; i++) {
		uint8Array[i] = byteString.charCodeAt(i);
	}

	const blob = new Blob([arrayBuffer], { type: mimeType });
	return new File([blob], filename, { type: mimeType });
};
