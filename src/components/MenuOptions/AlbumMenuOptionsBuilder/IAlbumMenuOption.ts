/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class IAlbumMenuOption {
  public abstract withCallback(callback: (albumId: string) => void): IAlbumMenuOption;
}
