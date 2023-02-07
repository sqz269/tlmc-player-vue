import {QueuedTrack} from 'src/utils/QueueController';
import {slot} from 'ts-event-bus';

const QueueEvents = {
  queueChanged: slot<{ prev: QueuedTrack[], curr: QueuedTrack[] }>(),
  historyChanged: slot<{ prev: QueuedTrack[], curr: QueuedTrack[] }>(),
  currentPlayingChanged: slot<{ prev: QueuedTrack | null, curr: QueuedTrack | null }>(),
}

const AudioEvents = {
  playbackPaused: slot(),
  playbackResumed: slot(),
  playbackStateChanged: slot<{ prev: boolean, curr: boolean }>(),
  playbackStarted: slot(),
  playbackProgressed: slot<{ prev: number, curr: number }>(),
  playbackCompleted: slot(),
  volumeChanged: slot<{prev: number, curr: number}>(),
}

export {QueueEvents, AudioEvents}
