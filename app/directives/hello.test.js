export default ngModule => {
    describe('hello', () => {
        beforeEach(window.module(ngModule.name));
    });

    it('should test properly', () => {
        expect(false).to.be.true
    });
}

// module.exports = function(ngModule){

// }