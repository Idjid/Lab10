let contacts = [ 
    {
    name: "Maxwell Wright", 
    phone: "019171916495", 
    email: "contact1@cctb.com" }, 
    
    { 
    name: "Raja Villarreal", 
    phone: "0863982895", 
    email: "contact2@cctb.com" 
    }, 
    { 
    name: "Helen Richards", 
    phone: "080031111", 
    email: "contact3@cctb.edu" } 
];

//Dynamic Background Color:
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}
setInterval(changeBackgroundColor, 5000);

//Function to Add New Contacts:
function myFunction() {
    let userChoice;
    let contacts = [];

    do {
        userChoice = prompt("Choose an option: new, or quit");
        if (userChoice === "new") {
            let newName = prompt("Enter name:");
            let newPhone = prompt("Enter phone number:");
            let newEmail = prompt("Enter email address:");

            if (!newName || isNaN(newPhone) || !newEmail.includes("@")) {
                alert("Invalid input. Please try again.");
                continue;
            }

            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });
            let contact_list = document.getElementById("contact_list");
            for (let i=0; i < contacts.length; i++) {
                contact_list.innerHTML += "<li class='list-group-item'>" 
                + contacts[0]["name"] + " / " 
                + contacts[0]["phone"] + " / " 
                + contacts[0]["email"] + "</li>";
            }
            console.log("New contact added: " + newName + " " + newPhone);
        } 
        
        else if (userChoice === "quit") {
            break;
        }
} while (true);
}

//Function with Callback:
const processContacts = (contacts, callback) => {
    contacts.forEach(contact => {
        callback(contact);
    });
};
const displayContactDetails = (contact) => {
    console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
};
processContacts(contacts, displayContactDetails);

//setTimeout:
const updateContactListDisplay = () => {
    console.log("Updating contact list display...");
    processContacts(contacts, displayContactDetails);
};
setTimeout(updateContactListDisplay, 3000); 

//setInterval
const logContactCount = () => {
    console.log(`Total Contact number: ${contacts.length}`);
};
setInterval(logContactCount, 5000);

//Recursion:
function searchContactByName(contacts, name, index) {
    if (index >= contacts.length) {
        return null;
    }
    if (contacts[index].name.toLowerCase() === name.toLowerCase()) {
        return contacts[index];
    }

    return searchContactByName(contacts, name, index + 1);
}
function searchContacts() {
    let searchMore;
    let indexNew = 0;

    do {
        let name = prompt("Enter the name of the contact you want to search for:");

        let contact = searchContactByName(contacts, name, indexNew);

        if (contact) {
            alert(`Contact found: Name: ${contact.name}, Phone: ${contact.phone}`);
        } else {
            alert(`Contact not found.`);
        }
        indexNew++;
    } while (indexNew < contacts.length);
}
searchContacts();