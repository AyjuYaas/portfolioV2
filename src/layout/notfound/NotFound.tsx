const NotFound = () => {
  return (
    <div className="text-xl lg:text-3xl min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl lg:text-7xl font-bold">404</h1>
        <h2 className="font-semibold">Not Found!</h2>
        <p className="text-lg lg:text-xl font-light">
          The Page you're trying to reach doesn't exist
        </p>
      </div>
    </div>
  );
};
export default NotFound;
