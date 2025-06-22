const DescriptionSection = () => {
  return (
    <section className="mx-auto border-1 max-w-180 p-5 h-max rounded-md grid grid-cols-12 gap-4">
      <article className="col-span-12 mx-auto sm:col-span-3 md:col-span-2 lg:col-span-2">
        <img
          src="/profile.jpg"
          alt="profile-picture"
          className="size-20 rounded-full border-1"
        />
      </article>

      <article className="col-span-12 text-justify sm:col-span-9 md:col-span-10">
        I'm a passionate full-stack developer focused on building dynamic and
        responsive web applications using MERN. I enjoy creating clean, and
        minimal websites. Lately, I've been diving into AI and Machine Learning,
        exploring tools like TensorFlow, Scikit-learn, and Keras to build fun
        and meaningful projects. I’m especially interested in combining web
        development with intelligent systems to create smarter user experiences.
      </article>
    </section>
  );
};
export default DescriptionSection;
