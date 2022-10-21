import {QueueController} from 'src/utils/QueueController';
import {queueController} from 'boot/songQueue';
import {AudioController} from 'src/utils/AudioController';
import {audioController} from 'boot/audioController';

class MediaSessionController {
  private readonly supportMediaSession: boolean;
  private queueController: QueueController;
  private audioController: AudioController;

  private audioTag: HTMLAudioElement | undefined;

  constructor(queueCtrl?: QueueController, audioCtrl?: AudioController) {
    console.log("abcd")
    this.supportMediaSession = 'mediaSession' in navigator;

    // Maybe convert QueueController and AudioController to singleton?
    if (queueCtrl !== undefined) {
      this.queueController = queueCtrl;
    } else {
      // this queueController is from boot/songQueue
      this.queueController = queueController;
    }

    if (audioCtrl !== undefined) {
      this.audioController = audioCtrl;
    } else {
      this.audioController = audioController;
    }

    this.initialize();
  }

  private initialize() {
    if (!this.supportMediaSession) {
      return;
    }

    // Since MediaSession requires audio tag and howlerjs does not create
    // a <audio> tag when playing flac. we need to create our own audio tag

    this.audioTag = document.createElement('audio');
    this.audioTag.id = 'asdf';
    this.audioTag.style.display = 'none';
    this.audioTag.src = 'https://github.com/anars/blank-audio/raw/master/1-hour-of-silence.mp3';
    this.audioTag.play();
    this.audioTag.loop = true;

    document.body.append(this.audioTag);

    navigator.mediaSession.setActionHandler('play', () => {
      console.log('[MediaSession] Play');
      this.setMediaMetadata();
      this.audioTag?.play();
      this.audioController.unpause();
    });

    navigator.mediaSession.setActionHandler('pause', () => {
      console.log('[MediaSession] Pause');
      this.setMediaMetadata();
      this.audioController.pause();
      this.audioTag?.pause();
    });

    // navigator.mediaSession.setActionHandler('stop', () => { /* Code excerpted. */ });
    //
    // navigator.mediaSession.setActionHandler('seekbackward', () => { /* Code excerpted. */ });
    //
    // navigator.mediaSession.setActionHandler('seekforward', () => { /* Code excerpted. */ });
    //
    // navigator.mediaSession.setActionHandler('seekto', () => { /* Code excerpted. */ });
    //
    navigator.mediaSession.setActionHandler('previoustrack', () => {
      this.setMediaMetadata();
      this.queueController.playPrevious();
    });

    navigator.mediaSession.setActionHandler('nexttrack', () => {
      this.setMediaMetadata();
      this.queueController.playNext();
    });

    // navigator.mediaSession.setActionHandler('skipad', () => { /* Code excerpted. */ });

    this.queueController.watchCurrentlyPlaying(() => {
      this.onCurrentPlayChanged();
    });
  }

  private setMediaMetadata() {
    const currentlyPlaying = this.queueController.currentlyPlaying;
    navigator.mediaSession.metadata = new window.MediaMetadata({
      title: currentlyPlaying?.name?._default,
      artist: currentlyPlaying?.album?.albumArtist?.[0],
      album: currentlyPlaying?.album?.albumName?._default,
      artwork: [
        {
          src: <string>currentlyPlaying?.album?.albumImage?.url,
          type: <string>currentlyPlaying?.album?.albumImage?.assetMime
        }
      ]
    });
  }

  private onCurrentPlayChanged() {
    console.log('Currently playing changed')
    this.setMediaMetadata();
  }
}

export {
  MediaSessionController
}
