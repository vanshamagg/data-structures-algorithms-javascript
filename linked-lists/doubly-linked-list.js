class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.HEAD = null;
    }

    insertAtEnd = (data) => {
        if (!this.HEAD) this.HEAD = new Node(data);
        else {
            // traverse to the tail
            let node = this.HEAD;
            while (node.next) {
                node = node.next;
            }
            let temp = new Node(data);
            node.next = temp;
            temp.prev = node;
        }
        return true;
    };

    insertAtStart = (data) => {
        let temp = new Node(data);
        temp.next = this.HEAD;
        this.HEAD.prev = temp;
        this.HEAD = temp;

        return temp;
    };

    // start to end traversal
    find = (value) => {
        let index = 0;
        let node = this.HEAD;

        while (node) {
            if (node.data === value) return { index, node };
            index++;
            node = node.next;
        }

        throw new Error("Value not in the list.");
    };

    // delete by value
    delete = (value) => {
        const search = this.find(value);
        // if the node is HEAD
        if (search.node === this.HEAD) {
            this.HEAD = this.HEAD.next;
            return true;
        }
        let node = search.node;

        // if the node is TAIL (end)
        if (node.next === null) {
            node.prev.next = null;
            return true;
        }

        // some intermediate node
        node.prev.next = node.next;
        node.next.prev = node.prev;

        return true;
    };
    
    // prints the entire DLL
    print = () => {
        return console.dir(this.HEAD);
    };

    // only returns the indices and the data of the nodes
    values = () => {
        let node = this.HEAD;
        let storage = {};
        let count = 0;
        while (node) {
            storage[count] = node.data;
            count++;
            node = node.next;
        }
        return storage;
    };
}

const DLL = new DoublyLinkedList();
DLL.insertAtEnd(10);
DLL.insertAtEnd(20);
DLL.insertAtEnd(30);
DLL.insertAtStart(5);
// console.log("FIND", DLL.find(30));
// DLL.delete(10);
DLL.delete(30)
console.table(DLL.values());
// DLL.print();
