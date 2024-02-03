import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";

import { Interval } from "./types";

const App = () => {
	const [intervals, setIntervals] = useLocalStorage<Interval[]>(
		"intervals",
		[],
	);

	const handleAddInterval = () => {
		setIntervals([...intervals, { id: uuidv4(), start: "", end: "" }]);
	};

	const handleResetIntervals = () => {
		setIntervals([]);
	};

	return (
		<div>
			<div>
				{intervals.map((interval) => (
					<div key={interval.id}>
						<form>
							<label>開始</label>
							<input type="time" value={interval.start} />
						</form>
						<form>
							<label>終了</label>
							<input type="time" value={interval.end} />
						</form>
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
		</div>
	);
};

export default App;
