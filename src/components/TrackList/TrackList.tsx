import type { Track } from "../../types/track"

type TrackListProps = {
  music: Track[]
  selectedTrackId: number | null
  onSelectTrack: (id: number) => void
}

const TrackList = ({
  music,
  selectedTrackId,
  onSelectTrack
}: TrackListProps) => {
  return (
    <div style={{ width: "40%" }}>
      {music.map((track) => (
        <div
          key={track.trackId}
          onClick={() => onSelectTrack(track.trackId)}
          style={{
            border:
              selectedTrackId === track.trackId
                ? "2px solid orange"
                : "1px solid gray",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "10px",
            cursor: "pointer"
          }}
        >
          <p>{track.trackName}</p>
          <p>{track.artistName}</p>
        </div>
      ))}
    </div>
  )
}

export default TrackList