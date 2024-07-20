import { ReactNode, useState } from "react";
import { feedbackContext } from "./feedbackContext";
import { feedbackType } from "@/models/feedback";

type FeedbackProviderProps = {
	children: ReactNode;
};

export default function FeedbackProvider({ children }: FeedbackProviderProps) {
	const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);
	const [open, setOpen] = useState(false);

	const onFeedbackType = (type: feedbackType | null) => setFeedbackType(type);
	const onOpenChange = () => {
		setOpen((prev) => !prev);
		onFeedbackType(null);
	};

	return (
		<feedbackContext.Provider
			value={{ feedbackType, onFeedbackType, open, onOpenChange }}
		>
			{children}
		</feedbackContext.Provider>
	);
}
