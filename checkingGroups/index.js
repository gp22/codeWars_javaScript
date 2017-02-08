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

function groupCheck(s){

    const closing = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const opening = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let stack = [];

    for (const c of s) {
        // let c = array[i];
        // if c is an opening character, add it's closing character
        // to the beginning of checkOrder
        if (c in opening) {
            stack.unshift(opening[c]);
        } else if (c in closing) {
        // if c is a closing character, check if it's equal to the first
        // character of checkOrder
            if (stack[0] === c) {
                // if it is, remove the first character of checkOrder
                stack.shift();
            } else {
                // if it isn't, return false
                return false;
            }
        }
    }
    // is checkOrder empty? if it is return true, otherwise return false
    return (stack.length === 0) ? true : false;
 }
