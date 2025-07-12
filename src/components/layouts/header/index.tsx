import { Logo } from "@/components/icons/logo";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <Logo width={60} height={60} />
          <div>
            <h1 className="text-3xl font-bold">Time Wizard</h1>
            <p className="text-sm text-purple-100">
              時間の区間の合計時間を計算できます。
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
