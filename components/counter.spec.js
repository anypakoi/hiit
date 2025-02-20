describe('Init flow', () => {
    beforeEach(async () => {
        await device.launchApp();
    });

    it('deberia rellenar los datos e iniciar el contador', async () => {
        await element(by.id('workTime')).typeText('15');
        await element(by.id('breakTime')).typeText('5');

        const buttonInit = element(by.id('buttonInit'))
        await buttonInit.tap();

        await expect(buttonInit).not.toExist();
        await expect(element(by.text('stop'))).toBeVisible();
    });
});