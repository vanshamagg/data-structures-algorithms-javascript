class Node {
    constructor(_data, _left = null, _right = null) {
        this._data = _data;
        this._left = _left;
        this._right = _right;
    }
}

class BST {
    constructor() {
        this._root = null;
    }

    add(_data) {
        // check the _root first
        const node = this._root;
        if (node === null) {
            this._root = new Node(_data);
            return;
        } else {
            const traverseTree = (node) => {
                // _left traversal
                if (_data <= node._data) {
                    // if there's no _left node, create one and exit
                    if (node._left === null) {
                        node._left = new Node(_data);
                        return;
                    } else {
                        // if there a _left node, recursively check that one
                        return traverseTree(node._left);
                    }
                } else {
                    // we check the _right node
                    // if there is no _right node, we create one
                    if (node._right === null) {
                        node._right = new Node(_data);
                        return;
                    } else {
                        // there is a _right node already, so recursively check
                        return traverseTree(node._right);
                    }
                }
            };
            return traverseTree(node);
        }
    }

    findMin = () => {
        let current = this._root;
        while (current._left !== null) {
            // console.log(current._data);
            current = current._left;
        }
        return current._data;
    };

    findMax = () => {
        let current = this._root;
        while (current._right) {
            current = current._right;
        }
        return current._data;
    };
    print = () => {
        return console.dir(this._root);
    };

    isPresent = (data) => {
        let current = this._root;
        while (current) {
            if (current._data === data) return true;

            if (data > current._data) current = current._right;
            else current = current._left;
        }

        return false;
    };

    finMinHeight =  (node = this._root) =>  {
        
    }
}

const mybst = new BST();
mybst.add(12);
mybst.add(11);
mybst.add(13);
mybst.add(9);
mybst.add(1);
console.log(mybst.findMin());
console.log("MAX", mybst.findMax());
console.log(mybst.isPresent())
// mybst.print();
