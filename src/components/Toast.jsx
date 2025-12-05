import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ open, message, onClose }) {
  return (
    <div aria-live="polite" className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none">
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="pointer-events-auto w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="font-semibold">{message.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{message.body}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 ml-2"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
