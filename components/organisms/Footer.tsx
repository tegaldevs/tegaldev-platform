import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black/70 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <Link 
              href="/privacy-policy" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              href="/terms-of-service" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Tegal Dev Community. Built with ❤️ for software engineers in
            Tegal, Central Java, Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
