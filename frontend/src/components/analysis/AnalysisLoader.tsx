import { Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function AnalysisLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl bg-white p-10 shadow-xl text-center"
    >
      <Brain
        className="mx-auto mb-6 text-blue-600"
        size={70}
      />

      <h2 className="text-3xl font-bold">
        AI is analyzing your CV
      </h2>

      <p className="mt-4 text-slate-500">
        Please wait...
      </p>

      <div className="mt-8 h-2 rounded-full bg-slate-200 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-full bg-blue-600"
        />

      </div>
    </motion.div>
  );
}