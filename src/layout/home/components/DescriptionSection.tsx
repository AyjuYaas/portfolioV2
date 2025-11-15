const DescriptionSection = () => {
  return (
    <section className="mx-auto border-1 dark:border-gray-800 border-gray-300 max-w-180 p-5 h-max rounded-md grid grid-cols-12 gap-4">
      <article className="col-span-12 mx-auto sm:col-span-3 md:col-span-2 lg:col-span-2">
        <img
          src="/profile.jpg"
          alt="profile-picture"
          className="size-20 rounded-full border-1"
        />
      </article>

      <article className="col-span-12 sm:col-span-9 md:col-span-10 bg-gray-600/40 p-5 pl-7 backdrop-blur-3xl rounded-2xl rounded-tl-none">
        I'm a a passionate developer focused on building dynamic and responsive
        web applications using <span className="font-bold">MERN Stack</span>. I
        enjoy creating clean, and minimal websites. Lately, I've been diving
        into AI and Machine Learning, exploring tools like TensorFlow,
        Scikit-learn, and Keras to build fun and meaningful projects. I&apos;m
        especially interested in combining web development with intelligent
        systems to create smarter user experiences.
        <br />I am also exploring cyber security, and working my way through
        Spring Boot, to create a more secure website
      </article>
    </section>
  );
};
export default DescriptionSection;
