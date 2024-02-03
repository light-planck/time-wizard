import { FC } from "react";

import { Interval } from "@/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Props {
	interval: Interval;
	onChangeInterval: (id: string, newValue: Interval) => void;
	onDeleteInterval: (id: string) => void;
}

export const IntervalInput: FC<Props> = ({
	interval,
	onChangeInterval,
	onDeleteInterval,
}) => {
	return (
		<div className="flex flex-row gap-5 items-end">
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label>開始</Label>
				<Input
					type="time"
					value={interval.start}
					onChange={(event) =>
						onChangeInterval(interval.id, {
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
						onChangeInterval(interval.id, {
							...interval,
							end: event.target.value,
						})
					}
				/>
			</div>
			<Button
				variant="destructive"
				onClick={() => onDeleteInterval(interval.id)}
			>
				削除
			</Button>
		</div>
	);
};
