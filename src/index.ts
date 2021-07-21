import { bot } from 'init/client';
import { echoMenu } from './commands/echo/echo.menu';

bot.messageSource.on('message', (e) => {
    bot.logger.debug(`received:`, e);
});

bot.addCommands(echoMenu);

bot.connect();

bot.logger.debug('system init success');
