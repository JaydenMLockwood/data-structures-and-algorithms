class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
    function traversal(head){
        let current = head;

        while(current !== null){

            console.log(current.data);

            current = current.next;
        }
        console.log("");
    }


