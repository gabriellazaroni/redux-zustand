import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { nextVideo, useCurrentLesson } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()

  const { currentLesson } = useCurrentLesson()


  function handlePlayNext() {
    dispatch(nextVideo())
  }

  return (
    <div className="w-full bg-zing-950 aspect-video">
      <ReactPlayer
        onEnded={handlePlayNext}
        playing
        width='100%'
        height='100%'
        controls={true}
        src={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}