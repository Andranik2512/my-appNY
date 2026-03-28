import { useEffect, useState } from "react"
import type { Track } from "../types/track"
import TrackList from "../components/TrackList/TrackList"
import TrackDetails from "../components/TrackDetails/TrackDetails"

const Music = () => {
  const [music, setMusic] = useState<Track[]>([])
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null)

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=drake&entity=song&limit=10")
      .then((res) => res.json())
      .then((data) => {
        const tracksWithPreview = data.results.filter(
          (track: Track) => track.previewUrl
        )

        setMusic(tracksWithPreview)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        padding: "20px"
      }}
    >
      <TrackList
        music={music}
        selectedTrackId={selectedTrackId}
        onSelectTrack={setSelectedTrackId}
      />

      <TrackDetails selectedTrackId={selectedTrackId} />
    </div>
  )
}

export default Music