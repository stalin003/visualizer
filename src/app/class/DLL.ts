class Node {
    data;
    next;
    prev;
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

export class DLL {
    head;
    tail;
    length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        
    }
    
    push(val) {
        
        let newNode = new Node(val);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        
        this.length++;
        
    }
    
    pop() {
        
        let delNode = this.tail;
        
        if(!this.head) {
            return undefined;
        } else if(this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        
        delNode.prev = null;
        
        this.length--;
        return delNode.data;
        
    }
    
    shift() {
        
        let delNode = this.head;
        
        if(!this.head){
            return undefined;
        } else if(this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            
            this.head = this.head.next;
            this.head.prev = null;
        }
        
        delNode.next = null;
        
        this.length--;
        
        return delNode.data;
    }
    
    unShift(val) {
        if(!this.head) {
            this.push(val);
        } else {
            
            let newNode = new Node(val);
            
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            
            this.length++;
            
        }
    }
    
    get(index) {
        if(index < 0 || index > this.length) {
            return undefined;
        } else {
            let first = 0;
            let last = this.length;
            let middle = Math.floor((first+last)/2);
            
            let getNode = null;
            
            if(index > middle) {
                
                getNode = this.tail;
                
                while(index < this.length) {
                    
                    getNode = getNode.prev;
                    
                    index++;
                }
                
            } else {
                getNode = this.head;
                
                while(index > 0) {
                    
                    getNode = getNode.next;
                    index--;
                }
                
            }
            
            
            return getNode;
        }
    }
    
    
    set(index, value) {
        let newNode = this.get(index);
        
        if(!newNode) {
            return "unable to set";
        } else {
            newNode.data = value;
            return this;
        }
    }
    
    insert(index, value) {
        if(index < 0 || index >= this.length) {
            return undefined;
        } else if (index == 0) {
            this.unShift(value);
        } else {
            let first = 0;
            let last = this.length;
            let middle = Math.floor((first+last)/2);
            
            let newNode = new Node(value);
            
            let currNode = null;
            let prevNode = null;
            
            if(index > middle) {
                
                prevNode = this.tail;
                currNode = prevNode;
                
                while(index < this.length) {
                    currNode = prevNode;
                    prevNode = prevNode.prev;
                    
                    index++;
                }
                
            } else {
                
                currNode = this.head;
                prevNode = currNode;
                
                while(index > 0) {
                    prevNode = currNode;
                    currNode = currNode.next;
                    index--;
                }
                
            }
            
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = currNode;
            currNode.prev = newNode;
            
            this.length++;
            
        }
        
        return this;
    }
    
    
    traverse() {
        if(!this.head) {
            return null;
        }

        let tmp:HTMLDivElement[] = [];
        
        let newNode = this.head;
        
        while(newNode) {

            tmp.push(newNode.data);
            newNode = newNode.next;
        }


        return tmp;
        
    }
    
}