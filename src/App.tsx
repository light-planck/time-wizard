import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/header";
import { IntervalInput } from "./components/interval-input";
import { Button } from "./components/ui/button";
import { Interval } from "./types";
import { Total } from "./types/total";

const App = () => {
	const [intervals, setIntervals] = useLocalStorage<Interval[]>(
		"intervals",
		[],
	);

	const handleChangeInterval = (id: string, newValue: Interval) => {
		setIntervals(
			intervals.map((interval) => (interval.id === id ? newValue : interval)),
		);
	};

	const handleDeleteInterval = (id: string) => {
		setIntervals(intervals.filter((interval) => interval.id !== id));
	};

	const handleAddInterval = () => {
		setIntervals([...intervals, { id: uuidv4(), start: "", end: "" }]);
	};

	const handleResetIntervals = () => {
		setIntervals([]);
	};

	const [total, setTotal] = useState<Total>({ hours: 0, minutes: 0 });

	const handleAddIntervals = () => {
		const total = intervals.reduce((acc, interval) => {
			const start = new Date(`2021-01-01T${interval.start}`);
			const end = new Date(`2021-01-01T${interval.end}`);
			return acc + (end.getTime() - start.getTime());
		}, 0);

		setTotal({
			hours: Math.floor(total / 1000 / 60 / 60),
			minutes: Math.floor((total / 1000 / 60) % 60),
		});
	};

	return (
		<div>
			<Header />
			<div className="flex flex-col gap-5 p-5">
				<div className="flex flex-col gap-5">
					{intervals.map((interval) => (
						<IntervalInput
							key={interval.id}
							interval={interval}
							onChangeInterval={handleChangeInterval}
							onDeleteInterval={handleDeleteInterval}
						/>
					))}
				</div>
				<div className="flex flex-row justify-center gap-5">
					<Button onClick={handleAddInterval}>追加</Button>
					<Button variant="secondary" onClick={handleResetIntervals}>
						リセット
					</Button>
				</div>
				<div className="flex justify-center">
					<Button onClick={handleAddIntervals}>計算</Button>
				</div>
				<div className="flex justify-center">
					<p>
						合計時間: {total.hours}時間 {total.minutes}分{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default App;
