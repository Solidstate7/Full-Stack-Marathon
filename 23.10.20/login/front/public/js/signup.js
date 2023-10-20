const signup = async (userinfo) => {
    try {
        const { data } = await axios.post(
            "http://localhost:4000/users",
            userinfo
        );
        if (data.inserted) {
            location.href = "/";
        }
    } catch (e) {
        console.log(e.message);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const frm = document.querySelector(`#frm`);
    frm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e.target);

        const {
            userid: { value: userid },
            userpw: { value: userpw },
            username: { value: name },
        } = e.target;

        console.log(userid, userpw, name);
        const userinfo = { userid, userpw, name };
        signup(userinfo);
    });
});
