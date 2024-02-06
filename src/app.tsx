import { IntervalInput } from "./components/interval-input";
import { Header } from "./components/layouts/header";
import { Button } from "./components/ui/button";
import { useTimeIntervals } from "./hooks/use-time-intervals";
import { useTotalTime } from "./hooks/use-total-time";

const App = () => {
  const {
    timeIntervals,
    onChangeTimeInterval,
    onAddTimeInterval,
    onDeleteTimeInterval,
    onResetTimeIntervals,
  } = useTimeIntervals();

  const { total, onAddIntervals } = useTotalTime(timeIntervals);

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-5">
          {timeIntervals.map((interval) => (
            <IntervalInput
              key={interval.id}
              timeInterval={interval}
              onChangeTimeInterval={onChangeTimeInterval}
              onDeleteTimeInterval={onDeleteTimeInterval}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center gap-5">
          <Button onClick={onAddTimeInterval}>追加</Button>
          <Button variant="secondary" onClick={onResetTimeIntervals}>
            リセット
          </Button>
        </div>
        <div className="flex justify-center">
          <Button onClick={onAddIntervals}>計算</Button>
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
