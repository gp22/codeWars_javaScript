/*
    In English and programming, groups can be made using symbols such as "()"
    and "{}" that change meaning. However, these groups must be closed in
    the correct order to maintain correct syntax.

    Your job in this kata will be to make a program that checks a string for
    correct grouping. For instance, the following groups are done correctly:

    ({})
    [[]()]
    [{()}]

    The next are done incorrectly

    {(})
    ([]
    [])

    A correct string cannot close groups in the wrong order, open a group but
    fail to close it, or close a group before it is opened.

    Your function will take an input string that may contain any of the
    symbols "()" "{}" or "[]" to create groups.

    It should return True if the string is empty or otherwise grouped
    correctly, or False if it is grouped incorrectly.
*/
'use strict';

const str = '[[]()]';
groupCheck(str);

 function groupCheck(s){

    const opening = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    const closing = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    let checkOrder = [];

    s.split('').forEach((c) => {
        // is the character an opening or closing character?
        // if it's an opening character, add it's closing character
        // to the beginning of checkOrder
        // if it's a closing character, check if it's equal to the first
        // character of checkOrder
        // if it isn't, return false
        // if it is, remove the first character of checkOrder and continue
        console.log(c);
    })
    // is checkOrder.length equal to 0 ? return true : return false;
   return false;
 }
