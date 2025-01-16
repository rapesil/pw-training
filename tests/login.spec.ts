import { Login } from './tasks/Login';
import { Element } from '@testla/screenplay-playwright/web';
import { test } from './actors/actor';

test(`should login successfully`, async ({ Andy }) => {
    await Andy.attemptsTo(Login.toApp());
    await Andy.asks(Element.toBe.visible(Login.message()));
});