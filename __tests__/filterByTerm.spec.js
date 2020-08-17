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


  test("it should not care UPERCASE filter by a search term (link)", () => {
    //Entradas
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    //Saida
    const output = [{ id: 3, url: "https://www.link3.dev" }];

    //Teste
    expect(filterByTerm(input, "LINK")).toEqual(output);
  });

  test("it should filter by a search term (link) but has to be https", () => {
    //Entradas
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
      { id: 4, url: "http://www.link3.dev" },
      { id: 5, url: "HTTPS://WWW.URL1.DEV" },
      { id: 6, url: "HTTPS://WWW.LINK6.DEV" },
    ];

    //Saida
    const output = [{ id: 3, url: "https://www.link3.dev" },
                    { id: 6, url: "https://www.link6.dev" }];

    //Teste
    expect(filterByTerm(input, "LINK")).toEqual(output);
  });


});
