import { Button } from "@/components/ui/button";
import { useFeedback } from "@/contexts/feedback/feedbackContext";

type FeedbackMenuItemProps = {
	type: "bug" | "idea" | "thought";
};

export const FeedbackMenuItem = ({ type }: FeedbackMenuItemProps) => {
	const { onFeedbackType } = useFeedback();
	return (
		<Button
			type="button"
			onClick={() => onFeedbackType(type)}
			className="w-20 max-h-32 h-full rounded-lg flex gap-2 flex-col items-center justify-center text-white dark:text-white bg-zinc-800 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-800 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:dark:ring-primary"
		>
			<img src={`/icons/${type}.svg`} alt="" />
			<span className="block text-sm">
				{type === "bug"
					? "Problema"
					: type === "idea"
						? "Ideia"
						: type === "thought" && "Outro"}
			</span>
		</Button>
	);
};
