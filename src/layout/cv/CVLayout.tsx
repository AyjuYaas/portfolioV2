const CVLayout = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 py-10 gap-6">
      <h1 className="text-3xl font-rocksalt tracking-wide font-extrabold">
        My CV
      </h1>

      {/* PDF Display */}
      <iframe
        src="/my-cv.pdf"
        className="w-full max-w-3xl h-[700px] border rounded-md"
      ></iframe>

      {/* Download Button */}
      <a
        href="/my-cv.pdf"
        download="Sayujya_Satyal_CV.pdf"
        className="px-6 py-3 rounded-md bg-foreground hover:bg-accent text-accent font-bold hover:text-accent-foreground transition-all duration-100"
      >
        Download CV
      </a>
    </div>
  );
};

export default CVLayout;
