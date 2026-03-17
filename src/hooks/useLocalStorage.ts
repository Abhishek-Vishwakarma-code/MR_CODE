import { useState, useEffect } from "react";

const useLocalStorage = <T>(
	key: string,
	initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {

	const [value, setValue] = useState<T>(() => {
		try {
			if (typeof window !== "undefined") {
				const item = window.localStorage.getItem(key);
				return item ? JSON.parse(item) : initialValue;
			} else {
				return initialValue;
			}
		} catch (error) {
			console.error(`Error reading localStorage key "${key}":`, error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			if (typeof window !== "undefined") {
				window.localStorage.setItem(key, JSON.stringify(value));
			}
		} catch (error) {
			console.error(`Error setting localStorage key "${key}":`, error);
		}
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;