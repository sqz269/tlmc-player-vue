import { DeepReadonly, readonly, ref, Ref } from 'vue';
import * as dashjs from 'dashjs';
import { Duration } from 'src/models/Duration';
import AudioService from '../domain/AudioService';
import Logger from 'src/utils/Logger';

export default function useAudioServiceDash(): AudioService {
  const _logger = Logger.getLogger('AudioServiceDash');

  let _audioPlayer: HTMLAudioElement | null = null;
  let _dash: dashjs.MediaPlayerClass | null = null;

  const _isPlaying: Ref<boolean> = ref(false);
  const _duration: Ref<Duration | null> = ref(null);
  const _position: Ref<Duration | null> = ref(null);
  const _bufferPosition: Ref<Duration | null> = ref(null);

  const _volume: Ref<number> = ref(1);

  const _playbackCompletedEvent: Ref<boolean> = ref(false);
  const _errorStream: Ref<string | null> = ref(null);

  const isPlaying: DeepReadonly<Ref<boolean>> = readonly(_isPlaying);
  const duration: DeepReadonly<Ref<Duration | null>> = readonly(_duration);
  const position: DeepReadonly<Ref<Duration | null>> = readonly(_position);
  const bufferPosition: DeepReadonly<Ref<Duration | null>> = readonly(_bufferPosition);

  const volume: DeepReadonly<Ref<number>> = readonly(_volume);

  const playbackCompletedStream: DeepReadonly<Ref<boolean>> = readonly(_playbackCompletedEvent);
  const errorStream: DeepReadonly<Ref<string | null>> = readonly(_errorStream);

  // Attach dash.js events and native audio events
  const _initializeEventStreams = () => {
    if (!_dash || !_audioPlayer) return;

    _dash.updateSettings({
      streaming: {

        buffer: {
          bufferTimeDefault: 30,
          bufferTimeAtTopQuality: 90
        }
      }
    });

    const events = dashjs.MediaPlayer.events;

    // DASH.js error handling
    _dash.on(events.ERROR, (e: any) => {
      _logger.error('DASH error encountered', e);
      // e.error is the error code, e.event.message often has human text
      _errorStream.value = e.event?.message || e.error || 'Unknown DASH error';
    });

    _dash.on(events.STREAM_INITIALIZED, () => {
      _logger.debug('DASH stream initialized');
    });

    _dash.on(events.MANIFEST_LOADED, (e: any) => {
      _logger.debug(`DASH manifest loaded: ${e} period(s)`);
    });

    _dash.on(dashjs.MediaPlayer.events.PLAYBACK_ENDED, () => {
      _playbackCompletedEvent.value = true;
    });

    // Native audio element events
    _audioPlayer.onplay = () => {
      _isPlaying.value = true;
      if (_playbackCompletedEvent.value) _playbackCompletedEvent.value = false;
    };
    _audioPlayer.onpause = () => { _isPlaying.value = false; };
    // _audioPlayer.onended = () => {
    //   console.log('onended');
    //   _playbackCompletedEvent.value = true;
    // };

    _audioPlayer.ontimeupdate = () => {
      _position.value = Duration.fromSeconds(_audioPlayer!.currentTime);
    };
    _audioPlayer.onprogress = () => {
      const buffered = _audioPlayer!.buffered;
      if (buffered.length) {
        const end = buffered.end(buffered.length - 1);
        _bufferPosition.value = Duration.fromSeconds(end);
      } else {
        _bufferPosition.value = Duration.zero();
      }
    };
    _audioPlayer.onvolumechange = () => {
      _volume.value = _audioPlayer!.volume;
    };
  };

  const initialize = async () => {
    _logger.info('Initializing DASH audio service');
    _audioPlayer = new Audio();
    _audioPlayer.preload = 'auto';
    document.body.appendChild(_audioPlayer);

    _dash = dashjs.MediaPlayer().create();
    // must initialize before attaching sources :contentReference[oaicite:0]{index=0}
    _dash.initialize(_audioPlayer, undefined, false);
    _initializeEventStreams();
    _logger.info('DASH audio service initialized');
  };

  const play = async (src: string): Promise<Duration> => {
    if (!_dash || !_audioPlayer) {
      _logger.error('DASH player is not initialized');
      throw new Error('Player not initialized');
    }
    _logger.info(`Playing DASH audio from ${src}`);
    // attachSource will load the MPD and segments :contentReference[oaicite:1]{index=1}
    _dash.attachSource(src);
    // dash.js will call play on the element once enough is buffered
    await _audioPlayer.play();
    _duration.value = Duration.fromSeconds(_audioPlayer.duration);
    return _duration.value;
  };

  const pause = async () => {
    if (!_audioPlayer) throw new Error('Audio player not initialized');
    await _audioPlayer.pause();
  };

  const resume = async () => {
    if (!_audioPlayer) throw new Error('Audio player not initialized');
    await _audioPlayer.play();
  };

  const togglePause = async () => {
    if (!_audioPlayer) throw new Error('Audio player not initialized');
    if (_audioPlayer.paused) {
      await _audioPlayer.play();
    } else {
      await _audioPlayer.pause();
    }
  };

  const stop = async () => {
    if (!_audioPlayer) throw new Error('Audio player not initialized');
    await _audioPlayer.pause();
    _audioPlayer.currentTime = 0;
  };

  const seek = async (position: Duration) => {
    if (!_audioPlayer) throw new Error('Audio player not initialized');
    _audioPlayer.currentTime = position.toSeconds();
  };

  const setVolume = async (vol: number) => {
    if (!_audioPlayer) throw new Error('Audio player not initialized');
    _audioPlayer.volume = vol;
    _volume.value = vol;
  };

  const getVolume = async () => {
    return _volume.value;
  };

  return {
    isPlaying,
    duration,
    position,
    bufferPosition,
    volume,
    playbackCompletedStream,
    errorStream,
    initialize,
    play,
    pause,
    resume,
    togglePause,
    stop,
    seek,
    setVolume,
    getVolume,
  } as AudioService;
}
