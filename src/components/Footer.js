import React, { useState } from "react"
import Sound from "react-sound"

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioSrc = "/gentlewaves.mp3"

  const togglePlayPause = () => {
    const audio = document.getElementById("audio-player")
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }
  return (
    <footer className="footer-text">
      <div className="audio-player-container">
        <audio
          id="audio-player"
          src={audioSrc}
          loop // This makes the audio loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          Your browser does not support the audio element.
        </audio>
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <p style={{ color: "#e7b47f" }}>
        © 2024{" "}
        <a
          href="https://github.com/mark19242"
          className="no-text-dec"
          target="_blank"
        >
          Mark Smith
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/smorgannicole"
          className="no-text-dec"
          target="_blank"
        >
          Morgan Smith
        </a>
      </p>
    </footer>
  )
}

export default Footer
