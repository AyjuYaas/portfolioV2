const NotFound = () => {
  return (
    <div className="flex justify-center items-center pt-20">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-7xl font-extrabold font-rocksalt mb-5">404</h1>
        <h2 className="text-3xl lg:text-5xl font-semibold font-rocksalt">
          Not Found!
        </h2>
        <p className="text-lg lg:text-xl font-light text-center">
          The Page you're trying to reach doesn't exist
        </p>
      </div>
    </div>
  );
};
export default NotFound;
