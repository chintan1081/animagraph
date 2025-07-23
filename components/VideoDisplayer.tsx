import { useContext } from "react";
import { ChatsContext } from "../context/ChatsContext";

const VideoDisplayer = () => {
  const { chatsData }: any = useContext(ChatsContext);

  return (
    <div className="flex h-[calc(100vh-72px)] items-center justify-center bg-[#1e1e1e] px-4">
      <div className="w-full max-w-4xl p-8 bg-[#2a2929] rounded-2xl shadow-xl border border-gray-700">
        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-2">
            <h2 className="bg-[#d4f4fd]  text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent">
              Your
            </h2>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
              2D
            </h2>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-[#d4f4fd] bg-clip-text text-transparent">
              Animated Video
            </h2>
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-600 shadow-lg">
            {chatsData.videoUrl !== '' && <video className="w-full h-full" controls autoPlay>
              <source src={`${chatsData.videoUrl}?cacheBust=${Date.now()}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            }
            {/* {chatsData.videoGernerationError !== '' && <div>
              <div className="p-4 mt-4 bg-red-500 text-white text-center">
                Error
              </div>
              <div className="p-4 mt-4 bg-red-500 text-white text-center">
                There is error beacuse ai is not train on manim data.
              </div>
              <div className="p-4 mt-4 bg-red-500 text-white text-center">
                Give a great prompt otherwise try something simple to generate
              </div>
              <div className="p-4 mt-4 bg-green-500 text-white text-center">
                I will work on traning the ai if there are user for this app.
              </div>
            </div>
            } */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default VideoDisplayer