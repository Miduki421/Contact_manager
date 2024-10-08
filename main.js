// const person={
//     name:"Miduki",
//     age:23,
//     greet: function(){
//         console.log("Hello my name is " + this.name);
//     }
// };
// person.greet();

// const friend={
//     name: "Lorde Miduki",
//     phone: "0757743478",
//     email: "hachi@gmail.com"
// };
// console.log(friend.phone);
// console.log(friend.phone="0105598445");
// for(let key in friend){
//     console.log(key + ": " +friend[key]);
// }


// const book={
//     title: "JavaScript Book",
//     author: "Miduki",
//     yearOfPublish:"2023"
// };
// console.log(book.title);



//GAME
// const player={
//     name: "hero",
//     health: 100,
//     position: {x:0, y:0},
//     move: function(x,y){
//         this.position.x +=x;
//         this.position.y +=y;
//     }
// };
// player.move(2,2);
// console.log(player.position);
// console.log(player.health=50);





let contacts = [];

// Function to add a contact
let addContact = () => {
    let name = prompt('Enter the Contact Name Here:');
    let phone = prompt("Enter the Contact's Phone number: ");
    let email = prompt("Enter the Contact's Email: ");

    if (name && phone && email) {
        let contact = {
            name: name,
            phone: phone,
            email: email
        };
        contacts.push(contact);
        alert('Contact added successfully');
    } else {
        alert('All fields are required');
    }
};

// Function to view contacts
let viewContacts = () => {
    let contactList = document.getElementById('contactList');
    contactList.innerHTML = ""; // Clear previous contacts
    if (contacts.length === 0) {
        alert("No Contacts Available");
    } else {
        contacts.forEach(contact => {
            let listItem = document.createElement('li');
            listItem.textContent =` Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email};
            contactList.appendChild(listItem)`;
        });
    }
};

// Function to search contact
let searchContact = () => {
    let searchName = prompt("Enter the name of the contact: ");
    let found = false;
    
    contacts.forEach(contact => {
        if (contact.name.toLowerCase() === searchName.toLowerCase()) {
            alert(`Contact Found: Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`); // Removed extra parenthesis
            found = true;
          }
    });
    
    if (!found) {
        alert("Contact not found");
    }
};

// Function to delete a contact
let deleteContact = () => {
    let deleteName = prompt("Enter the name of the contact to delete: ");
    let indexToDelete = -1;

    contacts.forEach((contact, index) => {
        if (contact.name.toLowerCase() === deleteName.toLowerCase()) {
            indexToDelete = index;
        }
    });

    if (indexToDelete !== -1) {
        contacts.splice(indexToDelete, 1);
        alert("Contact deleted successfully");
        viewContacts(); // Refresh the contact list
    } else {
        alert("Contact not found");
    }
};

// Event listeners for buttons
document.getElementById('addContactBtn').addEventListener('click', addContact);
document.getElementById('viewContactsBtn').addEventListener('click', viewContacts);
document.getElementById('searchContactBtn').addEventListener('click', searchContact);
document.getElementById('deleteContactBtn').addEventListener('click', deleteContact);
