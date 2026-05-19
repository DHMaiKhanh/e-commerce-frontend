export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 py-6 text-sm text-gray-500 md:flex-row">
        <p>© {new Date().getFullYear()} E-commerce. All rights reserved.</p>
        <p>Made with care.</p>
      </div>
    </footer>
  );
}
