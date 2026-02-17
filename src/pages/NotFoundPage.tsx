import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="px-4 md:px-8 lg:px-32 py-20">
      <div className="max-w-2xl mx-auto border border-[#abb2bf] p-6">
        <h1 className="font-['Fira_Code'] text-white text-3xl mb-3">404</h1>
        <p className="font-['Fira_Code'] text-[#abb2bf] mb-4">Page not found.</p>
        <Link to="/" className="font-['Fira_Code'] text-[#c778dd]">Go home</Link>
      </div>
    </main>
  );
}
