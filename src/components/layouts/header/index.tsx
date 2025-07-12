import { Logo } from "@/components/icons/logo";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <Logo width={32} height={32} className="sm:w-[60px] sm:h-[60px]" />
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
              Time Wizard
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              時間の区間の合計時間を計算できます。
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
