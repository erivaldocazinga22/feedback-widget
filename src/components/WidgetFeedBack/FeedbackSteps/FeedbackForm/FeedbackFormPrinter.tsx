import { Camera, Trash2 } from "lucide-react";
import { useScreenshot } from "@/hooks/useScreenshot";
import { useFormContext } from "react-hook-form";

export const FeedbackFormPrinter = () => {
	const { setValue } = useFormContext();
	const {
		takeScreenshot,
		file: screenshot,
		invalidateFileScreen,
	} = useScreenshot();

	return (
		<div className="w-9 h-9 relative cursor-pointer rounded-md overflow-hidden flex items-center justify-center text-white bg-second">
			{screenshot ? (
				<>
					<div
						onClick={invalidateFileScreen}
						className="absolute w-full h-full top-0 left-0 z-50 p-1 flex items-end justify-end bg-black/50"
					>
						<Trash2 size={18} strokeWidth={2} className="opacity-90" />
					</div>
					<img
						src={URL.createObjectURL(screenshot)}
						alt=""
						className="w-full h-full object-cover"
					/>
				</>
			) : (
				<>
					<div
						onClick={() => {
							takeScreenshot();
							setValue("print", screenshot);
						}}
						className="text-sm cursor-pointer flex items-center justify-center"
					>
						<Camera size={24} strokeWidth={1.5} />
					</div>
				</>
			)}
		</div>
	);
};
