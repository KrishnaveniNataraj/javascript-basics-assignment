/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (no_of_lines) => {
  let starPyramid ='';
  if (parseInt(no_of_lines, 8)) {
    
  }
    for (var i = 1; i <= no_of_lines; i++) {
      for (var j = 1; j <= (no_of_lines - i); j++) {
        starPyramid += " ";
      }
      for (var k = 1; k <= i; k++) {
        starPyramid += " *";
      }
      starPyramid += "  \n";
    }
    return starPyramid;
  
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
