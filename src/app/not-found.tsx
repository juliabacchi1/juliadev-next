import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[#FFF8F2] text-gray-800 px-6">
      <AlertTriangle size={64} className="text-[#BA4B2E] mb-4" />
      <h1 className="text-4xl font-bold mb-2">Página não encontrada</h1>
      <p className="text-lg mb-6">
        Oops! Parece que essa página não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-2xl bg-[#BA4B2E] text-white hover:bg-[#a23f26] transition"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
