import { socialLink } from "../data/socialLink";

const LinkSection = () => {
  return (
    <section className="mx-auto w-max">
      <h1 className="font-bold text-xl mb-3 text-center">Find Me On</h1>

      <article className="flex gap-5">
        {socialLink.map((social) => (
          <a key={social.id} href={social.link} target="_blank">
            <img
              src={social.image}
              alt={social.name}
              className={`size-10 rounded-sm hover:-translate-y-0.5 transition-all duration-100 ${
                social.name === "github" && "bg-white rounded-sm"
              }`}
            />
          </a>
        ))}
      </article>
    </section>
  );
};
export default LinkSection;
