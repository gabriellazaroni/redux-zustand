import { MessageCircle } from "lucide-react"
import { Header } from "../components/Header"
import { Module } from "../components/Module"
import { Video } from "../components/Video"
import { useAppSelector } from "../store"

export function Player() {
  const modules = useAppSelector(state => {
    return state.player.course.modules
  })

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-275 flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>
        <main className="relative pr-80 flex overflow-hidden rounded-lg border boder-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <Video />
          </div>
          <aside className=" flex flex-col w-80 border-l gap-2 p-2 absolute top-0 bottom-0 right-0 border-zinc-800 
            bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 
            scrollbar-thumb-violet-500"
          >
            {modules.map((module, index) => {
              return (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  lessonsAmount={module.lessons.length}
                />
              )
            })}
          </aside>
        </main>
      </div>
    </div>
  )
}