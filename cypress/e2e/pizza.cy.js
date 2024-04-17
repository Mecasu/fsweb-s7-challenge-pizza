/*inputa bir metin giren test
 birden fazla malzeme seçilebilen bir test
 formu gönderen bir test 
 ve daha fazla test! */

describe("test-1", () => {
  it("sayfa-yukleme", () => {
    cy.visit("/");
  });

  it("anasayfa-buton-testi", () => {
    cy.visit("/");
    cy.get("[data-cy='home-button']").click();
    cy.url().should("eq", "http://localhost:3000/orderpizza");
  });
});
describe("test-2", () => {
  it("not-testi", () => {
    cy.visit("/");
    cy.get("[data-cy='home-button']").click();
    cy.get("[data-cy='not-cy']").type("Sipariş notu test");
  });
  it("checkbox-testi", () => {
    cy.visit("/");
    cy.get("[data-cy='home-button']").click();
    cy.get('[type="checkbox"]').eq(0).check();
    cy.get('[type="checkbox"]').eq(1).check();
    cy.get('[type="checkbox"]').eq(2).check();
    cy.get('[type="checkbox"]').eq(3).check();
  });
  it("toplam-siparis-testi", () => {
    cy.visit("/");
    cy.get("[data-cy='home-button']").click();
    cy.get("[type='radio']").eq(0).check();
    cy.get('[name="hamur"]').select(["İnce"]);
    cy.get('[type="checkbox"]').eq(0).check();
    cy.get('[type="checkbox"]').eq(1).check();
    cy.get('[type="checkbox"]').eq(2).check();
    cy.get('[type="checkbox"]').eq(3).check();
    cy.get("[data-cy='not-cy']").type("Sipariş notu test");
    cy.get("[name = 'ekle-btn']").click();
    cy.get("[id = 'confirm-button']").click();
    cy.url().should("eq", "http://localhost:3000/success");
  });
});
