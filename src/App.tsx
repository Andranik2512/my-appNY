import {tracks} from './Tracks'

const Music = () => {
  return (
    <div>
      <li>
      {tracks.map((track, index) => (
        
        <div key={track.url}>
          <p>{track.title}</p>
          <audio controls src={track.url}></audio>
        </div>
      ))}
      </li>
    </div>
    
  )
}

export default Music