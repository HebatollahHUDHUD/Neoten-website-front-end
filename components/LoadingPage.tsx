import { LoaderIcon } from "lucide-react";

function LoadingPage() {
  return (
    <div className="fixed w-screen h-screen bg-white z-[999] top-0 left-0 bg-background min-h-screen flex items-center justify-center p-8">
      <div className="shrink-0 flex flex-col justify-center items-center p-4 rounded-lg bg-gray-200 shadow-2xl shadow-gray-800/10">
        <LoaderIcon size={32} className="animate-spin text-[#1B4065]" />
      </div>
    </div>
  );
}

export default LoadingPage;
