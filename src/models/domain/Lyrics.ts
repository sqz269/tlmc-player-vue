import { ExtLyricsLineDto, ExtLyricsReadDto, ExtLyricsTextDto, ExtLyricsVariantDto, ExtRubyDto } from 'app/backend-service-api/src';
import { Timespan } from '../Timespan';

export class Ruby
{
  public index: number;
  public length: number;
  public text: string;

  constructor(index: number, length: number, text: string)
  {
    this.index = index;
    this.length = length;
    this.text = text;
  }

  public static fromRubyDto(rubyDto: ExtRubyDto)
  {
    return new Ruby(rubyDto.index!, rubyDto.length!, rubyDto.text!);
  }
}

export class LyricsText
{
  public lang: string;
  public text: string;
  public ruby: Ruby[];

  constructor(lang: string, text: string, ruby: Ruby[])
  {
    this.lang = lang;
    this.text = text;
    this.ruby = ruby;
  }

  public static fromLyricsTextDto(lyricsTextDto: ExtLyricsTextDto)
  {
    return new LyricsText(lyricsTextDto.lang!, lyricsTextDto.text!, lyricsTextDto.ruby!.map(Ruby.fromRubyDto));
  }
}

export class LyricsLine
{
  public index: number;
  public time: Timespan;
  public blocks: LyricsText[];

  constructor(index: number, time: string, blocks: LyricsText[])
  {
    this.index = index;
    this.time = Timespan.fromDurationString(time);
    this.blocks = blocks;
  }

  public static fromLyricsLineDto(lyricsLineDto: ExtLyricsLineDto)
  {
    return new LyricsLine(lyricsLineDto.index!, lyricsLineDto.time!, lyricsLineDto.blocks!.map(LyricsText.fromLyricsTextDto));
  }
}

export class LyricsVariant
{
  public variant: string;
  public lines: LyricsLine[];

  constructor(variant: string, lines: LyricsLine[])
  {
    this.variant = variant;
    this.lines = lines;
  }

  public static fromLyricsVariantDto(lyricsVariantDto: ExtLyricsVariantDto)
  {
    return new LyricsVariant(lyricsVariantDto.variant!, lyricsVariantDto.lines!.map(LyricsLine.fromLyricsLineDto));
  }
}

export class Lyrics
{
  public id: string;
  public variants: LyricsVariant[];
  public referenceUrl: string;

  constructor(id: string, variants: LyricsVariant[], referenceUrl: string)
  {
    this.id = id;
    this.variants = variants;
    this.referenceUrl = referenceUrl;
  }

  public static fromLyricsDto(lyricsDto: ExtLyricsReadDto)
  {
    return new Lyrics(lyricsDto.id!, lyricsDto.variants!.map(LyricsVariant.fromLyricsVariantDto), lyricsDto.referenceUrl!);
  }
}