import { Logo } from "@/components/icons/logo";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <Logo width={60} height={60} />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Time Wizard</h1>
            <p className="text-sm text-gray-600">
              時間の区間の合計時間を計算できます。
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
