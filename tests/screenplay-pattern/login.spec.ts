import { Login } from './tasks/Login';
import { Element } from '@testla/screenplay-playwright/web';
import { test } from './actors/actor';

test(`should login successfully`, async ({ Rafael }) => {
    await Rafael.attemptsTo(Login.toApp());
    await Rafael.asks(Element.toBe.visible(Login.message()));
});