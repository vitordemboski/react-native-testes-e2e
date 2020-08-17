describe('Testando o formulários', () => {
  const onPreencherCampoEVerificar = async (campo, texto, textoNoInput = texto) => {
    await expect(campo).toBeVisible();

    await campo.clearText();

    await campo.typeText(texto);

    await expect(campo).toHaveText(textoNoInput);
  };
  it('Navegando a tela de formulário', async () => {
    await element(by.id('botao-home-formulario')).tap();
  });

  it('Preenchendo campo nome', async () => {
    const campoNome = element(by.id('input-form-nome'));
    await onPreencherCampoEVerificar(campoNome, 'TEXTO');
  });
  it('Preenchendo campo e-mail', async () => {
    const campoEmail = element(by.id('input-form-email'));
    await onPreencherCampoEVerificar(campoEmail, 'TEXTO@123');
  });
  it('Preenchendo campo cor', async () => {
    await element(by.id('scroll-form')).scrollTo('bottom');
    const campoCor = element(by.id('input-form-cor'));
    await onPreencherCampoEVerificar(campoCor, '#');
  });
  it('Verificando cor válida', async () => {
    const campoCor = element(by.id('input-form-cor'));
    await onPreencherCampoEVerificar(campoCor, '#0000000000000000', '#000000');
    if (device.getPlatform() === 'android') {
      await device.pressBack(); // Android only
      await device.pressBack(); // Android only
    } else {
      await element(by.traits(['button']))
        .atIndex(0)
        .tap();
    }
  });
});
