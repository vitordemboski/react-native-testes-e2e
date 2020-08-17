const delay = (time) => {
  new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};
describe('Testando a nevegação', () => {
  before(async () => {
    await device.reloadReactNative();
  });

  it('Renderizou a Home', async () => {
    await expect(element(by.id('title-home'))).toBeVisible();
  });

  it('Navegando a tela de formulário', async () => {
    await element(by.id('botao-home-formulario')).tap();
  });

  it('Voltando a Home', async () => {
    if (device.getPlatform() === 'android') {
      await device.pressBack(); // Android only
    } else {
      await element(by.traits(['button']))
        .atIndex(0)
        .tap();
    }
  });

  it('Navegando a tela de consulta', async () => {
    await delay(1000);
    await element(by.id('botao-home-consulta')).tap();
  });

  it('Voltando a Home', async () => {
    if (device.getPlatform() === 'android') {
      await device.pressBack(); // Android only
    } else {
      await element(by.traits(['button']))
        .atIndex(0)
        .tap();
    }
  });
});
