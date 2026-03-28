import { useEffect, useState } from "react"
import type { Track } from "../../types/track"

type TrackDetailsProps = {
  selectedTrackId: number | null
}

const TrackDetails = ({ selectedTrackId }: TrackDetailsProps) => {
  const [track, setTrack] = useState<Track | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!selectedTrackId) {
      setTrack(null)
      return
    }

    setLoading(true)

    fetch(`https://itunes.apple.com/lookup?id=${selectedTrackId}`)
      .then((res) => res.json())
      .then((data) => {
        setTrack(data.results[0] || null)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [selectedTrackId])

  return (
    <div
      style={{
        width: "60%",
        minHeight: "300px",
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "20px"
      }}
    >
      {!selectedTrackId ? (
        <p>Выбери трек слева</p>
      ) : loading ? (
        <p>Загрузка...</p>
      ) : !track ? (
        <p>Не удалось загрузить данные трека</p>
      ) : (
        <>
          {track.artworkUrl100 && (
            <img
              src={track.artworkUrl100}
              alt={track.trackName}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px"
              }}
            />
          )}

          <h2>{track.trackName}</h2>

          <p>
            <strong>Artist:</strong> {track.artistName}
          </p>

          <p>
            <strong>Album:</strong> {track.collectionName}
          </p>

          <audio controls src={track.previewUrl}></audio>
        </>
      )}
    </div>
  )
}

export default TrackDetails