import { feedbackType } from "@/models/feedback";
import { createContext, useContext } from "react";

type feedbackContextProps = {
	open: boolean;
	onOpenChange: () => void;
	feedbackType: feedbackType | null;
	onFeedbackType: (type: feedbackContextProps["feedbackType"]) => void;
};

export const feedbackContext = createContext<feedbackContextProps>(
	{} as feedbackContextProps,
);
export const useFeedback = () => useContext(feedbackContext);
