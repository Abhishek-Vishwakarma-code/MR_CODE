import React from "react";
import { BsChevronUp } from "react-icons/bs";

type EditorFooterProps = {
  handleSubmit: () => void;
};

const EditorFooter: React.FC<EditorFooterProps> = ({ handleSubmit }) => {
  return (
    <div className="flex bg-[var(--bg-secondary)] border-t border-[var(--border-color)] absolute bottom-0 z-10 w-full transition-colors duration-300">
      <div className="mx-4 sm:mx-5 my-2.5 flex justify-between w-full">
        
        {/* Left Side: Console Button */}
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <button className="group flex items-center px-4 py-1.5 text-sm font-medium bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg transition-all duration-200">
            Console
            <div className="ml-2 flex items-center transform transition-transform group-hover:-translate-y-0.5">
              <BsChevronUp className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
            </div>
          </button>
        </div>
        
        {/* Right Side: Run & Submit Buttons */}
        <div className="ml-auto flex items-center space-x-3 sm:space-x-4">
          <button
            className="px-4 py-1.5 text-sm font-medium whitespace-nowrap bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-color)] rounded-lg transition-all duration-200"
            onClick={handleSubmit}
          >
            Run
          </button>
          
          <button
            className="px-5 py-1.5 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-md shadow-emerald-500/20 active:scale-95 transition-all duration-200"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditorFooter;