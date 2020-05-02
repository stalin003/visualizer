class Node {
    val: HTMLDivElement;
    next: HTMLDivElement;
    constructor(val: HTMLDivElement) {
        this.val = val;
        this.next = null;
    }
}

export class SingleLinkedList {

    head = null;
    tail = null;
    length = 0;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        let newNode = new Node(val);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        
        return this;
    }
    
    traverse() {
        let tmp:HTMLDivElement[] = []
        
        let search = this.head;
        
//                while(this.head) {
//                    console.log(this.head.val);
//                    this.head = this.head.next; 
//                }
        
        while (search) {
            // console.log(search.val);
            tmp.push(search.val);
            search = search.next;
        }
        return tmp;
    }
    
    pop() {
        
        if(!this.head) {
            return undefined;
        }
        
        let curNode = this.head;
        let prevNode = curNode;
        
        while(curNode.next) {
            prevNode = curNode;
            curNode = curNode.next;
//                    console.log("p ", prevNode.val);
//                    console.log("c ", curNode.val);
        }
        
        this.tail = prevNode;
        this.tail.next = null;
        this.length--;
        
        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        
        return curNode.val;
        
    } 



    shift() {
        if(!this.head) {
            return undefined;
        }
        
        let delNode = this.head;
        this.head = this.head.next;
        delNode.next = null;
        
        this.length--;
        
        if(this.length == 0) {
            this.tail = null;
        }
        
        return delNode.val;

    }
    
    unShift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            
            newNode.next = this.head;
            this.head = newNode;
            
        }
        
        this.length++;
        
        return this;
    }
    
    get(val) {
        if(val < 0 || val > this.length) {
            return null;
        } else {
            let newNode = this.head;
            
            while( val > 0 ) {
                newNode = newNode.next;
                val--;
            }
            
            return newNode;
            
        }
    }
    
    
    set(index, data) {
        
        let newNode = this.get(index);
        
        if(!newNode) {
            return "cant set";
        } else {
            newNode.val = data;
        }
        
        return this;
        
    }
    
    
    insert(index, value) {
        if(index < 0 || index >= this.length) {
            return false;
        } else if (index == 0) {
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
        } else if (index == this.length - 1) {
            
            let newNode = new Node(value);
            let currentNode = this.head;
            let prevNode = currentNode;
            
            while(currentNode.next) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            
            prevNode.next = newNode;
            newNode.next = currentNode;
            
        } else {
            let newNode = new Node(value);
            
            let currentNode = this.head;
            let prevNode = currentNode;
            
            while(index > 0) {
                
                prevNode = currentNode;
                currentNode = currentNode.next;
                
                index--;
            }
            
            prevNode.next = newNode;
            newNode.next = currentNode;
            
        }
        
        this.length++;
        return true;
    }
    
    
    remove(index) {
        if(index < 0 || index >= this.length) {
            return undefined;
        } else if (index == 0) {
            return this.shift();
        } else if (index == this.length - 1) {
            return this.pop();
        } else {
            
            let currentNode = this.head;
            let prevNode = currentNode;
            
            while(index > 0) {
                
                prevNode = currentNode;
                currentNode = currentNode.next;
                
                index--;
            }
            
            let deltNode = currentNode;
            
            prevNode.next = currentNode.next;
            deltNode.next = null;
            this.length--;
            
            return deltNode.val;
        }
    }





}