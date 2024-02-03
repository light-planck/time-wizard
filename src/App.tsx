import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
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
			<div>
				{intervals.map((interval) => (
					<div key={interval.id}>
						<form>
							<label>開始</label>
							<input
								type="time"
								value={interval.start}
								onChange={(event) =>
									handleChangeInterval(interval.id, {
										...interval,
										start: event.target.value,
									})
								}
							/>
						</form>
						<form>
							<label>終了</label>
							<input
								type="time"
								value={interval.end}
								onChange={(event) =>
									handleChangeInterval(interval.id, {
										...interval,
										end: event.target.value,
									})
								}
							/>
						</form>
						<button
							type="button"
							onClick={() => handleDeleteInterval(interval.id)}
						>
							削除
						</button>
					</div>
				))}
			</div>
			<div>
				<button type="button" onClick={handleAddInterval}>
					追加
				</button>
				<button type="button" onClick={handleResetIntervals}>
					リセット
				</button>
			</div>
			<div>
				<button type="button" onClick={handleAddIntervals}>
					計算
				</button>
			</div>
			<div>
				<p>
					合計時間: {total.hours}時間 {total.minutes}分{" "}
				</p>
			</div>
		</div>
	);
};

export default App;
