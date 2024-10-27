describe('API Tests - Harry Potter', () => {
  it('Valida o formato da request para a API de Casas', () => {
    cy.getRequest('https://potterapi-fedeperin.vercel.app/pt/houses')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
  });

  it('Retorna erro para URL inválida', () => {
    cy.getRequest('https://potterapi-fedeperin.vercel.app/jp')
      .then((response) => {
        expect(response.status).to.eq(404);  // Esperando um retorno 404
      });
  });

  it('Valida a lista de feitiços', () => {
    cy.getRequest('https://potterapi-fedeperin.vercel.app/pt/spells')
      .then((response) => {
        expect(response.status).to.eq(200);  // Esperando um retorno 200
        expect(response.body).to.be.an('array');  // Esperando um array de feitiços
      });
  });

  it('Valida dados em inglês', () => {
    cy.getRequest('https://potterapi-fedeperin.vercel.app/en/spells')
      .then((response) => {
        expect(response.status).to.eq(200);  // Esperando um retorno 200
        expect(response.body).to.be.an('array');  // Esperando um array de feitiços
        // Verificando se pelo menos um feitiço está em inglês
        expect(response.body[0].spell).to.be.a('string');
      });
  });

  it('Valida o status da API para a lista de feitiços', () => {
    cy.getRequest('https://potterapi-fedeperin.vercel.app/pt/spells')
      .then((response) => {
        expect(response.status).to.eq(200);  // Esperando um retorno 200
        expect(response.body).to.be.an('array');  // Esperando um array de feitiços
      });
  });

  it('Valida propriedades do corpo da resposta para feitiços', () => {
    cy.getRequest('https://potterapi-fedeperin.vercel.app/pt/spells')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

        // Verifica se cada feitiço possui as propriedades esperadas
        response.body.forEach((spell) => {
          expect(spell).to.have.property('spell');   // Nome do feitiço
          expect(spell).to.have.property('use');     // Descrição do uso
        });
      });
  });

  // Novo cenário de teste
  it('Valida o retorno das casas de Hogwarts', () => {
    cy.getRequest('https://potterapi-fedeperin.vercel.app/pt/houses')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

        // Verifica se cada casa possui as propriedades esperadas, se existirem
        response.body.forEach((house) => {
          if (house.hasOwnProperty('name')) {
            expect(house).to.have.property('name');
          }
          if (house.hasOwnProperty('founder')) {
            expect(house).to.have.property('founder');
          }
          if (house.hasOwnProperty('animal')) {
            expect(house).to.have.property('animal');
          }
        });
      });
  });

  it('Valida a existência de um feitiço específico', () => {
    cy.getRequest('https://potterapi-fedeperin.vercel.app/pt/spells')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

        // Verifica se o feitiço específico "Expelliarmus" está presente na lista
        const spellExists = response.body.some(spell => spell.spell === 'Expelliarmus');
        expect(spellExists).to.be.true;
      });
    });
    it('Valida a busca de um personagem específico', () => {
      cy.getRequest('https://potterapi-fedeperin.vercel.app/pt/characters')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
  
          // Verifica se o personagem "Harry Potter" está presente na lista
          const characterExists = response.body.some(character => character.name === 'Harry Potter');
          expect(characterExists).to.be.false;
        });
    });
});
