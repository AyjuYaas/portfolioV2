import { contactData } from "@/data/contactData";

const Contact = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-2xl w-full p-8 md:p-12">
        <h1 className="text-4xl font-extrabold mb-6 text-center font-rocksalt">
          Contact Me
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Feel free to reach out via any of the following methods:
        </p>

        <div className="flex justify-center">
          <div className="space-y-6">
            {contactData.map((item) => (
              <div key={item.title} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-contain bg-white rounded-3xl p-1"
                />
                {item.title === "mail" ? (
                  <a
                    href={`mailto:${item.content}`}
                    className="text-gray-700 dark:text-gray-200 text-lg"
                  >
                    {item.content}
                  </a>
                ) : item.title === "phone" ? (
                  <a
                    href={`tel:${item.content}`}
                    className="text-gray-700 dark:text-gray-200 text-lg"
                  >
                    {item.content}
                  </a>
                ) : (
                  <a
                    href={item.content}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-200 capitalize text-lg"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
