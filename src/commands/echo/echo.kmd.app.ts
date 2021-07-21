import { AppCommand, AppFunc, BaseSession } from 'kbotify';

class EchoKmd extends AppCommand {
    code = 'kmd'; // 只是用作标记
    trigger = 'kmd'; // 用于触发的文字
    help = '`.echo kmd 内容`'; // 帮助文字
    intro = '复读你所说的文字, 并用kmarkdown格式返回。';
    func: AppFunc<BaseSession> = async (session) => {
        if (!session.args.length) {
            return session.reply(this.help);
        }
        return session.quote(`${session.args}`);
    };
}

export const echoKmd = new EchoKmd();
