import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <motion.div
        className="w-14 h-14 border-4 border-gray-300 border-t-gray-700 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
      />
    </div>
  );
};

export default Loading;
