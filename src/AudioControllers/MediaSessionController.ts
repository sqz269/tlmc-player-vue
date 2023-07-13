import AudioController from "boot/audioController";
import {Events} from "hls.js";
import {AudioEvents, QueueEvents} from "src/utils/Events";
import {TrackReadDto} from "app/backend-service-api";
import AudioControllerHls from "src/AudioControllers/AudioControllerHls";
import {QueueController} from "src/utils/QueueController";
import {audioEvents, queueEvents} from "boot/eventBus";

class MediaSessionController {
  private readonly audioController: AudioControllerHls | null;
  private readonly queueController: QueueController | null;

  private constructor() {
    if ('mediaSession' in navigator) {
      this.audioController = AudioControllerHls.Instance;
      this.queueController = QueueController.getInstance();
      this.attachEventsListener();
      this.attachMediaActionListener();
    }
    else {
      this.audioController = null;
      this.queueController = null;
      console.warn('Media Session API is not supported on this browser');
    }
  }

  private setMetadata(track: TrackReadDto) {
    const artwork = [];
    if (track.album?.thumbnail?.medium?.url) {
      artwork.push({src: track.album.thumbnail.medium.url, sizes: '512x512', type: 'image/png'});
    }

    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.name?._default,
      artist: track.album?.albumArtist?.map((x) => x.name).join(', '),
      album: track.album?.albumName?._default,
      artwork: artwork,
    });
  }

  private attachEventsListener() {
    queueEvents.currentPlayingChanged.on((data) => {
      if (data.curr === null) {
        navigator.mediaSession.playbackState = 'none';
        return;
      }

      this.setMetadata(data.curr.Track);

      if (this.audioController?.isPlaying) {
        navigator.mediaSession.playbackState = 'playing';
      }
      else if (this.audioController?.isPlaying === null) {
        navigator.mediaSession.playbackState = 'none';
      } else {
        navigator.mediaSession.playbackState = 'paused';
      }
    });

    audioEvents.playbackStarted.on(() => {
      navigator.mediaSession.playbackState = 'playing';
    });

    audioEvents.playbackPaused.on(() => {
      navigator.mediaSession.playbackState = 'paused';
    });

    audioEvents.playbackCompleted.on(() => {
      navigator.mediaSession.playbackState = 'none';
    });
  }

  private attachMediaActionListener() {
    navigator.mediaSession.setActionHandler('play', () => {
      this.audioController?.resume();
    });

    navigator.mediaSession.setActionHandler('pause', () => {
      this.audioController?.pause();
    });

    navigator.mediaSession.setActionHandler('previoustrack', () => {
      this.queueController?.playPrevious();
    });

    navigator.mediaSession.setActionHandler('nexttrack', () => {
      this.queueController?.playNext();
    });
  }

  private static instance: MediaSessionController | null = null;
  public static get Instance(): MediaSessionController {
    if (MediaSessionController.instance === null) {
      MediaSessionController.instance = new MediaSessionController();
    }

    return MediaSessionController.instance;
  }
}

export default MediaSessionController;
