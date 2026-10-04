export const comissaoService = (valor) => {
    if (valor < 100) {
        return 0;
    }
    if (valor < 500) {
        return valor * 0.01;
    }
    return valor * 0.05;
};
//# sourceMappingURL=comissao-service.js.map