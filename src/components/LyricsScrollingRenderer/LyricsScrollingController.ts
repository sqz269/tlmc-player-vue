import { LoadableState } from "src/utils/Loadable/LoadableController"
import { Ref } from "vue";

export interface Lyrics
{

}

export interface LyricsBlock
{

}

export interface LyricsLine
{

}

export interface LyricsScrollingControllerViewModel {

}

export interface LyricsScrollingControllerInputModel {

}

export type LyricsScrollingController = {
  viewModelController: LoadableState<LyricsScrollingControllerViewModel>;
  inputModel: Ref<LyricsScrollingControllerInputModel>;

  load: (state: LyricsScrollingControllerInputModel) => Promise<void>;
  changeLyricsId: (lyricsId: string) => void;

  updateTimestamp: (timestamp: string) => void;
}
