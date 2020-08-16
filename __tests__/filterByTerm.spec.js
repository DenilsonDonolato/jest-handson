// .spec. é uma convenção para marcar uma funcionalidade especifica.

const { TestScheduler } = require("jest");
const filterByTerm = require("../module");

//Bloco de Test
describe("Filter function", () => {
  //test
  test("it should filter by a search term (link)", () => {
    //Entradas
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    //Saida
    const output = [{ id: 3, url: "https://www.link3.dev" }];

    //Teste
    expect(filterByTerm(input, "link")).toEqual(output);
  });
});
