const getAboutUsLink = require("./calculator");


describe('Test Language code_Expanded name to check for test suite_expand', function () {
//     it("Returns about-us for english language", () => {
//         expect(getAboutUsLink(process.env.ENGLISHCODE)).toBe("/about-us");
//     });
    
    it("Returns about-us for spanish language_Returns about-us for spanish language", () => {
        expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
    });
    
    // it("Fail case for english language", () => {
    //     expect(getAboutUsLink("en-Uws")).toBe("/about-us");
    // });

    // it("Fail case for spanish", () => {
    //     expect(getAboutUsLink("es-ES")).toBe("/acerca-dedddd");
    // });

    it("Returns meist for estonian language", () => {
        expect(getAboutUsLink("et")).toBe("/meist");
    });

    it("Returns about-us for czech language", () => {
        expect(getAboutUsLink("cs")).toBe("/o nás");
    });
  
    // it("Fail czech language", () => {
    //     expect(getAboutUsLink("cs")).toBe("/o nas");
    // })
    it("added new test newBranch wtestReturns about-us for czech language", () => {
        expect(getAboutUsLink("cs")).toBe("/o nás");
    });
    
    it('-should should detect odd number--', () => {
       const number = Math.floor(Math.random() * 10);
       const result = 11 % 2;
       expect(result).toBe(1);
    });
});

describe('By arjun-rathi suitwe', function () {
    it("Returns about-us for english language", () => {
        expect(getAboutUsLink(process.env.ENGLISHCODE)).toBe("/about-us");
    });
    
//     it('some test title', async () => {
//         for(let i = 0; i < 40000; i++) { 
//             const foo = true;
//             await new Promise((r) => setTimeout(r, 40000));
//             expect(foo).toBeDefined();
//         }
//    });
});

describe('New test suite', function () {
    it("new Returns about-us for english language", () => {
        expect(getAboutUsLink(process.env.ENGLISHCODE)).toBe("/about-us");
    });
});
