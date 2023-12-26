import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const MobileMenu = ({ isMenuActive }) => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Works", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <AnimatePresence>
      {isMenuActive && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ y: -500, opacity: 0 }}
          className="absolute origin-top gap-9 font-semibold bg-[#131315] text-[#8A8A93] top-0 left-0 w-full h-full flex flex-col justify-center items-center text-5xl"
        >
          {navLinks.map((link, key) => {
            return (
              <motion.a
                key={key}
                variants={item}
                className="hover:text-white"
                href={link.href}
              >
                {link.name}
              </motion.a>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
