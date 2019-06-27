//client side validation
const registerForm = document.querySelector('#registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        const password = document.querySelector('.register-pass').value;
        const passwordConf = document.querySelector('.register-passConf').value;
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
        } else if (password !== passwordConf) {
            alert('Passwords do not match!!');
        } else {
            registerForm.submit();
        }
    });
}

const postBg = document.querySelector('.post-bg');
const postForm = document.querySelector('#postForm');
if (postForm) {
    postForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        const postTitle = document.querySelector('.post-title-input').value;
        const postContent = document.querySelector('.post-content-input').value;
        if (postTitle === '' || postContent === '') {
            postBg.classList.remove('hide');
            alert('Post must not be empty');
        } else {
            postForm.submit();
        }
    });
}

//modal toggling
const togglePost = document.querySelector('.toggle-post');
const createPost = document.querySelector('.create-post');
const closeBtn = document.querySelector('.close-btn');

if (togglePost && postBg && createPost && closeBtn) {
    togglePost.addEventListener('click', function() {
        postBg.classList.remove('hide');
    });

    createPost.addEventListener('click', function() {
        postBg.classList.add('hide');
    });

    closeBtn.addEventListener('click', function() {
        postBg.classList.add('hide');
    });
}
