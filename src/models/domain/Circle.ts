import {
  CircleReadDto,
  CircleWebsiteReadDto,
} from 'app/backend-service-api/src';

export class CircleWebsite {
  public url: string;
  public invalid: boolean;

  constructor(url: string, invalid: boolean) {
    this.url = url;
    this.invalid = invalid;
  }

  public static fromCircleWebsiteReadDto(
    circleWebsiteReadDto: CircleWebsiteReadDto
  ) {
    return new CircleWebsite(
      circleWebsiteReadDto.url!,
      circleWebsiteReadDto.invalid!
    );
  }
}

export class Circle {
  public id: string;
  public name: string;
  public alias: string[];
  public country: string;
  public website: CircleWebsite[];
  public status: string;
  public established: Date;
  public dataSource: string[];

  constructor(
    id: string,
    name: string,
    alias: string[],
    country: string,
    website: CircleWebsite[],
    status: string,
    established: Date,
    dataSource: string[]
  ) {
    this.id = id;
    this.name = name;
    this.alias = alias;
    this.country = country;
    this.website = website;
    this.status = status;
    this.established = established;
    this.dataSource = dataSource;
  }

  public static fromCircleReadDto(circleReadDto: CircleReadDto) {
    return new Circle(
      circleReadDto.id!,
      circleReadDto.name!,
      circleReadDto.alias!,
      circleReadDto.country!,
      circleReadDto.website!.map(CircleWebsite.fromCircleWebsiteReadDto),
      circleReadDto.status!,
      circleReadDto.established!,
      circleReadDto.dataSource!
    );
  }
}
