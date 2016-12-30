// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
//
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
//
// Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

var register = {
    drawer: {
        '25': 0,
        '50': 0,
        '100': 0
    },

    getBalance: function() {
        var balance = 0;
        for (var billSlot in register.drawer) {
            balance += billSlot * register.drawer[billSlot];
        }
        return balance;
    },

    changeAvailable: function(moneyIn) {
        // if someone gives us $25: no change required
        if (moneyIn === 25) {
            return true;
            // if someone gives us $50: $25 change required
        } else if (moneyIn === 50 && register.drawer[25] >= 1) {
            return true;
            // if someone gives us $100: $75 change required (either (1)$50 and (1)$25 or (3)$25)
        } else if ((moneyIn === 100 && register.drawer[25] >= 3) ||
            (moneyIn === 100 && register.drawer[50] >= 1 && register.drawer[25] >= 1)) {
            return true;
        } else {
            return false;
        }
    },

    updateBalance: function(moneyIn) {
        // put moneyIn into drawer and subtract change
        if (moneyIn === 25) {
            register.drawer[25] += 1;
        } else if (moneyIn === 50) {
            register.drawer[50] += 1;
            register.drawer[25] -= 1;
        } else if (moneyIn === 100) {
            register.drawer[100] += 1;
            // if we have one 50 and one 25, give them as change
            if (register.drawer[50] >= 1 && register.drawer[25] >= 1) {
                register.drawer[50] -= 1;
                register.drawer[25] -= 1;
                // otherwise give 3 25's as change
            } else {
                register.drawer[25] -= 3;
            }
        }
    }
}

function tickets(peopleInLine) {
    for (var i = 0; i < peopleInLine.length; i++) {
        // determine if we can give correct change
        if (register.changeAvailable(peopleInLine[i])) {
            register.updateBalance(peopleInLine[i]);
        } else {
            return 'NO';
        }
    }
    return 'YES';
}
