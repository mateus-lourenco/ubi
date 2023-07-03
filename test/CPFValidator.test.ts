import { CPFValidator } from "../src/CPFValidator";

let validator: CPFValidator;

beforeEach(() => {
    validator = new CPFValidator();
});

test("deve retornar false quando informado um cpf inválido", () => {
    const value: String = "";

    const expected = validator.isValidCPF(value);

    expect(expected).toBe(false);
})