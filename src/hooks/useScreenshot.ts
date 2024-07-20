import { useState, useCallback } from "react";
import html2canvas from "html2canvas";

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

export const useScreenshot = () => {
	const [image, setImage] = useState<string | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const [error, setError] = useState<string | null>(null);

	const takeScreenshot = useCallback(() => {
		html2canvas(document.body)
			.then((canvas) => {
				const imgData = canvas.toDataURL("image/png");
				setImage(imgData);
				const fileData = base64ToFile(imgData, "screenshot.png");
				setFile(fileData);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	const invalidateFileScreen = () => setFile(null);

	return { image, file, invalidateFileScreen, takeScreenshot, error };
};
