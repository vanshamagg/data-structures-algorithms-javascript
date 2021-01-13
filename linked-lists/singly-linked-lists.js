class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.HEAD = null;
    }

    // insert at the end
    insertAtEnd = (data) => {
        if (this.HEAD === null) {
            this.HEAD = new Node(data);
        } else {
            let node = this.HEAD;
            // going to the last node
            while (node._next !== null) {
                node = node._next;
            }

            node._next = new Node(data);
        }
        return true;
    };

    // isnert at the end
    insertAtStart = (data) => {
        if (this.HEAD === null) {
            this.HEAD = new Node(data);
        } else {
            let temp = new Node(data);
            temp._next = this.HEAD;
            this.HEAD = temp;
        }
        return true;
    };

    // find index of an element
    find = (value) => {
        let node = this.HEAD;
        let count = 0;
        let prev =  null;
        while (node) {
            count++;
            if (node._data === value) return {index: count, node, prev};
            prev = node;
            node = node._next;
        }
        throw new Error("Given Value is not present");
    };

    //delete by value
    delete = (value) => {
        let search = this.find(value);
        // if we need to delete the head
        if(search.node === this.HEAD) {
            let temp = this.HEAD;
            this.HEAD = this.HEAD._next;
            temp._next = null;
            // delete temp;
        }
        else {
            let temp = search.node;
            let prev = search.prev;
            prev._next = temp._next;
            // delete temp;
        }
        return true;
    }

    print = () => {
        return console.dir(this.HEAD);
    };
}

const LL = new SinglyLinkedList();
// LL.insertAtEnd(10);
// LL.insertAtEnd(20);
// LL.insertAtEnd(30)
// LL.insertAtStart(5);
// // console.log(LL.find(30))
// LL.delete(20)

for(let i = 1; i<= 10; i++ )
    LL.insertAtEnd(i * 10);

// console.table(LL.find(20))

LL.print();
