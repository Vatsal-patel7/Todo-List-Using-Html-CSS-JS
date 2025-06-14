let todo = [];

let req = prompt("Enter your request:");
req = req.toLowerCase();
while(true){
    if(req == "quit"){
        console.log("Thanks for using Todo");
        break;
    }

    if(req == "list"){
        console.log("------------");
        for(task of todo){
            console.log(task);
        }
        console.log("------------");
    }
    else if(req == "add"){
        let task = prompt("Enter a task");
        todo.push(task);
        console.log("Task added successfully");
    }
    else if(req == "delete"){
        let task = prompt("Enter the task number you want to delete.");
        todo.splice(task,1);
        console.log("task deleted successfully");
    }

    req = prompt("Enter your request:");
}