import { Actor, Task } from '@testla/screenplay-playwright';
import { Navigate, Fill, Click, Wait } from '@testla/screenplay-playwright/web';

export class Login extends Task {

    private USER_NAME_INPUT = '#username';
    private PASSWORD_INPUT = '#password';
    private LOGIN_BUTTON = '.fa-sign-in';
    static FLASH = '#flash';

    private constructor() {
        super();
    }

    public async performAs(actor: Actor): Promise<any> {
        return actor.attemptsTo(
            Navigate.to("https://the-internet.herokuapp.com/login"),
            Fill.in(this.USER_NAME_INPUT, actor.states('username') || ''),
            Fill.in(this.PASSWORD_INPUT, actor.states('password') || ''),
            Click.on(this.LOGIN_BUTTON),
        );
    }

    public static toApp(): Login {
        return new Login();
    }

    public static message(): string {
        return this.FLASH;
    }
}