import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
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
			<div className="p-5">
				<h1 className="text-2xl">Add Time Intervals</h1>
				<p>複数の時間の区間の総和を計算できます。</p>
			</div>
			<hr />
			<div className="flex flex-col gap-5 p-5">
				<div className="flex flex-col gap-5">
					{intervals.map((interval) => (
						<div className="flex flex-row gap-5 items-end" key={interval.id}>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label>開始</Label>
								<Input
									type="time"
									value={interval.start}
									onChange={(event) =>
										handleChangeInterval(interval.id, {
											...interval,
											start: event.target.value,
										})
									}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label>終了</Label>
								<Input
									type="time"
									value={interval.end}
									onChange={(event) =>
										handleChangeInterval(interval.id, {
											...interval,
											end: event.target.value,
										})
									}
								/>
							</div>
							<Button
								variant="destructive"
								onClick={() => handleDeleteInterval(interval.id)}
							>
								削除
							</Button>
						</div>
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
