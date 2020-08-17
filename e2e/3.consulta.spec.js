const delay = (time) => {
  new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

describe('Testando a consulta', () => {
  const onVerificarCampos = async (campo, texto) => {
    await expect(campo).toHaveText(texto);
  };
  it('Navegando a tela de consulta', async () => {
    await delay(1000);
    await element(by.id('botao-home-consulta')).tap();
  });
  it('Verificando campo nome', async () => {
    const campoNome = element(by.id('text-cons-nome'));
    await onVerificarCampos(campoNome, 'Nome: TEXTO');
  });
  it('Verificando campo e-mail', async () => {
    const campoEmail = element(by.id('text-cons-email'));
    await onVerificarCampos(campoEmail, 'E-mail: TEXTO@123');
  });
  it('Verificando campo cor', async () => {
    const campoCor = element(by.id('text-cons-cor'));
    await onVerificarCampos(campoCor, 'Cor: #000000');
  });
  it('Verificando texto de email válido', async () => {
    await expect(element(by.id('text-cons-email-valido'))).toBeVisible();
  });
});
