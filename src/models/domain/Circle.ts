import {
  ExtCircleReadDto,
  ExtCircleWebsiteReadDto,
} from 'app/backend-service-api/src';
import { alpha3ToAlpha2, getName } from 'i18n-iso-countries';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

export class CircleWebsite {
  public displayText: string;
  public url: string;
  public invalid: boolean;

  constructor(url: string, invalid: boolean, displayText: string) {
    this.url = url;
    this.invalid = invalid;
    this.displayText = displayText;
  }

  public static fromCircleWebsiteReadDto(
    circleWebsiteReadDto: ExtCircleWebsiteReadDto
  ) {
    return new CircleWebsite(
      circleWebsiteReadDto.url!,
      circleWebsiteReadDto.invalid!,
      new URL(circleWebsiteReadDto.url!).hostname
    );
  }
}

export class CircleCountryInfo {
  public iso2: string;
  public iso3: string;
  public localizedCountryName: string;
  public unicodeFlag: string;
  public imageFlagUrl: string;

  constructor(iso2: string, iso3: string, localizedCountryName: string, unicodeFlag: string, imageFlagUrl: string) {
    this.iso2 = iso2;
    this.iso3 = iso3;
    this.localizedCountryName = localizedCountryName;
    this.unicodeFlag = unicodeFlag;
    this.imageFlagUrl = imageFlagUrl;
  }

  public static fromIso3(iso3: string): CircleCountryInfo {
    const iso3Upper = iso3.toUpperCase();

    return new CircleCountryInfo(
      alpha3ToAlpha2(iso3Upper)!,
      iso3Upper,
      getName(iso3Upper, 'en')!,
      getUnicodeFlagIcon(alpha3ToAlpha2(iso3Upper)!),
      `http://purecatamphetamine.github.io/country-flag-icons/3x2/${alpha3ToAlpha2(iso3Upper)!}.svg`,
    );
  }
}

export class Circle {
  public id: string;
  public name: string;
  public alias: string[];
  public country: string | null;
  public website: CircleWebsite[];
  public status: string;
  public established: Date | null;
  public dataSource: string[];

  public countryInfo?: CircleCountryInfo;

  constructor(
    id: string,
    name: string,
    alias: string[],
    country: string,
    website: CircleWebsite[],
    status: string,
    established: Date,
    dataSource: string[],
  ) {
    this.id = id;
    this.name = name;
    this.alias = alias;
    this.country = country;
    this.website = website;
    this.status = status;
    this.established = established;
    this.dataSource = dataSource;

    if (country) {
      this.countryInfo = CircleCountryInfo.fromIso3(country);
    }
  }

  public static fromCircleReadDto(circleReadDto: ExtCircleReadDto) {
    return new Circle(
      circleReadDto.id!,
      circleReadDto.name!,
      circleReadDto.alias!,
      circleReadDto.country!,
      circleReadDto.website!.map(CircleWebsite.fromCircleWebsiteReadDto),
      circleReadDto.status!,
      circleReadDto.established!,
      circleReadDto.dataSource!,
    );
  }
}
