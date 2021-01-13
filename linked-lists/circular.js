// SINGLY CIRCULAR

class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }
}

class SinglyCircularLinkedList {
    constructor() {
        this.HEAD = null;
    }

    insertAtEnd = (data) => {
        // if HEAD is empty
        if (!this.HEAD) {
            this.HEAD = new Node(data);
            this.HEAD._next = this.HEAD;
            return true;
        }

        // if head is not empty
        let node = this.HEAD;
        // locate the last node
        while (node._next !== this.HEAD) {
            node = node._next;
        }
        let temp = new Node(data);
        node._next = temp;
        temp._next = this.HEAD;

        return true;
    };

    insertAtStart = (data) => {
        // if HEAD is NULL
        if (!this.HEAD) {
            this.HEAD = new Node(data);
            this.HEAD._next = this.HEAD;
            return true;
        }

        // if HEAD is not null, new HEAD then!!

        let tail = this.HEAD;

        // find the tail
        while (tail._next !== this.HEAD) {
            tail = tail._next;
        }

        let temp = new Node(data);
        temp._next = this.HEAD;
        tail._next = temp;
        this.HEAD = temp;

        // console.log("NODE DATA", node._data);
    };

    print = () => {
        return console.dir(this.HEAD);
    };

    values = () => {
        let node = this.HEAD._next;
        let index = 0;
        let storage = {};

        storage[index] = this.HEAD._data;
        index++;

        while (node !== this.HEAD) {
            storage[index] = node._data;
            index++;
            node = node._next;
        }
        return storage;
    };
}

const CLL = new SinglyCircularLinkedList();
CLL.insertAtEnd(10);
CLL.insertAtEnd(20);
CLL.insertAtStart(30);
// CLL.insertAtEnd(40)
CLL.print();
// console.table(CLL.values());
