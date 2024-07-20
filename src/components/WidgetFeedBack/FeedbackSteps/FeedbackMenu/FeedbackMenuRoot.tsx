type FeedbackMenuRootProps = {
	children: React.ReactNode;
};

export const FeedbackMenuRoot = ({ children }: FeedbackMenuRootProps) => {
	return <div className="flex flex-col h-full">{children}</div>;
};
