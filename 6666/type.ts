class Book {
    static checkedOutCounter = 0;
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    static getCheckedOutCount() {
        return Book.checkedOutCounter;
    }

    checkOut() {
        Book.checkedOutCounter++;
    }

    renew() {
        console.log(`Renewed ${this.title}`);
    }
}

class RegularBook extends Book {
    renew() {
        super.renew();
        Book.checkedOutCounter++; // Renewing increments the counter
    }
}

class ReferenceBook extends Book {
    checkOut() {
        console.log(`Reference books cannot be checked out.`);
    }

    renew() {
        // Renewing does not increment the counter
        super.renew();
    }
}

class DigitalBook extends Book {
    checkOut() {
        // Digital books increment the counter only every second checkout
        if (DigitalBook.checkedOutCounter % 2 === 0) {
            super.checkOut();
        }
    }
}

const book1 = new RegularBook("1984", "George Orwell");
book1.checkOut();
book1.renew();

const book2 = new ReferenceBook("Encyclopedia of Science", "Various Authors");
book2.checkOut();
book2.renew();

const book3 = new DigitalBook("Digital Fortress", "Dan Brown");
book3.checkOut();
const book4 = new DigitalBook("The Road Ahead", "Bill Gates");
book4.checkOut();

console.log(Book.getCheckedOutCount());