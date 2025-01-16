import { Browser, test as base } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web';

const createUser = async (
    browser: Browser,
    actorName: string, 
    username: string, 
    password: string): Promise<Actor> => {
    
    const page = await browser.newPage();  
    return Actor.named(actorName)
        .with('username', username)
        .with('password', password)
        .can(BrowseTheWeb.using(page));
};

type Actors = {
    Rafael: Actor;
};

export const test = base.extend<Actors>({
    Rafael: async ({ browser }, use) => {
        const Andy = await createUser(browser, 'Andy', `tomsmith`, `SuperSecretPassword!`);
        await use(Andy);
    },
});

export { expect } from '@playwright/test';

