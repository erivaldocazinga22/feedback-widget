import { WidgetFeedBack } from "./components/WidgetFeedBack";
import FeedbackProvider from "./contexts/feedback/feedbackProvider";

export default function App() {
	/* const { takeScreenshot } = useScreenshot();
	const captureRef = useRef<HTMLDivElement>(null);
	const [screenshot, setScreenshot] = useState<File | null>(null);
	const [file, setFile] = useState<File | null>(null);

	const handleCaptureClick = async () => {
		if (captureRef.current) {
			const screenshotData = await takeScreenshot(captureRef.current);
			if (screenshotData) {
				const file = base64ToFile(screenshotData, "screenshot.png");
				setScreenshot(file);
			}
		}
	}; */
	return (
		<div>
			<FeedbackProvider>
				<WidgetFeedBack />
			</FeedbackProvider>
		</div>
	);
}
