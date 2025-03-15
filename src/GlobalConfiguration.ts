import { Level } from 'pino';

export default class GlobalConfiguration {
  public static WEB_HOST_PUBLIC_PATH = '';
  public static API_BASE_URL = 'https://staging-api.marisad.me';
  public static TRACK_ASSET_BASE_URL = `${GlobalConfiguration.API_BASE_URL}/api/asset/track/{id}`;

  public static LOGGING_LEVEL: Level = 'warn';
}
