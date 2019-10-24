//listen for auth status changes
auth.onAuthStateChanged(user =>{ 
    if(user){
        db.collection('messages').onSnapshot(snapshot =>{
            setupMessages(snapshot.docs);
            setupUI(user);
        }, err =>{
            console.log(err.message);
        });
    }
    else{
        setupUI();
        setupMessages([]);
    }
});

//create new video upload
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    db.collection('messages').add({
        title: createForm.title.value,
        content: createForm.content.value
    }).then(() =>{
        //close modal reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err =>{
        console.log(err.message);
    })
});

//sign up 
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

// logout

const logout = document.querySelector('#logout');

logout.addEventListener('click',(e) =>{
    e.preventDefault();

    auth.signOut();
});


//login
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});