import { Button } from "@/components/ui/button";
import { useFeedback } from "@/contexts/feedback/feedbackContext";
import { X } from "lucide-react";

export const FeedbackMenuHeader = () => {
	const { onFeedbackType } = useFeedback();
	return (
		<header className="flex items-center gap-2 py-1.5">
			<div className="flex-1">
				<h1 className="text-lg text-center">Deixa o seu Feedback</h1>
			</div>
			<Button
				type="button"
				onClick={() => onFeedbackType(null)}
				className="text-zinc-300 hover:text-white dark:text-zinc-300 dark:hover:text-white cursor-pointer p-0 h-fit bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent"
			>
				<X size={18} strokeWidth={1.5} />
			</Button>
		</header>
	);
};
