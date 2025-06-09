import { FiArrowUp, FiLink } from "react-icons/fi";

type PromptBoxProp = {
  prompt: string;
  setPrompt: Function;
  HandlePromptSubmit: Function;
};

const PromptBox = ({ prompt, setPrompt, HandlePromptSubmit }: PromptBoxProp) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      HandlePromptSubmit();
    }
  };

  return (
    <div className="p-4 border-t border-[#323235]">
      <div className="bg-gradient-to-r to-purple-600 from-indigo-600 rounded-lg p-[0.8px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            HandlePromptSubmit();
          }}
          className="bg-[#2a2929] items-center gap-2 font-semibold cursor-pointer p-2 px-3 rounded-lg"
        >
          <div className="min-h-[100px] max-h-[200px] flex text-gray-100">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full grow custom-scrollbox focus:ring-0 focus:outline-none mr-4"
              placeholder="create 2D animation with AI"
            ></textarea>
            <div className="pt-2 pr-2">
              {prompt.trim() !== "" && (
                <button
                  type="submit"
                  className="font-semibold cursor-pointer text-gray-500 bg-gray-200 text-lg p-2 hover:bg-[#777777] rounded hover:text-white"
                >
                  <FiArrowUp />
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-between pt-2">
            <span className="font-semibold text-gray-500 text-lg p-2 cursor-po hover:bg-[#3b3b3a] rounded hover:text-white">
              <FiLink />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromptBox;
