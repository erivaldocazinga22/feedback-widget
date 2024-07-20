import { MessageCircleMore } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { FeedbackMenu } from "./FeedbackSteps/FeedbackMenu";
import { useFeedback } from "@/contexts/feedback/feedbackContext";
import { FeedbackForm } from "./FeedbackSteps/FeedbackForm";
export const WidgetFeedBack = () => {
	const { feedbackType, open, onOpenChange } = useFeedback();

	return (
		<div className="absolute bottom-4 right-4">
			<Popover open={open} onOpenChange={onOpenChange}>
				<PopoverTrigger asChild>
					<Button
						type="button"
						variant="default"
						title="Feedback"
						className="min-w-12 min-h-12 w-12 h-12 max-w-12 max-h-12 p-0 rounded-full group-hover:px-4 cursor-pointer flex gap-1 items-center justify-center text-white dark:text-white bg-primary dark:bg-primary hover:bg-primary dark:hover:bg-primary"
					>
						<MessageCircleMore size={30} strokeWidth={1.5} />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="relative w-72 mb-2 mr-4 py-4 px-4 h-52 rounded-xl dark:bg-zinc-900">
					{feedbackType ? (
						<FeedbackForm.Root>
							<FeedbackForm.Header />
							<FeedbackForm.Content />
						</FeedbackForm.Root>
					) : (
						<FeedbackMenu.Root>
							<FeedbackMenu.Header />
							<FeedbackMenu.Content>
								<FeedbackMenu.Item type="bug" />
								<FeedbackMenu.Item type="idea" />
								<FeedbackMenu.Item type="thought" />
							</FeedbackMenu.Content>
						</FeedbackMenu.Root>
					)}
				</PopoverContent>
			</Popover>
		</div>
	);
};

/* 
			<div className="flex-1 flex items-center justify-center gap-2">
								<div className="w-20 max-h-32 h-full rounded-lg flex gap-2 flex-col items-center justify-center bg-zinc-800">
									<img src="/icons/bug.svg" alt="" />
									<span className="block text-sm">Problema</span>
								</div>
								<div className="w-20 max-h-32 h-full rounded-lg flex gap-2 flex-col items-center justify-center bg-zinc-800">
									<img src="/icons/idea.svg" alt="" />
									<span className="block text-sm">Ideia</span>
								</div>
								<div className="w-20 max-h-32 h-full rounded-lg flex gap-2 flex-col items-center justify-center bg-zinc-800">
									<img src="/icons/thought.svg" alt="" />
									<span className="block text-sm">Outro</span>
								</div>
							</div>
	</div>;
*/
