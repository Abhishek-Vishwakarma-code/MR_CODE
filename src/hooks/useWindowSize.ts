import { useState, useEffect } from "react";

interface WindowSize {
	width: number;
	height: number;
}

export default function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: typeof window !== "undefined" ? window.innerWidth : 1200,
		height: typeof window !== "undefined" ? window.innerHeight : 800,
	});

	useEffect(() => {
		// Escape early if not in browser environment
		if (typeof window === "undefined") return;

		function changeWindowSize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", changeWindowSize);

		// Call handler right away so state gets updated with initial window size
		changeWindowSize();

		return () => {
			window.removeEventListener("resize", changeWindowSize);
		};
	}, []);

	return windowSize;
}