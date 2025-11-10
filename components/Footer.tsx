export default function Footer() {
    return (
      <footer className="border-t bg-gradient-to-br from-slate-50 to-blue-50/30 py-12 backdrop-blur-sm">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
  
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-xl font-bold">AI Library</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                Books to master Data Science, Machine Learning, and AI.
              </p>
            </div>
  
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Feedback
                </a>
                <a
                  href="https://t.me/asselia7"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </a>
                <a
                  href="https://t.me/asselia7"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
  
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/asselaltayeva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/50 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.38-3.87-1.38-.53-1.36-1.3-1.72-1.3-1.72-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.22 1.8 1.22 1.05 1.79 2.75 1.27 3.42.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.09-.12-.3-.52-1.49.11-3.11 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.62.23 2.81.11 3.11.75.8 1.2 1.83 1.2 3.09 0 4.45-2.69 5.43-5.25 5.71.42.36.8 1.09.8 2.2v3.26c0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          <div className="border-t mt-6 pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} AI Library is built for learning and education purpose.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  