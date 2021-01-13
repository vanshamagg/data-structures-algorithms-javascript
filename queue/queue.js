const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require("constants");

/**
 * ==============================================================
 *                           QUEUE DS
 * ==============================================================
 *
 *
 */
const MAX_SIZE = 5;
class Queue {
    constructor() {
        this._front = -1;
        this._rear = -1;
        this._storage = {};
        this._capacity = MAX_SIZE;
    }

    size = () => {
        return this._rear - this._front + 1;
    };

    isEmpty = () => {
        return this._front === -1 && this._rear === -1;
    };

    isFull = () => {
        return this.size() === this._capacity;
    };

    enqueue = (data) => {
        // if queue is full
        if (this.isFull()) throw new Error("Overflow");

        // if queue is empty
        if (this._front === -1 && this._rear === -1) {
            this._front++;
            this._rear++;
            this._storage[this._rear] = data;
            return true;
        }

        // if queue is not empty
        this._rear++;
        this._storage[this._rear] = data;
        return true;
    };

    dequeue =  () => {
        
        // if qu is empty
        if(this.isEmpty()) throw new Error("Underflow");

        let data;

        // if there is only one element in the qu
        if(this._front === this._rear) {
            data = this._storage[this._front];
            delete this._storage[this._front];
            this._front = this._rear = -1;
            return data;
        }

        // if there are more than 1 elements in the qu
        data = this._storage[this._front];
        delete this._storage[this._front];
        this._front++;
        return data;
    }

    print = () => {
        return console.table(this._storage);
    };

    
}

const q1 = new Queue();

q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);
q1.enqueue(50);
q1.dequeue()
q1.enqueue(50);
q1.dequeue()

console.log("REAR", q1._rear);
console.log("FRONT", q1._front);
console.log("SIZE", q1.size());

q1.print();
