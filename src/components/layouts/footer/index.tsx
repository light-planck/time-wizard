export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} light planck.
          </p>
          <a
            className="text-gray-600 text-sm hover:text-primary transition-colors duration-200"
            href="https://github.com/light-planck/add-time-intervals"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
