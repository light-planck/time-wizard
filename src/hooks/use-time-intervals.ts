import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";

import { TimeInterval } from "@/types";

export const useTimeIntervals = () => {
	const [timeIntervals, setTimeIntervals] = useLocalStorage<TimeInterval[]>(
		"timeIntervals",
		[],
	);

	const onChangeTimeInterval = (id: string, newValue: TimeInterval) => {
		setTimeIntervals(
			timeIntervals.map((interval) =>
				interval.id === id ? newValue : interval,
			),
		);
	};

	const onDeleteTimeInterval = (id: string) => {
		setTimeIntervals(timeIntervals.filter((interval) => interval.id !== id));
	};

	const onAddTimeInterval = () => {
		setTimeIntervals([...timeIntervals, { id: uuidv4(), start: "", end: "" }]);
	};

	const onResetTimeIntervals = () => {
		setTimeIntervals([]);
	};

	return {
		timeIntervals,
		onChangeTimeInterval,
		onAddTimeInterval,
		onDeleteTimeInterval,
		onResetTimeIntervals,
	};
};
