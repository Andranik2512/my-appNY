

const Music = () => {
  const tracks = [
    {
      title: 'music1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      title: 'music2',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      title: 'music2',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },{
      title: 'music2',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
  ]

  return (
    <div>
      {tracks.map((track, index) => (
        <div key={index}>
          <p>{track.title}</p>
          <audio controls src={track.url}></audio>
        </div>
      ))}
    </div>
  )
}

export default Music