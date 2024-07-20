import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { feedbackRequest, feedbackSchema } from "@/models/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FeedbackFormPrinter } from "./FeedbackFormPrinter";
import axios from "axios";
import { useFeedback } from "@/contexts/feedback/feedbackContext";
export const FeedbackFormContent = () => {
	const { feedbackType } = useFeedback();
	const methods = useForm<feedbackRequest>({
		mode: "all",
		criteriaMode: "firstError",
		resolver: zodResolver(feedbackSchema),
	});

	const feedbackWatch = methods.watch();

	const sendFeedback = async (data: feedbackRequest) => {
		await axios.post("http://localhost:8000/feedbacks", {
			...data,
			print: null,
			type: feedbackType,
		});
		methods.reset();
	};

	return (
		<FormProvider {...methods}>
			<div className="flex-1 h-full">
				<form
					onSubmit={methods.handleSubmit(sendFeedback)}
					className="flex-1 h-full flex flex-col items-center justify-center gap-2"
				>
					<Textarea
						{...methods.register("message")}
						placeholder="Conte os detalhes do que está acontecendo"
						className="flex-1 placeholder:text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:dark:ring-primary"
					/>
					<div className="flex items-center gap-2 w-full">
						<FeedbackFormPrinter />
						<Button
							type="submit"
							disabled={Boolean(!feedbackWatch.message)}
							className="flex-1 text-white dark:text-white font-light bg-second dark:bg-primary hover:bg-primary dark:hover:bg-primary disabled:cursor-not-allowed disabled:bg-second disabled:dark:bg-second"
						>
							Enviar feedback
						</Button>
					</div>
				</form>
			</div>
		</FormProvider>
	);
};
