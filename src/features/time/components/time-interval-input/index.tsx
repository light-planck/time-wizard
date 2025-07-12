import { Label } from "@radix-ui/react-label";
import type { FC } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { TimeInterval } from "../../schemas";

interface Props {
  timeInterval: TimeInterval;
  onChangeTimeInterval: (id: string, newValue: TimeInterval) => void;
  onDeleteTimeInterval: (id: string) => void;
}

export const TimeIntervalInput: FC<Props> = ({
  timeInterval,
  onChangeTimeInterval,
  onDeleteTimeInterval,
}) => {
  return (
    <div className="flex flex-row gap-5 items-end justify-center">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="start-time">開始</Label>
        <Input
          type="time"
          id="start-time"
          value={timeInterval.start}
          onChange={(event) =>
            onChangeTimeInterval(timeInterval.id, {
              ...timeInterval,
              start: event.target.value,
            })
          }
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="end-time">終了</Label>
        <Input
          type="time"
          id="end-time"
          value={timeInterval.end}
          onChange={(event) =>
            onChangeTimeInterval(timeInterval.id, {
              ...timeInterval,
              end: event.target.value,
            })
          }
        />
      </div>
      <Button
        variant="destructive"
        onClick={() => onDeleteTimeInterval(timeInterval.id)}
      >
        <p className="text-black">削除</p>
      </Button>
    </div>
  );
};
