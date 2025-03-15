import { ThumbnailReadDto } from "app/backend-service-api/src";
import { Asset } from "./Asset";

export class Thumbnail {
  public original?: Asset;
  public large?: Asset;
  public medium?: Asset;
  public small?: Asset;
  public tiny?: Asset;
  public colors?: string[];

  constructor(
    original?: Asset,
    large?: Asset,
    medium?: Asset,
    small?: Asset,
    tiny?: Asset,
    colors?: string[]
  ) {}

  public static fromThumbnailReadDto(thumbnailReadDto: ThumbnailReadDto): Thumbnail {
    return new Thumbnail(
      thumbnailReadDto.original ? Asset.fromAssetReadDto(thumbnailReadDto.original) : undefined,
      thumbnailReadDto.large ? Asset.fromAssetReadDto(thumbnailReadDto.large) : undefined,
      thumbnailReadDto.medium ? Asset.fromAssetReadDto(thumbnailReadDto.medium) : undefined,
      thumbnailReadDto.small ? Asset.fromAssetReadDto(thumbnailReadDto.small) : undefined,
      thumbnailReadDto.tiny ? Asset.fromAssetReadDto(thumbnailReadDto.tiny) : undefined,
      thumbnailReadDto.colors
    );
  }
}
