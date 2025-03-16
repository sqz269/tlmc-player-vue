import { ExtLocalizedField } from 'app/backend-service-api/src';

export class LocalizedEntry {
  private static globalDefaultLanguage = 'jp';

  public defaultLanguage: string;
  public languages: Map<string, string>;

  constructor(languages: Map<string, string>, defaultLanguage?: string) {
    this.languages = languages;
    this.defaultLanguage = defaultLanguage ?? LocalizedEntry.globalDefaultLanguage;
  }

  public get(language: string) {
    return this.languages.get(language);
  }

  public getOrDefault(language: string) {
    return (
      this.languages.get(language) ||
      this.languages.get(this.defaultLanguage)
    );
  }

  public getDefault() {
    return this.languages.get(this.defaultLanguage);
  }

  public static setGlobalDefaultLanguage(language: string) {
    LocalizedEntry.globalDefaultLanguage = language;
  }

  public static fromLocalizedField(
    localizedField: ExtLocalizedField,
    defaultLanguage?: string
  ) {
    const languages = new Map<string, string>();
    if (localizedField.en) {
      languages.set('en', localizedField.en);
    }
    if (localizedField.zh) {
      languages.set('zh', localizedField.zh);
    }
    if (localizedField.jp) {
      languages.set('jp', localizedField.jp);
    }
    return new LocalizedEntry(languages, defaultLanguage);
  }
}
