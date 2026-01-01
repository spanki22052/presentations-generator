import { Module } from '@nestjs/common';
import { I18nModule as NestI18nModule, I18nJsonLoader, I18nResolver } from 'nestjs-i18n';
import { ExecutionContext } from '@nestjs/common';
import * as path from 'path';

class AcceptLanguageCustomResolver implements I18nResolver {
  resolve(context: ExecutionContext): string | Promise<string> | undefined {
    const request = context.switchToHttp().getRequest();
    const acceptLanguage = request.headers['accept-language'];
    
    if (acceptLanguage) {
      // Parse Accept-Language header (e.g., "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7")
      const languages = acceptLanguage
        .split(',')
        .map((lang: string) => {
          const [code] = lang.trim().split(';');
          return code.toLowerCase().split('-')[0]; // Extract base language code
        });
      
      // Return first supported language (ru or en)
      const supportedLang = languages.find((lang: string) => lang === 'ru' || lang === 'en');
      return supportedLang || 'en';
    }
    
    return 'en';
  }
}

@Module({
  imports: [
    NestI18nModule.forRoot({
      fallbackLanguage: 'en',
      loader: I18nJsonLoader,
      loaderOptions: {
        path: path.join(__dirname, './'),
        watch: true,
      },
      resolvers: [AcceptLanguageCustomResolver],
    }),
  ],
})
export class I18nModule {}

