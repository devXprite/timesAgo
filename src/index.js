/**
 * Converts a timestamp to a human-readable "time ago" format.
 *
 * @param {string | number | Date}  time - The timestamp to convert
 * @param {Object} [options={}] - Additional options for customization.
 * @param {string | number | Date} [options.now=Date.now()] - The current timestamp.
 * @param {string} [options.prefixFromNow='in'] - The prefix for future timestamps.
 * @param {string} [options.suffixAgo='ago'] - The suffix for past timestamps.
 * @param {string} [options.justNow='just now'] - The label for timestamps within a minute.
 * @returns {string} - The formatted "time ago" string.
 * 
 * @example
 * const result = timesago('December 12, 2021');
 * console.log(result); // 2 years ago
 * 
 */

function timesago(time, options = {}) {
    const defaultOptions = {
        now: Date.now(),
        prefixFromNow: 'in',
        suffixAgo: 'ago',
        justNow: 'just now',
        blank: '',
    };

    const config = { ...defaultOptions, ...options };

    const intervals = {
        year: 60 * 60 * 24 * 365,
        month: 60 * 60 * 24 * 30,
        week: 60 * 60 * 24 * 7,
        day: 60 * 60 * 24,
        hour: 60 * 60,
        minute: 60,
        second: 1,
    };


    try {
        if (isNaN(new Date(time))) {
            throw new Error('Invalid timestamp provided.');
        }

        const timestamp = new Date(time).getTime();
        const difference = Math.abs(config.now - timestamp) / 1000;

        for (const [unit, seconds] of Object.entries(intervals)) {
            const interval = Math.floor(difference / seconds);

            if (interval >= 1) {
                return (
                    config[config.now < timestamp ? 'prefixFromNow' : 'blank'] + ' ' +
                    interval + ' ' +
                    unit + (interval === 1 ? '' : 's') + ' ' +
                    config[config.now > timestamp ? 'suffixAgo' : 'blank']
                ).trim();
            }
        }

        return config.justNow;
    } catch (error) {
        return 'INVALID TIMESTAMP';
    }
}

module.exports = timesago;