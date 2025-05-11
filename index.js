/**
 * One yard is 0.9144 meters.
 * @param {number} yards
 * @returns {number} the given distance in `yards` converted to meters
 */
function convertToMeters(yards) {}

/**
 * Describes the given distance after converting it from yards to meters.
 * - If the distance is greater than 1000 meters, it's longer than a kilometer.
 * - If the distance is greater than 100 meters, it's longer than a hectometer.
 * - If the distance is greater than 10 meters, it's longer than a decameter.
 * - Otherwise, the distance is longer than a sandwich.
 * @example
 * describeDistance(100);
 * // Returns "100 yards is 91.44 meters, which is longer than a decameter!"
 * @param {number} yards
 * @returns {string} A description of the given distance.
 */
function describeDistance(yards) {
  let code01;
  code01 = 7 + 3;
  let code02 = 120 / 2 - 20;
  let code03 = 19 * 2 + (9 % 2);
  let message = "The vault has been secured. The combination is:";
  let codeA = code01 + "-" + code02 + "-" + code03;
  let codeB = `${code1}-${code2}-${code3}`;
  console.log(message + codeA + code03);
}
