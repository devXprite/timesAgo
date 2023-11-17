export = timesAgo;
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
declare function timesAgo(time: string | number | Date, options?: {
    now?: string | number | Date;
    prefixFromNow?: string;
    suffixAgo?: string;
    justNow?: string;
}): string;
//# sourceMappingURL=index.d.ts.map