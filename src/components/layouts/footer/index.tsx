export const Footer = () => {
  return (
    <div className="shrink-0">
      <hr />
      <footer>
        <div className="p-7 flex gap-5 justify-center items-center">
          <p className="text-slate-600">
            &copy; {new Date().getFullYear()} light planck.
          </p>
          <a
            className="inline-block text-slate-600 underline hover:text-blue-500"
            href="https://github.com/light-planck/add-time-intervals"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};
