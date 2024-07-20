type FeedbackMenuContentProps = {
	children: React.ReactNode;
};

export const FeedbackMenuContent = ({ children }: FeedbackMenuContentProps) => {
	return (
		<div className="flex-1 flex items-center justify-center gap-2">
			{children}
		</div>
	);
};
