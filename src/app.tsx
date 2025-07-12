import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Footer } from "./components/layouts/footer";
import { Header } from "./components/layouts/header";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { TimeIntervalInput } from "./features/time/components/time-interval-input";
import { useTimeIntervals } from "./features/time/hooks/use-time-intervals";
import { useTotalTime } from "./features/time/hooks/use-total-time";

const App = () => {
  const {
    timeIntervals,
    hasValidTimeIntervals,
    onChangeTimeInterval,
    onAddTimeInterval,
    onDeleteTimeInterval,
    onResetTimeIntervals,
    validateTimeIntervals,
  } = useTimeIntervals();
  const { totalTime, onCalculateTotalTime } = useTotalTime(timeIntervals);

  const handleCalculate = () => {
    const { success } = validateTimeIntervals();
    if (!success) return;

    onCalculateTotalTime();
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
              時間区間
            </h2>
            <div className="space-y-4">
              {timeIntervals.map((interval) => (
                <TimeIntervalInput
                  key={interval.id}
                  timeInterval={interval}
                  onChangeTimeInterval={onChangeTimeInterval}
                  onDeleteTimeInterval={onDeleteTimeInterval}
                />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
              <Button onClick={onAddTimeInterval} className="shadow-sm">
                追加
              </Button>
              <Button
                variant="secondary"
                onClick={onResetTimeIntervals}
                className="shadow-sm"
              >
                リセット
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex justify-center mb-4">
              <Button
                onClick={handleCalculate}
                size="lg"
                className="shadow-sm px-6 sm:px-8 w-full sm:w-auto"
              >
                計算
              </Button>
            </div>
            <div className="flex justify-center">
              {hasValidTimeIntervals ? (
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">合計時間</p>
                  <p className="text-xl sm:text-3xl font-bold text-primary break-words">
                    {totalTime.hours}時間 {totalTime.minutes}分
                  </p>
                </div>
              ) : (
                <Alert variant="destructive" className="max-w-sm">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>エラー</AlertTitle>
                  <AlertDescription>時間を設定してください。</AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
