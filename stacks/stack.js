/**
 *  ========================================
 *              BASIC STACK
 *  ========================================= 
 * 
 * Storage format -     {   0: data,
*                           1: data,
                            .....
*                       }
 */

const MAX_STACK_CAPACITY = 3;
class Stack {
    constructor() {
        this._capacity = MAX_STACK_CAPACITY;
        this._top = -1;
        this._storage = {};
    }

    isEmpty = () => {
        if (this._top === -1) return true;

        return false;
    };

    isFull = () => {
        if (this._top === this._capacity - 1) return true;

        return false;
    };

    push = (data) => {
        
        if(this.isFull()) throw new Error("Stack is Full, you moron!")
        this._top++;
        this._storage[this._top] =  data;
        return this._top;
    }

    pop = () => {
        if(this.isEmpty()) throw new Error("Nothing in the stack");
        const temp = this._storage[this._top];
        delete this._storage[this._top]
        this._top--;
        return temp;
    }

    print = () => {
        return console.table(this._storage);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30)
stack.push(40)
stack.print();