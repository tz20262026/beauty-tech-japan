export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 border-t border-gray-800 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold bg-pink-500 text-white px-2 py-0.5 rounded">Beauty</span>
          <span className="text-white font-semibold">Tech Japan</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
            </svg>
            RSS購読
          </a>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Beauty Tech Japan
          </p>
        </div>
      </div>
    </footer>
  );
}
