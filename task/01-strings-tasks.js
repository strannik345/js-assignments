'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/



/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
    return value1+value2;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
    return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
    return value.slice(7, value.length-1);
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
    return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
    return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
    let arr=[];
    arr.length=count;
    return arr.fill(value).join('');
}

/**
 * Remove the first occurrence of string inside another string
 * 
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
    return str.replace(RegExp('('+value+')'),'');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
    return str.substr(1,str.length-2);
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
    return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' => ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
    return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example  
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
    let left_top='┌';
    let left_bottom='└';
    let right_top='┐';
    let right_bottom='┘';
    let vertical='│';
    let horizontal='─';
    let str=left_top;
    for(let i=0;i<height;i++)
    {
        if(i!=0 && i!=height-1) str += vertical;
        if(i==height-1) str += left_bottom;
        for(let j=1;j<width-1;j++)
        {
            if(i==0 || i==height-1) str += horizontal;
            else str += ' '
        }
        if(i==0) str += right_top;
        else if(i==height-1) str += right_bottom;
        else str += vertical;
        str += '\n'
    }
    return str;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
    let new_str='';
    for(let i in str)
    {        
        if(str[i].charCodeAt()>64 && str[i].charCodeAt()<78) new_str += String.fromCharCode(str[i].charCodeAt()+13);
        else if(str[i].charCodeAt()>77 && str[i].charCodeAt()<91) new_str += String.fromCharCode(str[i].charCodeAt()-13);
        else if(str[i].charCodeAt()>96 && str[i].charCodeAt()<110) new_str += String.fromCharCode(str[i].charCodeAt()+13);
        else if(str[i].charCodeAt()>109 && str[i].charCodeAt()<123) new_str += String.fromCharCode(str[i].charCodeAt()-13);
        else new_str += str[i];
    }
    return new_str;
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
    if(value===undefined || value === null) return false;
    return value.__proto__.hasOwnProperty('toLowerCase');    
}


/**
 * Returns playid card id.
 * 
 * Playing cards inittial deck inclides the cards in the following order:
 * 
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 * 
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 * 
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1 
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
    switch(value){
        case 'A♣':
            return 0;
        case '2♣':
            return 1;
        case '3♣':
            return 2;
        case '4♣':
            return 3;
        case '5♣':
            return 4;
        case '6♣':
            return 5;
        case '7♣':
            return 6;
        case '8♣':
            return 7;
        case '9♣':
            return 8;
        case '10♣':
            return 9;
        case 'J♣':
            return 10;
        case 'Q♣':
            return 11;
        case 'K♣':
            return 12;
        case 'A♦':
            return 13;
        case '2♦':
            return 14;
        case '3♦':
            return 15;
        case '4♦':
            return 16;
        case '5♦':
            return 17;
        case '6♦':
            return 18;
        case '7♦':
            return 19;
        case '8♦':
            return 20;
        case '9♦':
            return 21;
        case '10♦':
            return 22;
        case 'J♦':
            return 23;
        case 'Q♦':
            return 24;
        case 'K♦':
            return 25;
        case 'A♥':
            return 26;
        case '2♥':
            return 27;
        case '3♥':
            return 28;
        case '4♥':
            return 29;
        case '5♥':
            return 30;
        case '6♥':
            return 31;
        case '7♥':
            return 32;
        case '8♥':
            return 33;
        case '9♥':
            return 34;
        case '10♥':
            return 35;
        case 'J♥':
            return 36;
        case 'Q♥':
            return 37;
        case 'K♥':
            return 38;
        case 'A♠':
            return 39;
        case '2♠':
            return 40;
        case '3♠':
            return 41;
        case '4♠':
            return 42;
        case '5♠':
            return 43;
        case '6♠':
            return 44;
        case '7♠':
            return 45;
        case '8♠':
            return 46;
        case '9♠':
            return 47;
        case '10♠':
            return 48;
        case 'J♠':
            return 49;
        case 'Q♠':
            return 50;
        case 'K♠':
            return 51;
    }
}


module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
};
