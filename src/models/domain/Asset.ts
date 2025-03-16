import { ExtAssetReadDto } from 'app/backend-service-api/src';

export class Asset {
  public id: string;
  public name: string;
  public mime: string;
  public size: number;
  public url: string;

  constructor(
    id: string,
    name: string,
    mime: string,
    size: number,
    url: string
  ) {
    this.id = id;
    this.name = name;
    this.mime = mime;
    this.size = size;
    this.url = url;
  }

  public static fromAssetReadDto(assetReadDto: ExtAssetReadDto) {
    return new Asset(
      assetReadDto.id!,
      assetReadDto.name!,
      assetReadDto.mime!,
      assetReadDto.size!,
      assetReadDto.url!
    );
  }
}
