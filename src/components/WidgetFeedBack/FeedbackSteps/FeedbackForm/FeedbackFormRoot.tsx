type FeedbackFormRootProps = {
	children: React.ReactNode;
};
export const FeedbackFormRoot = ({ children }: FeedbackFormRootProps) => {
	return <div className="h-full flex flex-col gap-2">{children}</div>;
};
