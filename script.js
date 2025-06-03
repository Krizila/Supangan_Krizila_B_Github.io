
let menuIcon = document.querySelector( '#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }); 
        }
});



    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

<script>
    const form = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('commentName').value.trim();
        const text = document.getElementById('commentText').value.trim();
        if(name && text) {
            const commentDiv = document.createElement('div');
            commentDiv.style.marginBottom = '1rem';
            commentDiv.innerHTML = `<strong style="color:var(--main-color);">${name}</strong><br><span style="color:var(--text-color);">${text}</span>`;
            commentsList.prepend(commentDiv);
            form.reset();
        }
    });
</script>