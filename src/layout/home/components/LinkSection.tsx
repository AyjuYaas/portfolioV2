import { socialLink } from "@/data/socialLink";

const LinkSection = () => {
  return (
    <section className="mx-auto w-max mt-5">
      <h1 className="font-extrabold font-rocksalt tracking-widest text-xl mb-3 text-center">
        Find Me On
      </h1>

      <article className="flex gap-8">
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
