const { expect } = require('chai');
const Mtrx = require('mtrx');

describe('Mtrx library basic tests', function() {

    // Створення матриці
    it('should create a matrix with correct dimensions', function() {
        const mat = new Mtrx([[1,2,3],[4,5,6]]);
        expect(mat.rows).to.equal(2);  
        expect(mat.cols).to.equal(3);    
    });

    // Додавання матриць
    it('should add two matrices correctly', function() {
        const a = new Mtrx([[1,2],[3,4]]);
        const b = new Mtrx([[5,6],[7,8]]);
        const result = a.add(b); 
        expect(result).to.deep.equal([[6,8],[10,12]]);
    });

    // Множення матриць
    it('should multiply two matrices correctly', function() {
        const a = new Mtrx([[1,2],[3,4]]);
        const b = new Mtrx([[2,0],[1,2]]);
        const result = a.rightMul(b);  // a * b
        expect(result).to.deep.equal([[4,4],[10,8]]);
    });

    // Транспонування
    it('should transpose matrix correctly', function() {
        const a = new Mtrx([[1,2,3],[4,5,6]]);
        const result = a.T();
        expect(result).to.deep.equal([[1,4],[2,5],[3,6]]);
    });

    // Заповнення нулями
    it('should fill matrix with zeros correctly', function() {
        const mat = Mtrx.zeros(2,2);
        expect(mat).to.deep.equal([[0,0],[0,0]]);
    });

    // Клонування та порівняння
    it('should clone and compare matrices correctly', function() {
        const a = new Mtrx([[1,2],[3,4]]);
        const b = Mtrx.clone(a);             
        expect(Mtrx.equalAll(a, b)).to.be.true;
    });

    // Перевірка одиничної матриці
    it('should create identity matrix correctly', function() {
        const mat = Mtrx.eye(3);
        expect(mat).to.deep.equal([[1,0,0],[0,1,0],[0,0,1]]);
    });

    // Перевірка властивостей
    it('should have correct properties', function() {
        const a = new Mtrx([[1,2],[3,4]]);
        expect(a.rows).to.equal(2);
        expect(a.cols).to.equal(2);
        expect(a.rank).to.equal(2);
        expect(a.det).to.equal(-2);
    });

});
