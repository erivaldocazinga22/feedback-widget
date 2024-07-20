import { Button } from "@/components/ui/button";
import { useFeedback } from "@/contexts/feedback/feedbackContext";
import { ArrowLeft, X } from "lucide-react";

export const FeedbackFormHeader = () => {
	const { feedbackType, onFeedbackType, onOpenChange } = useFeedback();
	return (
		<header className="flex items-center gap-2 ">
			<Button
				type="button"
				onClick={() => onFeedbackType(null)}
				className="text-zinc-300 hover:text-white dark:text-zinc-300 dark:hover:text-white cursor-pointer p-0 h-fit bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent"
			>
				<ArrowLeft size={18} strokeWidth={1.5} />
			</Button>
			<div className="flex-1 flex gap-1.5 items-center justify-center">
				<img src={`/icons/${feedbackType}.svg`} className="w-6 h-6" />
				<h1 className="text-lg text-center">
					{feedbackType === "bug"
						? "Problema"
						: feedbackType === "idea"
							? "Ideia"
							: feedbackType === "thought" && "Outro"}
				</h1>
			</div>
			<Button
				type="button"
				onClick={onOpenChange}
				className="text-zinc-300 hover:text-white dark:text-zinc-300 dark:hover:text-white cursor-pointer p-0 h-fit bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent"
			>
				<X size={18} strokeWidth={1.5} />
			</Button>
		</header>
	);
};
