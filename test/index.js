const chai = require('chai');
const { expect } = chai;
const timesAgo = require('../dist/timesago');

describe('timesAgo', () => {
    it('should return justNow for current timestamp', () => {
        const result = timesAgo(Date.now());
        expect(result).to.equal('just now');
    });

    it('should return proper time difference for past timestamps', () => {
        const result1 = timesAgo(Date.now() - 1000 * 60 * 60 * 2 ); // 2 hours ago
        const result2 = timesAgo(Date.now() - 1000 * 60 * 60 * 24 * 5 ); // 5 days ago
        const result3 = timesAgo(Date.now() - 1000 * 60 * 60 * 24 * 30 * 3 ); // 3 months ago
        const result4 = timesAgo(Date.now() - 1000 * 60 * 60 * 24 * 30 * 15 ); // 1 year ago
        const result5 = timesAgo(Date.now() - 1000 * 15 ); // 15 seconds ago

        expect(result1).to.equal('2 hours ago');
        expect(result2).to.equal('5 days ago');
        expect(result3).to.equal('3 months ago');
        expect(result4).to.equal('1 year ago');
        expect(result5).to.equal('15 seconds ago');
    });

    it('should return proper time difference for future timestamps', () => {
        const result1 = timesAgo(Date.now() + 1000 * 60 * 60 * 3); // 3 hours from now
        const result2 = timesAgo(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days from now
        const result3 = timesAgo(Date.now() + 1000 * 60 * 60 * 24 * 30 * 2); // 2 months from now
        const result4 = timesAgo(Date.now() + 1000 * 60 * 60 * 24 * 30 * 75); // 6 year from now
        const result5 = timesAgo(Date.now() + 1000 * 60 * 42); // 42 minutes from now

        expect(result1).to.equal('in 3 hours');
        expect(result2).to.equal('in 1 week');
        expect(result3).to.equal('in 2 months');
        expect(result4).to.equal('in 6 years');
        expect(result5).to.equal('in 42 minutes');
    });

    it('should handle invalid timestamp gracefully', () => {
        const result = timesAgo('invalid timestamp');
        expect(result).to.equal('INVALID TIMESTAMP');
    });

    it('should handle timestamps in the future with custom options', () => {
        const customOptions = {
            now: Date.now(),
            prefixFromNow: 'after',
            justNow: 'right now',
        };

        const result = timesAgo(Date.now() + 1000 * 60 * 60 * 3, customOptions); // 3 hours from now
        expect(result).to.equal('after 3 hours');
    });
});
