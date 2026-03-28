import { useState, useEffect } from "react" 
 
 type Track = {
  trackId: number
  trackName: string
  artistName: string
  collectionName: string
  previewUrl: string
  artworkUrl100?: string
}

const Music = () => {
  const [music, setMusic] = useState<Track[]>([])
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://itunes.apple.com/search?term=drake&entity=song&limit=10')
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

  const selectedTrack = music.find(
    (track: Track) => track.trackId === selectedTrackId
  )

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
        padding: '20px'
      }}
    >
      <div style={{ width: '45%' }}>
        {music.map((track) => (
          <div
            key={track.trackId}
            onClick={() => setSelectedTrackId(track.trackId)}
            style={{
              border:
                selectedTrackId === track.trackId
                  ? '3px solid orange'
                  : '1px solid gray',
              padding: '10px',
              marginBottom: '10px',
              cursor: 'pointer',
              borderRadius: '8px'
            }}
          >
            <p>{track.trackName}</p>
            <p>{track.artistName}</p>
            <audio controls src={track.previewUrl}></audio>
          </div>
        ))}
      </div>




      <div
        style={{
          width: '55%',
          minHeight: '300px',
          border: '1px solid gray',
          borderRadius: '8px',
          padding: '20px'
        }}
      >
        {selectedTrack ? (
          <>

            {selectedTrack.artworkUrl100 && (
              <img
                src={selectedTrack.artworkUrl100}
                alt={selectedTrack.trackName}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
            )}

            <h2>{selectedTrack.trackName}</h2>
            <p>
              <strong>Artist:</strong> {selectedTrack.artistName}
            </p>
            <p>
              <strong>Album:</strong> {selectedTrack.collectionName}
            </p>

            <audio controls src={selectedTrack.previewUrl}></audio>
          </>
        ) : (
          <p>Выбери трек слева</p>
        )}
      </div>
    </div>
  )
}

export default Music