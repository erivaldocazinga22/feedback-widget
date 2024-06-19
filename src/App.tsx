import { MessageCircleMore, X } from "lucide-react";
import IconBug from "@/assets/icons/bug.svg";
import IconIdea from "@/assets/icons/idea.svg";
import IconThought from "@/assets/icons/thought.svg";

export default function App() {
    return (
        <div>
            App


            <div className="absolute bottom-4 right-4">
                <div className="relative">
                    <div className="group">
                        <div className="min-w-[50px] h-[50px] rounded-full group-hover:px-4 cursor-pointer flex gap-1 items-center justify-center bg-primary transition-['width'] duration-300">
                            <MessageCircleMore size={32} strokeWidth={1.5}  />
                            <div className="hidden group-hover:flex ">Feedback</div>
                        </div>
                    </div>

                    <div className="absolute -top-[220px] right-0">
                        <div className="relative w-72 py-2 px-4 h-52 rounded-xl flex flex-col bg-zinc-900">
                            <div className="px-4 py-2">
                                <h1 className="text-lg text-center">Deixa o seu Feedback</h1>
                                <div className="absolute top-2 right-2">
                                    <X size={18} strokeWidth={1.5} />
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center gap-2">
                                <div className="w-20 max-h-32 h-full rounded-lg flex gap-2 flex-col items-center justify-center bg-zinc-800">
                                    <img src={IconBug} alt="" />
                                    <span className="block text-sm">Problema</span>
                                </div>
                                <div className="w-20 max-h-32 h-full rounded-lg flex gap-2 flex-col items-center justify-center bg-zinc-800">
                                    <img src={IconIdea} alt="" />
                                    <span className="block text-sm">Ideia</span>
                                </div>
                                <div className="w-20 max-h-32 h-full rounded-lg flex gap-2 flex-col items-center justify-center bg-zinc-800">
                                    <img src={IconThought} alt="" />
                                    <span className="block text-sm">Outro</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}