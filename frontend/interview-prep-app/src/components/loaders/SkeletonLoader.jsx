import React from "react";
import { motion } from "framer-motion";

const SkeletonLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div role="status" className="animate-pulse space-y-4 max-w-3xl">
        <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2"></div>

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-11/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-10/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-9/12"></div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 space-y-2">
          <div className="h-2.5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-2.5 bg-gray-300 rounded w-2/3"></div>
          <div className="h-2.5 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>

      <div role="status" className="animate-pulse space-y-4 max-w-3xl mt-6">
        <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-full"></div>

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-11/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-10/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-9/12"></div>
        </div>

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-11/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-10/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-9/12"></div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 space-y-2">
          <div className="h-2.5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-2.5 bg-gray-300 rounded w-2/3"></div>
        </div>

        <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2 mt-8"></div>

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-11/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-10/12"></div>
          <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-9/12"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkeletonLoader;
